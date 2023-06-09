import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/MainLayout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Class from "../Pages/Classes/Class";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/class',
          element:<Class></Class>
        }
      ]
    },
  ]);

  export default router;