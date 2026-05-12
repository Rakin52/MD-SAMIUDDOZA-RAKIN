import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I was unemployed for 2 years after graduation. After Daksho's Python course, I landed a data analyst job in 3 months. The Bangla explanation made tech so accessible.",
    author: "Rakibul Hasan",
    role: "Data Analyst, Dhaka",
    earning: "Generating ৳45,000/mo"
  },
  {
    quote: "Global platforms charge in USD and felt out of reach. Daksho gave me top-tier quality in my language at a price I could pay with bKash. This is exactly what we needed.",
    author: "Nusrat Jahan",
    role: "Freelancer, Chattogram",
    earning: "Earning $600/mo globally"
  },
  {
    quote: "The freelancing course was world-class. Step by step from profile creation to first client. Within 6 weeks I had my first major order from overseas.",
    author: "Tanvir Ahmed",
    role: "Graphic Designer",
    earning: "$1,200/mo and growing"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-brand-green font-bold tracking-[0.2em] text-xs uppercase mb-4 text-center">
            STUDENT STORIES
        </div>
        <h2 className="text-white font-syne font-extrabold text-4xl md:text-5xl text-center mb-16">
          Real People, Real Jobs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-card border border-brand-border rounded-3xl p-8 hover:border-brand-green/20 transition-all"
            >
              <Quote className="text-brand-green mb-6" size={24} />
              <p className="text-brand-text italic leading-relaxed mb-8 text-lg">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-dark-3 border border-brand-border flex items-center justify-center text-xl">
                  {i === 0 ? '👨' : i === 1 ? '👩' : '🧑'}
                </div>
                <div>
                  <div className="text-white font-bold text-sm tracking-tight">{t.author}</div>
                  <div className="text-brand-muted text-[10px] uppercase font-bold tracking-widest">{t.role}</div>
                  <div className="text-brand-green font-bold text-xs mt-1">{t.earning}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
