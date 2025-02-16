import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function ContactNumber() {
  return (
    <div>
      <a className="flex items-center gap-2.5" href="/signin">
        <FiPhoneCall size={25} className="text-primary" />
        <div className="group">
          <span className="block font-medium text-xs text-textdark uppercase">
            24/7 Support
          </span>
          <p className="font-medium text-[14px] mt-1 text-textdark2">
            (+880) 1736487843
          </p>
        </div>
      </a>
    </div>
  );
}
