import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { FaSignOutAlt } from "react-icons/fa";
import "./UserSection.scss";

export default function UserSection() {
  const { authCurrent, signout } = useAuthContext();
  const handleSignout = async () => {
    await signout();
  };
  return (
    <div className="user-section-container">
      <div className="header">
        <h3>{authCurrent.displayName}</h3>
        <button title="Sign Out" onClick={handleSignout}>
          <FaSignOutAlt color="#ef8a17" size={24} />
        </button>
      </div>
    </div>
  );
}
