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

// Update assignment
export const updateAssignment = async (submissionData, id) => {
   const { data: response } = await axios.put(
      `${import.meta.env.VITE_SERVER_API}/assignments/${id}`,
      submissionData
   );
   return response;
};

// Get Submitted assignments
export const getSubmittedAssignments = async (query) => {
   const { data: response } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/submittedAssignment?filter=${query}`
   );
   return response;
};

// assignment marking and update status
export const assignmentMarking = async (id, markingData) => {
   const { data: response } = await axios.put(
      `${import.meta.env.VITE_SERVER_API}/submittedAssignment/${id}`,
      markingData
   );
   return response;
};
