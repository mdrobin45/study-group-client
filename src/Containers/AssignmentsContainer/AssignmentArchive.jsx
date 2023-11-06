import { Option, Select } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import useAssignments from "../../Hooks/useAssignments";

const AssignmentArchive = () => {
   const { assignments, isPending } = useAssignments();
   const [filteredAssignment, setFilteredAssignment] = useState([]);

   useEffect(() => {
      setFilteredAssignment(assignments);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isPending]);

   // Filter assignment
   const handleFilter = (value) => {
      const filter = assignments.filter(
         (item) => item.difficultyLevel === value
      );
      value === "All"
         ? setFilteredAssignment(assignments)
         : setFilteredAssignment(filter);
   };
   return (
      <>
         {!isPending ? (
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
            <span>Hello</span>
         )}
      </>
   );
};

export default AssignmentArchive;
