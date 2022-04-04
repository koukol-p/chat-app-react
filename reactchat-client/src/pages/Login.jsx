import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password: pwd,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUser(data);
      setLoading(false);
      navigate("/chat");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
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
      <button type="submit">Log In</button>
    </form>
  );
}
