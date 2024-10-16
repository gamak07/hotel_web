import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Success = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/'); // Change this to your desired route
        }, 5000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [navigate]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Payment Confirmed!</h2>
            <p className="text-gray-700 mb-6">Thank you for your payment. Your reservation is confirmed.</p>
            <p className="text-gray-500">You will be redirected to the home page shortly.</p>
        </div>
    </div>
  )
}

export default Success