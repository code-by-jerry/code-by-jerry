import ServicePageTemplate from "../../components/ServicePageTemplate";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Admin Dashboard Development",
  description:
    "Admin dashboard development for operations teams—role-based access, real-time insights, workflow actions, and scalable UI/UX built around business operations using the right stack.",
  provider: {
    "@type": "Person",
    name: "Jerry (Azhagirishankar K)",
    jobTitle: "Full Stack Developer",
    url: "https://codebyjerry.online",
  },
  serviceType: "Admin Dashboard Development",
  areaServed: "Worldwide",
};

const features = [
  {
    title: "Role-based access control",
    description:
      "Permissions designed for real teams: roles, scopes, and safe operational workflows.",
  },
  {
    title: "Operational dashboards",
    description:
      "Analytics and views that help teams make decisions quickly—without hunting through data.",
  },
  {
    title: "Workflow actions",
    description:
      "Dashboards connect to actions: approvals, status changes, exports, and operational tasks.",
  },
  {
    title: "Real-time visibility",
    description:
      "Updates that keep data and operations in sync so teams respond faster.",
  },
  {
    title: "Scalable, maintainable UI",
    description:
      "UI structures built for long-term evolution—modular, testable, and production-ready.",
  },
];

const processSteps = [
  {
    title: "Dashboard discovery",
    description:
      "We clarify your operational workflows and decision points, then map the key screens and data sources.",
  },
  {
    title: "Design data + UX",
    description:
      "We design the information architecture (metrics, filters, permissions) so the dashboard matches how teams work.",
  },
  {
    title: "Build core modules",
    description:
      "We implement charts, tables, filters, and workflow actions—then iterate with feedback.",
  },
  {
    title: "Deploy + improve",
    description:
      "We ship safely and tune performance, correctness, and usability based on real usage.",
  },
];

const technologies = [
  "React",
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "Redis",
  "Charting",
  "REST APIs",
  "Tailwind CSS",
  "Docker",
];

const faqs = [
  {
    q: "Is this only for admin panels?",
    a: "No. This covers internal dashboards and operational portals—anything your team uses to run the business.",
  },
  {
    q: "Do you handle roles and permissions?",
    a: "Yes. We implement role-based access control so only the right users can see and act on sensitive workflows.",
  },
  {
    q: "Can you connect the dashboard to our existing system?",
    a: "Yes. We connect via APIs and databases, and we design reliable data flows so dashboards stay accurate over time.",
  },
];

export default function AdminDashboardDevelopment() {
  return (
    <ServicePageTemplate
      serviceSlug="admin-dashboard-development"
      heroLabel="Admin Dashboard Development"
      heroTitle="Admin Dashboards for Operations Teams"
      heroSubtitle="Build scalable admin dashboards, internal portals, and workflow tools with role-based access, real-time insights, and action-ready UX—built around real operations using the right stack."
      heroImageSrc="https://ik.imagekit.io/codebyjerry/services/Business%20Platform.png?tr=f-auto,q-80"
      serviceTypeTag="Admin Dashboard Development"
      schema={schema}
      features={features}
      technologies={technologies}
      processSteps={processSteps}
      outcomes={[
        "Make decisions faster with actionable insights",
        "Give your team workflow tools they actually use daily",
      ]}
      faqs={faqs}
    />
  );
}
