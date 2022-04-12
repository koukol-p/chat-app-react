import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Messages from "./components/Messages";
import MessageForm from "./components/MessageForm";
import { useChatContext } from "./hooks/useChatContext";
export default function App() {
  const { socket, room } = useChatContext();
  //find better place to connect

  return (
    <div id="grid-layout">
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
