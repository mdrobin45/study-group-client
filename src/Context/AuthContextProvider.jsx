import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   sendEmailVerification,
   sendPasswordResetEmail,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { clearToken, generateToken } from "../API/serverRequest";
import auth from "../Configuration/firebase.config";

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [isLoading, setIsLoading] = useState(true);

   // Auth provider
   const googleAuthProvider = new GoogleAuthProvider();

   // Sign up with email and password
   const registerWithEmailPassword = (email, password) => {
      setIsLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // Sign in with email and password
   const loginWithEmailPassword = (email, password) => {
      setIsLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // Update profile
   const profileUpdate = (userInfo) => {
      setIsLoading(true);
      return updateProfile(auth.currentUser, userInfo);
   };

   // Reset password
   const resetPassword = (email) => {
      setIsLoading(true);
      return sendPasswordResetEmail(auth, email);
   };

   // Verify email
   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser);
   };

   // Google signIn
   const loginWithGoogle = () => {
      setIsLoading(true);
      return signInWithPopup(auth, googleAuthProvider);
   };

   // Log Out
   const logOut = () => {
      setIsLoading(true);
      return signOut(auth);
   };

   // Get current user
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setIsLoading(false);
         if (currentUser) {
            const { email } = currentUser;
            generateToken(email);
         } else {
            clearToken();
         }
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const authInfo = {
      user,
      logOut,
      isLoading,
      verifyEmail,
      profileUpdate,
      loginWithGoogle,
      registerWithEmailPassword,
      loginWithEmailPassword,
      resetPassword,
   };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthContextProvider;
