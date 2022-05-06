import React, { useState } from "react";
import { useChatContext } from "../hooks/useChatContext";
import "./RoomStatus.scss";
import {
  FaCaretDown,
  FaDoorOpen,
  FaCaretUp,
  FaSignOutAlt,
} from "react-icons/fa";
export default function RoomStatus() {
  const { room, roomStatus, leaveRoom } = useChatContext();
  const [showUsers, setShowUsers] = useState(false);
  const toggleShowUsers = () => {
    setShowUsers((prev) => !prev);
  };

  return (
    <div className="room-status">
      <div className="header">
        <h2 className="px-4 py-2">
          Room: <span className="text-lg font-bold">{room}</span>
        </h2>
        {room && (
          <button className="px-4" onClick={() => leaveRoom(room)}>
            <FaSignOutAlt size={24} />
          </button>
        )}
      </div>
      <button onClick={toggleShowUsers} className="user-list-toggle">
        <span className="block">Users ({roomStatus.length})</span>
        {showUsers ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      {showUsers && (
        <div className="user-list">
          {roomStatus.map((u) => {
            return <p key={u.ID}>{u.userName}</p>;
          })}
        </div>
      )}
    </div>
  );
}
