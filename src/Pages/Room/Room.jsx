import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import RoomLists from '../../Components/RoomLists/RoomLists'

const Room = () => {
  return (
    <>
      <Navbar />
      <div className='flex w-[100%]'>
        <RoomLists />
      </div>
    </>
  )
}

export default Room