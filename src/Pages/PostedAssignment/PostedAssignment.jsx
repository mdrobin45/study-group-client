import PageHeader from "../../Components/PageHeader/PageHeader";
import PostedAssignmentCards from "../../Containers/PostedAssignmentContainer/PostedAssignmentCards";

const PostedAssignment = () => {
   return (
      <div>
         <PageHeader title="My Posted Assignment" />
         <PostedAssignmentCards />
      </div>
   );
};

export default PostedAssignment;
