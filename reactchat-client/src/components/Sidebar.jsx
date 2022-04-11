import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { useChatContext } from "../hooks/useChatContext";
import JoinRoomForm from "./JoinRoomForm";
import RoomForm from "./RoomForm";
import RoomStatus from "./RoomStatus";
export default function Sidebar() {

  const {room} = useChatContext();


  return (
    <div className="bg-orange-200 min-h-screen">
      <div className="pr-2 bg-orange-700 py-2 min-h-[64px]  flex justify-between border-b">
      <FaUserAlt className="self-center mx-4" size={24} color="white" />
      <input className="self-center p-1 grow" placeholder="Username" type="text" />
          
      </div>
      <RoomForm />
      <RoomStatus />
      <JoinRoomForm />
    </div>
  );
}
