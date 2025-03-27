"use client";
import Header from "@/components/ui/admin-panel/Header";
import Sidebar from "@/components/ui/admin-panel/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { data: session, status } = useSession() as any;

  useEffect(() => {
    if (status === "loading") return;

    const role = session?.user?.role;
    if (role !== "admin") {
      router.push("/");
      return;
    }
  }, [session, status, router]);

  // Show loading state or nothing while checking authentication
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden ml-0 md:ml-64">
        {/* Header */}
        <Header />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
