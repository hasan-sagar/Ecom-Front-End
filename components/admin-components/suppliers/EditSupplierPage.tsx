"use client";
import { getSupplier, updateSupplier } from "@/services/supplier-api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

export default function EditSuppliersPage() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const supplierId = params.id;

  // Initialize form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    company: "",
    address: "",
  });

  //get supplier api
  const { data, isLoading, error } = useQuery({
    queryKey: ["suppliers", supplierId],
    queryFn: () => getSupplier(supplierId),
  });

  if (error) "Error fetching supplier";

  useEffect(() => {
    if (data) {
      setFormData({
        name: data?.data.supplier_name,
        email: data?.data.supplier_email,
        phone: data?.data.supplier_phone_number,
        country: data?.data.supplier_country,
        city: data?.data.supplier_city,
        company: data?.data.supplier_company_name,
        address: data?.data.supplier_address,
      });
    }
  }, [data]);

  //update supplier api
  const updateSupplierMutation = useMutation({
    mutationFn: async () => {
      return await updateSupplier(supplierId, {
        supplier_name: formData.name,
        supplier_email: formData.email,
        supplier_phone_number: formData.phone,
        supplier_country: formData.country,
        supplier_city: formData.city,
        supplier_company_name: formData.company,
        supplier_address: formData.address,
      });
    },
    onSuccess: (data) => {
      toast.success(data.message);
      return router.push("/admin/suppliers");
    },
    onError: (error: any) => {
      if (axios.isAxiosError(error)) {
        toast.error(`${error.response?.data.message}`);
      } else {
        toast.error(`${error.message}`);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["suppliers"],
      });
    },
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSupplierMutation.mutate();
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center mx-auto w-full h-3/6">
          <FaSpinner size={20} className="animate-spin" />
        </div>
      ) : (
        <div className="max-w-full mx-auto p-4 bg-white rounded-lg">
          <div className="p-4 rounded-lg">
            <h4 className="text-2xl font-semibold text-textdark2 mb-6">
              Edit Supplier
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Supplier Name */}
                <div className="mb-4 col-span-2 sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name<span className="text-red-500 text-xl">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    type="text"
                    placeholder="Enter supplier name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                {/* Supplier Email Address */}
                <div className="mb-4 col-span-2 sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address<span className="text-red-500 text-xl">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    type="email"
                    placeholder="Enter supplier email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                {/* Supplier Phone Number */}
                <div className="mb-4 col-span-2 sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number<span className="text-red-500 text-xl">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    type="text"
                    placeholder="Enter supplier phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                {/* Supplier Country */}
                <div className="mb-4 col-span-2 sm:col-span-1">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter supplier country"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                {/* Supplier City */}
                <div className="mb-4 col-span-2 sm:col-span-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    City<span className="text-red-500 text-xl">*</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    type="text"
                    placeholder="Enter supplier city"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                {/* Supplier Company Name */}
                <div className="mb-4 col-span-2 sm:col-span-1">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name<span className="text-red-500 text-xl">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    type="text"
                    placeholder="Enter supplier company name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                {/* Supplier Address */}
                <div className="mb-4 col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Address<span className="text-red-500 text-xl">*</span>
                  </label>
                  <input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    type="text"
                    placeholder="Enter supplier address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-end space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => router.push("/admin/suppliers")}
                  type="button"
                  className="w-full sm:w-auto px-7 py-3 text-sm font-medium text-white bg-red-500 border rounded-md transition-colors"
                >
                  Cancel
                </button>

                {updateSupplierMutation.isPending ? (
                  <button className="w-full sm:w-auto px-7 py-3 text-sm font-medium  bg-transparent border-none rounded-md transition-colors">
                    <FaSpinner size={20} className="animate-spin" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 text-sm font-medium text-white bg-primary border rounded-md transition-colors"
                  >
                    Update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
