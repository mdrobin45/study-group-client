const SectionHeader = ({ title, subtitle }) => {
   return (
      <div className="flex flex-col items-center justify-center pt-10 pb-4 lg:pb-10">
         <h3 className="text-md flex uppercase items-center gap-2 text-secondary">
            {subtitle}
         </h3>
         <h2 className="text-3xl lg:text-4xl font-bold py-2">{title}</h2>
      </div>
   );
};

export default SectionHeader;
