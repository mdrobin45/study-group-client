import {
   Accordion,
   AccordionBody,
   AccordionHeader,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState } from "react";

// FAQ list
const faqList = [
   {
      id: 1,
      question: "How do I create an assignment on this website?",
      answer:
         " To create an assignment, log in to your account, navigate to the 'Create Assignment' section, provide assignment details, set deadlines, and upload any necessary files. Once submitted, your assignment will be ready for others to access and complete.",
   },
   {
      id: 2,
      question: "Can I submit an assignment in any subject or topic?",
      answer:
         "Yes, you can submit assignments on a wide range of subjects and topics. Our platform is designed to accommodate diverse educational fields, allowing you to share and evaluate assignments across various disciplines.",
   },
   {
      id: 3,
      question: "How is peer grading conducted on this website?",
      answer:
         "After submitting an assignment, you'll have the opportunity to participate in peer grading. You'll be assigned assignments from other users for evaluation. You can provide feedback and assign marks based on predefined criteria, contributing to a fair and constructive assessment process.",
   },
   {
      id: 4,
      question: "Is it mandatory to provide feedback when grading assignments?",
      answer:
         "While we encourage constructive feedback to enhance the learning experience, it is not mandatory. However, offering feedback benefits both the grader and the submitter by facilitating improvement and understanding.",
   },
   {
      id: 5,
      question: "How can I view my overall rating and feedback from others?",
      answer:
         "You can access your overall rating and feedback by navigating to your profile dashboard. There, you'll find a summary of your performance, including the average rating and comments provided by your peers on your submitted assignments.",
   },
];
const Faq = () => {
   const [open, setOpen] = useState(0);

   const handleOpen = (value) => setOpen(open === value ? 0 : value);
   return (
      <>
         <div className="lg:w-2/4">
            {faqList.map((faq) => (
               <Accordion key={faq.id} open={open === faq.id}>
                  <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     variants={{
                        hidden: { opacity: 0, x: 0, y: 40 },
                        visible: { opacity: 1, x: 0, y: 0 },
                     }}>
                     <AccordionHeader onClick={() => handleOpen(faq.id)}>
                        {faq.question}
                     </AccordionHeader>
                     <AccordionBody>{faq.answer}</AccordionBody>
                  </motion.div>
               </Accordion>
            ))}
         </div>
      </>
   );
};

export default Faq;
