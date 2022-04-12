import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Messages from "./components/Messages";
import MessageForm from "./components/MessageForm";
import { useChatContext } from "./hooks/useChatContext";
export default function App() {
  const { socket, room } = useChatContext();
  //find better place to connect

  return (
    <div className="max-h-screen">
    <div className="flex flex-col grow md:flex-row h-[100vh] ">
      <>
        <div className="md:min-h-screen">
          <Sidebar />
        </div>
        {room && (
          <div className="flex flex-col justify-between grow">
            <Messages />

            <MessageForm />
          </div>
        )}
      </>
    </div>
    </div>
  );
}
