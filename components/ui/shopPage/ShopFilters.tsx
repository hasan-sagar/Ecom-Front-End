import { Accordion, Category } from "./Accordion";
import PriceRangeSlider from "./PriceRangeSlider";

const categories: Category[] = [
  { name: "Laptop & PC", count: 3 },
  { name: "Watches", count: 1 },
  { name: "Mobile & Tablets", count: 2 },
  { name: "Health & Sports", count: 1 },
  { name: "Home Appliances", count: 1 },
  { name: "Games & Videos", count: 2 },
  { name: "Televisions", count: 1 },
];

const sizes: string[] = ["XL", "XXL", "SM", "XM"];

export default function ShopFilters() {
  return (
    <div className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium">Filters:</h2>
          <button className="text-blue-600 text-sm">Clean All</button>
        </div>

        <Accordion title="Category" defaultOpen>
          <ul className="space-y-2">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center text-sm"
              >
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{cat.name}</span>
                </label>
                <span className="text-gray-500">{cat.count}</span>
              </li>
            ))}
          </ul>
        </Accordion>
        <Accordion title="Size">
          <div className="grid grid-cols-4 gap-2">
            {sizes.map((size, idx) => (
              <button
                key={idx}
                className="border border-gray-200 rounded py-1 text-sm hover:border-blue-600 focus:border-blue-600 focus:text-blue-600"
              >
                {size}
              </button>
            ))}
          </div>
        </Accordion>

        <Accordion title="Price">
          <PriceRangeSlider />
        </Accordion>
      </div>
    </div>
  );
}
