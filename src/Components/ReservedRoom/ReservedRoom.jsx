import React from 'react'
import { useRooms } from '../../Context/ContextProvider'
import Button from '../../Button/Button'
import { useNavigate } from 'react-router-dom'

const ReservedRoom = () => {
    const navigate = useNavigate()
    const { bookedRoom, cancelBooking, handleCheckout } = useRooms()
    
    // const handleCheckout = () =>{
    //     navigate('/success')
    // }
  return (
    <div className='bg-[#ffffff] h-[60vh] w-[100%] overflow-y-auto'>
        {bookedRoom.map(room =>(
            <div className="flex h-full w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
                <div className='w-[60%]'>
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover rounded-t-lg" />
                </div>
                <div className='w-[40%] p-[1rem]'>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">{room.name}</h2>
                        <p className="text-gray-700"><strong>Bed Type:</strong> {room.bedType}</p>
                        <p className="text-gray-700"><strong>Max Guests:</strong> {room.maxGuests}</p>
                        <p className="text-gray-700"><strong>Check In:</strong> {room.checkInDate}</p>
                        <p className="text-gray-700"><strong>Check Out:</strong> {room.checkOutDate}</p>
                        <p className="text-gray-700"><strong>Price per Night:</strong> ${room.pricePerNight}</p>
                        <p className="text-gray-700"><strong>Total Days:</strong> {room.totalDays}</p>
                        <p className="flex items-center justify-between text-lg font-semibold text-gray-800 mt-4">
                            <span className="font-bold">Total Price:</span> ${room.pricePerNight * room.totalDays}
                        </p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <Button 
                            onClick={()=> cancelBooking(room.id)} 
                            
                        >
                            <p className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-200">Cancel Booking</p>
                        </Button>
                        <Button 
                            onClick={()=> {
                                handleCheckout(room.id)
                                navigate('/success')
                            }} 
                        >
                            <p className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition  duration-200">Checkout</p>
                        </Button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ReservedRoom