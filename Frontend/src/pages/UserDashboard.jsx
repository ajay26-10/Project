import React, { useEffect, useState } from "react";
import UserNav from "../components/UserNav";

const UserDashboard = () => {
  // const [user, setUser] = useState({ name: "", email: "" });  //working code
  const [user, setUser] = useState({ name: "", email: "", projects: [] });
  const [currentProject, setCurrentProject] = useState(null);
  const [formValues, setFormValues] = useState({ title: "", tagline: "", targetAmount: 0, pledgedAmount: 0 });

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

  const handleUpdateClick = (project) => {
    setCurrentProject(project);
    setFormValues({ 
      title: project.title, 
      tagline: project.tagline, 
      targetAmount: project.targetAmount, 
      pledgedAmount: project.pledgedAmount 
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/projects/${currentProject._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        const updatedProject = await response.json();
        setUser((prevUser) => ({
          ...prevUser,
          projects: prevUser.projects.map((project) =>
            project._id === updatedProject._id ? updatedProject : project
          ),
        }));
        setCurrentProject(null);
      } else {
        console.error('Failed to update project');
      }
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

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
          <div className="h-[300px] flex gap-2 p-2">
            {user.projects.map((project, index) => (
              <div key={index} className="w-[33%] border-2 border-white rounded-[20px] p-2">
                <h3 className="font-bold text-center m-3">{project.title}</h3>
                <p className="font-semibold text-center mt-1">{project.tagline}</p>
                <p className=" text-center mt-1">Target: ₹{project.targetAmount}</p>
                <p className=" text-center mt-1">Raised: ₹{project.pledgedAmount}</p>
                <div className="w-[100px] mx-auto mt-4">
                <button className="w-[100px] border-2 border-black bg-white p-2 rounded-lg hover:bg-green-500" onClick={() => handleUpdateClick(project)}>Update</button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {currentProject && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">Update Project</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input 
                  type="text" 
                  name="title" 
                  value={formValues.title} 
                  onChange={handleInputChange} 
                  className="w-full border-2 p-2 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Tagline</label>
                <input 
                  type="text" 
                  name="tagline" 
                  value={formValues.tagline} 
                  onChange={handleInputChange} 
                  className="w-full border-2 p-2 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Target Amount</label>
                <input 
                  type="number" 
                  name="targetAmount" 
                  value={formValues.targetAmount} 
                  onChange={handleInputChange} 
                  className="w-full border-2 p-2 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Pledged Amount</label>
                <input 
                  type="number" 
                  name="pledgedAmount" 
                  value={formValues.pledgedAmount} 
                  onChange={handleInputChange} 
                  className="w-full border-2 p-2 rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <button 
                  type="submit" 
                  className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-700"
                >
                  Save
                </button>
                <button 
                  type="button" 
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700"
                  onClick={() => setCurrentProject(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
