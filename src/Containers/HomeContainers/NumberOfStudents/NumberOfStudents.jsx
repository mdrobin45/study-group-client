import { motion } from "framer-motion";
import Container from "../../../Components/Container/Container";
import student from "../../../assets/images/student.png";
const NumberOfStudents = () => {
   return (
      <Container>
         <div className="flex items-center flex-col lg:flex-row pt-0 md:pt-6 gap-20 justify-between">
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
                  200+ Student Using Our Platform
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
                  our innovative online platform that fosters collaborative
                  learning and peer assessment. Create, submit, and grade
                  assignments with ease, enhancing your educational journey
               </motion.p>
            </div>
            <div>
               <img src={student} alt="Student" />
            </div>
         </div>
      </Container>
   );
};

export default NumberOfStudents;
