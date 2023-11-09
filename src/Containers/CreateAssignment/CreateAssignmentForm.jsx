import { Option, Select } from "@material-tailwind/react";
import { motion } from "framer-motion";
import moment from "moment/moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormSubmit from "../../Components/InputFields/FormSubmit";
import NumberField from "../../Components/InputFields/NumberField";
import TextField from "../../Components/InputFields/TextField";
import PageHeader from "../../Components/PageHeader/PageHeader";
import useCreateAssignment from "../../Hooks/useCreateAssignment";
import "./style.css";

const CreateAssignmentForm = () => {
   const {
      handleFormSubmit,
      onChangeHandler,
      setSelectedDate,
      selectedDate,
      setAssignmentData,
      assignmentData,
      isPending,
   } = useCreateAssignment();

   return (
      <div>
         <PageHeader title="Create Assignment" />
         <motion.form
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
               duration: 0.3,
               ease: "linear",
               scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 120,
               },
            }}
            onSubmit={handleFormSubmit}
            className="lg:w-2/4 mx-3  lg:mx-auto my-20 p-4 border shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-center pb-4">
               Assignment Details
            </h2>
            <div className="grid grid-cols-2 gap-3">
               <TextField
                  onChange={onChangeHandler}
                  label="Assignment Title"
                  name="title"
                  value={assignmentData.title}
               />
               <NumberField
                  onChange={onChangeHandler}
                  label="Total Marks"
                  name="totalMarks"
                  value={assignmentData.totalMarks}
               />
               <TextField
                  onChange={onChangeHandler}
                  label="Thumbnail URL"
                  name="thumbnail"
                  value={assignmentData.thumbnail}
               />
               <div className="mt-3 w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                     Due Date
                  </label>
                  <DatePicker
                     value={assignmentData.dueDate}
                     className="bg-gray-50 border-gray-300 border-2 text-gray-900 text-sm rounded-lg focus:border-secondary focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     dateFormat="dd/MMM/yyyy"
                     selected={selectedDate}
                     onSelect={setSelectedDate}
                     onChange={(date) =>
                        setAssignmentData((prevData) => ({
                           ...prevData,
                           dueDate: moment(date).format("DD MMM YYYY"),
                        }))
                     }
                  />
               </div>
               <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                     Difficulty Level
                  </label>
                  <Select
                     value={assignmentData.difficultyLevel}
                     onChange={(value) =>
                        setAssignmentData((prevData) => ({
                           ...prevData,
                           difficultyLevel: value,
                        }))
                     }>
                     <Option value="Easy">Easy</Option>
                     <Option value="Medium">Medium</Option>
                     <Option value="Hard">Hard</Option>
                  </Select>
               </div>
            </div>
            <div className="my-4">
               <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="description">
                  Description
               </label>
               <textarea
                  onChange={onChangeHandler}
                  className="bg-gray-50 border-gray-300 border-2 text-gray-900 text-sm rounded-lg focus:border-secondary focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="description"
                  value={assignmentData.description}
                  rows="4"
                  id="description"></textarea>
            </div>
            <FormSubmit
               clickHandler={handleFormSubmit}
               pending={isPending}
               btnText="Submit"
            />
         </motion.form>
      </div>
   );
};

export default CreateAssignmentForm;
