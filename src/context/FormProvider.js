import React, { useState } from 'react';
import { createContext } from 'react';

export const FormContext = createContext();
const FormProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [userData, setUserData] = useState([]);
    
    const submitForm = (e)=> {
        e.preventDefault();
        //post method for store user data
       fetch("https://test.nexisltd.com/signup ", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
       }).then(res => res.json())
       .then(data => {
        console.log(data);
        
       })
       .cath(err=> console.error(err));
    console.log(userData);
       
    }
    const formInfo = {
      user,
      setUser,
      userData,
      setUserData,
      error,
      setError,
      submitForm,
    };
    return (
        <FormContext.Provider value ={formInfo}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;