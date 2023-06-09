import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/MainLayout/Main";
import Home from "../Pages/HomePage/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;