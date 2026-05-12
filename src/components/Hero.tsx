import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-40 pb-20 px-5 flex flex-col justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(0,200,83,0.07)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_80%,rgba(0,200,83,0.04)_0%,transparent_60%)]" />
      </div>

      {/* Grid mask */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
           style={{
             backgroundImage: `linear-gradient(var(--color-brand-green) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-green) 1px, transparent 1px)`,
             backgroundSize: '60px 60px',
             maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)'
           }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-green tracking-wide mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          The First EdTech That Truly Cares About Bangladeshi Youth
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-syne font-extrabold text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.05] tracking-tighter mb-6"
        >
          বাংলাদেশের<br />
          <span className="relative inline-block text-brand-green">
            First EdTech 2.0
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-green rounded-full origin-left"
            />
          </span><br />
          Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-xl mb-10"
        >
          The first platform built with Bangladeshi youth at heart. <strong className="text-brand-green font-semibold">Real skills. Real prices.</strong><br />
          Data, tech, design, freelancing & business — taught in Bangla, paid in BDT.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 items-center mb-6"
        >
          <motion.a
            whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(0,200,83,0.3)" }}
            href="#courses"
            className="bg-brand-green text-brand-dark px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-brand-green-soft transition-colors"
          >
            🚀 Browse Free Courses
          </motion.a>
          <motion.a
             whileHover={{ backgroundColor: "var(--color-brand-dark-3)" }}
             href="#compare"
             className="text-white border border-brand-border px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all"
          >
            See Why We're Different
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3 text-sm text-brand-muted mb-12"
        >
          <span>Because we care —</span>
          <span className="text-brand-green font-bold text-base">৳499/month</span>
          <span>or</span>
          <span className="text-brand-green font-bold text-base">৳5,500/year</span>
          <span>Full access. No USD ever.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-brand-border w-full"
        >
          {[
            { num: "50+", label: "Job-Ready Courses" },
            { num: "৳499", label: "Full Access / Month" },
            { num: "100%", label: "Bangla-First Content" },
            { num: "10K+", label: "Students Enrolled" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-syne font-extrabold text-3xl text-white">
                {stat.num.replace('+', '')}<span className="text-brand-green">{stat.num.includes('+') ? '+' : stat.num.includes('%') ? '' : ''}</span>{stat.num.includes('%') && <span className="text-brand-green">%</span>}
              </div>
              <div className="text-xs text-brand-muted uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
