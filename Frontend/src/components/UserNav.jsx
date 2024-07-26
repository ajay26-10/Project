import React from 'react'
import img  from '../assets/logo.png' 
import Logout from './Logout'
import { Link } from 'react-router-dom'

const UserNav = () => {
  return (
    <>
        <div className="bg-green-500 h-[60px] text-xl rounded-full shadow-xl flex">
       <Link to={'/dashboard'}> <img src={img} alt="logo" height={60} width={60}/></Link>
        <nav className="m-2 pl-2">
            <input type="search" placeholder="Search" className="border-2 border-solid pl-2 rounded-md"/>
            <button className="border-2 rounded-md p-1 hover:bg-green-300 ml-2">Search</button>
            <a href="/projects" className="ml-[38rem] pl-2">View Projects</a>
            <a href="/new-project" className="pl-6">Fundraise</a> &emsp;
            <Logout/>
        </nav>
    </div>
    </>
  )
}

export default UserNav