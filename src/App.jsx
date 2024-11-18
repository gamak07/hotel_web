import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Room from "./Pages/Room/Room";
import Contact from "./Pages/Contact/Contact";
import RoomDetails from "./Pages/RoomDetails/RoomDetails";
import Reservation from "./Pages/Reservation/Reservation";
import { ContextProvider } from "./Context/ContextProvider";
import Summary from "./Components/Summary/Summary";
import { ReservationProvider } from "./Context/ReservationProvider";
import Success from "./Components/Success/Success";

function App() {
  return (
    <ContextProvider>
      <ReservationProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/home" element={<Room />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details/:id" element={<RoomDetails />} />
            <Route path="/reservation/:id" element={<Reservation />} />
            <Route path="/summary/:id" element={<Summary />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </ReservationProvider>
    </ContextProvider>
  );
}

export default App;
