import { Check, X } from "lucide-react";

const features = [
  { name: "Language", global: "English only", local: "Mixed", ours: "Full Bangla ✓" },
  { name: "Monthly Price", global: "USD (৳12,000+)", local: "৳1,000 - 5,000", ours: "৳499/mo ✓" },
  { name: "Job-Ready Tech Skills", global: "Yes", local: "Limited", ours: "Career-Focused ✓" },
  { name: "Freelancing Guides", global: "No", local: "No", ours: "15+ Specialist Courses ✓" },
  { name: "Project Portfolios", global: "Yes", local: "Rarely", ours: "Every Course ✓" },
  { name: "Pay in BDT (Mobile)", global: "No", local: "Yes", ours: "bKash / Nagad ✓" }
];

export default function Comparison() {
  return (
    <section id="compare" className="py-24 px-5 max-w-7xl mx-auto">
      <div className="text-brand-green font-bold tracking-[0.2em] text-xs uppercase mb-4 text-center md:text-left">
        COMPARISON
      </div>
      <h2 className="text-white font-syne font-extrabold text-4xl md:text-5xl leading-tight mb-6 text-center md:text-left">
        Why Daksho Wins
      </h2>
      <p className="text-brand-muted text-lg max-w-xl mb-16 text-center md:text-left">
        The first platform that puts Bangladeshi youth first — in language, price, and purpose.
      </p>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[800px] bg-brand-card border border-brand-border rounded-3xl overflow-hidden">
          <div className="grid grid-cols-4 bg-brand-dark-3 border-b border-brand-border">
            <div className="p-6 text-xs font-bold text-brand-muted uppercase tracking-widest">Feature</div>
            <div className="p-6 text-xs font-bold text-brand-muted uppercase tracking-widest text-center">Global Platforms</div>
            <div className="p-6 text-xs font-bold text-brand-muted uppercase tracking-widest text-center">Old EdTech Schools</div>
            <div className="p-6 text-xs font-bold text-brand-green uppercase tracking-[0.2em] text-center bg-brand-green/5">Daksho</div>
          </div>

          {features.map((f, i) => (
            <div key={i} className="grid grid-cols-4 border-b border-brand-border last:border-0 hover:bg-white/[0.02] transition-colors">
              <div className="p-6 text-sm font-medium text-white flex items-center">{f.name}</div>
              <div className="p-6 text-sm text-brand-muted text-center flex items-center justify-center">
                {f.global.includes('✗') ? <X size={16} className="text-brand-red" /> : f.global}
              </div>
              <div className="p-6 text-sm text-brand-muted text-center flex items-center justify-center">
                {f.local}
              </div>
              <div className="p-6 text-sm font-bold text-brand-green bg-brand-green/5 text-center flex items-center justify-center">
                {f.ours}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
