import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import banner from '../../assets/banner.png';
import logo from '../../assets/logo.png';
import './FristSignUpForm.css';
const FristSignUpForm = () => {
    return (
      <div>
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
                      type="text"
                      placeholder="write last Name"
                      className=" mb-[3rem]"
                      style={{
                        borderBottom: "1px solid rgba(164, 164, 164, 1)",
                      }}
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary rounded-2xl font-normal text-white capitalize text-[16px]">
                      Next Step <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                  <div>
                    <h3 className="mt-20 mb-14">Already Have an account? </h3>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FristSignUpForm;