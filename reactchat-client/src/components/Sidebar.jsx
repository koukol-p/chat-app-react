import React from "react";
import { FaUserAlt, FaUserCheck } from "react-icons/fa";
import { useChatContext } from "../hooks/useChatContext";
import JoinRoomForm from "./JoinRoomForm";
import RoomStatus from "./RoomStatus";

import "./Sidebar.scss";

export default function Sidebar() {
  const { room, userName, setUserName, setIsConfirmed, isConfirmed } =
    useChatContext();

  return (
    <div className="sidebar-container">
      <JoinRoomForm />
    </div>
  );
}
