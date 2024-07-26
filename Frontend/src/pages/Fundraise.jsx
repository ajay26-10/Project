import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Fundraise = () => {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [targetAmount, setTargetAmount] = useState('');

  const navigate = useNavigate();

  const submitProject = async (e) => {
    e.preventDefault();
    const newProject = {
      title,
      tagline,
      description,
      targetAmount,
    }

    const res = await addNewProject(newProject);
    if (res.ok) {
      toast.success("Project Added");
      navigate('/dashboard');
    } else {
      toast.error("Failed to add project");
    }
  };

  const addNewProject = async (formData) => {
    const res = await fetch('api/new-project', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(formData)
    })
    return res;
  };

  return (

    <>
    
    <div className='h-svh'>
      <form onSubmit={submitProject}>
        <div className="mt-6">
            
          <h1 className='text-3xl text-center font-semibold'>Add New Project</h1>
          <div className='w-[700px] rounded-2xl shadow-2xl shadow-stone-950 mx-auto mt-6 p-4'>
          <div className='mt-4'>
            <label className='text-xl font-medium'>Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="Enter Project Name"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className='mt-4'>
            <label className='text-xl font-medium'>Tagline</label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="Enter Project Tagline"
              required
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>

          <div className='mt-4'>
            <label className='text-xl font-medium' htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Enter Description for the Project"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className='mt-4'>
            <label className='text-xl font-medium'>Target Amount</label>
            <input
              type="text"
              id="targetAmount"
              name="targetAmount"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="Enter Target Amount To Be Raised"
              required
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
            />
          </div>

          </div>
        </div>

        <div className="w-[200px] mx-auto">
          <button
            type="submit"
            className="w-[200px] bg-green-300 p-2 rounded-lg mt-[30px] hover:bg-green-500"
          >
            Add New Project
          </button>
        </div>
      </form>
    </div>
</>
  )
}

export default Fundraise
