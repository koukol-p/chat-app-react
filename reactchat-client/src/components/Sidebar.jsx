import React from "react";
import { FaUserAlt, FaUserCheck } from "react-icons/fa";
import { useChatContext } from "../hooks/useChatContext";
import JoinRoomForm from "./JoinRoomForm";
import RoomStatus from "./RoomStatus";
export default function Sidebar() {

  const {room, userName, setUserName, setIsConfirmed, isConfirmed} = useChatContext();

  const handleNameConfirm = (e) => {
    e.preventDefault();
    if(userName.trim() !== "") {
      setIsConfirmed(true);
    }
  }

  return (
    <div className="bg-orange-200 md:min-w-[260px]">
      <form onSubmit={handleNameConfirm} className="px-4 bg-orange-700 py-3 flex border-b w-full justify-between">
      {/* prevent userName change after joining any room */}
      <input disabled={room || isConfirmed} className="self-center p-1" placeholder="Username" type="text" value={userName} onChange={e => setUserName(e.target.value)} />
      <button disabled={isConfirmed} type="submit" className="text-white"><FaUserCheck size={24} /></button>   
      </form>
      <JoinRoomForm />
      {room && (
      <RoomStatus />
      )}
    </div>
  );
}
