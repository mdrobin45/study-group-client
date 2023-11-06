import {
   Button,
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Chip,
   Typography,
} from "@material-tailwind/react";
import { AiFillTrophy } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { FaRegHourglassHalf } from "react-icons/fa6";

const SubmittedCard = ({ assignmentData }) => {
   const { assignment, examineeName, note, pdfLink, status } = assignmentData;
   return (
      <Card className="w-96 border pt-4">
         <CardHeader color="blue-gray" className="relative h-56 mt-0">
            <img
               className="h-full mt-0"
               src={assignment.thumbnail}
               alt="Thumbnail"
            />
         </CardHeader>
         <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
               {assignment.title}
            </Typography>
            <div className="flex mt-4 items-center gap-3">
               <span>
                  <AiFillTrophy className="text-primary" />
               </span>
               <span>
                  <span className="font-bold text-gray-900">Total Marks: </span>
                  {assignment.totalMarks}
               </span>
            </div>
            <div className="flex mt-3 items-center gap-3">
               <span>
                  <FaUserGraduate className="text-primary" />
               </span>
               <span>
                  <span className="font-bold text-gray-900">Examinee: </span>
                  {examineeName}
               </span>
            </div>
            <div className="flex mt-3 items-center gap-3">
               <span>
                  <FaRegHourglassHalf className="text-primary" />
               </span>
               <span className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">Status:</span>
                  <Chip
                     className=" capitalize"
                     variant="ghost"
                     color="cyan"
                     size="sm"
                     value={status}
                  />
               </span>
            </div>
         </CardBody>
         <CardFooter className="pt-0 justify-between flex">
            <Button className="bg-secondary w-full tracking-wider text-sm font-normal">
               Give Mark
            </Button>
         </CardFooter>
      </Card>
   );
};

export default SubmittedCard;
