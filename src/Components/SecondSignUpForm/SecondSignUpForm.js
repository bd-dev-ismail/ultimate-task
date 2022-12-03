import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import banner from "../../assets/banner.png";
import logo from "../../assets/logo.png";
const SecondSignUpForm = () => {
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
                  <div className="flex justify-around items-center w-full p-0 m-0 ">
                    <input
                      type="text"
                      placeholder="+880"
                      className="w-[90px] mb-[4rem]"
                      style={{
                        borderBottom: "1px solid rgba(164, 164, 164, 1)",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="1XXXXXXXXXXXX"
                      className=" mb-[4rem]"
                      style={{
                        borderBottom: "1px solid rgba(164, 164, 164, 1)",
                      }}
                    />
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="text"
                      placeholder="write Email Address"
                      className=" mb-[3rem]"
                      style={{
                        borderBottom: "1px solid rgba(164, 164, 164, 1)",
                      }}
                    />
                  </div>
                  <div className=" mt-6 flex justify-between items-center">
                    <div className="text-start">
                      <button className="text-grayy font-bold mr-12">
                        Back
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-primary rounded-2xl font-normal text-white capitalize text-[16px]">
                        Next Step <FaArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SecondSignUpForm;