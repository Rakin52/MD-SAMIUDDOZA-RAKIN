import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: "0",
    period: "/forever",
    desc: "Try before you buy. Access foundation courses completely free.",
    features: ["10 Foundation Courses", "Community Access", "Basic Certificates", "Mobile App Access"],
    cta: "Start Free",
    featured: false
  },
  {
    name: "PRO LEARNER",
    price: "499",
    period: "/month",
    desc: "The most popular choice for career growth. World-class learning for the price of snacks.",
    features: ["All 50+ Courses Unlocked", "New Courses Every Month", "Weekly Live Q&A", "Full Certificates", "Elite Job Board Access", "Portfolio Hosting"],
    cta: "Get Pro Access",
    featured: true,
    extra: "Or save big — ৳5,500/year (2 months free ✨)"
  },
  {
    name: "LIFETIME",
    price: "4,999",
    period: "/once",
    desc: "Best value for serious learners. Pay once, grow forever.",
    features: ["Everything in Pro", "Lifetime Updates", "1-on-1 Mentor Session", "Private Discord Support", "Job Placement Priority", "Premium Resume Review"],
    cta: "Go Lifetime",
    featured: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-brand-dark-2 py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-brand-green font-bold tracking-[0.2em] text-xs uppercase mb-4">
            PRICING
          </div>
          <h2 className="text-white font-syne font-extrabold text-4xl md:text-5xl mb-6">
            Priced With Love.<br />For the Youth.
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            The first platform that cares — starting at ৳499/month. Pay with bKash, Nagad, or Bank. No USD complications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`relative bg-brand-card border overflow-hidden rounded-[32px] p-8 flex flex-col ${p.featured ? 'border-brand-green shadow-[0_0_40px_rgba(0,200,83,0.1)]' : 'border-brand-border'}`}
            >
              {p.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-green text-brand-dark font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-b-xl">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="text-brand-muted font-bold text-xs tracking-widest uppercase mb-4">{p.name}</div>
                <div className="font-syne font-black text-5xl text-white mb-2">
                  <span className="text-brand-green text-3xl">৳</span>{p.price}<span className="text-brand-muted text-sm font-medium">{p.period}</span>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed">{p.desc}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-brand-text">
                    <Check className="text-brand-green shrink-0 mt-0.5" size={16} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  className={`block text-center py-4 rounded-full font-bold text-lg transition-all ${p.featured ? 'bg-brand-green text-brand-dark hover:bg-brand-green-soft' : 'border border-brand-border text-white hover:bg-brand-dark-3'}`}
                >
                  {p.cta}
                </motion.a>
                {p.extra && (
                   <p className="text-center mt-4 text-xs font-semibold text-brand-green">{p.extra}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
