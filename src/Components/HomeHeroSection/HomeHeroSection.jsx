import React from "react";
import Button from "../../Button/Button";

const HomeHeroSection = () => {
  return (
    <div className='relative h-[90vh] w-[100%] bg-[url("/lobby.jpg")] bg-center bg-no-repeat bg-cover'>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center gap-[2rem]">
        <p className="font-playfair text-[60px] text-[#ffffff] text-center">
          Welcome to our luxury hotel.{" "}
        </p>
        <Button>
          <p className="text-[#ffffff] bg-[#FFD700] px-[2rem] py-[1rem] font-bold font-lato">
            Book Now
          </p>
        </Button>
      </div>
    </div>
  );
};

export default HomeHeroSection;
