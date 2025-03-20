import CartBadge from "@/components/ui/navbar/CartBadge";
import ContactNumber from "@/components/ui/navbar/ContactNumber";
import NavbarMenu from "@/components/ui/navbar/Navbarmenu";
import SearchBar from "@/components/ui/navbar/SearchBar";
import UserAccount from "@/components/ui/navbar/UserAccount";

export default function AppNavbar() {
  return (
    <header className="w-full border-gray-50 border border-b">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="text-3xl text-primary font-bold">
            {/* <span className="block md:hidden">ES</span> */}
            <span className="hidden md:block">EXUTE SHOP</span>
          </div>
          <SearchBar />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-5">
            <ContactNumber />
            <UserAccount />
            <CartBadge />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-4">
            <NavbarMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
