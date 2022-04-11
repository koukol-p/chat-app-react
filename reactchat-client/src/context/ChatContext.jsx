import { createContext, useState, useEffect, useContext, useCallback } from "react";
import socketClient, { io } from "socket.io-client";


export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("XO")
  const [userNameConfirm, setUserNameConfirm] = useState(false);
  const socket = io("http://localhost:5000", { autoConnect: false });

  useEffect(() => {
    

    return () => {
      socket.close()
    }
  }, [userNameConfirm])
  




  return (
    <ChatContext.Provider
      value={{
        messages,
        socket,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
