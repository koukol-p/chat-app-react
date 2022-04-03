import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name=""
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="pwd">Password:</label>
      <input
        type="password"
        name=""
        id="pwd"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
    </form>
  );
}
