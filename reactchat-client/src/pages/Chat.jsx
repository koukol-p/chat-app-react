import React, { useEffect } from "react";
import MessageForm from "../components/MessageForm";
import Messages from "../components/Messages";
import Sidebar from "../components/Sidebar";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Chat() {
  const { user, setUser } = useAuthContext();

  return (
    <div className="flex h-screen">
      {/* prevent rendering of user-dependent components until user is set */}
      {user && (
        <>
          <div className="min-w-[210px]">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-grow justify-center mx-8">
            <Messages />
            <MessageForm />
          </div>
        </>
      )}
    </div>
  );
}
