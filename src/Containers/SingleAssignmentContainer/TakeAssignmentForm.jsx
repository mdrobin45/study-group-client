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

const TakeAssignmentForm = ({
   open,
   handleOpen,
   changeHandler,
   changeData,
   handleSubmit,
}) => {
   return (
      <Dialog
         size="xs"
         open={open}
         handler={handleOpen}
         className="bg-transparent shadow-none">
         <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
               <Typography variant="h4" color="blue-gray">
                  Submit Solution
               </Typography>
               <Typography
                  className="mb-3 font-normal"
                  variant="paragraph"
                  color="gray">
                  Drop your solution as PDF file link
               </Typography>
               <Input
                  name="pdfLink"
                  value={changeData.pdfLink}
                  onChange={changeHandler}
                  label="PDF File URL"
                  size="lg"
               />
               <Textarea
                  name="note"
                  value={changeData.note}
                  onChange={changeHandler}
                  label="Note"
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

export default TakeAssignmentForm;
