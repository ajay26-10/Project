import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../components/Logout';

const AdminDash = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await fetch('/api/admin/totalusers',{
          headers: {
            'Content-Type' : 'application/json'
          }
      });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setTotalUsers(data.userCount);
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };

    fetchTotalUsers();
  }, []);

  return (
    <div className="mt-10 flex">
      <div className="w-1/4 border-2 h-screen">
        <div className="border-b-2 p-2 bg-green-300">
          <Link to='/admindash'>Admin Dashboard</Link>
        </div>
        <div className="border-b-2 p-2">
          <Link to="/admin/all-users">View Users</Link>
        </div>
        <div className="border-b-2 p-2">
          <Logout />
        </div>
      </div>
      <div className="ml-2 flex gap-4">
        <div className="w-72 h-48 border-2 rounded-lg">
          <div className="border-b-2 bg-green-100 text-center">
            <span className="text-2xl font-bold p-4">Total Users</span>
          </div>
          <div className="text-center p-4">
            <p id="users" className="text-3xl font-bold">{totalUsers}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
