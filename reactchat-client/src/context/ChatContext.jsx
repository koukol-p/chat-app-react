import { createContext, useState, useEffect, useContext, useCallback, useRef } from "react";
import socketClient, { io } from "socket.io-client";


export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("")
  const [room, setRoom] = useState("");
  const [roomStatus, setRoomStatus] = useState([]);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:5000", {autoConnect: false});
    socket.current.connect();
    socket.current.on("message", msg => {
      setMessages(prev => [...prev, msg]);
      console.log("MESSAGES", messages)
    })
    socket.current.on("status", (status) => {
      console.log(status);
      setRoomStatus(status);
    })
 }, []);

  const joinRoom = (roomId) => {
    const joinReq = {
      userName,
      roomId: roomId.trim(),

    }
    console.log("inside join room")
    socket.current.emit("join_room", joinReq);
  }

  const sendMessage = (msg) => {
    const newMsg = {
      userName,
      msg,
      room
    }
    socket.current.emit("message", newMsg);
  }




  return (
    <ChatContext.Provider
      value={{
        messages,
        socket,
        room,
        setRoom,
        joinRoom,
        userName,
        setUserName,
        sendMessage,
        roomStatus
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
