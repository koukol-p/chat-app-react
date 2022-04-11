import React, { useState } from "react";
import axios from "axios";

import {FaPlusCircle} from "react-icons/fa"


export default function RoomForm() {
  const [roomName, setRoomName] = useState("");



//   const randomId = () => crypto.randomBytes(8).toString("hex");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const id = randomId();
    const newRoom = {
        roomId: 1,
        roomName,
    }
    
   
    
  };

  return (
    
      <form className="bg-orange-700 py-2 px-2 mb-1 flex justify-between w-full"  onSubmit={handleSubmit}>
        <input
        className="p-[4px] grow"
          id="number"
          type="number"
          placeholder="Create Room"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <button className="pl-2" type="submit"><FaPlusCircle color="white" size={24} /></button>
      </form>
    
  );
}
