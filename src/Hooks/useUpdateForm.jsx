import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleAssignment, updateAssignment } from "../API/serverRequest";
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

const useUpdateAssignment = () => {
   const { id } = useParams();
   const { user } = useAuth();
   const navigate = useNavigate();
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [assignmentData, setAssignmentData] = useState(initialFields);

   // changeHandler
   const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setAssignmentData((prevData) => ({ ...prevData, [name]: value }));
   };

   // Get single assignment
   const { data } = useQuery({
      queryKey: ["assignment"],
      queryFn: () => getSingleAssignment(id),
   });

   useEffect(() => {
      setAssignmentData((prevData) => ({
         ...prevData,
         title: data && data.title,
         description: data && data.description,
         thumbnail: data && data.thumbnail,
         totalMarks: data && data.totalMarks,
         difficultyLevel: data && data.difficultyLevel,
         dueDat: data && data.dueDate,
      }));
   }, [data]);

   // Set user email in assignment data
   useEffect(() => {
      setAssignmentData((prevData) => ({
         ...prevData,
         userEmail: user && user.email,
      }));
   }, [user]);

   // Call server with tan stack query

   const { isPending, mutate } = useMutation({
      mutationFn: () => updateAssignment(assignmentData, id),
      onSuccess: ({ _id }) => {
         _id && showToast("Assignment Updated", "success");
         setAssignmentData(initialFields);
         navigate("/assignments");
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

export default useUpdateAssignment;
