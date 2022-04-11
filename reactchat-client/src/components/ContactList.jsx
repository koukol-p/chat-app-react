import React, { useState } from "react";
import Contact from "./Contact";
import NewContactForm from "./NewContactForm";

export default function ContactList({ contacts }) {

  return (
    <div>

      <NewContactForm />
      <div>
        {contacts.map((c) => (
          <Contact key={Math.random()} contact={c} />
        ))}
      </div>
    </div>
  );
}
