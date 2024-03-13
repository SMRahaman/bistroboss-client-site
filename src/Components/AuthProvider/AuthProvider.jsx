import React, { createContext } from "react";
import { app } from "../../Firebase/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(app);
export const AuthContex = createContext(null);
const AuthProvider = ({ children }) => {
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginAccount = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authValue = { createAccount, loginAccount };
  return (
    <div>
      <AuthContex.Provider value={authValue}>{children}</AuthContex.Provider>
    </div>
  );
};

export default AuthProvider;
