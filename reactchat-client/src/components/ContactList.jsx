import React from "react";
import Contact from "./Contact";

export default function ContactList({ contacts }) {
  return (
    <div>
      {contacts.map((c) => (
        <Contact contact={c} />
      ))}
    </div>
  );
}
