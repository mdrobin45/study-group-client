const FeatureCard = ({ icon, text, bgColor }) => {
   return (
      <div
         style={{ backgroundColor: bgColor }}
         className="px-10 text-center py-6 w-66 h-52 rounded-md flex flex-col items-center justify-center">
         <img className=" w-16 pb-3" src={icon} alt="" />
         <h2 className="text-2xl font-bold text-white">{text}</h2>
      </div>
   );
};

export default FeatureCard;
