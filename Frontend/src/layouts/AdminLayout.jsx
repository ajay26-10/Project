import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer'

const AdminLayout = () => {
  return (
    <>
        <Outlet/>
        <ToastContainer/>
        <Footer/>
    </>
  )
}

export default AdminLayout