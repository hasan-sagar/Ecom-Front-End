"use client";
import { updateBrand } from "@/services/brand-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";

export default function EditBrandsPage({
  isEditModalOpen,
  onClose,
  brandName,
  brandId,
}: {
  isEditModalOpen: boolean;
  onClose: () => void;
  brandName: string;
  brandId: string;
}) {
  const queryClient = useQueryClient();

  //edit brand name
  const [editBrandName, setEditBrandName] = useState<string>(brandName);

  useEffect(() => {
    setEditBrandName(brandName);
  }, [brandName]);

  //update brand api
  const updateBrandMutation = useMutation({
    mutationFn: async () => {
      return await updateBrand(brandId, editBrandName);
    },
    onSuccess: (data) => {
      onClose();
      toast.success(data.message);
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
        queryKey: ["brands"],
      });
    },
  });

  return (
    isEditModalOpen && (
      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-md shadow-xl p-6 w-full max-w-md mx-auto flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Update Brand</h2>
            <button onClick={onClose}>
              <IoIosClose size={30} />
            </button>
          </div>

          <form
            onSubmit={(event: React.FormEvent) => {
              event.preventDefault();
              updateBrandMutation.mutate();
            }}
            className="flex flex-col flex-grow space-y-7"
          >
            <input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEditBrandName(event.target.value)
              }
              value={editBrandName}
              type="text"
              placeholder="Enter brand name"
              required
              className="w-full px-3 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />

            <div className="mt-auto flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-2">
              <button
                onClick={onClose}
                type="button"
                className="inline-flex w-full sm:w-auto px-3 py-2 text-red-500"
              >
                <IoIosClose size={25} />
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex w-full sm:w-auto px-3 py-2 text-primary"
              >
                {updateBrandMutation.isPending ? (
                  <FaSpinner size={20} className="animate-spin" />
                ) : (
                  <>
                    <IoIosCheckmark size={25} />
                    Update
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
