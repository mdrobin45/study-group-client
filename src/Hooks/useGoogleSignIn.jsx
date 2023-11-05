import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { showToast } from "../Utils/toast";

const useGoogleSignIn = () => {
   const { loginWithGoogle } = useContext(AuthContext);
   const { state } = useLocation();
   const navigate = useNavigate();

   // Handle signIn with google
   const handleGoogleSignIn = () => {
      loginWithGoogle()
         .then((result) => {
            if (result.user) {
               showToast("Login Successful!", "success");
               navigate(state ? state.prevUrl : "/");
            }
         })
         .catch((err) => {
            if (err) {
               showToast("Something went wrong!", "error");
            }
         });
   };

   return handleGoogleSignIn;
};

export default useGoogleSignIn;
