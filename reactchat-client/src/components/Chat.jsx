import React from "react";
import MessageForm from "./MessageForm";
import Messages from "./Messages";
import "./Chat.scss";
export default function Chat() {
  return (
    <div class="chat-container">
      <Messages />
      <MessageForm />
    </div>
  );
}
