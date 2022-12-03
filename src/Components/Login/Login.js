import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import banner from "../../assets/banner.png";
import logo from "../../assets/logo.png";
const Login = () => {
    const [error, setError] = useState('');
  
    const handleLogin = (e)=> {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 8){
            return setError("Password Must Be 8 characters")
        } 
        const user = {email, password}
        // post method for check login user data
        fetch("https://test.nexisltd.com/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
        .then(data => {
            console.log('Got the access token',data.access_token);
            setError("");
           localStorage.setItem("access_token", data.access_token);
           
        }).catch(err => console.error(err))
        
    }
    return (
      <div>
        <Helmet>
            <title>Login - Ultimate</title>
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
              <form
                onSubmit={handleLogin}
                className="card login-card flex-shrink-0 w-full h-[630px]  max-w-sm border"
              >
                <div className="card-body flex justify-center items-center">
                  <h3 className="text-xl text-neutral font-semibold text-center mb-[7.5rem]">
                    Log In Form
                  </h3>
                  <div className="form-control w-full p-0 m-0 ">
                    <input
                    required
                      type="email"
                      name='email'
                      placeholder="Write Email Address"
                      className=" mb-[4rem]"
                      style={{
                        borderBottom: "1px solid rgba(164, 164, 164, 1)",
                      }}
                    />
                  </div>
                  <div className="form-control w-full p-0 m-0 ">
                    <input
                    required
                      type="password"
                      name='password'
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
                        {error}
                      </span>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                   
                      <button
                        type="submit"
                        className="btn btn-primary rounded-2xl font-normal text-white capitalize text-[16px]"
                      >
                        Login
                      </button>
                    
                  </div>
                  <div>
                    <h3 className="mt-20 mb-14">
                      Don't Have an account?{" "}
                      <Link
                        to="/"
                        className="uppercase font-semibold underline text-primary"
                      >
                        SignUp Here
                      </Link>
                    </h3>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;