import React from "react";
import { FiEye, FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const demoProductData = [
  {
    id: 1,
    title: "Walton WFE-2H2-GDEL-XX",
    description:
      "Energy efficient double-door refrigerator with frost-free technology and adjustable shelving",
    price: 25000,
    review: 4.5,
    image: "/product-1-bg-1.png",
  },
  {
    id: 2,
    title: "Sony WH-1000XM4 Headphones",
    description:
      "Wireless noise-cancelling headphones with 30-hour battery life and touch controls",
    price: 18500,
    review: 4.8,
    image: "/product-2-bg-1.png",
  },
  {
    id: 3,
    title: "Samsung Galaxy S22 Ultra",
    description:
      "Flagship smartphone with 108MP camera, S Pen support, and 120Hz AMOLED display",
    price: 85000,
    review: 4.7,
    image: "/product-4-bg-1.png",
  },
  {
    id: 4,
    title: "Dell XPS 15 Laptop",
    description:
      "Premium laptop with 11th Gen Intel Core i7, 16GB RAM, 512GB SSD, and InfinityEdge display",
    price: 120000,
    review: 4.6,
    image: "/product-4-bg-1.png",
  },
  {
    id: 5,
    title: "Philips Air Fryer HD9252",
    description:
      "Digital air fryer with Rapid Air technology, 4.1L capacity, and 7 preset cooking programs",
    price: 12000,
    review: 4.3,
    image: "/product-4-bg-1.png",
  },
  {
    id: 6,
    title: "TV",
    description:
      "Ultra HD TV with AI ThinQ, Dolby Vision IQ, Dolby Atmos, and NVIDIA G-SYNC compatibility",
    price: 95000,
    review: 5,
    image: "/product-4-bg-1.png",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`w-4 h-4 ${
            index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-500">({rating})</span>
    </div>
  );
};

export default function NewArrivalProduct() {
  function slugify(text: string): string {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  }
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <FiShoppingBag size={20} className="text-primary" />
          New Arrivals
        </h1>
        <button className="bg-[#1c274c] hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-md transition-colors">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {demoProductData.map((product) => {
          const productSlug = slugify(product.title);

          return (
            <div
              key={product.id}
              className="rounded overflow-hidden flex flex-col justify-between"
            >
              <div className="relative group bg-backgroundColor5">
                <Link href={`/product/${productSlug}`}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <button className="p-3 bg-white text-indigo-600 rounded-full transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                        <FiEye size={20} />
                      </button>
                      <button className="p-3 bg-white text-indigo-600 rounded-full transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                        <FiShoppingBag size={20} />
                      </button>
                    </div>
                  </div>
                </Link>

                <div className="absolute top-0 right-0 mt-3 mr-3">
                  <button className="p-2 bg-indigo-600 text-white rounded-full hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    <GoHeart size={20} />
                  </button>
                </div>
              </div>

              <div className="px-6 py-4 flex-grow">
                <Link
                  href={"/product/" + product.title}
                  className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  {product.title}
                </Link>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="px-6 py-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toLocaleString()}
                    </span>
                    <span className="text-base text-textdark line-through">
                      ${product.price.toLocaleString()}
                    </span>
                    <StarRating rating={product.review} />
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center gap-2">
                    <FiShoppingBag className="w-4 h-4" />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
