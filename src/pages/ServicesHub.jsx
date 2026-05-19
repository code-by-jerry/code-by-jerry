import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaGlobeAsia,
  FaMobileAlt,
  FaRobot,
  FaShoppingCart,
  FaRocket,
  FaWhatsapp,
} from "react-icons/fa";
import SEO from "../components/SEO";
import SiteHeader from "../components/SiteHeader";

const whatsappProjectHref =
  "https://api.whatsapp.com/send?phone=917092936243&text=Hi%20Jerry%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.&app_absent=0";

const services = [
  {
    title: "Custom Web Applications",
    description:
      "Scalable dashboards, portals, admin systems, and workflow-driven web apps built around how your business actually operates.",
    href: "/services/custom-web-app-development",
    icon: FaCode,
    keywords: ["Business systems", "Dashboards", "Portals"],
  },
  {
    title: "eCommerce Development",
    description:
      "Online stores, checkout flows, payment integrations, and backend operations built to support sales and fulfillment.",
    href: "/services/ecommerce-development",
    icon: FaShoppingCart,
    keywords: ["Stores", "Checkout", "Payments"],
  },
  {
    title: "Mobile Applications",
    description:
      "Mobile and cross-platform app experiences connected cleanly with backend systems, APIs, and business workflows.",
    href: "/services/mobile-app-development",
    icon: FaMobileAlt,
    keywords: ["Apps", "Hybrid", "API-ready"],
  },
  {
    title: "Backend APIs & Integrations",
    description:
      "Reliable APIs, database structure, payment gateways, third-party integrations, and backend logic for growing products.",
    href: "/services/api-integration-development",
    icon: FaDatabase,
    keywords: ["APIs", "Integrations", "Backend"],
  },
  {
    title: "Business Automation",
    description:
      "Automate approvals, notifications, internal workflows, and system-to-system operations so teams save time and reduce errors.",
    href: "/services/business-automation",
    icon: FaRocket,
    keywords: ["Automation", "Workflows", "Reliability"],
  },
  {
    title: "SEO & Performance Growth",
    description:
      "Technical SEO, performance optimization, Core Web Vitals improvements, and conversion-focused growth foundations.",
    href: "/services/seo-performance-optimization",
    icon: FaChartLine,
    keywords: ["SEO", "Speed", "Growth"],
  },
];

const outcomes = [
  "Reduce manual work with automation",
  "Launch faster with a focused MVP",
  "Improve performance and reliability",
  "Connect tools through clean APIs",
  "Build systems your team can operate daily",
  "Choose the right stack for the project",
];

export default function ServicesHub() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Full-Stack Development Services",
      description:
        "Stack-flexible full-stack development services for business systems, custom web applications, eCommerce platforms, APIs, automation, mobile apps, and startup MVPs.",
      url: "https://codebyjerry.online/services",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `https://codebyjerry.online${service.href}`,
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
          name: "Services",
          item: "https://codebyjerry.online/services",
        },
      ],
    },
  ];

  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO
        title="Full-Stack Development Services | Business Systems, APIs & eCommerce | Code by Jerry"
        description="Stack-flexible full-stack development services for custom web apps, business systems, eCommerce platforms, APIs, automation, mobile apps, and startup MVPs."
        keywords="full-stack development services, custom web application development, business software developer, eCommerce development, API integration developer, business automation, startup MVP developer"
        schema={schema}
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-screen-xl px-5 pb-16 pt-28 sm:px-6 md:px-12 lg:px-20 lg:pb-24 lg:pt-32">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
              Services
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
              Full-stack development for scalable business systems.
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
              I help startups, agencies, eCommerce brands, and growing
              businesses build practical digital systems using the right
              technology for the problem, not a one-stack-for-everything
              approach.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full accent-gradient px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_40px_-18px_rgba(17, 24, 39,0.72)] transition-all hover:-translate-y-1"
              >
                Discuss a Project
                <FaArrowRight size={11} />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary transition-all hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
              >
                View Case Studies
              </a>
              <a
                href={whatsappProjectHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary transition-all hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
              >
                <FaWhatsapp size={14} />
                WhatsApp Jerry
              </a>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex min-h-[23rem] flex-col justify-between rounded-[1.75rem] border border-border/60 bg-background/95 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_28px_64px_-28px_rgba(17, 24, 39,0.2)]"
              >
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon size={18} />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-bold leading-tight text-primary">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-text-secondary">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-border/60 bg-surface px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-text-secondary"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={service.href}
                  className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent/80"
                >
                  View Service
                  <FaArrowRight size={10} />
                </Link>
              </article>
            );
          })}
        </section>

        <section className="mt-12 overflow-hidden rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#4f46e5_100%)] p-6 text-white shadow-[0_32px_90px_-40px_rgba(37,99,235,0.42)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/64">
                Outcomes
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Built around the business result, then matched to the right
                stack.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                The goal is not to sell a framework. The goal is to design a
                system that fits your workflow, budget, timeline, and growth
                path.
              </p>
              <Link
                to="/remote-full-stack-developer-india"
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-1 hover:bg-white/15"
              >
                <FaGlobeAsia size={13} />
                Remote Developer India
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/8 p-4 text-sm leading-6 text-white/78"
                >
                  <FaBolt className="mt-1 shrink-0 text-accent-soft" size={13} />
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
