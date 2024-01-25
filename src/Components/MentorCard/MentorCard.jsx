import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const MentorCard = ({ mentor }) => {
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
         className="max-w-sm bg-white border hover:shadow-lg border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <div
            className="w-full h-60 rounded-t-md"
            style={{
               backgroundImage: `url(${mentor?.photo})`,
               backgroundPosition: "center center",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
            }}></div>
         <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {mentor?.name}
            </h5>
            <p className="text-gray-500">{mentor?.position}</p>
            <div className="flex items-center gap-3 my-2 text-xl">
               <a
                  className="border rounded-full p-2 hover:bg-primary hover:text-white transition-all"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaFacebookF />
               </a>
               <a
                  className="border rounded-full p-2 hover:bg-primary hover:text-white transition-all"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedinIn />
               </a>
               <a
                  className="border rounded-full p-2 hover:bg-primary hover:text-white transition-all"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaTwitter />
               </a>
            </div>
            <p className="mb-3 font-normal text-gray-900 mt-2 dark:text-gray-400">
               {mentor?.description}
            </p>
         </div>
      </motion.div>
   );
};

export default MentorCard;
