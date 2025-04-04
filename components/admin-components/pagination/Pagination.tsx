import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function PaginationComponent({
  data,
  onPageChange,
  currentPage,
  totalResult,
}: any) {
  // State for page size
  const [pageSize, setPageSize] = useState(data?.pagination.pageSize || 10);

  // Handle page dropdown
  const handlePageSizeChange = (e: any) => {
    const selectedValue = e.target.value;
    const newPageSize =
      selectedValue === "all" ? totalResult : parseInt(selectedValue, 10);
    setPageSize(newPageSize);
    onPageChange("pageSize", newPageSize);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-2">
      <div className="items-center gap-5 sm:flex hidden">
        <span className="text-base font-medium text-textdark3">
          Records per page
        </span>
        <select
          id="recordsPerPage"
          value={pageSize === totalResult ? "all" : pageSize}
          onChange={handlePageSizeChange}
          className="rounded px-3 py-2 text-base bg-white text-textdark3 custom-font"
        >
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="all">All</option>
        </select>
        <span className="text-base font-medium text-textdark3">
          {pageSize === totalResult ? "All" : pageSize} of {totalResult}
        </span>
      </div>

      {/* Pagination controls */}
      <div className="flex gap-4 w-full sm:w-auto justify-center sm:justify-end">
        <button
          onClick={() => onPageChange("previous")}
          className="p-2 rounded-md border border-gray-300 hover:bg-gray-200 transition w-full sm:w-auto"
        >
          <MdOutlineKeyboardArrowLeft className="w-5 h-5 text-textdark2" />
        </button>
        <button className="py-2 px-5 rounded-md border border-gray-300 hover:bg-gray-200 transition w-full sm:w-auto">
          {currentPage}
        </button>
        <button
          onClick={() => onPageChange("next")}
          className="p-2 rounded-md border border-gray-300 hover:bg-gray-200 transition w-full sm:w-auto"
        >
          <MdOutlineKeyboardArrowRight className="w-5 h-5 text-textdark2" />
        </button>
      </div>
    </div>
  );
}
