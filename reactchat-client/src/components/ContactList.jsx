import React from "react";

export default function ContactList({ contacts }) {
  return (
    <div>
      {contacts.map((c) => (
        <div>
          {c.name} {c.contactNumber}
        </div>
      ))}
    </div>
  );
}
