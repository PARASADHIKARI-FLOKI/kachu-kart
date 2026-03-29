import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
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
        rate: "4.5(1k reviews)",
        quantity:'MOQ: 50 units',
        logo:'https://i.pinimg.com/originals/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.png',
      },
      {
        id: 2,
        name: "Dark Chocolate",
        brand: "Coco",
        price: "NPR 1500",
        img: "https://tse1.mm.bing.net/th/id/OIP.VeVdBK9dzHdUR6Lcadl1fwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        rate: "4.5(1k reviews)",
        quantity:'MOQ: 50 units',
        logo:'https://i.pinimg.com/originals/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.png',
      },
    ],
    kraft: [
      {
        id: 3,
        name: "Kraft Cheese",
        brand: "Kraft",
        price: "NPR 800",
        img: "https://kraftnaturalcheese.com/wp-content/uploads/2022/07/shredded_sharp-cheddar_fine_8oz.jpg",
         rate: "4.5(1k reviews)",
        quantity:'MOQ: 50 units',
        logo:"https://logos-world.net/wp-content/uploads/2023/03/Kraft-Foods-Logo-1960-500x281.png",
      },
      {
        id: 4,
        name: "Kraft Butter",
        brand: "Kraft",
        price: "NPR 1200",
        img: "https://caffeinecam.com/cdn/shop/files/51815934575d6ee3afba51008a35384a60295bf4ba91d13efdebf3e6e499c9d2__39252.1651937463.1280.1280.jpg?v=1689674558",
         rate: "4.5(1k reviews)",
        quantity:'MOQ: 50 units',
        logo:"https://logos-world.net/wp-content/uploads/2023/03/Kraft-Foods-Logo-1960-500x281.png",
      },
    ],
    pepsi: [
      {
        id: 5,
        name: "Pepsi Can",
        brand: "Pepsi",
        price: "NPR 200",
        img: "https://www.pizzaboxbanksiagrove.com.au/wp-content/uploads/2023/02/Can-Pepsi.jpg",
         rate: "4.5(1k reviews)",
        quantity:'MOQ: 50 units',
        logo:"https://1000logos.net/wp-content/uploads/2017/05/Pepsi-Logo-1969-2048x1152.png",
      },
      {
        id: 6,
        name: "Pepsi Bottle",
        brand: "Pepsi",
        price: "NPR 300",
        img: "https://i5.walmartimages.com/asr/b38dc094-610a-4f09-8768-0ffc3579b4c1.fa1789875811c789c50794326229e168.jpeg",
        rate: "4.5(1k reviews)",
        quantity:'MOQ: 50 units',
        logo:"https://1000logos.net/wp-content/uploads/2017/05/Pepsi-Logo-1969-2048x1152.png",
      },
    ],
    nestle: [
      {
        id: 7,
        name: "Nestle Milk",
        brand: "Nestle",
        price: "NPR 500",
        img: "https://pbs.twimg.com/media/E4pfDxPWEAQ7aGb.jpg",
         rate: "4.5(1k reviews)",
        quantity:'MOQ: 50 units',
        logo:"https://logoeps.com/wp-content/uploads/2013/04/nestle-deserts-vector-logo.png",
      },
      {
        id: 8,
        name: "Nestle KitKat",
        brand: "Nestle",
        price: "NPR 200",
        img: "https://propack.pro/wp-content/uploads/2023/01/nestle.jpg",
         rate: "4.5(1k reviews)",
        quantity:'MOQ: 50 units',
        logo:"https://logoeps.com/wp-content/uploads/2013/04/nestle-deserts-vector-logo.png",
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

            <div className="relative overflow-hidden">
  {/* Product Image */}
  <img
    src={item.img}
    alt={item.name}
    className="w-full h-70 object-cover cursor-pointer transform group-hover:scale-110 transition duration-500"
  />

  {/* ✅ Logo Badge */}
  
    <div className="absolute top-2 left-1 p-1 rounded-full">
      <img
        src={item.logo}
        alt="brand logo"
        className="w-10 h-10 object-contain transform group-hover:scale-110 transition duration-500"
      />
    </div>
 
</div>

  <div className="bg-white p-4 relative">
  <div>
    <div className="flex items-center justify-between">
      <p className="text-sm text-[#0000004D]">{item.brand}</p>

      <p className="flex items-center gap-1 text-sm text-gray-600">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradStar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>

        <FaStar style={{ fill: "url(#gradStar)" }} />
        {item.rate}
      </p>
    </div>

    <h3 className="font-bold">{item.name}</h3>
    <p className="text-gray-500">{item.quantity}</p>
    <p className="font-bold">{item.price}</p>
  </div>

  {/* ✅ WhatsApp Button Bottom Right */}
  <a
    href={`https://wa.me/9779800000000?text=I want ${item.name}`}
    onClick={(e) => e.stopPropagation()}
    className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
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
