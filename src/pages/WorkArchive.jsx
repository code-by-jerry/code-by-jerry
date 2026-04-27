import { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'
import SEO from '../components/SEO'

const shots = {
  realty: [
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174924.png?updatedAt=1776506172591&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174906.png?updatedAt=1776506172562&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175012.png?updatedAt=1776506172472&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174958.png?updatedAt=1776506172458&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180325.png?updatedAt=1776506172517&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180242.png?updatedAt=1776506172393&tr=f-auto,q-80',
  ],
  nesthetix: [
    'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174304.png?updatedAt=1776506131947&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174404.png?updatedAt=1776506131779&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174512.png?updatedAt=1776506131736&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174224.png?updatedAt=1776506131740&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174324.png?updatedAt=1776506131733&tr=f-auto,q-80',
  ],
  camiprod: [
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144833.png?updatedAt=1776506056407&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144853.png?updatedAt=1776506056398&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144548.png?updatedAt=1776506054013&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144659.png?updatedAt=1776506055429&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144745.png?updatedAt=1776506054151&tr=f-auto,q-80',
  ],
  baybee: [
    'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181456.png?updatedAt=1776505955612&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181416.png?updatedAt=1776505955600&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181443.png?updatedAt=1776505955588&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181400.png?updatedAt=1776505955585&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181336.png?updatedAt=1776505955591&tr=f-auto,q-80',
  ],
  atha: [
    'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145530.png?updatedAt=1776505896460&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145546.png?updatedAt=1776505896414&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145656.png?updatedAt=1776505896444&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145624.png?updatedAt=1776505896411&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145311.png?updatedAt=1776505896420&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145446.png?updatedAt=1776505896420&tr=f-auto,q-80',
  ],
  area24one: [
    'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180920.png?updatedAt=1776505783378&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180816.png?updatedAt=1776505783376&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180731.png?updatedAt=1776505783393&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180834.png?updatedAt=1776505783335&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180935.png?updatedAt=1776505783299&tr=f-auto,q-80',
  ],
}

const allProjects = [
  {
    title: 'Atha Constructions',
    year: '2026',
    status: 'Live',
    category: 'Real Estate',
    images: shots.atha,
    description: 'Construction and real estate website with CMS, lead capture, service pages, blogs, enquiry handling, and admin workflows.',
    tech: ['React', 'Inertia.js', 'Laravel', 'MySQL', 'Brevo', 'SEO'],
    link: 'https://athaconstruction.in/',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'FreshTick',
    year: '2026',
    status: 'In Progress',
    category: 'Commerce',
    images: ['/assets/projects/freshtick.png'],
    description: 'Hybrid commerce platform with admin workflows, real-time tracking, payments, OAuth, and role-based access.',
    tech: ['React.js', 'Inertia.js', 'Laravel', 'Firebase', 'Razorpay'],
    link: '',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'JippyMart',
    year: '2025',
    status: 'Live',
    category: 'Commerce',
    images: ['/assets/projects/jippymart.png'],
    description: 'Food and mart delivery system with user, admin, restaurant panels, mobile APIs, queues, cron jobs, and payments.',
    tech: ['Laravel', 'Firebase', 'MySQL', 'Razorpay', 'REST API'],
    link: 'https://jippymart.in/',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Area24Realty',
    year: '2025',
    status: 'Live',
    category: 'Real Estate',
    images: shots.realty,
    description: 'Property platform with regional browsing, luxury segments, map search, listings, CRM, dashboards, and SEO.',
    tech: ['Laravel', 'TypeScript', 'MySQL', 'Maps', 'SEO'],
    link: 'https://lightgoldenrodyellow-jaguar-333517.hostingersite.com/',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Nesthetix Designs',
    year: '2025',
    status: 'Live',
    category: 'Portfolio',
    images: shots.nesthetix,
    description: 'Interior design portfolio with CMS, lead management, image-rich project pages, animation, and SEO-focused structure.',
    tech: ['React.js', 'Inertia.js', 'Laravel', 'ImageKit', 'GSAP'],
    link: 'https://nesthetixdesigns.com/',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Area24One',
    year: '2025',
    status: 'Live',
    category: 'Enterprise',
    images: shots.area24one,
    description: 'Multi-vertical company site with CMS, lead capture, service sections, assistant logic, animations, and SEO.',
    tech: ['React.js', 'Laravel', 'TypeScript', 'Tailwind CSS', 'SEO'],
    link: 'https://area24one.com/',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Baybee',
    year: '2024',
    status: 'Live',
    category: 'Commerce',
    images: shots.baybee,
    description: 'Mobile-first Shopify store with custom Liquid, checkout integrations, wishlist, and optimized storefront code.',
    tech: ['Shopify', 'Liquid', 'GoKwik', 'Custom UI'],
    link: 'https://baybee.co.in/',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Camiprod',
    year: '2024',
    status: 'Storefront',
    category: 'Commerce',
    images: shots.camiprod,
    description: 'Custom Shopify storefront with tailored Liquid theme development, product presentation, and performance improvements.',
    tech: ['Shopify', 'Liquid', 'CSS', 'JavaScript'],
    link: '',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Aaran Billing',
    year: '2024',
    status: 'Live',
    category: 'Enterprise',
    images: ['/assets/projects/freshtick.png'],
    description: 'Billing and ERP software with GST workflows, customizable modules, APIs, and real-time admin interfaces.',
    tech: ['Laravel', 'Livewire', 'PHP', 'MySQL', 'REST API'],
    link: 'https://aaran.org/',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'DestroSolutions',
    year: '2025',
    status: 'GitHub',
    category: 'Enterprise',
    images: ['/assets/projects/jippymart.png'],
    description: 'Vehicle solution website and admin system with payment integration, animation, and business content management.',
    tech: ['Laravel', 'PHP', 'MySQL', 'GSAP', 'Razorpay'],
    link: '',
    github: 'https://github.com/code-by-jerry',
  },
]

const categories = ['All', 'Real Estate', 'Commerce', 'Enterprise', 'Portfolio']

function Lightbox({ images, title, onClose }) {
  const [current, setCurrent] = useState(0)
  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, prev, next])

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/85 backdrop-blur-md"
      style={{ zIndex: 9999 }}
      onClick={onClose}
    >
      <div className="relative mx-4 flex w-full max-w-5xl flex-col items-center sm:mx-6" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 transition-colors hover:text-white"
          aria-label="Close lightbox"
        >
          <FaTimes size={18} />
        </button>
        <div className="flex w-full justify-center">
          <img
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="block max-h-[78vh] w-auto max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
          />
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-[45%] rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/90"
              aria-label="Previous image"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-[45%] rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/90"
              aria-label="Next image"
            >
              <FaChevronRight size={14} />
            </button>
            <div className="mt-4 flex max-w-full gap-2 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setCurrent(idx)}
                  className={`h-9 w-14 shrink-0 overflow-hidden rounded border-2 transition-all ${
                    idx === current ? 'border-accent' : 'border-white/10 opacity-40 hover:opacity-70'
                  }`}
                  aria-label={`View screenshot ${idx + 1}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/70">
              {current + 1} / {images.length}
            </p>
          </>
        )}
      </div>
    </div>,
    document.body,
  )
}

export default function WorkArchive() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return allProjects
    return allProjects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Project Portfolio",
    "description": "Archive of production systems and applications developed by Jerry.",
    "url": "https://codebyjerry.online/portfolio",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allProjects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": project.title,
        "description": project.description,
        "url": project.link || "https://codebyjerry.online/portfolio"
      }))
    }
  }

  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO 
        title="Project Portfolio | Code by Jerry"
        description="Explore a compact archive of shipped production systems, commerce builds, real estate platforms, and custom business applications developed by Jerry."
        keywords="developer portfolio, production systems, business applications, Laravel projects, React projects, custom software development"
        schema={portfolioSchema}
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.08]" />
      {lightbox && <Lightbox images={lightbox.images} title={lightbox.title} onClose={() => setLightbox(null)} />}

      <main className="relative z-10 mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-14 md:px-10 lg:py-16">
        <header className="mb-9">
          <Link
            to="/about"
            className="group mb-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary transition-colors hover:text-accent"
          >
            <FaArrowLeft size={9} className="transition-transform group-hover:-translate-x-1" />
            Developer Portfolio
          </Link>

          <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Work Archive</p>
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
                Compact archive of shipped work.
              </h1>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-text-secondary">
              A quick scan of production sites, commerce builds, real estate platforms, and business systems with updated screenshots.
            </p>
          </div>
        </header>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all ${
                activeCategory === category
                  ? 'border-transparent accent-gradient text-white shadow-[0_14px_34px_-22px_rgba(99,102,241,0.72)]'
                  : 'border-border/70 bg-background/82 text-text-secondary hover:border-accent/30 hover:text-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <section className="flex flex-col divide-y divide-border/40">
          {filtered.map((project, index) => (
            <div
              key={project.title}
              className="group -mx-3 grid gap-4 rounded-2xl px-3 py-5 transition-all duration-200 hover:bg-surface/50 sm:grid-cols-[10.5rem_1fr] sm:items-start"
            >
              <button
                type="button"
                onClick={() => setLightbox({ images: project.images, title: project.title })}
                className="relative block aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/70 bg-[#0f172a] text-left shadow-[0_14px_36px_-28px_rgba(15,23,42,0.24)] focus:outline-none focus:ring-2 focus:ring-accent sm:w-42"
                aria-label={`View ${project.title} screenshots`}
              >
                <img
                  src={project.images[0]}
                  alt={`${project.title} preview`}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/0 to-transparent" />
                <div className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full border border-white/16 bg-white/10 px-2 py-1 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="absolute bottom-2.5 right-2.5 text-white">
                  <span className="rounded-full bg-black/38 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.16em]">
                    {project.images.length} shots
                  </span>
                </div>
              </button>

              <div className="flex min-w-0 flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="font-display text-base font-bold leading-snug text-primary transition-colors group-hover:text-accent">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-text-secondary/70">
                      {project.category} - {project.year} - {project.status}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-text-secondary/70 transition-colors hover:text-primary"
                      aria-label={`${project.title} GitHub`}
                    >
                      <FaGithub size={14} />
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-secondary/70 transition-colors hover:text-primary"
                        aria-label={`${project.title} live site`}
                      >
                        <FaExternalLinkAlt size={12} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-2 line-clamp-2 text-xs leading-6 text-text-secondary">{project.description}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-accent/10 bg-accent/5 px-2.5 py-1 text-[9px] font-bold leading-4 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => setLightbox({ images: project.images, title: project.title })}
                    className="text-[10px] font-bold uppercase tracking-widest text-accent transition-colors"
                  >
                    View Screens
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        <p className="mt-10 text-center text-[10px] text-text-secondary/70">
          Showing {filtered.length} project{filtered.length !== 1 ? 's' : ''}. More updates continue on{' '}
          <a href="https://github.com/code-by-jerry" target="_blank" rel="noreferrer" className="text-accent hover:underline">
            GitHub
          </a>
          .
        </p>
      </main>
    </div>
  )
}
