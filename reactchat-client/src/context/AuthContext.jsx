import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  setDoc,
  doc,
  getDoc,
  where,
  query,
  updateDoc,
  arrayUnion,
  collection,
  getDocs,
} from "firebase/firestore";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projectAuth, projectFirestore } from "../firebase/firebaseConfig";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // get user object separate from auth object with contactNumber, userName and contacts[]
  const getUserDetails = async (uid) => {
    return getDoc(doc(projectFirestore, "users", uid));
  };

  const addContact = async (contactNumber) => {
    // try to find user with matching contactNumber
    
    const q =query(
      collection(projectFirestore, "users"),
      where("contactNumber", "==", contactNumber)
    );
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      
      const contactData = snapshot.docs[0].data();
      const currentUserRef = doc(projectFirestore, "users", user.uid);
      await updateDoc(currentUserRef, {
        contacts: arrayUnion({
          userName: contactData.userName,
          contactNumber: contactData.contactNumber,
        }),
      });
    }
    // get current userDetails after adding new contact
    const detailsSnap = await getUserDetails(user.uid);
    if (detailsSnap.exists()) {
      setUserDetails(detailsSnap.data());
    }
  };

  const userSignUp = async (email, pwd, userName) => {
    setError(null);
    setIsPending(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        projectAuth,
        email,
        pwd
      );
      console.log("USERCRED", user);

      //generate 9-digit number - todo: make sure it's unique
      const contactNumber = Math.floor(Math.random() * 1000000000).toString();
      await updateProfile(user, { displayName: userName });

      await setDoc(doc(projectFirestore, "users", user.uid), {
        userName,
        contactNumber: contactNumber,
        contacts: [],
      });
      const detailsSnap = await getUserDetails(user.uid);
      if (detailsSnap.exists()) {
        setUserDetails(detailsSnap.data());
      }

      setUser(user);
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      setError(err.message);
    }
  };

  const userSignIn = async (email, pwd) => {
    setError(null);
    setIsPending(true);
    try {
      const { user } = await signInWithEmailAndPassword(
        projectAuth,
        email,
        pwd
      );
      console.log("userCred from Sign In", user);
      const detailsSnap = await getUserDetails(user.uid);
      if (detailsSnap.exists()) {
        setUserDetails(detailsSnap.data());
      }

      setUser(user);
      setIsPending(false);
    } catch (err) {
      console.log(err);
      setIsPending(false);
      setError(err.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userDetails,
        userSignUp,
        userSignIn,
        addContact,
        error,
        isPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
