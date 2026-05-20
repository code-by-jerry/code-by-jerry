import { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'
import SEO from '../components/SEO'
import SiteHeader from '../components/SiteHeader'

const shots = {
  realty: [
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174924.png?updatedAt=1776506172591&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174906.png?updatedAt=1776506172562&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175012.png?updatedAt=1776506172472&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174958.png?updatedAt=1776506172458&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180325.png?updatedAt=1776506172517&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180242.png?updatedAt=1776506172393&tr=f-auto,q-80',
  ],
  jippymart: [
    'https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20151950.png',
    'https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20152058.png',
    'https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20152205.png',
    'https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20151852.png',
    'https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20152009.png',
    'https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20152135.png',
    'https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20151846.png',
    'https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20152026.png',
    'https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20151637.png',
    'https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20151838.png',
    'https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20151654.png',
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
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144819.png?updatedAt=1776506054135&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144802.png?updatedAt=1776506054356&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144915.png?updatedAt=1776506053788&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144641.png?updatedAt=1776506053279&tr=f-auto,q-80',
    'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144721.png?updatedAt=1776506052388&tr=f-auto,q-80',
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
  billing: [
    'https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182025.png',
    'https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182122.png',
    'https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182250.png',
    'https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182345.png',
    'https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182107.png',
    'https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182136.png',
    'https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182527.png',
    'https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182608.png',
    'https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182053.png',
    'https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20183413.png',
  ],
  enmart: [
    'https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.21%20PM%20(3).jpeg',
    'https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.21%20PM.jpeg',
    'https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.21%20PM%20(4).jpeg',
    'https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.22%20PM.jpeg',
    'https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.21%20PM%20(1).jpeg',
    'https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%203.59.44%20PM.jpeg',
    'https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.21%20PM%20(5).jpeg',
    'https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.21%20PM%20(2).jpeg',
    'https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.22%20PM%20(2).jpeg',
    'https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.22%20PM%20(3).jpeg',
    'https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.22%20PM%20(1).jpeg',
    'https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.22%20PM%20(4).jpeg',
  ],
}

const logos = {
  atha: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Atha%20Constructions.webp?updatedAt=1777100806093',
  jippymart: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/jippymart.webp?updatedAt=1777100737251',
  realty: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/area24realty.webp?updatedAt=1777100909832',
  enmart: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/enmart_logo.png?updatedAt=1779037768857',
  arran: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/aaraninfo.png?updatedAt=1777100866170',
  baybee: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Baybee_logo.svg?updatedAt=1779037891024',
  nesthetix: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/nesthetix.webp?updatedAt=1777100737298',
  techbuds: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/techbuds.png',
  destro: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/destrosolutions_new.png?updatedAt=1779038470588',
  area24one: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/area24one.png?updatedAt=1777100737279',
}

const allProjects = [
  {
    title: 'Atha Constructions',
    year: '2026',
    status: 'Live',
    category: 'Construction',
    images: shots.atha,
    logo: logos.atha,
    description: 'Lead-focused construction operations platform with consultation workflows, pricing visibility, cost estimators, inquiry handling, SEO controls, theme customization, and an internal admin system.',
    tech: ['React', 'Inertia.js', 'Laravel', 'MySQL', 'Brevo', 'SEO'],
    link: 'https://athaconstruction.in/',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'EnMart',
    year: '2026',
    status: 'GitHub',
    category: 'Commerce',
    images: shots.enmart,
    logo: logos.enmart,
    description: 'Mobile-first quick commerce infrastructure for rapid product discovery, multi-vertical store management, inventory workflows, delivery coordination, and scalable commerce administration.',
    tech: ['React.js', 'Inertia.js', 'Laravel', 'PostgreSQL', 'Maps'],
    link: '',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'JippyMart',
    year: '2025',
    status: 'Live',
    category: 'Commerce',
    images: shots.jippymart,
    logo: logos.jippymart,
    description: 'Full-scale food delivery ecosystem with customer storefront, restaurant panel, centralized admin operations, restaurant onboarding, order workflows, mobile deep links, SEO infrastructure, and dashboards.',
    tech: ['Laravel', 'Firebase', 'MySQL', 'Razorpay', 'REST API'],
    link: 'https://jippymart.in/mart/',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Area24Reality',
    year: '2025',
    status: 'Live',
    category: 'Real Estate',
    images: shots.realty,
    logo: logos.realty,
    description: 'Multi-region real estate operations platform with interactive property mapping, advanced listing management, analytics dashboards, owner and agent portals, and lead handling tools.',
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
    logo: logos.nesthetix,
    description: 'Premium interior design business website with lead generation, SEO structure, lightweight CMS management, service showcasing, inquiry conversion, and easy content updates.',
    tech: ['React.js', 'Inertia.js', 'Laravel', 'ImageKit', 'GSAP'],
    link: 'https://nesthetixdesigns.com/',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Area24One',
    year: '2025',
    status: 'Live',
    category: 'Services',
    images: shots.area24one,
    logo: logos.area24one,
    description: 'Conversion-focused business platform with rule-based assistant systems, centralized CMS management, SEO controls, theme customization, and operational admin tooling.',
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
    logo: logos.baybee,
    description: 'End-to-end Shopify commerce store for a baby products brand with optimized storefront structure, product organization, cleaner purchase flows, and conversion-focused shopping experiences.',
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
    logo: '',
    description: 'Complete Shopify ecommerce store for health products with product browsing, collection structure, visual merchandising, responsive storefront pages, and conversion-focused purchase flows.',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Commerce'],
    link: '',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'ArranBilling',
    year: '2024',
    status: 'GitHub',
    category: 'Operations',
    images: shots.billing,
    logo: logos.arran,
    description: 'Accounting and inventory management system tailored for garment, knitting, and printing operations with GST-ready accounting, purchase and sales workflows, payables, receivables, and reporting.',
    tech: ['Laravel', 'Livewire', 'PHP', 'MySQL', 'GST'],
    link: '',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'Edulearn',
    year: '2024',
    status: 'GitHub',
    category: 'Education',
    images: ['/assets/projects/atha.png'],
    logo: '',
    description: 'Structured learning management platform supporting onboarding-to-learning workflows, course management, tutorial delivery, student access, admin controls, and scalable educational content operations.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Admin Panel', 'LMS'],
    link: '',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'TechBuds',
    year: '2024',
    status: 'Live',
    category: 'Services',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/techbuds/Screenshot%202026-05-20%20153008.png',
      'https://ik.imagekit.io/codebyjerry/works/techbuds/Screenshot%202026-05-20%20152941.png',
      'https://ik.imagekit.io/codebyjerry/works/techbuds/Screenshot%202026-05-20%20153039.png',
      'https://ik.imagekit.io/codebyjerry/works/techbuds/Screenshot%202026-05-20%20153056.png',
      'https://ik.imagekit.io/codebyjerry/works/techbuds/Screenshot%202026-05-20%20153123.png',
    ],
    logo: logos.techbuds,
    description: 'Digital services platform positioned around web engineering, mobile solutions, SEO systems, business platforms, and branding services with conversion-focused service presentation.',
    tech: ['React', 'Tailwind CSS', 'SEO', 'Lead Forms', 'Branding'],
    link: 'https://techbuds.online/',
    github: 'https://github.com/code-by-jerry',
  },
  {
    title: 'DestroSolutions',
    year: '2025',
    status: 'GitHub',
    category: 'Branding',
    images: ['/assets/projects/jippymart.png'],
    logo: logos.destro,
    description: 'Software-defined vehicles branding platform focused on technical positioning, corporate communication, and scalable content presentation for vehicle technology solutions.',
    tech: ['Laravel', 'PHP', 'MySQL', 'GSAP', 'Branding'],
    link: '',
    github: 'https://github.com/code-by-jerry',
  },
]

const categories = ['All', 'Construction', 'Real Estate', 'Commerce', 'Operations', 'Services', 'Education', 'Portfolio', 'Branding']

function ProjectLogo({ project }) {
  const initials = project.title
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="flex h-16 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-white p-3 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] ring-1 ring-black/[0.03]">
      {project.logo ? (
        <img
          src={project.logo}
          alt={`${project.title} logo`}
          loading="lazy"
          className="max-h-10 max-w-full object-contain contrast-125 saturate-110"
        />
      ) : (
        <span className="text-sm font-black uppercase tracking-tight text-primary">{initials}</span>
      )}
    </div>
  )
}

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
      <SiteHeader />
      {lightbox && <Lightbox images={lightbox.images} title={lightbox.title} onClose={() => setLightbox(null)} />}

      <main className="relative z-10 mx-auto max-w-3xl px-5 pb-12 pt-28 sm:px-6 sm:pb-14 md:px-10 lg:pb-16 lg:pt-32">
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
          <div className="mt-6">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/82 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary transition-all hover:border-accent/30 hover:text-accent"
            >
              View Detailed Case Studies
              <FaExternalLinkAlt size={10} />
            </Link>
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
                  ? 'border-transparent accent-gradient text-white shadow-[0_14px_34px_-22px_rgba(17, 24, 39,0.72)]'
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
                  <div className="flex min-w-0 items-start gap-3">
                    <ProjectLogo project={project} />
                    <div className="min-w-0">
                      <h2 className="font-display text-base font-bold leading-snug text-primary transition-colors group-hover:text-accent">
                        {project.title}
                      </h2>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-text-secondary/70">
                        {project.category} - {project.year} - {project.status}
                      </p>
                    </div>
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

                <p className="mt-2 line-clamp-3 text-xs leading-6 text-text-secondary">{project.description}</p>

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
