import React from "react";
import { useChatContext } from "../hooks/useChatContext";
export default function Contact({ contact }) {
  const {setSelectedChat, selectedChat} = useChatContext();
  return (
    <div onClick={() => {
      setSelectedChat(contact)
      console.log("select: ", selectedChat)
    }} 
    className={`min-w-[275px] flex flex-col cursor-pointer p-2 my-[2px] 
    ${selectedChat === contact ? "bg-orange-600 text-slate-50" : "bg-orange-300  text-slate-900"}`}>
      <div className="font-bold">{contact.userName}</div>
      <div className="text-sm">{contact.contactNumber}</div>
    </div>
  );
}
