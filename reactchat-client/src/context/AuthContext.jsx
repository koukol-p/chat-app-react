import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { createContext, useState } from "react";
import { projectAuth } from "../config/firebase";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authCurrent, setAuthCurrent] = useState(null);

  const signup = async (email, password, username) => {
    const auth = await createUserWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    await updateProfile(auth, { displayName: username });
    setAuthCurrent(auth);
  };
  const login = async (email, password) => {
    const auth = await signInWithEmailAndPassword(projectAuth, email, password);
    setAuthCurrent(auth);
  };
  const signout = async () => {
    signOut(projectAuth);
  };

  return (
    <AuthContext.Provider value={{ authCurrent }}>
      {children}
    </AuthContext.Provider>
  );
};
