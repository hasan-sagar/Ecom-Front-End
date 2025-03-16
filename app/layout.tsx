import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import NextAuthSessionProvider from "@/components/providers/NextAuthSessionProvider";

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
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
