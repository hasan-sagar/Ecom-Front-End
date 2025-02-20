import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

const demoProductData = [
  {
    id: 1,
    title: "Walton WFE-2H2-GDEL-XX",
    description: "Energy efficient double-door refrigerator with frost-free technology and adjustable shelving",
    price: 25000,
    review: 4.5,
    image: "/product-1-bg-1.png"
  },
  {
    id: 2,
    title: "Sony WH-1000XM4 Headphones",
    description: "Wireless noise-cancelling headphones with 30-hour battery life and touch controls",
    price: 18500,
    review: 4.8,
    image: "/product-2-bg-1.png"
  },
  {
    id: 3,
    title: "Samsung Galaxy S22 Ultra",
    description: "Flagship smartphone with 108MP camera, S Pen support, and 120Hz AMOLED display",
    price: 85000,
    review: 4.7,
    image: "/product-4-bg-1.png"
  },
  {
    id: 4,
    title: "Dell XPS 15 Laptop",
    description: "Premium laptop with 11th Gen Intel Core i7, 16GB RAM, 512GB SSD, and InfinityEdge display",
    price: 120000,
    review: 4.6,
    image: "/product-4-bg-1.png"
  },
  {
    id: 5,
    title: "Philips Air Fryer HD9252",
    description: "Digital air fryer with Rapid Air technology, 4.1L capacity, and 7 preset cooking programs",
    price: 12000,
    review: 4.3,
    image: "/product-4-bg-1.png"
  },
  {
    id: 6,
    title: "TV",
    description: "Ultra HD TV with AI ThinQ, Dolby Vision IQ, Dolby Atmos, and NVIDIA G-SYNC compatibility",
    price: 95000,
    review: 4.9,
    image: "/product-4-bg-1.png"
  }
];

export default function NewArrivalProduct() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          New Arrivals <FiShoppingBag className='w-5 h-5' />
        </h1>
        <button className="bg-[#1c274c] hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-md transition-colors">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {demoProductData.map((product) => (
          <div key={product.id} className="rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <a href="#">
              <img className="w-full" src={product.image} alt={product.title} />
            </a>
            <div className="px-6 py-4 flex-grow">
              <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                {product.title}
              </a>
              <p className="text-gray-500 text-sm">
                {product.description}
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center justify-between">
              <span className="py-1 text-sm font-regular text-gray-900 flex flex-row items-center">
                <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                  <g>
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                      c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                      c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z" />
                    </g>
                  </g>
                </svg>
                <span className="ml-1">6 mins ago</span>
              </span>
              <span className="text-sm text-gray-500">{product.price} USD</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}