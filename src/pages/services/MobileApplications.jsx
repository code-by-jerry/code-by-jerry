import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaMobileAlt, FaCodeBranch, FaSync, FaBatteryHalf, FaShieldAlt, FaRocket, FaUsers } from 'react-icons/fa'

const approaches = [
  {
    title: 'Flutter Development',
    description: 'Cross-platform mobile apps that work seamlessly on iOS and Android with single codebase.',
    icon: FaMobileAlt,
  },
  {
    title: 'React Native',
    description: 'JavaScript-based mobile development for fast iteration and code sharing with web applications.',
    icon: FaCodeBranch,
  },
  {
    title: 'Progressive Web Apps',
    description: 'Web technologies that provide app-like experiences with offline capabilities and push notifications.',
    icon: FaSync,
  },
]

const features = [
  {
    title: 'Native Performance',
    description: 'Smooth animations, fast loading, and responsive interactions that feel like native apps.',
    icon: FaRocket,
  },
  {
    title: 'Offline Capability',
    description: 'Works without internet connection with smart data synchronization when online.',
    icon: FaBatteryHalf,
  },
  {
    title: 'Cross-Platform',
    description: 'Single codebase deployed to multiple platforms, reducing development time and costs.',
    icon: FaCodeBranch,
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with data encryption and secure API communications.',
    icon: FaShieldAlt,
  },
  {
    title: 'Real-time Features',
    description: 'Live updates, push notifications, and real-time collaboration features.',
    icon: FaSync,
  },
  {
    title: 'User-Centric Design',
    description: 'Intuitive interfaces designed around user behavior and business objectives.',
    icon: FaUsers,
  },
]

export default function MobileApplications() {
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
      "name": "Mobile Applications Development",
      "description": "Professional mobile app development services. Build cross-platform mobile applications with Flutter, React Native, and PWA technologies for iOS and Android.",
      "provider": {
        "@type": "Person",
        "name": "Jerry (Azhagirishankar K)",
        "jobTitle": "Full Stack Developer",
        "url": "https://codebyjerry.online"
      },
      "serviceType": "Mobile App Development",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Flutter App Development",
              "description": "Cross-platform mobile applications built with Flutter for iOS and Android."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "React Native Development",
              "description": "JavaScript-based mobile apps with React Native framework."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Progressive Web Apps",
              "description": "Web-based mobile experiences with app-like functionality."
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
    document.title = 'Mobile Applications Development | Code by Jerry'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional mobile app development. Build cross-platform applications with Flutter, React Native, and PWA technologies for iOS and Android. Native performance, offline capabilities.')
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
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                  <FaMobileAlt size={10} />
                  Mobile Applications
                </span>
              </div>

              <h1 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
                Mobile Apps That
                <span className="bg-gradient-to-r from-accent via-[#7961F4] to-[#7c3aed] bg-clip-text text-transparent">
                  {' '}Users Love
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-text-secondary sm:text-xl">
                From Flutter to React Native, I build mobile applications that deliver native performance and user experiences. Cross-platform solutions that work seamlessly on iOS and Android.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="mailto:contact@codebyjerry.online"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full accent-gradient px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(99,102,241,0.85)] sm:w-auto sm:px-8"
                >
                  Start Your App
                  <FaArrowRight size={14} />
                </a>
                <Link
                  to="/work"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent sm:w-auto sm:px-8"
                >
                  View Mobile Work
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-surface/50 to-background shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)]">
                <img
                  src="https://ik.imagekit.io/codebyjerry/services/Mobile%20&%20Integrations.png"
                  alt="Mobile application interface showing cross-platform design"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approaches Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent mb-4">Approaches</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
              Choose the Right Technology for Your App
            </h2>
            <p className="text-lg text-text-secondary">
              Different projects need different approaches. I help you choose the technology that best fits your business goals and user needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {approaches.map((approach, index) => (
              <div
                key={approach.title}
                className="rounded-[1.5rem] border border-border/60 bg-background/95 p-6 shadow-[0_12px_32px_-20px_rgba(15,23,42,0.12)] text-center"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent mx-auto">
                  <approach.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-3">
                  {approach.title}
                </h3>
                <p className="text-sm leading-6 text-text-secondary">
                  {approach.description}
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
              Mobile-First Development Features
            </h2>
            <p className="text-lg text-text-secondary">
              Modern mobile applications that provide exceptional user experiences across all devices and platforms.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
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
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Let's create a mobile application that engages users and drives business results across all platforms.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:contact@codebyjerry.online"
                  className="inline-flex items-center justify-center gap-3 rounded-full accent-gradient px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(99,102,241,0.85)]"
                >
                  Start Your App
                  <FaArrowRight size={14} />
                </a>
                <a
                  href="https://wa.me/917092936243"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent"
                >
                  Discuss Your Idea
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}