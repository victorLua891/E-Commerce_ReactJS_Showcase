import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({setToken}) => {
  return (
    <div className='
    flex items-center 
    justify-between py-4 font-medium 
    border-b-2 ps-3 
    bg-gray-800 text-white 
    text-lg
    px-6
    sm:px-[5vw] md:px-[5vw] lg:px-[9vw]
    '>
      
      <div>
        <img className="w-[max(10%, 80px)]" src=" " alt="" />
        <div className='flexfont-normal text-xl py'>
        E-COMMERCE 
        </div>
        <div className='flexfont-normal text-xs py text-red-500'>
        [ADMIN]
        </div>
        
        
      </div>
    <button 
    onClick={()=>setToken('')}
    className='
    bg-red-600 text-white px-5 py-1 sm:px-4
    rounded-full font-normal text-base'>
      Logout</button>
    </div>
  )
}

export default Navbar
