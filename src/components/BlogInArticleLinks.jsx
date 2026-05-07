import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

const serviceByBlogCategorySlug = {
  // Business systems / custom software intent
  "business-systems": "custom-web-app-development",
  "custom-software": "custom-web-app-development",
  "crm-development": "admin-dashboard-development",
  "saas-development": "business-automation",
  // eCommerce intent
  ecommerce: "ecommerce-development",
  "e-commerce-development": "ecommerce-development",
  // Mobile intent
  mobile: "mobile-app-development",
  // API intent
  "api-development": "api-integration-development",
  "api-integration": "api-integration-development",
  "api-integration-development": "api-integration-development",
  // Automation intent
  "business-automation": "business-automation",
  "ai-and-automation": "business-automation",
  // SEO / performance intent
  seo: "seo-performance-optimization",
  "performance-optimization": "seo-performance-optimization",
  // Fallbacks
  architecture: "custom-web-app-development",
  "web-development": "custom-web-app-development",
  frontend: "custom-web-app-development",
};

function getUniqueCaseStudiesForService(serviceSlug) {
  const serviceHref = `/services/${serviceSlug}`;
  const matches = caseStudies.flatMap((study) =>
    (study.relatedServices || []).filter((rs) => rs.href === serviceHref).map(() => study),
  );

  const unique = Array.from(new Set(matches.map((s) => s.slug))).map((slug) =>
    caseStudies.find((s) => s.slug === slug),
  );

  return unique.filter(Boolean).slice(0, 3);
}

export default function BlogInArticleLinks({ categorySlug }) {
  const mappedServiceSlug = serviceByBlogCategorySlug[categorySlug] || "custom-web-app-development";
  const serviceHref = `/services/${mappedServiceSlug}`;
  const caseStudyItems = getUniqueCaseStudiesForService(mappedServiceSlug);

  return (
    <section className="mt-10 rounded-[2rem] border border-border/60 bg-surface/40 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)]">
      <h2 className="font-display text-xl font-bold leading-tight text-primary">
        Related systems (services + proof)
      </h2>
      <p className="mt-2 text-sm leading-7 text-text-secondary">
        If you like this approach, here are the most relevant services and case studies that match the same business workflow.
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <Link
          to={serviceHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-background/80 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-text-secondary transition-all hover:border-accent/50 hover:text-accent"
        >
          View Related Service
        </Link>

        <Link
          to="/case-studies"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-background/80 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-text-secondary transition-all hover:border-accent/50 hover:text-accent"
        >
          Browse Case Studies
        </Link>
      </div>

      {caseStudyItems.length > 0 && (
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {caseStudyItems.map((study) => (
            <article
              key={study.slug}
              className="overflow-hidden rounded-2xl border border-border/60 bg-background/90"
            >
              <img
                src={study.images?.[0]}
                alt={study.title}
                className="aspect-[16/10] w-full object-cover object-top"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-display text-sm font-bold leading-tight text-primary">
                  {study.shortTitle || study.title}
                </h3>
                <p className="mt-2 text-xs font-medium text-text-secondary line-clamp-1">
                  {study.category}
                </p>
                <Link
                  to={`/case-studies/${study.slug}`}
                  className="mt-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-accent hover:text-accent/80"
                >
                  View Case Study
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
