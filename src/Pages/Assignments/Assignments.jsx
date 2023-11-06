import PageHeader from "../../Components/PageHeader/PageHeader";
import AssignmentArchive from "../../Containers/AssignmentsContainer/AssignmentArchive";

const Assignments = () => {
   return (
      <div>
         <PageHeader title="Assignments" />
         <div className="px-2 md:px-6 lg:px-8">
            <AssignmentArchive />
         </div>
      </div>
   );
};

export default Assignments;
