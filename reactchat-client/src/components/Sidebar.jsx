import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import ContactList from "./ContactList";

export default function Sidebar() {
  const { user } = useAuthContext();
  return (
    <div className="bg-slate-400 h-full p-2 flex flex-col">
      <div className="min-h-[120px] h-[25vh] flex flex-col pt-4">
        <span className="block font-bold text-center">{user.name}</span>
      </div>
      <ContactList contacts={user.contacts} />
    </div>
  );
}
