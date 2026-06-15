import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Student Productivity Survey",
      status: "Completed",
      problem: "Students feel constantly busy but often struggle to quantify where their time actually goes.",
      approach: "Designed a multi-variable survey targeting 200+ peers, cleaning the raw data using Python (Pandas).",
      lessons: "Learned that poorly phrased questions create biased data. Data is only as objective as the human designing the collection method."
    },
    {
      title: "Educational Analytics Dashboard",
      status: "In Progress",
      problem: "Teachers lack immediate, visual feedback on which topics students struggle with most during a given week.",
      approach: "Building a lightweight Next.js dashboard that pulls anonymized quiz data and visualizes it using Recharts.",
      lessons: "Understanding user workflow is more important than writing complex algorithms."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header>
        <h1 className="font-heading text-4xl font-bold">Projects & Experiments</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          A collection of surveys, data visualizations, and small applications I've built to understand the world a little better.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col h-full hover:shadow-lg transition-shadow bg-white dark:bg-[#0f0f0f]">
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-heading text-xl font-semibold">{proj.title}</h2>
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full font-medium text-gray-600 dark:text-gray-300">
                {proj.status}
              </span>
            </div>
            
            <div className="space-y-4 flex-grow text-sm text-gray-600 dark:text-gray-400">
              <div>
                <strong className="block text-black dark:text-white mb-1">The Problem</strong>
                <p>{proj.problem}</p>
              </div>
              <div>
                <strong className="block text-black dark:text-white mb-1">My Approach</strong>
                <p>{proj.approach}</p>
              </div>
              <div>
                <strong className="block text-black dark:text-white mb-1">Lessons Learned</strong>
                <p>{proj.lessons}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
