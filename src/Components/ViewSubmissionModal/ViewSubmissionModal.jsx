import { Card, CardBody, Dialog, Typography } from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";

const ViewSubmissionModal = ({ submittedData, open, handleOpen }) => {
   return (
      <Dialog
         size="xs"
         open={open}
         handler={handleOpen}
         className="bg-transparent shadow-none">
         <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
               <div className="flex items-center justify-between">
                  <Typography variant="h4" color="blue-gray">
                     Your Submission
                  </Typography>
                  <AiOutlineClose
                     className="cursor-pointer"
                     onClick={handleOpen}
                  />
               </div>

               <div>
                  <Typography className="font-bold text-gray-900">
                     PDF Link
                  </Typography>
                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href={submittedData.pdfLink}
                     className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                     {submittedData.pdfLink}
                  </a>
               </div>
               <div>
                  <Typography className="font-bold text-gray-900">
                     Note
                  </Typography>
                  <p>{submittedData.note}</p>
               </div>
            </CardBody>
         </Card>
      </Dialog>
   );
};

export default ViewSubmissionModal;
