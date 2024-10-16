import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Filter from '../../Components/Filter/Filter'
import RoomLists from '../../Components/RoomLists/RoomLists'

const Room = () => {
  return (
    <>
      <Navbar />
      <div className='flex w-[100%]'>
        <Filter />
        <RoomLists />
      </div>
    </>
  )
}

export default Room