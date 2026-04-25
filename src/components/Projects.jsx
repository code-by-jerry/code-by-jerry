import { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'

const projectFilters = ['All', 'Platforms', 'Real Estate', 'Commerce', 'CMS']

const shots = {
  atha: [
    'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145530.png?updatedAt=1776505896460',
    'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145546.png?updatedAt=1776505896414',
    'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145656.png?updatedAt=1776505896444',
    'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145624.png?updatedAt=1776505896411',
    'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145311.png?updatedAt=1776505896420',
    'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145446.png?updatedAt=1776505896420',
  ],
  realty: [
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174924.png?updatedAt=1776506172591',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174906.png?updatedAt=1776506172562',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175012.png?updatedAt=1776506172472',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174958.png?updatedAt=1776506172458',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180325.png?updatedAt=1776506172517',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180242.png?updatedAt=1776506172393',
  ],
  nesthetix: [
    'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174304.png?updatedAt=1776506131947',
    'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174404.png?updatedAt=1776506131779',
    'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174512.png?updatedAt=1776506131736',
    'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174224.png?updatedAt=1776506131740',
    'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174324.png?updatedAt=1776506131733',
  ],
  camiprod: [
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144833.png?updatedAt=1776506056407',
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144853.png?updatedAt=1776506056398',
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144548.png?updatedAt=1776506054013',
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144659.png?updatedAt=1776506055429',
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144745.png?updatedAt=1776506054151',
  ],
  area24one: [
    'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180920.png?updatedAt=1776505783378',
    'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180816.png?updatedAt=1776505783376',
    'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180731.png?updatedAt=1776505783393',
    'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180834.png?updatedAt=1776505783335',
    'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180935.png?updatedAt=1776505783299',
  ],
  baybee: [
    'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181456.png?updatedAt=1776505955612',
    'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181416.png?updatedAt=1776505955600',
    'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181443.png?updatedAt=1776505955588',
    'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181400.png?updatedAt=1776505955585',
  ],
}

const projects = [
  {
    title: 'Atha Constructions Platform',
    year: '2026',
    category: 'Real Estate',
    status: 'Production / Client Project',
    images: shots.atha,
    description: 'Corporate real estate platform with property discovery, CMS content, lead capture, and SEO-ready marketing pages.',
    role: 'System Architecture - Full-stack Development - Deployment',
    impact: ['40% faster production page delivery', 'CMS-backed property and content workflows', 'Mobile-first pages built for search visibility'],
    architecture: 'Laravel backend with React + Inertia frontend, MySQL data layer, admin workflows, and production deployment ownership.',
    tech: ['Laravel', 'React', 'Inertia.js', 'MySQL'],
    github: 'https://github.com/code-by-jerry',
    featured: true,
  },
  {
    title: 'Area24Realty Platform',
    year: '2025',
    category: 'Real Estate',
    status: 'Live / Client Project',
    images: shots.realty,
    description: 'Property-led platform with regional listings, CRM support, map-based search, and discovery flows for buyers and agents.',
    role: 'Full-stack Development - CRM Engineering - SEO Optimization',
    impact: ['Region-based property search', 'Role-based CRM and listing workflows', 'SEO-optimized property discovery pages'],
    architecture: 'Laravel system with TypeScript UI patterns, map APIs, role-based access, and structured listing content.',
    tech: ['Laravel', 'MySQL', 'TypeScript', 'Maps API'],
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'FreshTick Delivery Ecosystem',
    year: '2026',
    category: 'Platforms',
    status: 'Production / Client Project',
    images: ['/assets/projects/freshtick.png'],
    description: 'Hybrid commerce and delivery system handling multi-role workflows, scheduling, live operations, and payment flows.',
    role: 'Backend Architecture - API Design - Real-time Integration',
    impact: ['Multi-role system for admin, driver, and customer flows', 'Integrated Razorpay, Firebase, and Google Maps API', 'API-driven architecture with testing discipline'],
    architecture: 'Headless backend API paired with reactive frontend screens and Firebase-powered real-time tracking infrastructure.',
    tech: ['Laravel', 'React.js', 'Inertia.js', 'Firebase', 'MySQL'],
    github: 'https://github.com/code-by-jerry',
    featured: true,
  },
  {
    title: 'JippyMart Food Delivery',
    year: '2025',
    category: 'Platforms',
    status: 'Live Production',
    images: ['/assets/projects/jippymart.png'],
    description: 'Multi-panel food and grocery delivery product with vendor management, real-time updates, and automated order workflows.',
    role: 'Full-stack Development - Dashboard Engineering - API Integration',
    impact: ['Multi-panel system for users, admins, and vendors', '25% faster order processing via automation', 'Firebase-backed real-time features with queues and cron jobs'],
    architecture: 'Laravel ecosystem with role management, Firebase real-time layer, REST APIs, queues, and scheduled jobs.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Firebase', 'Node.js'],
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Nesthetix Designs',
    year: '2025',
    category: 'CMS',
    status: 'Live / Client Project',
    images: shots.nesthetix,
    description: 'Architecture and interior design portfolio built around visual galleries, SEO content, and performance-sensitive media pages.',
    role: 'Frontend Engineering - SEO Strategy - Performance Optimization',
    impact: ['Image-heavy pages tuned under 2s', 'Structured project content for organic discovery', 'Portfolio pages designed for high visual trust'],
    architecture: 'Laravel-backed content structure with optimized asset delivery and carefully composed visual presentation.',
    tech: ['Laravel', 'Tailwind CSS', 'SEO'],
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Camiprod Shopify Store',
    year: '2025',
    category: 'Commerce',
    status: 'Storefront / Commerce',
    images: shots.camiprod,
    description: 'Commerce storefront work shaped around product browsing, buying clarity, and polished visual merchandising.',
    role: 'Storefront Development - Product UX - Conversion Layout',
    impact: ['Product-first page structure', 'Cleaner category and product browsing', 'Commerce visuals aligned with brand trust'],
    architecture: 'Shopify storefront implementation with responsive product sections, collection layouts, and checkout-focused presentation.',
    tech: ['Shopify', 'Liquid', 'CSS', 'JavaScript'],
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Area24One Business Site',
    year: '2025',
    category: 'CMS',
    status: 'Live / Brand Platform',
    images: shots.area24one,
    description: 'Brand-led business site with content sections, service presentation, and performance-oriented frontend delivery.',
    role: 'Frontend Development - CMS Structure - Deployment',
    impact: ['Clearer service positioning', 'Reusable marketing sections', 'Performance-focused page delivery'],
    architecture: 'Content-led frontend structure with reusable sections, optimized media, and consistent brand presentation.',
    tech: ['React', 'Tailwind CSS', 'SEO'],
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Baybee Commerce Experience',
    year: '2025',
    category: 'Commerce',
    status: 'Storefront / Commerce',
    images: shots.baybee,
    description: 'Ecommerce UI work focused on product confidence, responsive shopping flows, and clean mobile presentation.',
    role: 'Commerce UI - Responsive Frontend - Visual QA',
    impact: ['Mobile-first shopping screens', 'Product detail layouts with stronger clarity', 'Responsive storefront polish'],
    architecture: 'Responsive storefront pages with product-focused visual hierarchy and conversion-minded interaction patterns.',
    tech: ['Shopify', 'JavaScript', 'CSS'],
    github: 'https://github.com/code-by-jerry',
  },
]

function Lightbox({ images, title, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

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
      <div
        className="relative mx-4 flex w-full max-w-5xl flex-col items-center sm:mx-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 transition-colors hover:text-white"
          aria-label="Close lightbox"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex w-full justify-center">
          <img
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="block max-h-[76vh] w-auto max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-[45%] rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/90"
              aria-label="Previous image"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-[45%] rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/90"
              aria-label="Next image"
            >
              <FaChevronRight size={16} />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="mt-4 flex w-full flex-col items-center gap-2">
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setCurrent(idx)}
                  className={`h-10 w-16 shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                    idx === current ? 'border-accent opacity-100' : 'border-white/10 opacity-40 hover:opacity-70'
                  }`}
                  aria-label={`View screenshot ${idx + 1}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
              {current + 1} / {images.length}
            </p>
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          title={lightbox.title}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}

      <div className="sticky top-0 z-20 -mx-5 mb-5 w-screen border-y border-border/50 bg-background/92 px-5 py-4 backdrop-blur sm:-mx-6 sm:px-6 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:border-0 lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-display text-sm font-bold uppercase tracking-widest text-primary">Selected Client Work & Projects</h2>
      </div>

      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Selected Work</p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
          Individual builds with product context.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary">
          A modern card archive of shipped systems, each pairing visual proof with the engineering responsibility behind it.
        </p>
      </div>

      <div className="mb-7 flex flex-wrap gap-2">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] transition-all ${
              activeFilter === filter
                ? 'border-transparent accent-gradient text-white shadow-[0_14px_34px_-22px_rgba(99,102,241,0.72)]'
                : 'border-border/70 bg-background/82 text-text-secondary hover:border-accent/30 hover:text-accent'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5">
        {filteredProjects.map((project, index) => (
          <article
            key={project.title}
            className={`group relative overflow-hidden rounded-[2rem] border bg-background/88 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/28 hover:shadow-[0_30px_72px_-44px_rgba(99,102,241,0.32)] ${
              project.featured ? 'border-accent/18' : 'border-border/70'
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="grid gap-0 lg:grid-cols-[0.96fr_1.04fr]">
              <div className="relative min-h-[260px] overflow-hidden bg-[linear-gradient(135deg,#eef2ff,#f8fafc)] p-4 sm:p-5">
                <button
                  type="button"
                  onClick={() => setLightbox({ images: project.images, title: project.title, startIndex: 0 })}
                  className="group/shot relative block h-full min-h-[230px] w-full overflow-hidden rounded-[1.45rem] border border-border/70 bg-[#0f172a] shadow-[0_22px_52px_-32px_rgba(99,102,241,0.36)]"
                  aria-label={`Open ${project.title} screenshots`}
                >
                  <img
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/shot:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/68 via-primary/10 to-transparent opacity-80" />
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/16 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
                    <span className="rounded-full border border-white/18 bg-white/12 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-black/38 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em]">
                      {project.images.length} shots
                    </span>
                  </div>
                </button>
              </div>

              <div className="flex flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{project.status}</p>
                    {project.featured && (
                      <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-primary transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-text-secondary/55">
                    {project.year} - {project.role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-text-secondary">{project.description}</p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border/60 bg-surface/62 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary/42">Build</p>
                      <p className="mt-2 line-clamp-3 text-xs leading-6 text-text-secondary">{project.architecture}</p>
                    </div>
                    <div className="rounded-2xl border border-accent/12 bg-accent/5 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent/55">Result</p>
                      <p className="mt-2 text-xs font-semibold leading-6 text-primary/78">{project.impact[0]}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.tech.slice(0, 5).map((t) => (
                      <li
                        key={t}
                        className="flex items-center rounded-full border border-accent/10 bg-accent/5 px-3 py-1 text-[10px] font-bold leading-5 text-accent"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group/icon relative z-20 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary transition-colors hover:text-primary"
                    >
                      <FaGithub size={14} className="transition-transform group-hover/icon:scale-110" /> GitHub
                    </a>
                    <button
                      type="button"
                      onClick={() => setLightbox({ images: project.images, title: project.title, startIndex: 0 })}
                      className="group/icon relative z-20 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent transition-colors"
                    >
                      <FaExternalLinkAlt size={12} className="transition-transform group-hover/icon:scale-110" /> View Screens
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="pt-10">
        <Link to="/portfolio" className="group inline-flex w-full items-center justify-center gap-3 rounded-full accent-gradient px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl sm:w-auto">
          Explore Full Engineering Archive
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1">
            <path fillRule="evenodd" d="m10 18 8-8-8-8-1.414 1.414L15.172 9H2v2h13.172l-6.586 6.586L10 18z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
