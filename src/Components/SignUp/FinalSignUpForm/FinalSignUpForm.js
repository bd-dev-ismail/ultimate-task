import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../../../context/FormProvider';

const FinalSignUpForm = () => {
  const { userData, setUserData, submitForm , error} = useContext(FormContext);
    return (
      <form
        onSubmit={submitForm}
        className="card login-card flex-shrink-0 w-full h-[600px]  max-w-sm border"
      >
        <div className="card-body flex justify-center items-center">
          <h3 className="text-xl text-neutral font-semibold text-center mb-[7.5rem]">
            SignUp Form
          </h3>
          <div className="form-control w-full p-0 m-0 ">
            <input
              required
              value={userData?.password || ''}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              type="password"
              placeholder="Write Password"
              className=" "
              style={{
                borderBottom: "1px solid rgba(164, 164, 164, 1)",
              }}
            />
            <label className="label">
              <span
                style={{ color: "rgba(180, 180, 180, 1)" }}
                className="label-text-alt text-sm mb-[4rem]"
              >
                {error ? error : "Your Password must be 8 character"}
              </span>
            </label>
          </div>

          <div className=" mt-6 flex justify-between items-center">
            <div className="text-start">
              <Link to="/signin/second">
                <button className="text-grayy font-bold mr-12">Back</button>
              </Link>
            </div>
            <div>
              {userData?.password?.length >= 8 ? (
                <button
                  type="submit"
                  className="btn btn-primary rounded-2xl font-normal text-white capitalize text-[16px]"
                >
                  Sign Up
                </button>
              ) : (
                <button
                  disabled
                  className="btn btn-primary rounded-2xl font-normal text-white capitalize text-[16px]"
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    );
};

export default FinalSignUpForm;