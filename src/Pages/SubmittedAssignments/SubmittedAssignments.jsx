import PageHeader from "../../Components/PageHeader/PageHeader";
import SubmittedAssignmentArchive from "../../Containers/SubmittedAssignmentsContainer/SubmittedAssignmentArchive";

const SubmittedAssignments = () => {
   return (
      <div>
         <PageHeader title="Submitted Assignments" />
         <SubmittedAssignmentArchive />
      </div>
   );
};

export default SubmittedAssignments;
