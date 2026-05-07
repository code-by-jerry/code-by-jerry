import ServicePageTemplate from "../../components/ServicePageTemplate";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development",
  description:
    "Mobile app development for iOS and Android—cross-platform delivery (Flutter, React Native, and PWA) connected to your backend systems for real workflows and reliable user experiences.",
  provider: {
    "@type": "Person",
    name: "Jerry (Azhagirishankar K)",
    jobTitle: "Full Stack Developer",
    url: "https://codebyjerry.online",
  },
  serviceType: "Mobile App Development",
  areaServed: "Worldwide",
};

const features = [
  {
    title: "Cross-platform performance",
    description:
      "Smooth UI/UX with responsive interactions and stable performance across devices.",
  },
  {
    title: "Backend-connected experiences",
    description:
      "Mobile apps integrated with your APIs, authentication, data, and business workflows.",
  },
  {
    title: "Offline + reliable syncing",
    description:
      "Smart handling for intermittent connectivity with predictable sync behavior when online.",
  },
  {
    title: "Security & data integrity",
    description:
      "Secure authentication flows and safer-by-default patterns for sensitive business data.",
  },
  {
    title: "Platform-flexible delivery",
    description:
      "We choose the best mobile approach for your product: Flutter, React Native, or PWA.",
  },
];

const processSteps = [
  {
    title: "Discovery & product flow mapping",
    description:
      "We clarify your user flows and success metrics, then map the screens and data interactions.",
  },
  {
    title: "API + architecture alignment",
    description:
      "We align the backend/API boundaries so the mobile app stays reliable and scalable.",
  },
  {
    title: "Build, test & polish",
    description:
      "We implement core features, test early, and tune UX and performance before launch.",
  },
  {
    title: "Deploy + support",
    description:
      "We ship the app and provide ongoing support for improvements and future features.",
  },
];

const technologies = [
  "Flutter",
  "React Native",
  "PWA",
  "React",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "API Integration",
  "Tailwind CSS",
];

const faqs = [
  {
    q: "Can you build native-feeling cross-platform apps?",
    a: "Yes. We focus on performance and UX polish so cross-platform apps feel consistent and responsive across iOS and Android.",
  },
  {
    q: "Will this work with our existing backend?",
    a: "Yes. We integrate with your existing APIs, auth, and data systems—cleanly and securely.",
  },
  {
    q: "Do you also handle offline use cases?",
    a: "Yes. We design predictable offline behavior and syncing so the app remains useful even with unstable connectivity.",
  },
];

export default function MobileAppDevelopment() {
  return (
    <ServicePageTemplate
      serviceSlug="mobile-app-development"
      heroLabel="Mobile App Development"
      heroTitle="Cross-Platform Mobile App Development"
      heroSubtitle="Mobile and cross-platform app experiences connected cleanly with backend systems and APIs—built for real workflows, reliable performance, and great user experiences using the right mobile approach."
      heroImageSrc="https://ik.imagekit.io/codebyjerry/services/Mobile%20&%20Integrations.png?tr=f-auto,q-80"
      serviceTypeTag="Mobile App Development"
      schema={schema}
      features={features}
      technologies={technologies}
      processSteps={processSteps}
      outcomes={[
        "Build apps that users actually love using",
        "Deliver reliable mobile workflows connected to your systems.",
      ]}
      faqs={faqs}
    />
  );
}
