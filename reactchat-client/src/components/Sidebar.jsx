import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import ContactList from "./ContactList";
import { FaSignOutAlt } from "react-icons/fa";
export default function Sidebar() {
  const { userDetails, userSignOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut();
    navigate("/");
  };

  return (
    <div className="bg-orange-200 min-h-screen">
      <div className="px-2 bg-orange-700  flex justify-between border-b">
        <div
          className={`py-8 flex flex-col cursor-pointer p-2 text-white`}
        >
          <div className="font-bold">{userDetails.userName}</div>
          <div className="text-sm">{userDetails.contactNumber}</div>
        </div>
        <button onClick={handleSignOut}>
          <FaSignOutAlt size={24} color="white" />
        </button>
      </div>
      <ContactList contacts={userDetails.contacts} />
    </div>
  );
}
