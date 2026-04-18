import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaLaptopCode,
  FaLayerGroup,
  FaRocket,
} from 'react-icons/fa'

const offers = [
  {
    title: 'Custom Web Platforms',
    description:
      'Business websites, portals, CRMs, dashboards, and full product builds designed around your workflow instead of templates.',
    icon: FaLaptopCode,
  },
  {
    title: 'Systems That Scale',
    description:
      'Laravel, React, APIs, payments, RBAC, and data models structured for growth so the build still feels solid six months later.',
    icon: FaLayerGroup,
  },
  {
    title: 'Launch Support',
    description:
      'From planning to deployment, I handle the technical delivery with a clear build process and production-minded execution.',
    icon: FaRocket,
  },
]

const proof = [
  'Production systems across real estate, commerce, enterprise, and SaaS',
  'Performance-focused builds with measurable speed and workflow improvements',
  'Comfortable owning architecture, development, and deployment end to end',
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
  'We define the business goal, user flow, and feature scope before code starts.',
  'I build in milestones so you can review progress without losing momentum.',
  'The final delivery is launch-ready, maintainable, and documented well enough to extend.',
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

export default function FreelanceLanding() {
  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />

      <div className="relative z-10">
        <section className="mx-auto max-w-screen-xl px-6 py-6 md:px-12 md:py-8 lg:px-20">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5 md:gap-5 md:pb-6">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-accent">Code by Jerry</p>
              <p className="mt-2 text-sm font-bold text-primary md:text-[15px]">
                Building scalable, production-grade platforms used by real businesses
              </p>
            </div>

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

        <section className="mx-auto grid max-w-screen-xl gap-8 px-6 pb-8 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-20">
          <div className="rounded-[2rem] border border-border/70 bg-primary px-6 py-8 text-white shadow-[0_24px_60px_-35px_rgba(11,11,11,0.55)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">What You Get</p>
            <div className="mt-6 space-y-4">
              {proof.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-sm leading-7 text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {offers.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.75rem] border border-border/70 bg-background/85 p-6 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.2)] backdrop-blur"
              >
                <span className="inline-flex rounded-2xl bg-accent/8 p-3 text-accent">
                  <Icon size={18} />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-primary">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 lg:px-20">
          <div className="grid gap-10 rounded-[2.25rem] border border-border/70 bg-background/85 p-6 shadow-[0_24px_60px_-35px_rgba(99,102,241,0.18)] backdrop-blur sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:p-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Process</p>
              <h3 className="mt-4 max-w-sm font-display text-3xl font-bold text-primary">
                Clear collaboration, not vague freelance chaos.
              </h3>
            </div>

            <div className="grid gap-4">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-border/60 bg-surface/70 px-4 py-4 sm:px-5 sm:py-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    0{index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-7 text-text-secondary">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 pb-16 md:px-12 lg:px-20 lg:pb-24">
          <div className="rounded-[2.5rem] accent-gradient p-[1px] shadow-[0_32px_90px_-40px_rgba(99,102,241,0.5)]">
            <div className="rounded-[2.45rem] bg-background px-6 py-8 sm:px-8 sm:py-10 lg:flex lg:items-end lg:justify-between lg:gap-10 lg:px-12 lg:py-14">
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Next Step</p>
                <h3 className="mt-4 font-display text-3xl font-bold text-primary md:text-4xl">
                  Need a developer who can think like a builder, not just a task taker?
                </h3>
                <p className="mt-5 text-sm leading-7 text-text-secondary md:text-base">
                  Send the rough idea, the current bottleneck, or the feature set you need. I can
                  help shape the technical direction and build it properly.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 lg:mt-0">
                <a
                  href="mailto:contact@codebyjerry.online"
                  className="inline-flex items-center gap-3 rounded-full accent-gradient px-5 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-transform hover:-translate-y-1 sm:px-7 sm:text-xs sm:tracking-[0.2em]"
                >
                  <FaEnvelope size={13} />
                  contact@codebyjerry.online
                </a>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-5 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:border-accent hover:text-accent sm:px-7 sm:text-xs sm:tracking-[0.2em]"
                >
                  See Build History
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
