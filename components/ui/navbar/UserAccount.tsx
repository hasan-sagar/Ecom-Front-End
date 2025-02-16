import React from "react";
import { LuUser } from "react-icons/lu";

export default function UserAccount() {
  return (
    <div>
      <a className="flex items-center gap-2.5" href="/signin">
        <LuUser size={25} className="text-primary" />
        <div className="group">
          <span className="block font-medium text-xs text-textdark uppercase">
            account
          </span>
          <p className="font-medium mt-1 text-[14px]  text-textdark2">
            Sign In
          </p>
        </div>
      </a>
    </div>
  );
}
