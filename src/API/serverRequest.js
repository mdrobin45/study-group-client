import axios from "axios";

// Post single assignment
export const createAssignment = async (assignmentData) => {
   const { data: response } = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/assignments`,
      assignmentData
   );
   return response;
};
