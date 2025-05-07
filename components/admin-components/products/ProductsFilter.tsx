"use client";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterSidebar({ isOpen, onClose }: FilterSidebarProps) {
  return (
    <>
      {/* Filter Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-2/6 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 relative">
          <h2 className="text-lg font-semibold text-textdark3 mb-4">Filters</h2>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-textdark3 hover:text-textdark2"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Filter Content */}
          <div>
            <label className="block text-sm font-medium text-textdark3">
              Category
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
              <option>All</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
            </select>
          </div>

          {/* Apply Filters Button */}
          <button
          onClick={onClose}
            className="mt-6 p-2 w-full bg-primary text-white hover:bg-primary/90 rounded-md"
          >
            Apply Filters
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 opacity-85 z-40"
          onClick={onClose}
        />
      )}
    </>
  );
}