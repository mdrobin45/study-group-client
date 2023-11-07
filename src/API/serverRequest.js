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
export const updateAssignment = async (submissionData, id, email) => {
   const { data: response } = await axios.put(
      `${import.meta.env.VITE_SERVER_API}/assignments/${id}?email=${email}`,
      submissionData,
      { withCredentials: true }
   );
   return response;
};

// Get all pending Submitted assignments
export const getSubmittedAssignments = async (query) => {
   const { data: response } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/submittedAssignment?filter=${query}`
   );
   return response;
};

// Get user submitted assignments
export const getUserPendingAssignments = async (email) => {
   const { data: response } = await axios.get(
      `${
         import.meta.env.VITE_SERVER_API
      }/submittedAssignment/user?email=${email}`
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

// Request for token
export const generateToken = async (email) => {
   const { data: response } = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/token`,
      { email },
      { withCredentials: true }
   );
   return response;
};

// Clear token from cookie when logout
export const clearToken = async () => {
   const { data: response } = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/logout`,
      { withCredentials: true }
   );
   return response;
};
