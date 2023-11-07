import { useQuery } from "@tanstack/react-query";
import { getUserPendingAssignments } from "../API/serverRequest";
import useAuth from "./useAuth";

const useUserSubmittedAssignment = () => {
   const { user } = useAuth();
   const { isPending, data: mySubmittedAssignments } = useQuery({
      queryKey: ["mySubmittedAssignments"],
      queryFn: () => getUserPendingAssignments(user && user.email),
   });

   return { mySubmittedAssignments, isPending };
};

export default useUserSubmittedAssignment;
