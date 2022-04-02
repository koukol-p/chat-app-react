import React, { useEffect, useState } from "react";
import Message from "./Message";

export default function Messages({ socket, messages }) {
  console.log("MESSAGES PROPS", messages);
  return (
    <div className="overflow-scroll flex py-1 px-2 flex-col rounded-md min-h-[260px] max-h-[260px] border-2 border-cyan-700">
      {messages.map((m) => (
        <Message message={m} />
      ))}
    </div>
  );
}
