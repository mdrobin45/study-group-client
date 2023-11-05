import {
   Menu,
   MenuHandler,
   MenuItem,
   Typography,
} from "@material-tailwind/react";
import { useState } from "react";

const NavListMenu = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
      <>
         <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
            <MenuHandler>
               <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal">
                  <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                     Pages
                  </MenuItem>
               </Typography>
            </MenuHandler>
         </Menu>
         <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
            Pages
         </MenuItem>
      </>
   );
};

export default NavListMenu;
