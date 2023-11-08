import { Button, IconButton } from "@material-tailwind/react";

const Pagination = ({
   currentPage,
   setCurrentPage,
   pageNumbers,
   endIndex,
   filteredAssignment,
}) => {
   return (
      <div className="flex items-center gap-4 justify-center">
         <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}>
            Previous
         </Button>
         <div className="flex items-center gap-2">
            {pageNumbers.map((number) => (
               <>
                  <IconButton
                     disabled={number === currentPage}
                     onClick={() => setCurrentPage(number)}>
                     {number}
                  </IconButton>
               </>
            ))}
         </div>
         <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={endIndex >= filteredAssignment.length}>
            Next
         </Button>
      </div>
   );
};

export default Pagination;
