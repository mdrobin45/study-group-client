import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { createAssignment } from "../API/serverRequest";
import { validateAssignmentFields } from "../Utils/assignmentFieldValidator";
import { showToast } from "../Utils/toast";
import useAuth from "./useAuth";

// Assignment Data fields
const initialFields = {
   title: "",
   description: "",
   thumbnail: "",
   totalMarks: "",
   difficultyLevel: "",
   dueDate: "",
};

const useCreateAssignment = () => {
   const { user } = useAuth();
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [assignmentData, setAssignmentData] = useState(initialFields);

   // changeHandler
   const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setAssignmentData((prevData) => ({ ...prevData, [name]: value }));
   };

   // Set user email in assignment data
   useEffect(() => {
      setAssignmentData((prevData) => ({
         ...prevData,
         userEmail: user && user.email,
      }));
   }, [user]);

   // Call server with tan stack query
   const { mutate, isPending } = useMutation({
      mutationFn: () => createAssignment(assignmentData, user && user.email),
      onSuccess: ({ _id }) => {
         _id && showToast("Assignment Created", "success");
         setAssignmentData(initialFields);
      },
      onError: () => {
         showToast("Something went wrong!", "error");
      },
   });

   // Handle form submission
   const handleFormSubmit = (e) => {
      e.preventDefault();

      // Field validation
      const validation = validateAssignmentFields(assignmentData);
      if (validation) {
         showToast(validation, "error");
         return;
      }

      mutate();
   };
   return {
      isPending,
      handleFormSubmit,
      onChangeHandler,
      selectedDate,
      setAssignmentData,
      assignmentData,
      setSelectedDate,
   };
};

export default useCreateAssignment;
