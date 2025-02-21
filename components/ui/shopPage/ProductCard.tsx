"use client";
import { useState } from "react";
import Image from "next/image";
import { FiEye, FiShoppingBag } from "react-icons/fi";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { ProductCardProps } from "./Accordion";

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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishListed, setIsWishListed] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image Container */}
      <div className="relative group">
        {/* Discount Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            {Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100
            )}
            % OFF
          </span>
        </div>

        {/* Product Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-center object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Actions Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            <button className="p-2 bg-white text-indigo-600 rounded-full transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
              <FiEye size={20} />
            </button>
            <button className="p-2 bg-white text-indigo-600 rounded-full transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
              <FiShoppingBag size={20} />
            </button>
          </div>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishListed(!isWishListed)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300"
        >
          {isWishListed ? (
            <FaHeart className="w-4 h-4 text-red-500" />
          ) : (
            <FaRegHeart className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <span className="text-xs font-medium text-indigo-600 mb-1 block">
          {product.category}
        </span>
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="mb-3">
          <StarRating rating={product.rating} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900">
            ${product.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${product.oldPrice.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
