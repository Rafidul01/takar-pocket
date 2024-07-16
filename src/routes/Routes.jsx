import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/register",
          element: <Register/>,
        }
      ],
    },
]);

export default router;