import React from "react";

export default function LoginForm() {
  return (
    <form className="p-6 border border-black rounded-md min-w-[400px] flex flex-col">
      <div className="flex flex-row p-1 mb-1 justify-between">
        <label htmlFor="username">User name:</label>
        <input className="border border-black" id="username" type="text" />
      </div>
      <div className="flex flex-row p-1 mb-1 justify-between">
        <label htmlFor="password">Password:</label>
        <input className="border border-black" id="password" type="password" />
      </div>
    </form>
  );
}
