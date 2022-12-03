import { createBrowserRouter } from "react-router-dom";
import AttendenceInfo from "../Components/AttendenceInfo/AttendenceInfo";
import Login from "../Components/Login/Login";
import FinalSignUpForm from "../Components/SignUp/FinalSignUpForm/FinalSignUpForm";
import FristSignUpForm from "../Components/SignUp/FristSignUpForm/FristSignUpForm";
import SecondSignUpForm from "../Components/SignUp/SecondSignUpForm/SecondSignUpForm";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <FristSignUpForm />,
      },
      {
        path: '/signin/second',
        element: <SecondSignUpForm/>
      },
      {
        path: '/signin/third',
        element: <FinalSignUpForm/>
      }
    ],
  },
  {
    path: '/login',
    element: <Login/>,

  },
  {
    path: '/attendence-info',
    element: <AttendenceInfo/>
  }
]);