import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

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
      <body className="max-w-3xl mx-auto p-8 antialiased bg-background text-foreground">
  {/* Các component khác như <SiteHeader /> hay {children} */}
</body>
    </html>
  );
}