import React, { useState } from "react";
import LoginForm from "../components/authComponents/LoginForm";
import SignupForm from "../components/authComponents/SignupForm";
import "./AuthPage.scss";
export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-forms">
        <div className="auth-forms-header">
          <div
            className={`select-form ${isLogin && "active"}`}
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Log In
          </div>
          <div
            className={`select-form ${!isLogin && "active"}`}
            onClick={() => {
              setIsLogin(false);
            }}
          >
            Sign Up
          </div>
        </div>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}
