import DashboardLayout from "@/components/layout/dashboardLayout/DashboardLayout";
import { Metadata } from "next";
import React from "react";

interface SimpleLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Ecom Shop Admin Panel",
  description: "Ecom Shop Admin Panel",
};
export default function SimpleLayout({ children }: SimpleLayoutProps) {
  return (
    <React.Fragment>
      <DashboardLayout>{children}</DashboardLayout>
    </React.Fragment>
  );
}
