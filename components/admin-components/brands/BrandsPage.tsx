"use client";
import { getAllBrands } from "@/services/brand-api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRef, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import PaginationComponent from "../pagination/Pagination";
import AddBrandsPage from "./AddBrandsPage";
import ConfirmationDialog from "./ConfirmationDialog";
import EditBrandsPage from "./EditBrandsPage";

interface Brands {
  id: string;
  brand_name: string;
  brand_image_url: string;
}

export default function BrandsPage() {
  //pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [query, setQuery] = useState<string>("");

  //add brand modal state
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  //brand confirmation modal state
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);
  //brand edit modal state
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  //modal close function
  const handleModalClose = () => {
    //close modal for create
    setModalOpen(false);
    //close modal for delete
    confirmationModalOpen && setConfirmationModalOpen(false);
    //close modal for edit
    editModalOpen && setEditModalOpen(false);
  };

  //seleccted brand id
  const selectedBrandId = useRef<string>("");
  //selected brand name
  const selectedBrandName = useRef<string>("");

  //fetch brands api
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["brands", currentPage, pageSize, query],
    queryFn: () => getAllBrands(currentPage, pageSize, query),
  });

  //error fetch
  if (error) return <div>{error.message}</div>;

  //total pages for pagination
  const totalPaginationPages = data?.pagination.totalPages;

  // Handle pagination and page size changes
  const onPageChange = (
    action: "next" | "previous" | "pageSize",
    value?: number
  ) => {
    if (action === "next") {
      setCurrentPage((prevPage) =>
        Math.min(prevPage + 1, totalPaginationPages)
      );
    } else if (action === "previous") {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    } else if (action === "pageSize" && value !== undefined) {
      setPageSize(value);
      setCurrentPage(1);
    }
  };

  //table search
  const querySearch = (query: string) => {
    setQuery(query);
  };

  //table colums
  const tableHeaderColumn = [
    {
      id: 1,
      column: "Brand Name",
    },
    {
      id: 2,
      column: "Brand Image",
    },
  ];

  return (
    <div className="max-w-full mx-auto p-2">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-6">
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            querySearch(event.target.value)
          }
          type="text"
          className="px-4 py-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
          placeholder="Search"
        />
        <button
          onClick={() => setModalOpen(true)}
          className="bg-primary w-full sm:w-1/2 md:w-1/4 lg:w-40 text-white px-5 py-2.5 rounded-md shadow-md hover:bg-primary/95 transition"
        >
          + Add Brand
        </button>
      </header>

      {/* Main Section */}
      <main className="bg-white p-6 rounded-md shadow-sm">
        <h2 className="text-xl font-semibold text-textdark2 mb-4">Brands</h2>
        {/* Table Container */}
        {isLoading ? (
          <div className="flex justify-center items-center mx-auto w-full h-3/6">
            <FaSpinner size={20} className="animate-spin" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-md overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-textdark2">
                  {/* <th className="px-6 py-3 text-left text-base font-semibold">
                    Name
                  </th> */}
                  {tableHeaderColumn.map(
                    (tableHeaderData: { column: string; id: number }) => (
                      <th
                        className="px-6 py-3 text-left text-base font-semibold"
                        key={tableHeaderData.id}
                      >
                        {tableHeaderData.column}
                      </th>
                    )
                  )}
                  <th className="px-6 py-3 text-right text-base font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((brandData: Brands) => (
                  <tr key={brandData.id} className="border-t bg-gray-50">
                    <td className="px-6 py-4 text-sm text-textdark4">
                      {brandData.brand_name}
                    </td>
                    <td className="px-6 py-4 text-sm text-textdark4 line-clamp-1 hover:text-primary">
                      <Link target="_blank" href={brandData.brand_image_url}>
                        {brandData.brand_image_url}
                      </Link>
                    </td>
                    {/* action buttons */}
                    <td className="px-6 py-4 text-right">
                      {/* edit button */}
                      <button
                        //edit modal open true
                        onClick={() => {
                          setEditModalOpen(true);
                          selectedBrandName.current = brandData.brand_name;
                          selectedBrandId.current = brandData.id;
                        }}
                        className="text-primary font-medium transition mr-4"
                      >
                        <PiPencilSimpleLineDuotone size={22} />
                      </button>
                      {/* delete button */}
                      <button
                        onClick={() => {
                          //save brand id to state
                          selectedBrandId.current = brandData.id;
                          setConfirmationModalOpen(true);
                        }}
                        className="text-red-600 hover:text-red-800 font-medium transition"
                      >
                        <BiTrash size={22} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      {/* Pagination */}
      <PaginationComponent
        data={data}
        onPageChange={onPageChange}
        currentPage={currentPage}
      />

      {/* Add brand modal */}
      <AddBrandsPage isModalOpen={modalOpen} onClose={handleModalClose} />

      {/* Brand delete confirmation modal */}
      <ConfirmationDialog
        isModalOpen={confirmationModalOpen}
        onClose={handleModalClose}
        brandId={selectedBrandId.current}
      />

      {/* Brand edit modal */}
      <EditBrandsPage
        isEditModalOpen={editModalOpen}
        onClose={handleModalClose}
        brandId={selectedBrandId.current}
        brandName={selectedBrandName.current}
      />
    </div>
  );
}
