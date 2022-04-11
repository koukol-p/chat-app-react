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
    <form className="flex flex-col mt-2" onSubmit={handleSubmit}>
      
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
      <button className="w-full bg-orange-700 text-orange-50 " type="submit">
        Send
      </button>
    </form>
  );
}
