import Swal from "sweetalert2";
import { deleteAssignment } from "../API/serverRequest";
import { showToast } from "../Utils/toast";

const useDeleteAssignment = () => {
   const deleteHandler = ({ email, id }) => {
      Swal.fire({
         title: "Are you sure?",
         text: "This action cannot be undone!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Delete",
      }).then((result) => {
         if (result.isConfirmed) {
            deleteAssignment(id, email).then(
               ({ _id }) => _id && showToast("Task Deleted", "success")
            );
         }
      });
   };
   return { deleteHandler };
};

export default useDeleteAssignment;
