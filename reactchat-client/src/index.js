import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { ChatContextProvider } from "./context/ChatContext";
import { SocketContext, socket } from "./context/socketContext";

ReactDOM.render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <ChatContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/*" element={<div>Other</div>} />
          </Routes>
          <Link to="/asfkji">F Off</Link>
        </BrowserRouter>
      </ChatContextProvider>
    </SocketContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
