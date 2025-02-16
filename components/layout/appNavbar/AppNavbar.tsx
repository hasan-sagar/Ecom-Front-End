import CartBadge from "@/components/ui/navbar/CartBadge";
import ContactNumber from "@/components/ui/navbar/ContactNumber";
import SearchBar from "@/components/ui/navbar/SearchBar";
import UserAccount from "@/components/ui/navbar/UserAccount";
import React from "react";

export default function AppNavbar() {
  return (
    <header className="w-full border-gray-200">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
        <div className="flex items-center justify-between py-6">
          <div className="text-3xl text-primary font-bold">Exute Shop</div>
          <SearchBar />
          {/* Phone Number */}
          <div>
            <ContactNumber />
          </div>
          {/* user account */}
          <div>
            <UserAccount />
          </div>
          <div>
            <CartBadge />
          </div>
        </div>
      </div>
    </header>
  );
}
