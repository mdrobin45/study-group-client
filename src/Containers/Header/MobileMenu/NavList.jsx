import { NavLink } from "react-router-dom";

const NavList = () => {
   return (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
         <li>
            <NavLink className="text-gray-900" to="/">
               Home
            </NavLink>
         </li>
         <li>
            <NavLink className="text-gray-900" to="/assignments">
               Assignments
            </NavLink>
         </li>
         <li>
            <NavLink className="text-gray-900" to="/create-assignment">
               Create Assignment
            </NavLink>
         </li>
         <li>
            <NavLink className="text-gray-900" to="/submitted-assignments">
               Submitted Assignments
            </NavLink>
         </li>
      </ul>
   );
};

export default NavList;
