import { Link } from "react-router-dom";
import AuthFormFooter from "../../Components/AuthFormFooter/AuthFormFooter";
import AuthFormHeader from "../../Components/AuthFormHeader/AuthFormHeader";
import FormSubmit from "../../Components/InputFields/FormSubmit";
import GoogleSignIn from "../../Components/InputFields/GoogleSignIn";
import PasswordField from "../../Components/InputFields/PasswordField";
import TextField from "../../Components/InputFields/TextField";
import useLoginAuth from "../../Hooks/useLoginAuth";

const LoginForm = () => {
   const { onChangeHandler, handleFormSubmit } = useLoginAuth();
   return (
      <div className="flex h-[80vh] flex-col justify-center items-center">
         <div className="mx-auto w-[26rem] border rounded-md shadow-md">
            <AuthFormHeader heading="Sign In" />
            <form className="w-full px-6" onSubmit={handleFormSubmit}>
               <TextField
                  onChange={onChangeHandler}
                  label="Email"
                  name="email"
               />
               <PasswordField
                  onChange={onChangeHandler}
                  label="Password"
                  name="password"
               />
               <div className="flex items-center justify-between">
                  <div className="inline-flex items-center pb-4 pt-2">
                     <label
                        className="relative flex items-center rounded-full cursor-pointer"
                        htmlFor="checkbox-8"
                        data-ripple-dark="true">
                        <input
                           type="checkbox"
                           className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                           id="checkbox-8"
                        />

                        <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="1">
                              <path
                                 fillRule="evenodd"
                                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                 clipRule="evenodd"></path>
                           </svg>
                        </div>
                     </label>
                     <span className="pl-2">Remember me</span>
                  </div>
                  <div>
                     <Link className="text-primary" to="/">
                        Recover Password
                     </Link>
                  </div>
               </div>
               <FormSubmit isSubmit={true} btnText="Sign In" />
               <GoogleSignIn />
            </form>
            <AuthFormFooter loginPage={true} />
         </div>
      </div>
   );
};

export default LoginForm;
