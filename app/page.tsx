"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-24">
      {/* Hero Section */}
      <section className="mt-12 md:mt-24">
        <motion.h1 variants={item} className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-navy-900 dark:text-gray-100 leading-tight max-w-3xl">
          Curiosity, Data, <br className="hidden md:block"/> and Building Things.
        </motion.h1>
        <motion.p variants={item} className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          I believe meaningful innovation begins with understanding people. Through data, writing, and small entrepreneurial experiments, I explore how ideas become impact.
        </motion.p>
        <motion.div variants={item} className="mt-10 flex items-center gap-4">
          <Link href="/blog" className="px-6 py-3 bg-navy-900 text-white rounded-lg font-medium hover:bg-navy-800 transition flex items-center gap-2">
            Read My Blog <ArrowRight size={16} />
          </Link>
          <Link href="/projects" className="px-6 py-3 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition">
            View Projects
          </Link>
        </motion.div>
      </section>

      {/* Featured Blog Section Placeholder */}
      <motion.section variants={item}>
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4 mb-8">
          <h2 className="font-heading text-2xl font-semibold">Latest Writing</h2>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">View all →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group cursor-pointer">
            <p className="text-sm text-gray-500 mb-2">Data Science • 5 min read</p>
            <h3 className="font-heading text-xl font-medium group-hover:underline decoration-navy-900 underline-offset-4">The Month I Realized Motivation Was a Terrible Strategy</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm line-clamp-3">For a long time I thought motivation was the key to getting things done. Whenever I fell behind...</p>
          </div>
          {/* Add more cards dynamically */}
        </div>
      </motion.section>
    </motion.div>
  );
}
