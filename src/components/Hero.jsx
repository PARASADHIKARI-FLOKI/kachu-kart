import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="bg-[#eef2f4] min-h-155 flex items-center">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-4 sm:px-6">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mr-20 text-gray-800">
            Wholesale & Bulk Orders Made Simple
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 lg:mr-10 mb-6">
            Connect directly with suppliers. Get the best price for bulk
            shipping inquiries.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className=" bg-green-500 hover:bg-green-700 border border-gray-300 text-white p-3 rounded-lg items-center  transition duration-300 cursor-pointer">
              Browse Products
            </button>
            <button className="border border-gray-500 hover:border-gray-300 hover:bg-green-700 hover:text-white p-3 rounded-lg flex items-center  transition duration-300">
              Request Bulk Quote <IoArrowForward />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="home/img1.jpg"
            alt="Wholesale"
            className="
              w-50 h-37.5
              sm:w-75 sm:h-55
              md:w-100 md:h-75
              lg:w-125 lg:h-87.5
              xl:w-150 xl:h-105
              max-w-full
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;