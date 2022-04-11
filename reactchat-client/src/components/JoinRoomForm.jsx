import React, { useState } from "react";
import { nanoid } from "nanoid";
import { FaDoorOpen } from "react-icons/fa";
import { useChatContext } from "../hooks/useChatContext";

export default function JoinRoomForm() {
  const { socket, setRoom, joinRoom } = useChatContext();
  const [roomIdInput, setRoomIdInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("SOCKET STATUS: ", socket.current.connected);
    if (roomIdInput !== "" && socket.current.connected) {
      console.log("inside handler");
      setRoom(roomIdInput);
      joinRoom(roomIdInput);
      setRoomIdInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 bg-orange-700 py-2 flex border-b w-full justify-between"
    >
      <input
        className="p-1 self-center"
        type="text"
        placeholder="Enter Room ID"
        value={roomIdInput}
        onChange={(e) => setRoomIdInput(e.target.value)}
      />
      <button type="submit">
        <FaDoorOpen className="self-" color="white" size={24} />
      </button>
    </form>
  );
}
