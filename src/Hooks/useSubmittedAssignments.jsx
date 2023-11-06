import { useQuery } from "@tanstack/react-query";
import { getSubmittedAssignments } from "../API/serverRequest";

const useSubmittedAssignments = () => {
   const { isPending, data: pendingAssignments } = useQuery({
      queryKey: ["pendingAssignments"],
      queryFn: () => getSubmittedAssignments("pending"),
   });

   return { pendingAssignments, isPending };
};

export default useSubmittedAssignments;
