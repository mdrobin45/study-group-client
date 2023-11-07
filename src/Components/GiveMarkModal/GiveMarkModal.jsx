import {
   Button,
   Card,
   CardBody,
   CardFooter,
   Dialog,
   Input,
   Textarea,
   Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import ViewPDFModal from "./ViewPDFModal";

const GiveMarkModal = ({
   open,
   handleOpen,
   changeHandler,
   submittedData,
   markingData,
   handleSubmit,
}) => {
   const [pdfView, setPdfView] = useState(false);

   // Handle pdf view
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
               <Typography variant="h4" color="blue-gray">
                  Give Mark
               </Typography>
               <Typography
                  className="mb-3 font-normal"
                  variant="paragraph"
                  color="gray">
                  Check assignment provide mark and feedback
               </Typography>

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
                  <Typography
                     className="mb-3 font-normal"
                     variant="paragraph"
                     color="gray">
                     {submittedData.note}
                  </Typography>
               </div>

               <Input
                  type="number"
                  name="obtainedMarks"
                  label="Give Mark"
                  value={markingData.obtainedMarks}
                  onChange={changeHandler}
                  size="lg"
               />
               <Textarea
                  name="feedback"
                  value={markingData.feedback}
                  onChange={changeHandler}
                  label="Feedback"
               />
            </CardBody>
            <CardFooter className="pt-0">
               <Button
                  className="bg-secondary tracking-wider text-sm font-normal"
                  onClick={handleSubmit}
                  fullWidth>
                  Submit
               </Button>
            </CardFooter>
         </Card>
      </Dialog>
   );
};

export default GiveMarkModal;
