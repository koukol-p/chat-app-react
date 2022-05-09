import React, { useState } from "react";
import { nanoid } from "nanoid";
import { FaDoorOpen } from "react-icons/fa";
import { useChatContext } from "../hooks/useChatContext";
import "./JoinRoomForm.scss";
export default function JoinRoomForm() {
  const { room, socket, setRoom, joinRoom } = useChatContext();
  const [roomIdInput, setRoomIdInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("SOCKET STATUS: ", socket.current.connected);
    if (roomIdInput !== "" && socket.current.connected) {
      setRoom(roomIdInput);
      joinRoom(roomIdInput);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="join-room">
      <input
        disabled={room}
        type="text"
        placeholder="Enter Room ID"
        value={roomIdInput}
        onChange={(e) => setRoomIdInput(e.target.value)}
      />
      <button title="Join Room" disabled={room} type="submit">
        <FaDoorOpen color="#ef8a17" size={24} />
      </button>
    </form>
  );
}
