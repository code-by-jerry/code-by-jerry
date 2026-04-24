import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBriefcase,
  FaChartLine,
  FaBullseye,
  FaCogs,
  FaCode,
  FaCompass,
  FaQuoteLeft,
  FaEnvelope,
  FaGithub,
  FaLaptopCode,
  FaLinkedinIn,
  FaMobileAlt,
  FaPhoneAlt,
  FaRoute,
  FaRocket,
  FaSearch,
  FaServer,
  FaShoppingCart,
  FaSignal,
  FaWhatsapp,
} from 'react-icons/fa'

const services = [
  {
    title: 'Web Applications',
    description: 'Custom business systems, dashboards, and admin panels built for real workflows.',
    icon: FaLaptopCode,
    eyebrow: 'Custom Systems',
  },
  {
    title: 'eCommerce & Shopify',
    description: 'High-converting online stores with payment integrations and cleaner buying flows.',
    icon: FaShoppingCart,
    eyebrow: 'Revenue Focused',
  },
  {
    title: 'Mobile Apps',
    description: 'Flutter or hybrid app experiences connected tightly with your backend systems.',
    icon: FaMobileAlt,
    eyebrow: 'Mobile Delivery',
  },
  {
    title: 'Backend Systems',
    description: 'APIs, automation, integrations, and scalable architectures that support growth.',
    icon: FaServer,
    eyebrow: 'Core Logic',
  },
  {
    title: 'Landing Pages',
    description: 'Conversion-focused pages for ads, campaigns, launches, and lead generation.',
    icon: FaBullseye,
    eyebrow: 'Campaign Ready',
  },
  {
    title: 'SEO Optimization',
    description: 'Performance optimization and search ranking improvements for long-term visibility.',
    icon: FaSearch,
    eyebrow: 'Search Growth',
  },
]

const impactStats = [
  {
    value: 40,
    suffix: '%',
    headline: 'Faster Applications',
    label: 'Measured speed gains through cleaner architecture and leaner delivery.',
    tone: 'dark',
  },
  {
    value: 2,
    suffix: 'x',
    headline: 'Conversion Optimized Designs',
    label: 'Interfaces shaped to reduce friction and create stronger action.',
    tone: 'light',
  },
  {
    value: 10000,
    suffix: '+',
    headline: 'Users Supported by Scalable Systems',
    label: 'Platforms structured to handle real growth without falling apart.',
    tone: 'accent',
  },
  {
    staticValue: 'Secure',
    headline: 'Production-Ready Architecture',
    label: 'Built for launch with reliability, control, and long-term maintainability.',
    tone: 'soft',
  },
]

const serviceSlides = [
  {
    name: 'Web Apps',
    headline: 'Business platforms that keep teams fast and in control.',
    description: 'Dashboards, portals, and admin flows shaped around real operations.',
    image: 'https://ik.imagekit.io/codebyjerry/coj%20services/web.png',
    bigWord: 'BUILD',
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.26),rgba(99,102,241,0.08),transparent_72%)]',
    tags: ['Dashboards', 'Admin Panels'],
  },
  {
    name: 'Mobile Apps',
    headline: 'Mobile experiences connected cleanly with your backend.',
    description: 'Hybrid app interfaces built for speed, clean UX, and reliable integration.',
    image: 'https://ik.imagekit.io/codebyjerry/coj%20services/mobile-app.png',
    bigWord: 'SHIP',
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),rgba(99,102,241,0.08),transparent_72%)]',
    tags: ['Hybrid UX', 'API Ready'],
  },
  {
    name: 'eCommerce',
    headline: 'Commerce systems built to convert and scale cleanly.',
    description: 'Shopify and custom storefronts tuned for checkout, payments, and retention.',
    image: 'https://ik.imagekit.io/codebyjerry/coj%20services/ecom.png',
    bigWord: 'SELL',
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),rgba(99,102,241,0.08),transparent_72%)]',
    tags: ['Shopify', 'Payments'],
  },
  {
    name: 'SEO',
    headline: 'Search-focused pages engineered for visibility and speed.',
    description: 'Landing pages and websites shaped for ranking, growth, and measurable performance.',
    image: 'https://ik.imagekit.io/codebyjerry/coj%20services/seo-.png',
    bigWord: 'RANK',
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2),rgba(99,102,241,0.08),transparent_72%)]',
    tags: ['SEO', 'Performance'],
  },
]

const process = [
  {
    title: 'Strategy First',
    description:
      'We define business goals, user flow, and architecture before development starts.',
    icon: FaCompass,
    accent: 'bg-accent/10 text-accent',
  },
  {
    title: 'Build in Phases',
    description: 'Structured milestones allow continuous feedback and better control.',
    icon: FaCogs,
    accent: 'bg-primary/8 text-primary',
  },
  {
    title: 'Production Ready',
    description: 'Optimized, scalable systems built for real users, not just demos.',
    icon: FaRocket,
    accent: 'bg-[rgba(99,102,241,0.12)] text-accent',
  },
  {
    title: 'Support and Scale',
    description: 'Continuous improvements to help your product grow with your business.',
    icon: FaSignal,
    accent: 'bg-[rgba(139,92,246,0.12)] text-[rgb(109,40,217)]',
  },
]

const aboutHighlights = [
  {
    title: '3+ Years',
    label: 'Building production-grade systems for real business workflows.',
    tone: 'light',
  },
  {
    title: 'Performance First',
    label: 'Apps shaped for speed, clean delivery, and better user retention.',
    tone: 'accent',
  },
  {
    title: 'Business Focused',
    label: 'Solutions built around growth, operations, and measurable outcomes.',
    tone: 'light',
  },
  {
    title: 'Full Stack',
    label: 'Laravel, React, APIs, and deployment handled as one connected system.',
    tone: 'soft',
  },
]

const aboutDeliverables = [
  'Scalable architecture',
  'High-performance apps',
  'Business-focused solutions',
  'Clean and maintainable code',
]

const aboutStats = [
  {
    value: '10+',
    label: 'Projects Delivered',
  },
  {
    value: '10K+',
    label: 'Users Supported',
  },
  {
    value: '40%',
    label: 'Performance Improvement',
  },
]

const trustLogos = ['Atha Platform', 'FreshTick', 'DestroSolutions', 'Commerce Systems', 'Admin Platforms']

const trustTestimonials = [
  {
    quote:
      'Jerry builds with business clarity. The product did not just look better after the rebuild, it became faster and easier for the team to operate.',
    author: 'Product Stakeholder',
    role: 'Operations Platform',
  },
  {
    quote:
      'Strong ownership, clean delivery, and thoughtful technical decisions. The system was structured for scale instead of patched together for launch day.',
    author: 'Project Lead',
    role: 'Client Delivery Team',
  },
]

const trustMetrics = [
  {
    value: '10+',
    label: 'projects delivered across business systems, logistics, and commerce',
  },
  {
    value: '10K+',
    label: 'users supported through scalable platforms and role-based workflows',
  },
  {
    value: '40%',
    label: 'performance improvement achieved on selected production builds',
  },
]

const contactDetails = [
  {
    label: 'WhatsApp',
    value: '7092936243',
    href: 'https://wa.me/917092936243',
    icon: FaWhatsapp,
  },
  {
    label: 'Email',
    value: 'contact@codebyjerry.online',
    href: 'mailto:contact@codebyjerry.online',
    icon: FaEnvelope,
  },
  {
    label: 'Phone',
    value: '7092936243',
    href: 'tel:+917092936243',
    icon: FaPhoneAlt,
  },
  {
    label: 'LinkedIn',
    value: 'code-by-jerry',
    href: 'https://www.linkedin.com/in/code-by-jerry/',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    value: 'code-by-jerry',
    href: 'https://github.com/code-by-jerry',
    icon: FaGithub,
  },
]

const caseStudies = [
  {
    title: 'Realty',
    category: 'Real Estate Platform',
    tagline: 'Property-led product screens presented as a polished visual gallery.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174924.png?updatedAt=1776506172591',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174906.png?updatedAt=1776506172562',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175012.png?updatedAt=1776506172472',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174958.png?updatedAt=1776506172458',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180325.png?updatedAt=1776506172517',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180242.png?updatedAt=1776506172393',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175029.png?updatedAt=1776506172359',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180358.png?updatedAt=1776506172355',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175047.png?updatedAt=1776506172201',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175904.png?updatedAt=1776506172060',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175112.png?updatedAt=1776506171959',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175101.png?updatedAt=1776506171582',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175842.png?updatedAt=1776506171457',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175146.png?updatedAt=1776506171372',
    ],
  },
  {
    title: 'Nesthetix Design',
    category: 'Interior Design Portfolio',
    tagline: 'Brand-first interiors work shown through refined full-page compositions.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174304.png?updatedAt=1776506131947',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174404.png?updatedAt=1776506131779',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174512.png?updatedAt=1776506131736',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174224.png?updatedAt=1776506131740',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174324.png?updatedAt=1776506131733',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174538.png?updatedAt=1776506131619',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174447.png?updatedAt=1776506131601',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174552.png?updatedAt=1776506131374',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174755.png?updatedAt=1776506131259',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174349.png?updatedAt=1776506131185',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174742.png?updatedAt=1776506131100',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174244.png?updatedAt=1776506131014',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174143.png?updatedAt=1776506130585',
    ],
  },
  {
    title: 'Camiprod',
    category: 'Shopify Store',
    tagline: 'Commerce pages arranged as a premium product gallery with visual depth.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144833.png?updatedAt=1776506056407',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144853.png?updatedAt=1776506056398',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144548.png?updatedAt=1776506054013',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144659.png?updatedAt=1776506055429',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144745.png?updatedAt=1776506054151',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144819.png?updatedAt=1776506054135',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144802.png?updatedAt=1776506054356',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144915.png?updatedAt=1776506053788',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144641.png?updatedAt=1776506053279',
    ],
  },
  {
    title: 'Baybee',
    category: 'eCommerce Experience',
    tagline: 'Mobile-first storefront visuals surfaced as a focused case-study gallery.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181456.png?updatedAt=1776505955612',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181416.png?updatedAt=1776505955600',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181443.png?updatedAt=1776505955588',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181400.png?updatedAt=1776505955585',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181336.png?updatedAt=1776505955591',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181351.png?updatedAt=1776505955569',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181304.png?updatedAt=1776505955269',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181244.png?updatedAt=1776505955284',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181232.png?updatedAt=1776505955229',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181206.png?updatedAt=1776505955012',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181222.png?updatedAt=1776505954940',
    ],
  },
  {
    title: 'Atha Constructions',
    category: 'Construction Website',
    tagline: 'Lead-generation and CMS pages displayed with the same editorial gallery rhythm.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145530.png?updatedAt=1776505896460',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145546.png?updatedAt=1776505896414',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145656.png?updatedAt=1776505896444',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145624.png?updatedAt=1776505896411',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145311.png?updatedAt=1776505896420',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145446.png?updatedAt=1776505896420',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145432.png?updatedAt=1776505896428',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145605.png?updatedAt=1776505896413',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145404.png?updatedAt=1776505896421',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145328.png?updatedAt=1776505896447',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145343.png?updatedAt=1776505896417',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145640.png?updatedAt=1776505896409',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145517.png?updatedAt=1776505896171',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145501.png?updatedAt=1776505896177',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145219.png?updatedAt=1776505895590',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145126.png?updatedAt=1776505895521',
    ],
  },
  {
    title: 'Area24One',
    category: 'Multi-Vertical Company Site',
    tagline: 'Enterprise screens and landing flows surfaced in a more visual showcase format.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180920.png?updatedAt=1776505783378',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180816.png?updatedAt=1776505783376',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180731.png?updatedAt=1776505783393',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180834.png?updatedAt=1776505783335',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180935.png?updatedAt=1776505783299',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180906.png?updatedAt=1776505783307',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180753.png?updatedAt=1776505783326',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180809.png?updatedAt=1776505783224',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180640.png?updatedAt=1776505783223',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180655.png?updatedAt=1776505783135',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180709.png?updatedAt=1776505783173',
    ],
  },
]

function HeroServiceShowcase() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviceSlides.length)
    }, 4200)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="freelance-showcase relative flex min-h-[540px] flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-background/70 p-4 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.22)] backdrop-blur-sm sm:min-h-[620px] sm:p-6 lg:h-full lg:min-h-[34rem] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
      <div className="pointer-events-none absolute -left-8 top-6 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.82)] blur-3xl sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute right-0 top-14 h-48 w-48 rounded-full bg-[rgba(99,102,241,0.14)] blur-3xl sm:h-64 sm:w-64" />
      <div className="pointer-events-none absolute bottom-20 right-12 h-36 w-36 rounded-full bg-[rgba(139,92,246,0.14)] blur-3xl sm:h-52 sm:w-52" />

      <div className="relative flex-1 overflow-hidden">
        {serviceSlides.map((slide, index) => {
          const isActive = index === activeSlide

          return (
            <article
              key={slide.name}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
              }`}
            >
              <div className="grid h-full grid-rows-[auto_1fr] gap-5 sm:gap-8 lg:gap-8">
                <div className="relative z-10">
                  <div className="max-w-xl">
                    <div className="mt-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-text-secondary/45">
                        {slide.name}
                      </p>
                      <h3 className="mt-2 max-w-xl font-display text-2xl font-bold leading-tight text-primary sm:text-[2rem] lg:text-[2.15rem] lg:leading-[1.02]">
                        {slide.headline}
                      </h3>
                    </div>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-text-secondary sm:text-[15px]">
                      {slide.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                      {slide.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative mt-2 flex min-h-[220px] items-end justify-center sm:min-h-[300px] lg:mt-0 lg:min-h-0">
                  <span className="pointer-events-none absolute inset-x-0 top-0 hidden text-center font-display text-[4.4rem] font-bold leading-none text-primary/[0.03] sm:block sm:text-[6rem] lg:text-[7.6rem]">
                    {slide.bigWord}
                  </span>
                  <div
                    className={`pointer-events-none absolute inset-x-6 bottom-5 h-24 blur-3xl sm:inset-x-8 sm:bottom-auto sm:top-10 sm:h-48 lg:inset-x-12 lg:top-12 lg:h-56 ${slide.glow}`}
                  />

                  <img
                    src={slide.image}
                    alt={`${slide.name} service visual`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    className={`relative z-10 mx-auto block h-auto w-full max-w-[290px] object-contain object-center transition-all duration-700 ease-out sm:max-w-[420px] lg:absolute lg:inset-x-0 lg:bottom-0 lg:max-w-[560px] ${
                      isActive ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-[0.98] opacity-0'
                    }`}
                  />
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="relative z-30 mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2 sm:mt-4 sm:gap-x-5 lg:justify-start">
        {serviceSlides.map((slide, index) => (
          <button
            key={slide.name}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-pressed={index === activeSlide}
            className={`group inline-flex items-center gap-2 text-left text-[10px] font-bold uppercase tracking-[0.32em] transition-colors sm:text-[11px] ${
              index === activeSlide ? 'text-primary' : 'text-text-secondary/45 hover:text-primary'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                index === activeSlide ? 'bg-accent' : 'bg-text-secondary/25 group-hover:bg-primary/50'
              }`}
            />
            {slide.name}
          </button>
        ))}
      </div>
    </div>
  )
}

function HighImpactSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1)
      return
    }

    let frameId = 0
    let startTime = 0
    const duration = 1400

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp

      const elapsed = timestamp - startTime
      const rawProgress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3)

      setProgress(easedProgress)

      if (rawProgress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frameId)
  }, [isVisible])

  const formatValue = (stat) => {
    if (stat.staticValue) return stat.staticValue

    const currentValue = Math.round(stat.value * progress)
    return `${new Intl.NumberFormat('en-US').format(currentValue)}${stat.suffix}`
  }

  const cardTone = {
    dark: 'bg-primary text-white border-primary',
    light: 'bg-background/90 text-primary border-border/70',
    accent: 'accent-gradient text-white border-transparent',
    soft: 'bg-surface text-primary border-border/60',
  }

  const labelTone = {
    dark: 'text-white/65',
    light: 'text-text-secondary',
    accent: 'text-white/80',
    soft: 'text-text-secondary',
  }

  return (
    <section ref={sectionRef} className="mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-14 lg:px-20">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="max-w-lg">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
            High Impact
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Results clients can feel in the product and in the business.
          </h2>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          Strong systems are useful. Measurable impact is what makes them valuable. The point is
          not just better code, but better outcomes.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {impactStats.map((stat) => (
          <article
            key={stat.headline}
            className={`flex min-h-[220px] flex-col justify-between rounded-[2rem] border p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.22)] ${cardTone[stat.tone]}`}
          >
            <div>
              <p
                className={`text-[10px] font-bold uppercase tracking-[0.3em] ${
                  stat.tone === 'dark' ? 'text-white/45' : stat.tone === 'accent' ? 'text-white/60' : 'text-text-secondary/55'
                }`}
              >
                Impact
              </p>
              <p className="mt-4 font-display text-5xl font-bold leading-none sm:text-6xl">
                {formatValue(stat)}
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold leading-tight">{stat.headline}</h3>
              <p className={`mt-4 text-sm leading-7 ${labelTone[stat.tone]}`}>{stat.label}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-14 lg:px-20">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="max-w-lg">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Services</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            What I can design, build, and optimize for your business.
          </h2>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          From customer-facing experiences to backend architecture, these are the services I offer
          when teams need serious execution instead of generic freelance output.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map(({ title, description, icon: Icon, eyebrow }) => (
          <article
            key={title}
            className="group flex min-h-[220px] flex-col justify-between rounded-[1.75rem] border border-border/70 bg-background/90 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25"
          >
            <div>
              <span className="inline-flex rounded-2xl bg-accent/8 p-3 text-accent">
                <Icon size={18} />
              </span>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.28em] text-text-secondary/55">
                {eyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-primary">
                {title}
              </h3>
            </div>

            <p className="mt-8 text-sm leading-7 text-text-secondary">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CaseStudiesSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const currentProject = caseStudies[activeProject]
  const currentImages = currentProject.images

  useEffect(() => {
    setActiveImage(0)
  }, [activeProject])

  useEffect(() => {
    if (currentImages.length < 2) return

    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % currentImages.length)
    }, 3400)

    return () => window.clearInterval(intervalId)
  }, [currentImages])

  const showPrevious = () => {
    setActiveImage((current) => (current - 1 + currentImages.length) % currentImages.length)
  }

  const showNext = () => {
    setActiveImage((current) => (current + 1) % currentImages.length)
  }

  const previousImage = currentImages[(activeImage - 1 + currentImages.length) % currentImages.length]
  const nextImage = currentImages[(activeImage + 1) % currentImages.length]

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-14 lg:px-20">
      <div className="text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
            Case Studies
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-[3.15rem] lg:leading-[1.02]">
            Portfolio works presented as a visual gallery.
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            Explore the actual project screens from the portfolio archive. Each work now appears as
            a layered gallery instead of the older case-study cards.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {caseStudies.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setActiveProject(index)}
            aria-pressed={index === activeProject}
            className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] transition-all sm:px-5 sm:text-[11px] ${
              index === activeProject
                ? 'border-primary bg-primary text-white shadow-[0_18px_40px_-26px_rgba(15,23,42,0.42)]'
                : 'border-primary/35 bg-background/90 text-text-secondary hover:border-accent hover:text-primary'
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      <div className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),rgba(255,255,255,0)_48%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(244,247,255,0.4))] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-[38%] h-48 bg-[linear-gradient(90deg,rgba(99,102,241,0.12),rgba(255,255,255,0.88),rgba(99,102,241,0.12))] blur-3xl" />

        <div className="relative z-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
            {currentProject.category}
          </p>
          <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-primary sm:text-3xl lg:text-[2.8rem]">
            {currentProject.title}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            {currentProject.tagline}
          </p>
        </div>

        <div className="relative z-10 mt-10 flex items-center justify-center py-8">
          <div className="absolute left-0 top-1/2 hidden w-[31%] -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/65 bg-white/75 opacity-90 shadow-[0_34px_70px_-40px_rgba(15,23,42,0.32)] backdrop-blur md:block lg:left-4">
            <img
              src={previousImage}
              alt={`${currentProject.title} previous preview`}
              loading="lazy"
              className="block h-auto w-full bg-white"
            />
          </div>

          <div className="absolute right-0 top-1/2 hidden w-[31%] -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/65 bg-white/75 opacity-90 shadow-[0_34px_70px_-40px_rgba(15,23,42,0.32)] backdrop-blur md:block lg:right-4">
            <img
              src={nextImage}
              alt={`${currentProject.title} next preview`}
              loading="lazy"
              className="block h-auto w-full bg-white"
            />
          </div>

          <div className="relative z-20 w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 shadow-[0_42px_90px_-42px_rgba(15,23,42,0.42)] backdrop-blur sm:max-w-[540px] lg:max-w-[44rem]">
            <img
              key={`${currentProject.title}-${activeImage}`}
              src={currentImages[activeImage]}
              alt={`${currentProject.title} screenshot ${activeImage + 1}`}
              loading="lazy"
              className="block h-auto w-full bg-white transition-all duration-500"
            />
          </div>
        </div>

        <div className="relative z-10 mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous screenshot"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/25 bg-background/90 text-primary transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <FaArrowRight className="rotate-180" size={15} />
          </button>

          <p className="min-w-[110px] text-center text-[10px] font-bold uppercase tracking-[0.28em] text-text-secondary/70 sm:min-w-[130px]">
            {String(activeImage + 1).padStart(2, '0')} / {String(currentImages.length).padStart(2, '0')}
          </p>

          <button
            type="button"
            onClick={showNext}
            aria-label="Show next screenshot"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/25 bg-background/90 text-primary transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <FaArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const highlightTone = {
    light: 'bg-background/90 border-border/70 text-primary',
    accent: 'accent-gradient border-transparent text-white',
    soft: 'bg-surface border-border/60 text-primary',
  }

  const highlightTextTone = {
    light: 'text-text-secondary',
    accent: 'text-white/80',
    soft: 'text-text-secondary',
  }

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-14 lg:px-20">
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-primary bg-[linear-gradient(145deg,#111827_0%,#0b0b0b_48%,#050816_100%)] px-6 py-8 text-white shadow-[0_28px_70px_-38px_rgba(15,23,42,0.5)] sm:px-8 sm:py-10 lg:px-10">
          <div className="pointer-events-none absolute -left-8 top-10 h-36 w-36 rounded-full bg-[rgba(99,102,241,0.24)] blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[rgba(139,92,246,0.16)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl" />

          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-white/48">About</p>
            <h2 className="mt-4 max-w-lg font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.8rem] lg:leading-[1.02]">
              The Engineer Behind Scalable Business Systems
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
              Full Stack Engineer with 3+ years of experience building scalable web and mobile
              platforms.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
              Specialized in Laravel, React, and performance-driven systems.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutDeliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent-soft">
                    +
                  </span>
                  <span className="text-sm leading-6 text-white/86">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutHighlights.map((item) => (
            <article
              key={item.title}
              className={`flex min-h-[188px] flex-col justify-between rounded-[1.75rem] border p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 ${highlightTone[item.tone]}`}
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                  item.tone === 'accent'
                    ? 'bg-white/12 text-white'
                    : 'bg-accent/8 text-accent'
                }`}
              >
                <FaCode size={17} />
              </div>

              <div className="mt-8">
                <p className="font-display text-3xl font-bold leading-none text-primary">
                  <span className={item.tone === 'accent' ? 'text-white' : 'text-primary'}>
                    {item.title}
                  </span>
                </p>
                <p className={`mt-4 text-sm leading-7 ${highlightTextTone[item.tone]}`}>
                  {item.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-border/70 bg-background/88 px-6 py-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.16)] sm:px-8 lg:px-10">
        <div className="grid gap-6 text-center sm:grid-cols-3">
          {aboutStats.map((item, index) => (
            <div
              key={item.label}
              className={`py-2 ${index < aboutStats.length - 1 ? 'sm:border-r sm:border-border/70' : ''}`}
            >
              <p className="font-display text-3xl font-bold text-primary sm:text-[2rem]">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section className="mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-14 lg:px-20">
      <div className="rounded-[2.25rem] border border-border/70 bg-background/88 p-6 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.18)] backdrop-blur sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Trust</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-[3rem] lg:leading-[1.02]">
              Credibility built through shipped work, not generic freelance claims.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            This section is here to answer the quiet client question: can this person actually
            deliver? The proof comes from production systems, measurable gains, and work shaped
            around real operations.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {trustLogos.map((item) => (
            <div
              key={item}
              className="rounded-full border border-border/70 bg-surface/80 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-text-secondary shadow-[0_12px_32px_-26px_rgba(15,23,42,0.18)]"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="grid gap-5">
            {trustTestimonials.map((item, index) => (
              <article
                key={item.quote}
                className={`rounded-[1.75rem] border p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.16)] ${
                  index === 0
                    ? 'bg-primary text-white border-primary'
                    : 'bg-surface/85 text-primary border-border/70'
                }`}
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                    index === 0 ? 'bg-white/10 text-white' : 'bg-accent/8 text-accent'
                  }`}
                >
                  <FaQuoteLeft size={16} />
                </span>

                <p
                  className={`mt-6 text-base leading-8 sm:text-[1.05rem] ${
                    index === 0 ? 'text-white/86' : 'text-text-secondary'
                  }`}
                >
                  {item.quote}
                </p>

                <div
                  className={`mt-6 border-t pt-4 ${
                    index === 0 ? 'border-white/10' : 'border-border/70'
                  }`}
                />
                <p className={`text-sm font-semibold ${index === 0 ? 'text-white' : 'text-primary'}`}>
                  {item.author}
                </p>
                <p className={`mt-1 text-[11px] uppercase tracking-[0.22em] ${
                  index === 0 ? 'text-white/50' : 'text-text-secondary/55'
                }`}>
                  {item.role}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[2rem] accent-gradient p-[1px] shadow-[0_24px_60px_-35px_rgba(99,102,241,0.3)]">
            <div className="h-full rounded-[calc(2rem-1px)] bg-background px-6 py-6 sm:px-7 sm:py-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                Proof Points
              </p>
              <div className="mt-6 grid gap-5">
                {trustMetrics.map((item, index) => (
                  <div
                    key={item.label}
                    className={`pb-5 ${
                      index < trustMetrics.length - 1 ? 'border-b border-border/70' : ''
                    }`}
                  >
                    <p className="font-display text-4xl font-bold leading-none text-primary">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-text-secondary">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function FreelanceLanding() {
  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />

      <div className="relative z-10">
        <section className="mx-auto max-w-screen-xl px-6 py-6 md:px-12 md:py-8 lg:px-20">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5 md:gap-5 md:pb-6">
            <Link to="/" className="flex min-w-0 items-center gap-3 sm:gap-4" aria-label="Code by Jerry home">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-background/90 shadow-[0_12px_32px_-24px_rgba(15,23,42,0.28)]">
                <img
                  src="/logo.png"
                  alt="Code by Jerry logo"
                  className="h-full w-full object-cover"
                />
              </span>

              <span className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-[0.35em] text-accent">
                  Code by Jerry
                </span>
                <span className="mt-2 block text-sm font-bold text-primary md:text-[15px]">
                  Building scalable, production-grade platforms used by real businesses
                </span>
              </span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/developer"
                aria-label="Developer profile"
                title="Developer Profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/85 text-text-secondary shadow-[0_12px_32px_-24px_rgba(15,23,42,0.35)] transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <FaCode size={15} />
              </Link>
              <Link
                to="/work"
                aria-label="Work archive"
                title="Work Archive"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/85 text-text-secondary shadow-[0_12px_32px_-24px_rgba(15,23,42,0.35)] transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <FaBriefcase size={14} />
              </Link>
              <a
                href="mailto:contact@codebyjerry.online"
                className="inline-flex h-11 items-center gap-2 rounded-full accent-gradient px-4 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_20px_40px_-25px_rgba(99,102,241,0.9)] transition-transform hover:-translate-y-0.5 sm:px-5"
              >
                <FaEnvelope size={12} />
                Start a Project
              </a>
            </div>
          </header>

          <div className="freelance-hero-grid grid gap-12 py-12 md:gap-14 md:py-14 lg:grid-cols-[0.94fr_1.06fr] lg:items-stretch lg:gap-14 lg:py-8">
            <div className="freelance-hero-copy max-w-3xl lg:flex lg:h-full lg:flex-col lg:justify-center">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                Available for freelance projects
              </p>
              <h2 className="freelance-hero-title max-w-4xl font-display text-4xl font-bold leading-[0.94] text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                I Build Scalable Web & Mobile Solutions for Growing Businesses
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8 md:text-lg">
                From web apps and dashboards to eCommerce, Shopify, and mobile apps - I deliver
                complete, high-performance digital systems.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="mailto:contact@codebyjerry.online"
                  className="inline-flex items-center justify-center gap-3 rounded-full accent-gradient px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-transform hover:-translate-y-1 sm:justify-start sm:px-7"
                >
                  Start a Project
                  <FaArrowRight size={12} />
                </a>
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-background/80 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:border-accent hover:text-accent sm:justify-start sm:px-7"
                >
                  View Work
                </Link>
              </div>

              
            </div>

            <HeroServiceShowcase />
          </div>
        </section>

        <HighImpactSection />

        <ServicesSection />

        <CaseStudiesSection />

        <AboutSection />

        <TrustSection />

        <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 lg:px-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
              How I Work
            </p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-[3rem] lg:leading-[1.03]">
              A clear process that delivers real results, not freelance chaos.
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {process.map(({ title, description, icon: Icon, accent }) => (
              <article
                key={title}
                className="group rounded-[1.75rem] border border-border/70 bg-background/88 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-[0_28px_70px_-40px_rgba(99,102,241,0.22)] sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${accent}`}
                  >
                    <Icon size={20} />
                  </span>

                  <div className="min-w-0">
                    <h4 className="font-display text-xl font-bold leading-tight text-primary sm:text-[1.35rem]">
                      {title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-[15px]">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 pb-16 md:px-12 lg:px-20 lg:pb-24">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-[linear-gradient(135deg,#0f172a_0%,#111827_38%,#1d4ed8_100%)] px-6 py-10 text-white shadow-[0_32px_90px_-40px_rgba(37,99,235,0.42)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="pointer-events-none absolute -left-10 top-0 h-44 w-44 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-10 h-52 w-52 rounded-full bg-[rgba(99,102,241,0.24)] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[rgba(139,92,246,0.18)] blur-3xl" />

            <div className="relative z-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
              <div className="max-w-3xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
                  Final CTA
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[3.2rem] lg:leading-[1]">
                  Let&apos;s Build Something Scalable &amp; Impactful
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
                  If you need a developer who can turn a rough concept, business bottleneck, or
                  growth-stage product into a reliable system, this is the point to start the
                  conversation.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {contactDetails.map(({ label, value, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={label === 'LinkedIn' || label === 'GitHub' ? '_blank' : undefined}
                      rel={label === 'LinkedIn' || label === 'GitHub' ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2.5 text-[11px] font-medium text-white/84 backdrop-blur-sm transition-colors hover:border-white/28 hover:bg-white/12"
                    >
                      <Icon size={12} />
                      <span className="text-white/60">{label}</span>
                      <span>{value}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-0 lg:justify-end">
                <a
                  href="mailto:contact@codebyjerry.online?subject=Start%20a%20Project"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-primary shadow-[0_20px_50px_-28px_rgba(255,255,255,0.55)] transition-transform hover:-translate-y-1 sm:px-7 sm:text-xs sm:tracking-[0.2em]"
                >
                  <FaArrowRight size={12} />
                  Start a Project
                </a>
                <a
                  href="mailto:contact@codebyjerry.online?subject=Let%27s%20Talk"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/8 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/32 hover:bg-white/12 sm:px-7 sm:text-xs sm:tracking-[0.2em]"
                >
                  <FaEnvelope size={13} />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <a
        href="https://wa.me/917092936243"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full accent-gradient text-white shadow-[0_20px_45px_-20px_rgba(99,102,241,0.85)] transition-transform hover:-translate-y-1"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  )
}
