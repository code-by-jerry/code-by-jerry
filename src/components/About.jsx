export default function About() {
  const achievements = [
    "Improved application performance by up to 40% across multiple projects",
    "Reduced manual operations by 50% through backend automation",
    "Built scalable systems supporting 10,000+ daily users",
    "Delivered multiple production-grade platforms across different industries"
  ];

  return (
    <section id="about" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">About</h2>
      </div>

      <div className="text-text-secondary text-base leading-relaxed space-y-6 max-w-2xl font-light">
        <p>
          I'm a <span className="text-primary font-semibold">Senior Full Stack Engineer</span> with 3 years of experience building scalable web applications and production-grade platforms across <span className="text-primary font-semibold">real estate, commerce, and SaaS</span> domains. I specialize in end-to-end system development using Laravel, React, and Inertia.js, with a strong focus on <span className="text-primary font-semibold">clean architecture, performance, and maintainability</span>.
        </p>
        <p>
          I have led full project lifecycles, designed efficient database architectures, and built API-driven platforms using MySQL and Firebase. My work includes <span className="text-primary font-semibold">real-time delivery systems</span>, enterprise tools, CRM platforms, and financial applications — consistently focused on reliability and long-term scalability.
        </p>
        <p>
          I work effectively both independently and in collaborative environments, contributing to business-critical systems. Based in <span className="text-primary font-semibold">Bangalore, India</span>.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-border/40">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-4 font-display">Key Achievements</h3>
        <ul className="flex flex-col gap-3">
          {achievements.map((item, i) => (
            <li key={i} className="text-xs text-text-secondary flex gap-3 items-start">
              <span className="text-accent font-bold mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-8 border-t border-border/40">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-4 font-display">Currently Working On</h3>
        <ul className="flex flex-col gap-3">
          {[
            "Designing scalable delivery platforms with real-time tracking",
            "Improving system performance and database architecture",
            "Exploring modern frontend animation systems and UI performance"
          ].map((item, i) => (
            <li key={i} className="text-xs text-text-secondary flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
