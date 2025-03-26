"use client";
import { useState } from "react";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";

export default function AddBrandsPage({
  isModalOpen,
  onClose,
}: {
  isModalOpen: boolean;
  onClose: () => void;
}) {
  //brand name state
  const [brandName, setBrandName] = useState<string>("");

  //submit brand data
  const handleSubmitBrand = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-md shadow-xl p-6 w-full max-w-md mx-auto flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Add Brand</h2>
            <button onClick={onClose}>
              <IoIosClose size={30} />
            </button>
          </div>

          <form
            onSubmit={handleSubmitBrand}
            className="flex flex-col flex-grow space-y-7"
          >
            <input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setBrandName(event.target.value)
              }
              type="text"
              placeholder="Enter brand name"
              required
              className="w-full px-3 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />

            <div className="mt-auto flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-2">
              <button
                onClick={onClose}
                type="button"
                className="inline-flex w-full sm:w-auto px-3 py-2  text-red-500"
              >
                <IoIosClose size={25} />
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex w-full sm:w-auto px-3 py-2 text-primary"
              >
                <IoIosCheckmark size={25} />
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
