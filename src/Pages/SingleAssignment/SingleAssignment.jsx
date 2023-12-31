import PageHeader from "../../Components/PageHeader/PageHeader";
import AssignmentDetails from "../../Containers/SingleAssignmentContainer/AssignmentDetails";

const SingleAssignment = () => {
   return (
      <div>
         <PageHeader title="Assignment Details" />
         <div className="px-4 md:px-6 lg:px-8">
            <AssignmentDetails />
         </div>
      </div>
   );
};

export default SingleAssignment;
