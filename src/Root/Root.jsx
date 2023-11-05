import { Outlet } from "react-router-dom";
import Header from "../Containers/Header/Header";

const Root = () => {
   return (
      <div>
         <Header />
         <Outlet />
      </div>
   );
};

export default Root;
