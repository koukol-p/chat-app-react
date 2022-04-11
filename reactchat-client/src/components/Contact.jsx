import React from "react";
import { useChatContext } from "../hooks/useChatContext";
export default function Contact({ contact }) {
  const {setSelectedChat, selectedChat} = useChatContext();
  return (
    <div onClick={() => setSelectedChat(contact)} 
    className={`flex flex-col cursor-pointer p-2 border bg-slate-600 hover:bg-slate-400 text-slate-100 hover:text-slate-900 ${selectedChat === contact && "bg-slate-400 text-slate-900"}`}>
      <div className="font-bold">{contact.userName}</div>
      <div className="text-sm">{contact.contactNumber}</div>
    </div>
  );
}
