import { createBrowserRouter } from "react-router-dom";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
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
      ],
   },
]);

export default router;
