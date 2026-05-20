import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";
import RelatedCaseStudies from "./RelatedCaseStudies";

export default function ServicePageTemplate({
  serviceSlug, // used for breadcrumb link + slug display
  heroLabel,
  heroTitle,
  heroSubtitle,
  heroImageSrc,
  serviceTypeTag,
  schema,
  features,
  processSteps,
  outcomes,
  faqs,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const breadcrumbUiSchema = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: serviceSlug ? serviceSlug.replace(/-/g, " ") : heroLabel,
        item: `https://codebyjerry.online/services/${serviceSlug || ""}`,
      },
    ],
  };

  const faqPageSchema =
    Array.isArray(faqs) && faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  const normalizedSchema = Array.isArray(schema)
    ? schema
    : schema
      ? [schema]
      : [];

  const seoSchema = [
    breadcrumbUiSchema,
    ...(faqPageSchema ? [faqPageSchema] : []),
    ...normalizedSchema,
  ];

  return (
    <div className="min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO
        title={heroTitle}
        description={heroSubtitle}
        keywords={serviceTypeTag}
        schema={seoSchema}
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/50 bg-background/90 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 md:px-12 lg:px-20">
          <Link to="/" className="flex min-w-0 items-center">
            <span className="flex h-10 shrink-0 items-center justify-center overflow-hidden rounded-xl">
              <img
                src="/logo.png"
                alt="Code by Jerry logo"
                className="h-full w-auto object-contain"
              />
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            <Link
              to="/"
              className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-secondary transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-secondary transition-colors hover:text-primary"
            >
              Work
            </Link>
            <a
              href="/#contact"
              className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-secondary transition-colors hover:text-primary"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="mb-8">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary transition-colors hover:text-accent group"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              Back to all services
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                  {serviceTypeTag}
                </span>
              </div>

              <h1 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
                {heroTitle}
              </h1>

              <p className="mt-6 text-lg leading-8 text-text-secondary sm:text-xl">
                {heroSubtitle}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full accent-gradient px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(17, 24, 39,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(17, 24, 39,0.85)] sm:w-auto sm:px-8"
                >
                  Start Your Project
                </a>

                <Link
                  to="/case-studies"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent sm:w-auto sm:px-8"
                >
                  View Relevant Case Studies
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-border/70 bg-background/80 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)]">
                <div className="flex h-full w-full items-center justify-center p-6 sm:p-10">
                  <img
                    src={heroImageSrc}
                    alt={heroLabel}
                    className="max-h-full w-full object-contain"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems solved */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface/30">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent mb-4">
              Problems Solved
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
              {outcomes?.[0] ?? "Solve real workflow problems"}
            </h2>
            <p className="text-lg text-text-secondary">
              {outcomes?.[1] ??
                "From planning to production, we build systems your team can operate day-to-day."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(features || []).map((f) => (
              <div
                key={f.title}
                className="group rounded-[1.5rem] border border-border/60 bg-background/95 p-6 shadow-[0_12px_32px_-20px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_16px_48px_-20px_rgba(17, 24, 39,0.18)]"
              >
                <h3 className="font-display text-lg font-bold text-primary mb-3">
                  {f.title}
                </h3>
                <p className="text-sm leading-6 text-text-secondary">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What gets built */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent mb-4">
              What Gets Built
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
              {processSteps?.[0]?.title ?? "A practical build you can use"}
            </h2>
            <p className="text-lg text-text-secondary">
              {processSteps?.[0]?.description ??
                "A system built around real workflows, not generic templates."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {(processSteps || []).map((step, idx) => (
              <div key={step.title} className="text-center">
                <div className="relative mb-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent font-bold">
                    {idx + 1}
                  </div>
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

      {/* Related case studies */}
      <RelatedCaseStudies serviceSlug={serviceSlug} />

      {/* FAQs */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent mb-4">
              FAQs
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
              Common questions
            </h2>
            <p className="text-lg text-text-secondary">
              Clear answers before you commit.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {(faqs || []).map((faq) => (
              <div
                key={faq.q}
                className="rounded-[1.25rem] border border-border/60 bg-background/95 p-5 shadow-[0_12px_32px_-20px_rgba(15,23,42,0.12)]"
              >
                <h3 className="font-display text-lg font-bold text-primary">
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface/30">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="rounded-[2.25rem] border border-border/70 bg-background/88 p-8 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.18)] backdrop-blur sm:p-12 lg:p-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
                Ready to build your{" "}
                {serviceSlug?.replace(/-/g, " ") || "project"}?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Share your workflow and goals. I’ll suggest the right approach
                and build a scalable system.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full accent-gradient px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(17, 24, 39,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(17, 24, 39,0.85)] sm:w-auto sm:px-8"
                >
                  Discuss Your Project
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=917092936243&text=Hi%20Jerry%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent sm:w-auto sm:px-8"
                >
                  WhatsApp Jerry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
