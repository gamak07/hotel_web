import React from 'react'
import { useRooms } from '../../Context/ContextProvider'
import RoomListsItem from '../RoomListsItem/RoomListsItem';
import Loading from '../Loading/Loading';

const RoomLists = () => {
    const { featuredRooms, isLoading } = useRooms()

    if (isLoading) {
      return <Loading/>
  }
    
  return (
    <div className='w-full grid grid-cols-3 gap-[1rem] p-[1rem]'>
        {featuredRooms.map(room =>(
            <RoomListsItem rooms={room} key={room.id} />
        ))}
    </div>
  )
}

export default RoomLists