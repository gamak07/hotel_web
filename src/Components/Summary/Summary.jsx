import React, { useEffect } from 'react'
import { useReservation } from '../../Context/ReservationProvider'
import { useRooms } from '../../Context/ContextProvider'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../../Button/Button'

const Summary = () => {
    const { id } = useParams()
    const { reservationData } = useReservation()
    const { currentRoom, getRoomDetails, getBookedRooms } = useRooms()
    const navigate = useNavigate()
    

    const {fullName, number, email, checkInDate, checkOutDate } = reservationData

    const {name, bedType, availableRooms, maxGuests, pricePerNight, image} = currentRoom

    
    const calculateTotalDays = () => {
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        const timeDifference = checkOut - checkIn; // in milliseconds
        const totalDays = Number(timeDifference / (1000 * 3600 * 24)); // convert to days
        return totalDays;
    };
    
    const total_price = pricePerNight * Number(calculateTotalDays())
    const vat = (15 * total_price)/ 100

    useEffect(()=> {
        getRoomDetails(id)
    }, [id])

    const handleConfirmation = () =>{
        const bookedRoomDetails = {
            image,
            id,
            name,
            bedType,
            maxGuests,
            availableRooms,
            checkInDate,
            checkOutDate,
            pricePerNight,
            totalDays: calculateTotalDays(),
        };
        getBookedRooms(bookedRoomDetails)
        alert('Booking Confirmed')
        navigate('/')

    }

    const formatDate = (date) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };
    
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Reservation Summary</h2>
        <div className="mb-4">
            <p className="text-gray-700"><strong>Name:</strong> {fullName}</p>
            <p className="text-gray-700"><strong>Phone Number:</strong> {number}</p>
            <p className="text-gray-700"><strong>Email:</strong> {email}</p>
            <p className="text-gray-700"><strong>Check In:</strong> {formatDate(checkInDate)}</p>
            <p className="text-gray-700"><strong>Check Out:</strong> {formatDate(checkOutDate)}</p>
        </div>
        <div className="border-t border-gray-300 pt-4">
            <p className="flex items-center justify-between text-lg font-semibold text-gray-800">
                <span className="font-bold">Sub Total:</span> ${(total_price).toFixed(2)}
            </p>
            <p className="flex items-center justify-between text-lg font-semibold text-gray-800">
                <span className="font-bold">VAT (15%):</span> ${(vat.toFixed(2))}
            </p>
            <p className="flex items-center justify-between text-lg font-semibold text-gray-800">
                <span className="font-bold">Grand Total:</span> ${(vat + total_price).toFixed(2)}
            </p>
        </div>
        <div className="flex justify-end">
            <Button 
                onClick={handleConfirmation} 
            >
                <p className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transitionduration-200">Confirm Reservation</p>
                
            </Button>
        </div>
    </div>
  );
};



export default Summary