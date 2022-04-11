import { createContext, useState, useEffect, useContext, useCallback } from "react";
import socketClient, { io } from "socket.io-client";
import { useAuthContext } from "../hooks/useAuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sessionId, setSessionId] = useState("");

  const { userDetails } = useAuthContext();
  const socket = io("http://localhost:5000", { autoConnect: false });
  console.log("SESSION_ID", sessionId)

  useEffect(() => {
    if (userDetails) {
      socket.auth = { contactNumber: userDetails.contactNumber, username: userDetails.userName };
      socket.connect();

      socket.emit("setup", userDetails);
      socket.on("connection", () => {});
      
    }
  }, [userDetails]);

  const privateMessage = useCallback(({content, from, to}) => {
    const newMessage = {
      userId: from,
      username: from.username,
      message: content,
    }
    setMessages([...messages, newMessage])
    console.log(messages)

  }, [])
  useEffect(() => {
    socket.on("private_message", (message) => {
      privateMessage(message);

    })
  }, [selectedChat, privateMessage])
  


  const startChat = (contact) => {
    setSelectedChat(contact);

  }

  const messageFormSubmit = (msg) => {
    socket.emit("private message", {
      content: msg,
      to: selectedChat.contactNumber
    });

  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        socket,
        messageFormSubmit,
        selectedChat,
        setSelectedChat,
        onlineUsers,
        startChat
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
