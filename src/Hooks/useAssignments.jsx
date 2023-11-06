import { useQuery } from "@tanstack/react-query";
import { getAllAssignments } from "../API/serverRequest";

const useAssignments = () => {
   const { isPending, data } = useQuery({
      queryKey: ["assignments"],
      queryFn: getAllAssignments,
   });

   // Reverse array for getting latest first
   const assignments = data ? data.toReversed() : [];
   return {
      assignments,
      isPending,
   };
};

export default useAssignments;
