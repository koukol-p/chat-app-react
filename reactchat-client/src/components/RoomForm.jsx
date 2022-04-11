import React, { useState } from "react";
import {nanoid} from "nanoid"
import {FaPlusCircle} from "react-icons/fa"
import { useChatContext } from "../hooks/useChatContext";


export default function RoomForm() {
  const {setRoom} = useChatContext();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const roomId = nanoid()
    console.log(roomId)
    setRoom(roomId)
    
   
    
  };

  return (
    
      <button className="pr-2 bg-orange-700 py-2 flex border-b cursor-pointer w-full"
      onClick={handleSubmit}>
        
        <FaPlusCircle className="mx-4" color="white" size={24} />
        <span className="text-white">Create New Room</span>
      </button>
    
  );
}
