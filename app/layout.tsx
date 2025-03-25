import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import NextAuthSessionProvider from "@/components/providers/NextAuthSessionProvider";
import { Toaster } from "react-hot-toast";
import TanstackProvider from "@/components/providers/TanstackQueryProvider";

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
        <TanstackProvider>
          <NextAuthSessionProvider>
            <Toaster />
            {children}
          </NextAuthSessionProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
