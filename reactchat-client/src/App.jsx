import React, { useEffect, useState } from "react";
import MessageForm from "./components/MessageForm";
import Messages from "./components/Messages";
import { useChatContext } from "./hooks/useChatContext";

export default function App() {
  const { messages, socket } = useChatContext();

  return (
    <div className="flex flex-col justify-center mx-8">
      <Messages />
      <MessageForm />
    </div>
  );
}
