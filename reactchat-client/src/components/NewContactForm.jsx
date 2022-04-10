import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
export default function NewContactForm({ show }) {
  const [number, setNumber] = useState("");
  const hidden = !show && "hidden";

  const { user, addContact } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    addContact(number);
    
  };

  return (
    <div className={`${hidden}`}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Contact Number</label>
        <input
          id="number"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}
