import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/MainLayout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Class from "../Pages/Classes/Class";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import DashLayout from "../Pages/Dashboard/DashLayout/DashLayout";
import SelectedClasses from "../Pages/Dashboard/StudantDash/SelectedClass/SelectedClasses";
import Enrolledclass from "../Pages/Dashboard/StudantDash/Enrolled/Enrolledclass";
import PaymentHistory from "../Pages/Dashboard/StudantDash/PaymentHistory/PaymentHistory";
import PostClass from "../Pages/Dashboard/InstructorDash/PostClass/PostClass";
import AllInstructor from "../Pages/Instructor/AllInstructor";
import MyClass from "../Pages/Dashboard/InstructorDash/MyClass/MyClass";
import ManageUser from "../Pages/Dashboard/AdminDash/ManageUser/ManageUser";
import ManageClass from "../Pages/Dashboard/AdminDash/ManageClass/ManageClass";

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
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<Signup></Signup>
        },
        {
          path:'insntractor',
          element:<AllInstructor></AllInstructor>
        },
      
      ]
    },
    {
      path:'dashborad',
      element:<DashLayout></DashLayout>,
      children:[
        {
          path:'dashborad/classes',
          element:<SelectedClasses></SelectedClasses>
        },
        {
          path:'dashborad/enrolled',
          element:<Enrolledclass></Enrolledclass>
        },
        {
          path:'dashborad/history',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'dashborad/postclass',
          element:<PostClass></PostClass>
        },
        {
          path:'dashborad/myclass',
          element:<MyClass></MyClass>
        },
        {
          path:'dashborad/manageuser',
          element:<ManageUser></ManageUser>
        },
        {
          path:'dashborad/manageclass',
          element:<ManageClass></ManageClass>
        }
      ]
    }
  ]);

  export default router;