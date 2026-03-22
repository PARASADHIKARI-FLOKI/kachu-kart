import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";

const Shopdetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const factoryDetails = {
    coco: {
      title: "Coco Factory",
      img: "/shop/coco.png",
    },
    kraft: {
      title: "Kraft Factory",
      img: "/shop/kraft.png",
    },
    pepsi: {
      title: "Pepsi Factory",
      img: "/shop/pepsi.png",
    },
    nestle: {
      title: "Nestle Factory",
      img: "/shop/nestle.png",
    },
  };

  const productsData = {
    coco: [
      { id: 1, name: "Coco Powder", price: "$10", img: "/products/coco1.png" },
      { id: 2, name: "Dark Chocolate", price: "$15", img: "/products/coco2.png" },
    ],
    kraft: [
      { id: 3, name: "Kraft Cheese", price: "$8", img: "/products/kraft1.png" },
      { id: 4, name: "Kraft Butter", price: "$12", img: "/products/kraft2.png" },
    ],
    pepsi: [
      { id: 5, name: "Pepsi Can", price: "$2", img: "/products/pepsi1.png" },
      { id: 6, name: "Pepsi Bottle", price: "$3", img: "/products/pepsi2.png" },
    ],
    nestle: [
      { id: 7, name: "Nestle Milk", price: "$5", img: "/products/nestle1.png" },
      { id: 8, name: "Nestle KitKat", price: "$2", img: "/products/nestle2.png" },
    ],
  };

  const factory = factoryDetails[name];
  const products = productsData[name];

  if (!factory) return <div className="p-10">Factory not found</div>;

  return (
    <div className="p-6 md:p-12 bg-gray-100 min-h-screen">
      
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        ← Back
      </button>

      {/* 🏭 Factory Info */}
      <div className="mb-10">
        <img
          src={factory.img}
          alt={factory.title}
          className="w-full max-w-md rounded-xl shadow"
        />
        <h1 className="text-3xl font-bold mt-4">{factory.title}</h1>
      </div>

      {/* 🛍️ Products */}
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-xl shadow hover:shadow-xl p-4 transition duration-300"
          >
            {/* 📱 WhatsApp Icon */}
            <a
              href={`https://wa.me/9779800000000?text=I want to buy ${item.name}`}
              target="_blank"
              rel="noreferrer"
              className="absolute top-50 right-3 text-green-500   p-2 rounded-full text-2xl hover:scale-110 transition bg-gray-100 hover:bg-gray-500"
            >
              <IoLogoWhatsapp />
            </a>

            {/* 🖼️ Product Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            {/* 📦 Product Info */}
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-500">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopdetails;