import { motion } from "motion/react";

const problems = [
  { val: "৳12K+", desc: "What global giants charge per month — in expensive USD — for a student in Bangladesh." },
  { val: "2.6Cr", desc: "Unemployed youth in Bangladesh who find global learning platforms unaffordable." },
  { val: "0", desc: "Real job-skill platforms in Bangla covering advanced tech, data, and design." },
  { val: "73%", desc: "Of employers report that new graduates lack practical, job-ready digital skills." }
];

export default function ProblemSection() {
  return (
    <div className="bg-brand-red/5 border-y border-brand-red/15 py-16 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/4">
          <div className="font-syne font-bold text-brand-red tracking-widest uppercase text-sm mb-2">
            ❌ The Problem
          </div>
        </div>

        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-red/5 border border-brand-red/10 rounded-2xl p-6"
            >
              <div className="font-syne font-extrabold text-4xl text-brand-red mb-3 leading-none">
                {p.val}
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
