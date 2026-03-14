import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Atha Constructions Platform",
      problem: "Need for a centralized, high-performance real estate platform to manage property listings and corporate identity for a major construction firm.",
      architecture: "Full-stack monolithic architecture using Laravel for heavy backend logic, paired with React and Inertia.js for a seamless, mobile-first user experience. Leverages MySQL and SEO-optimized routing.",
      tech: ["React", "Inertia.js", "Laravel", "Tailwind", "MySQL", "Alpine.js"],
      link: "#",
      github: "https://github.com/code-by-jerry",
      status: "Production/Live"
    },
    {
      title: "FreshTick · Hybrid Delivery Ecosystem",
      problem: "Complex logistics required balancing multi-role access (Admin, Driver, Customer) with hybrid delivery windows (Instant vs Scheduled).",
      architecture: "Decoupled system with a headless Laravel API providing data to a high-reactivity React/Inertia frontend. Integrated real-time Firebase tracking for delivery fleet coordination.",
      tech: ["React", "Inertia.js", "Laravel", "MySQL", "Firebase"],
      link: "#",
      github: "https://github.com/code-by-jerry",
      status: "Live Production"
    },
    {
      title: "Nesthetix Designs · Architecture Hub",
      problem: "High-end interior design firm required a performance-critical, visually elite platform with complex content relations and SEO dominance.",
      architecture: "Engineered for speed and UX using Laravel and Tailwind CSS, focusing on optimized asset pipeline and structured SEO-friendly data architecture.",
      tech: ["Laravel", "Tailwind CSS", "SEO", "Performance Engineering"],
      link: "#",
      github: "https://github.com/code-by-jerry",
      status: "Live"
    },
    {
      title: "JippyMart · Scalable Food Delivery",
      problem: "Local food networks lacked a scalable vendor dashboard and automated order management to compete with enterprise platforms.",
      architecture: "Comprehensive Laravel ecosystem capable of high-concurrency order processing, featuring robust vendor role management and integrated REST APIs.",
      tech: ["Laravel", "PHP", "Bootstrap", "MySQL", "Firebase", "REST APIs"],
      link: "#",
      github: "https://github.com/code-by-jerry",
      status: "Live"
    },
    {
      title: "DestroSolutions · SDV Backend",
      problem: "Backend infrastructure for Software Defined Vehicle platforms required secure admin dashboards and scalable API endpoints for data telematics.",
      architecture: "Robust PHP/Laravel backend architecture designed for data integrity, featuring an Alpine.js powered dashboard for real-time system monitoring.",
      tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Alpine.js"],
      link: "#",
      github: "https://github.com/code-by-jerry",
      status: "Live"
    },
    {
      title: "EduLearn · LMS Core",
      problem: "Need for a modular e-learning architecture featuring student progress tracking and secure curriculum distribution.",
      architecture: "Modular Laravel-based system utilizing Alpine.js for lightweight frontend reactivity and MySQL for structured educational data relational mapping.",
      tech: ["Laravel", "Alpine.js", "MySQL"],
      link: "#",
      github: "https://github.com/code-by-jerry",
      status: "GitHub Only"
    }
  ];

  return (
    <section id="projects" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">Featured Projects</h2>
      </div>
      
      <div className="flex flex-col gap-14 group/list">
        {projects.map((proj, i) => (
           <div key={i} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 hover:!opacity-100 group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[16px] transition motion-reduce:transition-none lg:block lg:group-hover:bg-surface/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(229,231,235,0.4)] pointer-events-none"></div>
            
            <div className="z-10 mb-2 mt-1 sm:col-span-2">
              <div className="w-full h-16 sm:h-20 bg-border/40 rounded border border-border/50 group-hover:border-border transition-colors flex items-center justify-center overflow-hidden">
                <span className="text-[10px] uppercase tracking-widest font-bold text-text-secondary/30">{proj.status}</span>
              </div>
            </div>

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-primary group-hover:text-accent font-display text-xl mb-3 transition-colors flex items-center gap-2">
                <a href={proj.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
                  {proj.title}
                  <svg className="w-5 h-5 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-primary group-hover:text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                </a>
              </h3>
              
              <div className="mt-2 text-sm md:text-base leading-relaxed text-text-secondary flex flex-col gap-3 font-light mb-4 text-balance">
                <p><strong className="font-semibold text-primary">Problem:</strong> {proj.problem}</p>
                <p><strong className="font-semibold text-primary">Architecture:</strong> {proj.architecture}</p>
              </div>
              
              <ul className="mt-4 flex flex-wrap gap-2 mb-5" aria-label="Technologies used">
                {proj.tech.map((t, idx) => (
                  <li key={idx} className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold leading-5 text-accent">
                    {t}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-5 mt-4 pt-4 border-t border-border/60">
                 <a href={proj.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors flex items-center gap-2 relative z-20">
                    <FaGithub size={16}/> GitHub
                 </a>
                 <a href={proj.link} target="_blank" rel="noreferrer" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors flex items-center gap-2 relative z-20">
                    <FaExternalLinkAlt size={14}/> Live Demo
                 </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
