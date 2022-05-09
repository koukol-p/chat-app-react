import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import socketClient, { io } from "socket.io-client";
import { useAuthContext } from "../hooks/useAuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("");
  const [roomStatus, setRoomStatus] = useState([]);
  const socket = useRef();
  const { authCurrent } = useAuthContext();
  useEffect(() => {
    socket.current = io("http://localhost:5000", { autoConnect: false });
    socket.current.connect();
    socket.current.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
      console.log("MESSAGES", messages);
    });
    socket.current.on("status", (status) => {
      console.log(status);
      setRoomStatus(status);
    });
  }, []);

  const joinRoom = (roomId) => {
    const joinReq = {
      userName: authCurrent.user.displayName,
      roomId: roomId.trim(),
    };
    console.log("inside join room");
    socket.current.emit("join_room", joinReq);
  };

  const leaveRoom = (roomId) => {
    //check if user is in a room (server crash on leaving room when room is not set)
    if (room) {
      setRoom("");
      setMessages([]);
      socket.current.emit("leave_room", roomId);
      setRoomStatus([]);
    }
  };

  const sendMessage = (msg) => {
    const newMsg = {
      userName: authCurrent.user.displayName,
      msg,
      room,
    };
    socket.current.emit("message", newMsg);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        socket,
        room,
        setRoom,
        joinRoom,
        sendMessage,
        roomStatus,
        leaveRoom,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
