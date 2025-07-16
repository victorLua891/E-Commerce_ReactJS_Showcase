import React from 'react'
import {NavLink} from 'react-router-dom'
 

const Sidebar = () => {
  return (
    <div className='
        w-[18%] min-h-screen border-r-2
        
        sm:pl-[1vw] md:pl-[4vw] lg:pl-[7vw]
        '>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px] '>
        <NavLink to='/add' 
            >
            <div className='
            flex items-center gap-3 border-2 border-gray-200 
            border-r-0 px-3 py-2 rounded-l pr-8
            '>Add Items</div>
        </NavLink>
        <NavLink to='/list' 
            >
            <p className='
            flex items-center gap-3 border-2 border-gray-200 
            border-r-0 px-3 py-2 rounded-l 
            '>List Items</p>
        </NavLink>
        <NavLink to='/orders' 
            >
            <p className='
            flex items-center gap-3 border-2 border-gray-200 
            border-r-0 px-3 py-2 rounded-l
            '>Delete Items</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
