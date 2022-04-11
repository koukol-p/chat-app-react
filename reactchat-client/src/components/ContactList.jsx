import React, { useState } from "react";
import Contact from "./Contact";
import NewContactForm from "./NewContactForm";
import RoomForm from "./RoomForm";

export default function ContactList({ contacts }) {

  return (
    <div>
      <RoomForm />
      <NewContactForm />
      <div>
        {contacts.map((c) => (
          <Contact key={Math.random()} contact={c} />
        ))}
      </div>
    </div>
  );
}
