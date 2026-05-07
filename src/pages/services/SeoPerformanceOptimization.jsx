import ServicePageTemplate from "../../components/ServicePageTemplate";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO & Performance Optimization",
  description:
    "SEO & performance optimization for business websites—technical SEO, speed improvements, Core Web Vitals, and conversion-ready structure using the right stack.",
  provider: {
    "@type": "Person",
    name: "Jerry (Azhagirishankar K)",
    jobTitle: "Full Stack Developer",
    url: "https://codebyjerry.online",
  },
  serviceType: "SEO & Performance Optimization",
  areaServed: "Worldwide",
};

const features = [
  {
    title: "Technical SEO foundations",
    description:
      "Indexing readiness, metadata discipline, structured data, and performance-safe implementation.",
  },
  {
    title: "Core Web Vitals improvements",
    description:
      "Faster loading paths, better asset handling, and UX improvements that reduce friction.",
  },
  {
    title: "Conversion-ready SEO structure",
    description:
      "SEO improvements designed to help users take the next step—not just rank.",
  },
  {
    title: "Content + metadata tuning",
    description:
      "Optimize titles, descriptions, internal linking patterns, and page structure for search intent.",
  },
  {
    title: "Ongoing measurement",
    description:
      "Track outcomes and iterate based on real indexing and performance signals.",
  },
];

const processSteps = [
  {
    title: "SEO + performance audit",
    description:
      "We review technical SEO, page speed, CWV, metadata, and content structure—then list prioritized fixes.",
  },
  {
    title: "Implement improvements",
    description:
      "We apply the changes with a stability-first approach so you don’t lose anything during optimization.",
  },
  {
    title: "Validate results",
    description:
      "We confirm indexing, metadata correctness, and performance improvements with measurable checks.",
  },
  {
    title: "Iterate based on data",
    description:
      "We tune continuously based on outcomes, impressions, and ranking changes.",
  },
];

const technologies = [
  "SEO Metadata",
  "Structured Data",
  "Performance Tuning",
  "Image Optimization",
  "Caching Strategies",
  "React/Vite",
  "Prerendering",
  "Analytics Setup",
];

const faqs = [
  {
    q: "Is this only for React/Vite sites?",
    a: "No. The approach is technical and platform-flexible. The key is implementing SEO/performance correctly for your stack.",
  },
  {
    q: "How do you measure performance improvements?",
    a: "We focus on measurable signals like Core Web Vitals and real-world load behavior, then validate after changes.",
  },
  {
    q: "Do you also work on internal linking?",
    a: "Yes. Internal links are part of the SEO system: we improve pathways between services, case studies, and blog content.",
  },
];

export default function SeoPerformanceOptimization() {
  return (
    <ServicePageTemplate
      serviceSlug="seo-performance-optimization"
      heroLabel="SEO & Performance Optimization"
      heroTitle="SEO + Performance Optimization That Converts"
      heroSubtitle="Technical SEO, speed improvements, and conversion-ready structure—built to rank higher, load faster, and guide users to the next step using the right stack."
      heroImageSrc="https://ik.imagekit.io/codebyjerry/services/SEO%20&%20Growth.png?tr=f-auto,q-80"
      serviceTypeTag="SEO & Performance Optimization"
      schema={schema}
      features={features}
      technologies={technologies}
      processSteps={processSteps}
      outcomes={[
        "Rank higher with technical clarity",
        "Improve speed + conversion pathways together",
      ]}
      faqs={faqs}
    />
  );
}
