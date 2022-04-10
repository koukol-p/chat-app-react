import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import ContactList from "./ContactList";

export default function Sidebar() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div className="bg-slate-300 h-full flex flex-col">
      <div className="min-h-[120px] h-[25vh] flex flex-col pt-4">
        <span className="block text-center">{user.name}</span>
        <span className="block font-bold text-center">
          {user.contactNumber}
        </span>
      </div>
      <ContactList contacts={user.contacts} />
    </div>
  );
}