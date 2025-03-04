"use client";
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Responsive Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle Sidebar"
      >
        <MdMenuOpen size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 h-screen fixed top-0 left-0 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40`}
      >
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Exute Shop Admin</h2>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Home</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Analytics</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
