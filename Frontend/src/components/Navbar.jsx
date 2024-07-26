import React from 'react'
import img  from '../assets/logo.png' 
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className="bg-green-500 h-[60px] text-xl rounded-full shadow-xl flex">
        <Link to={'/'}><img src={img} alt="logo" height={60} width={60}/></Link>
        <nav className="m-2 pl-2">
            <input type="search" placeholder="Search" className="border-2 border-solid pl-2 rounded-md"/>
            <button className="border-2 rounded-md ml-1 p-1 hover:bg-green-300">Search</button>
            <Link to={'/adminsignup'} className=" pl-[50rem]">Admin</Link>
            <Link to={'/signup'} className=" pl-[2rem]">Sign Up</Link>
        </nav>
    </header>
    </>
  )
}

export default Navbar
