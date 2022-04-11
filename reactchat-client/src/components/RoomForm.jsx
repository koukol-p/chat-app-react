import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import {FaPlusCircle} from "react-icons/fa"
import { setDoc } from "firebase/firestore";
import { projectFirestore } from "../firebase/firebaseConfig";

const crypto = require("crypto");


export default function RoomForm() {
  const [roomName, setRoomName] = useState("");

  const { user, addContact } = useAuthContext();

  const randomId = () => crypto.randomBytes(8).toString("hex");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = randomId();
    const newRoom = {
        roomId: id,
        roomName,
    }
    await setDoc(doc(projectFirestore, "rooms", id), newRoom);
   
    
  };

  return (
    
      <form className="bg-orange-700 py-2 px-2 mb-1 flex justify-between w-full"  onSubmit={handleSubmit}>
        <input
        className="p-[4px] grow"
          id="number"
          type="number"
          placeholder="Create Room"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="pl-2" type="submit"><FaPlusCircle color="white" size={24} /></button>
      </form>
    
  );
}
