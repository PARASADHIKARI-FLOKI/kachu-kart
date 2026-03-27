import React from "react";

import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();

  const factories = [
    {
      src: "/shop/coco.png",
      name: "coco",
      title: "Coco Factory",
    },
    {
      src: "/shop/kraft.png",
      name: "kraft",
      title: "Kraft Factory",
    },
    {
      src: "/shop/pepsi.png",
      name: "pepsi",
      title: "Pepsi Factory",
    },
    {
      src: "/shop/nestle.png",
      name: "nestle",
      title: "Nestle Factory",
    },
  ];

  return (
    <div className="bg-[#E1E3E4] py-12 px-4 sm:px-8 md:px-12">
      
      {/* Heading */}
    
       <h1 className="text-3xl font-bold mb-8 text-start">
       Shop By Factories
      </h1>


      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {factories.map((factory, index) => (
          <div
            key={index}
            onClick={() => navigate(`/shop/${factory.name}`)}
            className="cursor-pointer group"
          >
            <div className="relative overflow-hidden rounded-xl transition duration-500">
              
              {/* Image */}
              <img
                src={factory.src}
                alt={factory.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500 hover:brightness-75"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white font-semibold text-lg">
                  {factory.title}
                </p>
              </div> */}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;