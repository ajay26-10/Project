import React, { useEffect, useState } from "react";
import UserNav from "../components/UserNav";

const UserDashboard = () => {
  // const [user, setUser] = useState({ name: "", email: "" });  //working code
  const [user, setUser] = useState({ name: "", email: "", projects: [] });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/dashboard', {
          method: 'GET',
          credentials: 'include', // Include credentials to send cookies
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log("res",response)
      if (response.ok) {
        const data = await response.json();
        // setUser({ name: data.name, email: data.email });    //wroking code
        setUser({ name: data.name, email: data.email, projects: data.projects,totalPledged: data.totalPledged });
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  fetchUser();
  
  }, []);
  return (
    <>
      <UserNav />

      <div className="mt-[40px] mx-4 my-4 h-screen">
        <h1 className="text-3xl">Account Details</h1>

        <div className="flex">
          <div className="mt-4">
            <h1>Name</h1>
            <span id="name" className="font-bold text-xl">{user.name}</span>
          </div>
        </div>

        <div className="mt-4">
          <h2>Email Address</h2>
          <span id="email" className="font-bold text-xl">{user.email}</span>
        </div>

        <div className="mt-8 bg-green-300 text-xl rounded-[20px] shadow-xl">
          <h1 className="text-2xl pt-2 text-center">Total Funds Raised</h1>
          <h1 className=" text-center text-3xl font-bold"> ₹ {user.totalPledged} </h1>
          <div className="h-[200px] flex gap-2 p-2">
            {user.projects.map((project, index) => (
              <div key={index} className="w-[33%] border-2 border-white rounded-[20px] p-2">
                <h3 className="font-bold text-center m-3">{project.title}</h3>
                <p className="font-semibold text-center mt-1">{project.tagline}</p>
                <p className=" text-center mt-1">Target: ₹{project.targetAmount}</p>
                <p className=" text-center mt-1">Raised: ₹{project.pledgedAmount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
