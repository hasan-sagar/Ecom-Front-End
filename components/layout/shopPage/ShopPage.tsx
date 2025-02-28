"use client";

import { Product } from "@/components/ui/shopPage/Accordion";
import ProductGrid from "@/components/ui/shopPage/ProductGrid";
import ShopFilters from "@/components/ui/shopPage/ShopFilters";
import ShopHeader from "@/components/ui/shopPage/ShopHeader";

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

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 border border-b">
      <ShopHeader />
      <main className="container mx-auto py-8 max-w-[1170px]">
        <div className="flex flex-col lg:flex-row gap-6">
          <ShopFilters />
          <ProductGrid products={products} />
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
