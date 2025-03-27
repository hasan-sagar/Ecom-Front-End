"use client";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";

export default function ConfirmationDialog({
  isModalOpen,
  onClose,
  brandId,
}: {
  isModalOpen: boolean;
  onClose: () => void;
  brandId: string;
}) {
  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center p-3">
        {/* Modal Container */}
        <div className="bg-white rounded-lg shadow-xl p-5 w-full max-w-sm mx-auto flex flex-col space-y-4">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Delete Confirmation
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoIosClose size={24} />
            </button>
          </div>

          {/* Content Section */}
          <div className="flex items-center gap-1 text-gray-700">
            <AiOutlineInfoCircle size={24} />
            <p className="text-sm sm:text-base">
              Do you want to delete this record?
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              onClick={onClose}
              type="button"
              className="inline-flex w-full sm:w-auto px-3 py-2 text-primary"
            >
              <IoIosClose size={25} />
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex w-full sm:w-auto px-3 py-2 text-red-500"
            >
              <IoIosCheckmark size={25} />
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  );
}
