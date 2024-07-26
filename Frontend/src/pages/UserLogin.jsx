import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const loginSubmit = async (e) => {
  e.preventDefault();
  const loginDetails = {
    email,
    password,
  };

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDetails),
  });
  if (res.ok) { 
   
    toast.success(`Logged in Successfully`);
    return navigate("/dashboard");

  } else {
    toast.error(`Please check your credentials`);
    return navigate("/");
  }

}
  return (
    <>
      <div className="bg-slate-200 flex">

<div className="bg-green-500 w-[25%] h-screen rounded-r-[20px] shadow-xl">
    <div className="mt-[200px] p-4 text-2xl">
        Welcome  back
        <br></br><br></br>
        Sign in to your Account
    </div>
</div>
<div className="bg-slate-200 w-[75%]">
    <div className="mt-[200px] p-4 text-xl">
    <span className="float-right text-xs">Don't have an account ? <a href="/signup" className='text-blue-600 hover:text-blue-800'>Sign Up</a></span>
    <form onSubmit={loginSubmit} className="text-xl">
            Your Account Details <br></br>
            <div>
                <label htmlFor='email'>
                <input type="text" 
                name="email" 
                id="email" 
                placeholder="Enter Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-[30px] border-2 border-solid rounded-md h-[50px] w-[350px] pl-2"/>
                </label>
            </div>

            <div>
                <label htmlFor='password'>
                <input type="password" 
                name="password" 
                id="password" 
                placeholder="Enter A Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-[30px] border-2 border-solid rounded-md h-[50px] w-[350px] pl-2"/>
                </label>
            </div>

            <p className="mt-[60px] text-lg">By clicking the Sign In button below, you agree to the Fund A Dream Terms of Service and acknowledge the Privacy Notice.</p>
            <button type="submit" className="w-[100px] border-2 bg-green-300 p-2 rounded-lg mt-[30px] float-right hover:bg-green-500">Sign In</button>
        </form>
    </div>
    </div>

</div>

    </>
  )
}

export default UserLogin