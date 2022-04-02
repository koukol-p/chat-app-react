import React, { useState } from "react";
import { useChatContext } from "../hooks/useChatContext";

export default function MessageForm({ sendMessage }) {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  const { messageFormSubmit } = useChatContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    messageFormSubmit(username, msg);
    setMsg("");
  };

  return (
    <form className="flex flex-col mt-2" onSubmit={handleSubmit}>
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
      <textarea
        id="msg"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 13) {
            handleSubmit();
          }
        }}
        className="border-cyan-500 border resize-none min-h-[90px]"
        type="text"
      />
      <button className="w-full bg-blue-500" type="submit">
        Send
      </button>
    </form>
  );
}
