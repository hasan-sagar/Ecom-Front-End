import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function CartBadge() {
  return (
    <div>
      <a className="flex items-center gap-2.5" href="/cart">
        <div className="relative">
          <FiShoppingCart size={25} className="text-primary" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-primary text-white">
            5
          </span>
        </div>
        <div className=" ml-2">
          <span className="block font-medium text-xs text-textdark uppercase">
            Cart
          </span>
          <p className="font-medium text-[14px] me-2 text-textdark2">$700</p>
        </div>
      </a>
    </div>
  );
}
