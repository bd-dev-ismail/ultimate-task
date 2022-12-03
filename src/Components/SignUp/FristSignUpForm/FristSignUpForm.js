import React from 'react';
import { useContext } from 'react';

import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FormContext } from '../../../context/FormProvider';

import './FristSignUpForm.css';
const FristSignUpForm = () => {
  const {userData , setUserData} = useContext(FormContext);
  // if(userData.length === 0){
  //   return alert('Required')
  // }
    return (
      <form className="card login-card flex-shrink-0 w-full h-[600px]  max-w-sm border">
        <div className="card-body flex justify-center items-center">
          <h3 className="text-xl text-neutral font-semibold text-center mb-[7.5rem]">
            SignUp Form
          </h3>
          <div className="form-control w-full p-0 m-0 ">
            <input
              value={userData?.first_name || ''}
              onChange={(e) =>
                setUserData({ ...userData, first_name: e.target.value })
              }
              required
              type="text"
              placeholder="Write Frist Name"
              className=" mb-[4rem]"
              style={{
                borderBottom: "1px solid rgba(164, 164, 164, 1)",
              }}
            />
          </div>
          <div className="form-control w-full ">
            <input
              required
              value={userData?.last_Name || ''}
              onChange={(e) =>
                setUserData({ ...userData, last_Name: e.target.value })
              }
              type="text"
              placeholder="write last Name"
              className=" mb-[3rem]"
              style={{
                borderBottom: "1px solid rgba(164, 164, 164, 1)",
              }}
            />
          </div>
          <div className="form-control mt-6">
            {/* onClick={() => setPage(page + 1)} */}
            {userData.first_name && userData.last_Name ? (
              <Link to="/signin/second">
                <button className="btn btn-primary rounded-2xl font-normal text-white capitalize text-[16px]">
                  Next Step <FaArrowRight className="ml-2" />
                </button>
              </Link>
            ) : (
              <Link>
                <button
                  disabled
                  className=" btn btn-primary rounded-2xl font-normal text-white capitalize text-[16px]"
                >
                  Next Step <FaArrowRight className="ml-2" />
                </button>
              </Link>
            )}
          </div>
          <div>
            <h3 className="mt-20 mb-14">
              Already Have an account?{" "}
              <Link
                to="/login"
                className="uppercase font-semibold underline text-primary"
              >
                Login Here
              </Link>{" "}
            </h3>
          </div>
        </div>
      </form>
    );
};

export default FristSignUpForm;