import React, { useState } from "react";
import { useChatContext } from "../hooks/useChatContext";
import "./MessageForm.scss";

export default function MessageForm() {
  const [msg, setMsg] = useState("");

  const { sendMessage } = useChatContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(msg);
    setMsg("");
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <textarea
        rows={4}
        id="msg"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 13) {
            handleSubmit();
          }
        }}
        type="text"
      />
      <button type="submit">Send</button>
    </form>
  );
}
