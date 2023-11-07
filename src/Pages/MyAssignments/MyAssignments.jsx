import PageHeader from "../../Components/PageHeader/PageHeader";
import MySubmittedAssignments from "../../Containers/MyAssignmentContainer/MySubmittedAssignments";

const MyAssignments = () => {
   return (
      <div>
         <PageHeader title="My Assignments" />
         <MySubmittedAssignments />
      </div>
   );
};

export default MyAssignments;
