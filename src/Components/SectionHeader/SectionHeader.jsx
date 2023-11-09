import { motion } from "framer-motion";
const SectionHeader = ({ title, subtitle }) => {
   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         variants={{
            hidden: { opacity: 0, x: 0, y: 40 },
            visible: { opacity: 1, x: 0, y: 0 },
         }}
         className="flex flex-col items-center justify-center pt-10 pb-4 lg:pb-10">
         <h3 className="text-md flex uppercase items-center gap-2 text-secondary">
            {subtitle}
         </h3>
         <h2 className="text-3xl lg:text-4xl font-bold py-2">{title}</h2>
      </motion.div>
   );
};

export default SectionHeader;
