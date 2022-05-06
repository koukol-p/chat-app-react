import React, { useEffect, useState } from "react";
import { useChatContext } from "../hooks/useChatContext";
import Message from "./Message";
import "./Messages.scss";
export default function Messages() {
  const { messages } = useChatContext();
  console.log("MESSAGES PROPS", messages);
  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} />
      ))}
    </div>
  );
}
