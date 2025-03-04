import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

export default function AppMenu() {
  return (
    <nav className="border-t border-gray-200 hidden lg:block">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0 flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-auto">
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <li className="border-b-2 border-transparent ">
              <Link
                href="/"
                className="hover:text-blue-500 text-custom-sm font-medium text-dark flex xl:py-6"
              >
                Home
              </Link>
            </li>
            <li className="border-b-2 border-transparent ">
              <Link
                href="/shop"
                className="hover:text-blue-500 text-custom-sm font-medium text-dark flex xl:py-6"
              >
                Shops
              </Link>
            </li>
            <li className="border-b-2 border-transparent ">
              <Link
                href="#"
                className="hover:text-blue-500 text-custom-sm font-medium text-dark flex xl:py-6"
              >
                Categories
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0 border-b-2 border-transparent">
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-blue-500 text-custom-sm font-medium text-dark xl:py-6"
          >
            <FaRegHeart /> Wish list
          </Link>
        </div>
      </div>
    </nav>
  );
}
