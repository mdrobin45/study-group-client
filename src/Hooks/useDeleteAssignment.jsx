import { deleteAssignment } from "../API/serverRequest";

const useDeleteAssignment = () => {
   const deleteHandler = ({ email, id }) => {
      deleteAssignment(id, email).then((res) => console.log(res));
   };
   return { deleteHandler };
};

export default useDeleteAssignment;
