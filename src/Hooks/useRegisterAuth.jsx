import { useContext, useState } from "react";
import ReactGA from "react-ga";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContextProvider";
import { formValidation } from "../Utils/regFormValidation";

const useRegisterAuth = () => {
   const [errorMessage, setErrorMessage] = useState(null);
   const { registerWithEmailPassword, profileUpdate } = useContext(AuthContext);
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      photoUrl: "",
      password: "",
   });

   // Onchange handler
   const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   // Handle form submit
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const checkBox = e.target.checkbox.checked;

      // Form Validation
      const validationError = formValidation(
         formData.name,
         formData.email,
         formData.password,
         checkBox
      );

      // Throw validation error
      if (validationError) {
         setErrorMessage(validationError);
         return;
      }

      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Processing...",
         isLoading: true,
      });

      // Firebase email password signUp
      registerWithEmailPassword(formData.email, formData.password)
         .then((result) => {
            if (result.user) {
               profileUpdate({
                  displayName: formData.name,
                  photoURL: formData.photoUrl,
               });

               // Google analytics for user register
               ReactGA.event({
                  category: "User",
                  action: "Created an account",
               });

               // Show toast
               toast.update(toastMsg, {
                  render: "Registration Successful!",
                  type: "success",
                  isLoading: false,
               });
               navigate("/");
            }
         })
         .catch((err) => {
            ReactGA.exception({
               description: "An error ocurred",
               fatal: true,
            });
            toast.update(toastMsg, {
               render: "Registration failed!",
               type: "error",
               isLoading: false,
            });
            setErrorMessage(err.message);
         });
   };
   return { onChangeHandler, handleFormSubmit, errorMessage };
};

export default useRegisterAuth;
