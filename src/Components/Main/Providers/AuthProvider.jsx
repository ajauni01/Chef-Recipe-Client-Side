import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';
// create and export the AuthContext
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  // useState to update the user data
  const [user, setUser] = useState(null);
  // useState to show a loader to the user during data fetching from the server
  const [loading, setLoading] = useState(true);
  // get the Auth
  const Auth = getAuth(app);

  // create new user account
  const createAccount = (email, password) => {
    // set loading to true until data is properly fetched
    setLoading(true)
    return createUserWithEmailAndPassword(Auth, email, password)
  }

  // pass an object as value 
  const userInfo = {
    user, createAccount
  }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;