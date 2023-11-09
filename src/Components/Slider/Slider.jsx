import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
         <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, x: 0, y: 40 },
               visible: { opacity: 1, x: 0, y: 0 },
            }}
            className="text-4xl px-2 md:text-6xl leading-tight font-bold text-white lg:w-2/4">
            {title}
         </motion.h2>
         <motion.div
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
               hidden: { opacity: 0, x: 0, y: 40 },
               visible: { opacity: 1, x: 0, y: 0 },
            }}>
            <Link
               to="/assignments"
               className="bg-blue-500 px-10 mt-6 py-4 hover:bg-blue-700 text-white rounded">
               View all Assignments
            </Link>
         </motion.div>
      </div>
   );
};

export default Slider;
