"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaTrash } from "react-icons/fa";

export default function ModernProductForm() {
  const [featured, setFeatured] = useState(false);
  const [newArrival, setNewArrival] = useState(false);

  // forms data
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    categoryId: "",
    brandId: "",
    supplierId: "",
    slug: "",
    stock: "",
    price: "",
    salePrice: "",
    shippingCost: "",
    discount: "",
    status: "ACTIVE",
  });

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // Handle input change
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle image input
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  // Delete image preview
  const deleteImage = (index: number) => {
    const updatedFiles = selectedImages.filter((_, i) => i !== index);
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
    setSelectedImages(updatedFiles);
    setImagePreviews(updatedPreviews);
  };

  // Image conversion to base64
  const convertImageToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const base64Images = await Promise.all(
        selectedImages.map((file) => convertImageToBase64(file))
      );

      const fullData = {
        ...formData,
        featured,
        newArrival,
        images: base64Images,
      };

      console.log("Submitting Product:", fullData);
    } catch (error) {
      console.error("Image conversion failed", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full mx-auto bg-white shadow border"
    >
      <h4 className="text-base font-semibold bg-primary p-4 text-white rounded-t-lg">
        Create Product
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Write product description..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["categoryId", "brandId", "supplierId"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1">
                  {field.replace("Id", " ID")}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border shadow-sm rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border shadow-sm rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-medium mb-1">Images</label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-100 file:text-primary hover:file:bg-blue-200"
            />
            <div className="flex gap-4 mt-4 flex-wrap">
              {imagePreviews.map((src, i) => (
                <div
                  key={i}
                  className="relative group w-24 h-24 rounded overflow-hidden border"
                >
                  <img
                    src={src}
                    alt={`Preview ${i}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => deleteImage(i)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full p-2 hidden group-hover:block"
                  >
                    <FaTrash className="text-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {[
            { label: "Stock", name: "stock" },
            { label: "Price", name: "price" },
            { label: "Sale Price", name: "salePrice" },
            { label: "Shipping Cost", name: "shippingCost" },
            { label: "Discount (%)", name: "discount" },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              <input
                type="number"
                step="0.01"
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 shadow-sm rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          ))}

          {/* Toggles */}
          {[
            { label: "Featured Product", value: featured, setter: setFeatured },
            { label: "New Arrival", value: newArrival, setter: setNewArrival },
          ].map(({ label, value, setter }) => (
            <div
              key={label}
              className="flex items-center justify-between border px-3 py-2 shadow-sm bg-white"
            >
              <label className="text-sm font-medium">{label}</label>
              <button
                type="button"
                onClick={() => setter(!value)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                  value ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow transform duration-300 ${
                    value ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          ))}

          {/* Status Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 shadow-sm focus:outline-none focus:ring"
            >
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
              <option value="ARCHIVED">Archived</option>
            </select>
          </div>
        </div>
      </div>

      <div className="text-right p-8">
        <button
          type="submit"
          className="bg-primary text-white px-7 py-3 font-medium rounded-md"
        >
          Save Product
        </button>
      </div>
    </form>
  );
}
