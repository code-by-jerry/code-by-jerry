import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBriefcase,
  FaChartLine,
  FaBullseye,
  FaCogs,
  FaCode,
  FaCompass,
  FaQuoteLeft,
  FaEnvelope,
  FaGithub,
  FaLaptopCode,
  FaLinkedinIn,
  FaMobileAlt,
  FaPhoneAlt,
  FaRoute,
  FaRocket,
  FaSearch,
  FaServer,
  FaShoppingCart,
  FaSignal,
  FaWhatsapp,
  FaUsers,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
  FaCrosshairs,
  FaSyncAlt,
  FaTrophy,
  FaClock,
  FaDatabase,
  FaRobot,
  FaChartBar,
  FaMoneyBillWave,
  FaCartArrowDown,
  FaTachometerAlt,
  FaMobileAlt as FaMobile,
  FaLeaf,
} from 'react-icons/fa'

const services = [
  {
    title: 'Web Applications',
    description: 'Custom business systems, dashboards, and admin panels built for real workflows. Designed for teams that need speed, clarity, and control over their operations. Built to scale as your business grows.',
    eyebrow: 'Custom Systems',
    image: 'https://ik.imagekit.io/codebyjerry/services/Operational%20Web%20Systems.png?updatedAt=1777080426736',
  },
  {
    title: 'eCommerce Systems',
    description: 'High-converting online stores with payment integrations and cleaner buying flows. From Shopify to custom storefronts — built for checkout performance and retention. Every detail is shaped around revenue, not just aesthetics.',
    eyebrow: 'Revenue Focused',
    image: 'https://ik.imagekit.io/codebyjerry/services/Commerce%20Infrastructure.png?updatedAt=1777080474057',
  },
  {
    title: 'Mobile Applications',
    description: 'Flutter or hybrid app experiences connected tightly with your backend systems. Built for real users — fast, reliable, and consistent across platforms. Designed to keep users engaged and operations running smoothly.',
    eyebrow: 'Mobile Delivery',
    image: 'https://ik.imagekit.io/codebyjerry/services/Connected%20Mobile%20Systems.png?updatedAt=1777080496274',
  },
  {
    title: 'Backend & APIs',
    description: 'APIs, automation, integrations, and scalable architectures that support real growth. Clean, documented, and built to handle production load without breaking. The backbone that keeps every system running reliably.',
    eyebrow: 'Core Logic',
    image: 'https://ik.imagekit.io/codebyjerry/services/Backend%20Architecture%20and%20API.png?updatedAt=1777081602049',
  },
  {
    title: 'Business Platforms',
    description: 'End-to-end platforms built around your business model — from user flows to backend logic and scaling. Role-based access, operational dashboards, and automation built in from day one. Systems your team will actually depend on.',
    eyebrow: 'Business First',
    image: 'https://ik.imagekit.io/codebyjerry/services/Business%20Platforms.png',
    featured: true,
  },
  {
    title: 'Growth & SEO',
    description: 'Performance optimization and search ranking improvements for long-term visibility. Technical SEO, Core Web Vitals, and speed improvements that compound over time. Built to rank, load fast, and convert better.',
    eyebrow: 'Search Growth',
    image: 'https://ik.imagekit.io/codebyjerry/services/SEO%20and%20Growth.png',
  },
]

const impactStats = [
  {
    value: 40,
    suffix: '%',
    headline: 'Faster Load Times',
    label: 'Achieved through architecture refactoring, lazy loading, and leaner delivery pipelines.',
    tone: 'dark',
    icon: '⚡',
    proof: 'Measured on production builds',
  },
  {
    value: 2,
    suffix: 'x',
    headline: 'Conversion Improvement',
    label: 'Interfaces rebuilt around user intent — reducing friction at every decision point.',
    tone: 'light',
    icon: '📈',
    proof: 'Across eCommerce & landing systems',
  },
  {
    value: 10000,
    suffix: '+',
    headline: 'Users on Live Systems',
    label: 'Platforms engineered to scale horizontally — no bottlenecks under real traffic.',
    tone: 'accent',
    icon: '🚀',
    proof: 'Active users across deployed platforms',
  },
  {
    staticValue: '99.9%',
    headline: 'Production Uptime',
    label: 'Systems built with reliability-first architecture, proper error handling, and monitoring.',
    tone: 'soft',
    icon: '🛡️',
    proof: 'Across all production deployments',
  },
]

const serviceSlides = [
  {
    name: 'Web Apps',
    headline: 'Business platforms that keep teams fast and in control.',
    description: 'Dashboards, portals, and admin flows shaped around real operations.',
    image: 'https://ik.imagekit.io/codebyjerry/coj%20services/web.png',
    bigWord: 'BUILD',
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.26),rgba(99,102,241,0.08),transparent_72%)]',
    tags: ['Dashboards', 'Admin Panels'],
  },
  {
    name: 'Mobile Apps',
    headline: 'Mobile experiences connected cleanly with your backend.',
    description: 'Hybrid app interfaces built for speed, clean UX, and reliable integration.',
    image: 'https://ik.imagekit.io/codebyjerry/coj%20services/mobile-app.png',
    bigWord: 'SHIP',
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),rgba(99,102,241,0.08),transparent_72%)]',
    tags: ['Hybrid UX', 'API Ready'],
  },
  {
    name: 'eCommerce',
    headline: 'Commerce systems built to convert and scale cleanly.',
    description: 'Shopify and custom storefronts tuned for checkout, payments, and retention.',
    image: 'https://ik.imagekit.io/codebyjerry/coj%20services/ecom.png',
    bigWord: 'SELL',
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),rgba(99,102,241,0.08),transparent_72%)]',
    tags: ['Shopify', 'Payments'],
  },
  {
    name: 'SEO',
    headline: 'Search-focused pages engineered for visibility and speed.',
    description: 'Landing pages and websites shaped for ranking, growth, and measurable performance.',
    image: 'https://ik.imagekit.io/codebyjerry/coj%20services/seo-.png',
    bigWord: 'RANK',
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2),rgba(99,102,241,0.08),transparent_72%)]',
    tags: ['SEO', 'Performance'],
  },
]

const process = [
  {
    title: 'Strategy First',
    description:
      'We define business goals, user flow, and architecture before development starts.',
    icon: FaCompass,
    accent: 'bg-accent/10 text-accent',
  },
  {
    title: 'Build in Phases',
    description: 'Structured milestones allow continuous feedback and better control.',
    icon: FaCogs,
    accent: 'bg-primary/8 text-primary',
  },
  {
    title: 'Production Ready',
    description: 'Optimized, scalable systems built for real users, not just demos.',
    icon: FaRocket,
    accent: 'bg-[rgba(99,102,241,0.12)] text-accent',
  },
  {
    title: 'Support and Scale',
    description: 'Continuous improvements to help your product grow with your business.',
    icon: FaSignal,
    accent: 'bg-[rgba(139,92,246,0.12)] text-[rgb(109,40,217)]',
  },
]

const aboutHighlights = [
  {
    title: 'Operations Systems',
    label: 'Dashboards, admin panels, and role-based workflows built for teams that run on data.',
    proof: 'Handles 10K+ users',
    tags: ['Dashboards', 'Automation'],
    tone: 'light',
  },
  {
    title: 'Revenue Infrastructure',
    label: 'End-to-end commerce and payment systems engineered to convert and scale without friction.',
    proof: '2x conversion improvement',
    tags: ['eCommerce', 'Payments'],
    tone: 'accent',
  },
  {
    title: 'Scalable Architecture',
    label: 'Backend systems designed to grow with your business — APIs, integrations, and deployment that hold under real load.',
    proof: '40% faster on production',
    tags: ['APIs', 'Infrastructure'],
    tone: 'light',
  },
  {
    title: 'Business-Centric Engineering',
    label: 'Every system is shaped around how the business actually operates — not just what the spec says.',
    proof: '3+ years, 10+ systems shipped',
    tags: ['Strategy', 'Full Delivery'],
    tone: 'soft',
  },
]

const aboutDeliverables = [
  'I question the brief before writing code',
  'Performance profiled before going live',
  'Admin & ops flows treated as first-class',
  'Built for the team that runs it daily',
]

const aboutStats = [
  {
    value: '10+',
    label: 'Projects Delivered',
  },
  {
    value: '10K+',
    label: 'Users Supported',
  },
  {
    value: '40%',
    label: 'Performance Improvement',
  },
]

const trustLogos = ['Atha Platform', 'FreshTick', 'DestroSolutions', 'Commerce Systems', 'Admin Platforms']

const trustTestimonials = [
  {
    quote: 'Jerry builds with business clarity. The product did not just look better after the rebuild, it became faster and easier for the team to operate.',
    author: 'Product Stakeholder',
    role: 'Operations Platform',
    dashboard: {
      label: 'Operations Platform',
      color: '#6366F1',
      metrics: [
        { label: 'Team Efficiency', value: '+60%', Icon: FaCogs },
        { label: 'Manual Tasks', value: '−80%', Icon: FaRobot },
        { label: 'Uptime', value: '99.9%', Icon: FaShieldAlt },
      ],
      bars: [
        { label: 'Workflow Speed', pct: 60 },
        { label: 'Data Accuracy', pct: 85 },
        { label: 'Team Adoption', pct: 92 },
      ],
      spark: [3, 4, 5, 6, 5, 7, 8, 7, 9, 10, 9, 10],
      sparkLabel: 'Operational Output',
    },
  },
  {
    quote: 'Strong ownership, clean delivery, and thoughtful technical decisions. The system was structured for scale instead of patched together for launch day.',
    author: 'Project Lead',
    role: 'Client Delivery Team',
    dashboard: {
      label: 'Delivery Performance',
      color: '#7961F4',
      metrics: [
        { label: 'On-Time Delivery', value: '100%', Icon: FaCheckCircle },
        { label: 'Milestones Hit', value: '12/12', Icon: FaCrosshairs },
        { label: 'Revisions', value: '< 3', Icon: FaSyncAlt },
      ],
      bars: [
        { label: 'Scope Accuracy', pct: 95 },
        { label: 'Timeline Adherence', pct: 100 },
        { label: 'Client Satisfaction', pct: 98 },
      ],
      spark: [5, 6, 6, 7, 8, 8, 9, 9, 10, 10, 10, 10],
      sparkLabel: 'Project Delivery Score',
    },
  },
  {
    quote: 'What stood out was the business-first thinking. Jerry didn\'t just build what we asked — he questioned the brief, improved the flow, and delivered something better.',
    author: 'Founder',
    role: 'eCommerce Startup',
    dashboard: {
      label: 'eCommerce Impact',
      color: '#8B5CF6',
      metrics: [
        { label: 'Conversion Rate', value: '+2x', Icon: FaChartLine },
        { label: 'Cart Abandonment', value: '−35%', Icon: FaCartArrowDown },
        { label: 'Revenue Growth', value: '+48%', Icon: FaMoneyBillWave },
      ],
      bars: [
        { label: 'Checkout Completion', pct: 78 },
        { label: 'Page Speed Score', pct: 92 },
        { label: 'Mobile Conversion', pct: 65 },
      ],
      spark: [2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10, 10],
      sparkLabel: 'Monthly Revenue Trend',
    },
  },
  {
    quote: 'The admin system he built replaced three manual processes overnight. Our team went from spending hours on data entry to having everything automated and visible in one place.',
    author: 'Operations Manager',
    role: 'Logistics Platform',
    dashboard: {
      label: 'Logistics Automation',
      color: '#6366F1',
      metrics: [
        { label: 'Processes Automated', value: '3→0', Icon: FaRobot },
        { label: 'Time Saved/Week', value: '40hrs', Icon: FaClock },
        { label: 'Data Errors', value: '−95%', Icon: FaDatabase },
      ],
      bars: [
        { label: 'Automation Coverage', pct: 88 },
        { label: 'Data Visibility', pct: 100 },
        { label: 'Team Productivity', pct: 72 },
      ],
      spark: [2, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 10],
      sparkLabel: 'Automation Adoption',
    },
  },
  {
    quote: 'Performance was a real concern for us. After the rebuild, load times dropped significantly and the system handled our peak traffic without any issues.',
    author: 'Technical Lead',
    role: 'Real Estate Platform',
    dashboard: {
      label: 'Performance Metrics',
      color: '#7961F4',
      metrics: [
        { label: 'Load Time', value: '< 2s', Icon: FaBolt },
        { label: 'Peak Users', value: '10K+', Icon: FaUsers },
        { label: 'Speed Gain', value: '+40%', Icon: FaTachometerAlt },
      ],
      bars: [
        { label: 'Core Web Vitals', pct: 94 },
        { label: 'Server Response', pct: 88 },
        { label: 'Uptime', pct: 99 },
      ],
      spark: [4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 10, 10],
      sparkLabel: 'Performance Score Over Time',
    },
  },
]

const trustMetrics = [
  {
    value: '10+',
    label: 'projects delivered across business systems, logistics, and commerce',
  },
  {
    value: '10K+',
    label: 'users supported through scalable platforms and role-based workflows',
  },
  {
    value: '40%',
    label: 'performance improvement achieved on selected production builds',
  },
]

const contactDetails = [
  {
    label: 'WhatsApp',
    value: '7092936243',
    href: 'https://wa.me/917092936243',
    icon: FaWhatsapp,
  },
  {
    label: 'Email',
    value: 'contact@codebyjerry.online',
    href: 'mailto:contact@codebyjerry.online',
    icon: FaEnvelope,
  },
  {
    label: 'Phone',
    value: '7092936243',
    href: 'tel:+917092936243',
    icon: FaPhoneAlt,
  },
  {
    label: 'LinkedIn',
    value: 'code-by-jerry',
    href: 'https://www.linkedin.com/in/code-by-jerry/',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    value: 'code-by-jerry',
    href: 'https://github.com/code-by-jerry',
    icon: FaGithub,
  },
]

const caseStudies = [
  {
    title: 'Realty',
    category: 'Real Estate Platform',
    tagline: 'Property-led product screens presented as a polished visual gallery.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174924.png?updatedAt=1776506172591',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174906.png?updatedAt=1776506172562',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175012.png?updatedAt=1776506172472',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174958.png?updatedAt=1776506172458',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180325.png?updatedAt=1776506172517',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180242.png?updatedAt=1776506172393',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175029.png?updatedAt=1776506172359',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180358.png?updatedAt=1776506172355',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175047.png?updatedAt=1776506172201',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175904.png?updatedAt=1776506172060',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175112.png?updatedAt=1776506171959',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175101.png?updatedAt=1776506171582',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175842.png?updatedAt=1776506171457',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175146.png?updatedAt=1776506171372',
    ],
  },
  {
    title: 'Nesthetix Design',
    category: 'Interior Design Portfolio',
    tagline: 'Brand-first interiors work shown through refined full-page compositions.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174304.png?updatedAt=1776506131947',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174404.png?updatedAt=1776506131779',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174512.png?updatedAt=1776506131736',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174224.png?updatedAt=1776506131740',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174324.png?updatedAt=1776506131733',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174538.png?updatedAt=1776506131619',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174447.png?updatedAt=1776506131601',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174552.png?updatedAt=1776506131374',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174755.png?updatedAt=1776506131259',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174349.png?updatedAt=1776506131185',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174742.png?updatedAt=1776506131100',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174244.png?updatedAt=1776506131014',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174143.png?updatedAt=1776506130585',
    ],
  },
  {
    title: 'Camiprod',
    category: 'Shopify Store',
    tagline: 'Commerce pages arranged as a premium product gallery with visual depth.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144833.png?updatedAt=1776506056407',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144853.png?updatedAt=1776506056398',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144548.png?updatedAt=1776506054013',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144659.png?updatedAt=1776506055429',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144745.png?updatedAt=1776506054151',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144819.png?updatedAt=1776506054135',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144802.png?updatedAt=1776506054356',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144915.png?updatedAt=1776506053788',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144641.png?updatedAt=1776506053279',
    ],
  },
  {
    title: 'Baybee',
    category: 'eCommerce Experience',
    tagline: 'Mobile-first storefront visuals surfaced as a focused case-study gallery.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181456.png?updatedAt=1776505955612',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181416.png?updatedAt=1776505955600',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181443.png?updatedAt=1776505955588',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181400.png?updatedAt=1776505955585',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181336.png?updatedAt=1776505955591',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181351.png?updatedAt=1776505955569',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181304.png?updatedAt=1776505955269',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181244.png?updatedAt=1776505955284',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181232.png?updatedAt=1776505955229',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181206.png?updatedAt=1776505955012',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181222.png?updatedAt=1776505954940',
    ],
  },
  {
    title: 'Atha Constructions',
    category: 'Construction Website',
    tagline: 'Lead-generation and CMS pages displayed with the same editorial gallery rhythm.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145530.png?updatedAt=1776505896460',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145546.png?updatedAt=1776505896414',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145656.png?updatedAt=1776505896444',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145624.png?updatedAt=1776505896411',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145311.png?updatedAt=1776505896420',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145446.png?updatedAt=1776505896420',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145432.png?updatedAt=1776505896428',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145605.png?updatedAt=1776505896413',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145404.png?updatedAt=1776505896421',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145328.png?updatedAt=1776505896447',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145343.png?updatedAt=1776505896417',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145640.png?updatedAt=1776505896409',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145517.png?updatedAt=1776505896171',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145501.png?updatedAt=1776505896177',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145219.png?updatedAt=1776505895590',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145126.png?updatedAt=1776505895521',
    ],
  },
  {
    title: 'Area24One',
    category: 'Multi-Vertical Company Site',
    tagline: 'Enterprise screens and landing flows surfaced in a more visual showcase format.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180920.png?updatedAt=1776505783378',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180816.png?updatedAt=1776505783376',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180731.png?updatedAt=1776505783393',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180834.png?updatedAt=1776505783335',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180935.png?updatedAt=1776505783299',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180906.png?updatedAt=1776505783307',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180753.png?updatedAt=1776505783326',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180809.png?updatedAt=1776505783224',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180640.png?updatedAt=1776505783223',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180655.png?updatedAt=1776505783135',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180709.png?updatedAt=1776505783173',
    ],
  },
]

function HeroServiceShowcase() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviceSlides.length)
    }, 4200)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="freelance-showcase relative flex min-h-[540px] flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-background/70 p-4 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.22)] backdrop-blur-sm sm:min-h-[620px] sm:p-6 lg:h-full lg:min-h-[34rem] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
      <div className="pointer-events-none absolute -left-8 top-6 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.82)] blur-3xl sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute right-0 top-14 h-48 w-48 rounded-full bg-[rgba(99,102,241,0.14)] blur-3xl sm:h-64 sm:w-64" />
      <div className="pointer-events-none absolute bottom-20 right-12 h-36 w-36 rounded-full bg-[rgba(139,92,246,0.14)] blur-3xl sm:h-52 sm:w-52" />

      <div className="relative flex-1 overflow-hidden">
        {serviceSlides.map((slide, index) => {
          const isActive = index === activeSlide

          return (
            <article
              key={slide.name}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
              }`}
            >
              <div className="grid h-full grid-rows-[auto_1fr] gap-5 sm:gap-8 lg:gap-8">
                <div className="relative z-10">
                  <div className="max-w-xl">
                    <div className="mt-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-text-secondary/45">
                        {slide.name}
                      </p>
                      <h3 className="mt-2 max-w-xl font-display text-2xl font-bold leading-tight text-primary sm:text-[2rem] lg:text-[2.15rem] lg:leading-[1.02]">
                        {slide.headline}
                      </h3>
                    </div>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-text-secondary sm:text-[15px]">
                      {slide.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                      {slide.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative mt-2 flex min-h-[220px] items-end justify-center sm:min-h-[300px] lg:mt-0 lg:min-h-0">
                  <span className="pointer-events-none absolute inset-x-0 top-0 hidden text-center font-display text-[4.4rem] font-bold leading-none text-primary/[0.03] sm:block sm:text-[6rem] lg:text-[7.6rem]">
                    {slide.bigWord}
                  </span>
                  <div
                    className={`pointer-events-none absolute inset-x-6 bottom-5 h-24 blur-3xl sm:inset-x-8 sm:bottom-auto sm:top-10 sm:h-48 lg:inset-x-12 lg:top-12 lg:h-56 ${slide.glow}`}
                  />

                  <img
                    src={slide.image}
                    alt={`${slide.name} service visual`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    className={`relative z-10 mx-auto block h-auto w-full max-w-[290px] object-contain object-center transition-all duration-700 ease-out sm:max-w-[420px] lg:absolute lg:inset-x-0 lg:bottom-0 lg:max-w-[560px] ${
                      isActive ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-[0.98] opacity-0'
                    }`}
                  />
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="relative z-30 mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2 sm:mt-4 sm:gap-x-5 lg:justify-start">
        {serviceSlides.map((slide, index) => (
          <button
            key={slide.name}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-pressed={index === activeSlide}
            className={`group inline-flex items-center gap-2 text-left text-[10px] font-bold uppercase tracking-[0.32em] transition-colors sm:text-[11px] ${
              index === activeSlide ? 'text-primary' : 'text-text-secondary/45 hover:text-primary'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                index === activeSlide ? 'bg-accent' : 'bg-text-secondary/25 group-hover:bg-primary/50'
              }`}
            />
            {slide.name}
          </button>
        ))}
      </div>
    </div>
  )
}

function HighImpactSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.25 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setProgress(1); return }
    let frameId = 0, startTime = 0
    const duration = 1600
    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp
      const raw = Math.min((timestamp - startTime) / duration, 1)
      setProgress(1 - Math.pow(1 - raw, 3))
      if (raw < 1) frameId = requestAnimationFrame(tick)
    }
    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [isVisible])

  const formatValue = (stat) => {
    if (stat.staticValue) return stat.staticValue
    const v = Math.round(stat.value * progress)
    return `${new Intl.NumberFormat('en-US').format(v)}${stat.suffix}`
  }

  const cardStyles = {
    dark:  { wrap: 'bg-primary border-primary text-white hover:shadow-[0_28px_60px_-24px_rgba(15,23,42,0.55)]', label: 'text-white/60', proof: 'text-white/35 border-white/10 bg-white/6' },
    light: { wrap: 'bg-background/95 border-border/60 text-primary hover:border-accent/30 hover:shadow-[0_28px_60px_-24px_rgba(99,102,241,0.2)]', label: 'text-text-secondary', proof: 'text-text-secondary/50 border-border/60 bg-surface/60' },
    accent:{ wrap: 'accent-gradient border-transparent text-white hover:shadow-[0_28px_60px_-24px_rgba(99,102,241,0.55)]', label: 'text-white/70', proof: 'text-white/40 border-white/10 bg-white/8' },
    soft:  { wrap: 'bg-surface border-border/60 text-primary hover:border-accent/25 hover:shadow-[0_28px_60px_-24px_rgba(99,102,241,0.15)]', label: 'text-text-secondary', proof: 'text-text-secondary/50 border-border/60 bg-background/60' },
  }

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-14 lg:px-20">
      {/* Subtle bg depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.04),transparent_65%)]" />

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
            Strong systems are useful. Measurable impact is what makes them valuable. These numbers come from real production builds — not estimates.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((stat) => {
            const s = cardStyles[stat.tone]
            return (
              <article
                key={stat.headline}
                className={`group flex min-h-[240px] flex-col justify-between rounded-[2rem] border p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)] transition-all duration-400 ease-out hover:-translate-y-1.5 ${s.wrap}`}
              >
                <div>
                  {/* Icon + label row */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className={`rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] ${s.proof}`}>
                      {stat.proof}
                    </span>
                  </div>

                  {/* Count-up number */}
                  <p className="mt-5 font-display text-5xl font-bold leading-none tabular-nums sm:text-6xl">
                    {formatValue(stat)}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-tight">{stat.headline}</h3>
                  <p className={`mt-3 text-sm leading-6 ${s.label}`}>{stat.label}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServiceFlipCard({ title, description, eyebrow, image, featured }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full transition-transform duration-700 ease-out"
        style={{
          aspectRatio: '1 / 1',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT — image only, no overlay text */}
        <div
          className={`absolute inset-0 overflow-hidden rounded-[1.75rem] shadow-[0_12px_40px_-20px_rgba(15,23,42,0.14)] ${
            featured
              ? 'border-2 border-accent shadow-[0_12px_40px_-16px_rgba(121,97,244,0.35)]'
              : 'border border-border/60'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* BACK — details */}
        <div
          className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[1.75rem] border p-6 sm:p-7 ${
            featured
              ? 'border-transparent accent-gradient shadow-[0_20px_60px_-20px_rgba(121,97,244,0.5)]'
              : 'border-border/60 bg-background shadow-[0_12px_40px_-20px_rgba(15,23,42,0.14)]'
          }`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {featured && (
            <>
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/8 blur-2xl" />
            </>
          )}
          <div className="relative z-10">
            <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${featured ? 'text-white/60' : 'text-text-secondary/55'}`}>
              {eyebrow}
            </p>
            <h3 className={`mt-3 font-display text-2xl font-bold leading-tight ${featured ? 'text-white' : 'text-primary'}`}>
              {title}
            </h3>
            <p className={`mt-4 text-sm leading-6 ${featured ? 'text-white/75' : 'text-text-secondary'}`}>
              {description}
            </p>
          </div>
          <a
            href="mailto:contact@codebyjerry.online"
            className={`relative z-10 inline-flex w-max items-center gap-2 rounded-full px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
              featured
                ? 'bg-white/15 text-white hover:bg-white/25'
                : 'bg-accent/8 text-accent hover:bg-accent/15'
            }`}
          >
            Start a Project
            <FaArrowRight size={10} />
          </a>
        </div>
      </div>
    </div>
  )
}

function ServicesSection() {
  return (
    <section className="relative mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-14 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.04),transparent_50%)]" />

      <div className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Services</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              What I can design, build, and optimize for your business.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            From customer-facing experiences to backend architecture — serious execution, not generic freelance output.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
  )
}

function CaseStudiesSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const [paused, setPaused] = useState(false)
  const currentProject = caseStudies[activeProject]
  const currentImages = currentProject.images
  const total = currentImages.length

  useEffect(() => {
    setActiveImage(0)
  }, [activeProject])

  useEffect(() => {
    if (total < 2 || paused) return
    const id = window.setInterval(() => {
      setActiveImage((c) => (c + 1) % total)
    }, 3600)
    return () => window.clearInterval(id)
  }, [total, paused])

  const showPrevious = () => setActiveImage((c) => (c - 1 + total) % total)
  const showNext = () => setActiveImage((c) => (c + 1) % total)

  // Returns position slot: -2 | -1 | 0 (center) | 1 | 2
  const getSlot = (idx) => {
    let diff = idx - activeImage
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  // Style per slot
  const slotStyle = (slot) => {
    const abs = Math.abs(slot)
    if (abs > 2) return { display: 'none' }
    const configs = {
      0:  { transform: 'translateX(0%)   translateZ(0px)   rotateY(0deg)   scale(1)',    zIndex: 30, opacity: 1,    filter: 'none' },
      1:  { transform: 'translateX(58%)  translateZ(-120px) rotateY(-22deg) scale(0.82)', zIndex: 20, opacity: 0.72, filter: 'blur(0.5px)' },
      '-1':{ transform: 'translateX(-58%) translateZ(-120px) rotateY(22deg)  scale(0.82)', zIndex: 20, opacity: 0.72, filter: 'blur(0.5px)' },
      2:  { transform: 'translateX(95%)  translateZ(-220px) rotateY(-32deg) scale(0.65)', zIndex: 10, opacity: 0.35, filter: 'blur(1.5px)' },
      '-2':{ transform: 'translateX(-95%) translateZ(-220px) rotateY(32deg)  scale(0.65)', zIndex: 10, opacity: 0.35, filter: 'blur(1.5px)' },
    }
    return configs[slot] ?? { display: 'none' }
  }

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-14 lg:px-20">
      {/* Header */}
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="max-w-lg">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Case Studies</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Real projects. Real results.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          Each project is a system built for a real business — not a template, not a demo. Browse the actual screens delivered to clients.
        </p>
      </div>

      {/* Project tabs */}
      <div className="mt-10 flex flex-wrap gap-2">
        {caseStudies.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setActiveProject(index)}
            aria-pressed={index === activeProject}
            className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] transition-all sm:px-5 sm:text-[11px] ${
              index === activeProject
                ? 'border-primary bg-primary text-white shadow-[0_18px_40px_-26px_rgba(15,23,42,0.42)]'
                : 'border-primary/35 bg-background/90 text-text-secondary hover:border-accent hover:text-primary'
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* 3D Stage */}
      <div
        className="relative mt-10 overflow-hidden rounded-[2.5rem]"
        style={{ background: 'linear-gradient(135deg, #0d0d1a 0%, #1a0533 25%, #0f1a3d 55%, #0a1628 80%, #130d2e 100%)' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-96 w-96 rounded-full bg-[rgba(139,92,246,0.45)] blur-[100px]" />
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-96 w-96 rounded-full bg-[rgba(59,130,246,0.35)] blur-[100px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(236,72,153,0.18)] blur-[80px]" />
        <div className="pointer-events-none absolute left-1/2 top-[55%] h-64 w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(99,102,241,0.35)] blur-[60px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        {/* Top accent border */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(139,92,246,0.8)] to-transparent" />
        {/* Bottom accent border */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.5)] to-transparent" />

        {/* Project info */}
        <div className="relative z-10 px-6 pt-8 text-center sm:px-10">
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-[2.6rem]">
            {currentProject.title}
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-white/55">
            {currentProject.tagline}
          </p>
        </div>

        {/* 3D Stacked Carousel */}
        <div
          className="relative mx-auto mt-10"
          style={{ perspective: '1100px', height: '380px', paddingBottom: '2rem' }}
        >
          {currentImages.map((src, idx) => {
            const slot = getSlot(idx)
            const abs = Math.abs(slot)
            if (abs > 2) return null
            const style = slotStyle(slot)
            return (
              <div
                key={idx}
                onClick={() => slot !== 0 && setActiveImage(idx)}
                className="absolute left-1/2 top-0 w-[52%] max-w-[520px] -translate-x-1/2 overflow-hidden rounded-[1.25rem] border border-white/15 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] sm:w-[55%]"
                style={{
                  ...style,
                  cursor: slot !== 0 ? 'pointer' : 'default',
                  transformStyle: 'preserve-3d',
                  boxShadow: slot === 0
                    ? '0 50px 100px -30px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.08)'
                    : '0 30px 60px -20px rgba(0,0,0,0.6)',
                }}
              >
                {slot === 0 && (
                  <div className="flex items-center gap-1.5 border-b border-white/10 bg-[rgba(10,14,30,0.95)] px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <div className="mx-3 flex-1 rounded-md bg-white/6 px-3 py-1 text-[10px] text-white/25">
                      {currentProject.title.toLowerCase().replace(/\s+/g, '')}.com
                    </div>
                  </div>
                )}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[1.25rem]"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)' }}
                />
                <img
                  src={src}
                  alt={`${currentProject.title} screen ${idx + 1}`}
                  loading={abs === 0 ? 'eager' : 'lazy'}
                  className="block h-auto w-full bg-[#0f172a]"
                />
                {slot === 0 && (
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[rgba(10,14,30,0.55)] to-transparent" />
                )}
              </div>
            )
          })}
        </div>

        {/* Controls hidden — auto-advances only */}
      </div>
    </section>
  )
}


function AboutSection() {
  return (
    <section className="mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-14 lg:px-20">
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-primary bg-[linear-gradient(145deg,#111827_0%,#0b0b0b_48%,#050816_100%)] px-6 py-8 text-white shadow-[0_28px_70px_-38px_rgba(15,23,42,0.5)] sm:px-8 sm:py-10 lg:px-10">
          <div className="pointer-events-none absolute -left-8 top-10 h-36 w-36 rounded-full bg-[rgba(99,102,241,0.24)] blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[rgba(139,92,246,0.16)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl" />

          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-white/48">About</p>
            <h2 className="mt-4 max-w-lg font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.8rem] lg:leading-[1.02]">
              I don't just build websites — I build systems businesses depend on.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
              Full Stack Engineer with 3+ years shipping production systems for real businesses — platforms that handle real users, real operations, and real growth.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
              I work best with founders and teams who care about the outcome, not just the output.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutDeliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent-soft">
                    ✓
                  </span>
                  <span className="text-sm leading-6 text-white/86">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutHighlights.map((item) => (
            <article
              key={item.title}
              className={`group flex min-h-[200px] flex-col justify-between rounded-[1.75rem] border p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 ${
                item.tone === 'accent'
                  ? 'accent-gradient border-transparent text-white hover:shadow-[0_28px_60px_-28px_rgba(99,102,241,0.5)]'
                  : item.tone === 'soft'
                  ? 'bg-surface border-border/60 text-primary hover:border-accent/25 hover:shadow-[0_28px_60px_-28px_rgba(99,102,241,0.15)]'
                  : 'bg-background/95 border-border/60 text-primary hover:border-accent/30 hover:shadow-[0_28px_60px_-28px_rgba(99,102,241,0.2)]'
              }`}
            >
              {/* Title */}
              <div>
                <p className={`font-display text-xl font-bold leading-tight ${item.tone === 'accent' ? 'text-white' : 'text-primary'}`}>
                  {item.title}
                </p>
                <p className={`mt-3 text-sm leading-6 ${item.tone === 'accent' ? 'text-white/75' : 'text-text-secondary'}`}>
                  {item.label}
                </p>
              </div>

              {/* Proof + tags */}
              <div className="mt-5">
                {item.proof && (
                  <p className={`mb-3 text-[10px] font-bold uppercase tracking-[0.22em] ${item.tone === 'accent' ? 'text-white/55' : 'text-accent/70'}`}>
                    ✓ {item.proof}
                  </p>
                )}
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                          item.tone === 'accent'
                            ? 'bg-white/12 text-white/70'
                            : 'bg-accent/8 text-accent/80'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-border/70 bg-background/88 px-6 py-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.16)] sm:px-8 lg:px-10">
        <div className="grid gap-6 text-center sm:grid-cols-3">
          {aboutStats.map((item, index) => (
            <div
              key={item.label}
              className={`py-2 ${index < aboutStats.length - 1 ? 'sm:border-r sm:border-border/70' : ''}`}
            >
              <p className="font-display text-3xl font-bold text-primary sm:text-[2rem]">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [prevActive, setPrevActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const total = trustTestimonials.length

  const switchTo = (idx) => {
    if (idx === activeTestimonial) return
    setAnimating(true)
    setTimeout(() => {
      setPrevActive(activeTestimonial)
      setActiveTestimonial(idx)
      setAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const id = window.setInterval(() => switchTo((activeTestimonial + 1) % total), 4500)
    return () => window.clearInterval(id)
  }, [activeTestimonial, total])

  const current = trustTestimonials[activeTestimonial]
  const dash = current.dashboard
  const systemMetrics = [
    { label: 'Active Users', value: '10,248+', sub: 'across production platforms', icon: '👥' },
    { label: 'API Response', value: '~120ms', sub: 'average on live systems', icon: '⚡' },
    { label: 'Load Time', value: '< 2s', sub: 'optimized delivery', icon: '🚀' },
    { label: 'Uptime', value: '99.9%', sub: 'production reliability', icon: '🛡️' },
    { label: 'Projects Shipped', value: '10+', sub: 'end-to-end delivery', icon: '📦' },
    { label: 'Performance Gain', value: '40%', sub: 'avg speed improvement', icon: '📈' },
  ]

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-14 lg:px-20">
      <div className="rounded-[2.25rem] border border-border/70 bg-background/88 p-6 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.18)] backdrop-blur sm:p-8 lg:p-10">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Trust</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-[3rem] lg:leading-[1.02]">
              Credibility built through shipped work, not generic freelance claims.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            Freelancers show words. Professionals show systems, data, and outcomes. Here's what the work actually produced.
          </p>
        </div>

        {/* Client logos */}
        <div className="mt-8 flex flex-wrap gap-3">
          {trustLogos.map((item) => (
            <div
              key={item}
              className="rounded-full border border-border/70 bg-surface/80 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-text-secondary shadow-[0_12px_32px_-26px_rgba(15,23,42,0.18)]"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content: testimonial + dashboard */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">

          {/* Left — rotating testimonials */}
          <article className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-primary bg-primary p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.16)] sm:p-7">
            {/* bg glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[rgba(139,92,246,0.22)] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 left-8 h-32 w-32 rounded-full bg-[rgba(99,102,241,0.18)] blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <FaQuoteLeft size={16} />
              </span>

              {/* Animated quote */}
              <div className="relative mt-6 min-h-[120px]">
                {trustTestimonials.map((item, i) => (
                  <p
                    key={i}
                    className={`absolute inset-0 text-base leading-8 text-white/88 transition-all duration-700 ease-in-out sm:text-[1.05rem] sm:leading-9 ${
                      i === activeTestimonial
                        ? 'translate-y-0 opacity-100'
                        : 'pointer-events-none translate-y-4 opacity-0'
                    }`}
                  >
                    {item.quote}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8">
              <div className="border-t border-white/10 pt-5">
                {/* Animated author */}
                <div className="relative min-h-[40px]">
                  {trustTestimonials.map((item, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        i === activeTestimonial
                          ? 'translate-y-0 opacity-100'
                          : 'pointer-events-none translate-y-3 opacity-0'
                      }`}
                    >
                      <p className="text-sm font-semibold text-white">{item.author}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/50">{item.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dot indicators */}
              <div className="mt-6 flex items-center gap-1.5">
                {trustTestimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => switchTo(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeTestimonial ? 'h-2 w-5 bg-white' : 'h-2 w-2 bg-white/25 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </article>

          {/* Right — dynamic dashboard synced to active testimonial */}
          <div className="rounded-[2rem] accent-gradient p-[1px] shadow-[0_24px_60px_-35px_rgba(99,102,241,0.3)]">
            <div className="h-full rounded-[calc(2rem-1px)] bg-background px-6 py-6 sm:px-7 sm:py-7">

              {/* Header */}
              <div
                className={`flex items-center justify-between transition-all duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">{dash.label}</p>
                  <p className="mt-1 text-xs leading-5 text-text-secondary/70">Real results from this project.</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-green-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  Live
                </span>
              </div>

              {/* Metric tiles */}
              <div
                className={`mt-4 grid grid-cols-3 gap-2 transition-all duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
              >
                {dash.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border/60 bg-surface/70 px-3 py-3 text-center">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full mx-auto" style={{ background: `${dash.color}18`, color: dash.color }}>
                      <m.Icon size={13} />
                    </span>
                    <p className="mt-1.5 font-display text-base font-bold leading-none text-primary">{m.value}</p>
                    <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-text-secondary/55">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div
                className={`mt-3 rounded-2xl border border-border/60 bg-surface/50 p-4 transition-all duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary/60">Impact Breakdown</p>
                <div className="mt-3 flex flex-col gap-2.5">
                  {dash.bars.map((bar) => (
                    <div key={bar.label}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-text-secondary/70">{bar.label}</span>
                        <span className="text-[10px] font-bold text-primary">{bar.pct}%</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-border/60">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${bar.pct}%`, background: `linear-gradient(90deg, ${dash.color}, #8B5CF6)` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sparkline */}
              <div
                className={`mt-3 rounded-2xl border border-border/60 bg-surface/50 p-4 transition-all duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary/60">{dash.sparkLabel}</p>
                  <span className="text-[10px] font-bold text-green-600">↑ Trending</span>
                </div>
                <div className="mt-3 flex items-end gap-1" style={{ height: '36px' }}>
                  {dash.spark.map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all duration-300 hover:opacity-100"
                      style={{
                        height: `${v * 10}%`,
                        background: `linear-gradient(180deg, ${dash.color}60, ${dash.color}20)`,
                        opacity: 0.7,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-1.5 flex justify-between">
                  <span className="text-[9px] text-text-secondary/40">Start</span>
                  <span className="text-[9px] text-text-secondary/40">Now</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default function FreelanceLanding() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ]

  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />

      {/* Sticky Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-border/50 bg-background/90 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 md:px-12 lg:px-20">

          {/* Left — logo + brand */}
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Code by Jerry home">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-background/90 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.28)]">
              <img src="/logo.png" alt="Code by Jerry logo" className="h-full w-full object-cover" />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-[0.35em] text-accent">Code by Jerry</span>
              <span className="block text-[11px] font-medium text-text-secondary/80">Scalable systems for real businesses</span>
            </span>
          </Link>

          {/* Center — desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-secondary transition-colors hover:text-primary"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Right — CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:contact@codebyjerry.online"
              className="hidden items-center gap-2 rounded-full accent-gradient px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_12px_32px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(99,102,241,0.85)] sm:inline-flex"
            >
              <FaEnvelope size={11} />
              Start a Project
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/85 text-text-secondary transition-colors hover:border-accent/40 hover:text-accent lg:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span className={`block h-px w-5 bg-current transition-all duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`block h-px w-5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px w-5 bg-current transition-all duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
            mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="mx-auto flex max-w-screen-xl flex-col px-6 py-4 md:px-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border/40 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-text-secondary transition-colors hover:text-accent last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:contact@codebyjerry.online"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full accent-gradient px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white"
            >
              <FaEnvelope size={11} />
              Start a Project
            </a>
          </nav>
        </div>
      </header>

      <div className="relative z-10">
        {/* Hero section — padded to clear sticky header */}
        <section className="mx-auto max-w-screen-xl px-6 pt-20 md:px-12 md:pt-22 lg:px-20">

          <div className="freelance-hero-grid grid gap-12 py-8 md:gap-14 md:py-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:py-10">

            {/* Left — fixed copy */}
            <div className="freelance-hero-copy flex flex-col">

              {/* Availability pill */}
              <p className="mb-6 inline-flex w-max items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Available for freelance projects
              </p>

              {/* Headline */}
              <h2 className="freelance-hero-title font-display text-4xl font-bold leading-[1.02] text-primary sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.0]">
                I Build Systems<br className="hidden sm:block" />{' '}
                <span className="bg-gradient-to-r from-accent via-[#7961F4] to-[#7c3aed] bg-clip-text text-transparent">
                  Businesses Depend On
                </span>
              </h2>

              {/* Subtext */}
              <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary sm:text-[1.05rem] sm:leading-8">
                From web apps and dashboards to eCommerce, mobile apps, and backend systems — I deliver complete, production-grade digital products for growing businesses.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="mailto:contact@codebyjerry.online"
                  className="inline-flex items-center gap-3 rounded-full accent-gradient px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_16px_40px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(99,102,241,0.85)]"
                >
                  Start a Project
                  <FaArrowRight size={12} />
                </a>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-background/80 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-all hover:border-accent/50 hover:text-accent"
                >
                  View Work
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                {[
                  { value: '10+', label: 'Projects Delivered' },
                  { value: '10K+', label: 'Users Supported' },
                  { value: '3+', label: 'Years Experience' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {i > 0 && <span className="h-3.5 w-px bg-border/60" />}
                    <span className="font-display text-sm font-bold text-primary">{item.value}</span>
                    <span className="text-xs text-text-secondary">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — service showcase */}
            <HeroServiceShowcase />
          </div>
        </section>

        <HighImpactSection />

        <ServicesSection />

        <CaseStudiesSection />

        <AboutSection />

        <TrustSection />

        <section className="mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-14 lg:px-20">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div className="max-w-lg">
              <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">How I Work</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
                This is how I think, decide, and deliver.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
              Not a process template. A set of principles built from shipping real systems for real businesses.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'I challenge the problem before touching the code',
                body: 'Most briefs describe symptoms, not root causes. I push back and make sure we\'re solving the right thing before a single line is written.',
                featured: true,
              },
              {
                title: 'I think in systems, not pages',
                body: 'Every feature is part of a larger operational picture — designed for how data flows, how teams use it, and how it scales.',
                featured: false,
              },
              {
                title: 'I build for real usage, not demo success',
                body: 'I test against actual usage patterns, edge cases, and the people who run it daily — not just what looks good in a walkthrough.',
                featured: false,
              },
              {
                title: 'I stay accountable beyond launch',
                body: 'Shipping is not the finish line. I stay involved through stabilisation and make sure the system performs in the hands of real users.',
                featured: false,
              },
            ].map((item, i) => (
              <article
                key={i}
                className={`group rounded-[1.75rem] border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                  item.featured
                    ? 'border-transparent accent-gradient text-white shadow-[0_24px_60px_-20px_rgba(121,97,244,0.5)] hover:shadow-[0_28px_64px_-20px_rgba(121,97,244,0.65)]'
                    : 'border-border/70 bg-background/90 shadow-[0_8px_32px_-16px_rgba(15,23,42,0.1)] hover:border-accent/30 hover:shadow-[0_16px_48px_-20px_rgba(99,102,241,0.18)]'
                }`}
              >
                <h4 className={`font-display text-lg font-bold leading-snug sm:text-xl ${item.featured ? 'text-white' : 'text-primary'}`}>
                  {item.title}
                </h4>
                <p className={`mt-3 text-sm leading-6 sm:text-[15px] sm:leading-7 ${item.featured ? 'text-white/70' : 'text-text-secondary'}`}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 pb-16 md:px-12 lg:px-20 lg:pb-24">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-[linear-gradient(135deg,#0f172a_0%,#111827_38%,#1d4ed8_100%)] px-6 py-10 text-white shadow-[0_32px_90px_-40px_rgba(37,99,235,0.42)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="pointer-events-none absolute -left-10 top-0 h-44 w-44 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-10 h-52 w-52 rounded-full bg-[rgba(99,102,241,0.24)] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[rgba(139,92,246,0.18)] blur-3xl" />

            <div className="relative z-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
              <div className="max-w-3xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
                  Final CTA
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[3.2rem] lg:leading-[1]">
                  Let&apos;s Build Something Scalable &amp; Impactful
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
                  If you need a developer who can turn a rough concept, business bottleneck, or
                  growth-stage product into a reliable system, this is the point to start the
                  conversation.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {contactDetails.map(({ label, value, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={label === 'LinkedIn' || label === 'GitHub' ? '_blank' : undefined}
                      rel={label === 'LinkedIn' || label === 'GitHub' ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2.5 text-[11px] font-medium text-white/84 backdrop-blur-sm transition-colors hover:border-white/28 hover:bg-white/12"
                    >
                      <Icon size={12} />
                      <span className="text-white/60">{label}</span>
                      <span>{value}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-0 lg:justify-end">
                <a
                  href="mailto:contact@codebyjerry.online?subject=Start%20a%20Project"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-primary shadow-[0_20px_50px_-28px_rgba(255,255,255,0.55)] transition-transform hover:-translate-y-1 sm:px-7 sm:text-xs sm:tracking-[0.2em]"
                >
                  <FaArrowRight size={12} />
                  Start a Project
                </a>
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
      </div>

      <a
        href="https://wa.me/917092936243"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full accent-gradient text-white shadow-[0_20px_45px_-20px_rgba(99,102,241,0.85)] transition-transform hover:-translate-y-1"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  )
}
