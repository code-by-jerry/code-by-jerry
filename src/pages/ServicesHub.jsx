import { Link } from "react-router-dom";
import { useState } from "react";
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
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/web_serv.png",
    keywords: ["Business systems", "Dashboards", "Portals"],
  },
  {
    title: "eCommerce Development",
    description:
      "Online stores, checkout flows, payment integrations, and backend operations built to support sales and fulfillment.",
    href: "/services/ecommerce-development",
    icon: FaShoppingCart,
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/ecommerce_serv.png",
    keywords: ["Stores", "Checkout", "Payments"],
  },
  {
    title: "Mobile Applications",
    description:
      "Mobile and cross-platform app experiences connected cleanly with backend systems, APIs, and business workflows.",
    href: "/services/mobile-app-development",
    icon: FaMobileAlt,
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/Mobile_serv.png",
    keywords: ["Apps", "Hybrid", "API-ready"],
  },
  {
    title: "Backend APIs & Integrations",
    description:
      "Reliable APIs, database structure, payment gateways, third-party integrations, and backend logic for growing products.",
    href: "/services/api-integration-development",
    icon: FaDatabase,
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/backend_serv.png",
    keywords: ["APIs", "Integrations", "Backend"],
  },
  {
    title: "Business Automation",
    description:
      "Automate approvals, notifications, internal workflows, and system-to-system operations so teams save time and reduce errors.",
    href: "/services/business-automation",
    icon: FaRocket,
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/Business_serv.png",
    keywords: ["Automation", "Workflows", "Reliability"],
  },
  {
    title: "SEO & Performance Growth",
    description:
      "Technical SEO, performance optimization, Core Web Vitals improvements, and conversion-focused growth foundations.",
    href: "/services/seo-performance-optimization",
    icon: FaChartLine,
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/seo_growth_serv.png",
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

function ServiceCard({ service }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className=""
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full transition-transform duration-700 ease-out"
        style={{
          transformStyle: "preserve-3d",
          minHeight: "23rem",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-[1.75rem] bg-transparent"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="h-full w-full object-contain"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/95 to-transparent" />
          <div className="absolute left-0 right-0 bottom-0 p-6 text-center">
            <h2 className="font-display text-2xl font-bold leading-tight text-primary">
              {service.title}
            </h2>
          </div>
        </div>

        <div
          className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[1.75rem] bg-primary p-6 text-white"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <p className="text-sm leading-7 text-white/90">{service.description}</p>
          </div>
          <Link
            to={service.href}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-white/80"
          >
            View Service
            <FaArrowRight size={10} />
          </Link>
        </div>
      </div>
    </div>
  );
}

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
                href="/#work"
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
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
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
