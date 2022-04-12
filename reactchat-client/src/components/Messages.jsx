import React, { useEffect, useState } from "react";
import { useChatContext } from "../hooks/useChatContext";
import Message from "./Message";

export default function Messages() {
  const { messages } = useChatContext();
  console.log("MESSAGES PROPS", messages);
  return (
    <div className="overflow-scroll mt-3 mx-3 grow py-1 px-2 min-h-[260px] border-2 border-orange-700">
      {messages.map((m) => (
        <Message message={m} />
      ))}
    </div>
  );
}
