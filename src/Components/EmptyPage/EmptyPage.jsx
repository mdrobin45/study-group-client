import { motion } from "framer-motion";
import emptyImage from "../../assets/images/empty.svg";

const EmptyPage = () => {
   return (
      <motion.div
         initial={{ opacity: 0.8, x: 30 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8 }}
         className="flex flex-col items-center justify-center h-[70vh]">
         <img className="w-2/4" src={emptyImage} alt="Empty" />
         <h2 className="text-4xl font-bold text-gray-500">Page is Empty</h2>
      </motion.div>
   );
};

export default EmptyPage;
