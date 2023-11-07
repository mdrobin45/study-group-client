import { Card, CardBody, Dialog, Typography } from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";

const ViewFeedbackModal = ({ feedback, open, handleOpen }) => {
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
                     Instructor Feedback
                  </Typography>
                  <AiOutlineClose
                     className="cursor-pointer"
                     onClick={handleOpen}
                  />
               </div>
               <div>
                  <Typography className="font-bold text-gray-900">
                     Feedback
                  </Typography>
                  <p>{feedback}</p>
               </div>
            </CardBody>
         </Card>
      </Dialog>
   );
};

export default ViewFeedbackModal;
