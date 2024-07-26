import React from 'react'
import img from '../assets/logo.png'
import DisplayProjects from '../components/DisplayProjects'

const Homepage = () => {
  return (
    <>
      <div className="h-[150px] bg-slate-100 m-[50px] rounded-lg align-center shadow-2xl">      
        <p className="text-[35px] ml-[20%] mt-[20px]">Community Driven, Dreams Funded</p>
        <p className="text-[35px] ml-[40%]">Let's Make Dreams Come True</p>
      </div>

    <div className=' pl-2'>
      <DisplayProjects/> 
    </div>
    </>
  )
}

export default Homepage