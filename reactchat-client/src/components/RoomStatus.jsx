import React, { useState } from "react";
import { useChatContext } from "../hooks/useChatContext";

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
    <div className="bg-orange-600 flex-col mt-2 cursor-pointer text-white">
      <div className="flex justify-between">
        <h2 className="px-4 py-2">
          Room: <span className="text-lg font-bold">{room}</span>
        </h2>
        {room && (
        <button className="px-4" onClick={() => leaveRoom(room)}>
          <FaSignOutAlt size={24} />
        </button>
        )}
      </div>
      <button
        onClick={toggleShowUsers}
        className="bg-orange-700 px-4 w-full hover:bg-orange-600 flex flex-col items-center"
      >
        <span className="block">Users ({roomStatus.length})</span>
        {showUsers ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      {showUsers && (
        <div className="px-4 py-2 bg-orange-800">
          {roomStatus.map((u) => {
            return <p key={u.ID}>{u.userName}</p>;
          })}
        </div>
      )}
    </div>
  );
}
