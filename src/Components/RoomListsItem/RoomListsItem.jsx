import React from "react";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const RoomListsItem = ({ rooms }) => {
  const navigate = useNavigate();

  const { name, image, pricePerNight, maxGuests, availableRooms, bedType, id } =
    rooms;

  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="w-[100%] bg-[#004080]">
      <div className="w-full h-[15rem]">
        <img src={image} alt={name} className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-[10px] p-[1.5rem]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[20px] text-[#ffffff]">{name}</p>
          <p className="flex items-center text-[30px] font-bold text-[#FFD700]">
            ${`${pricePerNight}`}
            <span className="text-[15px] font-normal text-[#ffffff]">
              {" "}
              / night
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[15px] text-[#ffffff]">
            <span></span>
            {bedType}
          </p>
          <p className="text-[15px] text-[#ffffff]">{maxGuests} max guests</p>
          <p className="text-[15px] text-[#ffffff]">{availableRooms} rooms</p>
        </div>
        <Button onClick={() => handleDetails(id)}>
          <p className="bg-[#FFD700] text-[#ffffff] text-[20px] font-bold py-[1rem[2rem]">
            View Details{" "}
          </p>
        </Button>
      </div>
    </div>
  );
};

export default RoomListsItem;
