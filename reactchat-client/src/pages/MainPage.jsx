import React from "react";
import Sidebar from "../components/Sidebar";
import Messages from "../components/Messages";
import MessageForm from "../components/MessageForm";
import { useChatContext } from "../hooks/useChatContext";
export default function MainPage() {
  const { socket, room } = useChatContext();
  return (
    <>
      <Sidebar />
      {room && (
        <>
          <Messages />
          <MessageForm />
        </>
      )}
    </>
  );
}
