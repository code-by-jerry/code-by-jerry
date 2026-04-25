import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaBuilding, FaUsers, FaChartLine, FaShieldAlt, FaRocket, FaCog } from 'react-icons/fa'
import SEO from '../../components/SEO'

const platformTypes = [
  {
    title: 'SaaS Platforms',
    description: 'Software-as-a-Service applications with subscription models, multi-tenancy, and automated billing.',
    icon: FaBuilding,
  },
  {
    title: 'Marketplaces',
    description: 'Two-sided platforms connecting buyers and sellers with escrow systems and dispute resolution.',
    icon: FaUsers,
  },
  {
    title: 'Internal Tools',
    description: 'Custom business applications for internal operations, dashboards, and workflow management.',
    icon: FaChartLine,
  },
]

const features = [
  {
    title: 'Role-Based Access',
    description: 'Granular permissions and access controls based on user roles and responsibilities.',
    icon: FaShieldAlt,
  },
  {
    title: 'Scalable Architecture',
    description: 'Built to handle growth from day one with modular design and cloud-native deployment.',
    icon: FaRocket,
  },
  {
    title: 'Workflow Automation',
    description: 'Automated business processes, notifications, and integrations that save time and reduce errors.',
    icon: FaCog,
  },
  {
    title: 'Real-time Dashboards',
    description: 'Live data visualization and analytics dashboards for monitoring business performance.',
    icon: FaChartLine,
  },
  {
    title: 'Multi-tenant Support',
    description: 'Secure data isolation and customization options for different user groups or organizations.',
    icon: FaBuilding,
  },
  {
    title: 'API-First Design',
    description: 'Comprehensive APIs for integrations, mobile apps, and third-party connections.',
    icon: FaUsers,
  },
]

export default function BusinessPlatforms() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Platforms Development",
    "description": "Professional business platform development. Build SaaS applications, marketplaces, and internal tools with role-based access, automation, and scalable architectures.",
    "provider": {
      "@type": "Person",
      "name": "Jerry (Azhagirishankar K)",
      "jobTitle": "Full Stack Developer",
      "url": "https://codebyjerry.online"
    },
    "serviceType": "Platform Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Platform Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS Platform Development",
            "description": "Custom SaaS applications with subscription management and multi-tenancy."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketplace Platforms",
            "description": "Two-sided marketplace platforms with escrow and dispute resolution."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Internal Business Tools",
            "description": "Custom applications for internal operations and workflow management."
          }
        }
      ]
    }
  }

  return (
    <div className="min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO 
        title="Business Platforms Development | Code by Jerry"
        description="Professional business platform development. Build SaaS applications, marketplaces, and internal tools with automation, role-based access, and scalable architectures."
        keywords="SaaS development, marketplace platforms, business applications, workflow automation, role-based access, scalable platforms"
        schema={serviceSchema}
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />

      {/* Sticky Header */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-border/50 bg-background/90 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 md:px-12 lg:px-20">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Code by Jerry home">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-background/90 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.28)]">
              <img src="/logo.png" alt="Code by Jerry logo" className="h-full w-full object-cover" />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-accent sm:tracking-[0.35em]">Code by Jerry</span>
              <span className="mt-1 block max-w-[10rem] truncate text-[11px] font-medium leading-none text-text-secondary/80 sm:max-w-none">Scalable systems for real businesses</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            <Link to="/" className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-secondary transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/work" className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-secondary transition-colors hover:text-primary">
              Work
            </Link>
            <a href="#contact" className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-secondary transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="mb-8">
            <a href="/#services" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary transition-colors hover:text-accent group">
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to all services
            </a>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                  <FaBuilding size={10} />
                  Business Platforms
                </span>
              </div>

              <h1 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
                Enterprise Business Platforms
                <span className="bg-gradient-to-r from-accent via-[#7961F4] to-[#7c3aed] bg-clip-text text-transparent">
                  {' & SaaS Development'}
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-text-secondary sm:text-xl">
                From SaaS applications to internal tools, I build comprehensive business platforms with role-based access, automation, and real-time dashboards. Systems your team will actually depend on.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="mailto:contact@codebyjerry.online"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full accent-gradient px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(99,102,241,0.85)] sm:w-auto sm:px-8"
                >
                  Build Your Platform
                  <FaArrowRight size={14} />
                </a>
                <Link
                  to="/work"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent sm:w-auto sm:px-8"
                >
                  View Platform Work
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-surface/50 to-background shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)]">
                <img
                  src="https://ik.imagekit.io/codebyjerry/services/Business%20Platform.png"
                  alt="Business platform dashboard showing analytics and user management"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Types Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent mb-4">Platform Types</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
              Solutions for Every Business Model
            </h2>
            <p className="text-lg text-text-secondary">
              Whether you're building a SaaS product, marketplace, or internal tool, I create platforms that scale with your business.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {platformTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-[1.5rem] border border-border/60 bg-background/95 p-6 shadow-[0_12px_32px_-20px_rgba(15,23,42,0.12)] text-center"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent mx-auto">
                  <type.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-3">
                  {type.title}
                </h3>
                <p className="text-sm leading-6 text-text-secondary">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface/30">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent mb-4">Features</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
              Enterprise-Grade Platform Features
            </h2>
            <p className="text-lg text-text-secondary">
              Built for serious business use with security, scalability, and automation at the core.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-[1.5rem] border border-border/60 bg-background/95 p-6 shadow-[0_12px_32px_-20px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_16px_48px_-20px_rgba(99,102,241,0.18)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <feature.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="rounded-[2.25rem] border border-border/70 bg-background/88 p-8 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.18)] backdrop-blur sm:p-12 lg:p-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
                Ready to Build Your Business Platform?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Let's create a comprehensive platform that powers your business operations and drives growth.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:contact@codebyjerry.online"
                  className="inline-flex items-center justify-center gap-3 rounded-full accent-gradient px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(99,102,241,0.85)]"
                >
                  Start Platform Project
                  <FaArrowRight size={14} />
                </a>
                <a
                  href="https://wa.me/917092936243"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent"
                >
                  Discuss Your Vision
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}