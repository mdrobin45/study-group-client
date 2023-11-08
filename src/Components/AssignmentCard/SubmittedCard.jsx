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
import { BsTrophy } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import useMarkingAssignment from "../../Hooks/useMarkingAssignment";
import GiveMarkModal from "../GiveMarkModal/GiveMarkModal";
import ViewFeedbackModal from "../VewFeedbackModal/ViewFeedbackModal";
import ViewSubmissionModal from "../ViewSubmissionModal/ViewSubmissionModal";

const SubmittedCard = ({ assignmentData }) => {
   const { pathname } = useLocation();
   const {
      _id: id,
      assignment,
      examineeName,
      note,
      pdfLink,
      status,
      feedback,
      obtainedMarks,
   } = assignmentData;
   console.log(assignment);
   const {
      handleMarkModal,
      handleSubmitData,
      submissionData,
      markingFormChangeHandler,
      openMarkingModal,
      handleViewSubmissionModal,
      openViewSubmissionModal,
      handleViewFeedbackModal,
      openViewFeedbackModal,
   } = useMarkingAssignment(id);

   return (
      <Card className="md:w-86 lg:w-96 border pt-4">
         <CardHeader color="blue-gray" className="relative h-56 mt-0">
            <img
               className="h-full mt-0"
               src={assignment?.thumbnail}
               alt="Thumbnail"
            />
         </CardHeader>
         <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
               {assignment?.title}
            </Typography>
            <div className="flex mt-4 items-center gap-3">
               <span>
                  <AiFillTrophy className="text-primary" />
               </span>
               <span>
                  <span className="font-bold text-gray-900">Total Marks: </span>
                  {assignment?.totalMarks}
               </span>
            </div>
            {obtainedMarks && (
               <div className="flex mt-4 items-center gap-3">
                  <span>
                     <BsTrophy className="text-primary" />
                  </span>
                  <span>
                     <span className="font-bold text-gray-900">
                        Obtained Marks:{" "}
                     </span>
                     {obtainedMarks}
                  </span>
               </div>
            )}

            {status !== "complete" && (
               <div className="flex mt-3 items-center gap-3">
                  <span>
                     <FaUserGraduate className="text-primary" />
                  </span>
                  <span>
                     <span className="font-bold text-gray-900">Examinee: </span>
                     {examineeName}
                  </span>
               </div>
            )}

            <div className="flex mt-3 items-center gap-3">
               <span>
                  <FaRegHourglassHalf className="text-primary" />
               </span>
               <span className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">Status:</span>
                  <Chip
                     className=" capitalize"
                     variant="ghost"
                     color={status === "pending" ? "cyan" : "green"}
                     size="sm"
                     value={status}
                  />
               </span>
            </div>
         </CardBody>
         <CardFooter className="pt-0 justify-between flex">
            {status === "complete" ? (
               <>
                  <Button
                     onClick={handleViewFeedbackModal}
                     className="bg-secondary w-full tracking-wider text-sm font-normal">
                     View Feedback
                  </Button>
                  <ViewFeedbackModal
                     handleOpen={handleViewFeedbackModal}
                     feedback={feedback}
                     open={openViewFeedbackModal}
                  />
               </>
            ) : (
               <>
                  {pathname === "/my-submission" ? (
                     <>
                        <Button
                           onClick={handleViewSubmissionModal}
                           className="bg-secondary w-full tracking-wider text-sm font-normal">
                           My Submission
                        </Button>
                        <ViewSubmissionModal
                           handleOpen={handleViewSubmissionModal}
                           submittedData={{ pdfLink, note }}
                           open={openViewSubmissionModal}
                        />
                     </>
                  ) : (
                     <Button
                        onClick={handleMarkModal}
                        className="bg-secondary w-full tracking-wider text-sm font-normal">
                        Give Mark
                     </Button>
                  )}
               </>
            )}

            <GiveMarkModal
               handleSubmit={handleSubmitData}
               submittedData={{ pdfLink, note }}
               markingData={submissionData}
               changeHandler={markingFormChangeHandler}
               open={openMarkingModal}
               handleOpen={handleMarkModal}
            />
         </CardFooter>
      </Card>
   );
};

export default SubmittedCard;
