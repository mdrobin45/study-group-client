import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./Context/AuthContextProvider.jsx";
import router from "./Router/Router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ThemeProvider>
         <AuthContextProvider>
            <RouterProvider router={router} />
            <ToastContainer />
         </AuthContextProvider>
      </ThemeProvider>
   </React.StrictMode>
);
