import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ReservedRoom from '../ReservedRoom/ReservedRoom'

const Navbar = () => {

    const [showReservedRoom, setShowReservedRoom] = useState(false)
    const handleShowContent = () =>{
      setShowReservedRoom(prev => !prev)
      console.log(showReservedRoom);
      
    }

  return (
    <nav className="sticky z-[1000] top-0 flex items-center justify-between w-[100%] h-[10vh] bg-[#004080] font-lato px-[2rem]">
        <div>SWEP</div>
        <ul className='flex items-center h-full'>
          <NavLink className={({isActive})=> `${isActive ? 'h-full w-[7rem] flex items-center justify-center bg-[#ffffff] text-[#004080] font-bold' : 'h-full w-[7rem] text-[#ffffff] flex items-center justify-center font-bold'}`} to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink className={({isActive})=> `${isActive ? 'h-full w-[7rem] flex items-center justify-center bg-[#ffffff] text-[#004080] font-bold' : 'h-full w-[7rem] text-[#ffffff] flex items-center justify-center font-bold'}`} to='/home'>
            <li>Rooms</li>
          </NavLink>
          <NavLink className={({isActive})=> `${isActive ? 'h-full w-[7rem] flex items-center justify-center bg-[#ffffff] text-[#004080] font-bold' : 'h-full w-[7rem] text-[#ffffff] flex items-center justify-center font-bold'}`} to='/contact'>
            <li>Contact Us</li>
          </NavLink>
        </ul>
        <div onClick={handleShowContent}>
          <p className='relative'>user</p>
          <div className='absolute right-[2rem] top-[4rem]'>{showReservedRoom && <ReservedRoom />}</div>
          
        </div>
    </nav>
  )
}

export default Navbar