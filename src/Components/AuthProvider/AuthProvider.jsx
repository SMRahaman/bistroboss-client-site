import React, { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const auth = getAuth(app);
export const AuthContex = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);
  const createAccount = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginAccount = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoader(false);
      }
    });
    return () => {
      unsubscribe;
    };
  }, []);

  const authValue = { createAccount, loginAccount, logout, user, loader };
  return (
    <div>
      <AuthContex.Provider value={authValue}>{children}</AuthContex.Provider>
    </div>
  );
};

export default AuthProvider;
