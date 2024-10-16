import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../Button/Button';
import { useReservation } from '../../Context/ReservationProvider';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
    const { id } = useParams();
    const [fullName, setFullName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());

    const [fullNameError, setFullNameError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [checkInError, setCheckInError] = useState(false);
    const [checkOutError, setCheckOutError] = useState(false);

    const {  setReservationData } = useReservation()
    

    const navigate = useNavigate()
    // useEffect(() => {
    //     const savedFullName = localStorage.getItem('fullName');
    //     const savedNumber = localStorage.getItem('number');
    //     const savedEmail = localStorage.getItem('email');
    //     const savedCheckInDate = localStorage.getItem('checkInDate');
    //     const savedCheckOutDate = localStorage.getItem('checkOutDate');

    //     if (savedFullName) setFullName(savedFullName);
    //     if (savedNumber) setNumber(savedNumber);
    //     if (savedEmail) setEmail(savedEmail);
    //     if (savedCheckInDate) setCheckInDate(savedCheckInDate);
    //     if (savedCheckOutDate) setCheckOutDate(savedCheckOutDate);
    // }, []);
  
        // useEffect(() => {
        //     localStorage.setItem('fullName', fullName);
        //     localStorage.setItem('number', number);
        //     localStorage.setItem('email', email);
        //     localStorage.setItem('checkInDate', checkInDate);
        //     localStorage.setItem('checkOutDate', checkOutDate);
        // }, [fullName, number, email, checkInDate, checkOutDate])

    const validateForm = () => {
        let valid = true;

        if (fullName.trim() === '' || fullName.length < 3) {
            setFullNameError(true);
            valid = false;
        } else {
            setFullNameError(false);
        }

        if (!/^\d+$/.test(number)) {
            setNumberError(true);
            valid = false;
        } else {
            setNumberError(false);
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError(true);
            valid = false;
        } else {
            setEmailError(false);
        }

        if (!checkInDate) {
            setCheckInError(true);
            valid = false;
        } else {
            setCheckInError(false);
        }

        if (!checkOutDate || new Date(checkOutDate) <= new Date(checkInDate)) {
            setCheckOutError(true);
            valid = false;
        } else {
            setCheckOutError(false);
        }

        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Proceed with form submission
            setReservationData({
                fullName,
                number,
                email,
                checkInDate: checkInDate.toISOString(),
                checkOutDate: checkOutDate.toISOString()
            });
            navigate(`/summary/${id}`)
        }
    };

    return (
        <div className='relative w-full h-screen bg-[#F0F0F0] overflow-y-auto'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-1/2 rounded-20 p-6'>
                <p>Information Details</p>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="fullName" className='text-black text-lg font-bold'>Full Name</label>
                        <input 
                            type="text" 
                            id='fullName' 
                            placeholder='Your full name' 
                            className={`border p-[10px] outline-0 rounded-lg ${fullNameError ? 'border-red-600' : 'border-green-600'}`} 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor='tel' className='text-black text-lg font-bold'>Phone Number</label>
                        <input 
                            type="tel" 
                            id="tel" 
                            placeholder='Enter your number' 
                            className={`border p-[10px] outline-0 rounded-lg ${numberError ? 'border-red-600' : 'border-green-600'}`} 
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="email" className='text-black text-lg font-bold'>Email</label>
                        <input
                            type="email" 
                            id="email" 
                            placeholder='Enter valid email' 
                            className={`border p-[10px] outline-0 rounded-lg ${emailError ? 'border-red-600' : 'border-green-600'}`} 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="checkIn" className='text-black text-lg font-bold'>Check In</label>
                        <DatePicker 
                            type="date" 
                            id="checkIn" 
                            className={`border p-[10px] outline-0 rounded-lg ${checkInError ? 'border-red-600' : 'border-green-600'}`} 
                            selected={checkInDate}
                            onChange={(date) => setCheckInDate(date)}
                            dateFormat='dd/MM/yyyy'
                            minDate={new Date()}
                        />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="checkOut" className='text-black text-lg font-bold'>Check Out</label>
                        <DatePicker 
                            type="date" 
                            id="checkOut" 
                            className={`border p-[10px] outline-0 rounded-lg ${checkOutError ? 'border-red-600' : 'border-green-600'}`} 
                            selected={checkOutDate}
                            onChange={(date) => setCheckOutDate(date)}
                            dateFormat='dd/MM/yyyy'
                            minDate={checkInDate}
                        />
                    </div>
                    <Button type="submit">
                        <p className='bg-[#004080] w-full p-[10px] text-white font-bold rounded-[25px]'>Continue</p>
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Reservation;