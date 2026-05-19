import { Link } from "react-router-dom";
import { FaArrowRight, FaBriefcase } from "react-icons/fa";
import SEO from "../components/SEO";
import SiteHeader from "../components/SiteHeader";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudiesIndex() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Case Studies",
      description:
        "Case studies showing custom business systems, web applications, eCommerce workflows, CRM systems, and scalable digital platforms built by Code by Jerry.",
      url: "https://codebyjerry.online/case-studies",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: caseStudies.map((study, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: study.title,
          url: `https://codebyjerry.online/case-studies/${study.slug}`,
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
          name: "Case Studies",
          item: "https://codebyjerry.online/case-studies",
        },
      ],
    },
  ];

  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO
        title="Case Studies | Custom Business Systems & Web Applications | Code by Jerry"
        description="Explore case studies of custom business systems, web applications, CRM workflows, eCommerce platforms, and scalable digital products built by Code by Jerry."
        keywords="custom software case studies, web application case studies, business systems, CRM platform, real estate platform, full-stack developer portfolio"
        schema={schema}
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-screen-xl px-5 pb-16 pt-28 sm:px-6 md:px-12 lg:px-20 lg:pb-24 lg:pt-32">
        <section className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
              Case Studies
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
              Real systems built around real business workflows.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            A focused archive of projects where the work went beyond screens:
            workflows, backend structure, lead capture, operations, SEO, and
            business outcomes.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="group overflow-hidden rounded-[1.75rem] border border-border/60 bg-background/95 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_28px_64px_-28px_rgba(17, 24, 39,0.2)]"
            >
              <Link to={`/case-studies/${study.slug}`} className="block">
                <div className="aspect-[16/10] overflow-hidden bg-surface">
                  <img
                    src={study.images[0]}
                    alt={study.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                    {study.category}
                  </span>
                  <span className="text-[10px] font-medium text-text-secondary/70">
                    {study.year}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-xl font-bold leading-tight text-primary">
                  {study.shortTitle}
                </h2>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {study.summary}
                </p>
                <Link
                  to={`/case-studies/${study.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent/80"
                >
                  Read Case Study
                  <FaArrowRight size={10} />
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-[2rem] border border-border/70 bg-background/90 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                Need proof for a similar project?
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-primary">
                Share the workflow you want to build or improve.
              </h2>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full accent-gradient px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_40px_-18px_rgba(17, 24, 39,0.72)] transition-all hover:-translate-y-1"
            >
              <FaBriefcase size={13} />
              Discuss Project
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
