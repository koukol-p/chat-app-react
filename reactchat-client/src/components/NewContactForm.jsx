import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import {FaPlusCircle} from "react-icons/fa"

export default function NewContactForm({ show }) {
  const [number, setNumber] = useState("");
  const hidden = !show && "hidden";

  const { user, addContact } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    addContact(number);
    
  };

  return (
    
      <form className="bg-slate-400 py-2 px-2 mb-1 flex justify-between w-full align-middle"  onSubmit={handleSubmit}>
        <input
        className="p-1"
          id="number"
          type="number"
          placeholder="New Contact Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="pl-2" type="submit"><FaPlusCircle size={32} /></button>
      </form>
    
  );
}
