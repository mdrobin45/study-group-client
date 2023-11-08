import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import useAssignments from "../../Hooks/useAssignments";

const AssignmentArchive = () => {
   const { assignments, isPending } = useAssignments();
   const [filteredAssignment, setFilteredAssignment] = useState([]);

   console.log(assignments);

   const handleFilter = (value) => {
      if (!isPending) {
         if (value === "All") {
            setFilteredAssignment(assignments);
         } else {
            const filtered = assignments.filter(
               (item) => item.difficultyLevel === value
            );
            setFilteredAssignment(filtered);
         }
      }
   };
   return (
      <>
         <div className="mt-20 mb-10 flex flex-col items-end">
            <div className="w-72">
               <Select onChange={handleFilter} label="Filter by">
                  <Option value="All">All</Option>
                  <Option value="Easy">Easy</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="Hard">Hard</Option>
               </Select>
            </div>
         </div>
         {!isPending ? (
            <>
               <div className="grid mb-20 grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-4">
                  {filteredAssignment.map((assignment) => (
                     <AssignmentCard
                        assignmentData={assignment}
                        key={assignment._id}
                     />
                  ))}
               </div>
            </>
         ) : (
            <div className="h-screen flex flex-col items-center justify-center">
               <ClipLoader color="#1eaace" />
            </div>
         )}
      </>
   );
};

export default AssignmentArchive;
