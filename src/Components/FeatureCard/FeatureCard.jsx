import { motion } from "framer-motion";

const FeatureCard = ({ icon, text, bgColor, delay }) => {
   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ duration: 0.5, delay: delay }}
         variants={{
            hidden: { opacity: 0, x: 0, y: 40 },
            visible: { opacity: 1, x: 0, y: 0 },
         }}
         style={{ backgroundColor: bgColor }}
         className="px-10 text-center py-6 w-66 h-52 rounded-md flex flex-col items-center justify-center">
         <img className=" w-16 pb-3" src={icon} alt="" />
         <h2 className="text-2xl font-bold text-white">{text}</h2>
      </motion.div>
   );
};

export default FeatureCard;
