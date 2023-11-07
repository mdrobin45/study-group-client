import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../Context/AuthContextProvider";

const PrivateRoute = ({ children }) => {
   const location = useLocation();
   const { isLoading, user } = useContext(AuthContext);
   if (isLoading) {
      return (
         <div className="h-screen flex flex-col items-center justify-center">
            <ClipLoader color="#EF1D26" />
         </div>
      );
   }
   if (!user) {
      return <Navigate to="/login" state={{ prevUrl: location.pathname }} />;
   }
   return children;
};

export default PrivateRoute;
