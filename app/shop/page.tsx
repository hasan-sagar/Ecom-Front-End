"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import { FiEye, FiShoppingBag } from "react-icons/fi";
import { TbLayoutGrid, TbLayoutList } from "react-icons/tb";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
}

interface Category {
  name: string;
  count: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Portable Electric Grinder Maker",
    category: "Home Appliances",
    price: 777,
    oldPrice: 888,
    rating: 0,
    image: "/demoProduct.png",
  },
  {
    id: 2,
    name: "Indoor Steel Adjustable Silent Treadmill Home Fitness",
    category: "Health & Sports",
    price: 888,
    oldPrice: 999,
    rating: 0,
    image: "/promo-01.png",
  },
  {
    id: 3,
    name: "Rangé 43 Inch Frameless FHD Double Glass Android TV",
    category: "Televisions",
    price: 700,
    oldPrice: 800,
    rating: 0,
    image: "/promo-02.png",
  },
  {
    id: 4,
    name: "True Wireless Noise Cancelling Headphone",
    category: "Mobile & Tablets",
    price: 899,
    oldPrice: 930,
    rating: 0,
    image: "/promo-03.png",
  },
  {
    id: 5,
    name: "Macbook Pro M4 Pro - 512/16GB",
    category: "Laptop & PC",
    price: 450,
    oldPrice: 500,
    rating: 1,
    image: "/product-1-bg-1.png",
  },
  {
    id: 6,
    name: "Apple Watch Ultra",
    category: "Watches",
    price: 89,
    oldPrice: 99,
    rating: 0,
    image: "/product-1-bg-1.png",
  },
  {
    id: 7,
    name: "MacBook Air M4 chip, 16/256GB",
    category: "Laptop & PC",
    price: 600,
    oldPrice: 699,
    rating: 0,
    image: "/product-1-bg-1.png",
  },
  {
    id: 8,
    name: "Apple iMac M4 24-inch 2025",
    category: "Laptop & PC",
    price: 333,
    oldPrice: 555,
    rating: 4,
    image: "/product-1-bg-1.png",
  },
  {
    id: 9,
    name: "iPhone 16 Pro - 8/128GB",
    category: "Mobile & Tablets",
    price: 600,
    oldPrice: 899,
    rating: 0,
    image: "/product-1-bg-1.png",
  },
  {
    id: 10,
    name: "Havit HV-G69 USB Gamepad",
    category: "Games & Videos",
    price: 26,
    oldPrice: 54,
    rating: 0,
    image: "/product-1-bg-1.png",
  },
];

const categories: Category[] = [
  { name: "Laptop & PC", count: 3 },
  { name: "Watches", count: 1 },
  { name: "Mobile & Tablets", count: 2 },
  { name: "Health & Sports", count: 1 },
  { name: "Home Appliances", count: 1 },
  { name: "Games & Videos", count: 2 },
  { name: "Televisions", count: 1 },
];

const sizes: string[] = ["XL", "XXL", "SM", "XM"];

interface ProductCardProps {
  product: Product;
}

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

// Update the ProductCard component
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
            width={500}
            height={500}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
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
interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  return (
    <div className="border-b border-gray-100">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-700">{title}</span>
        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

const PriceRangeSlider: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(999);

  return (
    <div>
      <div className="relative h-1 bg-gray-200 rounded-full mt-6 mb-4">
        <div
          className="absolute h-1 bg-blue-600 rounded-full"
          style={{
            left: `${(minPrice / 999) * 100}%`,
            right: `${100 - (maxPrice / 999) * 100}%`,
          }}
        ></div>
        <div
          className="absolute w-4 h-4 bg-blue-600 rounded-full -mt-1.5 -ml-2 cursor-pointer"
          style={{ left: `${(minPrice / 999) * 100}%` }}
        ></div>
        <div
          className="absolute w-4 h-4 bg-blue-600 rounded-full -mt-1.5 -ml-2 cursor-pointer"
          style={{ left: `${(maxPrice / 999) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between">
        <div className="flex border rounded-md w-20">
          <span className="text-gray-500 px-2 py-1">$</span>
          <input
            className="w-full px-1 py-1 focus:outline-none"
            type="number"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(Math.min(parseInt(e.target.value) || 0, maxPrice))
            }
          />
        </div>
        <div className="flex border rounded-md w-20">
          <span className="text-gray-500 px-2 py-1">$</span>
          <input
            className="w-full px-1 py-1 focus:outline-none"
            type="number"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Math.max(parseInt(e.target.value) || 0, minPrice))
            }
          />
        </div>
      </div>
    </div>
  );
};

type ViewType = "grid" | "list";

const App: React.FC = () => {
  const [viewType, setViewType] = useState<ViewType>("grid");
  //sconst [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 border border-b">
      {/* Header */}
      <header className="bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Explore All Products
              </h1>
            </div>
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="hover:text-indigo-600 transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <a
                href="/shop"
                className="hover:text-indigo-600 transition-colors"
              >
                Shop
              </a>
              <span className="text-gray-400">/</span>
              <span className="text-indigo-600 font-medium">
                Shop With Sidebar
              </span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 max-w-[1170px]">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar / Filter Section */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Filters:</h2>
                <button className="text-blue-600 text-sm">Clean All</button>
              </div>

              <Accordion title="Category" defaultOpen>
                <ul className="space-y-2">
                  {categories.map((cat, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-gray-700">{cat.name}</span>
                      <span className="text-gray-500">{cat.count}</span>
                    </li>
                  ))}
                </ul>
              </Accordion>

              <Accordion title="Size">
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map((size, idx) => (
                    <button
                      key={idx}
                      className="border border-gray-200 rounded py-1 text-sm hover:border-blue-600 focus:border-blue-600 focus:text-blue-600"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </Accordion>

              <Accordion title="Price">
                <PriceRangeSlider />
              </Accordion>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center mb-4 sm:mb-0">
                  <span className="text-sm text-gray-600 mr-2">
                    Latest Products
                  </span>
                  <FaChevronDown className="text-gray-400 text-xs" />
                </div>
                <div className="flex items-center justify-between w-full sm:w-auto">
                  <div className="text-sm text-gray-600">
                    Showing 10 of 10 Products
                  </div>
                  <div className="flex ml-4">
                    <button
                      className={`p-2 ${
                        viewType === "grid"
                          ? "text-blue-600 bg-blue-50 rounded"
                          : "text-gray-400"
                      }`}
                      onClick={() => setViewType("grid")}
                    >
                      <TbLayoutGrid size={20} />
                    </button>
                    <button
                      className={`p-2 ${
                        viewType === "list"
                          ? "text-blue-600 bg-blue-50 rounded"
                          : "text-gray-400"
                      }`}
                      onClick={() => setViewType("list")}
                    >
                      <TbLayoutList size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`grid ${
                viewType === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              } gap-6`}
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
