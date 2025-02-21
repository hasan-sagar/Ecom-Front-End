import Link from "next/link";

export default function ShopHeader() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Explore All Products
            </h1>
          </div>
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <a href="/shop" className="hover:text-indigo-600 transition-colors">
              Shop
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
