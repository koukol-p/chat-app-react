import React from "react";
import "./Message.scss";
export default function Message({ message }) {
  return (
    <div className="message">
      <p>
        <span className="">{message.time} </span>
        <span className="font-bold">{message.userName}: </span>
        {message.msg}
      </p>
    </div>
  );
}
