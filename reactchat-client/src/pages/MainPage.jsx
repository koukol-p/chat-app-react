import React from "react";
import Sidebar from "../components/Sidebar";
import Messages from "../components/Messages";
import MessageForm from "../components/MessageForm";
import { useChatContext } from "../hooks/useChatContext";

import "./MainPage.scss";
import Chat from "../components/Chat";

export default function MainPage() {
  const { socket, room } = useChatContext();
  return (
    <div id="main-container">
      <Sidebar />
      {room && (
        <>
          <Messages />
          <MessageForm />
        </>
      )}
    </div>
  );
}
