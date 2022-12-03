import React from 'react';
import { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FormContext } from '../../../context/FormProvider';

const SecondSignUpForm = () => {
  const {userData, setUserData} = useContext(FormContext);
    return (
      <form className="card login-card flex-shrink-0 w-full h-[600px]  max-w-sm border">
        <div className="card-body flex justify-center items-center">
          <h3 className="text-xl text-neutral font-semibold text-center mb-[7.5rem]">
            SignUp Form
          </h3>
          <div className="flex justify-around items-center w-full p-0 m-0 ">
            <input
              disabled
              type="number"
              placeholder="+880"
              className="w-[90px] mb-[4rem] cursor-not-allowed"
              style={{
                borderBottom: "1px solid rgba(164, 164, 164, 1)",
              }}
            />
            <input
              required
              value={userData?.phone_number || ""}
              onChange={(e) =>
                setUserData({ ...userData, phone_number: e.target.value })
              }
              type="number"
              placeholder="1XXXXXXXXXXXX"
              className=" mb-[4rem]"
              style={{
                borderBottom: "1px solid rgba(164, 164, 164, 1)",
              }}
            />
          </div>
          <div className="form-control w-full">
            <input
              required
              value={userData?.email || ""}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              type="email"
              placeholder="write Email Address"
              className=" mb-[3rem]"
              style={{
                borderBottom: "1px solid rgba(164, 164, 164, 1)",
              }}
            />
          </div>
          <div className=" mt-6 flex justify-between items-center">
            <div className="text-start">
              <Link to="/">
                <button className="text-grayy font-bold mr-12">Back</button>
              </Link>
            </div>
            <div>
              {userData?.phone_number && userData?.email ? (
                <Link to="/signin/third">
                  <button className="btn btn-primary rounded-2xl font-normal text-white capitalize text-[16px]">
                    Next Step <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              ) : (
                <Link>
                  <button
                    disabled
                    className="btn btn-primary rounded-2xl font-normal text-white capitalize text-[16px]"
                  >
                    Next Step <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </form>
    );
};

export default SecondSignUpForm;