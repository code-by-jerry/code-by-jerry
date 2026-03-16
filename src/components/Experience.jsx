export default function Experience() {
  const experiences = [
    {
      period: "Nov 2026 — Present",
      title: "Full Stack Engineer · Atha Constructions",
      desc: "Leading development of multiple production web platforms, handling architecture, development, deployment, and long-term maintenance of company systems.",
      achievements: [
        "Designed and deployed production platforms including Atha Constructions, Nesthetix Design, and Area24One",
        "Architected scalable full-stack systems supporting business operations and dynamic content management",
        "Optimized database structures and backend services to improve system performance and maintainability"
      ]
    },
    {
      period: "2025 — 2026",
      title: "Independent Full Stack Engineer",
      desc: "Building web applications and platform solutions for clients across e-commerce, delivery platforms, and enterprise tools.",
      achievements: [
        "Developed backend systems and admin dashboards for a software-defined mobility platform (DestroSolutions)",
        "Engineered a multi-role delivery platform with real-time tracking and operational dashboards (FreshTick)",
        "Customized and optimized Shopify stores for improved performance and user experience"
      ]
    },
    {
      period: "Sept 2025 — Nov 2026",
      title: "Full Stack Engineer · Appstronauts IT Solutions",
      desc: "Worked on high-performance web applications and backend automation while collaborating with a team of developers.",
      achievements: [
        "Improved application performance by 40% through backend optimization and query tuning",
        "Automated operational workflows using custom backend scripts, reducing manual effort by 50%",
        "Participated in architecture planning, code reviews, and feature development across multiple projects"
      ]
    },
    {
      period: "Nov 2023 — Aug 2024",
      title: "Web Developer · Aaron Infotech",
      desc: "Developed responsive web applications and backend functionality for multiple client projects.",
      achievements: [
        "Reduced page load times by 30% through frontend optimization and database query improvements",
        "Maintained high deployment reliability through testing and code review practices",
        "Improved user engagement through responsive UI improvements and backend feature development"
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
          <div key={i} className="group relative transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-50">
            <div className="grid sm:grid-cols-12 sm:gap-8 p-4 -m-4 rounded-xl border border-transparent hover:bg-surface/30 project-card-hover items-start">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-secondary sm:col-span-3">
                {exp.period}
              </header>

              <div className="z-10 sm:col-span-9">
                <h3 className="font-medium leading-snug text-primary group-hover:text-accent font-display text-lg mb-2 transition-colors">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm leading-normal text-text-secondary font-light">
                  {exp.desc}
                </p>
                
                <ul className="mt-4 flex flex-col gap-2">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="text-xs leading-normal text-text-secondary flex gap-2">
                      <span className="text-accent">•</span>
                      {item}
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
          href="/resume.pdf" 
          download 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group inline-flex items-center gap-3 accent-gradient text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:-translate-y-1 shadow-md hover:shadow-xl active:translate-y-0"
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

