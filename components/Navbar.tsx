"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/now", label: "Now" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md z-40 border-b border-gray-100 dark:border-gray-900">
      <nav className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-semibold text-lg tracking-tight">
          Portfolio.
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[1px] w-full bg-black dark:bg-white"
                />
              )}
            </Link>
          ))}
          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
