import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Messages from "./components/Messages";
import MessageForm from "./components/MessageForm";
import { useChatContext } from "./hooks/useChatContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import { useAuthContext } from "./hooks/useAuthContext";
export default function App() {
  const { authCurrent } = useAuthContext();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authCurrent ? <MainPage /> : <AuthPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
