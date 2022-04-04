import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Chat from "./pages/Chat";

export default function App() {
  const { user, setUser } = useAuthContext();

  useEffect(() => {
    console.log("useEffect from App");
    const localUser = localStorage.getItem("userInfo");
    console.log(localUser);
    if (localUser) {
      const parsedUser = JSON.parse(localUser);
      setUser(parsedUser);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route exact path="/chat" element={<Chat />} />
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
