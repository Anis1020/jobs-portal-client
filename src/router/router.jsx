import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Forms/Login/Login";
import Registration from "../Forms/Registration/Registration";
import AddJob from "../Forms/AddJob/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/addJob",
        element: <AddJob></AddJob>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
