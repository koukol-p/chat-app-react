import React from "react";
import { FaUserAlt, FaUserCheck } from "react-icons/fa";
import { useChatContext } from "../hooks/useChatContext";
import JoinRoomForm from "./JoinRoomForm";
import RoomStatus from "./RoomStatus";

import "./Sidebar.scss";

export default function Sidebar() {
  const { room, userName, setUserName, setIsConfirmed, isConfirmed } =
    useChatContext();

  const handleNameConfirm = (e) => {
    e.preventDefault();
    if (userName.trim() !== "") {
      setIsConfirmed(true);
    }
  };

  return (
    <div className="sidebar-container">
      <form onSubmit={handleNameConfirm}>
        <input
          disabled={room || isConfirmed}
          placeholder="Username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button disabled={isConfirmed} type="submit">
          <FaUserCheck size={24} />
        </button>
      </form>
      <JoinRoomForm />
    </div>
  );
}
