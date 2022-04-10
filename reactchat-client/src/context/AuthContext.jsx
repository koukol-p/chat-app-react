import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";
import { projectAuth, projectFirestore } from "../firebase/firebaseConfig";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const userSignUp = async (email, pwd, userName) => {
    setIsPending(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        projectAuth,
        email,
        pwd,
      );
      console.log("USERCRED", user);

      //generate 9-digit number - todo: make sure it's unique
      const contactNumber = (Math.floor(Math.random() * 1000000000)).toString();
      await updateProfile(user, { displayName: userName});

      await setDoc(doc(projectFirestore, "users", user.uid), {
        userName,
        contactNumber: contactNumber,
        contacts: []
      })

      setUser(user);
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      setError(err.message);
    }
  };


  return (
    <AuthContext.Provider value={{ user, userSignUp, error, isPending }}>
      {children}
    </AuthContext.Provider>
  );
};
