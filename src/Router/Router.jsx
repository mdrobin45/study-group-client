import { createBrowserRouter } from "react-router-dom";
import Assignments from "../Pages/Assignments/Assignments";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import Register from "../Pages/Register/Register";
import SingleAssignment from "../Pages/SingleAssignment/SingleAssignment";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import Root from "../Root/Root";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/create-assignment",
            element: <CreateAssignment />,
         },
         {
            path: "/update/:id",
            element: <UpdateAssignment />,
         },
         {
            path: "/assignments",
            element: <Assignments />,
         },
         {
            path: "/submitted-assignments",
            element: <SubmittedAssignments />,
         },
         {
            path: "/assignments/:id",
            element: <SingleAssignment />,
         },
         {
            path: "/my-assignments",
            element: <MyAssignments />,
         },
      ],
   },
]);

export default router;
