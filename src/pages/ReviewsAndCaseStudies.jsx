import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaQuoteLeft,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaBriefcase,
  FaServer,
  FaCreditCard,
  FaTruck,
  FaShieldAlt,
  FaChartLine,
  FaSearch,
  FaMobileAlt,
} from "react-icons/fa";
import SEO from "../components/SEO";
import SiteHeader from "../components/SiteHeader";

const clientReviewsData = [
  {
    id: "tilde",
    client: "Tilde",
    category: "Women's Fashion & Apparel",
    year: "2025",
    link: "https://tildeonline.com/",
    logo: "https://ik.imagekit.io/codebyjerry/assets/logo-tilde-sym.webp",
    cover: "https://ik.imagekit.io/codebyjerry/assets/tilde%20cover%20image.png",
    testimonial: {
      quote:
        "Jerry completely revamped our online store from the ground up. The modern UI, integrated product reviews, and automated shipping partner sync eliminated daily manual fulfillment friction and elevated our brand credibility.",
      author: "Founder / Brand Lead",
      role: "Tilde · tildeonline.com",
    },
    jerryRole:
      "Led end-to-end storefront redesign, structured real customer reviews for trust, implemented upsell and cross-sell funnels, and integrated logistics API partners for automated order-to-shipping synchronization.",
    keyDeliverables: [
      "Complete website revamp with modern, responsive luxury UI",
      "Trust-building architecture with verified reviews and testimonials",
      "Dynamic upsell and cross-sell recommendation modules",
      "Integrated shipping partner for automated delivery flow and real-time order sync",
    ],
    tech: ["Shopify", "Liquid", "Logistics API", "eCommerce UI", "Conversion Funnels"],
    icon: FaTruck,
  },
  {
    id: "fitobee",
    client: "Fitobee",
    category: "Men's Fashion & Activewear",
    year: "2025",
    link: "https://fitobee.com/",
    logo: "https://ik.imagekit.io/codebyjerry/assets/fitobee_logo.webp",
    cover: "https://ik.imagekit.io/codebyjerry/assets/fitobee%20cover%20image.png",
    testimonial: {
      quote:
        "The collection-themed UI overhaul made our products stand out immediately. Having precise ad pixel event tracking along with Zoho SalesIQ live engagement gave us both marketing clarity and higher lead conversion.",
      author: "Growth & Operations Team",
      role: "Fitobee · fitobee.com",
    },
    jerryRole:
      "Refactored the collection browsing UI/UX to match modern men's fashion aesthetics, set up multi-platform advertising pixels with granular event tracking, and configured Zoho SalesIQ to capture and qualify inbound buyer inquiries.",
    keyDeliverables: [
      "Modern collection-themed UI/UX redesign tailored to active apparel",
      "Multi-platform pixel integration with custom event tracking for ad campaigns",
      "Zoho SalesIQ live chat and visitor engagement for trust building",
      "Automated lead capture workflows to qualify high-intent shoppers",
    ],
    tech: ["eCommerce UX", "Meta Pixel", "Google Ads API", "Zoho SalesIQ", "Analytics"],
    icon: FaChartLine,
  },
  {
    id: "mikazo",
    client: "Mikazo Watches",
    category: "Horology & Watch Brand",
    year: "2025",
    link: "https://mikazo.in/",
    logo: "https://ik.imagekit.io/codebyjerry/assets/mikazo-logo-black.avif",
    cover: "https://ik.imagekit.io/codebyjerry/assets/mikazo%20cover%20image.png",
    testimonial: {
      quote:
        "Migrating from our legacy WordPress site was the best decision for our brand. The new storefront displays our watch collections beautifully, our Google search index issues were completely resolved, and nationwide shipping runs smoothly.",
      author: "Brand Director",
      role: "Mikazo Watches · mikazo.in",
    },
    jerryRole:
      "Engineered full platform migration from legacy WordPress to a high-speed storefront, audited and resolved search indexing penalties to establish brand authority, and integrated domestic logistics providers for reliable nationwide delivery.",
    keyDeliverables: [
      "Seamless platform migration from legacy WordPress with zero data loss",
      "Luxury watch collection curation and high-speed product displays",
      "Comprehensive technical SEO overhaul and Google search index recovery",
      "Nationwide logistics integration with live tracking across India",
    ],
    tech: ["Platform Migration", "Technical SEO", "Collection Showcase", "Shipping APIs"],
    icon: FaSearch,
  },
  {
    id: "jippymart",
    client: "JippyMart",
    category: "Food Delivery & Hyperlocal Commerce",
    year: "2025",
    link: "https://jippymart.in/mart/",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/jippymart.png",
    cover: "/preview/jippymart.png",
    testimonial: {
      quote:
        "Jerry built and stabilized our entire food delivery platform. From the customer mobile app backend to the restaurant order dispatch panel, the system handles heavy lunch and dinner rush traffic with rock-solid server performance.",
      author: "Platform Operations Head",
      role: "JippyMart · jippymart.in",
    },
    jerryRole:
      "Developed and maintained the unified 3-sided ecosystem (customer apps, restaurant portal, super-admin console), optimized server configurations and database load handling, and integrated Firebase real-time state sync with Razorpay.",
    keyDeliverables: [
      "Unified 3-sided system: customer app, restaurant portal, and centralized admin panel",
      "Robust, scalable backend architecture powering the mobile customer app",
      "Server configuration, connection pooling, and high-load traffic optimization",
      "Real-time order state synchronization via Firebase and automated Razorpay checkout",
    ],
    tech: ["Laravel", "Firebase Realtime", "MySQL", "Razorpay", "Server Tuning", "REST APIs"],
    icon: FaServer,
  },
  {
    id: "atha",
    client: "Atha Constructions",
    category: "Construction & Infrastructure",
    year: "2026",
    link: "https://athaconstruction.in/",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Atha%20Constructions.webp?updatedAt=1777100806093",
    cover: "/preview/atha.png",
    testimonial: {
      quote:
        "Our website revamp established Atha as a premier construction firm in Bangalore. The interactive cost estimator and instant WhatsApp/Email inquiry routing dramatically shortened our sales response cycle.",
      author: "Project Stakeholder",
      role: "Atha Constructions · athaconstruction.in",
    },
    jerryRole:
      "Rebuilt the public web platform with interactive estimation workflows, structured live project progress showcases to build buyer trust, and implemented direct Email and WhatsApp messaging pipelines for rapid lead handling.",
    keyDeliverables: [
      "Complete platform revamp positioning the firm as a top construction leader in Bangalore",
      "Trust factors: live project showcase, stages of construction, and verified portfolios",
      "Interactive construction cost estimator and pricing calculators",
      "Instant dual notifications: automated Email alerts and direct WhatsApp lead routing",
    ],
    tech: ["React", "Inertia.js", "Laravel", "WhatsApp API", "Email Automation", "SEO"],
    icon: FaMobileAlt,
  },
  {
    id: "managed-systems",
    client: "20+ Managed Web Businesses",
    category: "Payment, Logistics & Full-Stack Operations",
    year: "Ongoing",
    link: "https://codebyjerry.online/",
    logo: null,
    cover: null,
    testimonial: {
      quote:
        "Jerry acts as our reliable technical backbone across our client roster. From international payment gateways to shipping automation and server maintenance, he handles critical engineering workflows so our businesses never stall.",
      author: "Ecosystem Partners & Founders",
      role: "Managed Portfolio Clients",
    },
    jerryRole:
      "Ongoing technical architect and systems engineer managing 20+ live business platforms, handling payment infrastructure, third-party plugin integrations, catalog synchronization, and order fulfillment systems.",
    keyDeliverables: [
      "Domestic & international payment gateways: Razorpay, Stripe, Cashfree, and PayPal setup",
      "Logistics automation: courier partner APIs, automated label generation, and tracking sync",
      "Cart & checkout optimization: coupon engines, dynamic discount rules, and abandoned cart flows",
      "End-to-end catalog sync, inventory management, and third-party plugin maintenance",
    ],
    tech: ["Stripe", "Razorpay", "PayPal", "Logistics APIs", "Webhooks", "Plugin Architecture"],
    icon: FaCreditCard,
  },
];

export default function ReviewsAndCaseStudies() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Client Reviews & Case Studies | Code by Jerry",
      description:
        "Real client reviews, testimonials, and verified technical case studies across eCommerce revamps, backend systems, payment gateways, and business platforms built by Jerry.",
      url: "https://codebyjerry.online/reviews",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: clientReviewsData.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.client,
          description: item.jerryRole,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://codebyjerry.online/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Reviews & Case Studies",
          item: "https://codebyjerry.online/reviews",
        },
      ],
    },
  ];

  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO
        title="Client Reviews & Case Studies | Verified Work & Testimonials | Code by Jerry"
        description="Explore in-depth case studies and honest client testimonials across live eCommerce platforms, food ordering systems, high-load backends, payment gateways, and technical revamps."
        keywords="developer reviews, client testimonials, freelance web developer reviews, case studies, Tilde, Fitobee, Mikazo, JippyMart, Atha Constructions, Code by Jerry"
        schema={schema}
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-screen-xl px-5 pb-20 pt-28 sm:px-6 md:px-12 lg:px-20 lg:pb-28 lg:pt-32">
        {/* Page Hero Header */}
        <section className="border-b border-border/50 pb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                Client Reviews & Case Studies
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-surface/70 px-2.5 py-0.5 text-[10px] font-semibold text-text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Verified Client Work
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Real client feedback. Real business outcomes.
            </h1>
            <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              A comprehensive single-page archive of verified client reviews, technical deliverables, and systems work — covering storefront revamps, high-load backends, payment gateways, and logistics integrations.
            </p>
          </div>

          {/* Quick Metrics Glance */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-border/50 bg-surface/40 p-3.5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-wider text-accent">Client Reviews</p>
              <p className="mt-1 font-display text-2xl font-bold text-primary">100%</p>
              <p className="mt-0.5 text-[11px] text-text-secondary">Verified Stakeholders</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-surface/40 p-3.5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-wider text-accent">Managed Platforms</p>
              <p className="mt-1 font-display text-2xl font-bold text-primary">20+</p>
              <p className="mt-0.5 text-[11px] text-text-secondary">Businesses Maintained</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-surface/40 p-3.5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-wider text-accent">Core Focus</p>
              <p className="mt-1 font-display text-2xl font-bold text-primary">Full-Stack</p>
              <p className="mt-0.5 text-[11px] text-text-secondary">UI + Backend + APIs</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-surface/40 p-3.5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-wider text-accent">Operational Uptime</p>
              <p className="mt-1 font-display text-2xl font-bold text-primary">High-Load</p>
              <p className="mt-0.5 text-[11px] text-text-secondary">Optimized Server Config</p>
            </div>
          </div>
        </section>

        {/* All Cases & Testimonials - Structured Single-Page Stream */}
        <section className="mt-12 flex flex-col gap-10">
          {clientReviewsData.map((item, index) => {
            const Icon = item.icon || FaShieldAlt;
            return (
              <article
                key={item.id}
                id={item.id}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-surface/40 p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.1)] backdrop-blur-sm transition-all hover:border-accent/40 sm:p-7 lg:p-8"
              >
                {/* Header Strip: Logo, Title, Category & Live Link */}
                <div className="flex flex-col gap-4 border-b border-border/40 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3.5">
                    {item.logo ? (
                      <div className="flex h-12 w-14 shrink-0 items-center justify-center">
                        <img
                          src={item.logo}
                          alt={`${item.client} logo`}
                          className="max-h-10 max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon size={20} />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-accent">
                          0{index + 1}
                        </span>
                        <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">
                          {item.client}
                        </h2>
                      </div>
                      <p className="mt-0.5 text-xs font-medium text-text-secondary">
                        {item.category} · {item.year}
                      </p>
                    </div>
                  </div>

                  {item.link && item.link.startsWith("http") && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 self-start rounded-full border border-border/80 bg-background/80 px-3.5 py-1.5 text-xs font-semibold text-primary transition-all hover:border-accent hover:text-accent sm:self-auto"
                    >
                      {item.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      <FaExternalLinkAlt size={10} />
                    </a>
                  )}
                </div>

                {/* 2-Column Content: Left = Testimonial & Role, Right = Deliverables & Stack */}
                <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
                  {/* Left Column: Testimonial & Jerry's Role */}
                  <div className="flex flex-col gap-4 lg:col-span-6">
                    {/* Testimonial Quote Card */}
                    <div className="relative rounded-xl border border-primary/10 bg-primary p-5 text-white shadow-md sm:p-6">
                      <FaQuoteLeft size={18} className="text-white/30" />
                      <p className="mt-3 text-sm leading-relaxed text-white/95 sm:text-base sm:leading-7">
                        "{item.testimonial.quote}"
                      </p>
                      <div className="mt-4 border-t border-white/10 pt-3">
                        <p className="font-display text-xs font-bold uppercase tracking-wider text-white">
                          {item.testimonial.author}
                        </p>
                        <p className="text-[11px] text-white/70">
                          {item.testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Jerry's Role Box */}
                    <div className="rounded-xl border border-border/50 bg-background/60 p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                        Jerry's Engineering Role
                      </p>
                      <p className="mt-1.5 text-xs leading-5 text-text-secondary sm:text-sm sm:leading-6">
                        {item.jerryRole}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Key Deliverables & Tech Stack */}
                  <div className="flex flex-col gap-4 lg:col-span-6">
                    <div className="rounded-xl border border-border/50 bg-background/60 p-5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                        What Was Delivered & Implemented
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {item.keyDeliverables.map((d, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-text-secondary sm:text-sm">
                            <FaCheckCircle
                              size={13}
                              className="mt-1 shrink-0 text-emerald-500"
                            />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="rounded-xl border border-border/40 bg-surface/30 p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-text-secondary/70">
                        Production Technologies & Integrations
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-lg border border-border/50 bg-background/90 px-2.5 py-1 text-[10px] font-semibold text-text-secondary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Single Page Footer Action Banner */}
        <section className="mt-16 rounded-2xl border border-border/70 bg-background/90 p-6 shadow-lg sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                Have a Similar Challenge?
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
                Let's discuss what your business needs next.
              </h2>
              <p className="mt-2 text-xs leading-6 text-text-secondary sm:text-sm">
                From website revamps and ad tracking to custom backends and payment gateways — tell me what you're trying to build.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full accent-gradient px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5"
            >
              <FaBriefcase size={12} />
              Discuss Your Project
              <FaArrowRight size={10} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
