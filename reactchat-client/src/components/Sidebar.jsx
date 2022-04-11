import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import ContactList from "./ContactList";

export default function Sidebar() {
  const { userDetails, userSignOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut()
    navigate("/")
  }

  return (
    <div className="bg-slate-300 h-full flex flex-col">
      <div className="min-h-[120px] h-[25vh] flex flex-col pt-4">
        <button onClick={handleSignOut}>Log Out</button>
        <span className="block text-center">{userDetails.userName}</span>
        <span className="block font-bold text-center">
          {userDetails.contactNumber}
        </span>

      </div>
      <ContactList contacts={userDetails.contacts} />
    </div>
  );
}
