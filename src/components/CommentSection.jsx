import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import "./CommentSection.css";

export default function CommentSection({ page }) {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [newComment, setNewComment] = useState("");

  // Fetch comments for this page
  useEffect(() => {
    async function fetchComments() {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("page", page)
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching comments:", error);
      else setComments(data);
    }

    fetchComments();
  }, [page]);

  // Post a new comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !newComment.trim()) return;

    const { data, error } = await supabase
      .from("comments")
      .insert([{ page, username, comment: newComment }])
      .select();

    if (error) console.error("Error posting comment:", error);
    else {
      setComments([data[0], ...comments]);
      setUsername("");
      setNewComment("");
    }
  };

  // Format timestamp
  const formatTimestamp = (ts) => {
    const date = new Date(ts);
    return date.toLocaleString();
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>

      <div className="comments-list">
        {comments.length === 0 ? (
          <p>No comments yet. Be the first!</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="comment">
              <strong>{c.username}:</strong> {c.comment} <br />
              <small>{formatTimestamp(c.created_at)}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
