export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 pb-0 pt-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-display font-bold text-primary">
            2026 Jerry (Azhagirishankar K)
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-secondary/40">
            Full Stack Developer - Based in India
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:items-end">
          <p className="text-xs text-text-secondary font-light">
            Built with <span className="text-primary font-medium">React</span> - <span className="text-primary font-medium">GSAP</span> - <span className="text-primary font-medium">Tailwind CSS</span>
          </p>
          <p className="text-[10px] uppercase tracking-widest text-text-secondary/30 font-bold">
            Actively maintained portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
