import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ChatContextProvider } from "./context/ChatContext";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChatContextProvider>
        <div className="max-h-screen">
          <App />
        </div>
      </ChatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
