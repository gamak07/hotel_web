import React from "react";
import { useRooms } from "../../Context/ContextProvider";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../../Button/Button";

const HomeFeaturedRoom = () => {
  const navigate = useNavigate();
  const { featuredRooms } = useRooms();

  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="mx-4 md:mx-8 py-8">
      <h1 className="text-center font-lato text-3xl md:text-4xl my-4">
        Featured Rooms
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          421: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {featuredRooms.map(
          (room) =>
            room.isFeatured && (
              <SwiperSlide
                key={room.id}
                className="bg-[#004080] rounded-lg overflow-hidden shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-xl text-[#ffffff]">{room.name}</p>
                    <p className="flex items-center text-2xl font-bold text-[#FFD700]">
                      ${room.pricePerNight}
                      <span className="text-sm font-normal text-[#ffffff]">
                        {" "}
                        / night
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-[#ffffff]">
                    <p>{room.bedType}</p>
                    <p>{room.maxGuests} max guests</p>
                    <p>{room.availableRooms} rooms</p>
                  </div>
                  <Button onClick={() => handleDetails(room.id)}>
                    <p className="bg-[#FFD700] text-[#004080] text-lg font-bold py-2 px-4 rounded">
                      View Details
                    </p>
                  </Button>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
};

export default HomeFeaturedRoom;
