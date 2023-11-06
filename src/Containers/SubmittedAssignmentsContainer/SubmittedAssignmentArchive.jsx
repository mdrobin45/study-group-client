import SubmittedCard from "../../Components/AssignmentCard/SubmittedCard";
import useSubmittedAssignments from "../../Hooks/useSubmittedAssignments";

const SubmittedAssignmentArchive = () => {
   const { pendingAssignments, isPending } = useSubmittedAssignments();
   console.log(pendingAssignments);
   return (
      <>
         {!isPending ? (
            <div className="grid mb-20 grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-4">
               {pendingAssignments.map((item) => (
                  <SubmittedCard assignmentData={item} key={item._id} />
               ))}
            </div>
         ) : (
            "Loading"
         )}
      </>
   );
};

export default SubmittedAssignmentArchive;
