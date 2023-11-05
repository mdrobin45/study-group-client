import { BiPlusMedical } from "react-icons/bi";

const SectionHeader = ({ title, subtitle }) => {
   return (
      <div className="flex flex-col items-center justify-center py-6">
         <h3 className="text-md flex items-center gap-2 md:text-xl text-secondary font-semibold">
            <span>
               <BiPlusMedical />
            </span>
            {subtitle}
         </h3>
         <h2 className="text-3xl lg:text-4xl font-bold py-2">{title}</h2>
      </div>
   );
};

export default SectionHeader;
