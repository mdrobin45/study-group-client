const Pagination = ({ totalPage, setPageNumber }) => {
   const pageNumbers = [];
   for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
   }
   return (
      <div>
         <nav className="pt-20">
            <ul className="flex">
               {pageNumbers.map((number, index) => (
                  <li key={index}>
                     <button
                        onClick={() => {
                           setPageNumber(number);
                        }}
                        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300">
                        <span className="material-icons text-sm">{number}</span>
                     </button>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
};

export default Pagination;
