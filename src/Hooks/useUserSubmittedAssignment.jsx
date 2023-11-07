import { useQuery } from "@tanstack/react-query";
import { getSubmittedAssignments } from "../API/serverRequest";

const useUserSubmittedAssignment = () => {
   const { isPending, data: mySubmittedAssignments } = useQuery({
      queryKey: ["mySubmittedAssignments"],
      queryFn: () => getSubmittedAssignments(""),
   });

   return { mySubmittedAssignments, isPending };
};

export default useUserSubmittedAssignment;
