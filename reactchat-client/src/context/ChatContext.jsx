import { createContext, useState, useEffect } from "react";
export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(
    new WebSocket("ws://" + "localhost:5000" + "/ws")
  );

  function receiveMessage(receivedMsg) {
    const parsedMsg = JSON.parse(receivedMsg.data);

    setMessages((prev) => [...prev, parsedMsg]);
  }

  useEffect(() => {
    socket.onopen = () => {
      console.log("WS Connected");
    };
    setSocket((prev) => {
      prev.onmessage = receiveMessage;
      return prev;
    });
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (msg) => {
    console.log("MSG", msg);
    socket.send(JSON.stringify(msg));
    // socket.send(JSON.stringify("hey"));
  };
  const messageFormSubmit = (username, msg) => {
    const newMsg = {
      type: "message",
      time: new Date().toLocaleTimeString(),
      username,
      msg,
    };
    sendMessage(newMsg);
  };

  return (
    <ChatContext.Provider
      value={{ messages, socket, messageFormSubmit, receiveMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
};
