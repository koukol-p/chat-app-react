import React from "react";

export default function Contact({ contact }) {
  return (
    <div className="flex flex-col p-2 border bg-slate-600 hover:bg-slate-400 text-slate-100 hover:text-slate-900">
      <div className="font-bold">{contact.name}</div>
      <div className="text-sm">{contact.contactNumber}</div>
    </div>
  );
}
