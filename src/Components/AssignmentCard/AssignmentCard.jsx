import {
   Button,
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Chip,
   Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { AiFillTrophy, AiOutlineCalendar } from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import useDeleteAssignment from "../../Hooks/useDeleteAssignment";
import ButtonLink from "../Buttons/ButtonLink";

const AssignmentCard = ({ assignmentData }) => {
   const {
      _id,
      thumbnail,
      title,
      totalMarks,
      dueDate,
      userEmail,
      difficultyLevel: level,
   } = assignmentData;

   const { deleteHandler } = useDeleteAssignment();
   const { pathname } = useLocation();
   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         variants={{
            hidden: { opacity: 0, x: 0, y: 40 },
            visible: { opacity: 1, x: 0, y: 0 },
         }}>
         <Card className="md:w-86 lg:w-96 border pt-4">
            <CardHeader color="blue-gray" className="relative h-56 mt-0">
               <img className="h-full mt-0" src={thumbnail} alt="Thumbnail" />
            </CardHeader>
            <CardBody>
               <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
               </Typography>
               <div className="flex flex-col lg:flex-row lg:items-center justify-between">
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
            <CardFooter className="pt-0 justify-between flex flex-col lg:flex-row">
               {pathname === "/posted-assignment" ? (
                  <Button
                     onClick={() => {
                        deleteHandler({ email: userEmail, id: _id });
                     }}
                     className="bg-red-500 tracking-wider text-sm font-normal">
                     Delete
                  </Button>
               ) : (
                  <ButtonLink
                     btnText="View Details"
                     to={`/assignments/${_id}`}
                  />
               )}

               <ButtonLink btnText="Update" to={`/update/${_id}`} />
            </CardFooter>
         </Card>
      </motion.div>
   );
};

export default AssignmentCard;
