import { deleteAssignment } from "../API/serverRequest";
import { showToast } from "../Utils/toast";

const useDeleteAssignment = () => {
   const deleteHandler = ({ email, id }) => {
      deleteAssignment(id, email).then(
         ({ _id }) => _id && showToast("Task Deleted", "success")
      );
   };
   return { deleteHandler };
};

export default useDeleteAssignment;
