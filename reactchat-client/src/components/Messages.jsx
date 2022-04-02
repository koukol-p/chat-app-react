import React, { useEffect, useState } from "react";

export default function Messages({ socket, messages }) {
  return (
    <div className="flex flex-col rounded-md min-h-[260px] border-2 border-cyan-700">
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
