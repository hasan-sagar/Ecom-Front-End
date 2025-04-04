"use client";
import { useRouter } from "next/navigation";

export default function SuppliersPage() {
  const router = useRouter();
  return (
    <div className="max-w-full mx-auto p-2">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-6">
        <input
          type="text"
          className="px-4 py-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
          placeholder="Search"
        />
        <button
          onClick={() => router.push("/admin/suppliers/create")}
          className="bg-primary w-full sm:w-1/2 md:w-1/4 lg:w-40 text-white px-5 py-2.5 rounded-md shadow-md hover:bg-primary/95 transition"
        >
          + Add Supplier
        </button>
      </header>
    </div>
  );
}
