import CartBadge from "@/components/ui/navbar/CartBadge";
import ContactNumber from "@/components/ui/navbar/ContactNumber";
import NavbarMenu from "@/components/ui/navbar/Navbarmenu";
import SearchBar from "@/components/ui/navbar/SearchBar";
import UserAccount from "@/components/ui/navbar/UserAccount";
import React from "react";

export default function AppNavbar() {
  return (
    <header className="w-full border-gray-200 border border-b">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
        <div className="flex items-center justify-between py-6">
          <div className="text-3xl text-primary font-bold">
            Exute Shop
            {/* <span className="block lg:hidden">Exute</span> */}
            {/* <span className="hidden lg:block">Exute Shop</span> */}
          </div>

          <SearchBar />
          <div className="hidden lg:flex items-center gap-5">
            <ContactNumber />
            <UserAccount />
            <CartBadge />
          </div>
          <div className="lg:hidden">
            <NavbarMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
