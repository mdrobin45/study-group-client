import { Button, IconButton, MobileNav } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import NavList from "./NavList";
import ProfileMenu from "./ProfileMenu";

export function Header() {
   const [isNavOpen, setIsNavOpen] = useState(false);

   const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

   useEffect(() => {
      window.addEventListener(
         "resize",
         () => window.innerWidth >= 960 && setIsNavOpen(false)
      );
   }, []);

   return (
      <div className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
         <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
            <img
               src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2019/02/logo-footer.svg"
               alt=""
            />
            <div className="hidden lg:block">
               <NavList />
            </div>
            <IconButton
               size="sm"
               color="blue-gray"
               variant="text"
               onClick={toggleIsNavOpen}
               className="ml-auto mr-2 lg:hidden"></IconButton>

            <Button size="sm" variant="text">
               <span>Log In</span>
            </Button>
            <ProfileMenu />
         </div>
         <MobileNav open={isNavOpen} className="overflow-scroll">
            <NavList />
         </MobileNav>
      </div>
   );
}

export default Header;
