import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

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
        <NextTopLoader showSpinner={false} color="#3C50E0" height={4} />
        {children}
      </body>
    </html>
  );
}
