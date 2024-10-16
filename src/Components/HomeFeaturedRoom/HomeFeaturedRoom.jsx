import React, { useEffect, useState } from 'react'
import { useRooms } from '../../Context/ContextProvider'
import {useParams, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Button from '../../Button/Button'


const HomeFeaturedRoom = () =>{
    const navigate = useNavigate()
    const { featuredRooms } = useRooms()
    
    const handleDetails = (id) =>{
        navigate(`/details/${id}`)
    }
    
    return(
        <div className='mx-[2rem] py-[2rem]'>
            <h1 className='text-center font-lato text-[40px] my-[1rem]'>Featured</h1>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                autoplay={{delay: 3000}}
                loop={true}
            >
                {featuredRooms.map(rooms =>(
                   rooms.isFeatured && (
                       <SwiperSlide key={rooms.id} className='w-[100%] bg-[#004080]'>
                            <div className='w-full h-[15rem]'>
                                <img src={rooms.image} alt={rooms.name} className='h-full w-full' />
                            </div>
                            <div className='flex flex-col gap-[10px] p-[1.5rem]'>
                                <div className='flex flex-col gap-[10px]'>
                                    <p className='text-[20px] text-[#ffffff]'>{rooms.name}</p>
                                    <p className='flex items-center text-[30px] font-bold text-[#FFD700]'>
                                        ${`${rooms.pricePerNight}`} 
                                        <span className='text-[15px] font-normal text-[#ffffff]'> / night</span>
                                    </p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-[15px] text-[#ffffff]'><span></span>{rooms.bedType}</p>
                                    <p className='text-[15px] text-[#ffffff]'>{rooms.maxGuests} max guests</p>
                                    <p className='text-[15px] text-[#ffffff]'>{rooms.availableRooms} rooms</p>
                                </div>
                                <Button onClick={()=> handleDetails(rooms.id)}>
                                    <p className='bg-[#FFD700] text-[#ffffff] text-[20px] font-bold py-[1rem] px-[2rem]'>View Details </p>
                                </Button>
                            </div>
                        </SwiperSlide>
                    )
                ))}
            </Swiper>
        </div>
    )
}

export default HomeFeaturedRoom