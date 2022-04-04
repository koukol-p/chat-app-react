import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
export default function NewContactForm({ show }) {
  const [number, setNumber] = useState("");
  const hidden = !show && "hidden";

  const { user, setUser } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (number !== "") {
      try {
        console.log("TOKEN", user.token);
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "http://localhost:5000/api/user/contact",
          {
            contactNumber: number,
          },
          config
        );
        console.log("DATA from addcontact post", data);
        if (data) {
          const updatedUser = {
            ...data,
            token: user.token,
          };
          localStorage.setItem("userInfo", JSON.stringify(updatedUser));
          setUser(updatedUser);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
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
