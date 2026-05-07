import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import SEO from "../components/SEO";
import SiteHeader from "../components/SiteHeader";
import NotFound from "./NotFound";
import { getCaseStudyBySlug } from "../data/caseStudies";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  if (!study) return <NotFound />;

  const studyUrl = `https://codebyjerry.online/case-studies/${study.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: study.title,
      description: study.summary,
      image: study.images[0],
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": studyUrl,
      },
      author: {
        "@type": "Person",
        name: "Jerry",
        url: "https://codebyjerry.online/about",
      },
      publisher: {
        "@type": "Organization",
        name: "Code by Jerry",
        logo: {
          "@type": "ImageObject",
          url: "https://codebyjerry.online/logo.png",
        },
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
        {
          "@type": "ListItem",
          position: 3,
          name: study.shortTitle,
          item: studyUrl,
        },
      ],
    },
  ];

  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO
        title={`${study.shortTitle} Case Study | Code by Jerry`}
        description={study.summary}
        keywords="real estate platform case study, CRM workflow, lead capture system, custom web application, business platform development"
        ogImage={study.images[0]}
        ogType="article"
        schema={schema}
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-5xl px-5 pb-16 pt-28 sm:px-6 md:px-12 lg:pb-24 lg:pt-32">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-accent"
        >
          <FaArrowLeft size={10} />
          Case Studies
        </Link>

        <article className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
              {study.category}
            </span>
            <span className="text-xs font-medium text-text-secondary">
              {study.year}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
            {study.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">
            {study.summary}
          </p>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-border/60 bg-surface shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)]">
            <img
              src={study.images[0]}
              alt={study.title}
              className="aspect-[16/9] h-full w-full object-cover object-top"
            />
          </div>

          <section className="mt-10 grid gap-5 md:grid-cols-3">
            {study.results.map((result) => (
              <div
                key={result}
                className="rounded-2xl border border-border/60 bg-background/90 p-5 shadow-[0_18px_48px_-32px_rgba(15,23,42,0.18)]"
              >
                <FaCheckCircle className="text-accent" size={18} />
                <p className="mt-4 text-sm font-semibold leading-6 text-primary">
                  {result}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="rounded-[2rem] border border-border/60 bg-background/95 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                Problem
              </p>
              <p className="mt-4 text-base leading-8 text-text-secondary">
                {study.problem}
              </p>
            </div>
            <div className="rounded-[2rem] border border-border/60 bg-background/95 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                Solution
              </p>
              <p className="mt-4 text-base leading-8 text-text-secondary">
                {study.solution}
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-border/60 bg-background/95 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              Outcome
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-text-secondary">
              {study.outcome}
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  Services involved
                </h2>
                <ul className="mt-4 space-y-3">
                  {study.services.map((service) => (
                    <li
                      key={service}
                      className="flex gap-3 text-sm leading-6 text-text-secondary"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  Stack used
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/70 bg-surface px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-5 md:grid-cols-3">
            {study.images.slice(1).map((image, index) => (
              <div
                key={image}
                className="overflow-hidden rounded-2xl border border-border/60 bg-surface"
              >
                <img
                  src={image}
                  alt={`${study.shortTitle} screen ${index + 2}`}
                  loading="lazy"
                  className="aspect-[16/10] h-full w-full object-cover object-top"
                />
              </div>
            ))}
          </section>

          <section className="mt-10 rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#4f46e5_100%)] p-6 text-white shadow-[0_28px_72px_-34px_rgba(37,99,235,0.44)] sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/62">
                  Similar Project?
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Need a platform with workflows, lead capture, or admin tools?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                  Share the process you want to improve. I can help shape the
                  system and choose the right stack for the job.
                </p>
              </div>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary shadow-[0_18px_44px_-24px_rgba(255,255,255,0.7)] transition-all hover:-translate-y-1"
              >
                Send Project Details
                <FaArrowRight size={11} />
              </a>
            </div>
          </section>

          <section className="mt-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              Related Services
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {study.relatedServices.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="rounded-full border border-border/70 bg-background/82 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary transition-all hover:border-accent/30 hover:text-accent"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
