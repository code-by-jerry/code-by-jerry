import ServicePageTemplate from "../../components/ServicePageTemplate";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Web Application Development",
  description:
    "Custom web application development for scalable business systems, dashboards, portals, and admin panels—built around real workflows using the right stack.",
  provider: {
    "@type": "Person",
    name: "Jerry (Azhagirishankar K)",
    jobTitle: "Full Stack Developer",
    url: "https://codebyjerry.online",
  },
  serviceType: "Web Application Development",
  areaServed: "Worldwide",
};

const features = [
  {
    title: "Workflow-first business logic",
    description:
      "We model your real operational workflows (roles, rules, approvals, data flows) so the app matches how your business actually works.",
  },
  {
    title: "Scalable architecture",
    description:
      "Built to handle growth: modular structure, clean APIs, and maintainable code paths for future features.",
  },
  {
    title: "Performance & reliability",
    description:
      "Fast experiences, efficient database design, and deployment practices that reduce downtime risk as usage increases.",
  },
  {
    title: "Security from day one",
    description:
      "Practical security controls—authentication/authorization, secure data handling, and safer-by-default patterns.",
  },
  {
    title: "Stack-flexible delivery",
    description:
      "The stack is chosen based on your constraints and goals—so delivery stays efficient and future-proof.",
  },
];

const processSteps = [
  {
    title: "Discovery & Planning",
    description:
      "We clarify goals, workflows, and constraints, then map a practical delivery plan.",
  },
  {
    title: "Architecture Design",
    description:
      "We design data models + API boundaries so the system stays scalable.",
  },
  {
    title: "Build, Test & Iterate",
    description:
      "We implement key flows, test early, and iterate with real feedback.",
  },
  {
    title: "Deploy & Support",
    description:
      "We ship to production and provide ongoing support so the system remains stable.",
  },
];

const technologies = [
  "Laravel",
  "React",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "Tailwind CSS",
];

const faqs = [
  {
    q: "Do you build dashboards and internal tools too?",
    a: "Yes. This service includes admin panels, internal portals, and workflow systems—built around the way your team operates.",
  },
  {
    q: "How do you choose the right stack if we have preferences?",
    a: "We align on constraints (timeline, team, scaling needs). Then we choose a stack that best fits the business problem and maintainability.",
  },
  {
    q: "What does delivery look like for a typical project?",
    a: "Discovery → architecture design → build/test iterations → deployment → support. You’ll get clear milestones and practical checkpoints.",
  },
];

export default function CustomWebAppDevelopment() {
  return (
    <ServicePageTemplate
      serviceSlug="custom-web-app-development"
      heroLabel="Custom Web Application Development"
      heroTitle="Scalable Custom Web Applications"
      heroSubtitle="Dashboards, portals, admin panels, and business systems built around real workflows—using the right stack for the job."
      heroImageSrc="https://ik.imagekit.io/codebyjerry/services/Web%20System.png?tr=f-auto,q-80"
      serviceTypeTag="Custom Web Application Development"
      schema={schema}
      features={features}
      technologies={technologies}
      processSteps={processSteps}
      outcomes={[
        "Solve real workflow problems",
        "From planning to production, we build systems your team can operate day-to-day.",
      ]}
      faqs={faqs}
    />
  );
}
