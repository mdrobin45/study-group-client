import {
   Button,
   Card,
   CardBody,
   Dialog,
   Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ViewPDFModal from "../GiveMarkModal/ViewPDFModal";

const ViewSubmissionModal = ({ submittedData, open, handleOpen }) => {
   const [pdfView, setPdfView] = useState(false);

   const handlePdfView = () => {
      setPdfView(!pdfView);
   };
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
                  <Button className="mt-4" onClick={handlePdfView}>
                     View PDF
                  </Button>
                  <ViewPDFModal
                     pdfLink={submittedData.pdfLink}
                     open={pdfView}
                     handleOpen={handlePdfView}
                  />
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
