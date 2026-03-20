import React from "react";

const Shop = () => {
  const factories = [
    { src: "/shop/coco.png", alt: "Coco Factory" },
    { src: "/shop/kraft.png", alt: "Kraft Factory" },
    { src: "/shop/pepsi.png", alt: "Pepsi Factory" },
    { src: "/shop/nestle.png", alt: "Nestle Factory" },
  ];

  return (
    <div className="bg-[#D9D9D973] py-10 px-4 sm:px-6 md:px-10">
      
      {/* Heading */}
      <h1 className="text-[10px] mt-14 sm:text-3xl md:text-4xl font-semibold text-center md:text-left mb-16 md:mb-24">
        Shop By Factories
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {factories.map((factory, index) => (
          <div key={index} className="flex justify-center items-center">
            
            {/* Image Card */}
            <div className="overflow-hidden rounded-2xl w-full max-w-65 h-44 sm:h-48 md:h-52">
              <img
                src={factory.src}
                alt={factory.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-125 hover:brightness-75  cursor-pointer"
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;