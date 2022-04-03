import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { ChatContextProvider } from "./context/ChatContext";
import { SocketContext, socket } from "./context/socketContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContext.Provider value={socket}>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </SocketContext.Provider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
