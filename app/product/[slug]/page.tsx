"use client";

// import React, { useState } from 'react';
import { use } from 'react';
import Image from 'next/image';

export default function SingleProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  console.log(slug);

  // const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="w-full border-t border-b p-4 mb-4">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shop Details</h1>
          <ul className="flex space-x-4">
            <li className="text-gray-600 hover:text-black cursor-pointer">Home</li>
            <li className="text-gray-600 hover:text-black cursor-pointer">Shop Details</li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 p-4 flex flex-col lg:flex-row items-start justify-center gap-8">
        <div className="flex justify-center lg:justify-end bg-gray-200 p-4 rounded-md">
          <Image src="/demoProduct.png" alt="Product" width={400} height={400} />
        </div>
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <h1 className="text-2xl font-semibold">Portable Electric Grinder Maker</h1>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">(2 customer reviews)</span>
            <span className="text-green-600">In Stock</span>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <span className="font-bold text-xl">$777</span>
            <span className="line-through text-gray-500">$888</span>
            <span className="bg-blue-500 text-white px-2 py-1 text-sm rounded-md">30% OFF</span>
          </div>
          <div>
            <span className="font-medium">Color:</span>
            <span className="ml-2 w-4 h-4 bg-black inline-block rounded-full border"></span>
          </div>
        </div>
      </div>
    </div>
  );
}