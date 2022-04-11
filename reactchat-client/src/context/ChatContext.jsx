import { createContext, useState, useEffect, useContext, useCallback, useRef } from "react";
import socketClient, { io } from "socket.io-client";


export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("")
  const [room, setRoom] = useState("");
  const socket = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:5000", {autoConnect: false});
    socket.current.connect();
    socket.current.on("message", msg => {
      setMessages(prev => [...prev, msg]);
      console.log("MESSAGES", messages)
    })
 }, []);

  const joinRoom = (roomId) => {
    const joinReq = {
      userName,
      roomId,

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
        sendMessage
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
