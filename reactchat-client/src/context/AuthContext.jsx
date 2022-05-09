import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { projectAuth } from "../config/firebase";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authCurrent, setAuthCurrent] = useState(null);

  useEffect(() => {
    onAuthStateChanged(projectAuth, (u) => {
      console.log(u);
      setAuthCurrent(u);
    });
  }, []);

  const signup = async (email, password, username) => {
    try {
      const auth = await createUserWithEmailAndPassword(
        projectAuth,
        email,
        password
      );

      await updateProfile(auth.user, { displayName: username });
      setAuthCurrent(auth);
    } catch (err) {
      console.log(err);
    }
  };
  const login = async (email, password) => {
    try {
      const auth = await signInWithEmailAndPassword(
        projectAuth,
        email,
        password
      );
      setAuthCurrent(auth);
    } catch (err) {
      console.log(err);
    }
  };
  const signout = async () => {
    signOut(projectAuth);
  };

  return (
    <AuthContext.Provider value={{ authCurrent, signup, login, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
