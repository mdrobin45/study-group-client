import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { assignmentMarking } from "../API/serverRequest";
import { showToast } from "../Utils/toast";

const useMarkingAssignment = (id) => {
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
   return {
      handleModal,
      handleSubmitData,
      submissionData,
      markingFormChangeHandler,
      openModal,
   };
};

export default useMarkingAssignment;
