export default function TechStack() {
  const categories = [
    {
      title: "Core Stack",
      tech: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS"]
    },
    {
      title: "Frontend",
      tech: ["JavaScript", "TypeScript", "Alpine.js", "GSAP", "Framer Motion", "Three.js"]
    },
    {
      title: "Backend",
      tech: ["PHP", "REST APIs", "Authentication", "Server Architecture"]
    },
    {
      title: "Infrastructure",
      tech: ["AWS", "Cloudflare", "Vercel", "Netlify", "Hostinger"]
    }
  ];

  return (
    <section id="tech" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">Tech Stack</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
        {categories.map((cat, i) => (
          <div key={i} className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/40 font-display">
              {cat.title}
            </h3>
            <ul className="flex flex-wrap gap-2" aria-label={`${cat.title} technologies`}>
              {cat.tech.map((t, idx) => (
                <li key={idx} className="tech-item flex items-center rounded-full bg-accent/5 border border-accent/10 px-3 py-1 text-xs font-semibold leading-5 text-accent shadow-sm">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
