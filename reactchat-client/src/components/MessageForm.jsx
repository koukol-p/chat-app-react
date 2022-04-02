import React, { useState } from "react";

export default function MessageForm({ sendMessage }) {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMsg = {
      type: "message",
      username,
      msg,
    };
    sendMessage(newMsg);
  };

  return (
    <form
      className="overflow-scroll flex flex-col mt-2"
      onSubmit={handleSubmit}
    >
      <label htmlFor="user" className="flex flex-row justify-between">
        Username:
      </label>
      <input
        id="msg"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-cyan-500 border"
        type="text"
      ></input>
      <label htmlFor="msg" className="flex flex-row justify-between">
        Message:
      </label>
      <input
        id="msg"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="border-cyan-500 border"
        type="text"
      />
      <button type="submit">Send</button>
    </form>
  );
}
