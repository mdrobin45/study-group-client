import { NavLink } from "react-router-dom";
import "./style.css";

const NavList = () => {
   return (
      <ul className="flex items-center gap-7">
         <li>
            <NavLink to="/">Home</NavLink>
         </li>
         <li>
            <NavLink to="/about">About</NavLink>
         </li>
         <li>
            <NavLink to="/contact">Contact</NavLink>
         </li>
         <li>
            <NavLink to="/contact">Contact</NavLink>
         </li>
         <li>
            <NavLink to="/contact">Contact</NavLink>
         </li>
      </ul>
   );
};

export default NavList;
