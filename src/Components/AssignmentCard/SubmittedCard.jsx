import {
   Button,
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Chip,
   Typography,
} from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { AiFillTrophy } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { assignmentMarking } from "../../API/serverRequest";
import { showToast } from "../../Utils/toast";
import GiveMarkModal from "../GiveMarkModal/GiveMarkModal";

const SubmittedCard = ({ assignmentData }) => {
   const {
      _id: id,
      assignment,
      examineeName,
      note,
      pdfLink,
      status,
   } = assignmentData;
   const [openModal, setOpenModal] = useState(false);
   const [submissionData, setSubmissionData] = useState({
      obtainedMarks: "",
      feedback: "",
      status: "complete",
   });

   // Handle modal
   const handleModal = () => {
      setOpenModal(!openModal);
   };

   // Marking change handler
   const markingFormChangeHandler = (e) => {
      const { name, value } = e.target;
      setSubmissionData((prevData) => ({ ...prevData, [name]: value }));
   };

   // Handle submission with tan stack query
   const { mutate } = useMutation({
      mutationKey: ["assignmentSubmit"],
      mutationFn: () => assignmentMarking(id, submissionData),
      onSuccess: ({ _id }) => {
         _id && showToast("Feedback Submitted", "success");
         setOpenModal(!openModal);
      },
      onError: () => {
         showToast("Something went wrong!", "error");
      },
   });

   // handle modal submit
   const handleSubmitData = () => {
      mutate();
   };
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
            <Button
               onClick={handleModal}
               className="bg-secondary w-full tracking-wider text-sm font-normal">
               Give Mark
            </Button>
            <GiveMarkModal
               handleSubmit={handleSubmitData}
               submittedData={{ pdfLink, note }}
               markingData={submissionData}
               changeHandler={markingFormChangeHandler}
               open={openModal}
               handleOpen={handleModal}
            />
         </CardFooter>
      </Card>
   );
};

export default SubmittedCard;
