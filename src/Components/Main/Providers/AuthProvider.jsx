import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

  // function for current user sign in
  const currentUser = (email, password) => {
    // set loading to true until data is properly fetched
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password)
  }
  // observe user auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
    })
    return () => {
      unsubscribe();
    }
  }, [])

  // function to handle user sign out
  const logOut = () => {
    return signOut(Auth)
  }

  // pass an object as value 
  const userInfo = {
    user, createAccount, currentUser, loading, logOut
  }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;