"use client";
import { motion, useScroll } from "framer-motion";

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-navy-900 dark:bg-blue-400 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
