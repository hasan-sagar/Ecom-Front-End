import { Metadata } from "next";
import React from "react";

interface SimpleLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Ecom Exute Shop",
  description: "Edited by khalid vai and pritom vai",
};
export default function SimpleLayout({ children }: SimpleLayoutProps) {
  return <React.Fragment>{children}</React.Fragment>;
}
