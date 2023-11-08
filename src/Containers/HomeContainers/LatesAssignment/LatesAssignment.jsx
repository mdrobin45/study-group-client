import AssignmentCard from "../../../Components/AssignmentCard/AssignmentCard";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useAssignments from "../../../Hooks/useAssignments";

const LatesAssignment = () => {
   const { assignments, isPending } = useAssignments();
   const sliceAss = assignments.slice(0, 6);
   return (
      <>
         {!isPending && (
            <>
               <div className="pt-20">
                  <SectionHeader
                     title="Lates Assignments"
                     subtitle="Explore more"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 gap-y-10 md:gap-x-10 lg:gap-x-4">
                     {sliceAss.map((assignment) => (
                        <AssignmentCard
                           assignmentData={assignment}
                           key={assignment._id}
                        />
                     ))}
                  </div>
               </div>
            </>
         )}
      </>
   );
};

export default LatesAssignment;
