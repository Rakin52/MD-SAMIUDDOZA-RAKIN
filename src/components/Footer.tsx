export default function Footer() {
  return (
    <footer className="py-16 px-5 border-t border-brand-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div>
          <div className="font-syne font-extrabold text-2xl text-white tracking-tighter leading-none mb-2">
            দক্ষ<span className="text-brand-green">.</span>
          </div>
          <p className="text-brand-muted text-sm font-medium">
            Real Skills. Real Jobs. Bangladesh's EdTech 2.0
          </p>
        </div>

        <div className="flex gap-8 flex-wrap">
          <a href="#" className="text-sm font-bold text-brand-muted hover:text-white transition-colors">Courses</a>
          <a href="#" className="text-sm font-bold text-brand-muted hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-sm font-bold text-brand-muted hover:text-white transition-colors">For Teams</a>
          <a href="#" className="text-sm font-bold text-brand-muted hover:text-white transition-colors">Blog</a>
          <a href="#" className="text-sm font-bold text-brand-muted hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-sm text-brand-muted font-medium">
          © {new Date().getFullYear()} Daksho. Made in Bangladesh with ❤️
        </div>
      </div>
    </footer>
  );
}
