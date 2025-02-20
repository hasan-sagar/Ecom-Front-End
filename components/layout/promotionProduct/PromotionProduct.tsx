"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Product {
  id: number;
  product: string;
  image: string;
  offer: string;
  features: string;
}

const productData: Product[] = [
  {
    id: 1,
    product: "Apple iPhone 14 Plus",
    image: "/promo-01.png",
    offer: "UP TO 30% OFF",
    features:
      "Same superspeedy chip as iPhone 13 Pro, A15 Bionic chip, 5-core GPU, Powers all the latest features",
  },
  {
    id: 2,
    product: "Samsung Galaxy S23 Ultra",
    image: "/promo-02.png",
    offer: "Limited Time Offer: Free Galaxy Buds",
    features:
      "200MP Camera, Snapdragon 8 Gen 2 processor, Immersive Dynamic AMOLED 2X display",
  },
  {
    id: 3,
    product: "Google Pixel 7",
    image: "/promo-03.png",
    offer: "Trade-in and save up to $400",
    features:
      "Google Tensor G2 chip, Super Res Zoom, Magic Eraser, Stunning photo and video quality",
  },
];

export default function PromotionProduct() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Split features into an array
  const featuresArray = productData[0].features.split(", ");

  // Function to cycle through features
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % featuresArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [featuresArray.length]);

  return (
    <div className="max-w-[1170px] mx-auto w-full px-4 sm:px-7.5 xl:px-0">
      <div className="max-w-6xl mx-auto py-4 font-sans">
        {/* Enhanced iPhone Banner Section */}
        <div
          className={`bg-gradient-to-r from-gray-100 to-blue-50 rounded-lg p-8 md:p-14 mb-6 flex flex-col md:flex-row items-center justify-between transition-all duration-500 ${
            isHovered ? "shadow-md scale-[1.01]" : "shadow-sm"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <div className="w-1.5 h-6 bg-blue-600 mr-3"></div>
              <span className="text-blue-600 font-semibold tracking-wider">
                FEATURED
              </span>
            </div>
            <h3 className="text-lg font-medium text-blue-900 transition-all duration-300">
              {productData[0].product}
            </h3>
            <h2
              className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mt-2 mb-4 transition-all duration-500 ${
                isHovered ? "scale-105" : ""
              }`}
            >
              {productData[0].offer}
            </h2>

            <div className="relative h-16 mb-6 overflow-hidden">
              {featuresArray.map((feature, index) => (
                <p
                  key={index}
                  className={`absolute w-full text-gray-700 transition-all duration-500 transform ${
                    index === activeFeature
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0"
                  }`}
                >
                  {feature}
                </p>
              ))}
            </div>

            <div className="flex space-x-2 mb-6">
              {featuresArray.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeFeature
                      ? "w-6 bg-blue-600"
                      : "w-2 bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>

            <button
              className={`group relative overflow-hidden bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 ${
                isHovered ? "bg-blue-700" : ""
              }`}
            >
              <span className="relative z-10">Buy Now</span>
              <span className="absolute inset-0 h-full w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div
              className={`absolute -inset-4  rounded-full opacity-20 blur-2xl transition-all duration-500 ${
                isHovered ? "scale-110" : "scale-90"
              }`}
            ></div>
            <div
              className={`relative transition-all duration-500 transform ${
                isHovered ? "scale-110 -rotate-6" : ""
              }`}
            >
              <Image
                loading="lazy"
                width={320}
                height={320}
                className="object-contain"
                src={productData[0].image}
                alt="iPhone 14 Plus"
              />
            </div>
          </div>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Samsung Card */}
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mb-4 md:mb-0">
              <Image
                width={320}
                height={320}
                className="h-52 object-contain"
                src={productData[1].image}
                alt={productData[1].product}
              />
            </div>
            <div className="md:w-3/5 md:pl-6">
              <p className="text-blue-900 font-medium">
                {productData[1].product}
              </p>
              <h3 className="text-3xl font-bold text-blue-900 my-2">
                {productData[1].offer}
              </h3>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Grab Now
              </button>
            </div>
          </div>

          {/* Google Pixel Card */}
          <div className="bg-orange-50 rounded-lg p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-4 md:mb-0 order-2 md:order-1">
              <p className="text-blue-900 font-medium">
                {productData[2].product}
              </p>
              <h3 className="text-3xl font-bold text-blue-900 my-2">
                {productData[2].offer}
              </h3>
              <p className="text-gray-700 mb-4">{productData[2].features}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Buy Now
              </button>
            </div>
            <div className="md:w-2/5 flex justify-center order-1 md:order-2">
              <Image
                width={320}
                height={320}
                className="h-52 object-contain"
                src={productData[2].image}
                alt={productData[2].product}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
