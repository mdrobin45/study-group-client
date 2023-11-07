import axios from "axios";

// Post single assignment
export const createAssignment = async (assignmentData, email) => {
   console.log(email);
   const { data: response } = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/assignments?email=${email}`,
      assignmentData,
      { withCredentials: true }
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

// Get User assignments
export const getUserAssignments = async (email) => {
   const { data: response } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/assignments/user?email=${email}`,
      { withCredentials: true }
   );
   return response;
};

// Get single assignment
export const getSingleAssignment = async (id, email) => {
   const { data: response } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/assignments/${id}?email=${email}`,
      { withCredentials: true }
   );
   return response;
};

// Get single assignment
export const deleteAssignment = async (id, email) => {
   const { data: response } = await axios.delete(
      `${import.meta.env.VITE_SERVER_API}/assignments/${id}?email=${email}`,
      { withCredentials: true }
   );
   return response;
};

// Submit assignment solution
export const submitSolution = async (submissionData, email) => {
   const { data: response } = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/submittedAssignment?email=${email}`,
      submissionData,
      { withCredentials: true }
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
export const getSubmittedAssignments = async (query, email) => {
   const { data: response } = await axios.get(
      `${
         import.meta.env.VITE_SERVER_API
      }/submittedAssignment?filter=${query}&email=${email}`,
      { withCredentials: true }
   );
   return response;
};

// Get user submitted assignments
export const getUserPendingAssignments = async (email) => {
   const { data: response } = await axios.get(
      `${
         import.meta.env.VITE_SERVER_API
      }/submittedAssignment/user?email=${email}`,
      { withCredentials: true }
   );
   return response;
};

// assignment marking and update status
export const assignmentMarking = async (id, markingData, email) => {
   const { data: response } = await axios.put(
      `${
         import.meta.env.VITE_SERVER_API
      }/submittedAssignment/${id}?email=${email}`,
      markingData,
      { withCredentials: true }
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

// Load paginated assignment
export const paginatedAssignment = async (pageNumber, pageSize) => {
   const { data: response } = await axios.get(
      `${
         import.meta.env.VITE_SERVER_API
      }/assignments/paginate?pageNumber=${pageNumber}&pageSize=${pageSize}`
   );
   return response;
};
