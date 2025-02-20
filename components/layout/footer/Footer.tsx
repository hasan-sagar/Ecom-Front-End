import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaApple } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="py-10 bg-backgroundColor">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Help & Support */}
            <div>
            <h3 className="text-lg font-semibold mb-5 text-black">Help & Support</h3>
            <p className="text-textdark4 flex items-center mb-2"><FaLocationArrow className="mr-2" />Market Street, United States.</p>
            <p className="text-textdark4 flex items-center mb-2"><MdOutlinePhone className="mr-2" />(+099) 532-786-9843</p>
            <p className="text-textdark4 flex items-center mb-2"><CiMail className="mr-2" />support@example.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-black text-xl">
              <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-black text-xl">
              <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-black text-xl">
              <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-black text-xl">
              <FaLinkedinIn />
              </a>
            </div>
            </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-textdark4 hover:text-black">Login / Register</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-textdark4 hover:text-black">Cart</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-textdark4 hover:text-black">Wishlist</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-textdark4 hover:text-black">Shop</a>
              </li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-textdark4 hover:text-black">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-textdark4 hover:text-black">Refund Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-textdark4 hover:text-black">Terms of Use</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-textdark4 hover:text-black">FAQ's</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-textdark4 hover:text-black">Contact</a>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="mb-4 text-textdark4">Get our app for the best shopping experience.</p>
            <div className="flex flex-col space-y-4">
              <button className="flex items-center justify-center bg-black hover:bg-[#1c1c1e] text-white font-medium py-2 px-4 rounded-md transition-colors">
                <FaApple className="mr-2" /> App Store
              </button>
              <button className="flex items-center justify-center bg-[#34A853] hover:bg-[#2c8c44] text-white font-medium py-2 px-4 rounded-md transition-colors">
                <IoLogoGooglePlaystore className="mr-2" /> Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}