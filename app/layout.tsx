import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Dùng font Inter của Google
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

// Khởi tạo font chữ
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio của tôi",
  description: "Trang web cá nhân của tôi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
