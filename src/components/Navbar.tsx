import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-5 py-4 bg-brand-dark/85 backdrop-blur-xl border-b border-brand-border flex items-center justify-between">
      <div className="flex flex-col">
        <div className="font-syne font-extrabold text-2xl text-white tracking-tighter leading-none">
          দক্ষ<span className="text-brand-green">.</span>
        </div>
        <span className="font-bengali text-[10px] text-brand-muted tracking-wider mt-0.5">
          DAKSHO — REAL SKILLS PLATFORM
        </span>
      </div>

      <ul className="hidden md:flex items-center gap-8">
        <li>
          <a href="#courses" className="text-sm font-medium text-brand-muted hover:text-white transition-colors">
            Courses
          </a>
        </li>
        <li>
          <a href="#pricing" className="text-sm font-medium text-brand-muted hover:text-white transition-colors">
            Pricing
          </a>
        </li>
        <li>
          <a href="#compare" className="text-sm font-medium text-brand-muted hover:text-white transition-colors">
            Why Daksho
          </a>
        </li>
        <li>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#cta"
            className="bg-brand-green text-brand-dark px-5 py-2 rounded-full font-bold text-sm transition-colors hover:bg-brand-green-soft flex items-center gap-2"
          >
            Start Free <Sparkles size={16} />
          </motion.a>
        </li>
      </ul>

      <div className="md:hidden">
         {/* Simple mobile menu trigger could go here if needed */}
         <a href="#cta" className="bg-brand-green text-brand-dark px-4 py-2 rounded-full font-bold text-xs uppercase">
            Start Free
         </a>
      </div>
    </nav>
  );
}
