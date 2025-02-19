"use client";
import Image from "next/image";
import React from "react";

interface Product {
  id: number;
  product: string;
  image: string;
  offer: string;
  features: string;
}

const poroductData = [
  {
    id: 1,
    product: "Apple iPhone 14 Plus",
    image: "/promo-01.png",
    offer: "UP TO 30% OFF",
    features:
      "Same superspeedy chip as iPhone 13 Pro, A15 Bionic chip, 5-core GPU, Powers all the latest features",
  },
  {
    id: 1,
    product: "Samsung Galaxy S23 Ultra",
    image: "/promo-02.png",
    offer: "Limited Time Offer: Free Galaxy Buds",
    features:
      "200MP Camera, Snapdragon 8 Gen 2 processor, Immersive Dynamic AMOLED 2X display",
  },
  {
    id: 1,
    product: "Google Pixel 7",
    image: "/promo-03.png",
    offer: "Trade-in and save up to $400",
    features:
      "Google Tensor G2 chip, Super Res Zoom, Magic Eraser, Stunning photo and video quality",
  },
];

export default function PromotionProduct() {
  const getProductData = poroductData.map((product: Product) => {
    return product;
  });

  console.log(getProductData);

  return (
    <div className="max-w-[1170px] mx-auto w-full px-4 sm:px-7.5 xl:px-0">
      <div className="max-w-6xl mx-auto p-4 font-sans">
        {/* iPhone Banner Section */}
        <div className="bg-gray-100 rounded-lg p-6 mb-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-lg font-medium text-blue-900">
              {getProductData[0].product}
            </h3>
            <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-4">
              {getProductData[0].offer}
            </h2>
            <p className="text-gray-700 mb-6">{getProductData[0].features}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-md transition-colors">
              Buy Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* <img
              src="/api/placeholder/400/500"
              alt="iPhone 14 Plus"
              className="h-80 object-contain"
            /> */}
            <Image
              width={320}
              height={320}
              className="object-contain"
              src={getProductData[0].image}
              alt="iPhone 14 Plus"
            />
          </div>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Treadmill Card */}
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mb-4 md:mb-0">
              {/* <img
                src="/api/placeholder/300/300"
                alt="Foldable Treadmill"
                className="h-52 object-contain"
              /> */}

              <Image
                width={320}
                height={320}
                className="h-52 object-contain"
                src={getProductData[1].image}
                alt="iPhone 14 Plus"
              />
            </div>
            <div className="md:w-3/5 md:pl-6">
              <p className="text-blue-900 font-medium">
                {getProductData[1].product}
              </p>
              <h3 className="text-3xl font-bold text-blue-900 my-2">
                {getProductData[1].offer}
              </h3>
              {/* <p className="text-teal-500 text-xl font-bold mb-4">
                {getProductData[1].offer}
              </p> */}
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Grab Now
              </button>
            </div>
          </div>

          {/* Apple Watch Card */}
          <div className="bg-orange-50 rounded-lg p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-4 md:mb-0 order-2 md:order-1">
              <p className="text-blue-900 font-medium">
                {getProductData[2].product}
              </p>
              {/* <h3 className="text-3xl font-bold text-blue-900 my-2">
                {getProductData[2].product}
              </h3> */}
              <h3 className="text-3xl font-bold text-blue-900 my-2">
                {getProductData[2].offer}
              </h3>
              {/* <p className="text-teal-500 text-xl font-bold mb-4">
                {getProductData[2].features}
              </p> */}
              <p className="text-gray-700 mb-4">{getProductData[2].offer}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Buy Now
              </button>
            </div>
            <div className="md:w-2/5 flex justify-center order-1 md:order-2">
              {/* <img
                src="/api/placeholder/300/300"
                alt="Apple Watch Ultra"
                className="h-52 object-contain"
              /> */}

              <Image
                width={320}
                height={320}
                className="h-52 object-contain"
                src={getProductData[2].image}
                alt="iPhone 14 Plus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
