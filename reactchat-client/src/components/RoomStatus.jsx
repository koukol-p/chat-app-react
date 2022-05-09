import React, { useState } from "react";
import { useChatContext } from "../hooks/useChatContext";
import "./RoomStatus.scss";
import {
  FaCaretDown,
  FaDoorOpen,
  FaCaretUp,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuthContext } from "../hooks/useAuthContext";
export default function RoomStatus() {
  const { room, roomStatus, leaveRoom } = useChatContext();
  const [showUsers, setShowUsers] = useState(false);
  const { authCurrent } = useAuthContext();
  const toggleShowUsers = () => {
    setShowUsers((prev) => !prev);
  };

  return (
    <div className="room-status">
      <div className="header">
        <h2 className="room-title">
          Room: <span>{room}</span>
        </h2>
        <button title="Leave Room" onClick={() => leaveRoom(room)}>
          <FaSignOutAlt color="#ef8a17" size={24} />
        </button>
      </div>
      <button onClick={toggleShowUsers} className="user-list-toggle">
        <span className="block">Users ({roomStatus.length})</span>
        {showUsers ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      {showUsers && (
        <div className="user-list">
          {roomStatus
            .filter((u) => u.userName !== authCurrent.displayName)
            .map((u) => {
              return <p key={u.ID}>{u.userName}</p>;
            })}
        </div>
      )}
    </div>
  );
}
