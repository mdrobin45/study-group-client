import {
   Button,
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Chip,
   Typography,
} from "@material-tailwind/react";
import { AiFillTrophy, AiOutlineCalendar } from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import useSolutionSubmit from "../../Hooks/useSolutionSubmit";
import TakeAssignmentForm from "./TakeAssignmentForm";

const AssignmentDetails = () => {
   const {
      handleSubmitData,
      submissionChangeHandler,
      singleAssignment,
      pendingAssignment,
      submissionData,
      handleModal,
      openModal,
   } = useSolutionSubmit();

   return (
      <>
         {!pendingAssignment ? (
            <Card className="w-full mx-auto my-20 max-w-[36rem] shadow-lg">
               <CardHeader floated={false} color="blue-gray">
                  <img
                     src={singleAssignment.thumbnail}
                     alt="ui/ux review check"
                  />
               </CardHeader>
               <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                     <Typography
                        variant="h5"
                        color="blue-gray"
                        className="font-medium">
                        {singleAssignment.title}
                     </Typography>
                     <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal">
                        <AiFillTrophy className="text-primary" />
                        Total Marks: {singleAssignment.totalMarks}
                     </Typography>
                  </div>
                  <Typography color="gray">
                     {singleAssignment.description}
                  </Typography>
                  <div className="flex mt-3 items-center gap-3">
                     <span>
                        <IoExtensionPuzzleSharp className="text-primary" />
                     </span>
                     <span className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">Level:</span>
                        <Chip
                           className=" capitalize"
                           variant="ghost"
                           color={
                              (singleAssignment.difficultyLevel === "Easy" &&
                                 "green") ||
                              (singleAssignment.difficultyLevel === "Medium" &&
                                 "cyan") ||
                              (singleAssignment.difficultyLevel === "Hard" &&
                                 "red")
                           }
                           size="sm"
                           value={singleAssignment.difficultyLevel}
                        />
                     </span>
                  </div>
                  <div className="flex mt-4 items-center gap-3">
                     <span>
                        <AiOutlineCalendar className="text-primary" />
                     </span>
                     <span className="font-bold text-gray-900">Last Date:</span>
                     <span>{singleAssignment.dueDate}</span>
                  </div>
               </CardBody>
               <CardFooter className="pt-3">
                  <Button
                     onClick={handleModal}
                     className="bg-secondary tracking-wider text-sm font-normal"
                     size="lg"
                     fullWidth={true}>
                     Take Assignment
                  </Button>
                  <TakeAssignmentForm
                     handleSubmit={handleSubmitData}
                     changeData={submissionData}
                     changeHandler={submissionChangeHandler}
                     open={openModal}
                     handleOpen={handleModal}
                  />
               </CardFooter>
            </Card>
         ) : (
            "loading"
         )}
      </>
   );
};

export default AssignmentDetails;
