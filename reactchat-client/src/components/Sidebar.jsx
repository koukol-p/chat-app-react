import React from "react";
import { useNavigate } from "react-router-dom";
import ContactList from "./ContactList";
import { FaSignOutAlt } from "react-icons/fa";
export default function Sidebar() {



  return (
    <div className="bg-orange-200 min-h-screen">
      <div className="px-2 bg-orange-700  flex justify-between border-b">
        <div
          className={`py-8 flex flex-col cursor-pointer p-2 text-white`}
        >

        </div>
        <button >
          <FaSignOutAlt size={24} color="white" />
        </button>
      </div>
      <ContactList />
    </div>
  );
}
