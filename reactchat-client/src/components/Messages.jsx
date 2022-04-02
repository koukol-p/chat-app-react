import React, { useEffect, useState } from "react";

export default function Messages({ socket, messages }) {
  console.log("MESSAGES PROPS", messages);
  return (
    <div className="overflow-scroll flex flex-col rounded-md min-h-[260px] max-h-[260px] border-2 border-cyan-700">
      {messages.map((m) => {
        return (
          <div className="">
            {m.username}:{m.msg}
          </div>
        );
      })}
    </div>
  );
}
