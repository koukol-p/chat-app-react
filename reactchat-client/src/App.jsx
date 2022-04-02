import React, { useEffect, useState } from "react";
import MessageForm from "./components/MessageForm";
import Messages from "./components/Messages";

export default function App() {
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

  return (
    <div className="flex flex-col justify-center mx-8">
      <Messages messages={messages} />
      <MessageForm sendMessage={sendMessage} />
    </div>
  );
}
