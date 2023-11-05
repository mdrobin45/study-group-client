import { NavLink } from "react-router-dom";
import "./style.css";

const NavList = () => {
   return (
      <ul className="flex items-center gap-7">
         <li>
            <NavLink to="/">Home</NavLink>
         </li>
         <li>
            <NavLink to="/assignments">Assignments</NavLink>
         </li>
         <li>
            <NavLink to="/create-assignment">Create Assignment</NavLink>
         </li>
         <li>
            <NavLink to="/submitted-assignments">Submitted Assignments</NavLink>
         </li>
      </ul>
   );
};

export default NavList;
