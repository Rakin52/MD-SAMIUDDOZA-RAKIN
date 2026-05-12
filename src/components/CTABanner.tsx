import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <div className="px-5 pb-24">
      <motion.section
        id="cta"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[48px] overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-brand-green/5 border border-brand-green/30" />

        <div className="relative px-6 py-20 text-center flex flex-col items-center">
            <span className="font-bengali text-xl text-brand-green font-bold mb-4">
               আজই শুরু করুন — বিনামূল্যে
            </span>
            <h2 className="text-white font-syne font-extrabold text-4xl md:text-6xl mb-6 tracking-tighter leading-none">
              Your Career Starts Today.<br />Not Someday.
            </h2>
            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mb-12 font-medium">
              Join 10,000+ Bangladeshi students building real skills, real portfolios, and real incomes — in their own language.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-brand-green text-brand-dark px-10 py-5 rounded-full font-black text-xl flex items-center gap-2 hover:bg-brand-green-soft shadow-2xl shadow-brand-green/20"
              >
                🚀 Start Free Today <ArrowRight />
              </motion.a>
              <a href="#courses" className="text-white border border-brand-border/60 backdrop-blur-md px-10 py-5 rounded-full font-bold text-xl hover:bg-white/5 transition-all">
                Browse Courses
              </a>
            </div>

            <p className="mt-8 text-xs font-bold text-brand-muted uppercase tracking-[0.2em]">
              No card required • Pay with bKash/Nagad later
            </p>
        </div>
      </motion.section>
    </div>
  );
}
