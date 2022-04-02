import React from "react";

export default function Message({ message }) {
  return (
    <div className="w-100 my-1">
      <p>
        <span className="">{message.time} </span>
        <span className="font-bold">{message.username}: </span>
        {message.msg}
      </p>
    </div>
  );
}
