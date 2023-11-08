import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { pdfjs } from "react-pdf";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./Context/AuthContextProvider.jsx";
import router from "./Router/Router.jsx";
import "./index.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
   "pdfjs-dist/build/pdf.worker.min.js",
   import.meta.url
).toString();

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <ThemeProvider>
            <AuthContextProvider>
               <RouterProvider router={router} />
               <ToastContainer />
            </AuthContextProvider>
         </ThemeProvider>
      </QueryClientProvider>
   </React.StrictMode>
);
