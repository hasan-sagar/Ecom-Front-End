"use client";
import { useRouter } from "next/navigation";

export default function CreateSuppliersPage() {
  const router = useRouter();
  return (
    <div className="max-w-full mx-auto p-4 bg-white rounded-lg">
      <div className="p-4 rounded-lg">
        <h4 className="text-2xl font-semibold text-textdark2 mb-6">
          Create Supplier
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Supplier name */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
              <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Enter your supplier name"
              className="required-field w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>

          {/* Supplier email address */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
              <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your supplier email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>

          {/* Supplier phone nnumber */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
              <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Enter your supplier phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>

          {/* Supplier country */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Country
            </label>
            <input
              defaultValue="Bangladesh"
              type="text"
              placeholder="Enter your supplier country"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>

          {/* Supplier city */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              City
              <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Enter your supplier city"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>

          {/* Supplier company name */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company Name
              <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Enter your supplier company name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>

          {/* Address */}
          <div className="mb-4 col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Address
              <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Enter your supplier address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-end space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => router.push("/admin/suppliers")}
            type="button"
            className="w-full sm:w-auto px-6 py-2 text-sm font-medium text-white bg-red-500 border rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 text-sm font-medium text-white bg-primary border rounded-md transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
