import { useQuery } from "@tanstack/react-query";
import { getUserAssignments } from "../API/serverRequest";
import useAuth from "./useAuth";

const useUserAssignments = () => {
   const { user } = useAuth();
   const { isPending, data } = useQuery({
      queryKey: ["UserAssignments"],
      queryFn: () => getUserAssignments(user?.email),
   });

   // Reverse array for getting latest first
   const assignments = data ? data.toReversed() : [];
   return {
      assignments,
      isPending,
   };
};

export default useUserAssignments;
