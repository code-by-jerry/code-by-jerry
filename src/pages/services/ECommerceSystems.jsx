import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaShoppingCart, FaCreditCard, FaChartLine, FaUsers, FaMobileAlt, FaShieldAlt, FaRocket, FaHeadset } from 'react-icons/fa'

const features = [
  {
    title: 'High-Conversion Checkout',
    description: 'Optimized checkout flows that reduce cart abandonment and maximize completed purchases.',
    icon: FaCreditCard,
  },
  {
    title: 'Multi-Channel Integration',
    description: 'Seamlessly connect your online store with marketplaces, social commerce, and POS systems.',
    icon: FaShoppingCart,
  },
  {
    title: 'Advanced Analytics',
    description: 'Comprehensive insights into customer behavior, sales performance, and revenue optimization.',
    icon: FaChartLine,
  },
  {
    title: 'Mobile Commerce',
    description: 'Responsive design with mobile-first checkout experiences that drive mobile conversions.',
    icon: FaMobileAlt,
  },
  {
    title: 'Customer Management',
    description: 'CRM integration, customer segmentation, and personalized shopping experiences.',
    icon: FaUsers,
  },
  {
    title: 'Security & Compliance',
    description: 'PCI-compliant payment processing with enterprise-grade security and fraud protection.',
    icon: FaShieldAlt,
  },
]

const platforms = [
  { name: 'Custom eCommerce', description: 'Tailored solutions for unique business models' },
  { name: 'Shopify Plus', description: 'Enterprise-grade Shopify development' },
  { name: 'WooCommerce', description: 'Advanced WordPress eCommerce solutions' },
  { name: 'Magento', description: 'Complex B2B and B2C platforms' },
]

export default function ECommerceSystems() {
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
      "name": "eCommerce Systems Development",
      "description": "Professional eCommerce development services. Build high-converting online stores with payment integrations, optimized checkout flows, and scalable commerce platforms.",
      "provider": {
        "@type": "Person",
        "name": "Jerry (Azhagirishankar K)",
        "jobTitle": "Full Stack Developer",
        "url": "https://codebyjerry.online"
      },
      "serviceType": "eCommerce Development",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "eCommerce Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Online Stores",
              "description": "Tailored eCommerce platforms built for specific business models and customer needs."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Payment Integration",
              "description": "Secure payment processing with multiple gateway integrations and fraud protection."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversion Optimization",
              "description": "Checkout flow optimization and UX improvements to maximize sales conversion."
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
    document.title = 'eCommerce Systems Development | Code by Jerry'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional eCommerce development. Build high-converting online stores with optimized checkout, payment integration, and scalable commerce platforms. Shopify, WooCommerce, custom solutions.')
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
                  <FaShoppingCart size={10} />
                  eCommerce Systems
                </span>
              </div>

              <h1 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
                eCommerce Systems That
                <span className="bg-gradient-to-r from-accent via-[#7961F4] to-[#7c3aed] bg-clip-text text-transparent">
                  {' '}Drive Revenue
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-text-secondary sm:text-xl">
                From Shopify stores to custom commerce platforms, I build eCommerce systems focused on conversion, not just aesthetics. Every feature is designed to increase sales and reduce cart abandonment.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="mailto:contact@codebyjerry.online"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full accent-gradient px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(99,102,241,0.85)] sm:w-auto sm:px-8"
                >
                  Start Your Store
                  <FaArrowRight size={14} />
                </a>
                <Link
                  to="/work"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent sm:w-auto sm:px-8"
                >
                  View eCommerce Work
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-surface/50 to-background shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)]">
                <img
                  src="https://ik.imagekit.io/codebyjerry/services/eCommerce%20Systems.png"
                  alt="eCommerce platform showing product catalog and checkout process"
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
              Revenue-Focused eCommerce Features
            </h2>
            <p className="text-lg text-text-secondary">
              Every feature is designed to increase conversions, reduce abandonment, and maximize customer lifetime value.
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

      {/* Platforms Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface/30">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent mb-4">Platforms</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
              Choose the Right Platform for Your Business
            </h2>
            <p className="text-lg text-text-secondary">
              From quick Shopify stores to complex custom platforms, I build on the technology that best fits your business model.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="rounded-[1.5rem] border border-border/60 bg-background/95 p-6 shadow-[0_12px_32px_-20px_rgba(15,23,42,0.12)]"
              >
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {platform.name}
                </h3>
                <p className="text-sm leading-6 text-text-secondary mb-4">
                  {platform.description}
                </p>
                <div className="flex items-center gap-2 text-accent">
                  <FaRocket size={14} />
                  <span className="text-sm font-medium">Optimized for conversions</span>
                </div>
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
                Ready to Launch Your Online Store?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Let's build an eCommerce platform that turns visitors into customers and drives real revenue growth.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:contact@codebyjerry.online"
                  className="inline-flex items-center justify-center gap-3 rounded-full accent-gradient px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(99,102,241,0.85)]"
                >
                  Start Your Store
                  <FaArrowRight size={14} />
                </a>
                <a
                  href="https://wa.me/917092936243"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent"
                >
                  Discuss Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}