import { motion } from "framer-motion";
import { useEffect } from "react";
import ReactGA from "react-ga";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Containers/Footer/Footer";
import Header from "../Containers/Header/Header";
import MobileMenu from "../Containers/Header/MobileMenu/MobileMenu";

const Root = () => {
   const location = useLocation();
   useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
   }, [location]);
   return (
      <div>
         <div className="hidden lg:block">
            <Header />
         </div>
         <div className="lg:hidden">
            <MobileMenu />
         </div>
         <motion.div
            key={location.pathname}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0.8 }}>
            <Outlet />
         </motion.div>

         <Footer />
      </div>
   );
};

export default Root;
