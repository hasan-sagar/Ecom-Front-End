import { FaChevronDown } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { Product } from "./Accordion";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <>
      <div className="lg:w-3/4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="text-sm text-gray-600">
                Showing 10 of 10 Products
              </div>
            </div>
            <div className="flex items-center justify-between w-full sm:w-auto">
              <span className="text-sm text-gray-600 mr-2">
                Latest Products
              </span>
              <FaChevronDown className="text-gray-400 text-xs" />
            </div>
          </div>
        </div>

        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
