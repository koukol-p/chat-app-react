import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");


  const { userSignIn, isPending, user } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    userSignIn(email, pwd);
    console.log(user)
    navigate("/chat")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name=""
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="pwd">Password:</label>
        <input
          type="password"
          name=""
          id="pwd"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isPending}>Log In</button>
    </form>
  );
}
