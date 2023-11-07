import { Option, Select } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { paginatedAssignment } from "../../API/serverRequest";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import Pagination from "../../Components/Pagination/Pagination";

const AssignmentArchive = () => {
   const [pageNumber, setPageNumber] = useState(1);
   // const { assignments, isPending } = useAssignments();
   const [filteredAssignment, setFilteredAssignment] = useState([]);

   const pageSize = 3;
   // Load data with query stack
   const {
      isPending,
      data: { result, dataCount },
   } = useQuery({
      queryKey: ["assignments", pageNumber],
      queryFn: () => paginatedAssignment(pageNumber, pageSize),
      initialData: { result: [], dataCount: 0 },
   });
   const totalPage = Math.ceil(dataCount / pageSize);
   useEffect(() => {
      setFilteredAssignment(result);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isPending]);

   // Filter assignment
   const handleFilter = (value) => {
      const filter = result.filter((item) => item.difficultyLevel === value);
      value === "All"
         ? setFilteredAssignment(result)
         : setFilteredAssignment(filter);
   };

   console.log(filteredAssignment);
   return (
      <>
         {!isPending && (
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
                  {!filteredAssignment.length ? (
                     <>
                        {result.map((assignment) => (
                           <AssignmentCard
                              assignmentData={assignment}
                              key={assignment._id}
                           />
                        ))}
                     </>
                  ) : (
                     <>
                        {filteredAssignment.map((assignment) => (
                           <AssignmentCard
                              assignmentData={assignment}
                              key={assignment._id}
                           />
                        ))}
                     </>
                  )}
               </div>
               <Pagination
                  setPageNumber={setPageNumber}
                  totalPage={totalPage}
               />
            </>
         )}
      </>
   );
};

export default AssignmentArchive;
