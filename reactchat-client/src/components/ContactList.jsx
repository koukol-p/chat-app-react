import React, { useState } from "react";
import Contact from "./Contact";
import NewContactForm from "./NewContactForm";

export default function ContactList({ contacts }) {

  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <button onClick={() => setShowForm((prev) => !prev)}>
        Add New Contact
      </button>
      <NewContactForm show={showForm} />
      <div>
        {contacts.map((c) => (
          <Contact key={Math.random()} contact={c} />
        ))}
      </div>
    </div>
  );
}
