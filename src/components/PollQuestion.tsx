import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../supabaseClient";
import "./PollQuestion.css";

interface PollOption {
  id: number;
  question_id: number;
  option_text: string;
  votes: number;
  is_correct: boolean;
  voters: string[];
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
  const [userName, setUserName] = useState("");

  // Ask for name once
  useEffect(() => {
  const stored = localStorage.getItem("poll_global_username");

  if (!stored) {
    const name = prompt("Enter your name:") || "Anonymous";
    localStorage.setItem("poll_global_username", name);
    setUserName(name);
  } else {
    setUserName(stored);
  }
  }, []);

  const fetchPoll = useCallback(async () => {
    // Question
    const { data: qData } = await supabase
      .from("poll_questions")
      .select("*")
      .eq("id", questionId)
      .single();

    if (qData) setQuestion(qData.question_text);

    // Options
    const { data: optionsData } = await supabase
      .from("poll_options")
      .select("*")
      .eq("question_id", questionId)
      .order("id");

    // Votes with names
    const { data: votesData } = await supabase
      .from("poll_votes")
      .select("*")
      .eq("question_id", questionId);

    const mergedOptions =
      optionsData?.map((opt: any) => ({
        ...opt,
        voters: Array.from(
          new Set(
            votesData
              ?.filter((v) => v.option_id === opt.id)
              .map((v) => v.user_name)
          )
        ),
      })) ?? [];


    setOptions(mergedOptions);

    // The user's vote
    const { data: myVote } = await supabase
      .from("poll_votes")
      .select("*")
      .eq("question_id", questionId)
      .eq("user_id", userId)
      .maybeSingle();

    if (myVote) setUserVote(myVote.option_id);
  }, [questionId, userId]);

  // Realtime listener for poll_votes
  useEffect(() => {
  fetchPoll();

  const channel = supabase
    .channel(`poll-${questionId}`)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "poll_votes",
      },
      () => {
        fetchPoll(); // Refresh UI on any vote change
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, [fetchPoll, questionId]);

  // Voting logic
const handleVote = async (option: PollOption) => {
  setFeedback(option.is_correct ? "Correct!" : "Incorrect — try again!");

  if (userVote === option.id) {
    await supabase
      .from("poll_votes")
      .delete()
      .eq("question_id", questionId)
      .eq("user_id", userId);

    await supabase.rpc("decrement_vote", { option_id: option.id });

    setUserVote(null);
    await fetchPoll();
    return;
  }

  // Remove any previous vote
  await supabase.rpc("remove_previous_vote_for_user", {
    in_user_id: userId,
    in_question_id: questionId,
  });

  if (userVote) {
    await supabase.rpc("decrement_vote", { option_id: userVote });
  }

  // Insert new vote
  await supabase.from("poll_votes").insert({
    user_id: userId,
    user_name: userName,
    question_id: questionId,
    option_id: option.id,
  });

  await supabase.rpc("increment_vote", { option_id: option.id });

  setUserVote(option.id);
  await fetchPoll();
};

  const totalVotes = options.reduce((sum, o) => sum + o.votes, 0);

  return (
    <div className="poll-wrapper">
      <h3 className="poll-question">{question}</h3>

      <div className="poll-options">
        {options.map((opt) => {
          const percent =
            totalVotes === 0 ? 0 : Math.round((opt.votes / totalVotes) * 100);
          const isChosen = opt.id === userVote;

          return (
            <div
              key={opt.id}
              className={`poll-card ${isChosen ? "selected" : ""}`}
              onClick={() => handleVote(opt)}
            >
              <div className="poll-top">
                <p className="poll-text">{opt.option_text}</p>

                <p className="poll-percent">
                  {percent}% ({opt.votes} votes)
                </p>
              </div>

              <div className="poll-bar">
                <div
                  className="poll-bar-fill"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>

              {opt.voters.length > 0 && (
                <div className="poll-voters">
                  <strong>Chosen by:</strong> {opt.voters.join(", ")}
                </div>
              )}

              {isChosen && (
                <p className="your-vote">✓ Your vote ({userName})</p>
              )}
            </div>
          );
        })}
      </div>

      {feedback && <p className="poll-feedback">{feedback}</p>}
    </div>
  );
};

export default PollQuestion;
