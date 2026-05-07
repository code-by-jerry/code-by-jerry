export const caseStudies = [
  {
    slug: "real-estate-platform",
    title: "Real Estate Platform With Listings, CRM, and Lead Capture",
    shortTitle: "Real Estate Platform",
    category: "Real Estate",
    year: "2025",
    summary:
      "A property platform built around discovery, lead capture, listing management, CRM workflows, and SEO-ready pages for a real estate business.",
    problem:
      "The business needed more than a brochure website. It needed a structured platform where properties could be presented clearly, leads could be captured, and the sales workflow could be supported by organized backend data.",
    solution:
      "Built a property-focused platform with regional browsing, luxury segments, map-aware discovery, listing detail pages, lead forms, CRM support, dashboards, and SEO-focused content structure.",
    outcome:
      "The platform created a stronger digital base for property discovery, enquiry handling, and ongoing marketing, while giving the business a more scalable foundation than a static website.",
    services: [
      "Custom web application development",
      "CRM and lead management workflow",
      "SEO-ready content architecture",
      "Admin dashboard and listing management",
    ],
    stack: ["Laravel", "TypeScript", "MySQL", "Maps", "SEO"],
    results: [
      "Structured property discovery experience",
      "Cleaner lead capture and enquiry flow",
      "Admin-ready listing management",
      "SEO-focused page structure",
    ],
    images: [
      "https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174924.png?updatedAt=1776506172591&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174906.png?updatedAt=1776506172562&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175012.png?updatedAt=1776506172472&tr=f-auto,q-80",
    ],
    relatedServices: [
      { label: "Custom Web Applications", href: "/services/web-applications" },
      { label: "Business Platforms", href: "/services/business-platforms" },
      { label: "SEO & Performance", href: "/services/seo-growth" },
    ],
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((study) => study.slug === slug);
}
