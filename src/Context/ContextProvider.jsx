import React, { useEffect, createContext, useContext, useReducer } from 'react'
// import { useNavigate } from 'react-router-dom'

const RoomContext = createContext()

const initialState = {
    isLoading: false,
    featuredRooms: [], 
    currentRoom: {},
    bookedRoom: []
}


const reducer = (state, action) =>{
    switch (action.type) {
        case 'loading':
            return{
                ...state,
                isLoading: true
            }
        case 'loaded':
            return{
                ...state,
                isLoading:false
            }
        case 'featuredRooms':
            return{
                ...state,
                featuredRooms: action.payload,
            }
        
        case 'getRoomDetails':
            return{
                ...state,
                currentRoom: action.payload
            }

        case 'booking':
            const alreadyBooked = state.bookedRoom.find(room => room.id === action.payload.id);
            if (alreadyBooked) {
                return state; // No change if room is already booked
            }
            return{
                ...state,
                bookedRoom:[...state.bookedRoom, action.payload] 
            }
        case 'cancel':
            return{
                ...state, 
                bookedRoom: state.bookedRoom.filter(room => room.id !== action.payload)
            }

        case 'checkout':
            return{
                ...state, 
                bookedRoom: state.bookedRoom.filter(room => room.id !== action.payload)
            }
    
        default:
            throw new Error("Unkwonk action");
            
    }
}

const ContextProvider = ({children}) => {
    const [{isLoading, featuredRooms, currentRoom, bookedRoom}, dispatch] = useReducer(reducer, initialState)

    useEffect(()=> {
        dispatch({type: 'loading'})
        const fetchRooms = async() =>{
            try{
                const res = await fetch('http://localhost:5000/rooms')
                const data = await res.json()
                dispatch({type:'featuredRooms', payload: data})
            } catch{

            } finally{
                dispatch({type: 'loaded'})
            }
            
        }
        fetchRooms()
    }, [])

    
       
    const getRoomDetails = async(id) =>{
        dispatch({type: 'loading'})
        try{
            const res = await fetch(`http://localhost:5000/rooms/${id}`)
            const data = await res.json()
            dispatch({type: 'getRoomDetails', payload: data})
        } catch{

        }finally{
            dispatch({type: 'loaded'})
        }
    }

    const getBookedRooms = (book) =>{
        const alreadyBooked = bookedRoom.find(room => room.id === book.id);
        if (alreadyBooked) {
        alert("This room is already booked!");
        return;
    }
        dispatch({type: 'booking', payload: book})
    }

    const cancelBooking = (id) => {
        dispatch({type: 'cancel', payload: id})
    }
    
    const handleCheckout = (id) =>{
        dispatch({type: 'checkout', payload:id})
    }
  return (
    <RoomContext.Provider
        value={{
            isLoading,
            featuredRooms,
            currentRoom,
            bookedRoom,
            getRoomDetails,
            getBookedRooms,
            cancelBooking,
            handleCheckout,
        }}
    >
        {children}
    </RoomContext.Provider>
  )
}

const useRooms = () =>{
    const context = useContext(RoomContext)
    if (!context) {
        throw new Error("useRooms must be used within a ContextProvider");
    }
    return context
}

export  { ContextProvider, useRooms }