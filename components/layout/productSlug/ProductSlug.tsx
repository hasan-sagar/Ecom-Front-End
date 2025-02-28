"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaShareAlt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import ProductSlugHeader from "@/components/ui/productSlug/ProductSlugHeader";

export default function ProductSlug() {
  //   const { slug } = use(params);
  //   console.log(slug);

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);

  // Product images gallery
  const productImages = [
    "/demoProduct.png",
    "/promo-01.png",
    "/promo-02.png",
    "/promo-03.png",
  ];

  // Related products

  // Function to handle quantity changes
  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="bg-white">
      <ProductSlugHeader />

      {/* Product Section */}
      <div className="max-w-screen-xl mx-auto px-10 mb-12 pt-10">
        <div className="flex flex-col lg:flex-row justify-between gap-20">
          {/* Product Gallery */}
          {/* Product Gallery */}
          <div className="lg:w-[50%]">
            <div className="mb-3 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center min-h-[450px]">
              <Image
                src={productImages[selectedImage]}
                alt="Product"
                width={450}
                height={450}
                className="w-auto h-auto max-w-full max-h-[450px] object-contain p-8"
                priority
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {productImages.map((img, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-2 border rounded-md flex-shrink-0 ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={img}
                    alt={`Product thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-5">
              Apple iMac M1 24-inch 2021
            </h1>

            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl text-blue-600">$1,499</span>
              <span className="line-through text-gray-500">$1,799</span>
              <span className="bg-blue-500 text-white px-2 py-1 text-sm rounded-md">
                17% OFF
              </span>
            </div>

            {/* Stock status */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-600 font-medium">In Stock</span>
            </div>

            <div className="border-t border-b py-6 mb-6">
              {/* Quantity */}
              <div className="mb-6">
                <span className="font-medium block mb-2">Quantity:</span>
                <div className="flex items-center">
                  <button
                    className="border rounded-l-md p-3 hover:bg-gray-100"
                    onClick={() => handleQuantityChange("decrease")}
                  >
                    <FaMinus size={16} />
                  </button>
                  <input
                    type="text"
                    className="border-t border-b w-12 text-center py-2"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="border rounded-r-md p-3 hover:bg-gray-100"
                    onClick={() => handleQuantityChange("increase")}
                  >
                    <FaPlus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2">
                {/* <FaShoppingCart size={18} /> */}
                <span>Add to Cart</span>
              </button>
              <button className="border border-gray-300 hover:bg-gray-100 p-3 rounded-md">
                <FaHeart size={18} />
              </button>
              <button className="border border-gray-300 hover:bg-gray-100 p-3 rounded-md">
                <FaShareAlt size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className=" rounded-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b">
            <button
              className={`py-4 px-6 font-medium ${
                activeTab === "description"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`py-4 px-6 font-medium ${
                activeTab === "specifications"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </button>
            <button
              className={`py-4 px-6 font-medium ${
                activeTab === "reviews"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (2)
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-bold mb-4">Product Description</h3>
                <p className="mb-4">
                  The new iMac is strikingly thin, with a color-matched aluminum
                  stand and a power cord that attaches magnetically. The 24‑inch
                  4.5K Retina display features 11.3 million pixels, P3 wide
                  color, and over a billion colors, delivering a brilliant and
                  vivid viewing experience.
                </p>
                <p className="mb-4">
                  The M1 chip and macOS deliver powerful performance for
                  everything you do. iMac wakes from sleep almost instantly,
                  apps launch with amazing speed, and the whole system feels
                  fluid, smooth, and snappy.
                </p>
                <p>
                  It includes up to four USB-C ports, including two Thunderbolt
                  ports, and up to three USB 3 ports, giving you plenty of
                  options to connect peripherals.
                </p>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Technical Specifications
                </h3>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium w-1/3">Processor</td>
                      <td className="py-3">
                        Apple M1 chip with 8‑core CPU and 8‑core GPU
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Memory</td>
                      <td className="py-3">8GB unified memory</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Storage</td>
                      <td className="py-3">256GB SSD</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Display</td>
                      <td className="py-3">24-inch 4.5K Retina display</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Camera</td>
                      <td className="py-3">1080p FaceTime HD camera</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Audio</td>
                      <td className="py-3">
                        Six-speaker sound system with force-cancelling woofers
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="max-w-4xl mx-auto">
                  {/* Review Summary */}
                  <div className="flex flex-col md:flex-row items-center justify-between mb-8 p-6 bg-white rounded-xl shadow-sm">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Customer Reviews
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          <FaStar size={24} />
                          <FaStar size={24} />
                          <FaStar size={24} />
                          <FaStar size={24} />
                          <FaStarHalfAlt size={24} />
                        </div>
                        <span className="text-lg font-semibold text-gray-700">
                          4.5 out of 5
                        </span>
                      </div>
                      <p className="text-gray-500 mt-1">Based on 127 reviews</p>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Existing Reviews */}
                    <div className="lg:w-1/2">
                      <div className="bg-white rounded-xl p-6 shadow-sm mb-4 transform transition-all duration-200 hover:shadow-md">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-semibold text-lg">
                                JD
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                John Doe
                              </h4>
                              <p className="text-sm text-gray-500">
                                February 12, 2025
                              </p>
                            </div>
                          </div>
                          <div className="flex text-yellow-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          The new iMac is incredible! The display is gorgeous
                          and the performance is blazing fast. Everything from
                          browsing to video editing is smooth and responsive.
                        </p>
                      </div>
                    </div>

                    {/* Review Form */}
                    <div id="reviewForm" className="lg:w-1/2">
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="text-xl font-bold text-gray-800 mb-6">
                          Write a Review
                        </h4>
                        <form className="space-y-6">
                          {/* Rating Selection */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Your Rating
                            </label>
                            <div className="flex gap-2 text-yellow-400 text-3xl">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  type="button"
                                  className="hover:scale-110 transition-transform focus:outline-none"
                                >
                                  <FaRegStar />
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Review Content */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Your Review
                            </label>
                            <textarea
                              rows={4}
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                              placeholder="Share your experience with this product..."
                            ></textarea>
                          </div>

                          {/* Personal Info */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your Name
                              </label>
                              <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="Enter your name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your Email
                              </label>
                              <input
                                type="email"
                                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="Enter your email"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            className=" bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-md font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                          >
                            Submit Review
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {/* <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden group"
            >
              <div className="bg-gray-100 p-4 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white p-2 rounded-full shadow-md mb-2 hover:bg-blue-500 hover:text-white">
                    <FaHeart size={16} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">{product.name}</h3>
                <div className="flex text-yellow-400 mb-1">
                  <FaStar size={12} />
                  <FaStar size={12} />
                  <FaStar size={12} />
                  <FaStar size={12} />
                  <FaRegStar size={12} />
                </div>
                <p className="font-bold text-lg">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
