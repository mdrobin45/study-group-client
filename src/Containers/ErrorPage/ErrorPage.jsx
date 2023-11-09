import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import errorImage from "../../assets/images/404.png";
const ErrorPage = () => {
   return (
      <div className="flex flex-col h-screen items-center justify-center">
         <motion.div
            initial={{ opacity: 0.8, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-2/4 mx-auto">
            <img className="" src={errorImage} alt="Page not found" />
         </motion.div>
         <div className="text-center mt-10">
            <motion.h2
               initial={{ opacity: 0.8, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-4xl font-bold">
               Oops... Page Not Found!
            </motion.h2>
            <motion.p
               initial={{ opacity: 0.8, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-lg mt-3">
               Sorry! This Page Is Not Available!
            </motion.p>
            <motion.div
               initial={{ opacity: 0.8, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="mt-4">
               <Link
                  className="bg-secondary py-3 px-4 rounded-full tracking-wider w-full inline lg:mt-0 text-white text-sm font-semibold text-white0"
                  to="/">
                  Go Back To Home Page
               </Link>
            </motion.div>
         </div>
      </div>
   );
};

export default ErrorPage;
