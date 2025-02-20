import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Ecom Exute Shop",
  description: "Edited by khalid vai and pritom vai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <AppLayout /> */}
        {children}
      </body>
    </html>
  );
}
