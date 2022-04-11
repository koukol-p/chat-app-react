import React, { useEffect } from "react";
import MessageForm from "../components/MessageForm";
import Messages from "../components/Messages";
import Sidebar from "../components/Sidebar";
import { useAuthContext } from "../hooks/useAuthContext";
import { useChatContext } from "../hooks/useChatContext";

export default function Chat() {
  const { user, userDetails } = useAuthContext();
  const { selectedChat } = useChatContext();
  console.log("user details", userDetails);
  return (
    <div className="flex h-screen">
      {/* prevent rendering of user-dependent components until user is set */}
      {user && userDetails && (
        <>
          <div className="min-w-[210px] min-h-screen">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-grow justify-center mx-8">
            {selectedChat && (
              <>
                <Messages />
                <MessageForm />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
