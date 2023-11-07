import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleAssignment, submitSolution } from "../API/serverRequest";
import { showToast } from "../Utils/toast";
import useAuth from "./useAuth";

// Initial submission fields
const initialFields = {
   assignment: "",
   status: "pending",
   pdfLink: "",
   note: "",
};

const useSolutionSubmit = () => {
   const { id } = useParams();
   const { user } = useAuth();
   const [openModal, setOpenModal] = useState(false);
   const [submissionData, setSubmissionData] = useState(initialFields);

   // Handle modal
   const handleModal = () => {
      setOpenModal(!openModal);
   };

   // Set examinee details in submission data
   useEffect(() => {
      setSubmissionData((prevData) => ({
         ...prevData,
         examineeName: user && user.displayName,
         examineeEmail: user && user.email,
         assignment: id,
      }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [user]);

   // Get single assignment
   const { isPending: pendingAssignment, data: singleAssignment } = useQuery({
      queryKey: ["assignment"],
      queryFn: () => getSingleAssignment(id, user?.email),
   });

   // Assignment submission change handler
   const submissionChangeHandler = (e) => {
      const { name, value } = e.target;
      setSubmissionData((prevData) => ({ ...prevData, [name]: value }));
   };

   // Handle submission with tan stack query
   const { mutate } = useMutation({
      mutationKey: ["assignmentSubmit"],
      mutationFn: () => submitSolution(submissionData, user?.email),
      onSuccess: ({ _id }) => {
         _id && showToast("Assignment Submitted", "success");
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
      handleSubmitData,
      submissionChangeHandler,
      singleAssignment,
      pendingAssignment,
      handleModal,
      submissionData,
      openModal,
   };
};

export default useSolutionSubmit;
