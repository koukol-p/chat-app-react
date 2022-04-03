import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (pwd === pwdConfirm) {
      try {
        setLoading(true);

        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        console.log("NAME", userName);
        console.log("EMAIL", email);
        const { data } = await axios.post(
          "http://localhost:5000/api/user/signup",
          {
            name: userName,
            email,
            password: pwd,
          },
          config
        );
        console.log("signup response", data);
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

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
      <button type="submit">Sign Up</button>
    </form>
  );
}
