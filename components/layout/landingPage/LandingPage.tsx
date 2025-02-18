"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/demoProduct.png",
    title: "True Wireless Noise Cancelling Headphone",
    shorrttext:
      "Discover amazing products at great prices! Discover amazing products at great prices!",
    saleText: "30%",
  },
  {
    id: 2,
    image: "/demoProduct.png",
    title: "True Wireless Noise Cancelling Headphone",
    shorrttext:
      "Discover amazing products at great prices! Discover amazing products at great prices!",
    saleText: "30%",
  },
  {
    id: 3,
    image: "/demoProduct.png",
    title: "True Wireless Noise Cancelling Headphone",
    shorrttext:
      "Discover amazing products at great prices! Discover amazing products at great prices!",
    saleText: "30%",
  },
];

export default function LandingPage() {
  return (
    <section className="bg-backgroundColor py-12">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="rounded-lg bg-white overflow-hidden bg-[url(/hero-bg.png)] bg-no-repeat bg-cover">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex flex-col-reverse md:flex-row h-[600px]">
                  {/* Left side - Text content */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-12">
                    {/* ...existing text content... */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-primary flex gap-3 items-center">
                      {slide.saleText}
                      <span className="block text-textdark2 text-sm sm:text-xl font-medium">
                        Sale
                        <br />
                        Off
                      </span>
                    </h2>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                      {slide.title}
                    </h4>

                    <p className="text-sm sm:text-sm md:text-base text-gray-600 mb-6">
                      {slide.shorrttext}
                    </p>
                    <button className="bg-textdark2 hover:bg-primary text-white font-semibold py-3 px-7 rounded-md transition duration-300">
                      Shop Now
                    </button>
                  </div>
                  {/* Right side - Image */}
                  <div className="w-full md:w-1/2 flex justify-center items-center h-full p-4">
                    <div className="relative w-full h-[200px] md:h-[400px]">
                      <Image
                        src={slide.image}
                        alt={`${slide.title}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
