import React, { useState } from "react";
import { MdKeyboardArrowRight ,MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Factories = () => {
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of factories per page

  const factories = [
    { src: "/shop/coco.png",name:'Coco', names: "Coco cola", title: "Coco Factory" },
    { src: "/shop/kraft.png",name:'kraft', names: "Kraft Heinz", title: "Kraft Factory" },
    { src: "/shop/pepsi.png",name:'pepsi', names: "Pepsi", title: "Pepsi Factory" },
    { src: "/shop/nestle.png",name:'nestle', names: "Nestle", title: "Nestle Factory" },
    { src: "/shop/p&g.png",name:'', names: "P&G", title: "P&G Factory" },
    { src: "/shop/Donone.png",name:'', names: "Donone", title: "Donone Factory" },
    { src: "/shop/Unilever.png",name:'', names: "Unilever", title: "Unilever Factory" },
    { src: "/shop/L’Oreal Paris.png",name:'', names: "L’Oreal Paris", title: "L’Oreal Paris Factory" },
    
  ];

  //  Sorting Logic 
  let sortedFactories = [...factories];
  if (sortOrder === "az") sortedFactories.sort((a, b) => a.names.localeCompare(b.names));
  else if (sortOrder === "za") sortedFactories.sort((a, b) => b.names.localeCompare(a.names));
  else if (sortOrder === "newest") sortedFactories.reverse();
  else if (sortOrder === "oldest") sortedFactories = [...factories];

  // Pagination Logic
  const totalPages = Math.ceil(sortedFactories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFactories = sortedFactories.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-[#f5f5f5] py-12 px-4 sm:px-8 md:px-12">
      <h1 className="text-3xl font-bold py-10 text-center">Shop By Factories</h1>

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Showing {startIndex + 1}-{startIndex + currentFactories.length} of {factories.length}
        </p>

      <select
  value={sortOrder}
  onChange={(e) => setSortOrder(e.target.value)}
  className="border border-gray-300 bg-white text-gray-700 px-3 py-3 rounded-md shadow focus:outline-none focus:ring-1 focus:ring-pink-300 cursor-pointer"
>
  <option value="">Sort</option>
  <option value="az">Name (A-Z)</option>
  <option value="za">Name (Z-A)</option>
  <option value="newest">Established (Newest first)</option>
  <option value="oldest">Established (Oldest first)</option>
</select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentFactories.map((factory, index) => (
          <div
            key={index}
            onClick={() => navigate(`/factories/${factory.name}`)}
            className=" group"
          >
            <div className=" relative overflow-hidden rounded-xl transition duration-500">
              <img
                src={factory.src}
                alt={factory.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500 hover:brightness-75 cursor-pointer"
              />
            </div>
              <h1 className="text-center mt-4 font-semibold">{factory.names}</h1>

          </div>
        ))}
      </div>

    {/* Pagination */}
<div className="flex justify-center items-center mt-8 gap-2">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    className="w-10 h-10 flex justify-center text-2xl items-center border border-gray-300 bg-white/80 rounded-full cursor-pointer"
  >
    <MdKeyboardArrowLeft />
  </button>

  {Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((page) => {
      // Show first 3 pages, last page, and current page if >3
      return (
        page <= 3 || 
        page === currentPage || 
        page === totalPages
      );
    })
    .map((page, i, arr) => {
      const prev = arr[i - 1];
      const needDots = prev && page - prev > 1;
      return (
        <div key={page}>
          {needDots && <span className="w-11 h-11 flex justify-center items-center border border-gray-300 bg-white/80 rounded-full">...</span>}
          <button
            onClick={() => setCurrentPage(page)}
            className={`w-11 h-11 flex justify-center items-center border border-gray-300 rounded-full ${
              currentPage === page ? "bg-green-600 text-white" : "bg-white"
            }`}
          >
            {page}
          </button>
        </div>
      );
    })}

  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    className="w-10 h-10 flex justify-center items-center text-2xl border border-gray-300 bg-white/80 rounded-full cursor-pointer"
  >
   <MdKeyboardArrowRight />
  </button>
</div>
    </div>
  );
};

export default Factories;