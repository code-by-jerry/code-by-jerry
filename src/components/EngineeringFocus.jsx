export default function WhatIBring() {
  const competencies = [
    "Full Stack Web Development",
    "Scalable System Architecture",
    "REST API Design & Integration",
    "Database Design & Optimization",
    "Role-Based Access Control (RBAC)",
    "Payment Gateway Integration",
    "Real-Time Systems (Firebase)"
  ];

  const skills = [
    { label: "Languages", items: ["JavaScript", "TypeScript", "PHP", "SQL"] },
    { label: "Frontend", items: ["React.js", "Inertia.js", "Next.js", "Alpine.js", "Tailwind CSS", "Bootstrap"] },
    { label: "Backend", items: ["Laravel", "Node.js", "REST APIs", "OAuth", "RBAC"] },
    { label: "Databases", items: ["MySQL", "PostgreSQL", "Firebase"] },
    { label: "Cloud & Tools", items: ["GCP", "Vercel", "Cloudflare", "Git", "Postman", "PHPUnit"] },
    { label: "CMS & Commerce", items: ["Shopify", "WordPress"] }
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
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">Engineering Expertise</h2>
      </div>

      <div className="flex flex-col gap-10">

        {/* Core Competencies */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4 font-display">Core Competencies</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {competencies.map((item, i) => (
              <li key={i} className="text-xs text-text-secondary flex gap-3 items-start leading-relaxed">
                <span className="text-accent font-bold mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Skills */}
        <div className="pt-8 border-t border-border/40">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-6 font-display">Technical Skills</h3>
          <div className="flex flex-col gap-4">
            {skills.map((group, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 items-start">
                <span className="col-span-3 text-[10px] font-bold uppercase tracking-widest text-text-secondary/50 pt-0.5">
                  {group.label}
                </span>
                <ul className="col-span-9 flex flex-wrap gap-2">
                  {group.items.map((t, idx) => (
                    <li key={idx} className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-accent/5 border border-accent/10 text-accent">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 pt-8 border-t border-border/40">
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

        {/* Who I work with */}
        <div className="pt-8 border-t border-border/40">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4 font-display">Collaborative Focus</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Startups building new platforms",
              "Businesses needing custom web systems",
              "Founders launching MVP products",
              "Companies improving existing applications"
            ].map((who, i) => (
              <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded bg-surface border border-border text-text-secondary/70">
                {who}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
