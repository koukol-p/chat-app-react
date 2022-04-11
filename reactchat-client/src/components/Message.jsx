import React from "react";

export default function Message({ message }) {
  return (
    <div className="w-100 my-[2px] bg-slate-300 p-2">
      <p>
        <span className="">{message.time} </span>
        <span className="font-bold">{message.userName}: </span>
        {message.msg}
      </p>
    </div>
  );
}
