"use client";
import { useState } from "react";
import { MdMenuOpen, MdKeyboardArrowDown } from "react-icons/md";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBoxOpen, FaTag, FaUsers } from "react-icons/fa";

const menuItems = [
  { icon: FaHome, label: "Dashboard", href: "/admin/dashboard" },

  {
    icon: FaBoxOpen,
    label: "Products",
    href: "#",
    subItems: [
      { label: "Products", href: "/admin/products" },
      { label: "Add Product", href: "/admin/products/add" },
      { label: "Brands", href: "/admin/brands" },
      { label: "Category", href: "/admin/category" },
    ],
  },
  {
    icon: FaUsers,
    label: "Users",
    href: "#",
    subItems: [
      { label: "Customers", href: "/admin/customers" },
      { label: "Suppliers", href: "/admin/suppliers" },
      { label: "Add Supplier", href: "/admin/suppliers/add" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenuToggle = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  return (
    <>
      {/* Responsive Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-3 left-4 z-50 p-2 bg-secondary text-white rounded-full shadow-md transition-colors duration-200"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle Sidebar"
      >
        <MdMenuOpen size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-white text-textdark3 w-64 h-screen fixed top-0 left-0 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40 border-r shadow-sm`}
      >
        <div className="p-4 border-b">
          <h1 className="text-lg text-primary font-semibold uppercase text-start ml-4">
            Admin Panel
          </h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <div>
                    <button
                      onClick={() =>
                        item.subItems && handleSubMenuToggle(item.label)
                      }
                      className={`flex items-center justify-between w-full space-x-3 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors font-medium ${
                        isActive ? "bg-blue-50 text-primary" : "text-textdark3"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="text-sm" />
                        <Link href={item.href}>
                          <span className="text-sm">{item.label}</span>
                        </Link>
                      </div>
                      {item.subItems && (
                        <MdKeyboardArrowDown
                          className={`text-base transition-transform duration-200 ${
                            openSubMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                    {item.subItems && openSubMenu === item.label && (
                      <ul className="pl-6 mt-2 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors ${
                                pathname === subItem.href
                                  ? "bg-blue-50 text-primary"
                                  : "text-textdark3"
                              }`}
                            >
                              <span className="text-sm">{subItem.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
