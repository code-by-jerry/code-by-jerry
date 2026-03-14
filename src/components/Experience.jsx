export default function Experience() {
  const experiences = [
    {
      period: "Nov 2026 — Present",
      title: "Senior Web Developer · Atha Constructions",
      desc: "Solo full-stack lead architecting multiple production-grade platforms. Responsible for full project lifecycle: architecture, development, deployment, and maintenance of high-traffic corporate systems.",
      tech: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind", "Alpine.js"],
      achievements: [
        "Designed and launched production platforms: Atha Constructions, Nesthetix Design, and Area24One.",
        "Architected scalable React + Laravel systems using modern Inertia.js architecture.",
        "Optimized MySQL database structures for high-performance data retrieval."
      ]
    },
    {
      period: "2026 — Present",
      title: "Freelance Full Stack Developer",
      desc: "Developing scalable e-commerce and automotive solutions for diverse global clients, specializing in complex API integrations and real-time delivery systems.",
      tech: ["Laravel", "PHP", "React", "Firebase", "MySQL", "Inertia.js", "Shopify"],
      achievements: [
        "DestroSolutions: Built backend systems and admin dashboards for an SDV platform.",
        "FreshTick: Engineered a multi-role hybrid delivery platform with real-time Firebase tracking.",
        "Shopify: Optimized store performance and customized themes for Camiprod and Baybee Store."
      ]
    },
    {
      period: "Sept 2025 — Nov 2026",
      title: "Laravel Full Stack Developer · Appstronauts IT Solutions",
      desc: "Team lead for a group of 3 developers, focused on high-performance web applications and backend automation.",
      tech: ["Laravel", "MySQL", "Firestore", "JavaScript", "REST APIs"],
      achievements: [
        "Boosted application performance by 40% through deep Laravel/JS optimization.",
        "Reduced manual overhead by 50% via custom backend automation scripts.",
        "Led team code reviews and feature planning, improving maintainability by 25%."
      ]
    },
    {
      period: "Nov 2023 — Aug 2024",
      title: "Web Developer · Aaron Infotech",
      desc: "Developed responsive web applications and robust backend features in a high-deployment velocity environment.",
      tech: ["Laravel", "Livewire", "PHP", "Bootstrap", "MySQL"],
      achievements: [
        "Decreased page load times by 30% via asset and query optimization.",
        "Maintained a 98% bug-free production deployment rate across multiple sprints.",
        "Increased user engagement by 25% through strategic UI/UX and backend refinements."
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">Experience</h2>
      </div>

      <div className="flex flex-col gap-12 group/list">
        {experiences.map((exp, i) => (
          <div key={i} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 hover:!opacity-100 group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[16px] transition motion-reduce:transition-none lg:block lg:group-hover:bg-surface/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(229,231,235,0.4)] pointer-events-none"></div>
            
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-secondary sm:col-span-2">
              {exp.period}
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-primary group-hover:text-accent font-display text-lg mb-2 transition-colors">
                {exp.title}
              </h3>
              <p className="mt-2 text-sm leading-normal text-text-secondary font-light">
                {exp.desc}
              </p>
              
              <ul className="mt-4 flex flex-col gap-2 mb-4">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="text-xs leading-normal text-text-secondary flex gap-2">
                    <span className="text-accent">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {exp.tech.map((t, idx) => (
                  <li key={idx} className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold leading-5 text-accent">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
