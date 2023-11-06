import axios from "axios";

// Post single assignment
export const createAssignment = async (assignmentData) => {
   const { data: response } = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/assignments`,
      assignmentData
   );
   return response;
};

// Get all assignments
export const getAllAssignments = async () => {
   const { data: response } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/assignments`
   );
   return response;
};

// Get single assignment
export const getSingleAssignment = async (id) => {
   const { data: response } = await axios(
      `${import.meta.env.VITE_SERVER_API}/assignments/${id}`
   );
   return response;
};

// Submit assignment solution
export const submitSolution = async (submissionData) => {
   const { data: response } = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/submittedAssignment`,
      submissionData
   );
   return response;
};
