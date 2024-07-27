import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const signupSubmit = async (userDetails) => {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    console.log(res);
    if (res.ok) {
      toast.success(`Signup success`);
      return navigate("/login");
    } else {
      toast.error(`Please check the input data`);
      return navigate("/signup");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const userDetails = {
      name,
      password,
      email,
    };

    signupSubmit(userDetails);
  };
  return (
    <>
      <div className="bg-slate-200 flex">
        <div className="bg-green-500 w-[25%] h-screen rounded-r-[20px] shadow-xl">
          <div className="mt-[200px] p-4 text-2xl">
            Welcome to Fund A Dream
            <br></br>
            <br></br>
            Create an Account
          </div>
        </div>
        <div className="bg-slate-200 w-[75%]">
          <div className="mt-[200px] p-4 text-xl">
            <span className="float-right text-xs">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:text-blue-800">
                Sign In
              </a>
            </span>
            <form onSubmit={submitForm} className="text-xl">
              Your Account Details <br></br>
              <div>
                <label htmlFor="name">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-[30px] border-2 border-solid rounded-md h-[50px] w-[350px] pl-2"
                  />
                </label>
              </div>
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
              <p className="mt-[60px] text-lg">
                By clicking the Sign Up button below, you agree to the Fund A
                Dream Terms of Service and acknowledge the Privacy Notice.
              </p>
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

export default UserSignup;
