export const validateAssignmentFields = (assignmentData) => {
   const {
      title,
      description,
      thumbnail,
      totalMarks,
      difficultyLevel,
      dueDate,
   } = assignmentData;
   let errorMessage = "";

   if (
      !title.length ||
      !description.length ||
      !thumbnail.length ||
      !totalMarks.length ||
      !difficultyLevel.length ||
      !dueDate.length
   ) {
      errorMessage = "All fields are required!";
   }

   return errorMessage;
};
