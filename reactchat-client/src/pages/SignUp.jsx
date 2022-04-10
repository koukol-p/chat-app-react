import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");


  const { userSignUp, error, isPending } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(pwd === pwdConfirm) {
      userSignUp(email, pwd, userName)
    }
  }
    

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          name=""
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
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

      <div>
        <label htmlFor="pwd-confirm">Confirm Password:</label>
        <input
          type="password"
          name=""
          id="pwd-confirm"
          value={pwdConfirm}
          onChange={(e) => setPwdConfirm(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isPending}>Sign Up</button>
    </form>
  );
}
