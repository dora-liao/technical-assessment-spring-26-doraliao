import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../supabaseClient";
import "./PollQuestion.css";

interface PollOption {
  id: number;
  question_id: number;
  option_text: string;
  votes: number;
  is_correct: boolean;
}

interface PollQuestionProps {
  questionId: number;
  userId: string;
}

const PollQuestion: React.FC<PollQuestionProps> = ({ questionId, userId }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<PollOption[]>([]);
  const [userVote, setUserVote] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const fetchPoll = useCallback(async () => {
    // get the question
    const { data: qData } = await supabase
      .from("poll_questions")
      .select("*")
      .eq("id", questionId)
      .single();

    if (qData) setQuestion(qData.question_text);

    // get options
    const { data: oData } = await supabase
      .from("poll_options")
      .select("*")
      .eq("question_id", questionId)
      .order("id");

    if (oData) setOptions(oData);

    // user vote
    const { data: vData } = await supabase
      .from("poll_votes")
      .select("*")
      .eq("question_id", questionId)
      .eq("user_id", userId)
      .maybeSingle();

    if (vData) setUserVote(vData.option_id);
  }, [questionId, userId]);

  // Realtime updates
  useEffect(() => {
    fetchPoll();

    const channel = supabase
    .channel(`poll-${questionId}`)
    .on(
        "postgres_changes",
        {
        event: "UPDATE",
        schema: "public",
        table: "poll_options",
        },
        (payload) => {
        const updated = payload.new as PollOption;

        // Only apply updates for this question
        if (updated.question_id !== questionId) return;

        setOptions((prev) =>
            prev.map((o) => (o.id === updated.id ? updated : o))
        );
        }
    )
    .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [questionId, fetchPoll]);

  const handleVote = async (option: PollOption) => {
    setFeedback(option.is_correct ? "Correct!" : "Incorrect — try again!");

    if (userVote === option.id) return;

    // decrement old
    if (userVote) {
      await supabase.rpc("decrement_vote", { option_id: userVote });
    }

    // increment new
    await supabase.rpc("increment_vote", { option_id: option.id });

    // update poll_votes
    await supabase.from("poll_votes").upsert({
      question_id: questionId,
      user_id: userId,
      option_id: option.id,
    });

    setUserVote(option.id);
  };

  return (
    <div className="poll-container">
      <h3 className="poll-question">{question}</h3>

      <div className="poll-options-grid">
        {options.map((option) => {
          const isChosen = userVote === option.id;

          return (
            <div
              key={option.id}
              className={`poll-option-card ${isChosen ? "selected" : ""}`}
              onClick={() => handleVote(option)}
            >
              <p className="option-text">{option.option_text}</p>
              <p className="option-votes">{option.votes} votes</p>
            </div>
          );
        })}
      </div>

      {feedback && (
        <p className="poll-feedback">{feedback}</p>
      )}
    </div>
  );
};

export default PollQuestion;
