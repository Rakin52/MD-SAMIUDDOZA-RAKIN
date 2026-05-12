import { motion } from "motion/react";
import { Users, TrendingUp, Sparkles } from "lucide-react";

const courses = [
  {
    icon: "🐍",
    category: "Data & AI",
    title: "Python for Data Science & AI",
    desc: "From zero to job-ready. Real datasets, live projects, portfolio-ready skills.",
    price: "1,299",
    original: "8,000",
    students: "4,200",
    badge: "BESTSELLER",
    color: "from-[#0d2137] to-[#0a3d62]"
  },
  {
    icon: "💻",
    category: "Tech & Coding",
    title: "Full-Stack Web Development",
    desc: "HTML to React to backend. Build 5 real projects. Get hired as a developer.",
    price: "1,499",
    original: "10,000",
    students: "3,800",
    color: "from-[#1a1a2e] to-[#16213e]"
  },
  {
    icon: "💼",
    category: "Freelancing",
    title: "Global Freelancing Masterclass",
    desc: "Real strategies from top-rated freelancers. Start earning on Fiverr & Upwork.",
    price: "799",
    original: "5,000",
    students: "6,100",
    badge: "NEW",
    color: "from-[#1a2f1a] to-[#0d3b0d]"
  },
  {
    icon: "🎨",
    category: "Design & Creative",
    title: "UI/UX Design with Figma",
    desc: "Design real apps. Build a portfolio. Land design jobs locally and globally.",
    price: "999",
    original: "7,000",
    students: "2,900",
    color: "from-[#2a1a0e] to-[#3d2614]"
  },
  {
    icon: "📊",
    category: "Business & Finance",
    title: "Excel & Business Data Analysis",
    desc: "From basic formulas to advanced dashboards. Used in every corporate job.",
    price: "599",
    original: "4,500",
    students: "5,200",
    color: "from-[#0e1a2a] to-[#162a3d]"
  },
  {
    icon: "🤖",
    category: "AI Skills",
    title: "AI Tools for Work & Productivity",
    desc: "ChatGPT, Gemini, Automation. Get ahead of 90% of job applicants now.",
    price: "699",
    original: "5,500",
    students: "7,800",
    badge: "TRENDING",
    color: "from-[#1a0e2a] to-[#2a1640]"
  }
];

export default function CourseGrid() {
  return (
    <section id="courses" className="py-24 px-5 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-xl">
          <div className="text-brand-green font-bold tracking-[0.2em] text-xs uppercase mb-4">
            COURSE CATALOG
          </div>
          <h2 className="text-white font-syne font-extrabold text-4xl md:text-5xl leading-tight mb-6">
            Skills That Actually Pay
          </h2>
          <p className="text-brand-muted text-lg">
            Not textbook theory. Real tools, real projects, real portfolios — taught in Bangla.
          </p>
        </div>
        <motion.a
          whileHover={{ x: 5 }}
          href="#"
          className="text-white border border-brand-border px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-brand-dark-3 transition-colors"
        >
          View All 50+ Courses <TrendingUp size={18} />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="group bg-brand-card border border-brand-border rounded-3xl overflow-hidden cursor-pointer hover:border-brand-green/40 transition-all shadow-lg hover:shadow-brand-green/10"
          >
            <div className={`h-40 flex items-center justify-center text-5xl bg-gradient-to-br ${c.color} relative`}>
               {c.icon}
               {c.badge && (
                  <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">
                    {c.badge}
                  </div>
               )}
            </div>

            <div className="p-6">
              <div className="text-brand-green text-[10px] font-bold tracking-widest uppercase mb-2">
                {c.category}
              </div>
              <h3 className="text-white font-syne font-bold text-xl mb-2 group-hover:text-brand-green-soft transition-colors">
                {c.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                {c.desc}
              </p>

              <div className="pt-6 border-t border-brand-border flex items-center justify-between">
                <div>
                  <span className="text-brand-green font-bold text-xl">৳{c.price}</span>
                  <span className="text-brand-muted text-xs line-through ml-2">৳{c.original}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-brand-muted font-medium">
                  <Users size={14} className="text-brand-muted" /> {c.students} students
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
