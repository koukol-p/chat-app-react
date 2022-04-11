import { createContext, useState, useEffect, useContext } from "react";
import socketClient, { io } from "socket.io-client";
import { useAuthContext } from "../hooks/useAuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const { userDetails } = useAuthContext();
  const socket = io("http://localhost:5000", { autoConnect: false });
  useEffect(() => {
    if (userDetails) {
      socket.auth = { contactNumber: userDetails.contactNumber };
      socket.connect();

      
      socket.on("users", (users) => {
        setOnlineUsers(users);

        //DEV logs all current users
        console.log("online---")
        users.forEach((user) => {
          console.log(user);
        })
        console.log("online---")
      })


    }
  }, [userDetails]);

  

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
    <ChatContext.Provider
      value={{
        messages,
        socket,
        messageFormSubmit,
        selectedChat,
        setSelectedChat,
        onlineUsers
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
