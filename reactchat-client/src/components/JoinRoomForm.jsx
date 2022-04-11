import React, { useState } from "react";
import {nanoid} from "nanoid"
import {FaDoorOpen} from "react-icons/fa"
import { useChatContext } from "../hooks/useChatContext";


export default function JoinRoomForm() {
  const {setRoom} = useChatContext();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const roomId = nanoid()
    console.log(roomId)
    setRoom(roomId)
    
   
    
  };

  return (
    
      <div className="px-4 mt-8 bg-orange-700 py-2 flex border-b w-full justify-between">
        
        
        <input className="p-1 self-center" type="text" placeholder="Enter Room ID" />
        <button><FaDoorOpen className="self-" color="white" size={24} /></button>
      </div>
    
  );
}