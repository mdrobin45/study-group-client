import { Outlet } from "react-router-dom";
import Footer from "../Containers/Footer/Footer";
import Header from "../Containers/Header/Header";
import MobileMenu from "../Containers/Header/MobileMenu/MobileMenu";

const Root = () => {
   return (
      <div>
         <div className="hidden lg:block">
            <Header />
         </div>
         <div className="lg:hidden">
            <MobileMenu />
         </div>
         <Outlet />
         <Footer />
      </div>
   );
};

export default Root;
