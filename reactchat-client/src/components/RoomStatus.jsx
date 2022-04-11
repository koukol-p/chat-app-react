import React, {useState} from "react";
import { useChatContext } from "../hooks/useChatContext";

import { FaDoorOpen } from "react-icons/fa";
export default function RoomStatus() {
  const {room} = useChatContext();

  console.log(room)
  return (
    <div 
    className="bg-orange-600 flex cursor-pointer p-2 text-white justify-end">
      <div className="text-sm pl-2 self-center">{room}</div>
    </div>
  );
}
