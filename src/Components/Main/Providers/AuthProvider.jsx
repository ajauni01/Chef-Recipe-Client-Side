import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';
// create and export the AuthContext
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  // useState to update the user data
  const [user, setUser] = useState(null);

  // get the Auth
  const Auth = getAuth(app);


  // pass an object as value 
  const userInfo = {
    user
  }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;