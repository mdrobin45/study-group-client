import {
   Button,
   IconButton,
   MobileNav,
   Navbar,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../assets/images/Logo_dark.png";
import NavList from "./NavList";
import ProfileMenu from "./ProfileMenu";

const MobileMenu = () => {
   const { user } = useAuth();
   const [isNavOpen, setIsNavOpen] = useState(false);

   const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

   useEffect(() => {
      window.addEventListener(
         "resize",
         () => window.innerWidth >= 960 && setIsNavOpen(false)
      );
   }, []);
   return (
      <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
         <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
            <Link>
               <img className="w-40" src={logo} alt="Logo" />
            </Link>
            <div className="hidden lg:block">
               <NavList />
            </div>
            <div className="flex items-center gap-4">
               {!user ? (
                  <Button
                     className="bg-secondary text-white hover:bg-secondary"
                     size="sm"
                     variant="text">
                     <Link to="/login">Log In</Link>
                  </Button>
               ) : (
                  <ProfileMenu />
               )}
               <IconButton
                  size="sm"
                  color="blue-gray"
                  variant="text"
                  onClick={toggleIsNavOpen}
                  className="ml-auto mr-2 lg:hidden">
                  <FaBarsStaggered className="h-5 w-5" />
               </IconButton>
            </div>
         </div>
         <MobileNav open={isNavOpen} className="overflow-scroll">
            <NavList />
         </MobileNav>
      </Navbar>
   );
};

export default MobileMenu;
