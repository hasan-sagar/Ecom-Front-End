"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Dummy suggestions for demonstration purposes
  const suggestions = [
    "Latest Laptop Deals",
    "Trending Smartwatches",
    "Mobile & Tablets Offers",
    "Home Appliances Discounts",
    "Gaming Laptops",
  ];

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <div className="relative w-full max-w-[30rem] hidden lg:block">
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-300 rounded-md shadow-sm bg-white overflow-hidden"
      >
        <input
          type="text"
          placeholder="I'm shopping for..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="flex-1 px-4 py-2 focus:outline-none"
        />
        <button type="submit" className="px-4 text-gray-600 sm:px-2 sm:text-sm">
          <IoSearch className="text-zinc-400" size={20} />
        </button>
      </form>
      {isFocused && query && filteredSuggestions.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md mt-2 max-h-60 overflow-y-auto z-50">
          {filteredSuggestions.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onMouseDown={() => setQuery(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
