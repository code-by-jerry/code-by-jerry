import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  FaArrowRight,
  FaChartLine,
  FaCogs,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRocket,
  FaSignal,
  FaWhatsapp,
  FaUsers,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
  FaCrosshairs,
  FaClock,
  FaDatabase,
  FaTachometerAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Custom Web Applications",
    description:
      "Custom business systems, dashboards, and admin panels built for real workflows. Designed for teams that need speed, clarity, and control over their daily operations.",
    eyebrow: "Custom Systems",
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/web_serv.png",
  },
  {
    title: "eCommerce Development",
    description:
      "High-converting online stores with payment integrations and cleaner buying flows. From Shopify to custom storefronts, built for checkout performance and customer retention.",
    eyebrow: "Revenue Focused",
    image:
      "https://ik.imagekit.io/codebyjerry/coj%20services/ecommerce_serv.png",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications connected tightly with your backend systems. Built for real users, fast, reliable, and consistent across devices.",
    eyebrow: "Mobile Delivery",
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/Mobile_serv.png",
  },
  {
    title: "Backend Development & Integrations",
    description:
      "APIs, third-party integrations, and scalable architectures that support real growth. Clean, documented, and built to handle production load reliably.",
    eyebrow: "Core Logic",
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/backend_serv.png",
  },
  {
    title: "Business Management Systems",
    description:
      "End-to-end platforms built around your business model—from team workflows and inventory to role-based access and operational dashboards.",
    eyebrow: "Business First",
    image:
      "https://ik.imagekit.io/codebyjerry/coj%20services/Business_serv.png",
    featured: true,
  },
  {
    title: "SEO-Ready Websites",
    description:
      "Fast-loading, search-optimized websites designed to represent your brand clearly, rank for relevant searches, and convert visitors into enquiries.",
    eyebrow: "Search & Visibility",
    image:
      "https://ik.imagekit.io/codebyjerry/coj%20services/seo_growth_serv.png",
  },
];

// contribution logos removed — Contributions section deleted

const trustedByLogos = [
  {
    name: "Pixora",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/pixora_new_white.png?updatedAt=1779039491768",
  },
  {
    name: "DestroSolutions",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/destrosolutions_new.png?updatedAt=1779038470588",
  },
  {
    name: "Baybee",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Baybee_logo.svg?updatedAt=1779037891024",
  },
  {
    name: "Atha Constructions",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Atha%20Constructions.webp?updatedAt=1777100806093",
  },
  {
    name: "Aaraninfo",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/aaraninfo.png?updatedAt=1777100866170",
  },
  {
    name: "Techbuds",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/techbuds.png",
  },
  {
    name: "Codexsun",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/codexsun.png?updatedAt=1777100737283",
  },
  {
    name: "Nesthetix",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/nesthetix.webp?updatedAt=1777100737298",
  },
  {
    name: "Aarun",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/aarun.webp?updatedAt=1777100830827",
  },
  {
    name: "Jippymart",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/jippymart.webp?updatedAt=1777100737251",
  },
  {
    name: "Area24One",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/area24one.png?updatedAt=1777100737279",
  },
  {
    name: "Area24Realty",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/area24realty.webp?updatedAt=1777100909832",
  },
];

const serviceSlides = [
  {
    name: "ecommerce",
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/ecommerce.png",
  },
  {
    name: "cms",
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/cms.png",
  },
  {
    name: "construction",
    image:
      "https://ik.imagekit.io/codebyjerry/coj%20services/construction_interior.png",
  },
  {
    name: "real-estate",
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/Real_estate.png",
  },
  {
    name: "food-delivery",
    image:
      "https://ik.imagekit.io/codebyjerry/coj%20services/food_delivery.png",
  },
  {
    name: "automation",
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/automation.png",
  },
  {
    name: "shopify",
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/shopify.png",
  },
];

// aboutHighlights removed — replaced by a curated 2x2 grid in the About section

const aboutDeliverables = [
  "Custom Web Applications",
  "eCommerce Platforms",
  "Internal Business Systems",
  "API & Automation Workflows",
];

const aboutPillars = [
  {
    title: "Full-Stack Delivery",
    desc: "From initial scoping to production launch & database setup",
  },
  {
    title: "Direct Communication",
    desc: "Transparent milestone updates and working staging previews",
  },
  {
    title: "Post-Launch Stability",
    desc: "Code handover, 30-day warranty, and ongoing technical support",
  },
];

const contactDetails = [
  {
    label: "WhatsApp",
    value: "7092936243",
    href: "https://api.whatsapp.com/send?phone=917092936243&text=Hi%20Jerry%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.&app_absent=0",
    icon: FaWhatsapp,
  },
  {
    label: "Email",
    value: "contact@codebyjerry.online",
    href: "mailto:contact@codebyjerry.online",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "7092936243",
    href: "tel:+917092936243",
    icon: FaPhoneAlt,
  },
  {
    label: "LinkedIn",
    value: "code-by-jerry",
    href: "https://www.linkedin.com/in/code-by-jerry/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    value: "code-by-jerry",
    href: "https://github.com/code-by-jerry",
    icon: FaGithub,
  },
];

const whatsappProjectHref =
  "https://api.whatsapp.com/send?phone=917092936243&text=Hi%20Jerry%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.&app_absent=0";

const blogPosts = [
  {
    title: "When Does Your Business Need Custom Software?",
    excerpt:
      "A practical guide to evaluating when off-the-shelf tools start costing you more in workarounds than a dedicated custom application built for your workflows.",
    readTime: "5 min read",
    category: "Custom Software",
    image: "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%201.png",
    link: "/blog/building-scalable-web-applications",
  },
  {
    title: "Shopify vs Custom eCommerce: Which Is Right for You?",
    excerpt:
      "Comparing development speed, operational costs, checkout flexibility, and long-term scaling between Shopify and custom eCommerce backends.",
    readTime: "4 min read",
    category: "eCommerce",
    image: "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%202.png",
    link: "/blog/why-ecommerce-needs-custom-backend",
  },
  {
    title: "Replacing Manual Business Workflows with Custom Web Tools",
    excerpt:
      "How businesses turn messy spreadsheets, manual data entry, and fragmented tools into connected, role-based internal platforms.",
    readTime: "6 min read",
    category: "Business Systems",
    image: "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%203.png",
    link: "/blog/mobile-apps-that-drive-business-results",
  },
];

const faqData = [
  {
    question: "How much does a custom project typically cost?",
    answer:
      "Project costs depend on scope, complexity, and timeline. Smaller integrations or MVP builds typically start around $1,000, while comprehensive full-stack platforms or custom eCommerce systems are quoted based on specific milestone requirements. After an initial discovery discussion, you receive a transparent fixed-price proposal with no surprise fees.",
  },
  {
    question: "How long does development usually take?",
    answer:
      "Most focused projects and MVPs ship within 3 to 6 weeks. Larger platforms with multi-role permissions, complex integrations, and custom dashboards generally take 8 to 12 weeks. I provide a milestone-based delivery schedule before starting so you know exactly what is delivered at every step.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I choose modern, production-proven technologies based on what best suits the project. My core stack includes React, Next.js, Node.js, Laravel/PHP, Inertia.js, TypeScript, Tailwind CSS, PostgreSQL/MySQL, and mobile solutions using Flutter. I also build on Shopify for eCommerce when appropriate.",
  },
  {
    question: "How will I receive project updates during development?",
    answer:
      "You receive weekly progress updates, access to a private staging environment to test working features as they are built, and regular communication via your preferred channel (Slack, WhatsApp, email, or video calls). You work directly with me—no intermediaries or communication gaps.",
  },
  {
    question: "Do you provide support and maintenance after launch?",
    answer:
      "Yes. Every project includes a 30-day post-launch warranty where any bugs or adjustments within the agreed scope are addressed promptly. After launch, I offer ongoing maintenance, feature expansion, and technical advisory arrangements.",
  },
  {
    question: "Can you work with an existing application or legacy code?",
    answer:
      "Yes. I frequently help businesses refactor existing codebases, improve slow database queries, modernize user interfaces, and build new API integrations into legacy systems without disrupting daily operations.",
  },
];

function HeroServiceShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviceSlides.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="freelance-showcase relative flex min-h-[420px] flex-col overflow-hidden rounded-[1.5rem] border border-border/60 bg-background/78 p-4 shadow-[0_20px_55px_-36px_rgba(15,23,42,0.22)] backdrop-blur-sm sm:min-h-[480px] sm:rounded-[2rem] sm:p-6 lg:h-full lg:min-h-0 lg:max-h-full lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
      <div className="pointer-events-none absolute -left-8 top-6 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.82)] blur-3xl sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute right-0 top-14 h-48 w-48 rounded-full bg-[rgba(17, 24, 39,0.14)] blur-3xl sm:h-64 sm:w-64" />
      <div className="pointer-events-none absolute bottom-20 right-12 h-36 w-36 rounded-full bg-[rgba(55, 65, 81,0.14)] blur-3xl sm:h-52 sm:w-52" />

      <div className="freelance-showcase-image-stage relative min-h-[300px] flex-1 overflow-hidden sm:min-h-[360px] lg:min-h-0">
        {serviceSlides.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <article
              key={slide.name}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-8 opacity-0"
              }`}
            >
              <div className="flex h-full items-center justify-center">
                <div className="pointer-events-none absolute inset-x-6 bottom-5 h-24 blur-3xl sm:inset-x-8 sm:bottom-auto sm:top-10 sm:h-48 lg:inset-x-12 lg:top-12 lg:h-56" />

                <img
                  src={slide.image}
                  alt={`${slide.name} service visual`}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  className={`relative z-10 mx-auto block h-auto max-h-full w-auto max-w-full object-contain object-center transition-all duration-700 ease-out sm:max-w-[400px] md:max-w-[420px] lg:max-h-[calc(100%-0.5rem)] lg:max-w-[min(560px,100%)] ${
                    isActive
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-4 scale-[0.98] opacity-0"
                  }`}
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function ServiceFlipCard({ title, description, eyebrow, image, featured }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${title} service details`}
      className="cursor-pointer focus:outline-none"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full transition-transform duration-700 ease-out"
        style={{
          aspectRatio: "1 / 1",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front: Image on top (full width), title at bottom */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between overflow-hidden rounded-[1.75rem] border border-border/60 bg-background/90 p-4 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.12)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full flex items-center justify-center flex-1">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-contain"
              style={{ maxHeight: "82%" }}
            />
          </div>

          <div className="w-full text-center mt-3">
            {eyebrow && (
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                {eyebrow}
              </p>
            )}
            <h3 className="mt-1.5 font-display text-xl font-bold leading-tight text-primary sm:text-2xl">
              {title}
            </h3>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-text-secondary/70 sm:hidden">
              Tap for details
            </p>
          </div>
        </div>

        {/* Back: Solid background with description */}
        <div
          className={`absolute inset-0 flex flex-col justify-center overflow-hidden rounded-[1.75rem] p-6 shadow-xl ${
            featured ? "bg-primary text-white" : "bg-primary text-white"
          }`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative z-10 text-center sm:text-left">
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/70">
              {eyebrow}
            </p>
            <h4 className="mt-1.5 font-display text-lg font-bold text-white">
              {title}
            </h4>
            <p className="mt-3 text-xs leading-6 text-white/90 sm:text-sm">
              {description}
            </p>
            <p className="mt-4 text-[9px] font-bold uppercase tracking-widest text-white/60">
              Tap to flip back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesSection({ onContactClick }) {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-screen-xl scroll-mt-24 px-5 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(17, 24, 39,0.04),transparent_50%)]" />

      <div className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
              Services
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Digital solutions built around your business.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-sm leading-7 text-text-secondary sm:text-base">
              From business websites and online stores to custom applications, I build
              digital solutions that simplify operations and support business growth.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-3 rounded-full accent-gradient px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_14px_34px_-18px_rgba(17, 24, 39,0.72)] transition-all hover:-translate-y-1"
              >
                Discuss Your Project
                <FaArrowRight size={11} />
              </button>
              <a
                href={whatsappProjectHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary transition-all hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
              >
                <FaWhatsapp size={14} />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 lg:gap-8 xl:grid-cols-3">
          {services.map(({ title, description, eyebrow, image, featured }) => (
            <ServiceFlipCard
              key={title}
              title={title}
              description={description}
              eyebrow={eyebrow}
              image={image}
              featured={featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-screen-xl scroll-mt-24 flex-col justify-center px-5 py-8 sm:px-6 md:px-12 md:py-10 lg:h-[calc(100svh-4.5rem)] lg:max-h-[calc(100svh-4.5rem)] lg:overflow-hidden lg:px-20 lg:py-4"
    >
      <div className="flex min-h-0 flex-1 flex-col gap-3">
        <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <div className="relative flex min-h-0 overflow-hidden rounded-[1.5rem] border border-primary bg-[linear-gradient(145deg,#111827_0%,#0b0b0b_48%,#050816_100%)] px-5 py-5 text-white shadow-[0_20px_50px_-32px_rgba(15,23,42,0.45)] sm:px-6 lg:px-7 lg:py-6">
            <div className="pointer-events-none absolute -left-8 top-10 h-28 w-28 rounded-full bg-[rgba(17, 24, 39,0.24)] blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[rgba(55, 65, 81,0.16)] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-20 w-20 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl" />

            <div className="relative z-10 flex h-full min-h-0 flex-col justify-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-white/70">
                About Jerry
              </p>
              <h2 className="mt-2 max-w-lg font-display text-2xl font-bold leading-[1.08] sm:text-[1.75rem] lg:text-[1.95rem]">
                I build the digital systems behind growing businesses.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/85 lg:mt-2.5">
                I'm Jerry, a digital product engineer focused on building custom web
                applications, eCommerce platforms and business systems. I work closely
                with businesses to understand their challenges and turn them into
                practical digital solutions.
              </p>
              <p className="mt-1.5 max-w-xl text-sm leading-6 text-white/70">
                From commerce workflows and internal dashboards to backend platforms
                and automations, I build scalable digital products engineered for real
                daily operations.
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:mt-3">
                {aboutDeliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 backdrop-blur-sm"
                  >
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-soft">
                      <FaCheckCircle size={9} aria-hidden="true" />
                    </span>
                    <span className="text-xs leading-5 text-white/86 sm:text-[13px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid min-h-0 grid-cols-2 grid-rows-2 gap-2 max-lg:grid-rows-[8.5rem_8.5rem] lg:h-full lg:max-h-full">
            <div className="flex min-h-0 items-center justify-center overflow-hidden rounded-[1.15rem] bg-white/70 p-2">
              <img
                src="https://ik.imagekit.io/codebyjerry/revenue_op.png"
                alt="Revenue Infrastructure"
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <article className="flex min-h-0 flex-col justify-center overflow-hidden rounded-[1.15rem] bg-primary p-3 text-white shadow-[0_18px_44px_-30px_rgba(15,23,42,0.18)] sm:p-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/70">
                Direct Partnership
              </p>
              <h3 className="mt-1 font-display text-sm font-bold sm:text-base">
                Direct Engineering
              </h3>
              <p className="mt-1.5 text-[11px] leading-4 text-white/80 sm:text-xs sm:leading-5">
                Work directly with an independent developer from planning to deployment.
                No account managers, agency markups, or lost technical context.
              </p>
            </article>

            <article className="flex min-h-0 flex-col justify-center overflow-hidden rounded-[1.15rem] bg-primary p-3 text-white shadow-[0_18px_44px_-30px_rgba(15,23,42,0.18)] sm:p-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/70">
                Built to Scale
              </p>
              <h3 className="mt-1 font-display text-sm font-bold sm:text-base">
                Production Quality
              </h3>
              <p className="mt-1.5 text-[11px] leading-4 text-white/80 sm:text-xs sm:leading-5">
                Clean, documented code, modern architectures, and resilient databases
                designed to handle real daily workflows and grow with your business.
              </p>
            </article>

            <div className="flex min-h-0 items-center justify-center overflow-hidden rounded-[1.15rem] bg-white/70 p-2">
              <img
                src="https://ik.imagekit.io/codebyjerry/growth_op.png"
                alt="Growth Systems"
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="shrink-0 rounded-[1.25rem] border border-border/70 bg-background/88 px-4 py-3 shadow-[0_18px_44px_-32px_rgba(15,23,42,0.14)] sm:px-5">
          <div className="grid gap-3 text-center sm:grid-cols-3">
            {aboutPillars.map((item, index) => (
              <div
                key={item.title}
                className={`py-1 ${index < aboutPillars.length - 1 ? "sm:border-r sm:border-border/70" : ""}`}
              >
                <p className="font-display text-sm font-bold text-primary sm:text-base">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs leading-5 text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function BlogSection() {
  return (
    <section
      id="blog"
      className="mx-auto max-w-screen-xl scroll-mt-24 px-5 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="max-w-lg">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
            Insights
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Insights from building real digital products.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          Practical perspectives on custom software, eCommerce and business technology,
          based on real development experience.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="group overflow-hidden rounded-[1.75rem] border border-border/60 bg-background/95 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_28px_64px_-28px_rgba(17, 24, 39,0.2)]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                  {post.category}
                </span>
                <span className="text-[10px] font-medium text-text-secondary/70">
                  {post.readTime}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold leading-tight text-primary">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {post.excerpt}
              </p>
              <Link
                to={post.link}
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent/80"
              >
                Read Article
                <FaArrowRight size={10} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  // Add FAQ structured data
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section
      id="faq"
      className="mx-auto max-w-screen-xl scroll-mt-24 px-5 py-8 sm:px-6 md:px-12 md:py-10 lg:px-20 lg:py-12"
    >
      <div className="grid gap-3 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="max-w-lg">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
            FAQ
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-primary sm:text-3xl lg:text-[2rem] lg:leading-[1.08]">
            Questions before starting a project?
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-text-secondary">
          Clear answers about project scope, pricing, timelines, communication and
          ongoing support.
        </p>
      </div>

      <div className="mt-5 grid gap-2.5 lg:grid-cols-2 lg:gap-3">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-border/60 bg-background/95 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.12)]"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-start justify-between gap-3 p-3.5 text-left transition-colors hover:bg-surface/50 sm:p-4"
              aria-expanded={openItems.has(index)}
            >
              <h3 className="font-display text-sm font-bold leading-snug text-primary sm:text-[15px]">
                {faq.question}
              </h3>
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border/60 text-[11px] transition-transform ${
                  openItems.has(index) ? "rotate-45 bg-accent/10" : ""
                }`}
              >
                <span className="font-bold text-accent">+</span>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                openItems.has(index)
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border/60 px-3.5 pb-3.5 pt-2.5 sm:px-4 sm:pb-4">
                  <p className="text-xs leading-5 text-text-secondary sm:text-sm sm:leading-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConversionCtaStrip({
  eyebrow,
  title,
  body,
  onContactClick,
  tone = "light",
  primaryLabel = "Start a Project",
  secondaryLabel = "WhatsApp Jerry",
}) {
  const isDark = tone === "dark";

  return (
    <section className="mx-auto max-w-screen-xl px-5 py-6 sm:px-6 md:px-12 lg:px-20">
      <div
        className={`relative overflow-hidden rounded-[2rem] border px-6 py-7 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] sm:px-8 sm:py-8 lg:flex lg:items-center lg:justify-between lg:gap-10 ${
          isDark
            ? "border-transparent bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#4f46e5_100%)] text-white"
            : "border-border/70 bg-background/92 text-primary"
        }`}
      >
        <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-accent/14 blur-3xl" />
        <div className="relative z-10 max-w-2xl">
          <p
            className={`text-[10px] font-bold uppercase tracking-[0.3em] ${
              isDark ? "text-white/64" : "text-accent"
            }`}
          >
            {eyebrow}
          </p>
          <h2
            className={`mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl ${
              isDark ? "text-white" : "text-primary"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-3 text-sm leading-7 sm:text-base ${
              isDark ? "text-white/72" : "text-text-secondary"
            }`}
          >
            {body}
          </p>
        </div>

        <div className="relative z-10 mt-6 grid gap-3 sm:flex sm:flex-wrap lg:mt-0 lg:justify-end">
          <button
            type="button"
            onClick={onContactClick}
            className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all hover:-translate-y-1 sm:px-7 ${
              isDark
                ? "bg-white text-primary shadow-[0_18px_44px_-24px_rgba(255,255,255,0.7)]"
                : "accent-gradient text-white shadow-[0_16px_40px_-18px_rgba(17, 24, 39,0.72)]"
            }`}
          >
            {primaryLabel}
            <FaArrowRight size={11} />
          </button>
          <a
            href={whatsappProjectHref}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center gap-3 rounded-full border px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all hover:-translate-y-1 sm:px-7 ${
              isDark
                ? "border-white/18 bg-white/8 text-white hover:border-white/32 hover:bg-white/12"
                : "border-border/70 bg-background/80 text-primary hover:border-accent/40 hover:text-accent"
            }`}
          >
            <FaWhatsapp size={14} />
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

function getAvailabilityStatus() {
  const now = new Date();
  const month = now.toLocaleString("en-US", { month: "long" });
  const year = now.getFullYear();
  return `Available for ${month} ${year} Projects`;
}

export default function FreelanceLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const availabilityStatus = getAvailabilityStatus();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Blog", to: "/blog" },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Code by Jerry",
      description:
        "Remote full-stack developer building scalable business systems, custom web applications, eCommerce platforms, automation tools, APIs, dashboards, and startup MVPs using the right technology for the job.",
      url: "https://codebyjerry.online",
      logo: "https://codebyjerry.online/logo.png",
      founder: {
        "@type": "Person",
        name: "Jerry (Azhagirishankar K)",
        jobTitle: "Full Stack Developer",
        email: "contact@codebyjerry.online",
        telephone: "+91-7092936243",
        sameAs: [
          "https://www.linkedin.com/in/code-by-jerry/",
          "https://github.com/code-by-jerry",
        ],
      },
      serviceType: [
        "Custom Web Application Development",
        "Business Automation",
        "Mobile App Development",
        "eCommerce Development",
        "Backend API Development",
        "Startup MVP Development",
        "SEO & Performance Optimization",
      ],
      areaServed: "Worldwide",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7092936243",
        contactType: "Project inquiries",
        email: "contact@codebyjerry.online",
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Applications",
              description:
                "Scalable dashboards, portals, internal tools, and business platforms designed around real workflows.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "eCommerce Systems",
              description:
                "High-converting online stores and custom commerce workflows with payment, checkout, and backend integrations.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Automation",
              description:
                "Automation tools, admin dashboards, CRM flows, and API integrations that reduce manual operations.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Startup MVP Development",
              description:
                "Focused MVPs and product foundations built with the right stack for speed, maintainability, and scale.",
            },
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Code by Jerry",
      url: "https://codebyjerry.online",
      description:
        "Stack-flexible full-stack development for scalable business systems, automation, eCommerce, APIs, and startup MVPs.",
    },
  ];

  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO
        title="Code by Jerry | Product Engineer for Scalable Business Systems"
        description="Remote product engineer building production-grade platforms, operational systems, automation workflows, analytics dashboards, and commerce engines that scale reliably."
        keywords="product engineer, product engineering, business systems developer, operational software, automation platform developer, analytics dashboard engineering, scalable web application developer"
        schema={schema}
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />

      {/* Sticky Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/50 bg-background/90 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 md:px-12 lg:px-20">
          {/* Left logo and brand */}
          <Link to="/" className="flex min-w-0 items-center">
            <span className="flex h-10 shrink-0 items-center justify-center overflow-hidden rounded-xl">
              <img
                src="/logo.png"
                alt="Code by Jerry logo"
                className="h-full w-auto object-contain"
              />
            </span>
          </Link>

          {/* Center desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="group relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-secondary transition-colors hover:text-primary"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Right CTA and mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setContactOpen(true)}
              className="hidden items-center gap-2 rounded-full accent-gradient px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_12px_32px_-16px_rgba(17, 24, 39,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(17, 24, 39,0.85)] sm:inline-flex"
            >
              <FaEnvelope size={11} />
              Start a Project
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/85 text-text-secondary transition-colors hover:border-accent/40 hover:text-accent lg:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-px w-5 bg-current transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-px w-5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-px w-5 bg-current transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
            mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-screen-xl flex-col px-5 py-4 sm:px-6 md:px-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border/40 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-text-secondary transition-colors hover:text-accent last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setContactOpen(true)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full accent-gradient px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white"
            >
              <FaEnvelope size={11} />
              Start a Project
            </button>
          </nav>
        </div>
      </header>

      <main id="main-content" className="relative z-10">
        {/* Hero section padded to clear sticky header */}
        <section className="mx-auto max-w-screen-xl px-5 pt-[5.75rem] sm:px-6 sm:pt-24 md:px-12 lg:px-20">
          <div className="freelance-hero-grid grid gap-8 pb-10 pt-4 sm:gap-10 sm:py-8 md:gap-14 md:py-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12 lg:py-4 lg:pb-0">
            {/* Left fixed copy */}
            <div className="freelance-hero-copy flex flex-col justify-center text-left">
              {/* Headline */}
              <h1 className="max-w-lg text-[0.85rem] font-display font-semibold uppercase tracking-[0.28em] text-primary sm:text-[0.95rem]">
                DIGITAL PRODUCT ENGINEER · BUSINESS-FOCUSED BUILDER
              </h1>

              <h2 className="freelance-hero-title mt-6 max-w-xl text-[2.2rem] font-display font-bold leading-[1.02] text-primary sm:text-[2.7rem] md:text-[3.15rem] lg:text-[3.6rem]">
                I build digital products that make business work better.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-text-secondary sm:text-[1.05rem] sm:leading-8">
                Custom web applications, eCommerce platforms and business systems
                designed to solve real problems, simplify operations and help
                businesses grow.
              </p>

              {/* CTAs */}
              <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full accent-gradient px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(17, 24, 39,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(17, 24, 39,0.85)] sm:w-auto sm:px-7 sm:py-4 sm:tracking-[0.2em]"
                >
                  Let's discuss your project
                  <FaArrowRight size={12} />
                </a>

                <a
                  href="#services"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent sm:w-auto sm:px-7 sm:py-4 sm:tracking-[0.2em]"
                >
                  Explore Services
                </a>
              </div>

              <p className="mt-6 max-w-xl text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary">
                Custom Software · eCommerce · Business Applications · Automation
              </p>
            </div>

            {/* Right service showcase */}
            <HeroServiceShowcase />
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl border-t border-border/40 px-5 pb-2 pt-8 sm:px-6 sm:pt-10 md:px-12 lg:px-20">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-text-secondary/60">
            A selection of businesses I've worked with
          </p>
          <div className="mt-6 overflow-hidden sm:mt-8">
              <style>{`
                @keyframes trustedByMarquee {
                  from { transform: translateX(0); }
                  to { transform: translateX(-50%); }
                }
              `}</style>

              <div
                className="flex min-w-max items-center gap-4 py-3"
                style={{ animation: "trustedByMarquee 30s linear infinite" }}
              >
                {[...trustedByLogos, ...trustedByLogos].map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex h-20 shrink-0 items-center justify-center px-4 py-3"
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      loading="lazy"
                      className="max-h-10 w-auto object-contain opacity-70 transition duration-300 hover:opacity-100"
                      style={{ filter: "grayscale(100%) brightness(0.35)" }}
                    />
                  </div>
                ))}
              </div>
            </div>
        </section>

        <ConversionCtaStrip
          eyebrow="HAVE A PROJECT OR BUSINESS CHALLENGE?"
          title="Let's find the right digital solution for your business."
          body="Tell me what you're trying to build, improve, or simplify. We'll discuss the challenge, explore the right approach, and identify practical next steps."
          onContactClick={() => setContactOpen(true)}
          primaryLabel="Discuss Your Project"
          secondaryLabel="Message on WhatsApp"
        />

        <ServicesSection onContactClick={() => setContactOpen(true)} />

        <ConversionCtaStrip
          eyebrow="HAVE A PROJECT IN MIND?"
          title="Let's turn your business idea into a working digital solution."
          body="Share what you're planning to build, improve, or simplify. Tell me about your requirements, and let's explore the right approach for your business."
          onContactClick={() => setContactOpen(true)}
          tone="dark"
          primaryLabel="Discuss Your Project"
          secondaryLabel="Chat on WhatsApp"
        />

        <AboutSection />

        <BlogSection />

        <FAQSection />

        <ConversionCtaStrip
          eyebrow="HAVE A PROJECT IN MIND?"
          title="Let's work out the right way forward."
          body="You don't need a complete technical brief. Share your idea, business challenge, expected budget and timeline to start the conversation."
          onContactClick={() => setContactOpen(true)}
          tone="dark"
          primaryLabel="Start a Project"
          secondaryLabel="Chat on WhatsApp"
        />

        <section
          id="process"
          className="mx-auto max-w-screen-xl scroll-mt-24 px-5 py-8 sm:px-6 md:px-12 md:py-10 lg:px-20 lg:py-12"
        >
          <div className="grid gap-3 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div className="max-w-lg">
              <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
                How I Work
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-primary sm:text-3xl lg:text-[2rem] lg:leading-[1.08]">
                A clear process, from first conversation to launch.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-text-secondary">
              Every project starts with understanding the business need, defining
              the right solution and agreeing on a clear path to delivery.
            </p>
          </div>

          <div className="mt-5 grid gap-2.5 md:grid-cols-2 md:items-start lg:gap-3">
            {[
              {
                title: "01 – Understand Business Goals & Bottlenecks",
                body: "We discuss your business challenges, user workflows, and core requirements to ensure we solve the right problem before writing code.",
                featured: true,
                label: "Discovery",
                meta: "Goals, requirements, user workflows",
                Icon: FaCrosshairs,
              },
              {
                title: "02 – Plan Scope, Architecture & Milestones",
                body: "We map the technical architecture, choose the best tech stack, and define transparent milestones, deliverables, and fixed pricing.",
                featured: false,
                label: "Architecture",
                meta: "Scope, roadmap, fixed pricing",
                Icon: FaDatabase,
              },
              {
                title: "03 – Develop in Production-Ready Stages",
                body: "Build in clear iterations with regular progress reviews. You test working previews on private staging environments and share direct feedback.",
                featured: false,
                label: "Development",
                meta: "Staging previews, iterative feedback",
                Icon: FaUsers,
              },
              {
                title: "04 – Launch, Hand Over & Support",
                body: "Full production deployment, code handover, and team walkthrough, backed by 30 days of warranty and ongoing maintenance.",
                featured: false,
                label: "Deployment",
                meta: "Production launch, warranty, handover",
                Icon: FaSignal,
              },
            ].map((item, i) => (
              <article
                key={i}
                className={`group relative flex flex-col overflow-hidden rounded-[1.35rem] border p-4 transition-all duration-300 sm:p-5 ${
                  item.featured
                    ? "border-transparent accent-gradient text-white shadow-[0_18px_44px_-20px_rgba(17, 24, 39,0.45)]"
                    : "border-border/70 bg-background/90 shadow-[0_6px_24px_-14px_rgba(15,23,42,0.1)] hover:border-accent/30"
                }`}
              >
                {item.featured && (
                  <>
                    <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-0 left-1/3 h-16 w-16 rounded-full bg-white/8 blur-3xl" />
                  </>
                )}

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                        item.featured
                          ? "bg-white/14 text-white"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      <item.Icon size={15} />
                    </span>
                    <div>
                      <p
                        className={`text-[9px] font-bold uppercase tracking-[0.22em] ${item.featured ? "text-white/70" : "text-text-secondary/70"}`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`mt-0.5 text-[10px] ${item.featured ? "text-white/70" : "text-text-secondary/70"}`}
                      >
                        {item.meta}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] ${
                      item.featured
                        ? "bg-white/12 text-white/78"
                        : "bg-surface text-text-secondary/70"
                    }`}
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3
                  className={`relative z-10 mt-3 font-display text-base font-bold leading-snug sm:text-[17px] ${item.featured ? "text-white" : "text-primary"}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`relative z-10 mt-2 text-xs leading-5 sm:text-sm sm:leading-6 ${item.featured ? "text-white/74" : "text-text-secondary"}`}
                >
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Dedicated Contact Form Section */}
        <section
          id="contact"
          className="mx-auto max-w-screen-xl scroll-mt-24 px-5 py-8 sm:px-6 md:px-12 md:py-10 lg:px-20 lg:py-10"
        >
          <div className="grid items-start gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
                  Get in Touch
                </p>
                <h2 className="mt-2 max-w-xl font-display text-2xl font-bold leading-tight text-primary sm:text-3xl lg:text-[2rem] lg:leading-[1.08]">
                  Let's talk about what you want to build.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary">
                  Tell me about your idea, business challenge or project requirements.
                  I'll review the details and get back to you with the next steps.
                </p>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                <div className="rounded-xl border border-border/60 bg-background/80 p-3.5 sm:p-4">
                  <h3 className="font-display text-sm font-bold text-primary">
                    Why reach out?
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-text-secondary sm:text-sm sm:leading-6">
                    I help turn business bottlenecks into scalable systems teams
                    can run, grow, and rely on every day.
                  </p>
                </div>

                <div className="rounded-xl border border-border/60 bg-background/80 p-3.5 sm:p-4">
                  <h3 className="font-display text-sm font-bold text-primary">
                    What happens next?
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {[
                      "Review your project requirements",
                      "Arrange an initial 15-minute discovery call",
                      "Share suggested approach, scope & estimate",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-5 text-text-secondary sm:text-sm sm:leading-6"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-border/60 bg-background/80 p-3.5 sm:col-span-2 sm:p-4">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-accent">
                    Availability
                  </p>
                  <p
                    suppressHydrationWarning
                    className="mt-1.5 font-display text-sm font-bold text-primary"
                  >
                    {availabilityStatus}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-text-secondary sm:text-sm">
                    I take on 2-3 projects per month to keep delivery focused.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full rounded-[1.5rem] border border-border/60 bg-background/88 p-4 shadow-[0_18px_44px_-32px_rgba(15,23,42,0.14)] sm:p-5">
              <InlineContactForm />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-5 pb-16 sm:px-6 md:px-12 lg:px-20 lg:pb-24">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-[linear-gradient(135deg,#0f172a_0%,#111827_38%,#1d4ed8_100%)] px-6 py-10 text-white shadow-[0_32px_90px_-40px_rgba(37,99,235,0.42)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="pointer-events-none absolute -left-10 top-0 h-44 w-44 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-10 h-52 w-52 rounded-full bg-[rgba(17, 24, 39,0.24)] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[rgba(55, 65, 81,0.18)] blur-3xl" />

            <div className="relative z-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
              <div className="max-w-3xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                  Ready to Build?
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[3.2rem] lg:leading-[1]">
                  Have a business idea or challenge? Let's build the right solution.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
                  Whether you need a new digital product, a custom business application
                  or improvements to an existing system, let's discuss how I can help.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {contactDetails
                    .filter(({ label }) => label !== "WhatsApp")
                    .map(({ label, value, href, icon }) => {
                      const ContactIcon = icon;

                      return (
                        <a
                          key={label}
                          href={href}
                          target={
                            label === "LinkedIn" || label === "GitHub"
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            label === "LinkedIn" || label === "GitHub"
                              ? "noreferrer"
                              : undefined
                          }
                          className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2.5 text-[11px] font-medium text-white/84 backdrop-blur-sm transition-colors hover:border-white/28 hover:bg-white/12"
                        >
                          <ContactIcon size={12} />
                          <span className="text-white/70">{label}</span>
                          <span>{value}</span>
                        </a>
                      );
                    })}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-0 lg:justify-end">
                <button
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-primary shadow-[0_20px_50px_-28px_rgba(255,255,255,0.55)] transition-transform hover:-translate-y-1 sm:px-7 sm:text-xs sm:tracking-[0.2em]"
                >
                  <FaArrowRight size={12} />
                  Start a Project
                </button>
                <a
                  href="mailto:contact@codebyjerry.online?subject=Project%20Inquiry"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/8 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/32 hover:bg-white/12 sm:px-7 sm:text-xs sm:tracking-[0.2em]"
                >
                  <FaEnvelope size={13} />
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href={whatsappProjectHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full accent-gradient text-white shadow-[0_20px_45px_-20px_rgba(17, 24, 39,0.85)] transition-transform hover:-translate-y-1"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Exit Intent Popup */}
      <ExitIntentModal onOpenContact={() => setContactOpen(true)} />

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        availabilityStatus={availabilityStatus}
      />
    </div>
  );
}

const SPLITFORMS_ENDPOINT = "https://splitforms.com/api/submit";
const SPLITFORMS_ACCESS_KEY =
  import.meta.env.VITE_SPLITFORMS_ACCESS_KEY ||
  import.meta.env.VITE_STATICFORMS_ACCESS_KEY ||
  "fb96f3520a004414a6235358a73e07ea";

function ContactFormModal({
  isOpen,
  onClose,
  availabilityStatus = getAvailabilityStatus(),
}) {
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (botcheck) {
      setStatus("success");
      return;
    }

    const formElement = e.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    const sid = formElement.querySelector('input[name="sf_sid"]')?.value;

    const payload = {
      access_key: SPLITFORMS_ACCESS_KEY,
      name,
      email,
      phone,
      service,
      budget,
      timeline,
      message,
      source: "Portfolio Homepage Contact Modal",
      subject: "Website project inquiry",
      replyto: email,
      ...(sid ? { sf_sid: sid } : {}),
    };

    try {
      const response = await fetch(SPLITFORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message || `Submission failed with status ${response.status}`,
        );
      }

      if (typeof window !== "undefined" && window.splitforms?.done) {
        window.splitforms.done(formElement);
      }

      setStatus("success");
      // Reset form on success
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setBudget("");
      setTimeline("");
      setMessage("");
      setBotcheck(false);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(
        error?.message ||
          "Unable to send your message right now. Please try again.",
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-5 backdrop-blur-lg bg-black/60 animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] sm:rounded-[2.5rem] border border-border/40 bg-background shadow-[0_50px_120px_-30px_rgba(15,23,42,0.4)]">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-6 top-6 z-20 text-text-secondary hover:text-primary transition-colors p-2"
        >
          ✕
        </button>

        <div className="grid lg:grid-cols-[0.4fr_0.6fr]">
          {/* Left Panel */}
          <div className="hidden lg:flex flex-col justify-between accent-gradient p-10 text-white">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-70">
                Contact
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight">
                Let's talk about your project
              </h2>
              <p className="mt-6 text-sm leading-7 opacity-80">
                Tell me about your idea or business challenge. I'll get back to you
                within 24 hours with a clear perspective and practical next steps.
              </p>
            </div>

            <div className="space-y-4">
              <div
                suppressHydrationWarning
                className="flex items-center gap-4 text-xs"
              >
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                {availabilityStatus}
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="p-6 sm:p-8 lg:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10 animate-in zoom-in duration-500">
                <div className="h-16 w-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                  <FaCheckCircle size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Message Received!
                </h3>
                <p className="mt-3 text-sm text-text-secondary">
                  Thanks for reaching out. I've received your details and will
                  get back to you shortly with next steps.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 rounded-full bg-primary px-8 py-3 text-xs font-bold uppercase tracking-widest text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                action={SPLITFORMS_ENDPOINT}
                method="POST"
                data-sf-key={SPLITFORMS_ACCESS_KEY}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value={SPLITFORMS_ACCESS_KEY}
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  checked={botcheck}
                  onChange={(e) => setBotcheck(e.target.checked)}
                />

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="sf-modal-name"
                      className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="sf-modal-name"
                      name="name"
                      required
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-border/50 bg-surface/50 px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sf-modal-email"
                      className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-1.5"
                    >
                      Work Email
                    </label>
                    <input
                      id="sf-modal-email"
                      name="email"
                      required
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      className="w-full rounded-xl border border-border/50 bg-surface/50 px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="sf-modal-phone"
                      className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-1.5"
                    >
                      Phone (Optional)
                    </label>
                    <input
                      id="sf-modal-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 7092936243"
                      className="w-full rounded-xl border border-border/50 bg-surface/50 px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sf-modal-service"
                      className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-1.5"
                    >
                      Service Required
                    </label>
                    <select
                      id="sf-modal-service"
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full rounded-xl border border-border/50 bg-surface/50 px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="Custom Web Applications">Custom Web Applications</option>
                      <option value="eCommerce Development">eCommerce Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Backend Development & Integrations">Backend Development & Integrations</option>
                      <option value="Business Management Systems">Business Management Systems</option>
                      <option value="SEO-Ready Websites">SEO-Ready Websites</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="sf-modal-budget"
                      className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-1.5"
                    >
                      Approx Budget (Optional)
                    </label>
                    <select
                      id="sf-modal-budget"
                      name="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full rounded-xl border border-border/50 bg-surface/50 px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 – $3,000</option>
                      <option value="$3,000 - $7,000">$3,000 – $7,000</option>
                      <option value="$7,000+">$7,000+</option>
                      <option value="Flexible">Flexible / To be discussed</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="sf-modal-timeline"
                      className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-1.5"
                    >
                      Expected Timeline (Optional)
                    </label>
                    <select
                      id="sf-modal-timeline"
                      name="timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full rounded-xl border border-border/50 bg-surface/50 px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="Immediately (< 2 weeks)">Immediately (&lt; 2 weeks)</option>
                      <option value="1 - 2 months">1 – 2 months</option>
                      <option value="2 - 3 months">2 – 3 months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="sf-modal-message"
                    className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-1.5"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="sf-modal-message"
                    name="message"
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me what you're looking to build or improve..."
                    className="w-full rounded-xl border border-border/50 bg-surface/50 px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">{errorMessage}</p>
                )}

                <button
                  disabled={status === "submitting"}
                  type="submit"
                  className="w-full rounded-full accent-gradient py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>

                <p className="text-[10px] text-text-secondary/70 text-center pt-1">
                  Your information is 100% confidential and only used to respond to your project enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InlineContactForm() {
  const [status, setStatus] = useState("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (botcheck) {
      setStatus("success");
      return;
    }

    const formElement = e.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    const sid = formElement.querySelector('input[name="sf_sid"]')?.value;

    const payload = {
      access_key: SPLITFORMS_ACCESS_KEY,
      name,
      email,
      phone,
      service,
      budget,
      timeline,
      message,
      source: "Portfolio Homepage Inline Form",
      subject: "Website project inquiry",
      replyto: email,
      ...(sid ? { sf_sid: sid } : {}),
    };

    try {
      const response = await fetch(SPLITFORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message || `Submission failed with status ${response.status}`,
        );
      }

      if (typeof window !== "undefined" && window.splitforms?.done) {
        window.splitforms.done(formElement);
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setBudget("");
      setTimeline("");
      setMessage("");
      setBotcheck(false);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(
        error?.message ||
          "Unable to send your message right now. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center animate-in zoom-in duration-500">
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-500">
          <FaCheckCircle size={28} />
        </div>
        <h3 className="font-display text-lg font-bold text-primary">
          Message Received!
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          Thanks for reaching out. I'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setPhone("");
            setService("");
            setBudget("");
            setTimeline("");
            setMessage("");
            setBotcheck(false);
          }}
          className="mt-6 rounded-full bg-accent px-6 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-accent/90 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      action={SPLITFORMS_ENDPOINT}
      method="POST"
      data-sf-key={SPLITFORMS_ACCESS_KEY}
      onSubmit={handleSubmit}
      className="space-y-3"
    >
      <input
        type="hidden"
        name="access_key"
        value={SPLITFORMS_ACCESS_KEY}
      />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        checked={botcheck}
        onChange={(e) => setBotcheck(e.target.checked)}
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label
            htmlFor="sf-inline-name"
            className="mb-1 block text-[9px] font-bold uppercase tracking-widest text-text-secondary/70"
          >
            Your Name
          </label>
          <input
            id="sf-inline-name"
            name="name"
            required
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full rounded-lg border border-border/50 bg-surface/50 px-3 py-2 text-sm focus:border-accent focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="sf-inline-email"
            className="mb-1 block text-[9px] font-bold uppercase tracking-widest text-text-secondary/70"
          >
            Work Email
          </label>
          <input
            id="sf-inline-email"
            name="email"
            required
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@company.com"
            className="w-full rounded-lg border border-border/50 bg-surface/50 px-3 py-2 text-sm focus:border-accent focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label
            htmlFor="sf-inline-phone"
            className="mb-1 block text-[9px] font-bold uppercase tracking-widest text-text-secondary/70"
          >
            Phone Number (Optional)
          </label>
          <input
            id="sf-inline-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 7092936243"
            className="w-full rounded-lg border border-border/50 bg-surface/50 px-3 py-2 text-sm focus:border-accent focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="sf-inline-service"
            className="mb-1 block text-[9px] font-bold uppercase tracking-widest text-text-secondary/70"
          >
            Service Required
          </label>
          <select
            id="sf-inline-service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-lg border border-border/50 bg-surface/50 px-3 py-2 text-sm focus:border-accent focus:outline-none transition-colors"
          >
            <option value="">Select a service</option>
            <option value="Custom Web Applications">Custom Web Applications</option>
            <option value="eCommerce Development">eCommerce Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Backend Development & Integrations">Backend Development & Integrations</option>
            <option value="Business Management Systems">Business Management Systems</option>
            <option value="SEO-Ready Websites">SEO-Ready Websites</option>
          </select>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label
            htmlFor="sf-inline-budget"
            className="mb-1 block text-[9px] font-bold uppercase tracking-widest text-text-secondary/70"
          >
            Approx Budget (Optional)
          </label>
          <select
            id="sf-inline-budget"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full rounded-lg border border-border/50 bg-surface/50 px-3 py-2 text-sm focus:border-accent focus:outline-none transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="Under $1,000">Under $1,000</option>
            <option value="$1,000 - $3,000">$1,000 – $3,000</option>
            <option value="$3,000 - $7,000">$3,000 – $7,000</option>
            <option value="$7,000+">$7,000+</option>
            <option value="Flexible">Flexible / To be discussed</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="sf-inline-timeline"
            className="mb-1 block text-[9px] font-bold uppercase tracking-widest text-text-secondary/70"
          >
            Expected Timeline (Optional)
          </label>
          <select
            id="sf-inline-timeline"
            name="timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full rounded-lg border border-border/50 bg-surface/50 px-3 py-2 text-sm focus:border-accent focus:outline-none transition-colors"
          >
            <option value="">Select timeline</option>
            <option value="Immediately (< 2 weeks)">Immediately (&lt; 2 weeks)</option>
            <option value="1 - 2 months">1 – 2 months</option>
            <option value="2 - 3 months">2 – 3 months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="sf-inline-message"
          className="mb-1 block text-[9px] font-bold uppercase tracking-widest text-text-secondary/70"
        >
          Project Details
        </label>
        <textarea
          id="sf-inline-message"
          name="message"
          required
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly describe the challenge or what you want to build..."
          className="w-full resize-none rounded-lg border border-border/50 bg-surface/50 px-3 py-2 text-sm focus:border-accent focus:outline-none transition-colors"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">{errorMessage}</p>
      )}

      <button
        disabled={status === "submitting"}
        type="submit"
        className="w-full rounded-full accent-gradient py-2.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-[10px] text-text-secondary/60 text-center pt-0.5">
        Your details are kept strictly confidential and only used to respond to your project enquiry.
      </p>
    </form>
  );
}

function ExitIntentModal({ onOpenContact }) {
  const [shown, setShown] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e) => {
      if (dismissed || shown) return;
      if (e.clientY <= 0 || e.relatedTarget === null) {
        setShown(true);
      }
    };

    // Delay activation by 5s so it doesn't show immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseOut);
    }, 5000);

    return () => {
      document.removeEventListener("mouseleave", handleMouseOut);
      clearTimeout(timer);
    };
  }, [shown, dismissed]);

  if (!shown) return null;

  const handleAction = () => {
    setShown(false);
    setDismissed(true);
    if (onOpenContact) {
      onOpenContact();
    } else {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = "contact";
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 backdrop-blur-md bg-black/40 animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-primary p-8 text-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] sm:p-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />

        <button
          onClick={() => {
            setShown(false);
            setDismissed(true);
          }}
          className="absolute right-6 top-6 text-white/50 hover:text-white"
        >
          ✕
        </button>

        <div className="relative z-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-soft">
            Wait! Before you go...
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Want to see how I scale systems?
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/70">
            Get a tailored <strong className="font-semibold text-white">Project Execution Roadmap</strong> for your product. Share your bottlenecks or goals, and let's map out the right architecture and delivery plan.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={handleAction}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-transform hover:-translate-y-1 shadow-xl"
            >
              Get the Roadmap
              <FaArrowRight size={13} className="text-accent" />
            </button>
            <button
              type="button"
              onClick={() => {
                setShown(false);
                setDismissed(true);
              }}
              className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white/60"
            >
              No thanks, just browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
