import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import ForgetPassword from "../auth/ForgetPassword";
import VerifyCode from "../auth/VerifyCode";
import Newpassword from "../auth/Newpassword";

const Nav = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);

  return (
    <header className="bg-gray-400 shadow-md sticky top-0 z-50 h-20">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* LEFT: Logo */}
        <Link to="/">
          <div className="flex items-center h-full">
            <img
              src={logo} // use public folder
              alt="Logo"
              className="h-40 w-auto object-contain mt-5"
            />
          </div>
        </Link>

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
            <IoIosSearch className="absolute left-3 top-2.5 text-lg text-gray-600" />
            <input
              type="search"
              placeholder="Search Products"
              className="pl-10 pr-4 py-2 w-60 h-9 rounded-full bg-gray-100 text-gray-700 border border-red-400 focus:outline-none"
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
          openForgot={() => {
            setShowLogin(false);
            setShowForgot(true);
          }}
        />
      )}

    {/* Forgot Password */}
{showForgot && (
  <ForgetPassword
    goNext={() => {
      setShowForgot(false);
      setShowVerify(true);
    }}
    onClose={() => setShowForgot(false)}
  />
)}

{/* Verify Code */}
{showVerify && (
  <VerifyCode
    goNext={() => {
      setShowVerify(false);
      setShowNewPass(true);
    }}
    onClose={() => setShowVerify(false)}
  />
)}

{/* New Password */}
{showNewPass && (
  <Newpassword
    onClose={() => setShowNewPass(false)}
  />
)}
    </header>
  );
};

export default Nav;