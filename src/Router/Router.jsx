import { createBrowserRouter } from "react-router-dom";
import Assignments from "../Pages/Assignments/Assignments";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SingleAssignment from "../Pages/SingleAssignment/SingleAssignment";
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
            path: "/assignments/:id",
            element: <SingleAssignment />,
         },
      ],
   },
]);

export default router;
