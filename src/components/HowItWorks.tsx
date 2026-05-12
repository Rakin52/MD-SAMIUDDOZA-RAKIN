import { motion } from "motion/react";
import { Target, Library, Wrench, Briefcase } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <Target className="text-brand-green" size={32} />,
    title: "Pick Your Goal",
    desc: "Tell us what job you want. We'll build you a personalized learning path to get there."
  },
  {
    num: "02",
    icon: <Library className="text-brand-green" size={32} />,
    title: "Learn in Bangla",
    desc: "High-quality video lessons in Bangla. No language barrier. Just pure skill building."
  },
  {
    num: "03",
    icon: <Wrench className="text-brand-green" size={32} />,
    title: "Build Real Projects",
    desc: "Every course ends with a real project. Build a portfolio employers actually want to see."
  },
  {
    num: "04",
    icon: <Briefcase className="text-brand-green" size={32} />,
    title: "Get Hired or Freelance",
    desc: "Apply to jobs via our hiring network or start freelancing globally. We help both."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-brand-dark-2 py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-brand-green font-bold tracking-[0.2em] text-xs uppercase mb-4">
          HOW IT WORKS
        </div>
        <h2 className="text-white font-syne font-extrabold text-4xl md:text-5xl leading-[1.1] mb-16">
          From Zero to Employed<br />in 4 Steps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-card border border-brand-border rounded-3xl p-8 relative hover:border-brand-green/30 transition-colors group"
            >
              <div className="font-syne font-black text-6xl text-brand-green/10 absolute top-6 right-8 group-hover:text-brand-green/20 transition-colors">
                {step.num}
              </div>
              <div className="mb-6 relative z-10">
                {step.icon}
              </div>
              <h3 className="text-white font-syne font-bold text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
