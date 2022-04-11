import React, { useState } from "react";
import Contact from "./Contact";
import RoomForm from "./RoomForm";

export default function ContactList({ contacts }) {

  return (
    <div>
      <RoomForm />
      <div>
        {/* {contacts.map((c) => (
          <Contact key={Math.random()} contact={c} />
        ))} */}
      </div>
    </div>
  );
}
