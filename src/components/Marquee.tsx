import { motion } from "motion/react";

const items = [
  "Python for Data Science",
  "Freelancing on Global Platforms",
  "React & Next.js",
  "Digital Marketing",
  "AI & Gemini Skills",
  "Business English",
  "UI/UX Design",
  "Excel & Data Analysis",
  "Web Development",
  "Video Editing"
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-brand-border bg-brand-dark-2 py-6 relative">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear"
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-semibold text-brand-muted uppercase tracking-wider">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
