import { useState } from "react";

const PriceRangeSlider: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(999);

  return (
    <div>
      <div className="relative h-1 bg-gray-200 rounded-full mt-6 mb-4">
        <div
          className="absolute h-1 bg-blue-600 rounded-full"
          style={{
            left: `${(minPrice / 999) * 100}%`,
            right: `${100 - (maxPrice / 999) * 100}%`,
          }}
        ></div>
        <div
          className="absolute w-4 h-4 bg-blue-600 rounded-full -mt-1.5 -ml-2 cursor-pointer"
          style={{ left: `${(minPrice / 999) * 100}%` }}
        ></div>
        <div
          className="absolute w-4 h-4 bg-blue-600 rounded-full -mt-1.5 -ml-2 cursor-pointer"
          style={{ left: `${(maxPrice / 999) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between">
        <div className="flex border rounded-md w-20">
          <span className="text-gray-500 px-2 py-1">$</span>
          <input
            className="w-full px-1 py-1 focus:outline-none"
            type="number"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(Math.min(parseInt(e.target.value) || 0, maxPrice))
            }
          />
        </div>
        <div className="flex border rounded-md w-20">
          <span className="text-gray-500 px-2 py-1">$</span>
          <input
            className="w-full px-1 py-1 focus:outline-none"
            type="number"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Math.max(parseInt(e.target.value) || 0, minPrice))
            }
          />
        </div>
      </div>
    </div>
  );
};
export default PriceRangeSlider;
