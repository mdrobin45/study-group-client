import { Typography } from "@material-tailwind/react";
import NavListMenu from "./NavListMenu";
// nav list component
const navListItems = [
   {
      label: "Account",
   },
   {
      label: "Blocks",
   },
   {
      label: "Docs",
   },
];

const NavList = () => {
   return (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
         <NavListMenu />
         {navListItems.map(({ label }) => (
            <Typography
               key={label}
               as="a"
               href="#"
               variant="small"
               color="gray"
               className="font-medium text-blue-gray-500"></Typography>
         ))}
      </ul>
   );
};

export default NavList;
