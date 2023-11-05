const Slider = ({ title, bgImage }) => {
   return (
      <div
         className="text-center h-[90vh] flex flex-col items-center justify-center"
         style={{
            background: `linear-gradient(rgba(45,55,60,0.7) 100%,rgba(45,55,60,0.7) 100%), url(${bgImage})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
         }}>
         <h2 className="text-6xl leading-tight font-bold text-white w-2/4">
            {title}
         </h2>
         <button className="bg-blue-500 px-10 mt-6 py-4 hover:bg-blue-700 text-white rounded">
            View all Assignments
         </button>
      </div>
   );
};

export default Slider;
