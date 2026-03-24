import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const Productsdetails = () => {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  if (!product) return <div>No Product Found</div>;

  // Example related products
  const relatedProducts = [
    { id: 1, name: "Coco Powder", brand: "Coco", Description:"High-quality cocoa powder for your daily needs", price: "NPR 13641", img: product.img, img1: "https://5.imimg.com/data5/SELLER/Default/2023/5/308328905/KB/KA/VP/798985/cocoa-powder-1-kg-1000x1000.jpg" },
    { id: 2, name: "Dark Chocolate", brand: "Coco", Description:"Rich and delicious dark chocolate bars", price: "NPR 1500", img: product.img, img1: "https://tse1.mm.bing.net/th/id/OIP.VeVdBK9dzHdUR6Lcadl1fwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 3, name: "Kraft Cheese", brand: "Kraft", Description:"Creamy and flavorful cheese for your meals", price: "NPR 800", img: product.img, img1: "https://kraftnaturalcheese.com/wp-content/uploads/2022/07/shredded_sharp-cheddar_fine_8oz.jpg" },
    { id: 4, name: "Nestle Milk", brand: "Nestle", Description:"Fresh and nutritious milk for your family", price: "NPR 500", img: product.img, img1: "https://pbs.twimg.com/media/E4pfDxPWEAQ7aGb.jpg" },
  ];

  return (
    <div className="p-6 md:p-12 bg-gray-100 min-h-screen">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8 p-6 ">
        <div>
          <img src={product.img} alt={product.name} className="w-full h-130 rounded-xl object-cover" />
          <div className="flex gap-4 mt-4">
            <img src={product.img} className="w-24 h-24 rounded-lg object-cover " />
            <img src={product.img} className="w-24 h-24 rounded-lg object-cover" />
            <img src={product.img} className="w-24 h-24 rounded-lg object-cover" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">Bright and Hydrated Skin to the MAX</p>
          <h3 className="text-2xl font-bold mb-2">{product.price}</h3>
          <p className="text-gray-500">Minimum Order: 500 pieces</p>
          <p className="text-gray-500 mb-4">Delivery: 5-10 Days</p>

          <a
            href={`https://wa.me/9762483563?text=Ic want ${product.name}`}
            className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg w-fit"
          >
            <IoLogoWhatsapp /> Inquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <p className="text-xl text-gray-600  mb-2"><span className="text-gray-800 font-extrabold">Descriptions:</span>{product.Description}</p>
        {/* <p className="text-gray-600">
          SPF and hydration are the keys to preventing signs of aging—but when it
          comes to turning back the clock on existing wrinkles, these products
          deliver results.
        </p> */}
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Related Products</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`, { state: item })}
              className="bg-[#DBDEE4] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-70 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="bg-gray-200 p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">By {item.brand}</p>
                  <p className="font-bold">{item.price}</p>
                </div>

                <a
                  href={`https://wa.me/9779762483563?text=I want ${item.name}`}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-green-500 text-white p-3 rounded-full"
                >
                  <IoLogoWhatsapp />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productsdetails;