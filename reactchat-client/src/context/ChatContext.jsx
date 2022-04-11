import { createContext, useState, useEffect, useContext, useCallback } from "react";
import socketClient, { io } from "socket.io-client";


export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("XO")
  const [room, setRoom] = useState("");
  const socket = io("http://localhost:5000", { autoConnect: false });

  useEffect(() => {
    

    return () => {
      socket.close()
    }
  }, [])
  




  return (
    <ChatContext.Provider
      value={{
        messages,
        socket,
        room,
        setRoom
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
