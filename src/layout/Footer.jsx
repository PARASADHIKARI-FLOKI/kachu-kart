import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-300 py-14 Spx-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <img
            src={logo}
            alt="Logo"
            className="h-56 md:h-64 lg:h-72 w-auto -mt-20"
          />

          <p className="text-gray-600 text-sm mt-1 text-center md:text-left">
            Your trusted partner for wholesale and bulk shipping inquiries.
          </p>

          <div className="flex gap-4 mt-3">
            <FaFacebook className="text-blue-600 text-xl cursor-pointer" />
            <FaInstagram className="text-pink-500 text-xl cursor-pointer" />
            <FaXTwitter className="text-black text-xl cursor-pointer" />
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center gap-3 text-center md:mt-10">
          <p className="font-semibold text-lg">
            Ready to Place Your Bulk Order?
          </p>

          <p className="text-gray-600 text-sm max-w-sm">
            Connect with us on WhatsApp for instant quotes and personalized service
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <button className="flex items-center gap-2 bg-gray-200 text-green-600 px-5 py-2 rounded hover:bg-green-50 transition">
              <IoLogoWhatsapp /> Chat on WhatsApp
            </button>

            <button className="border border-black px-5 py-2 rounded hover:bg-black hover:text-white transition">
              Request Quote →
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end gap-3 text-sm md:mt-10">
          <p className="font-semibold text-lg">Contact Us</p>

          <div className="flex items-center gap-2">
            <FaPhone /> <span>9876549087</span>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail /> <span>logo@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <IoLogoWhatsapp /> <span>9087462091</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;