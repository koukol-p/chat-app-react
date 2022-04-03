import React from "react";
import MessageForm from "../components/MessageForm";
import Messages from "../components/Messages";
export default function Main() {
  return (
    <div>
      <div className="flex flex-col justify-center mx-8">
        <Messages />
        <MessageForm />
      </div>
    </div>
  );
}
