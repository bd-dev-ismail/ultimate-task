import React from 'react';
import banner from "../../assets/banner.png";
import logo from "../../assets/logo.png";
const FinalSignUpForm = () => {
    return (
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content w-full flex-col lg:gap-32 lg:flex-row">
            <div className="text-center lg:text-left">
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <img src={banner} alt="" />
              </div>
            </div>
            <form className="card login-card flex-shrink-0 w-full h-[600px]  max-w-sm border">
              <div className="card-body flex justify-center items-center">
                <h3 className="text-xl text-neutral font-semibold text-center mb-[7.5rem]">
                  SignUp Form
                </h3>
                <div className="form-control w-full p-0 m-0 ">
                  <input
                    type="password"
                    placeholder="Write Password"
                    className=" "
                    style={{
                      borderBottom: "1px solid rgba(164, 164, 164, 1)",
                    }}
                  />
                  <label className="label">
                    <span style={{ color: 'rgba(180, 180, 180, 1)'}} className="label-text-alt text-sm mb-[4rem]">
                      Your Password must be 8 character
                    </span>
                  </label>
                </div>

                <div className=" mt-6 flex justify-between items-center">
                  <div className="text-start">
                    <button className="text-grayy font-bold mr-12">Back</button>
                  </div>
                  <div>
                    <button className="btn btn-primary rounded-2xl font-normal text-white capitalize text-[16px]">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default FinalSignUpForm;