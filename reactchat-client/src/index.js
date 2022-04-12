import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChatContextProvider } from "./context/ChatContext";


ReactDOM.render(
  <React.StrictMode>
        <ChatContextProvider>
          <div className="max-h-screen">
          <App />
          </div>
        </ChatContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
