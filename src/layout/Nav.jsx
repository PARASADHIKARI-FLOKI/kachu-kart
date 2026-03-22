import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import logo from "../../public/logo.png";

const Nav = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="bg-gray-400 shadow-md sticky top-0 z-50 h-20">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">

        {/* LEFT: Logo */}
        <div className="flex items-center h-full">
          <img
            src={logo}
            alt="Logo"
            className="h-50 w-auto object-contain mt-5"
          /> 
        </div>

        {/* CENTER: Nav Links */}
        <nav className="hidden md:flex items-center gap-12 text-gray-700 font-medium">
          <Link to="/" className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link to="/factories" className="hover:text-gray-500 transition">
            Factories
          </Link>
          <Link to="/admin" className="hover:text-gray-500 transition">
            Admin
          </Link>
        </nav>

        {/* RIGHT: Search + Auth */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden lg:block relative">
            <IoIosSearch className="absolute left-3 top-2.5 text-lg text-gray-400" />
            <input
              type="search"
              placeholder="Search Products"
              className="pl-10 pr-4 py-2 w-60 h-9 rounded-full bg-gray-200 text-gray-700 border border-gray-300"
            />
          </div>

          {/* Person Icon */}
          <button
            onClick={() => setShowLogin(true)}
            className="px-4 py-2 text-gray-700 rounded-full hover:text-gray-500 transition"
          >
            <BsFillPersonFill className="text-lg cursor-pointer" />
          </button>
        </div>

        {/* Modals */}
        {showSignup && (
          <SignUp
            onClose={() => setShowSignup(false)}
            openLogin={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
          />
        )}
        {showLogin && (
          <Login
            onClose={() => setShowLogin(false)}
            openSignUp={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Nav;