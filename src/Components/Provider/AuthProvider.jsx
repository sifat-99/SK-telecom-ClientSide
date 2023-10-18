import { createContext } from "react";
import PropTypes from 'prop-types'
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
        
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const logOut =()=>{
        return signOut(auth)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      }
      const signInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider);
      }


    const AuthInfo = {
        createUser,
        logOut,
        signIn,
        signInWithGoogle,

      };
      return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
      );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  

export default AuthProvider;