import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

const siteUrl = "https://codebyjerry.online";

function getServiceHrefFromSlug(serviceSlug) {
  if (!serviceSlug) return null;
  return `/services/${serviceSlug}`;
}

export default function RelatedCaseStudies({ serviceSlug, maxItems = 3 }) {
  const serviceHref = getServiceHrefFromSlug(serviceSlug);

  const matching = caseStudies
    .flatMap((study) => (study.relatedServices || []).map((rs) => ({ study, rs })))
    .filter((x) => (serviceHref ? x.rs.href === serviceHref : false))
    .map((x) => x.study);

  const unique = Array.from(new Set(matching.map((s) => s.slug))).map((slug) =>
    caseStudies.find((s) => s.slug === slug),
  );

  const items = unique.slice(0, maxItems).filter(Boolean);

  if (items.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent mb-4">
            Related Case Studies
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-6">
            Proof for similar business systems
          </h2>
          <p className="text-lg text-text-secondary">
            See how the same type of workflow was delivered with measurable outcomes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((study) => (
            <article
              key={study.slug}
              className="group rounded-[1.75rem] border border-border/60 bg-background/95 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)]"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-border/50 bg-surface">
                <img
                  src={study.images?.[0]}
                  alt={study.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <h3 className="mt-5 font-display text-xl font-bold leading-tight text-primary">
                {study.shortTitle || study.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {study.summary || study.outcome || ""}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {(study.services || []).slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border/60 bg-surface px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-text-secondary"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <Link
                to={`/case-studies/${study.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent hover:text-accent/80"
              >
                View Case Study
              </Link>

              <meta itemProp="mainEntityOfPage" content={`${siteUrl}/case-studies/${study.slug}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
