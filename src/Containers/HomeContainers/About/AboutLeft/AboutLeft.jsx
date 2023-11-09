import { motion } from "framer-motion";

const AboutLeft = () => {
   return (
      <div className="lg:w-2/4 text-center md:text-left">
         <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, x: 0, y: 40 },
               visible: { opacity: 1, x: 0, y: 0 },
            }}
            className="text-2xl md:text-4xl font-bold">
            Experience a dynamic online assignment community
         </motion.h1>
         <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
               hidden: { opacity: 0, x: 0, y: 40 },
               visible: { opacity: 1, x: 0, y: 0 },
            }}
            className="pt-6">
            our innovative online platform that fosters collaborative learning
            and peer assessment. Create, submit, and grade assignments with
            ease, enhancing your educational journey
         </motion.p>
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
               hidden: { opacity: 0, x: 0, y: 40 },
               visible: { opacity: 1, x: 0, y: 0 },
            }}
            className="flex items-center gap-10 mt-6">
            <p className="text-center">
               <span className="text-4xl font-bold block">240+</span>
               <span className="">Members</span>
            </p>
            <p className="text-center">
               <span className="text-4xl font-bold block">400+</span>
               <span className="">Assignments</span>
            </p>
            <p className="text-center">
               <span className="text-4xl font-bold block">20+</span>
               <span className="">Topics</span>
            </p>
         </motion.div>
      </div>
   );
};

export default AboutLeft;
