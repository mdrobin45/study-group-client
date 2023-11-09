import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Containers/ErrorPage/ErrorPage";
import Assignments from "../Pages/Assignments/Assignments";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import PostedAssignment from "../Pages/PostedAssignment/PostedAssignment";
import Register from "../Pages/Register/Register";
import SingleAssignment from "../Pages/SingleAssignment/SingleAssignment";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import Root from "../Root/Root";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
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
            element: (
               <PrivateRoute>
                  <CreateAssignment />
               </PrivateRoute>
            ),
         },
         {
            path: "/update/:id",
            element: (
               <PrivateRoute>
                  <UpdateAssignment />
               </PrivateRoute>
            ),
         },
         {
            path: "/assignments",
            element: <Assignments />,
         },
         {
            path: "/submitted-assignments",
            element: (
               <PrivateRoute>
                  <SubmittedAssignments />
               </PrivateRoute>
            ),
         },
         {
            path: "/assignments/:id",
            element: (
               <PrivateRoute>
                  <SingleAssignment />
               </PrivateRoute>
            ),
         },
         {
            path: "/my-submission",
            element: (
               <PrivateRoute>
                  <MyAssignments />
               </PrivateRoute>
            ),
         },
         {
            path: "/posted-assignment",
            element: (
               <PrivateRoute>
                  <PostedAssignment />
               </PrivateRoute>
            ),
         },
      ],
   },
]);

export default router;
