import React, { createContext, useContext, useState } from 'react'

const ReservationContext = createContext()

const ReservationProvider = ({children}) => {
    const [reservationData, setReservationData] = useState({})

  return (
    <ReservationContext.Provider
        value={{
            reservationData,
            setReservationData
        }}
    >
        {children}
    </ReservationContext.Provider>
  )
}

const useReservation = () =>{
    const context = useContext(ReservationContext)
    if(!context){
        console.log('Error');
    }

    return context
}

export {ReservationProvider, useReservation}