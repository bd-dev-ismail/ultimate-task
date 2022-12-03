import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
const Main = () => {
    return (
      <div>
        <Helmet>
          <title>Signup - Ultimate</title>
        </Helmet>
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
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Main;