import { Card, CardBody, Dialog, Typography } from "@material-tailwind/react";

const ViewPDFModal = ({ open, handleOpen, pdfLink }) => {
   const originalLink = pdfLink.split("/view")[0];

   return (
      <Dialog
         size="lg"
         open={open}
         handler={handleOpen}
         className="bg-transparent shadow-none">
         <Card className="mx-auto w-full">
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
               <iframe
                  src={`${originalLink}/preview`}
                  title="PDF Preview"
                  width="100%"
                  height="500"></iframe>
            </CardBody>
         </Card>
      </Dialog>
   );
};

export default ViewPDFModal;
