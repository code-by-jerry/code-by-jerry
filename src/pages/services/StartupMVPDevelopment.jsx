import ServicePageTemplate from "../../components/ServicePageTemplate";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Startup MVP Development",
  description:
    "Startup MVP development for founders—build the smallest product that proves value, with scalable architecture, clean APIs, and fast iteration using the right stack.",
  provider: {
    "@type": "Person",
    name: "Jerry (Azhagirishankar K)",
    jobTitle: "Full Stack Developer",
    url: "https://codebyjerry.online",
  },
  serviceType: "Startup MVP Development",
  areaServed: "Worldwide",
};

const features = [
  {
    title: "MVP scope built for validation",
    description:
      "We focus on proving value fast—so you don’t overbuild before you learn.",
  },
  {
    title: "Scalable foundations",
    description:
      "We design architecture and APIs that can grow beyond launch without rewrites.",
  },
  {
    title: "Fast iteration delivery",
    description:
      "Clear milestones and rapid feedback loops so you can test with real users.",
  },
  {
    title: "Reliable integrations",
    description:
      "Integrate payments, analytics, auth, and other services needed for the MVP to work end-to-end.",
  },
  {
    title: "Performance-ready UI",
    description:
      "Frontend performance and usability baked in from day one to keep adoption high.",
  },
];

const processSteps = [
  {
    title: "MVP discovery",
    description:
      "We validate the problem, define success, and map the minimum screens + workflows.",
  },
  {
    title: "Plan the delivery",
    description:
      "We break the MVP into milestones, prioritize the riskiest parts first, and estimate realistically.",
  },
  {
    title: "Build the MVP",
    description:
      "We implement core features, connect APIs/integrations, and keep code maintainable from day one.",
  },
  {
    title: "Launch + iterate",
    description:
      "We ship, measure outcomes, fix issues quickly, and prepare for the next build phase.",
  },
];

const technologies = [
  "React",
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "Auth Systems",
  "Docker",
  "Tailwind CSS",
];

const faqs = [
  {
    q: "Can you help us define the MVP scope?",
    a: "Yes. We help refine the brief into a testable MVP with clear success criteria and practical delivery milestones.",
  },
  {
    q: "Do you build MVPs only in one framework?",
    a: "No. We choose the stack based on the product needs: timeline, scaling expectations, and team constraints.",
  },
  {
    q: "How do you keep the MVP from becoming overbuilt?",
    a: "We prioritize the riskiest learning first and enforce scope boundaries aligned to validation—not “nice to have.”",
  },
];

export default function StartupMVPDevelopment() {
  return (
    <ServicePageTemplate
      serviceSlug="startup-mvp-development"
      heroLabel="Startup MVP Development"
      heroTitle="Startup MVPs Built to Validate Value Fast"
      heroSubtitle="Build the smallest product that proves value—then evolve with confidence. Scalable foundations, clean APIs, and fast iteration designed for startup speed using the right stack."
      heroImageSrc="https://ik.imagekit.io/codebyjerry/services/Startup%20MVP.png?tr=f-auto,q-80"
      serviceTypeTag="Startup MVP Development"
      schema={schema}
      features={features}
      technologies={technologies}
      processSteps={processSteps}
      outcomes={[
        "Validate faster with a focused MVP",
        "Scale from launch without rebuilding everything",
      ]}
      faqs={faqs}
    />
  );
}
