import { FaGithub, FaExternalLinkAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useState, useRef } from 'react';

function ProjectImageScroll({ images, title }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 180;
      scrollRef.current.scrollBy({
        top: direction === 'up' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group/scroll flex flex-col items-center h-full max-h-full">
      <button 
        onClick={() => scroll('up')}
        className="absolute top-2 z-30 p-1 text-text-secondary/40 hover:text-accent transition-colors opacity-0 group-hover/scroll:opacity-100"
        aria-label="Scroll Up"
      >
        <FaChevronUp size={12} />
      </button>

      <div 
        ref={scrollRef}
        className="flex-1 w-full overflow-y-auto no-scrollbar scroll-smooth px-1"
        style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
      >
        <div className="flex flex-col gap-3 py-16">
          {images.map((img, idx) => (
            <div key={idx} className="w-full aspect-video rounded-lg border border-border/10 overflow-hidden bg-surface shadow-sm shrink-0">
              <img 
                src={img} 
                alt={`${title} thumbnail ${idx + 1}`} 
                className="w-full h-full object-cover transition-all duration-500 scale-[1.01] hover:scale-100" 
              />
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={() => scroll('down')}
        className="absolute bottom-2 z-30 p-1 text-text-secondary/40 hover:text-accent transition-colors opacity-0 group-hover/scroll:opacity-100"
        aria-label="Scroll Down"
      >
        <FaChevronDown size={12} />
      </button>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Atha Constructions Platform",
      year: "2026",
      status: "Production / Client Project",
      images: ["/assets/projects/atha.png", "/assets/projects/atha.png", "/assets/projects/atha.png", "/assets/projects/atha.png", "/assets/projects/atha.png"],
      description: "Real estate platform for managing property listings, corporate branding, and SEO-driven marketing pages.",
      role: "System Architecture · Full-stack Development · Deployment",
      impact: [
        "Production platform serving corporate website and property listings",
        "Optimized queries and routing → 40% faster page loads",
        "Mobile-first UI designed for high SEO performance and rankings"
      ],
      architecture: "Full-stack architecture using Laravel backend with React + Inertia frontend and MySQL data layer.",
      tech: ["Laravel", "React", "Inertia", "MySQL"],
      link: "#",
      github: "https://github.com/code-by-jerry"
    },
    {
      title: "FreshTick · Hybrid Delivery Ecosystem",
      year: "2026",
      status: "Production / Client Project",
      images: ["/assets/projects/freshtick.png", "/assets/projects/freshtick.png", "/assets/projects/freshtick.png", "/assets/projects/freshtick.png", "/assets/projects/freshtick.png"],
      description: "Delivery platform supporting multi-role operations and real-time fleet tracking.",
      role: "Backend Architecture · API Design · Real-time Integration",
      impact: [
        "Multi-role system (Admin/Driver/Customer) → 5k+ monthly orders",
        "Real-time coordination via Firebase transition tracking",
        "Hybrid delivery logic supporting instant and scheduled cycles"
      ],
      architecture: "Headless backend API paired with reactive frontend and real-time tracking infrastructure.",
      tech: ["Laravel", "React", "Firebase", "MySQL"],
      link: "#",
      github: "https://github.com/code-by-jerry"
    },
    {
      title: "JippyMart · Scalable Food Delivery",
      year: "2025",
      status: "Live Production",
      images: ["/assets/projects/jippymart.png", "/assets/projects/jippymart.png", "/assets/projects/jippymart.png", "/assets/projects/jippymart.png", "/assets/projects/jippymart.png"],
      description: "Automated food delivery network and vendor management system for local businesses.",
      role: "Full-stack Development · Dashboard Engineering · API Integration",
      impact: [
        "Automated workflow triggers → 25% faster order processing",
        "High-concurrency architecture supporting 200+ local vendors",
        "Integrated robust vendor dashboard for real-time inventory"
      ],
      architecture: "Comprehensive Laravel ecosystem with role management and integrated REST APIs.",
      tech: ["Laravel", "PHP", "MySQL", "REST APIs"],
      link: "#",
      github: "https://github.com/code-by-jerry"
    },
    {
      title: "Nesthetix Designs · Architecture Hub",
      year: "2025",
      status: "Live / Client Project",
      images: ["/assets/projects/nesthetix.png", "/assets/projects/nesthetix.png", "/assets/projects/nesthetix.png", "/assets/projects/nesthetix.png", "/assets/projects/nesthetix.png"],
      description: "High-performance architecture and interior design portfolio with advanced SEO optimization.",
      role: "Frontend Engineering · SEO Strategy · Performance Optimization",
      impact: [
        "Structured data and asset optimization → 60% organic traffic boost",
        "Under 2s load times for high-resolution image-heavy pages",
        "Engineered content relations for 100+ project categories"
      ],
      architecture: "Performance-critical platform on Laravel with optimized asset pipeline.",
      tech: ["Laravel", "Tailwind CSS", "SEO"],
      link: "#",
      github: "https://github.com/code-by-jerry"
    }
  ];

  return (
    <section id="projects" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">Selected Client Work & Projects</h2>
      </div>
      
      <div className="flex flex-col gap-16 group/list">
        {projects.map((proj, i) => (
           <div key={i} className="group relative transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-50">
            <div className="grid sm:grid-cols-12 sm:gap-8 p-4 -m-4 rounded-xl border border-transparent hover:bg-surface/30 project-card-hover h-full items-stretch">
              
              {/* Vertical Image Scroll Column (Matches Card Height) */}
              <div className="sm:col-span-3 z-10 h-auto overflow-hidden">
                <ProjectImageScroll images={proj.images} title={proj.title} />
              </div>

              {/* Content Block: sm:col-span-9 (Right side) */}
              <div className="sm:col-span-9 z-10 flex flex-col">
                <div className="flex flex-col gap-2 mb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-bold leading-snug text-primary group-hover:text-accent font-display text-lg transition-all duration-300">
                      <a href={proj.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 group/link relative z-20">
                        {proj.title} · {proj.year}
                        <svg className="w-4 h-4 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                      </a>
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] uppercase tracking-widest font-bold text-accent bg-accent/5 px-2 py-0.5 rounded border border-accent/20 whitespace-nowrap">
                        {proj.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] font-bold text-text-secondary/60">
                    {proj.role}
                  </p>
                </div>
                
                <p className="text-sm font-medium text-primary/80 mb-6 leading-relaxed max-w-2xl">
                  {proj.description}
                </p>

                <div className="flex-1 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/40 mb-2">Architecture</h4>
                      <p className="text-xs leading-relaxed text-text-secondary font-light">
                        {proj.architecture}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent/50 mb-3">Key Outcomes</h4>
                      <ul className="flex flex-col gap-2">
                        {proj.impact.map((point, idx) => (
                          <li key={idx} className="text-[11px] leading-relaxed text-text-secondary flex gap-2 items-start">
                            <span className="text-accent font-bold mt-0.5">·</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                    {proj.tech.map((t, idx) => (
                      <li key={idx} className="flex items-center rounded-full bg-accent/5 hover:bg-accent/10 px-3 py-1 text-[10px] font-bold leading-5 text-accent border border-accent/10 transition-colors">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4 pt-4 mt-auto">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-primary transition-colors flex items-center gap-2 relative z-20 group/icon">
                      <FaGithub size={14} className="group-hover/icon:scale-110 transition-transform" /> GitHub
                    </a>
                    <a href={proj.link} target="_blank" rel="noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-primary transition-colors flex items-center gap-2 relative z-20 group/icon">
                      <FaExternalLinkAlt size={12} className="group-hover/icon:scale-110 transition-transform" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 pt-10 border-t border-border/40">
        <a href="https://github.com/code-by-jerry?tab=repositories" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 accent-gradient text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:-translate-y-1 shadow-md hover:shadow-xl">
          Explore Full Engineering Archive
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
            <path fillRule="evenodd" d="m10 18 8-8-8-8-1.414 1.414L15.172 9H2v2h13.172l-6.586 6.586L10 18z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
}

