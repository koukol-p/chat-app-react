import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Messages from "./components/Messages"
import MessageForm from "./components/MessageForm"
import { useChatContext } from "./hooks/useChatContext";
export default function App() { 
  const {socket, room} = useChatContext()
  //find better place to connect
  

  return (
      <div className="flex h-screen">

        <>
          <div className="min-w-[210px] min-h-screen">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-grow justify-center mx-8">

            {room && (
              <>
                <Messages />
                <MessageForm />
              </>
            )}
          </div>
        </>
    </div>

  );
}
