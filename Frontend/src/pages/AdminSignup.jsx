import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupSubmit = async (adminDetails) => {
    const res = await fetch("/api/adminsignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminDetails),
    });

    console.log(res);
    if (res.ok) {
      toast.success(`Signup success`);
      return navigate("/adminlogin");
    } else {
      toast.error(`Please check the input data`);
      return navigate("/adminsignup");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const adminDetails = {
        email,
        password,
    };

    signupSubmit(adminDetails);
  };


  return (
    <>
      <div className="bg-slate-200 flex">
        <div className="bg-green-500 w-[25%] h-screen rounded-r-[20px] shadow-xl">
          <div className="mt-[200px] p-4 text-2xl">
            Admin Sign Up
            <br></br>
            <br></br>
            Create an Account
          </div>
        </div>
        <div className="bg-slate-200 w-[75%]">
          <div className="mt-[200px] p-4 text-xl">
            <span className="float-right text-xs">
              Already have an account?{" "}
              <a href="/adminlogin" className="text-blue-600 hover:text-blue-800">
                Sign In
              </a>
            </span>
            <form onSubmit={submitForm} className="text-xl">
              Your Account Details <br></br>
              <div>
                <label htmlFor="email">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-[30px] border-2 border-solid rounded-md h-[50px] w-[350px] pl-2"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter A Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-[30px] border-2 border-solid rounded-md h-[50px] w-[350px] pl-2"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="w-[100px] border-2 bg-green-300 p-2 rounded-lg mt-[30px] float-right hover:bg-green-500"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignup;
