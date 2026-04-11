import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

function Lightbox({ images, title, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/85 backdrop-blur-md"
      style={{ zIndex: 9999 }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center w-full max-w-5xl mx-6"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors"
          aria-label="Close lightbox"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex justify-center">
          <img
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="h-[80vh] w-auto block rounded-xl border border-white/10 shadow-2xl"
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-[45%] -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Previous image"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-[45%] -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Next image"
            >
              <FaChevronRight size={16} />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="flex flex-col items-center gap-2 mt-4 w-full">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`shrink-0 w-16 h-10 rounded-md overflow-hidden border-2 transition-all ${
                    idx === current ? 'border-accent opacity-100' : 'border-white/10 opacity-40 hover:opacity-70'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
              {current + 1} / {images.length}
            </p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null);

  const projects = [
    {
      title: "Atha Constructions Platform",
      year: "2026",
      status: "Production / Client Project",
      images: ["/assets/projects/atha.png", "/assets/projects/atha.png", "/assets/projects/atha.png"],
      description: "Real estate platform for managing property listings, corporate branding, and SEO-driven marketing pages.",
      role: "System Architecture · Full-stack Development · Deployment",
      impact: [
        "Production platform serving corporate website and property listings",
        "Optimized queries and routing → 40% faster page loads",
        "Mobile-first UI designed for high SEO performance and rankings"
      ],
      architecture: "Full-stack architecture using Laravel backend with React + Inertia frontend and MySQL data layer.",
      tech: ["Laravel", "React", "Inertia.js", "MySQL"],
      link: "#",
      github: "https://github.com/code-by-jerry"
    },
    {
      title: "FreshTick · Hybrid Delivery Ecosystem",
      year: "2026",
      status: "Production / Client Project",
      images: ["/assets/projects/freshtick.png", "/assets/projects/freshtick.png", "/assets/projects/freshtick.png"],
      description: "Scalable commerce platform handling real-time operations, multi-role workflows, scheduling, RBAC, and real-time features.",
      role: "Backend Architecture · API Design · Real-time Integration",
      impact: [
        "Multi-role system (Admin/Driver/Customer) → 5k+ monthly orders",
        "Integrated Razorpay, Firebase, and Google Maps API",
        "API-driven architecture with PHPUnit testing"
      ],
      architecture: "Headless backend API paired with reactive frontend and real-time tracking infrastructure.",
      tech: ["Laravel", "React.js", "Inertia.js", "Firebase", "MySQL"],
      link: "#",
      github: "https://github.com/code-by-jerry"
    },
    {
      title: "JippyMart · Scalable Food Delivery",
      year: "2025",
      status: "Live Production",
      images: ["/assets/projects/jippymart.png", "/assets/projects/jippymart.png", "/assets/projects/jippymart.png"],
      description: "Multi-panel food and grocery delivery platform with vendor management, real-time features, and automated workflows.",
      role: "Full-stack Development · Dashboard Engineering · API Integration",
      impact: [
        "Multi-panel system (User, Admin, Vendor) → 200+ local vendors",
        "Automated workflow triggers → 25% faster order processing",
        "Real-time features using Firebase with queues and cron jobs"
      ],
      architecture: "Comprehensive Laravel ecosystem with role management, Firebase real-time layer, and integrated REST APIs.",
      tech: ["Laravel", "PHP", "MySQL", "Firebase", "Node.js"],
      link: "#",
      github: "https://github.com/code-by-jerry"
    },
    {
      title: "Area24Realty · Real Estate Platform",
      year: "2025",
      status: "Live / Client Project",
      images: ["/assets/projects/atha.png", "/assets/projects/atha.png", "/assets/projects/atha.png"],
      description: "Region-based property platform with CRM, dashboards, and map-based search for buyers and agents.",
      role: "Full-stack Development · CRM Engineering · SEO Optimization",
      impact: [
        "Region-based property search with Google Maps and OSM integration",
        "RBAC system supporting multiple user roles (Admin, Agent, Buyer)",
        "SEO-optimized listings driving organic property discovery"
      ],
      architecture: "Laravel backend with TypeScript frontend, integrated map APIs and role-based access control.",
      tech: ["Laravel", "MySQL", "TypeScript", "Google Maps API"],
      link: "#",
      github: "https://github.com/code-by-jerry"
    },
    {
      title: "Nesthetix Designs · Architecture Hub",
      year: "2025",
      status: "Live / Client Project",
      images: ["/assets/projects/nesthetix.png", "/assets/projects/nesthetix.png", "/assets/projects/nesthetix.png"],
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
    },
    {
      title: "DestroSolutions · Vehicle Platform",
      year: "2025",
      status: "Live / Client Project",
      images: ["/assets/projects/jippymart.png", "/assets/projects/jippymart.png", "/assets/projects/jippymart.png"],
      description: "Vehicle management platform with CMS, admin panel, payment integration, and animated UI.",
      role: "Full-stack Development · CMS Engineering · UI Animation",
      impact: [
        "Built CMS and admin panel with full payment gateway integration",
        "Developed animated UI using GSAP for enhanced user experience",
        "Scalable backend supporting vehicle listings and transactions"
      ],
      architecture: "Node.js and Laravel hybrid backend with PHP, MySQL data layer and GSAP-powered frontend.",
      tech: ["Node.js", "Laravel", "PHP", "MySQL", "GSAP"],
      link: "#",
      github: "https://github.com/code-by-jerry"
    },
    {
      title: "Aaran Billing · ERP System",
      year: "2024",
      status: "Live Production",
      images: ["/assets/projects/freshtick.png", "/assets/projects/freshtick.png", "/assets/projects/freshtick.png"],
      description: "Billing and inventory ERP system with REST APIs and scalable architecture for business operations.",
      role: "Full-stack Development · ERP Architecture · API Design",
      impact: [
        "Developed billing and inventory system with complete REST API layer",
        "Built scalable ERP architecture using Laravel Livewire",
        "Streamlined business operations with automated billing workflows"
      ],
      architecture: "Laravel Livewire ERP architecture with MySQL, REST APIs, and real-time UI updates.",
      tech: ["Laravel", "Livewire", "MySQL", "REST APIs"],
      link: "#",
      github: "https://github.com/code-by-jerry"
    }
  ];

  return (
    <section id="projects" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          title={lightbox.title}
          startIndex={0}
          onClose={() => setLightbox(null)}
        />
      )}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">Selected Client Work & Projects</h2>
      </div>

      <div className="flex flex-col gap-12 group/list">
        {projects.map((proj, i) => (
          <div key={i} className="group relative transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-50">
            <div className="flex flex-col p-4 -m-4 rounded-xl border border-transparent hover:bg-surface/30 project-card-hover">

              {/* Row 1: Feature image + Title/Tag */}
              <div className="grid grid-cols-12 gap-4 items-center mb-5">
                <div className="col-span-4 sm:col-span-3">
                  <button
                    onClick={() => setLightbox({ images: proj.images, title: proj.title })}
                    className="relative w-full aspect-video rounded-lg border border-border/10 overflow-hidden bg-surface shadow-sm block group/img focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label={`View ${proj.title} screenshots`}
                  >
                    <img
                      src={proj.images[0]}
                      alt={`${proj.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-500 scale-[1.01] group-hover/img:scale-100"
                    />
                    {proj.images.length > 1 && (
                      <div className="absolute inset-0 flex items-end justify-end p-1.5 opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <span className="text-[8px] font-bold uppercase tracking-widest bg-black/60 text-white px-1.5 py-0.5 rounded-full">
                          +{proj.images.length - 1}
                        </span>
                      </div>
                    )}
                  </button>
                </div>

                <div className="col-span-8 sm:col-span-9 flex flex-col gap-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-bold leading-snug text-primary group-hover:text-accent font-display text-base sm:text-lg transition-all duration-300">
                      <a href={proj.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 group/link relative z-20">
                        {proj.title} · {proj.year}
                        <svg className="w-3.5 h-3.5 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                      </a>
                    </h3>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-accent bg-accent/5 px-2 py-0.5 rounded border border-accent/20 whitespace-nowrap shrink-0">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-text-secondary/60">{proj.role}</p>
                </div>
              </div>

              {/* Row 2: Full-width content */}
              <div className="flex flex-col gap-5">
                <p className="text-sm font-medium text-primary/80 leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/40 mb-1.5">Architecture</h4>
                    <p className="text-xs leading-relaxed text-text-secondary font-light">{proj.architecture}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent/50 mb-2">Key Outcomes</h4>
                    <ul className="flex flex-col gap-1.5">
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

                <div className="flex items-center gap-4">
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
        ))}
      </div>

      <div className="pt-10">
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
