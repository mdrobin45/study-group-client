import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { assignmentMarking } from "../API/serverRequest";
import { showToast } from "../Utils/toast";
import useAuth from "./useAuth";

const useMarkingAssignment = (id) => {
   const { user } = useAuth();
   const [openMarkingModal, setOpenMarkingModal] = useState(false);
   const [openViewSubmissionModal, setOpenViewSubmissionModal] =
      useState(false);
   const [openViewFeedbackModal, setOpenViewFeedbackModal] = useState(false);
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

   // Handle marking modal
   const handleViewFeedbackModal = () => {
      setOpenViewFeedbackModal(!openViewFeedbackModal);
   };

   // Marking change handler
   const markingFormChangeHandler = (e) => {
      const { name, value } = e.target;
      setSubmissionData((prevData) => ({ ...prevData, [name]: value }));
   };

   // Handle submission with tan stack query
   const { mutate } = useMutation({
      mutationKey: ["assignmentSubmit"],
      mutationFn: () => assignmentMarking(id, submissionData, user?.email),
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
      handleViewFeedbackModal,
      openViewFeedbackModal,
   };
};

export default useMarkingAssignment;
