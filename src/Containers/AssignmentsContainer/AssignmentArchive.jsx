import { Option, Select } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import Pagination from "../../Components/Pagination/Pagination";
import useAssignments from "../../Hooks/useAssignments";

const AssignmentArchive = () => {
   const { assignments, isPending } = useAssignments();
   const [filteredAssignment, setFilteredAssignment] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 6;

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
         setCurrentPage(1);
      }
   };

   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const pageAssignments = filteredAssignment.slice(startIndex, endIndex);

   const totalPages = Math.ceil(filteredAssignment.length / itemsPerPage);

   const pageNumbers = [];
   for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
   }

   useEffect(() => {
      if (!isPending && filteredAssignment.length === 0) {
         const defaultAssignments = assignments.slice(0, itemsPerPage);
         setFilteredAssignment(defaultAssignments);
      }
   }, [isPending, assignments, filteredAssignment]);
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
                  {pageAssignments.map((assignment) => (
                     <AssignmentCard
                        assignmentData={assignment}
                        key={assignment._id}
                     />
                  ))}
               </div>
               <Pagination
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  pageNumbers={pageNumbers}
                  endIndex={endIndex}
                  filteredAssignment={filteredAssignment}
               />
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
