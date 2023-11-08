import { ClipLoader } from "react-spinners";
import SubmittedCard from "../../Components/AssignmentCard/SubmittedCard";
import useUserSubmittedAssignment from "../../Hooks/useUserSubmittedAssignment";

const MySubmittedAssignments = () => {
   const { isPending, mySubmittedAssignments } = useUserSubmittedAssignment();

   return (
      <>
         {!isPending ? (
            <div className="grid px-2 md:px-4 lg:px-8 my-20 mb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4">
               {mySubmittedAssignments.map((item) => (
                  <SubmittedCard assignmentData={item} key={item._id} />
               ))}
            </div>
         ) : (
            <div className="h-screen flex flex-col items-center justify-center">
               <ClipLoader color="#1eaace" />
            </div>
         )}
      </>
   );
};

export default MySubmittedAssignments;
