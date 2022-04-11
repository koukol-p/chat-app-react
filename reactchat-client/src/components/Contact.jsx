import React, {useState} from "react";
import { useChatContext } from "../hooks/useChatContext";
export default function Contact({ contact }) {
  const {setSelectedChat, selectedChat, onlineUsers, startChat} = useChatContext();
  const [isOnline, setIsOnline] = useState(onlineUsers.find((u) => contact.contactNumber === u.contactNumber) ? true : false)
  
  const handleSelect = () => {
    startChat(contact)
      
  }
  return (
    <div onClick={handleSelect} 
    className={`min-w-[275px] flex flex-col cursor-pointer p-2 my-[2px] 
    ${selectedChat === contact ? "bg-orange-600 text-slate-50" : "bg-orange-300  text-slate-900"}`}>
      <div className="font-bold">{contact.userName}{isOnline && <span>(online)</span>}</div>
      <div className="text-sm">{contact.contactNumber}</div>
    </div>
  );
}
