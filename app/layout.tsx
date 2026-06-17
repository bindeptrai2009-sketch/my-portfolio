import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Bindeprai2009 Portfolio",
  description: "Minimalist Developer Portfolio and Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 container mx-auto px-4 md:px-6 py-8 md:py-12">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}