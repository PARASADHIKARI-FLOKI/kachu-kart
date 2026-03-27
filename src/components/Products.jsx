import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const productsData = {
    coco: [
      {
        id: 1,
        name: "Coco Powder",
        brand: "Coco",
        price: "NPR 13641",
        img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308328905/KB/KA/VP/798985/cocoa-powder-1-kg-1000x1000.jpg",
      },
      {
        id: 2,
        name: "Dark Chocolate",
        brand: "Coco",
        price: "NPR 1500",
        img: "https://tse1.mm.bing.net/th/id/OIP.VeVdBK9dzHdUR6Lcadl1fwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
    ],
    kraft: [
      {
        id: 3,
        name: "Kraft Cheese",
        brand: "Kraft",
        price: "NPR 800",
        img: "https://kraftnaturalcheese.com/wp-content/uploads/2022/07/shredded_sharp-cheddar_fine_8oz.jpg",
      },
      {
        id: 4,
        name: "Kraft Butter",
        brand: "Kraft",
        price: "NPR 1200",
        img: "https://caffeinecam.com/cdn/shop/files/51815934575d6ee3afba51008a35384a60295bf4ba91d13efdebf3e6e499c9d2__39252.1651937463.1280.1280.jpg?v=1689674558",
      },
    ],
    pepsi: [
      {
        id: 5,
        name: "Pepsi Can",
        brand: "Pepsi",
        price: "NPR 200",
        img: "https://www.pizzaboxbanksiagrove.com.au/wp-content/uploads/2023/02/Can-Pepsi.jpg",
      },
      {
        id: 6,
        name: "Pepsi Bottle",
        brand: "Pepsi",
        price: "NPR 300",
        img: "https://i5.walmartimages.com/asr/b38dc094-610a-4f09-8768-0ffc3579b4c1.fa1789875811c789c50794326229e168.jpeg",
      },
    ],
    nestle: [
      {
        id: 7,
        name: "Nestle Milk",
        brand: "Nestle",
        price: "NPR 500",
        img: "https://pbs.twimg.com/media/E4pfDxPWEAQ7aGb.jpg",
      },
      {
        id: 8,
        name: "Nestle KitKat",
        brand: "Nestle",
        price: "NPR 200",
        img: "https://propack.pro/wp-content/uploads/2023/01/nestle.jpg",
      },
    ],
  };

  const allProducts = Object.values(productsData).flat();

  return (
    <div className="p-6 md:p-12 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Popular Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`, { state: item })}
            className="bg-[#DBDEE4] rounded-2xl overflow-hidden group  shadow-[4px_4px_10px_rgba(0,0,0,0.2)]"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-70 object-cover cursor-pointer transform group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="bg-white p-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">{item.brand}</p>
                <h3>{item.name}</h3>
                <p className="font-bold">{item.price}</p>
              </div>

              <a
                href={`https://wa.me/9779800000000?text=I want ${item.name}`}
                onClick={(e) => e.stopPropagation()}
                className="bg-green-500 text-white p-3 rounded-full"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
