import React from "react";
import { FaUserAlt, FaUserCheck } from "react-icons/fa";
import { useChatContext } from "../hooks/useChatContext";
import JoinRoomForm from "./JoinRoomForm";
import RoomStatus from "./RoomStatus";

import "./Sidebar.scss";
import UserSection from "./UserSection";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <UserSection />
      <JoinRoomForm />
      <RoomStatus />
    </div>
  );
}
