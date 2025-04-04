"use client";
import { createCategory } from "@/services/category-api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";

export default function AddCategoryPage({
  isModalOpen,
  onClose,
}: {
  isModalOpen: boolean;
  onClose: () => void;
}) {
  // Category name state
  const [categoryName, setCategoryName] = useState<string>("");
  const [selectFile, setSelectFile] = useState<File | null>(null);

  // Image conversion to base64
  const convertImageToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Create category API mutation
  const createCategoryMutation = useMutation({
    mutationFn: async ({
      category_name,
      category_image_url,
    }: {
      category_name: string;
      category_image_url: string;
    }) => {
      return await createCategory(category_name, category_image_url);
    },
    onSuccess: (data) => {
      onClose();
      toast.success(data.message);
      return;
    },
    onError: (error: any) => {
      if (axios.isAxiosError(error)) {
        toast.error(`${error.response?.data.message}`);
      } else {
        toast.error(`${error.message}`);
      }
    },
  });

  // Submit category data
  const handleSubmitCategory = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validate file selection
    if (!selectFile) {
      return toast.error("Image required");
    }

    // Convert image to base64
    const formatImage = await convertImageToBase64(selectFile);

    // Call the mutation to create the category
    createCategoryMutation.mutate({
      category_name: categoryName,
      category_image_url: formatImage as string,
    });
  };

  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-md shadow-xl p-6 w-full max-w-md mx-auto flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Add Category</h2>
            <button onClick={onClose}>
              <IoIosClose size={30} />
            </button>
          </div>

          <form
            onSubmit={handleSubmitCategory}
            className="flex flex-col flex-grow space-y-7"
          >
            <input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCategoryName(event.target.value)
              }
              type="text"
              placeholder="Enter category name"
              required
              className="w-full px-3 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />

            <input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSelectFile(
                  event.target.files ? event.target.files[0] : null
                );
              }}
              accept="image/*"
              type="file"
              name="file"
              id="file"
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
                {createCategoryMutation.isPending ? (
                  <FaSpinner size={20} className="animate-spin" />
                ) : (
                  <>
                    <IoIosCheckmark size={25} />
                    Save
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
