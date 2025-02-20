"use client";
import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="w-full rounded-2xl overflow-hidden shadow-xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-600 to-indigo-500 opacity-90"></div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300 opacity-10 rounded-full -ml-10 -mb-10"></div>

        <div className="relative p-10 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-4 md:w-1/2">
              <div className="flex items-center space-x-2">
                <BiBell className="w-5 h-5 text-blue-200" />
                <span className="text-blue-200 font-medium uppercase tracking-wider text-sm">
                  Newsletter
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {`Don't Miss Out Latest Trends & Offers`}
              </h2>

              <p className="text-blue-100 md:text-lg">
                Register to receive news about the latest offers & discount
                codes delivered directly to your inbox.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1 bg-blue-700/30 text-blue-100 text-xs font-medium rounded-full backdrop-blur-sm">
                  Exclusive Deals
                </span>
                <span className="px-3 py-1 bg-blue-700/30 text-blue-100 text-xs font-medium rounded-full backdrop-blur-sm">
                  Weekly Updates
                </span>
                <span className="px-3 py-1 bg-blue-700/30 text-blue-100 text-xs font-medium rounded-full backdrop-blur-sm">
                  Early Access
                </span>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <MdOutlineEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-700 bg-white bg-opacity-95 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span>Subscribe Now</span>
                    <BsArrowRight
                      className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                        isHovered ? "transform translate-x-1" : ""
                      }`}
                    />
                  </button>

                  <p className="text-center text-blue-100 text-xs">
                    By subscribing, you agree to our Privacy Policy and Terms of
                    Service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
