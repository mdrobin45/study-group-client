import { useQuery } from "@tanstack/react-query";
import { getSubmittedAssignments } from "../API/serverRequest";
import useAuth from "./useAuth";

const useSubmittedAssignments = () => {
   const { user } = useAuth();
   const { isPending, data: pendingAssignments } = useQuery({
      queryKey: ["pendingAssignments"],
      queryFn: () => getSubmittedAssignments("pending", user?.email),
   });

   return { pendingAssignments, isPending };
};

export default useSubmittedAssignments;
