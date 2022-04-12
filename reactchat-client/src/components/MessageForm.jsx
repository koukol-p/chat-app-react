import React, { useState } from "react";
import { useChatContext } from "../hooks/useChatContext";

export default function MessageForm() {
  const [msg, setMsg] = useState("");

  const { sendMessage } = useChatContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(msg);
    setMsg("");
  };

  return (
    <form className="flex bg-orange-700 flex-col mt-2 py-4 px-6" onSubmit={handleSubmit}>
    
      <input
        id="msg"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 13) {
            handleSubmit();
          }
        }}
        className="border-cyan-500 border"
        type="text"
      />
      <button className="bg-orange-500 text-orange-50 mt-2 border-orange-800 border " type="submit">
        Send
      </button>
    </form>
  );
}
