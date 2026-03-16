export default function Footer() {
  return (
    <footer className="w-full py-16 mt-24 border-t border-border/40">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-display font-bold text-primary">
            © 2026 Jerry (Azhagirishankar K)
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-secondary/40">
            Full Stack Developer · Based in India
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-xs text-text-secondary font-light">
            Built with <span className="text-primary font-medium">React</span> · <span className="text-primary font-medium">GSAP</span> · <span className="text-primary font-medium">Tailwind CSS</span>
          </p>
          <p className="text-[10px] uppercase tracking-widest text-text-secondary/30 font-bold">
            Actively maintained portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
