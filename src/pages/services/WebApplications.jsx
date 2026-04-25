import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle, FaCode, FaDatabase, FaRocket, FaUsers, FaChartLine, FaShieldAlt, FaClock, FaGlobe } from 'react-icons/fa'

const processSteps = [
  {
    title: 'Discovery & Planning',
    description: 'We analyze your business requirements, user workflows, and technical constraints to create a comprehensive project roadmap.',
    icon: FaUsers,
  },
  {
    title: 'Architecture Design',
    description: 'Design scalable system architecture, database schema, and API structure that supports your business growth.',
    icon: FaCode,
  },
  {
    title: 'Development & Testing',
    description: 'Build the application with modern technologies, rigorous testing, and continuous integration practices.',
    icon: FaRocket,
  },
  {
    title: 'Deployment & Support',
    description: 'Deploy to production with monitoring, provide training, and offer ongoing support for system maintenance.',
    icon: FaChartLine,
  },
]

const features = [
  {
    title: 'Custom Business Logic',
    description: 'Tailored workflows and business rules that match your exact operational needs.',
    icon: FaCode,
  },
  {
    title: 'Scalable Architecture',
    description: 'Built to handle growth from day one, with modular design for easy feature additions.',
    icon: FaDatabase,
  },
  {
    title: 'Performance Optimized',
    description: 'Fast loading times, efficient database queries, and optimized user experiences.',
    icon: FaRocket,
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security with data encryption, secure authentication, and compliance.',
    icon: FaShieldAlt,
  },
  {
    title: 'Real-time Features',
    description: 'Live updates, notifications, and collaborative features when your business needs them.',
    icon: FaClock,
  },
  {
    title: 'Mobile Responsive',
    description: 'Works perfectly on all devices, with native app feel on any screen size.',
    icon: FaGlobe,
  },
]

const technologies = [
  'Laravel', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Tailwind CSS'
]

export default function WebApplications() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Add structured data for the service page
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Web Applications Development",
      "description": "Professional custom web applications development service. Build scalable business systems, dashboards, and admin panels designed for real workflows and business growth.",
      "provider": {
        "@type": "Person",
        "name": "Jerry (Azhagirishankar K)",
        "jobTitle": "Full Stack Developer",
        "url": "https://codebyjerry.online"
      },
      "serviceType": "Web Development",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Application Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Business Systems",
              "description": "Tailored web applications built for specific business workflows and operational needs."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Admin Dashboards",
              "description": "Comprehensive admin panels with role-based access and operational insights."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Scalable Web Platforms",
              "description": "Enterprise-grade web applications designed to grow with your business."
            }
          }
        ]
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(serviceSchema)
    document.head.appendChild(script)

    // Update meta tags
    document.title = 'Custom Web Applications Development | Code by Jerry'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional custom web applications development. Build scalable business systems, dashboards, and admin panels designed for real workflows. Laravel, React, Node.js expertise.')
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen font-sans text-text selection:bg-accent selection:text-white">
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
                  <FaCode size={10} />
                  Web Applications
                </span>
              </div>

              <h1 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
                Scalable Custom Web
                <span className="bg-gradient-to-r from-accent via-[#7961F4] to-[#7c3aed] bg-clip-text text-transparent">
                  {' '}Application Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-text-secondary sm:text-xl">
                From dashboards and admin panels to complex business systems, I build web applications that solve real problems and scale with your business. No generic templates—just solutions designed for your specific workflows.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="mailto:contact@codebyjerry.online"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full accent-gradient px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(99,102,241,0.85)] sm:w-auto sm:px-8"
                >
                  Start Your Project
                  <FaArrowRight size={14} />
                </a>
                <Link
                  to="/work"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent sm:w-auto sm:px-8"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-surface/50 to-background shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)]">
                <img
                  src="https://ik.imagekit.io/codebyjerry/services/Web%20System.png"
                  alt="Custom web application dashboard showing business analytics and user management"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent mb-4">Features</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
              Built for Real Business Needs
            </h2>
            <p className="text-lg text-text-secondary">
              Every feature is designed around how your team actually works, not just what looks good in a demo.
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

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface/30">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent mb-4">Process</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
              How We Build Your Web Application
            </h2>
            <p className="text-lg text-text-secondary">
              A systematic approach that ensures your application is built right the first time.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="relative mb-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <step.icon size={24} />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-8 left-full w-full h-0.5 bg-accent/20 hidden lg:block" style={{ width: 'calc(100vw / 4 - 4rem)' }} />
                  )}
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-6 text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent mb-4">Technologies</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
              Modern Tech Stack for Reliable Results
            </h2>
            <p className="text-lg text-text-secondary">
              Using battle-tested technologies that power production applications worldwide.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium text-text-secondary shadow-[0_8px_24px_-12px_rgba(15,23,42,0.12)]"
              >
                {tech}
              </span>
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
                Ready to Build Your Custom Web Application?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Let's discuss your project requirements and create a web application that drives real business results.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:contact@codebyjerry.online"
                  className="inline-flex items-center justify-center gap-3 rounded-full accent-gradient px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(99,102,241,0.85)]"
                >
                  Start Your Project
                  <FaArrowRight size={14} />
                </a>
                <a
                  href="https://wa.me/917092936243"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent"
                >
                  Quick Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}