import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const loginSubmit = async (e) => {
  e.preventDefault();
  const loginDetails = {
    email,
    password,
  };

  const res = await fetch("/api/adminlogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDetails),
  });
  console.log(res, "login res from admin/login");
  if (res.ok) { 
   
    toast.success(`Logged in Successfully`);
    return navigate("/admindash");

  } else {
    toast.error(`Please check your credentials`);
  }

}
  return (
    <>
    <div className="bg-slate-200 flex">

<div className="bg-green-500 w-[25%] h-screen rounded-r-[20px] shadow-xl">
    <div className="mt-[200px] p-4 text-2xl">
        Admin Login
    </div>
</div>
<div className="bg-slate-200 w-[75%]">
    <div className="mt-[200px] p-4 text-xl">
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

            <button type="submit" className="w-[100px] border-2 bg-green-300 p-2 rounded-lg mt-[30px] float-right hover:bg-green-500">Sign In</button>
        </form>
    </div>
    </div>

</div>

    
    </>
  )
}

export default AdminLogin