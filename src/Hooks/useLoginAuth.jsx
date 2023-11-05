import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContextProvider";

const useLoginAuth = () => {
   const { loginWithEmailPassword } = useContext(AuthContext);
   const { state } = useLocation();
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   // Onchange handler
   const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   // Form submit
   const handleFormSubmit = (e) => {
      e.preventDefault();

      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Processing...",
         isLoading: true,
      });

      // Firebase email password login
      loginWithEmailPassword(formData.email, formData.password)
         .then((result) => {
            if (result.user) {
               // Update toast
               toast.update(toastMsg, {
                  render: "Login Successful!",
                  type: "success",
                  isLoading: false,
                  autoClose: 1500,
               });
               navigate(state ? state.prevUrl : "/");
            }
         })
         .catch((err) => {
            if (err) {
               toast.update(toastMsg, {
                  render: "Incorrect email or password",
                  type: "error",
                  isLoading: false,
                  autoClose: 1500,
               });
            }
         });
   };
   return { onChangeHandler, handleFormSubmit };
};

export default useLoginAuth;
