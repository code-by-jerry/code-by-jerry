export default function WhatIBring() {
  const points = [
    "Experience developing full-stack systems used in real production environments",
    "Strong understanding of backend architecture and database optimization",
    "Proven ability to design systems that handle complex workflows and data flows",
    "Focus on performance, scalability, and long-term maintainability"
  ];

  const focuses = [
    {
      title: "Scalable Architecture",
      desc: "Designing modular, multi-role systems using Laravel, React, and headless API patterns."
    },
    {
      title: "Performance Engineering",
      desc: "Optimizing queries and asset delivery pipelines to achieve target response times."
    },
    {
      title: "Production Reliability",
      desc: "Building deployment-ready systems with focus on data integrity and state management."
    }
  ];

  return (
    <section id="focus" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">What I Bring</h2>
      </div>

      <div className="flex flex-col gap-10">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4 font-display">Recruiter Hook</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-6 font-semibold max-w-2xl text-primary">
            I focus on building production-grade web platforms that are reliable, scalable, and easy to maintain.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {points.map((point, i) => (
              <li key={i} className="text-xs text-text-secondary flex gap-3 items-start leading-relaxed">
                <span className="text-accent font-bold mt-0.5">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 pt-6 border-t border-border/40">
          {focuses.map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary font-display">
                {item.title}
              </h4>
              <p className="text-[11px] leading-relaxed text-text-secondary font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


