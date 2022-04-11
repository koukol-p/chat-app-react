import { createContext, useState, useEffect, useContext, useCallback } from "react";
import socketClient, { io } from "socket.io-client";


export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("")
  const [room, setRoom] = useState("");
  const socket = io("http://localhost:5000", { autoConnect: false });

  

  const joinRoom = (roomId) => {
    const joinReq = {
      userName,
      roomId,

    }
    console.log("inside join room")
    socket.emit("join_room", joinReq);
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
        setUserName
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
