import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


const Footer = () => {
  return (
    <div>
        <div>
            <img src="logo.png" alt="" />
        <FaFacebook/>
        <FaInstagram/>
        <FaXTwitter />
             </div>

        <IoLogoWhatsapp/>
        <MdEmail/>
        <FaPhone/>
    </div>
  )
}

export default Footer