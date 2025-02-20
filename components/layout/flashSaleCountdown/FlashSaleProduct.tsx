"use client";
import Image from "next/image";
import Countdown from "react-countdown";

const FlashSaleProduct = () => {
  // Calculate target date: Current time + (10 days, 22 hours, 28 minutes, 16 seconds)
  const now = new Date();
  const targetDate = new Date(
    now.getTime() +
      10 * 24 * 60 * 60 * 1000 + // 10 days
      22 * 60 * 60 * 1000 + // 22 hours
      28 * 60 * 1000 + // 28 minutes
      16 * 1000 // 16 seconds
  );

  // Renderer for the countdown component
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return (
        <div className="flex space-x-4">
          <p className="text-xl font-bold text-red-600">Sale Ended!</p>
        </div>
      );
    }

    // Format time digits to always have two digits
    const formatTime = (value: number) => value.toString().padStart(2, "0");

    // Render active countdown
    return (
      <div className="flex space-x-4 mt-4">
        <div className="flex flex-col items-center">
          <div className="bg-white w-16 h-16 flex items-center justify-center rounded-lg shadow-sm">
            <span className="text-2xl font-bold">{formatTime(days)}</span>
          </div>
          <span className="text-sm mt-1 text-gray-600">Days</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white w-16 h-16 flex items-center justify-center rounded-lg shadow-sm">
            <span className="text-2xl font-bold">{formatTime(hours)}</span>
          </div>
          <span className="text-sm mt-1 text-gray-600">Hours</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white w-16 h-16 flex items-center justify-center rounded-lg shadow-sm">
            <span className="text-2xl font-bold">{formatTime(minutes)}</span>
          </div>
          <span className="text-sm mt-1 text-gray-600">Minutes</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white w-16 h-16 flex items-center justify-center rounded-lg shadow-sm">
            <span className="text-2xl font-bold">{formatTime(seconds)}</span>
          </div>
          <span className="text-sm mt-1 text-gray-600">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[url(/countdown-bg.png)] bg-no-repeat bg-cover rounded-lg p-8 md:p-16 mx-auto max-w-6xl overflow-hidden bg-backgroundColor4">
        {/* Left side content */}
        <div className="flex flex-col space-y-6 max-w-lg text-center md:text-left">
          <p className="text-indigo-600 font-medium text-lg">
            Don&apos;t Miss!!
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Enhance Your Music Experience
          </h2>
          <p className="text-gray-600">
            True Wireless Noise Cancelling Headphone
          </p>

          {/* Countdown timer using react-countdown */}
          <Countdown date={targetDate} renderer={renderer} />

          {/* CTA Button */}
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-md font-medium w-max mx-auto md:mx-0 mt-4 transition duration-200">
            Check it Out!
          </button>
        </div>

        {/* Right side image */}
        <div className="mt-8 md:mt-0">
          <Image
            width={400}
            height={400}
            src="/countdown-01.png"
            alt="Wireless Noise Cancelling Headphone"
            className="object-contain w-full md:w-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FlashSaleProduct;
