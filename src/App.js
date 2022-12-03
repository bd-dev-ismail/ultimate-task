
import './App.css';
import AttendenceInfo from './Components/AttendenceInfo/AttendenceInfo';
import FinalSignUpForm from './Components/SignUp/FinalSignUpForm/FinalSignUpForm';
import FristSignUpForm from './Components/SignUp/FristSignUpForm/FristSignUpForm';
import Login from './Components/Login/Login';
import SecondSignUpForm from './Components/SignUp/SecondSignUpForm/SecondSignUpForm';
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './context/FormProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  const {page} = useContext(FormContext);
  return (
    <div>
      {/* {
        page === 1 ? <FristSignUpForm/> :  page === 2 ? <SecondSignUpForm/> : <FinalSignUpForm/>
      }
      
      
      {/* 
      
      <Login/>
      <AttendenceInfo/> */} 
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
