export default function Experience() {
  const experiences = [
    {
      period: "Dec 2025 - Present",
      title: "Senior Full Stack Developer - Atha Constructions",
      stack: ["React.js", "Inertia.js", "Laravel", "PostgreSQL", "MySQL", "Firebase", "GCP"],
      desc: "Leading development of multiple production platforms including real estate and interior systems.",
      achievements: [
        "Architecting scalable full-stack applications using React and Laravel",
        "Owned end-to-end architecture and delivery of business-critical applications",
        "Managing complete lifecycle from design to deployment",
        "Optimizing database performance and application scalability"
      ]
    },
    {
      period: "Sep 2024 - Nov 2025",
      title: "Laravel Full Stack Developer - Appstronauts IT Solutions",
      stack: ["Laravel", "MySQL", "Firebase", "GCP", "React.js", "Alpine.js"],
      desc: "Worked on high-performance web applications and backend automation while leading a team of developers.",
      achievements: [
        "Improved application performance by 40% and user engagement by 30%",
        "Designed scalable database architectures reducing processing delays by 25%",
        "Automated backend operations reducing manual effort by 50%",
        "Led team of 3 developers in code reviews and feature planning",
        "Increased delivery speed by 15% through refactoring"
      ]
    },
    {
      period: "Nov 2023 - Aug 2024",
      title: "Web Developer - Aaron Infotech",
      stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "GSAP"],
      desc: "Developed responsive web applications and backend functionality for multiple client projects.",
      achievements: [
        "Reduced page load time by 30% through frontend optimization",
        "Developed backend modules using Laravel and Livewire",
        "Maintained 98% bug-free production deployments",
        "Improved user engagement by 25%"
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      <div className="sticky top-0 z-20 -mx-5 mb-5 w-screen border-y border-border/50 bg-background/92 px-5 py-4 backdrop-blur sm:-mx-6 sm:px-6 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:border-0 lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">Experience</h2>
      </div>

      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Experience</p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
          Built through ownership, client delivery, and team leadership.
        </h2>
      </div>

      <div className="flex flex-col gap-7 group/list">
        {experiences.map((exp, i) => (
          <div key={i} className="group relative transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-50">
            <div className={`grid items-start rounded-[2rem] border p-5 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-1 sm:grid-cols-12 sm:gap-8 ${
              i === 0
                ? 'border-transparent accent-gradient text-white hover:shadow-[0_28px_62px_-32px_rgba(99,102,241,0.58)]'
                : 'border-border/70 bg-background/88 hover:border-accent/25'
            }`}>
              <header className="z-10 mb-3 text-xs font-bold uppercase tracking-[0.14em] text-accent/70 sm:col-span-3 sm:mb-0 sm:mt-1">
                <span className={i === 0 ? 'text-white/70' : 'text-accent/70'}>{exp.period}</span>
              </header>

              <div className="z-10 sm:col-span-9">
                <h3 className={`mb-2 font-display text-lg font-bold leading-snug transition-colors ${i === 0 ? 'text-white' : 'text-primary group-hover:text-accent'}`}>
                  {exp.title}
                </h3>
                <p className={`mb-4 mt-2 text-sm leading-6 ${i === 0 ? 'text-white/74' : 'text-text-secondary'}`}>
                  {exp.desc}
                </p>

                <ul className="flex flex-col gap-2 mb-4">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className={`flex gap-2 text-xs leading-6 ${i === 0 ? 'text-white/72' : 'text-text-secondary'}`}>
                      <span className={`shrink-0 font-bold ${i === 0 ? 'text-white' : 'text-accent'}`}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                  {exp.stack.map((t, idx) => (
                    <li key={idx} className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                      i === 0 ? 'border-white/14 bg-white/10 text-white/82' : 'bg-accent/5 border-accent/10 text-accent'
                    }`}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex">
        <a
          href="/Jerry (Azhagirishankar K).docx"
          download="Jerry (Azhagirishankar K).docx"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-full items-center justify-center gap-3 rounded-full accent-gradient px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl active:translate-y-0 sm:w-auto"
        >
          Download Resume
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:translate-y-0.5">
            <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v6.638l2.258-2.154a.75.75 0 111.04 1.08l-3.5 3.342a.75.75 0 01-1.04 0l-3.5-3.342a.75.75 0 111.04-1.08l2.258 2.154V3.75A.75.75 0 0110 3zM3.5 13a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
}
