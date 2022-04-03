import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessageForm from "./components/MessageForm";
import Messages from "./components/Messages";
import { useAuthContext } from "./hooks/useAuthContext";
import { useChatContext } from "./hooks/useChatContext";
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";

export default function App() {
  const { messages, socket } = useChatContext();
  const { setUser, user } = useAuthContext();
  console.log(user);
  useEffect(() => {
    // read localStorage on refresh to check if user is set
    const localUser = localStorage.getItem("userInfo");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
