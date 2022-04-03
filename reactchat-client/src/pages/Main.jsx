import React from "react";
import MessageForm from "../components/MessageForm";
import Messages from "../components/Messages";
import Sidebar from "../components/Sidebar";
export default function Main() {
  return (
    <div className="flex h-screen">
      <div className="min-w-[210px]">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow justify-center mx-8">
        <Messages />
        <MessageForm />
      </div>
    </div>
  );
}
