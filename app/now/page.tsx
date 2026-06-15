"use client";
import { motion } from "framer-motion";

export default function About() {
  const timeline = [
    { year: "2024", text: "Started exploring business and communication, realizing the importance of soft skills." },
    { year: "2025", text: "Became deeply interested in Data Science as a way to understand human behavior." },
    { year: "2026", text: "Building projects, running surveys, and writing my 'Building Things Before I Felt Ready' series." },
    { year: "Future", text: "Using technology and entrepreneurship to solve meaningful, human-centric problems." },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto space-y-16">
      <section>
        <h1 className="font-heading text-4xl font-bold mb-6">Who I Am</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          I am a student researcher, writer, and builder. I spend my time trying to understand the systems that govern our daily lives - whether that's analyzing how students manage time through data, or figuring out why some school projects feel exactly like failing startups.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold mb-8">My Journey</h2>
        <div className="space-y-8 border-l-2 border-gray-100 dark:border-gray-800 ml-3">
          {timeline.map((item, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute w-3 h-3 bg-navy-900 dark:bg-blue-400 rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-[#0a0a0a]" />
              <span className="text-sm font-bold text-navy-900 dark:text-blue-400">{item.year}</span>
              <p className="mt-1 text-gray-600 dark:text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
