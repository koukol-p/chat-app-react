import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { ChatContextProvider } from "./context/ChatContext";


ReactDOM.render(
  <React.StrictMode>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
