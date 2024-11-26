// src/pages/ModeratorPanel.jsx

import { useState } from "react";

const ModeratorPanel = () => {
  const [message, setMessage] = useState("");

  const handleManagePosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/moderator/manage-posts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.text();
      setMessage(data);
    } catch (err) {
      setMessage("Failed to load post management.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", color: "white" }}>
      <h2 style={{ color: "grey" }}>Moderator Panel</h2>
      <button
        onClick={handleManagePosts}
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Manage Posts
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ModeratorPanel;
