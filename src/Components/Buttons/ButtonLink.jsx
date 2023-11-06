import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ButtonLink = ({ btnText, to }) => {
   return (
      <Link to={to}>
         <Button className="bg-secondary tracking-wider text-sm font-normal">
            {btnText}
         </Button>
      </Link>
   );
};

export default ButtonLink;
