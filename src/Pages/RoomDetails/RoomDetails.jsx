import React, { useEffect, useState } from 'react'
import Button from '../../Button/Button'

import { useRooms } from '../../Context/ContextProvider'
import { useParams, useNavigate } from 'react-router-dom'

import { IoArrowBackOutline } from "react-icons/io5";
import Loading from '../../Components/Loading/Loading';

const RoomDetails = () =>{
    const navigate = useNavigate()
    const { id } = useParams()
    const { currentRoom, getRoomDetails, isLoading } = useRooms()

    const handleReservation = (id) =>{
        navigate(`/reservation/${id}`)
    }
    
    useEffect(()=> {
        getRoomDetails(id)
    }, [id])

    const { 
        name, 
        image, 
        pricePerNight, 
        amenities = [], 
        availableRooms, 
        bedType, 
        description, 
        maxGuests, 
        roomSize 
    } = currentRoom

    if (isLoading) {
        return <Loading/>
    }
    
    return(
        <div className='relative flex w-[80%] h-[70vh] m-auto mt-[2rem] bg-[#333333]'>
            <Button onClick={(e) =>{
                e.preventDefault()
                navigate(-1)
            }}>
                <IoArrowBackOutline className='absolute top-[1rem] left-[1rem] bg-[#ffffff] p-[5px] rounded-[50%] text-[25px]' />
            </Button>
            <div className='h-full w-[50%]'>
                <img className='h-full w-full' src={image} alt={name} />
            </div>
            <div className='flex flex-col gap-[1rem] justify-center px-[3rem]'>
                <div>
                    <p className='text-[30px] text-[#ffffff] font-bold'>
                        {name} <span className='text-[15px] font-normal'>({roomSize})</span>
                    </p>
                    <p className='text-[25px] text-[#ffffff]'>{description}</p>
                </div>
                <div className='flex gap-[4rem]'>
                    <div>
                        <h1 className='font-bold text-[20px] text-[#ffffff]'>Price</h1>
                        <p className='text-[15px]'>{pricePerNight} / night</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-[20px] text-[#ffffff]'>Bed Type</h1>
                        <p className='text-[15px]'>{bedType}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p className='text-[#ffffff]'>Available Rooms:</p>
                    <span>{availableRooms}</span>
                </div>
                <div className='flex items-center'>
                    <p className='text-[#ffffff]'>Max Guests:</p> 
                    <span>{maxGuests}</span></div>
                <div className='flex gap-[1rem]'>
                    {amenities.map(amenity =>(
                        <p key={amenity} className='bg-[#004080] px-[1rem] py-[8px] rounded-[10px] text-[#ffffff] font-bold'>{amenity}</p>
                    ))}      
                </div>
                <Button onClick={()=> handleReservation(id)}>
                    <p className='flex bg-[#FFD700] w-[fit-content] py-[10px] px-[1.5rem] rounded-[10px]'>Book Now</p>
                </Button>
            </div>
        </div>
    )
}

export default RoomDetails