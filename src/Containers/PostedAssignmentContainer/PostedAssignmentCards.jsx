import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import useUserAssignments from "../../Hooks/useUserAssignments";

const PostedAssignmentCards = () => {
   const { isPending, assignments } = useUserAssignments();
   return (
      <>
         {!isPending ? (
            <div className="grid px-2 md:px-4 lg:px-8 my-20 mb-20 grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-4">
               {assignments.map((item) => (
                  <AssignmentCard assignmentData={item} key={item._id} />
               ))}
            </div>
         ) : (
            "Loading"
         )}
      </>
   );
};

export default PostedAssignmentCards;
