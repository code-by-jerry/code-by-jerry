import ServicePageTemplate from "../../components/ServicePageTemplate";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "eCommerce Development",
  description:
    "eCommerce development for high-converting stores—checkout optimization, payment integrations, performance-focused frontend, and scalable backend systems built around revenue outcomes.",
  provider: {
    "@type": "Person",
    name: "Jerry (Azhagirishankar K)",
    jobTitle: "Full Stack Developer",
    url: "https://codebyjerry.online",
  },
  serviceType: "eCommerce Development",
  areaServed: "Worldwide",
};

const features = [
  {
    title: "Conversion-focused checkout",
    description:
      "Reduce cart abandonment with cleaner checkout UX, friction removal, and performance-first flows.",
  },
  {
    title: "Payment + payment-proof integration",
    description:
      "Secure payment integrations (gateways) with reliable order handling and consistent customer experiences.",
  },
  {
    title: "Performance that supports sales",
    description:
      "Fast page loads, optimized assets, and stable frontend delivery—because speed compounds in revenue.",
  },
  {
    title: "Scalable commerce backend",
    description:
      "Clean backend operations that handle products, orders, inventory, and integrations without breaking under growth.",
  },
  {
    title: "Platform-flexible delivery",
    description:
      "We select the right approach (Shopify or custom) based on your revenue model, customization needs, and timeline.",
  },
];

const processSteps = [
  {
    title: "Checkout & conversion audit",
    description:
      "We review the buying journey (entry → product → cart → checkout) and identify the highest-impact improvements.",
  },
  {
    title: "Design the workflow",
    description:
      "We shape the UX and backend flows around how customers actually purchase—then define implementation tasks.",
  },
  {
    title: "Build + optimize",
    description:
      "We implement, test, and tune performance and correctness for payments, order state, and customer experience.",
  },
  {
    title: "Launch + measure",
    description:
      "We ship safely and track conversion + speed outcomes, then iterate based on real results.",
  },
];

const technologies = [
  "Shopify",
  "React",
  "Node.js",
  "PostgreSQL",
  "Payment Gateways",
  "Redis",
  "AWS",
  "Docker",
  "Tailwind CSS",
];

const faqs = [
  {
    q: "Do you build on Shopify only?",
    a: "No. We can build on Shopify (including custom enhancements) or create custom storefronts and backends depending on your requirements and budget.",
  },
  {
    q: "Will you focus on checkout performance?",
    a: "Yes. Checkout UX + speed are treated as revenue-critical systems: we optimize flows, assets, and backend reliability.",
  },
  {
    q: "Can you integrate our existing tools?",
    a: "Yes. We integrate with the tools you use for inventory, payments, analytics, and operational workflows—so your store runs cleanly end-to-end.",
  },
];

export default function ECommerceDevelopment() {
  return (
    <ServicePageTemplate
      serviceSlug="ecommerce-development"
      heroLabel="eCommerce Development"
      heroTitle="High-Converting eCommerce Systems"
      heroSubtitle="Online stores, checkout optimization, payment integrations, and backend operations—built around revenue outcomes using the right platform."
      heroImageSrc="https://ik.imagekit.io/codebyjerry/services/eCommerce%20Systems.png?tr=f-auto,q-80"
      serviceTypeTag="eCommerce Development"
      schema={schema}
      features={features}
      technologies={technologies}
      processSteps={processSteps}
      outcomes={[
        "Increase completed purchases (conversion)",
        "Build store systems that stay fast and reliable as you scale.",
      ]}
      faqs={faqs}
    />
  );
}
