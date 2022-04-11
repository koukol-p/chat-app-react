import React, { useState } from "react";
import {nanoid} from "nanoid"
import {FaDoorOpen} from "react-icons/fa"
import { useChatContext } from "../hooks/useChatContext";


export default function JoinRoomForm() {
  const {socket, setRoom, joinRoom} = useChatContext();    
  const [roomIdInput, setRoomIdInput] = useState("");

  const handleSubmit = async (e) => {

    console.log("SOCKET STATUS: ", socket.connected)
    if(roomIdInput !== "" && socket.connected) {
        console.log("inside handler")
        joinRoom(roomIdInput);
    }
    
   
    
  };

  return (
    
      <div className="px-4 mt-8 bg-orange-700 py-2 flex border-b w-full justify-between">
        
        
        <input className="p-1 self-center" type="text" placeholder="Enter Room ID" value={roomIdInput} onChange={e => setRoomIdInput(e.target.value)} />
        <button onClick={handleSubmit}><FaDoorOpen className="self-" color="white" size={24} /></button>
      </div>
    
  );
}