import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBolt,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaGlobeAsia,
  FaRocket,
  FaWhatsapp,
} from "react-icons/fa";
import SEO from "../components/SEO";
import SiteHeader from "../components/SiteHeader";

const whatsappHref =
  "https://api.whatsapp.com/send?phone=917092936243&text=Hi%20Jerry%2C%20I%27m%20looking%20for%20a%20remote%20full-stack%20developer%20for%20a%20business%20project.&app_absent=0";

const services = [
  {
    title: "Custom Web Applications",
    text: "Dashboards, portals, admin panels, workflow tools, and web apps built around your business process.",
    icon: FaCode,
  },
  {
    title: "APIs & Backend Systems",
    text: "Database structure, integrations, payment flows, authentication, and backend logic that stays maintainable.",
    icon: FaDatabase,
  },
  {
    title: "MVPs & Business Platforms",
    text: "Focused product builds for startups, agencies, and businesses that need to launch without overbuilding.",
    icon: FaRocket,
  },
];

const reasons = [
  "Remote collaboration with clear communication and milestone-based delivery",
  "Stack-flexible development based on the project, not a fixed framework bias",
  "Experience across business systems, eCommerce, APIs, dashboards, and SEO-friendly sites",
  "Practical planning before development so scope, budget, and workflow stay clear",
];

export default function RemoteFullStackDeveloperIndia() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Code by Jerry",
      url: "https://codebyjerry.online/remote-full-stack-developer-india",
      areaServed: ["India", "Remote"],
      description:
        "Remote full-stack developer in India building custom web applications, business systems, APIs, eCommerce platforms, dashboards, and startup MVPs.",
      founder: {
        "@type": "Person",
        name: "Jerry",
        jobTitle: "Remote Full-Stack Developer",
      },
      sameAs: ["https://codebyjerry.online/"],
      serviceType: [
        "Full-stack development",
        "Custom web application development",
        "Business software development",
        "API integration development",
        "Startup MVP development",
      ],
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
          name: "Remote Full-Stack Developer India",
          item: "https://codebyjerry.online/remote-full-stack-developer-india",
        },
      ],
    },
  ];

  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO
        title="Remote Full-Stack Developer India | Web Apps, APIs & Business Systems | Code by Jerry"
        description="Hire a remote full-stack developer in India for custom web applications, APIs, dashboards, eCommerce platforms, startup MVPs, and scalable business systems."
        keywords="remote full-stack developer India, hire full-stack developer India, custom web application developer India, business software developer India, API developer India, startup MVP developer India"
        canonical="https://codebyjerry.online/remote-full-stack-developer-india"
        schema={schema}
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-screen-xl px-5 pb-16 pt-28 sm:px-6 md:px-12 lg:px-20 lg:pb-24 lg:pt-32">
        <section className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
              Remote Full-Stack Developer India
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
              Build practical business systems with a remote full-stack developer.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
              I help businesses, startups, and agencies turn ideas, workflows,
              and operational problems into reliable web applications, APIs,
              dashboards, eCommerce systems, and MVPs.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full accent-gradient px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_40px_-18px_rgba(17, 24, 39,0.72)] transition-all hover:-translate-y-1"
              >
                Discuss a Project
                <FaArrowRight size={11} />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary transition-all hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
              >
                <FaWhatsapp size={14} />
                WhatsApp Jerry
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-background/95 p-6 shadow-[0_28px_70px_-38px_rgba(15,23,42,0.22)] sm:p-8">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <FaGlobeAsia size={18} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                  Work Style
                </p>
                <h2 className="font-display text-2xl font-bold text-primary">
                  Remote, clear, and outcome-focused.
                </h2>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex gap-3 text-sm leading-7 text-text-secondary">
                  <FaCheckCircle className="mt-1.5 shrink-0 text-accent" size={14} />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-[1.5rem] border border-border/60 bg-background/95 p-6 shadow-[0_22px_54px_-38px_rgba(15,23,42,0.2)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon size={16} />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-primary">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {service.text}
                </p>
              </article>
            );
          })}
        </section>

        <section className="mt-12 overflow-hidden rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,#0f172a_0%,#111827_46%,#4f46e5_100%)] p-6 text-white shadow-[0_32px_90px_-40px_rgba(37,99,235,0.42)] sm:p-8 lg:p-10">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/64">
                Best Fit
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Useful when you need one person who can plan, build, and connect the system.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "New business web app or MVP",
                "Existing site that needs better structure",
                "Internal tool or admin dashboard",
                "API, payment, CRM, or automation work",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/8 p-4 text-sm leading-6 text-white/78"
                >
                  <FaBolt className="mt-1 shrink-0 text-accent-soft" size={13} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-border/70 bg-background/90 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                Start With The Workflow
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-primary">
                Share what you want to build, improve, or automate.
              </h2>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                I will review the details and respond with a practical next
                step, not a generic package.
              </p>
            </div>
            <Link
              to="/#work"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary transition-all hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
            >
              View Case Studies
              <FaArrowRight size={11} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
