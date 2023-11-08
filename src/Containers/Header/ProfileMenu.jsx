import {
   Avatar,
   Button,
   Menu,
   MenuHandler,
   MenuItem,
   MenuList,
   Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const ProfileMenu = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const { user, logOut } = useAuth();

   // Sign Out
   const handleLogOut = () => {
      logOut().then(() => {
         toast.error("Your are logged out!");
      });
   };

   return (
      <Menu
         allowHover={true}
         open={isMenuOpen}
         handler={setIsMenuOpen}
         placement="bottom-end">
         <MenuHandler>
            <Button
               variant="text"
               color="blue-gray"
               className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
               <Avatar
                  variant="circular"
                  size="sm"
                  alt="Profile"
                  className="border border-gray-900 p-0.5"
                  src={
                     user ? user.photoURL : "https://i.ibb.co/238dYyx/user.png"
                  }
               />
            </Button>
         </MenuHandler>
         <MenuList className="p-1">
            <p className="px-2 font-bold py-2 text-black">
               {user?.displayName}
            </p>
            <hr />
            <Link to="/my-submission">
               <MenuItem>
                  <Typography as="span" variant="small" className="font-normal">
                     My Submission
                  </Typography>
               </MenuItem>
            </Link>
            <Link to="/posted-assignment">
               <MenuItem>
                  <Typography as="span" variant="small" className="font-normal">
                     Posted Assignment
                  </Typography>
               </MenuItem>
            </Link>
            <MenuItem className="hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10">
               <Typography
                  onClick={handleLogOut}
                  color="red"
                  as="span"
                  variant="small"
                  className="font-normal">
                  Sign Out
               </Typography>
            </MenuItem>
         </MenuList>
      </Menu>
   );
};

export default ProfileMenu;
