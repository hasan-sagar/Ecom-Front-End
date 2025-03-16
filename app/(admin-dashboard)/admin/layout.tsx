"use client";
import DashboardLayout from "@/components/layout/dashboardLayout/DashboardLayout";
import React from "react";
import NextAuthSessionProvider from "@/components/providers/NextAuthSessionProvider";

interface SimpleLayoutProps {
  children: React.ReactNode;
}

export default function SimpleLayout({ children }: SimpleLayoutProps) {
  return (
    <React.Fragment>
      {/* <NextAuthSessionProvider> */}
      <DashboardLayout>{children}</DashboardLayout>
      {/* </NextAuthSessionProvider> */}
    </React.Fragment>
  );
}
