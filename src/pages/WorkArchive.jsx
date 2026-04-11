import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { createPortal } from 'react-dom';

function Lightbox({ images, title, onClose }) {
  const [current, setCurrent] = useState(0);
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
    <div className="fixed inset-0 flex items-center justify-center bg-black/85 backdrop-blur-md" style={{ zIndex: 9999 }} onClick={onClose}>
      <div className="relative flex flex-col items-center w-full max-w-5xl mx-6" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors"><FaTimes size={18} /></button>
        <div className="flex justify-center">
          <img src={images[current]} alt={`${title} ${current + 1}`} className="h-[80vh] w-auto block rounded-xl border border-white/10 shadow-2xl" />
        </div>
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-3 top-[45%] -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"><FaChevronLeft size={14} /></button>
            <button onClick={next} className="absolute right-3 top-[45%] -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"><FaChevronRight size={14} /></button>
            <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-1">
              {images.map((img, idx) => (
                <button key={idx} onClick={() => setCurrent(idx)} className={`shrink-0 w-14 h-9 rounded overflow-hidden border-2 transition-all ${idx === current ? 'border-accent' : 'border-white/10 opacity-40 hover:opacity-70'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <p className="mt-2 text-[10px] text-white/40 font-bold uppercase tracking-widest">{current + 1} / {images.length}</p>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

const allProjects = [
  {
    title: "Atha Constructions",
    year: "2026",
    status: "Live",
    category: "Real Estate",
    images: ["/assets/projects/atha.png", "/assets/projects/atha.png"],
    description: "Construction company website with lead generation, CMS (services, careers, packages, blogs), contact enquiry, email notifications via Brevo, and admin dashboard. Tested with PHPUnit.",
    tech: ["React", "Inertia.js", "Laravel", "MySQL", "Brevo", "ImageKit", "SEO", "PHPUnit"],
    link: "https://athaconstruction.in/",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "FreshTick · Hybrid Commerce Platform",
    year: "2026",
    status: "In Progress",
    category: "Commerce",
    images: ["/assets/projects/freshtick.png", "/assets/projects/freshtick.png"],
    description: "Hybrid e-commerce and scheduled commerce web app — mobile-first. Includes full admin panel, RBAC, real-time tracking, OAuth, Razorpay payments, and PHPUnit test coverage.",
    tech: ["React.js", "Inertia.js", "Laravel", "Firebase", "Google Maps API", "Razorpay", "OAuth", "MySQL", "ImageKit", "msg99"],
    link: "#",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "JippyMart · Food & Mart Delivery",
    year: "2025",
    status: "Live",
    category: "Commerce",
    images: ["/assets/projects/jippymart.png", "/assets/projects/jippymart.png"],
    description: "Complete food and mart delivery system with User, Admin, and Restaurant web panels. Firebase-heavy with functions, indexes, storage, and collections. Full mobile backend API, queues, cron jobs, and Razorpay.",
    tech: ["Laravel", "Alpine.js", "Tailwind CSS", "Node.js", "Firebase", "MySQL", "Razorpay", "RBAC", "REST API"],
    link: "https://jippymart.in/",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "Area24Realty · Real Estate Platform",
    year: "2025",
    status: "Live",
    category: "Real Estate",
    images: ["/assets/projects/atha.png", "/assets/projects/atha.png"],
    description: "End-to-end real estate platform — region-based browsing, luxury segments, interactive map search (Google Maps + OSM), property listings, CRM, RBAC dashboards, OAuth, asset & theme manager, global SEO.",
    tech: ["Laravel", "Alpine.js", "TypeScript", "Node.js", "MySQL", "Google Maps", "OSM", "OAuth", "ImageKit", "SEO"],
    link: "https://lightgoldenrodyellow-jaguar-333517.hostingersite.com/",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "Nesthetix Designs · Interior Design",
    year: "2025",
    status: "Live",
    category: "Portfolio",
    images: ["/assets/projects/nesthetix.png", "/assets/projects/nesthetix.png"],
    description: "Interior design website with CMS, lead management, and GSAP animations. SEO-optimized with ImageKit asset pipeline. 60% organic traffic boost post-launch.",
    tech: ["React.js", "Inertia.js", "Laravel", "MySQL", "ImageKit", "GSAP", "SEO"],
    link: "https://nesthetixdesigns.com/",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "Area24One · Multi-Vertical Company Site",
    year: "2025",
    status: "Live",
    category: "Enterprise",
    images: ["/assets/projects/atha.png", "/assets/projects/atha.png"],
    description: "Multi-vertical company website with rule-based chat assistant, lead capture, CMS, REST API, GSAP animations, and TypeScript. Covers multiple business verticals under one platform.",
    tech: ["React.js", "Inertia.js", "Laravel", "TypeScript", "Tailwind CSS", "GSAP", "REST API", "SEO"],
    link: "https://area24one.com/",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "DestroSolutions · Software Defined Vehicles",
    year: "2025",
    status: "GitHub",
    category: "Enterprise",
    images: ["/assets/projects/jippymart.png", "/assets/projects/jippymart.png"],
    description: "Software-defined vehicle solution with company website, admin panel, and basic LMS. Features GSAP animations and Razorpay payment integration.",
    tech: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "GSAP", "Razorpay"],
    link: "#",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "Aaran Billing · ERP & Billing Software",
    year: "2024",
    status: "Live",
    category: "Enterprise",
    images: ["/assets/projects/freshtick.png", "/assets/projects/freshtick.png"],
    description: "Complete billing software with GST filing, CMS, and customizable ERP modules. Built with Livewire for real-time UI, REST API, and Node.js backend services.",
    tech: ["Laravel", "Livewire", "PHP", "MySQL", "Node.js", "REST API", "JavaScript"],
    link: "https://aaran.org/",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "Aarandevelopers · Basic ERP",
    year: "2024",
    status: "Live",
    category: "Enterprise",
    images: ["/assets/projects/freshtick.png", "/assets/projects/freshtick.png"],
    description: "Customizable ERP system with RBAC services, REST API, GSAP animations, and Livewire-powered real-time interface.",
    tech: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS", "GSAP", "MySQL", "REST API", "PHP"],
    link: "#",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "Techbuds · Digital Services Platform",
    year: "2024",
    status: "Live",
    category: "Enterprise",
    images: ["/assets/projects/jippymart.png", "/assets/projects/jippymart.png"],
    description: "Digital services marketing site (web, mobile, SEO, database warehousing) with integrated basic ERP and CRM.",
    tech: ["Laravel", "TypeScript", "Alpine.js", "Node.js", "PHP", "MySQL", "REST API"],
    link: "#",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "SmartLedger · Ledger & Inventory",
    year: "2024",
    status: "Live",
    category: "Enterprise",
    images: ["/assets/projects/freshtick.png", "/assets/projects/freshtick.png"],
    description: "Khatabook-style ledger entry and inventory management system for small businesses.",
    tech: ["Laravel", "MySQL", "Alpine.js", "CSS"],
    link: "#",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "Baybee · E-commerce Store",
    year: "2024",
    status: "Live",
    category: "Commerce",
    images: ["/assets/projects/jippymart.png", "/assets/projects/jippymart.png"],
    description: "Mobile-first Shopify store with custom Liquid, GoKwik, Quin shoppable integration, wishlist, and optimized custom code for performance.",
    tech: ["Shopify", "Liquid", "GoKwik", "Quin Shoppable"],
    link: "https://baybee.co.in/",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "Camiprod · Shopify Store",
    year: "2024",
    status: "Live",
    category: "Commerce",
    images: ["/assets/projects/jippymart.png", "/assets/projects/jippymart.png"],
    description: "Custom Shopify store with tailored Liquid theme development and performance optimizations.",
    tech: ["Shopify", "Liquid"],
    link: "#",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "Edulearn · LMS Platform",
    year: "2024",
    status: "In Progress",
    category: "SaaS",
    images: ["/assets/projects/freshtick.png", "/assets/projects/freshtick.png"],
    description: "Complete LMS with user-facing web view, admin panel, REST API, and RBAC. Course management, content delivery, and learner tracking.",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "RBAC"],
    link: "#",
    github: "https://github.com/code-by-jerry"
  },
  {
    title: "ClinicCMS · Clinic Management",
    year: "2024",
    status: "In Progress",
    category: "SaaS",
    images: ["/assets/projects/freshtick.png", "/assets/projects/freshtick.png"],
    description: "Clinic website with CMS for managing appointments, services, and patient information.",
    tech: ["PHP", "Laravel", "MySQL"],
    link: "#",
    github: "https://github.com/code-by-jerry"
  }
];

const categories = ["All", "Real Estate", "Commerce", "Enterprise", "SaaS", "Portfolio"];

export default function WorkArchive() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === "All"
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="hero-bg min-h-screen text-text font-sans selection:bg-accent selection:text-white">
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.08]" />

      {lightbox && <Lightbox images={lightbox.images} title={lightbox.title} onClose={() => setLightbox(null)} />}

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16">

        {/* Header */}
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-accent transition-colors mb-6 group">
            <FaArrowLeft size={9} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
          <h1 className="text-3xl font-bold font-display text-primary mb-2">Engineering Archive</h1>
          <p className="text-xs text-text-secondary font-light">All client work and production platforms.</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-accent text-white border-accent'
                  : 'text-text-secondary border-border hover:border-accent hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="flex flex-col divide-y divide-border/40">
          {filtered.map((proj, i) => (
            <div key={i} className="group flex gap-5 py-6 hover:bg-surface/30 -mx-4 px-4 rounded-xl transition-all duration-200">

              {/* Thumbnail */}
              <button
                onClick={() => setLightbox({ images: proj.images, title: proj.title })}
                className="shrink-0 w-32 h-20 rounded-lg overflow-hidden border border-border/20 bg-surface group/img focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`View ${proj.title} screenshots`}
              >
                <img
                  src={proj.images[0]}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-300 scale-[1.02] group-hover/img:scale-100"
                />
              </button>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h2 className="font-bold font-display text-primary text-sm leading-snug group-hover:text-accent transition-colors truncate">
                      {proj.title}
                    </h2>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[8px] uppercase tracking-widest font-bold text-accent bg-accent/5 px-2 py-0.5 rounded border border-accent/20">
                        {proj.status}
                      </span>
                      <span className="text-[9px] text-text-secondary/40 font-medium">{proj.year}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-text-secondary font-light leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <ul className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t, idx) => (
                      <li key={idx} className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-accent/5 border border-accent/10 text-accent">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3 shrink-0 ml-3">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="text-text-secondary/50 hover:text-primary transition-colors">
                      <FaGithub size={13} />
                    </a>
                    <a href={proj.link} target="_blank" rel="noreferrer" className="text-text-secondary/50 hover:text-primary transition-colors">
                      <FaExternalLinkAlt size={11} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        <p className="mt-10 text-[10px] text-text-secondary/40 text-center">
          {filtered.length} project{filtered.length !== 1 ? 's' : ''} · More on{' '}
          <a href="https://github.com/code-by-jerry" target="_blank" rel="noreferrer" className="text-accent hover:underline">GitHub</a>
        </p>

      </div>
    </div>
  );
}
