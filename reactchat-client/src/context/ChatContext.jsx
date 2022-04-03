import { createContext, useState, useEffect, useContext } from "react";
import socketClient, { io } from "socket.io-client";
import { SocketContext } from "./socketContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("message", (data) => {
      console.log("CALLBACK");
      setMessages((prev) => [...prev, data]);
    });
  }, [socket]);
  const messageFormSubmit = (username, msg) => {
    const newMsg = {
      type: "message",
      time: new Date().toLocaleTimeString(),
      username,
      msg,
    };
    socket.emit("message", newMsg);
  };

  return (
    <ChatContext.Provider value={{ messages, socket, messageFormSubmit }}>
      {children}
    </ChatContext.Provider>
  );
};
