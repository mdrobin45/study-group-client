import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { assignmentMarking } from "../API/serverRequest";
import { showToast } from "../Utils/toast";

const useMarkingAssignment = (id) => {
   const [openMarkingModal, setOpenMarkingModal] = useState(false);
   const [openViewSubmissionModal, setOpenViewSubmissionModal] =
      useState(false);
   const [submissionData, setSubmissionData] = useState({
      obtainedMarks: "",
      feedback: "",
      status: "complete",
   });

   // Handle marking modal
   const handleMarkModal = () => {
      setOpenMarkingModal(!openMarkingModal);
   };

   // Handle marking modal
   const handleViewSubmissionModal = () => {
      setOpenViewSubmissionModal(!openViewSubmissionModal);
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
         setOpenMarkingModal(!openMarkingModal);
      },
      onError: () => {
         showToast("Something went wrong!", "error");
      },
   });

   // handle modal submit
   const handleSubmitData = () => {
      mutate();
   };
   return {
      handleMarkModal,
      handleSubmitData,
      submissionData,
      markingFormChangeHandler,
      openMarkingModal,
      handleViewSubmissionModal,
      openViewSubmissionModal,
   };
};

export default useMarkingAssignment;
