import React, {useState} from "react";
import { useChatContext } from "../hooks/useChatContext";

import { FaDoorOpen } from "react-icons/fa";
export default function RoomStatus() {
  const {room, roomStatus} = useChatContext();

  console.log(room)
  return (
    <div 
    className="bg-orange-600 flex cursor-pointer p-2 text-white">
      <div className="text-sm pl-2 self-center">
        <h2 className="text-lg font-bold">{room}</h2>
        {roomStatus.map(u => {
          return <p key={u.ID}>{u.userName}</p>
        })}

        </div>
    </div>
  );
}
