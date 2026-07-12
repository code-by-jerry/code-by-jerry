import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  FaArrowRight,
  FaChartLine,
  FaCogs,
  FaCompass,
  FaQuoteLeft,
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
  FaSyncAlt,
  FaClock,
  FaDatabase,
  FaRobot,
  FaMoneyBillWave,
  FaCartArrowDown,
  FaTachometerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Web Applications",
    description:
      "Custom business systems, dashboards, and admin panels built for real workflows. Designed for teams that need speed, clarity, and control over their operations. Built to scale as your business grows.",
    eyebrow: "Custom Systems",
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/web_serv.png",
  },
  {
    title: "eCommerce Systems",
    description:
      "High-converting online stores with payment integrations and cleaner buying flows. From Shopify to custom storefronts, built for checkout performance and retention. Every detail is shaped around revenue, not just aesthetics.",
    eyebrow: "Revenue Focused",
    image:
      "https://ik.imagekit.io/codebyjerry/coj%20services/ecommerce_serv.png",
  },
  {
    title: "Mobile Applications",
    description:
      "Flutter or hybrid app experiences connected tightly with your backend systems. Built for real users, fast, reliable, and consistent across platforms. Designed to keep users engaged and operations running smoothly.",
    eyebrow: "Mobile Delivery",
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/Mobile_serv.png",
  },
  {
    title: "Backend & APIs",
    description:
      "APIs, automation, integrations, and scalable architectures that support real growth. Clean, documented, and built to handle production load without breaking. The backbone that keeps every system running reliably.",
    eyebrow: "Core Logic",
    image: "https://ik.imagekit.io/codebyjerry/coj%20services/backend_serv.png",
  },
  {
    title: "Business Platforms",
    description:
      "End-to-end platforms built around your business model, from user flows to backend logic and scaling. Role-based access, operational dashboards, and automation built in from day one. Systems your team will actually depend on.",
    eyebrow: "Business First",
    image:
      "https://ik.imagekit.io/codebyjerry/coj%20services/Business_serv.png",
    featured: true,
  },
  {
    title: "Growth & SEO",
    description:
      "Performance optimization and search ranking improvements for long-term visibility. Technical SEO, Core Web Vitals, and speed improvements that compound over time. Built to rank, load fast, and convert better.",
    eyebrow: "Search Growth",
    image:
      "https://ik.imagekit.io/codebyjerry/coj%20services/seo_growth_serv.png",
  },
];

const impactStats = [
  {
    value: 40,
    suffix: "%",
    headline: "Faster Load Times",
    label:
      "Achieved through architecture refactoring, lazy loading, and leaner delivery pipelines.",
    tone: "dark",
    icon: FaBolt,
    proof: "Measured on production builds",
  },
  {
    value: 2,
    suffix: "x",
    headline: "Conversion Improvement",
    label:
      "Interfaces rebuilt around user intent, reducing friction at every decision point.",
    tone: "light",
    icon: FaChartLine,
    proof: "Across eCommerce & landing systems",
  },
  {
    value: 10000,
    suffix: "+",
    headline: "Users on Live Systems",
    label:
      "Platforms engineered to scale horizontally with no bottlenecks under real traffic.",
    tone: "accent",
    icon: FaUsers,
    proof: "Active users across deployed platforms",
  },
  {
    staticValue: "99.9%",
    headline: "Production Uptime",
    label:
      "Systems built with reliability-first architecture, proper error handling, and monitoring.",
    tone: "soft",
    icon: FaShieldAlt,
    proof: "Across all production deployments",
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
    name: "Contributions",
    src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/logo.svg?updatedAt=1779038004821",
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
  "Revenue Infrastructure",
  "Operational Platforms",
  "Backend & APIs",
  "Growth Systems",
];

const aboutStats = [
  {
    value: "10+",
    label: "Industry Verticals",
  },
  {
    value: "10K+",
    label: "Users Supported",
  },
  {
    value: "40%",
    label: "Performance Improvement",
  },
];

const trustLogos = [
  "Atha Platform",
  "DestroSolutions",
  "Commerce Systems",
  "Admin Platforms",
];

const trustTestimonials = [
  {
    quote:
      "Jerry builds with business clarity. The product did not just look better after the rebuild, it became faster and easier for the team to operate.",
    response:
      "We rebuilt the workflow around the team using it every day, then tightened the system until speed and reliability showed up in production.",
    author: "Product Stakeholder",
    role: "Operations Platform",
    dashboard: {
      label: "Operations Platform",
      color: "#1F2937",
      metrics: [
        { label: "Team Efficiency", value: "+60%", Icon: FaCogs },
        { label: "Manual Tasks", value: "-80%", Icon: FaRobot },
        { label: "Uptime", value: "99.9%", Icon: FaShieldAlt },
      ],
      bars: [
        { label: "Workflow Speed", pct: 60 },
        { label: "Data Accuracy", pct: 85 },
        { label: "Team Adoption", pct: 92 },
      ],
      spark: [3, 4, 5, 6, 5, 7, 8, 7, 9, 10, 9, 10],
      sparkLabel: "Operational Output",
    },
  },
  {
    quote:
      "Strong ownership, clean delivery, and thoughtful technical decisions. The system was structured for scale instead of patched together for launch day.",
    response:
      "The delivery stayed structured from scope to launch, which kept milestones tight and made the finished system easier to extend.",
    author: "Project Lead",
    role: "Client Delivery Team",
    dashboard: {
      label: "Delivery Performance",
      color: "#374151",
      metrics: [
        { label: "On-Time Delivery", value: "100%", Icon: FaCheckCircle },
        { label: "Milestones Hit", value: "12/12", Icon: FaCrosshairs },
        { label: "Revisions", value: "< 3", Icon: FaSyncAlt },
      ],
      bars: [
        { label: "Scope Accuracy", pct: 95 },
        { label: "Timeline Adherence", pct: 100 },
        { label: "Client Satisfaction", pct: 98 },
      ],
      spark: [5, 6, 6, 7, 8, 8, 9, 9, 10, 10, 10, 10],
      sparkLabel: "Project Delivery Score",
    },
  },
  {
    quote:
      "What stood out was the business-first thinking. Jerry did not just build what we asked. He questioned the brief, improved the flow, and delivered something better.",
    response:
      "We optimized the experience around buying behavior, not just screens, which pushed conversion and revenue in the right direction.",
    author: "Founder",
    role: "eCommerce Startup",
    dashboard: {
      label: "eCommerce Impact",
      color: "#4B5563",
      metrics: [
        { label: "Conversion Rate", value: "+2x", Icon: FaChartLine },
        { label: "Cart Abandonment", value: "-35%", Icon: FaCartArrowDown },
        { label: "Revenue Growth", value: "+48%", Icon: FaMoneyBillWave },
      ],
      bars: [
        { label: "Checkout Completion", pct: 78 },
        { label: "Page Speed Score", pct: 92 },
        { label: "Mobile Conversion", pct: 65 },
      ],
      spark: [2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10, 10],
      sparkLabel: "Monthly Revenue Trend",
    },
  },
  {
    quote:
      "The admin system he built replaced three manual processes overnight. Our team went from spending hours on data entry to having everything automated and visible in one place.",
    response:
      "We replaced repetitive manual work with connected automation so the team could move faster with better visibility and fewer errors.",
    author: "Operations Manager",
    role: "Logistics Platform",
    dashboard: {
      label: "Logistics Automation",
      color: "#1F2937",
      metrics: [
        { label: "Processes Automated", value: "3 to 0", Icon: FaRobot },
        { label: "Time Saved/Week", value: "40hrs", Icon: FaClock },
        { label: "Data Errors", value: "-95%", Icon: FaDatabase },
      ],
      bars: [
        { label: "Automation Coverage", pct: 88 },
        { label: "Data Visibility", pct: 100 },
        { label: "Team Productivity", pct: 72 },
      ],
      spark: [2, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 10],
      sparkLabel: "Automation Adoption",
    },
  },
  {
    quote:
      "Performance was a real concern for us. After the rebuild, load times dropped significantly and the system handled our peak traffic without any issues.",
    response:
      "The rebuild focused on faster delivery paths, cleaner backend behavior, and a steadier system under real traffic peaks.",
    author: "Technical Lead",
    role: "Real Estate Platform",
    dashboard: {
      label: "Performance Metrics",
      color: "#374151",
      metrics: [
        { label: "Load Time", value: "< 2s", Icon: FaBolt },
        { label: "Peak Users", value: "10K+", Icon: FaUsers },
        { label: "Speed Gain", value: "+40%", Icon: FaTachometerAlt },
      ],
      bars: [
        { label: "Core Web Vitals", pct: 94 },
        { label: "Server Response", pct: 88 },
        { label: "Uptime", pct: 99 },
      ],
      spark: [4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 10, 10],
      sparkLabel: "Performance Score Over Time",
    },
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
    title: "Building Scalable Web Applications: A Business-First Approach",
    excerpt:
      "Learn how to architect web applications that grow with your business, focusing on performance, maintainability, and real user needs rather than just features.",
    readTime: "5 min read",
    category: "Architecture",
    image: "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%201.png",
    link: "/blog/building-scalable-web-applications",
  },
  {
    title: "Why Your eCommerce Store Needs a Custom Backend",
    excerpt:
      "Generic platforms work for basic stores, but serious eCommerce businesses need custom backends for competitive advantages, unique workflows, and scalable growth.",
    readTime: "4 min read",
    category: "eCommerce",
    image: "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%202.png",
    link: "/blog/why-ecommerce-needs-custom-backend",
  },
  {
    title: "Mobile Apps That Drive Business Results",
    excerpt:
      "Beyond pretty interfaces: how to build mobile experiences that increase engagement, retention, and ultimately drive revenue for your business.",
    readTime: "6 min read",
    category: "Mobile",
    image: "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%203.png",
    link: "/blog/mobile-apps-that-drive-business-results",
  },
];

const faqData = [
  {
    question:
      "How do you ensure projects are delivered on time and within budget?",
    answer:
      "I begin with planning, architecture, and milestone-based delivery. Each project includes clear scope, regular updates, and a focus on the product outcome so the solution is built efficiently and transparently.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern product engineering stacks—frontends, APIs, mobile, and cloud-powered backend systems. I choose the right tools for the business need, including Laravel/PHP, React, Flutter, and scalable infrastructure patterns.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, I offer maintenance packages and am available for ongoing development. Many clients continue working with me for feature additions, optimizations, and scaling as their business grows.",
  },
  {
    question: "How do you handle project communication and updates?",
    answer:
      "I provide weekly progress updates, use project management tools, and am always available for calls/meetings. You get direct access to me, not project managers or intermediaries.",
  },
  {
    question: "What makes your approach different from other freelancers?",
    answer:
      "I focus on business outcomes over just coding. I question requirements, optimize for performance, and build systems that actually solve real problems rather than just implementing specifications.",
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer:
      "I work with both startups and established businesses. I understand the different needs - startups need speed and iteration, while established businesses need reliability and integration with existing systems.",
  },
];

const billingScreens = [
  "https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182025.png",
  "https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182122.png",
  "https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182250.png",
  "https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182345.png",
  "https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182107.png",
  "https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182136.png",
  "https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182527.png",
  "https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182608.png",
  "https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20182053.png",
  "https://ik.imagekit.io/codebyjerry/works/billing/Screenshot%202026-04-11%20183413.png",
];

const camiprodScreens = [
  "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144833.png?updatedAt=1776506056407",
  "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144853.png?updatedAt=1776506056398",
  "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144548.png?updatedAt=1776506054013",
  "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144659.png?updatedAt=1776506055429",
  "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144745.png?updatedAt=1776506054151",
  "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144819.png?updatedAt=1776506054135",
  "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144802.png?updatedAt=1776506054356",
  "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144915.png?updatedAt=1776506053788",
  "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144641.png?updatedAt=1776506053279",
  "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144721.png?updatedAt=1776506052388",
];

const jippymartScreens = [
  "https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20151950.png",
  "https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20152058.png",
  "https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20152205.png",
  "https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20151852.png",
  "https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20152009.png",
  "https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20152135.png",
  "https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20151846.png",
  "https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20152026.png",
  "https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20151637.png",
  "https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20151838.png",
  "https://ik.imagekit.io/codebyjerry/works/Jippy%20Mart/Screenshot%202026-05-20%20151654.png",
];

const caseStudies = [
  {
    title: "Atha Constructions",
    category: "Construction Operations",
    tagline:
      "Lead-focused construction platform with consultation workflows, pricing visibility, inquiry handling, and admin operations.",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Atha%20Constructions.webp?updatedAt=1777100806093",
    link: "https://athaconstruction.in/",
    images: [
      "https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145530.png?updatedAt=1776505896460&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145546.png?updatedAt=1776505896414&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145656.png?updatedAt=1776505896444&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145624.png?updatedAt=1776505896411&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145311.png?updatedAt=1776505896420&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145446.png?updatedAt=1776505896420&tr=f-auto,q-80",
    ],
  },
  {
    title: "JippyMart",
    category: "Food Delivery",
    tagline:
      "Full-scale food delivery ecosystem with customer storefront, restaurant panel, admin operations, and delivery coordination.",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/jippymart.webp?updatedAt=1777100737251",
    link: "https://jippymart.in/mart/",
    images: jippymartScreens,
  },
  {
    title: "Area24Realty",
    category: "Real Estate",
    tagline:
      "Multi-region real estate platform with interactive mapping, listing management, dashboards, portals, and lead handling.",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/area24realty.webp?updatedAt=1777100909832",
    link: "https://area24group.com/",
    images: [
      "https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174924.png?updatedAt=1776506172591&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174906.png?updatedAt=1776506172562&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175012.png?updatedAt=1776506172472&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174958.png?updatedAt=1776506172458&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180325.png?updatedAt=1776506172517&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180242.png?updatedAt=1776506172393&tr=f-auto,q-80",
    ],
  },
  {
    title: "Nesthetix Designs",
    category: "Interior Design",
    tagline:
      "Premium design business website with lead generation, service showcasing, SEO structure, CMS management, and project presentation.",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/nesthetix.webp?updatedAt=1777100737298",
    link: "https://nesthetixdesigns.com/",
    images: [
      "https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174304.png?updatedAt=1776506131947&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174404.png?updatedAt=1776506131779&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174512.png?updatedAt=1776506131736&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174224.png?updatedAt=1776506131740&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174324.png?updatedAt=1776506131733&tr=f-auto,q-80",
    ],
  },
  {
    title: "Baybee",
    category: "Shopify eCommerce",
    tagline:
      "Conversion-focused Shopify storefront with optimized product structure, mobile buying flow, and commerce presentation.",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Baybee_logo.svg?updatedAt=1779037891024",
    link: "https://baybee.co.in/",
    images: [
      "https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181456.png?updatedAt=1776505955612&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181416.png?updatedAt=1776505955600&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181443.png?updatedAt=1776505955588&tr=f-auto,q-80",
      "https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181400.png?updatedAt=1776505955585&tr=f-auto,q-80",
    ],
  },
  {
    title: "Aaran Billing",
    category: "Accounting & Inventory",
    tagline:
      "Internal GST-ready accounting and inventory system for garment, knitting, and printing operations with transaction workflows and reporting.",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/aaraninfo.png?updatedAt=1777100866170",
    images: billingScreens,
  },
];

const detailedCaseStudies = [
  {
    id: 1,
    client: "Atha Constructions",
    industry: "Construction",
    status: "Live",
    year: "2026",
    liveUrl: "https://athaconstruction.in/",
    serviceType: "Lead Platform + Admin Operations",
    challenge:
      "Consultation requests, pricing visibility, and content updates were handled manually across disconnected tools instead of one operational system.",
    solution:
      "Built a Laravel + React (Inertia) platform with structured lead capture, estimator tools, SEO-ready pages, theme controls, and an admin panel the team can run without developer support.",
    metrics: [
      { label: "Engagement", value: "Dec 2025–" },
      { label: "Screens", value: "6" },
      { label: "Platforms", value: "Web + Admin" },
      { label: "Status", value: "Live" },
    ],
    deliverables: [
      {
        metric: "Lead operations",
        detail: "Consultation flows, inquiry handling, and package visibility in one system.",
        icon: FaEnvelope,
      },
      {
        metric: "Estimator tooling",
        detail: "Cost estimator and pricing workflows built into the public site.",
        icon: FaCogs,
      },
      {
        metric: "Admin control",
        detail: "Internal panel for content, themes, SEO settings, and operational updates.",
        icon: FaDatabase,
      },
      {
        metric: "Production launch",
        detail: "Live deployment at athaconstruction.in.",
        icon: FaRocket,
      },
    ],
    technologies: ["React", "Inertia.js", "Laravel", "MySQL", "SEO"],
  },
  {
    id: 2,
    client: "JippyMart",
    industry: "Food Delivery",
    status: "Live",
    year: "2025",
    liveUrl: "https://jippymart.in/mart/",
    serviceType: "Full Commerce Platform + Operations",
    challenge:
      "Food delivery needed one system connecting customers, restaurants, admins, and fulfillment — not separate tools patched together.",
    solution:
      "Delivered a Laravel-based commerce platform with restaurant onboarding, order operations, Razorpay payments, Firebase integrations, and multi-role admin tooling.",
    metrics: [
      { label: "Build year", value: "2025" },
      { label: "Screens", value: "11" },
      { label: "User roles", value: "3" },
      { label: "Status", value: "Live" },
    ],
    deliverables: [
      {
        metric: "Customer storefront",
        detail: "Public ordering experience with commerce flows built for daily use.",
        icon: FaCartArrowDown,
      },
      {
        metric: "Restaurant panel",
        detail: "Onboarding and order operations for restaurant partners.",
        icon: FaUsers,
      },
      {
        metric: "Admin operations",
        detail: "Centralized control for orders, coordination, and platform management.",
        icon: FaCogs,
      },
      {
        metric: "Payments & integrations",
        detail: "Razorpay, Firebase, and REST API workflows wired into production.",
        icon: FaBolt,
      },
    ],
    technologies: ["Laravel", "Firebase", "MySQL", "Razorpay", "REST API"],
  },
  {
    id: 3,
    client: "Area24Realty",
    industry: "Real Estate",
    status: "Live",
    year: "2025",
    liveUrl: "https://area24group.com/",
    serviceType: "Property Platform + Lead Operations",
    challenge:
      "Property discovery, listing publishing, and lead routing needed to work together across regions instead of spreadsheets and static pages.",
    solution:
      "Built a Laravel + TypeScript platform with map-aware browsing, listing workflows, agent and owner portals, and SEO-ready property pages.",
    metrics: [
      { label: "Build year", value: "2025" },
      { label: "Screens", value: "6" },
      { label: "Portals", value: "Owner + Agent" },
      { label: "Status", value: "Live" },
    ],
    deliverables: [
      {
        metric: "Property discovery",
        detail: "Map-aware browsing and structured listing experiences.",
        icon: FaSignal,
      },
      {
        metric: "Listing workflows",
        detail: "Publishing and management tools for property operations.",
        icon: FaCogs,
      },
      {
        metric: "Portal systems",
        detail: "Owner and agent-facing workflows for day-to-day operations.",
        icon: FaUsers,
      },
      {
        metric: "Production launch",
        detail: "Live deployment at area24group.com.",
        icon: FaRocket,
      },
    ],
    technologies: ["Laravel", "TypeScript", "MySQL", "Maps", "SEO"],
  },
  {
    id: 4,
    client: "Nesthetix Designs",
    industry: "Interior Design",
    status: "Live",
    year: "2025",
    liveUrl: "https://nesthetixdesigns.com/",
    serviceType: "Brand Platform + Lead Generation",
    challenge:
      "The business needed a site that builds trust, showcases work clearly, and turns interest into qualified inquiries while staying easy to update.",
    solution:
      "Built a Laravel + React (Inertia) experience with project presentation, service pages, lead forms, CMS-managed content, and motion-led brand presentation.",
    metrics: [
      { label: "Build year", value: "2025" },
      { label: "Screens", value: "5" },
      { label: "CMS", value: "Team-managed" },
      { label: "Status", value: "Live" },
    ],
    deliverables: [
      {
        metric: "Brand presentation",
        detail: "Service and project showcase designed for a premium design business.",
        icon: FaChartLine,
      },
      {
        metric: "Lead generation",
        detail: "Inquiry flows integrated into the browsing experience.",
        icon: FaEnvelope,
      },
      {
        metric: "CMS operations",
        detail: "Lightweight content management for team-led updates.",
        icon: FaDatabase,
      },
      {
        metric: "Production launch",
        detail: "Live deployment at nesthetixdesigns.com.",
        icon: FaRocket,
      },
    ],
    technologies: ["React", "Inertia.js", "Laravel", "ImageKit", "GSAP"],
  },
  {
    id: 5,
    client: "Baybee",
    industry: "Shopify Commerce",
    status: "Live",
    year: "2024",
    liveUrl: "https://baybee.co.in/",
    serviceType: "Shopify Storefront",
    challenge:
      "The brand needed a storefront that feels trustworthy on mobile, organizes products clearly, and supports smoother buying decisions.",
    solution:
      "Implemented and refined the Shopify storefront with structured collections, Liquid theme work, GoKwik checkout integration, and conversion-focused product presentation.",
    metrics: [
      { label: "Build year", value: "2024" },
      { label: "Screens", value: "5" },
      { label: "Checkout", value: "GoKwik" },
      { label: "Status", value: "Live" },
    ],
    deliverables: [
      {
        metric: "Storefront structure",
        detail: "Organized collections and product pages for a baby products brand.",
        icon: FaCartArrowDown,
      },
      {
        metric: "Checkout flow",
        detail: "GoKwik-integrated purchase path tuned for mobile buyers.",
        icon: FaBolt,
      },
      {
        metric: "Theme implementation",
        detail: "Shopify Liquid and custom UI work across key commerce pages.",
        icon: FaCogs,
      },
      {
        metric: "Production launch",
        detail: "Live store at baybee.co.in.",
        icon: FaRocket,
      },
    ],
    technologies: ["Shopify", "Liquid", "GoKwik", "Custom UI"],
  },
  {
    id: 6,
    client: "Aaran Billing",
    industry: "Accounting & Inventory",
    status: "Internal",
    year: "2024",
    serviceType: "Internal Operations Platform",
    challenge:
      "Accounting, inventory tracking, and GST workflows were spread across manual processes that slowed reconciliation and month-end operations.",
    solution:
      "Built an internal Laravel + Livewire system with invoicing, inventory sync, purchase/sales workflows, GST-ready accounting, and operational reporting.",
    metrics: [
      { label: "Build year", value: "2024" },
      { label: "Screens", value: "10" },
      { label: "Modules", value: "4" },
      { label: "Status", value: "Internal" },
    ],
    deliverables: [
      {
        metric: "GST workflows",
        detail: "Invoicing and accounting flows built for Indian tax operations.",
        icon: FaShieldAlt,
      },
      {
        metric: "Inventory control",
        detail: "Stock, purchase, and sales handling in one internal system.",
        icon: FaDatabase,
      },
      {
        metric: "Operational reporting",
        detail: "Reporting tailored to garment, knitting, and printing operations.",
        icon: FaChartLine,
      },
      {
        metric: "Internal deployment",
        detail: "Private system used for day-to-day business operations.",
        icon: FaCogs,
      },
    ],
    technologies: ["Laravel", "Livewire", "PHP", "MySQL", "GST"],
  },
];

function DetailedCaseStudiesSection() {
  const [activeStudy, setActiveStudy] = useState(0);
  const study = detailedCaseStudies[activeStudy];

  return (
    <section className="relative mx-auto max-w-screen-xl scroll-mt-24 px-5 py-8 sm:px-6 md:px-12 md:py-10 lg:px-20 lg:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(17, 24, 39,0.04),transparent_50%)]" />

      <div className="relative z-10">
        <div className="mb-6 max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
            Case Studies
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-primary sm:text-3xl lg:text-4xl">
            Verified builds across live and internal systems.
          </h2>
          <p className="mt-3 text-sm leading-6 text-text-secondary sm:text-base">
            Project facts from real deployments — build timeline, documented
            screens, scope, stack, and live links where available.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Case Study Cards - Left Column */}
          <div className="flex flex-col gap-2 lg:col-span-1">
            {detailedCaseStudies.map((cs, idx) => (
              <button
                key={cs.id}
                onClick={() => setActiveStudy(idx)}
                className={`relative rounded-xl border p-3 text-left transition-all ${
                  activeStudy === idx
                    ? "border-accent bg-accent/5 shadow-[0_6px_20px_-8px_rgba(17, 24, 39,0.25)]"
                    : "border-border/40 hover:border-border/60 hover:bg-surface/50"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`font-display text-sm font-bold ${activeStudy === idx ? "text-primary" : "text-primary/80"}`}
                    >
                      {cs.client}
                    </h3>
                    <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-text-secondary/70">
                      {cs.industry}
                      {cs.status ? ` · ${cs.status}` : ""}
                    </p>
                    <p className="mt-1 text-xs text-text-secondary line-clamp-1">
                      {cs.serviceType}
                    </p>
                  </div>
                  {activeStudy === idx && (
                    <div className="shrink-0 rounded-full bg-accent p-1.5 text-white">
                      <FaCheckCircle size={13} />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Results - Right 2 Columns */}
          <div className="flex flex-col gap-4 rounded-xl border border-border/60 bg-background/70 p-4 sm:p-5 lg:col-span-2">
            {/* Challenge & Solution */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent">
                  Challenge
                </p>
                <p className="mt-2 text-xs leading-5 text-text-secondary">
                  {study.challenge}
                </p>
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent">
                  Solution
                </p>
                <p className="mt-2 text-xs leading-5 text-text-secondary">
                  {study.solution}
                </p>
              </div>
            </div>

            {/* Deliverables Grid */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent mb-2">
                What Shipped
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {study.deliverables.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-lg bg-surface/60 p-2.5 border border-border/40"
                    >
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 text-accent shrink-0">
                          <Icon size={16} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-text-secondary/70">
                            {item.metric}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-primary">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Project Metrics */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent mb-2">
                Project Snapshot
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {study.metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-border/40 bg-surface/40 px-3 py-2.5"
                  >
                    <p className="font-display text-base font-bold leading-tight text-primary sm:text-lg">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-text-secondary/70">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Info */}
            <div className="border-t border-border/40 pt-3">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">
                  Tech Stack
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {study.liveUrl && (
                <p className="mt-2 text-[10px] text-text-secondary/80">
                  Live at{" "}
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-primary underline decoration-border/60 underline-offset-2 hover:text-accent"
                  >
                    {study.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </a>
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:contact@codebyjerry.online"
                className="inline-flex w-max items-center gap-2 rounded-full bg-accent px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-accent/85"
              >
                Start Project
                <FaArrowRight size={10} />
              </a>
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-max items-center gap-2 rounded-full border border-border/70 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-primary transition-all hover:border-accent/50 hover:text-accent"
                >
                  View Live Site
                  <FaExternalLinkAlt size={10} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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

function HighImpactSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frameId = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(frameId);
    }
    let frameId = 0,
      startTime = 0;
    const duration = 1600;
    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const raw = Math.min((timestamp - startTime) / duration, 1);
      setProgress(1 - Math.pow(1 - raw, 3));
      if (raw < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible]);

  const formatValue = (stat) => {
    if (stat.staticValue) return stat.staticValue;
    const v = Math.round(stat.value * progress);
    return `${new Intl.NumberFormat("en-US").format(v)}${stat.suffix}`;
  };

  const cardStyles = {
    dark: {
      wrap: "bg-primary border-primary text-white hover:shadow-[0_28px_60px_-24px_rgba(15,23,42,0.55)]",
      label: "text-white/70",
      proof: "text-white/70",
    },
    light: {
      wrap: "bg-background/95 border-border/60 text-primary hover:border-accent/30 hover:shadow-[0_28px_60px_-24px_rgba(17, 24, 39,0.2)]",
      label: "text-text-secondary",
      proof: "text-text-secondary/70",
    },
    accent: {
      wrap: "accent-gradient border-transparent text-white hover:shadow-[0_28px_60px_-24px_rgba(17, 24, 39,0.55)]",
      label: "text-white/70",
      proof: "text-white/70",
    },
    soft: {
      wrap: "bg-surface border-border/60 text-primary hover:border-accent/25 hover:shadow-[0_28px_60px_-24px_rgba(17, 24, 39,0.15)]",
      label: "text-text-secondary",
      proof: "text-text-secondary/70",
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-screen-xl px-5 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20"
    >
      {/* Subtle bg depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17, 24, 39,0.04),transparent_65%)]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
              Real results from production systems
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Results clients can feel in the product and in the business.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            Strong systems are useful. Measurable impact is what makes them
            valuable. These numbers come from real production builds, not
            estimates.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((stat) => {
            const s = cardStyles[stat.tone];
            const Icon = stat.icon;
            return (
              <article
                key={stat.headline}
                className={`group flex min-h-[240px] flex-col justify-between rounded-[2rem] border p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)] transition-all duration-400 ease-out hover:-translate-y-1.5 ${s.wrap}`}
              >
                <div>
                  {/* Icon + label row */}
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center text-xl">
                      <Icon aria-hidden="true" />
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-[0.2em] ${s.proof}`}
                    >
                      {stat.proof}
                    </span>
                  </div>

                  {/* Count-up number */}
                  <p className="mt-5 font-display text-5xl font-bold leading-none tabular-nums sm:text-6xl">
                    {formatValue(stat)}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-tight">
                    {stat.headline}
                  </h3>
                  <p className={`mt-3 text-sm leading-6 ${s.label}`}>
                    {stat.label}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceFlipCard({ title, description, eyebrow, image, featured }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className=""
      style={{ perspective: "1000px" }}
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
        {/* Front: Image on top (full width), title at bottom; no grayscale */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between overflow-hidden rounded-[1.75rem] p-4"
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
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-text-secondary/70">
                {eyebrow}
              </p>
            )}
            <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-primary">
              {title}
            </h3>
          </div>
        </div>

        {/* Back: Solid background with description */}
        <div
          className={`absolute inset-0 flex flex-col justify-center overflow-hidden rounded-[1.75rem] p-6 ${
            featured ? "bg-primary text-white" : "bg-primary text-white"
          }`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative z-10">
            <p className="text-sm leading-6 text-white/90">{description}</p>
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
              Product engineering for real business platforms
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-sm leading-7 text-text-secondary sm:text-base">
              From customer-facing experiences to backend architecture, high-velocity
              product engineering for systems you can launch and scale.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-3 rounded-full accent-gradient px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_14px_34px_-18px_rgba(17, 24, 39,0.72)] transition-all hover:-translate-y-1"
              >
                Discuss a system build
                <FaArrowRight size={11} />
              </button>
              <a
                href={whatsappProjectHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary transition-all hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
              >
                <FaWhatsapp size={14} />
                WhatsApp
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

// ContributionsSection removed

function CaseStudiesSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [paused, setPaused] = useState(false);
  const currentProject = caseStudies[activeProject];
  const currentImages = currentProject.images;
  const total = currentImages.length;

  useEffect(() => {
    if (total < 2 || paused) return;
    const id = window.setInterval(() => {
      setActiveImage((c) => (c + 1) % total);
    }, 3600);
    return () => window.clearInterval(id);
  }, [total, paused]);

  // Returns position slot: -2 | -1 | 0 (center) | 1 | 2
  const getSlot = (idx) => {
    let diff = idx - activeImage;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  // Style per slot
  const slotStyle = (slot) => {
    const abs = Math.abs(slot);
    if (abs > 2) return { display: "none" };
    const configs = {
      0: {
        transform:
          "translateX(0%)   translateZ(0px)   rotateY(0deg)   scale(1)",
        zIndex: 30,
        opacity: 1,
        filter: "none",
      },
      1: {
        transform:
          "translateX(58%)  translateZ(-120px) rotateY(-22deg) scale(0.82)",
        zIndex: 20,
        opacity: 0.72,
        filter: "blur(0.5px)",
      },
      "-1": {
        transform:
          "translateX(-58%) translateZ(-120px) rotateY(22deg)  scale(0.82)",
        zIndex: 20,
        opacity: 0.72,
        filter: "blur(0.5px)",
      },
      2: {
        transform:
          "translateX(95%)  translateZ(-220px) rotateY(-32deg) scale(0.65)",
        zIndex: 10,
        opacity: 0.35,
        filter: "blur(1.5px)",
      },
      "-2": {
        transform:
          "translateX(-95%) translateZ(-220px) rotateY(32deg)  scale(0.65)",
        zIndex: 10,
        opacity: 0.35,
        filter: "blur(1.5px)",
      },
    };
    return configs[slot] ?? { display: "none" };
  };

  return (
    <section
      id="work"
      className="mx-auto max-w-screen-xl scroll-mt-24 px-5 pt-8 pb-6 sm:px-6 md:px-12 md:pt-12 md:pb-6 lg:px-20 lg:pt-12 lg:pb-6"
    >
      {/* Header */}
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="max-w-lg">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
            Case Studies
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Selected production work.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          Verified client systems with real screenshots — live deployments and
          one internal operations platform.
        </p>
      </div>

      {/* Project tabs */}
      <div className="mt-8 flex flex-wrap gap-2 md:mt-10">
        {caseStudies.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => {
              setActiveProject(index);
              setActiveImage(0);
            }}
            aria-pressed={index === activeProject}
            className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] transition-all sm:px-5 sm:text-[11px] ${
              index === activeProject
                ? "border-transparent accent-gradient text-white shadow-[0_18px_40px_-26px_rgba(17, 24, 39,0.48)]"
                : "border-border/70 bg-background/90 text-text-secondary hover:border-accent/45 hover:text-primary"
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Case study stage */}
      <div
        className="relative mt-8 overflow-hidden md:mt-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Grid */}
        {/* Mobile active screen */}
        <div className="relative z-10 px-4 pb-5 pt-6 md:hidden">
          <div className="overflow-hidden rounded-[1.35rem]">
            <div className="grid min-h-[210px] place-items-center">
              <img
                src={currentImages[activeImage]}
                alt={`screen ${activeImage + 1}`}
                loading="eager"
                className="block h-auto max-h-[320px] w-full object-contain"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5">
            {currentImages.slice(0, Math.min(total, 8)).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(idx)}
                aria-label={`${currentProject.title} screen ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === activeImage
                    ? "w-5 bg-accent"
                    : "w-1.5 bg-text-secondary/25"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 3D Stacked Carousel */}
        <div
          className="relative mx-auto mt-10 hidden md:block"
          style={{
            perspective: "1100px",
            height: "460px",
          }}
        >
          {currentImages.map((src, idx) => {
            const slot = getSlot(idx);
            const abs = Math.abs(slot);
            if (abs > 2) return null;
            const style = slotStyle(slot);
            return (
              <div
                key={idx}
                onClick={() => slot !== 0 && setActiveImage(idx)}
                className="absolute left-1/2 top-0 w-[58%] max-w-[640px] -translate-x-1/2 overflow-hidden rounded-[1.25rem] border border-border/70 bg-background transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] sm:w-[62%]"
                style={{
                  ...style,
                  cursor: slot !== 0 ? "pointer" : "default",
                  transformStyle: "preserve-3d",
                  boxShadow:
                    slot === 0
                      ? "0 36px 76px -38px rgba(17, 24, 39,0.42), 0 0 0 1px rgba(17, 24, 39,0.08)"
                      : "0 24px 54px -34px rgba(15,23,42,0.24)",
                }}
              >
                {/* Removed top browser bar and overlay gradient for clean image */}
                <img
                  src={src}
                  alt={`${currentProject.title} screen ${idx + 1}`}
                  loading={abs === 0 ? "eager" : "lazy"}
                  className="block h-auto max-h-[430px] w-full object-contain"
                />
                {/* removed bottom gradient */}
              </div>
            );
          })}
        </div>

        {/* Controls hidden, auto-advances only */}
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
                About
              </p>
              <h2 className="mt-2 max-w-lg font-display text-2xl font-bold leading-[1.08] sm:text-[1.75rem] lg:text-[1.95rem]">
                I don’t just build websites.
                <br />
                I build systems businesses
                <br />
                run on.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/74 lg:mt-2.5">
                From ecommerce infrastructure and internal dashboards to backend
                platforms and automation workflows, I build scalable digital
                products engineered for real operations.
              </p>
              <p className="mt-1.5 max-w-xl text-sm leading-6 text-white/70">
                Systems engineered for teams that rely on them every day.
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

            <article className="flex min-h-0 items-center overflow-hidden rounded-[1.15rem] bg-primary p-3 text-white shadow-[0_18px_44px_-30px_rgba(15,23,42,0.18)] sm:p-3.5">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/80">Key Metrics</p>
                <h3 className="mt-1 font-display text-base font-bold sm:text-lg">Production Metrics</h3>
                <ul className="mt-2 space-y-1.5 text-white/90">
                  <li className="flex items-baseline gap-2"><span className="text-lg font-bold sm:text-xl">40%</span><span className="text-[11px] sm:text-xs">Faster load times</span></li>
                  <li className="flex items-baseline gap-2"><span className="text-lg font-bold sm:text-xl">2x</span><span className="text-[11px] sm:text-xs">Conversion improvement</span></li>
                  <li className="flex items-baseline gap-2"><span className="text-lg font-bold sm:text-xl">10k+</span><span className="text-[11px] sm:text-xs">Active users on live systems</span></li>
                </ul>
              </div>
            </article>

            <article className="flex min-h-0 items-center overflow-hidden rounded-[1.15rem] bg-primary p-3 text-white shadow-[0_18px_44px_-30px_rgba(15,23,42,0.18)] sm:p-3.5">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/80">Operational Stats</p>
                <h3 className="mt-1 font-display text-base font-bold sm:text-lg">Operational Health</h3>
                <ul className="mt-2 space-y-1.5 text-white/90">
                  <li className="flex items-baseline gap-2"><span className="text-lg font-bold sm:text-xl">99.9%</span><span className="text-[11px] sm:text-xs">Uptime</span></li>
                  <li className="flex items-baseline gap-2"><span className="text-lg font-bold sm:text-xl">-80%</span><span className="text-[11px] sm:text-xs">Manual tasks reduced</span></li>
                  <li className="flex items-baseline gap-2"><span className="text-lg font-bold sm:text-xl">92%</span><span className="text-[11px] sm:text-xs">Team adoption</span></li>
                </ul>
              </div>
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
            {aboutStats.map((item, index) => (
              <div
                key={item.label}
                className={`py-0.5 ${index < aboutStats.length - 1 ? "sm:border-r sm:border-border/70" : ""}`}
              >
                <p className="font-display text-xl font-bold text-primary sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-0.5 text-xs leading-5 text-text-secondary">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = trustTestimonials.length;

  const switchTo = useCallback(
    (idx) => {
      if (idx === activeTestimonial) return;
      setAnimating(true);
      setTimeout(() => {
        setActiveTestimonial(idx);
        setAnimating(false);
      }, 300);
    },
    [activeTestimonial],
  );

  useEffect(() => {
    const id = window.setInterval(
      () => switchTo((activeTestimonial + 1) % total),
      4500,
    );
    return () => window.clearInterval(id);
  }, [activeTestimonial, switchTo, total]);

  const current = trustTestimonials[activeTestimonial];
  const dash = current.dashboard;
  const chartMode = activeTestimonial % 5;
  const primaryMetric = dash.metrics[chartMode % dash.metrics.length];
  const pieMetric = dash.bars[chartMode % dash.bars.length];
  const linePoints = dash.spark
    .map((v, i) => `${(i / (dash.spark.length - 1)) * 100},${100 - v * 9}`)
    .join(" ");
  const chartOrder = [
    chartMode === 0
      ? "lg:order-1"
      : chartMode === 1
        ? "lg:order-3"
        : chartMode === 2
          ? "lg:order-2"
          : chartMode === 3
            ? "lg:order-4"
            : "lg:order-1",
    chartMode === 0
      ? "lg:order-2"
      : chartMode === 1
        ? "lg:order-1"
        : chartMode === 2
          ? "lg:order-4"
          : chartMode === 3
            ? "lg:order-2"
            : "lg:order-3",
    chartMode === 0
      ? "lg:order-3"
      : chartMode === 1
        ? "lg:order-4"
        : chartMode === 2
          ? "lg:order-1"
          : chartMode === 3
            ? "lg:order-3"
            : "lg:order-2",
    chartMode === 0
      ? "lg:order-4"
      : chartMode === 1
        ? "lg:order-2"
        : chartMode === 2
          ? "lg:order-3"
          : chartMode === 3
            ? "lg:order-1"
            : "lg:order-4",
  ];
  return (
    <section className="mx-auto max-w-screen-xl px-5 py-8 sm:px-6 md:px-12 md:py-10 lg:px-20 lg:py-12">
      <div className="rounded-[1.75rem] border border-border/70 bg-background/88 p-5 shadow-[0_18px_44px_-32px_rgba(15,23,42,0.14)] backdrop-blur sm:p-6 lg:p-7">
        {/* Header */}
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
              Trust
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-primary sm:text-3xl lg:text-[2.15rem] lg:leading-[1.08]">
                Product engineering credibility is proven through shipped systems,
                data, and outcomes.
              </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-text-secondary">
            This is not a portfolio of demos. These are operational systems built
            to solve business problems and scale reliably.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {trustLogos.map((item) => (
            <div
              key={item}
              className="rounded-full border border-border/70 bg-surface/80 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-text-secondary"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content: testimonial + dashboard */}
        <div className="mt-5 grid gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          {/* Left rotating testimonials */}
          <article className="relative flex h-auto flex-col rounded-[1.35rem] border border-primary bg-primary p-5 shadow-[0_18px_44px_-30px_rgba(15,23,42,0.16)]">
            {/* bg glow */}
            <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[rgba(55, 65, 81,0.22)] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-6 left-6 h-24 w-24 rounded-full bg-[rgba(17, 24, 39,0.18)] blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
                <FaQuoteLeft size={14} />
              </span>

              {/* Animated review + response */}
              <div className="relative mt-3 min-h-[148px]">
                {trustTestimonials.map((item, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-700 ease-in-out ${
                      i === activeTestimonial
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none absolute inset-0 translate-y-4 opacity-0"
                    }`}
                  >
                    <div className="rounded-xl rounded-tl-md border border-white/12 bg-white/6 px-3.5 py-2.5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/70">
                        Client Review
                      </p>
                      <p
                        className="mt-1.5 text-sm leading-6 text-white/88"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.quote}
                      </p>
                    </div>
                    <div className="mt-2.5 ml-auto max-w-[86%] rounded-xl rounded-tr-md bg-white px-3.5 py-2.5 text-primary shadow-[0_14px_32px_-24px_rgba(255,255,255,0.28)]">
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-text-secondary/70">
                        Response
                      </p>
                      <p
                        className="mt-1.5 text-xs leading-5 text-text-secondary"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.response}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-4">
              <div className="border-t border-white/10 pt-3.5">
                {/* Animated author */}
                <div className="relative min-h-[34px]">
                  {trustTestimonials.map((item, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        i === activeTestimonial
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-3 opacity-0"
                      }`}
                    >
                      <p className="text-sm font-semibold text-white">
                        {item.author}
                      </p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-white/70">
                        {item.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Right dynamic dashboard synced to active testimonial */}
          <div className="rounded-[1.35rem] border border-border/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(247,248,255,0.96))] p-4 shadow-[0_18px_44px_-30px_rgba(17, 24, 39,0.18)] sm:p-5">
            <div
              className={`transition-all duration-300 ${animating ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent">
                    Outcome Board
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-bold leading-tight text-primary sm:text-xl">
                    {dash.label}
                  </h3>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/8 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-green-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  Live
                </span>
              </div>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                <div
                  className={`rounded-xl border border-border/70 bg-background p-3.5 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.18)] ${chartOrder[0]}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">
                        Key Stat
                      </p>
                      <p className="mt-2 font-display text-3xl font-bold leading-none text-primary">
                        {primaryMetric.value}
                      </p>
                    </div>
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-xl"
                      style={{
                        background: `${dash.color}14`,
                        color: dash.color,
                      }}
                    >
                      <primaryMetric.Icon size={14} />
                    </span>
                  </div>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-text-secondary/70">
                    {primaryMetric.label}
                  </p>
                </div>

                <div
                  className={`rounded-xl border border-border/70 bg-surface/70 p-3.5 ${chartOrder[1]}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-20 w-20 shrink-0 place-items-center rounded-full"
                      style={{
                        background: `conic-gradient(${dash.color} ${pieMetric.pct * 3.6}deg, rgba(17, 24, 39,0.12) 0deg)`,
                      }}
                    >
                      <div className="grid h-14 w-14 place-items-center rounded-full bg-background">
                        <span className="font-display text-base font-bold text-primary">
                          {pieMetric.pct}%
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">
                        Pie Signal
                      </p>
                      <p className="mt-1.5 text-xs font-bold leading-5 text-primary">
                        {pieMetric.label}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`rounded-xl border border-border/70 bg-background p-3.5 ${chartOrder[2]}`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">
                      Line Trend
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-green-600">
                      Trending
                    </p>
                  </div>
                  <svg
                    viewBox="0 0 100 100"
                    className="mt-2 h-20 w-full overflow-visible"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polyline
                      points={`0,96 ${linePoints} 100,96`}
                      fill={`${dash.color}14`}
                      stroke="none"
                    />
                    <polyline
                      points={linePoints}
                      fill="none"
                      stroke={dash.color}
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-text-secondary/70">
                    {dash.sparkLabel}
                  </p>
                </div>

                <div
                  className={`rounded-xl border border-border/70 bg-surface/70 p-3.5 ${chartOrder[3]}`}
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">
                    Progress Bars
                  </p>
                  <div className="mt-3 space-y-2.5">
                    {dash.bars.map((bar) => (
                      <div key={bar.label}>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[11px] text-text-secondary">
                            {bar.label}
                          </span>
                          <span className="text-[11px] font-bold text-primary">
                            {bar.pct}%
                          </span>
                        </div>
                        <div className="mt-1 h-1 overflow-hidden rounded-full bg-border/60">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${bar.pct}%`,
                              background: `linear-gradient(90deg, ${dash.color}, #4B5563)`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
            Building Better Digital Systems
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          Practical insights from shipping production systems. Learn how to
          build software that drives real business results.
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
            How product engineering collaboration works
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-text-secondary">
          Practical answers for teams choosing a product engineer, not a
          generic developer.
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

export default function FreelanceLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

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
                FULL-STACK ENGINEER • PRODUCT BUILDER
              </h1>

              <h2 className="freelance-hero-title mt-6 max-w-lg text-[2.2rem] font-display font-bold leading-[0.98] text-primary sm:text-[2.7rem] md:text-[3.15rem] lg:text-[3.6rem]">
                <span className="block">Building production-grade</span>
                <span className="block">digital systems</span>
                <span className="block">for growth-stage businesses.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-text-secondary sm:text-[1.05rem] sm:leading-8">
                Ecommerce, operations, analytics, and automation systems built to
                run reliably in real business environments.
              </p>

              {/* CTAs */}
              <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full accent-gradient px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(17, 24, 39,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(17, 24, 39,0.85)] sm:w-auto sm:px-7 sm:py-4 sm:tracking-[0.2em]"
                >
                  Explore Projects
                  <FaArrowRight size={12} />
                </Link>

                <button
                  onClick={() => setContactOpen(true)}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent sm:w-auto sm:px-7 sm:py-4 sm:tracking-[0.2em]"
                >
                  Start a systems review
                </button>
              </div>

              <p className="mt-6 max-w-xl text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary">
                Ecommerce • Operations • Automation • Analytics • Product Systems
              </p>

              {/* Trust indicators */}
              <div className="freelance-hero-stats mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
                {[
                  { value: "10+", label: "Industry Verticals" },
                  { value: "10K+", label: "Users Supported" },
                  { value: "3+", label: "Years Experience" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex min-w-0 flex-col rounded-2xl border border-border/60 bg-background/70 px-3 py-3 sm:flex-row sm:items-center sm:gap-2 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
                  >
                    {i > 0 && (
                      <span className="hidden h-3.5 w-px bg-border/60 sm:block" />
                    )}
                    <span className="font-display text-sm font-bold text-primary">
                      {item.value}
                    </span>
                    <span className="mt-1 text-[11px] leading-tight text-text-secondary sm:mt-0 sm:text-xs">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right service showcase */}
            <HeroServiceShowcase />
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl border-t border-border/40 px-5 pb-2 pt-8 sm:px-6 sm:pt-10 md:px-12 lg:px-20">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-text-secondary/60">
            Helping businesses scale with systems that perform
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

        <HighImpactSection />

        <ConversionCtaStrip
          eyebrow="Have a system problem?"
          title="Let me look at the bottleneck before you spend more time patching it."
          body="Share the workflow, performance issue, or product idea. I will help you identify the cleanest next move."
          onContactClick={() => setContactOpen(true)}
        />

        <ServicesSection onContactClick={() => setContactOpen(true)} />

        <ConversionCtaStrip
          eyebrow="Need one of these built?"
          title="Tell me what you are trying to launch, automate, or scale."
          body="Use the contact form for project details, or message me directly on WhatsApp if you want to start with a quick conversation."
          onContactClick={() => setContactOpen(true)}
          tone="dark"
          primaryLabel="Open Contact Form"
        />

        <DetailedCaseStudiesSection />

        <CaseStudiesSection />

        <ConversionCtaStrip
          eyebrow="Seen enough proof?"
          title="Bring the same clarity to your product, platform, or internal system."
          body="If the project needs business thinking and production-grade execution, this is a good point to start the conversation."
          onContactClick={() => setContactOpen(true)}
          secondaryLabel="Chat on WhatsApp"
        />

        <AboutSection />

        <TrustSection />

        <BlogSection />

        <FAQSection />

        <ConversionCtaStrip
          eyebrow="Still comparing options?"
          title="Send the rough idea. I can help you shape the right technical direction."
          body="You do not need a perfect brief. A few lines about the problem, budget range, and timeline is enough to begin."
          onContactClick={() => setContactOpen(true)}
          tone="dark"
          primaryLabel="Send Project Details"
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
                This is how I think, decide, and deliver.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-text-secondary">
              Not a process template. A set of principles built from shipping
              real systems for real businesses.
            </p>
          </div>

          <div className="mt-5 grid gap-2.5 md:grid-cols-2 md:items-start lg:gap-3">
            {[
              {
                title: "I challenge the problem before touching the code",
                body: "Most briefs describe symptoms, not root causes. I push back and make sure we're solving the right thing before a single line is written.",
                featured: true,
                label: "Clarity First",
                meta: "Root cause before roadmap",
                Icon: FaCrosshairs,
              },
              {
                title: "I think in systems, not pages",
                body: "Every feature is part of a larger operational picture, designed for how data flows, how teams use it, and how it scales.",
                featured: false,
                label: "System Design",
                meta: "Flows, teams, scale",
                Icon: FaDatabase,
              },
              {
                title: "I build for real usage, not demo success",
                body: "I test against actual usage patterns, edge cases, and the people who run it daily, not just what looks good in a walkthrough.",
                featured: false,
                label: "Reality Check",
                meta: "Usage over walkthroughs",
                Icon: FaUsers,
              },
              {
                title: "I stay accountable beyond launch",
                body: "Shipping is not the finish line. I stay involved through stabilisation and make sure the system performs in the hands of real users.",
                featured: false,
                label: "Post Launch",
                meta: "Support, stabilise, improve",
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
                  Share your product vision
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary">
                  Fill out the form and I'll get back to you within 24 hours
                  with a clear perspective on your system and next steps.
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
                      "I review your project details",
                      "We schedule a 15-min discovery call",
                      "You get a strategic proposal",
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
                  <p className="mt-1.5 font-display text-sm font-bold text-primary">
                    Available for June Projects
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
                  Final CTA
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[3.2rem] lg:leading-[1]">
                  Build the system your business runs on
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
                  If you need a product engineer who turns a business challenge,
                  workflow bottleneck, or growth-stage opportunity into a reliable
                  production system, this is the point to start the conversation.
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
                  href="mailto:contact@codebyjerry.online?subject=Let%27s%20Talk"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/8 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/32 hover:bg-white/12 sm:px-7 sm:text-xs sm:tracking-[0.2em]"
                >
                  <FaEnvelope size={13} />
                  Contact Me
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
      <ExitIntentModal />

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}

function ContactFormModal({ isOpen, onClose }) {
  const STATIC_FORMS_ENDPOINT = "https://api.staticforms.xyz/submit";
  const STATIC_FORMS_ACCESS_KEY =
    import.meta.env.VITE_STATICFORMS_ACCESS_KEY ||
    "YOUR_STATICFORMS_ACCESS_KEY";

  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      accessKey: STATIC_FORMS_ACCESS_KEY,
      name,
      email,
      phone,
      service,
      message,
      source: "Portfolio Homepage Contact Modal",
      subject: "Website project inquiry",
      replyTo: email,
    };

    try {
      const response = await fetch(STATIC_FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      const result = await response.json();
      if (result.success !== true) {
        throw new Error(result.message || "Static Forms submission failed");
      }

      setStatus("success");
      // Reset form on success
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
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
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-5 backdrop-blur-lg bg-black/60 animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-border/40 bg-background shadow-[0_50px_120px_-30px_rgba(15,23,42,0.4)]">
        <button
          onClick={onClose}
          className="absolute right-8 top-8 z-20 text-text-secondary hover:text-primary transition-colors"
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
                Tell me about the bottleneck you're facing. I'll get back to you
                within 24 hours with a strategic perspective.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Available for June Projects
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="p-8 sm:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10 animate-in zoom-in duration-500">
                <div className="h-20 w-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
                  <FaCheckCircle size={40} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Message Received!
                </h3>
                <p className="mt-4 text-sm text-text-secondary">
                  Thanks for reaching out. I've received your details and will
                  get back to you shortly.
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 rounded-full bg-primary px-8 py-3 text-xs font-bold uppercase tracking-widest text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-2">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-2">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 7092936243"
                    className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-2">
                    Service Interested In
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Applications">Web Applications</option>
                    <option value="eCommerce Systems">eCommerce Systems</option>
                    <option value="Mobile Applications">
                      Mobile Applications
                    </option>
                    <option value="Backend & APIs">Backend & APIs</option>
                    <option value="Business Platforms">
                      Business Platforms
                    </option>
                    <option value="Growth & SEO">Growth & SEO</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-2">
                    Tell me about the project
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe the challenge..."
                    className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-400">{errorMessage}</p>
                )}
                <button
                  disabled={status === "submitting"}
                  type="submit"
                  className="w-full rounded-full accent-gradient py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InlineContactForm() {
  const STATIC_FORMS_ENDPOINT = "https://api.staticforms.xyz/submit";
  const STATIC_FORMS_ACCESS_KEY =
    import.meta.env.VITE_STATICFORMS_ACCESS_KEY ||
    "YOUR_STATICFORMS_ACCESS_KEY";

  const [status, setStatus] = useState("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      accessKey: STATIC_FORMS_ACCESS_KEY,
      name,
      email,
      phone,
      service,
      message,
      source: "Portfolio Homepage Inline Form",
      subject: "Website project inquiry",
      replyTo: email,
    };

    try {
      const response = await fetch(STATIC_FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      const result = await response.json();
      if (result.success !== true) {
        throw new Error(result.message || "Static Forms submission failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
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
            setMessage("");
          }}
          className="mt-6 rounded-full bg-accent px-6 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-accent/90 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-widest text-text-secondary/70">
            Your Name
          </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full rounded-lg border border-border/50 bg-surface/50 px-3 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-widest text-text-secondary/70">
            Email Address
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@company.com"
            className="w-full rounded-lg border border-border/50 bg-surface/50 px-3 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
          />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-widest text-text-secondary/70">
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 7092936243"
            className="w-full rounded-lg border border-border/50 bg-surface/50 px-3 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-widest text-text-secondary/70">
            Service Interested In
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-lg border border-border/50 bg-surface/50 px-3 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
          >
            <option value="">Select a service</option>
            <option value="Web Applications">Web Applications</option>
            <option value="eCommerce Systems">eCommerce Systems</option>
            <option value="Mobile Applications">Mobile Applications</option>
            <option value="Backend & APIs">Backend & APIs</option>
            <option value="Business Platforms">Business Platforms</option>
            <option value="Growth & SEO">Growth & SEO</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-widest text-text-secondary/70">
          Tell me about the project
        </label>
        <textarea
          required
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly describe the challenge or opportunity..."
          className="w-full resize-none rounded-lg border border-border/50 bg-surface/50 px-3 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}
      <button
        disabled={status === "submitting"}
        type="submit"
        className="w-full rounded-full accent-gradient py-2.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function ExitIntentModal() {
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
            Download my **Project Execution Roadmap** for free. It breaks down
            exactly how I take projects from concept to $1M+ scale.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/Jerry (Azhagirishankar K).docx"
              download
              onClick={() => {
                setShown(false);
                setDismissed(true);
              }}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-transform hover:-translate-y-1 shadow-xl"
            >
              Get the Roadmap
              <FaRocket size={14} className="text-accent" />
            </a>
            <button
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
