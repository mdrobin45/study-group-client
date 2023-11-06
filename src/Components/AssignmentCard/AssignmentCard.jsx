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

const AssignmentCard = ({ assignmentData }) => {
   const {
      _id,
      thumbnail,
      title,
      totalMarks,
      dueDate,
      difficultyLevel: level,
   } = assignmentData;
   return (
      <Card className="w-96 border pt-4">
         <CardHeader color="blue-gray" className="relative h-56 mt-0">
            <img className="h-full mt-0" src={thumbnail} alt="Thumbnail" />
         </CardHeader>
         <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
               {title}
            </Typography>
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <span>
                     <AiFillTrophy className="text-primary" />
                  </span>
                  <span>Total Marks: {totalMarks}</span>
               </div>
               <div className="flex items-center gap-3">
                  <span>
                     <AiOutlineCalendar className="text-primary" />
                  </span>
                  <span>{dueDate}</span>
               </div>
            </div>
            <div className="flex mt-3 items-center gap-3">
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
            </div>
         </CardBody>
         <CardFooter className="pt-0 justify-between flex">
            <ButtonLink btnText="View Details" to={`/assignments/${_id}`} />
            <ButtonLink btnText="Update" to={`/update/${_id}`} />
         </CardFooter>
      </Card>
   );
};

export default AssignmentCard;
