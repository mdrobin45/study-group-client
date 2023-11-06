import {
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Chip,
   Typography,
} from "@material-tailwind/react";
import { AiFillTrophy, AiOutlineCalendar } from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import ButtonLink from "../Buttons/ButtonLink";

const AssignmentCard = ({ thumbnail, title, totalMarks, dueDate, level }) => {
   return (
      <Card className="mt-6 w-96">
         <CardHeader color="blue-gray" className="relative h-56">
            <img className="h-full" src={thumbnail} alt="Thumbnail" />
         </CardHeader>
         <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
               {title}
            </Typography>
            <div className="flex items-center justify-between">
               <p className="flex items-center gap-3">
                  <span>
                     <AiFillTrophy className="text-primary" />
                  </span>
                  <span>Total Mark: ${totalMarks}</span>
               </p>
               <p className="flex items-center gap-3">
                  <span>
                     <AiOutlineCalendar className="text-primary" />
                  </span>
                  <span>{dueDate}</span>
               </p>
            </div>
            <p className="flex mt-3 items-center gap-3">
               <span>
                  <IoExtensionPuzzleSharp className="text-primary" />
               </span>
               <span className="flex items-center gap-2">
                  <span>Difficulty:</span>
                  <Chip
                     className=" capitalize"
                     variant="ghost"
                     color={
                        (level === "Easy" && "green") ||
                        (level === "Medium" && "cyan") ||
                        (level === "Hard" && "red")
                     }
                     size="sm"
                     value={level}
                  />
               </span>
            </p>
         </CardBody>
         <CardFooter className="pt-0 justify-between flex">
            <ButtonLink btnText="View Details" to={`/assignments/id`} />
            <ButtonLink btnText="Update" to={`/update/id`} />
         </CardFooter>
      </Card>
   );
};

export default AssignmentCard;
