import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import useAssignments from "../../Hooks/useAssignments";

const AssignmentArchive = () => {
   const { assignments, isPending } = useAssignments();
   return (
      <>
         {!isPending ? (
            <div className="grid my-20 grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-4">
               {assignments.map((assignment) => (
                  <AssignmentCard
                     key={assignment._id}
                     thumbnail={assignment.thumbnail}
                     title={assignment.title}
                     totalMarks={assignment.totalMarks}
                     dueDate={assignment.dueDate}
                     level={assignment.difficultyLevel}
                  />
               ))}
            </div>
         ) : (
            <span>Hello</span>
         )}
      </>
   );
};

export default AssignmentArchive;
