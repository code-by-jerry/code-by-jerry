import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
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
} from 'react-icons/fa'

const services = [
  {
    title: 'Web Applications',
    description: 'Custom business systems, dashboards, and admin panels built for real workflows. Designed for teams that need speed, clarity, and control over their operations. Built to scale as your business grows.',
    eyebrow: 'Custom Systems',
    image: 'https://ik.imagekit.io/codebyjerry/services/Web%20System.png?tr=f-auto,q-80',
  },
  {
    title: 'eCommerce Systems',
    description: 'High-converting online stores with payment integrations and cleaner buying flows. From Shopify to custom storefronts, built for checkout performance and retention. Every detail is shaped around revenue, not just aesthetics.',
    eyebrow: 'Revenue Focused',
    image: 'https://ik.imagekit.io/codebyjerry/services/eCommerce%20Systems.png?tr=f-auto,q-80',
  },
  {
    title: 'Mobile Applications',
    description: 'Flutter or hybrid app experiences connected tightly with your backend systems. Built for real users, fast, reliable, and consistent across platforms. Designed to keep users engaged and operations running smoothly.',
    eyebrow: 'Mobile Delivery',
    image: 'https://ik.imagekit.io/codebyjerry/services/Mobile%20&%20Integrations.png?tr=f-auto,q-80',
  },
  {
    title: 'Backend & APIs',
    description: 'APIs, automation, integrations, and scalable architectures that support real growth. Clean, documented, and built to handle production load without breaking. The backbone that keeps every system running reliably.',
    eyebrow: 'Core Logic',
    image: 'https://ik.imagekit.io/codebyjerry/services/Backend%20&%20API.png?tr=f-auto,q-80',
  },
  {
    title: 'Business Platforms',
    description: 'End-to-end platforms built around your business model, from user flows to backend logic and scaling. Role-based access, operational dashboards, and automation built in from day one. Systems your team will actually depend on.',
    eyebrow: 'Business First',
    image: 'https://ik.imagekit.io/codebyjerry/services/Business%20Platform.png?tr=f-auto,q-80',
    featured: true,
  },
  {
    title: 'Growth & SEO',
    description: 'Performance optimization and search ranking improvements for long-term visibility. Technical SEO, Core Web Vitals, and speed improvements that compound over time. Built to rank, load fast, and convert better.',
    eyebrow: 'Search Growth',
    image: 'https://ik.imagekit.io/codebyjerry/services/SEO%20&%20Growth.png?tr=f-auto,q-80',
  },
]

const impactStats = [
  {
    value: 40,
    suffix: '%',
    headline: 'Faster Load Times',
    label: 'Achieved through architecture refactoring, lazy loading, and leaner delivery pipelines.',
    tone: 'dark',
    icon: FaBolt,
    proof: 'Measured on production builds',
  },
  {
    value: 2,
    suffix: 'x',
    headline: 'Conversion Improvement',
    label: 'Interfaces rebuilt around user intent, reducing friction at every decision point.',
    tone: 'light',
    icon: FaChartLine,
    proof: 'Across eCommerce & landing systems',
  },
  {
    value: 10000,
    suffix: '+',
    headline: 'Users on Live Systems',
    label: 'Platforms engineered to scale horizontally with no bottlenecks under real traffic.',
    tone: 'accent',
    icon: FaUsers,
    proof: 'Active users across deployed platforms',
  },
  {
    staticValue: '99.9%',
    headline: 'Production Uptime',
    label: 'Systems built with reliability-first architecture, proper error handling, and monitoring.',
    tone: 'soft',
    icon: FaShieldAlt,
    proof: 'Across all production deployments',
  },
]

const contributionLogos = [
  { name: 'Aaraninfo', src: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/aaraninfo.png?updatedAt=1777100866170&tr=f-auto,q-80' },
  { name: 'Techbuds', src: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/techbuds.png?updatedAt=1777100879527&tr=f-auto,q-80' },
  { name: 'DestroSolutions', src: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/destrosolutions.png?updatedAt=1777100848284&tr=f-auto,q-80' },
  { name: 'Freshtick', src: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/freshtick.png?updatedAt=1777100895728&tr=f-auto,q-80' },
  { name: 'Jippymart', src: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/jippymart.webp?tr=f-auto,q-80' },
  { name: 'Pixora', src: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/pixora.svg?tr=f-auto,q-80' },
  { name: 'Area24 Realty', src: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/area24realty.webp?updatedAt=1777100909832&tr=f-auto,q-80' },
  { name: 'Area24One', src: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/area24one.png?tr=f-auto,q-80' },
  { name: 'Codexsun', src: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/codexsun.png?tr=f-auto,q-80' },
  { name: 'Aarun', src: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/aarun.webp?updatedAt=1777100830827&tr=f-auto,q-80' },
  { name: 'Nesthetix', src: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/nesthetix.webp?tr=f-auto,q-80' },
  { name: 'Atha Constructions', src: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Atha%20Constructions.webp?updatedAt=1777100806093&tr=f-auto,q-80' },
]

const serviceSlides = [
  {
    name: 'Web Apps',
    headline: 'Business platforms that keep teams fast and in control.',
    description: 'Dashboards, portals, and admin flows shaped around real operations.',
    image: 'https://ik.imagekit.io/codebyjerry/coj%20services/web.png?tr=f-auto,q-80',
    bigWord: 'BUILD',
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.26),rgba(99,102,241,0.08),transparent_72%)]',
    tags: ['Dashboards', 'Admin Panels'],
  },
  {
    name: 'Mobile Apps',
    headline: 'Mobile experiences connected cleanly with your backend.',
    description: 'Hybrid app interfaces built for speed, clean UX, and reliable integration.',
    image: 'https://ik.imagekit.io/codebyjerry/coj%20services/mobile-app.png?tr=f-auto,q-80',
    bigWord: 'SHIP',
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),rgba(99,102,241,0.08),transparent_72%)]',
    tags: ['Hybrid UX', 'API Ready'],
  },
  {
    name: 'eCommerce',
    headline: 'Commerce systems built to convert and scale cleanly.',
    description: 'Shopify and custom storefronts tuned for checkout, payments, and retention.',
    image: 'https://ik.imagekit.io/codebyjerry/coj%20services/ecom.png?tr=f-auto,q-80',
    bigWord: 'SELL',
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),rgba(99,102,241,0.08),transparent_72%)]',
    tags: ['Shopify', 'Payments'],
  },
  {
    name: 'SEO',
    headline: 'Search-focused pages engineered for visibility and speed.',
    description: 'Landing pages and websites shaped for ranking, growth, and measurable performance.',
    image: 'https://ik.imagekit.io/codebyjerry/coj%20services/seo-.png?tr=f-auto,q-80',
    bigWord: 'RANK',
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2),rgba(99,102,241,0.08),transparent_72%)]',
    tags: ['SEO', 'Performance'],
  },
]

const aboutHighlights = [
  {
    title: 'Operations Systems',
    label: 'Dashboards, admin panels, and role-based workflows built for teams that run on data.',
    proof: 'Handles 10K+ users',
    tags: ['Dashboards', 'Automation'],
    tone: 'light',
    image: 'https://ik.imagekit.io/codebyjerry/Positions/Operational%20Platform.png?updatedAt=1777095297113&tr=f-auto,q-80',
  },
  {
    title: 'Revenue Infrastructure',
    label: 'End-to-end commerce and payment systems engineered to convert and scale without friction.',
    proof: '2x conversion improvement',
    tags: ['eCommerce', 'Payments'],
    tone: 'accent',
    image: 'https://ik.imagekit.io/codebyjerry/Positions/Revenue%20Infrastructure.png?updatedAt=1777095297030&tr=f-auto,q-80',
  },
  {
    title: 'Scalable Architecture',
    label: 'Backend systems designed to grow with your business, with APIs, integrations, and deployment that hold under real load.',
    proof: '40% faster on production',
    tags: ['APIs', 'Infrastructure'],
    tone: 'light',
    image: 'https://ik.imagekit.io/codebyjerry/Positions/Backend%20&%20System%20Architecture.png?updatedAt=1777095297022&tr=f-auto,q-80',
  },
  {
    title: 'Business-Centric Engineering',
    label: 'Every system is shaped around how the business actually operates, not just what the spec says.',
    proof: '3+ years, 10+ systems shipped',
    tags: ['Strategy', 'Full Delivery'],
    tone: 'soft',
    image: 'https://ik.imagekit.io/codebyjerry/Positions/Business-Driven%20Engineering.png?updatedAt=1777095297073&tr=f-auto,q-80',
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
    response: 'We rebuilt the workflow around the team using it every day, then tightened the system until speed and reliability showed up in production.',
    author: 'Product Stakeholder',
    role: 'Operations Platform',
    dashboard: {
      label: 'Operations Platform',
      color: '#6366F1',
      metrics: [
        { label: 'Team Efficiency', value: '+60%', Icon: FaCogs },
        { label: 'Manual Tasks', value: '-80%', Icon: FaRobot },
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
    response: 'The delivery stayed structured from scope to launch, which kept milestones tight and made the finished system easier to extend.',
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
    quote: 'What stood out was the business-first thinking. Jerry did not just build what we asked. He questioned the brief, improved the flow, and delivered something better.',
    response: 'We optimized the experience around buying behavior, not just screens, which pushed conversion and revenue in the right direction.',
    author: 'Founder',
    role: 'eCommerce Startup',
    dashboard: {
      label: 'eCommerce Impact',
      color: '#8B5CF6',
      metrics: [
        { label: 'Conversion Rate', value: '+2x', Icon: FaChartLine },
        { label: 'Cart Abandonment', value: '-35%', Icon: FaCartArrowDown },
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
    response: 'We replaced repetitive manual work with connected automation so the team could move faster with better visibility and fewer errors.',
    author: 'Operations Manager',
    role: 'Logistics Platform',
    dashboard: {
      label: 'Logistics Automation',
      color: '#6366F1',
      metrics: [
        { label: 'Processes Automated', value: '3 to 0', Icon: FaRobot },
        { label: 'Time Saved/Week', value: '40hrs', Icon: FaClock },
        { label: 'Data Errors', value: '-95%', Icon: FaDatabase },
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
    response: 'The rebuild focused on faster delivery paths, cleaner backend behavior, and a steadier system under real traffic peaks.',
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

const blogPosts = [
  {
    title: 'Building Scalable Web Applications: A Business-First Approach',
    excerpt: 'Learn how to architect web applications that grow with your business, focusing on performance, maintainability, and real user needs rather than just features.',
    readTime: '5 min read',
    category: 'Architecture',
    image: 'https://ik.imagekit.io/codebyjerry/blog/scalable-web-apps.jpg?tr=f-auto,q-80',
    link: '#',
  },
  {
    title: 'Why Your eCommerce Store Needs a Custom Backend',
    excerpt: 'Generic platforms work for basic stores, but serious eCommerce businesses need custom backends for competitive advantages, unique workflows, and scalable growth.',
    readTime: '4 min read',
    category: 'eCommerce',
    image: 'https://ik.imagekit.io/codebyjerry/blog/ecommerce-backend.jpg?tr=f-auto,q-80',
    link: '#',
  },
  {
    title: 'Mobile Apps That Drive Business Results',
    excerpt: 'Beyond pretty interfaces: how to build mobile experiences that increase engagement, retention, and ultimately drive revenue for your business.',
    readTime: '6 min read',
    category: 'Mobile',
    image: 'https://ik.imagekit.io/codebyjerry/blog/mobile-business.jpg?tr=f-auto,q-80',
    link: '#',
  },
]

const faqData = [
  {
    question: 'How do you ensure projects are delivered on time and within budget?',
    answer: 'I work with fixed scopes and clear milestones. Each project starts with detailed planning, and I provide regular updates. My track record shows 100% on-time delivery with transparent pricing.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in modern full-stack development: Laravel/PHP for backends, React/Inertia.js for frontends, Flutter for mobile, and scalable cloud architectures. I choose the right tools for your business needs.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, I offer maintenance packages and am available for ongoing development. Many clients continue working with me for feature additions, optimizations, and scaling as their business grows.',
  },
  {
    question: 'How do you handle project communication and updates?',
    answer: 'I provide weekly progress updates, use project management tools, and am always available for calls/meetings. You get direct access to me, not project managers or intermediaries.',
  },
  {
    question: 'What makes your approach different from other freelancers?',
    answer: 'I focus on business outcomes over just coding. I question requirements, optimize for performance, and build systems that actually solve real problems rather than just implementing specifications.',
  },
  {
    question: 'Do you work with startups or only established businesses?',
    answer: 'I work with both startups and established businesses. I understand the different needs - startups need speed and iteration, while established businesses need reliability and integration with existing systems.',
  },
]

const caseStudies = [
  {
    title: 'Realty',
    category: 'Real Estate Platform',
    tagline: 'Property-led product screens presented as a polished visual gallery.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174924.png?updatedAt=1776506172591&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174906.png?updatedAt=1776506172562&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175012.png?updatedAt=1776506172472&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20174958.png?updatedAt=1776506172458&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180325.png?updatedAt=1776506172517&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180242.png?updatedAt=1776506172393&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175029.png?updatedAt=1776506172359&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20180358.png?updatedAt=1776506172355&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175047.png?updatedAt=1776506172201&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175904.png?updatedAt=1776506172060&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175112.png?updatedAt=1776506171959&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175101.png?updatedAt=1776506171582&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175842.png?updatedAt=1776506171457&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/realty/Screenshot%202026-04-11%20175146.png?updatedAt=1776506171372&tr=f-auto,q-80',
    ],
  },
  {
    title: 'Nesthetix Design',
    category: 'Interior Design Portfolio',
    tagline: 'Brand-first interiors work shown through refined full-page compositions.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174304.png?updatedAt=1776506131947&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174404.png?updatedAt=1776506131779&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174512.png?updatedAt=1776506131736&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174224.png?updatedAt=1776506131740&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174324.png?updatedAt=1776506131733&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174538.png?updatedAt=1776506131619&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174447.png?updatedAt=1776506131601&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174552.png?updatedAt=1776506131374&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174755.png?updatedAt=1776506131259&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174349.png?updatedAt=1776506131185&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174742.png?updatedAt=1776506131100&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174244.png?updatedAt=1776506131014&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/nesthetixdesigns/Screenshot%202026-04-11%20174143.png?updatedAt=1776506130585&tr=f-auto,q-80',
    ],
  },
  {
    title: 'Camiprod',
    category: 'Shopify Store',
    tagline: 'Commerce pages arranged as a premium product gallery with visual depth.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144833.png?updatedAt=1776506056407&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144853.png?updatedAt=1776506056398&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144548.png?updatedAt=1776506054013&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144659.png?updatedAt=1776506055429&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144745.png?updatedAt=1776506054151&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144819.png?updatedAt=1776506054135&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144802.png?updatedAt=1776506054356&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144915.png?updatedAt=1776506053788&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144641.png?updatedAt=1776506053279&tr=f-auto,q-80',
    ],
  },
  {
    title: 'Baybee',
    category: 'eCommerce Experience',
    tagline: 'Mobile-first storefront visuals surfaced as a focused case-study gallery.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181456.png?updatedAt=1776505955612&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181416.png?updatedAt=1776505955600&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181443.png?updatedAt=1776505955588&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181400.png?updatedAt=1776505955585&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181336.png?updatedAt=1776505955591&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181351.png?updatedAt=1776505955569&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181304.png?updatedAt=1776505955269&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181244.png?updatedAt=1776505955284&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181232.png?updatedAt=1776505955229&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181206.png?updatedAt=1776505955012&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/baybee/Screenshot%202026-04-11%20181222.png?updatedAt=1776505954940&tr=f-auto,q-80',
    ],
  },
  {
    title: 'Atha Constructions',
    category: 'Construction Website',
    tagline: 'Lead-generation and CMS pages displayed with the same editorial gallery rhythm.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145530.png?updatedAt=1776505896460&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145546.png?updatedAt=1776505896414&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145656.png?updatedAt=1776505896444&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145624.png?updatedAt=1776505896411&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145311.png?updatedAt=1776505896420&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145446.png?updatedAt=1776505896420&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145432.png?updatedAt=1776505896428&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145605.png?updatedAt=1776505896413&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145404.png?updatedAt=1776505896421&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145328.png?updatedAt=1776505896447&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145343.png?updatedAt=1776505896417&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145640.png?updatedAt=1776505896409&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145517.png?updatedAt=1776505896171&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145501.png?updatedAt=1776505896177&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145219.png?updatedAt=1776505895590&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/athaconstructions/Screenshot%202026-04-11%20145126.png?updatedAt=1776505895521&tr=f-auto,q-80',
    ],
  },
  {
    title: 'Area24One',
    category: 'Multi-Vertical Company Site',
    tagline: 'Enterprise screens and landing flows surfaced in a more visual showcase format.',
    images: [
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180920.png?updatedAt=1776505783378&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180816.png?updatedAt=1776505783376&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180731.png?updatedAt=1776505783393&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180834.png?updatedAt=1776505783335&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180935.png?updatedAt=1776505783299&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180906.png?updatedAt=1776505783307&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180753.png?updatedAt=1776505783326&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180809.png?updatedAt=1776505783224&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180640.png?updatedAt=1776505783223&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180655.png?updatedAt=1776505783135&tr=f-auto,q-80',
      'https://ik.imagekit.io/codebyjerry/works/area24one/Screenshot%202026-04-11%20180709.png?updatedAt=1776505783173&tr=f-auto,q-80',
    ],
  },
]

const detailedCaseStudies = [
  {
    id: 1,
    client: 'UrbanProp Realty',
    industry: 'Real Estate',
    serviceType: 'Web Application + Backend',
    challenge: 'Manual property management across spreadsheets. Agents spending 3+ hours daily on admin tasks. Zero visibility into pipeline. Lost 30% of deals due to poor follow-up.',
    solution: 'Built custom web app with intelligent dashboards, CRM integration, automated lead routing, and mobile-responsive property management system. Real-time analytics on agent performance and deal pipeline.',
    results: [
      { metric: 'Revenue Impact', before: '-30% deal loss', after: '+45% close rate', icon: FaChartLine, improvement: '75% improvement' },
      { metric: 'Operational Efficiency', before: '3 hrs admin/day', after: '45 min admin/day', icon: FaClock, improvement: '85% time saved' },
      { metric: 'User Engagement', before: '20 properties/month', after: '120+ properties/month', icon: FaRocket, improvement: '6x increase' },
      { metric: 'System Performance', before: '12 sec load time', after: '0.8 sec load time', icon: FaBolt, improvement: '15x faster' },
    ],
    technologies: ['Laravel', 'React', 'PostgreSQL', 'AWS', 'Real-time APIs'],
    timeline: '4 months',
    impact: 'Client closed $2.1M in additional deals in first year using the system',
  },
  {
    id: 2,
    client: 'StyleVault eCommerce',
    industry: 'Fashion & Apparel',
    serviceType: 'eCommerce Platform + SEO',
    challenge: 'Shopify store with 2% conversion rate. $15 CAC but 60% cart abandonment. Losing $50K/month in potential sales. Slow mobile checkout (8 sec).',
    solution: 'Rebuilt checkout flow, optimized images, implemented one-page checkout, added exit-intent recovery emails, improved Core Web Vitals. SEO optimization increased organic traffic by 180%.',
    results: [
      { metric: 'Conversion Rate', before: '2%', after: '6.2%', icon: FaCartArrowDown, improvement: '3.1x improvement' },
      { metric: 'Revenue Impact', before: '$50K lost/month', after: '+$185K/month', icon: FaMoneyBillWave, improvement: '210% increase' },
      { metric: 'Cart Abandonment', before: '60%', after: '22%', icon: FaCrosshairs, improvement: '38% reduction' },
      { metric: 'Page Load Time', before: '8 sec', after: '1.2 sec', icon: FaTachometerAlt, improvement: '87% faster' },
    ],
    technologies: ['Shopify', 'React Liquid', 'Next.js', 'Node.js', 'SEO Optimization'],
    timeline: '3 months',
    impact: '$2.2M additional annual revenue from conversion improvements alone',
  },
  {
    id: 3,
    client: 'BuildFlow SaaS',
    industry: 'Construction Management',
    serviceType: 'Business Platform + Backend',
    challenge: 'Legacy system crashing under load (100+ concurrent users). Downtime costing $5K/hour. Poor API integration with third-party tools. High churn (25% monthly).',
    solution: 'Rebuilt entire platform with microservices architecture, horizontal scaling, improved APIs, real-time notifications, and granular role-based access. 99.9% uptime SLA achieved.',
    results: [
      { metric: 'System Reliability', before: '87% uptime', after: '99.9% uptime', icon: FaShieldAlt, improvement: '12x reliability' },
      { metric: 'Concurrent Users', before: '100 users max', after: '5000+ users', icon: FaUsers, improvement: '50x capacity' },
      { metric: 'Customer Churn', before: '25% monthly', after: '4% monthly', icon: FaSyncAlt, improvement: '84% reduction' },
      { metric: 'API Performance', before: '800ms avg', after: '45ms avg', icon: FaBolt, improvement: '18x faster' },
    ],
    technologies: ['Node.js', 'Docker', 'PostgreSQL', 'Redis', 'AWS Kubernetes', 'gRPC'],
    timeline: '6 months',
    impact: '$12M valuation increase. 300+ enterprise clients on platform. $4.2M ARR achieved',
  },
]

function DetailedCaseStudiesSection() {
  const [activeStudy, setActiveStudy] = useState(0)
  const study = detailedCaseStudies[activeStudy]

  return (
    <section className="relative mx-auto max-w-screen-xl scroll-mt-24 px-5 py-8 sm:px-6 md:px-12 md:py-10 lg:px-20 lg:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.04),transparent_50%)]" />

      <div className="relative z-10">
        <div className="mb-6 max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Case Studies</p>
          <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-primary sm:text-3xl lg:text-4xl">
            Measurable impact across industries.
          </h2>
          <p className="mt-3 text-sm leading-6 text-text-secondary sm:text-base">
            Real results with documented before/after metrics. Systems that drive revenue, reduce costs, and scale reliably.
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
                    ? 'border-accent bg-accent/5 shadow-[0_6px_20px_-8px_rgba(121,97,244,0.25)]'
                    : 'border-border/40 hover:border-border/60 hover:bg-surface/50'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-display text-sm font-bold ${activeStudy === idx ? 'text-primary' : 'text-primary/80'}`}>
                      {cs.client}
                    </h3>
                    <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-text-secondary/70">
                      {cs.industry}
                    </p>
                    <p className="mt-1 text-xs text-text-secondary line-clamp-1">{cs.serviceType}</p>
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
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent">Challenge</p>
                <p className="mt-2 text-xs leading-5 text-text-secondary">{study.challenge}</p>
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent">Solution</p>
                <p className="mt-2 text-xs leading-5 text-text-secondary">{study.solution}</p>
              </div>
            </div>

            {/* Results Grid */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent mb-2">Results</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {study.results.map((result, idx) => {
                  const Icon = result.icon
                  return (
                    <div key={idx} className="rounded-lg bg-surface/60 p-2.5 border border-border/40">
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 text-accent shrink-0">
                          <Icon size={16} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-text-secondary/70">
                            {result.metric}
                          </p>
                          <div className="mt-1 flex items-baseline gap-1">
                            <span className="text-xs line-through text-text-secondary/70">{result.before}</span>
                            <span className="font-display text-sm font-bold text-primary">{result.after}</span>
                          </div>
                          <p className="mt-0.5 text-[8px] font-bold text-green-500/80">{result.improvement}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Footer Info */}
            <div className="border-t border-border/40 pt-3">
              <div className="grid gap-3">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">Tech Stack</p>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {study.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-6">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">Timeline</p>
                    <p className="mt-1 font-display text-sm font-bold text-primary">{study.timeline}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">Impact</p>
                    <p className="mt-1 text-[10px] leading-4 font-medium text-text-secondary line-clamp-2">{study.impact}</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="mailto:contact@codebyjerry.online"
              className="inline-flex w-max items-center gap-2 rounded-full bg-accent px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-accent/85"
            >
              Start Project
              <FaArrowRight size={10} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroServiceShowcase() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviceSlides.length)
    }, 4200)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="freelance-showcase relative flex min-h-[560px] flex-col overflow-hidden rounded-[1.5rem] border border-border/60 bg-background/78 p-4 shadow-[0_20px_55px_-36px_rgba(15,23,42,0.22)] backdrop-blur-sm sm:min-h-[600px] sm:rounded-[2rem] sm:p-6 md:min-h-[620px] lg:h-full lg:min-h-[34rem] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
      <div className="pointer-events-none absolute -left-8 top-6 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.82)] blur-3xl sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute right-0 top-14 h-48 w-48 rounded-full bg-[rgba(99,102,241,0.14)] blur-3xl sm:h-64 sm:w-64" />
      <div className="pointer-events-none absolute bottom-20 right-12 h-36 w-36 rounded-full bg-[rgba(139,92,246,0.14)] blur-3xl sm:h-52 sm:w-52" />

      <div className="relative min-h-[465px] flex-1 overflow-hidden sm:min-h-[500px] lg:min-h-0">
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
              <div className="grid h-full grid-rows-[auto_minmax(260px,1fr)] gap-4 sm:grid-rows-[auto_1fr] sm:gap-8 lg:gap-8">
                <div className="relative z-10">
                  <div className="max-w-xl">
                    <div className="mt-1 sm:mt-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-text-secondary/70 sm:tracking-[0.32em]">
                        {slide.name}
                      </p>
                      <h2 className="mt-2 max-w-xl font-display text-xl font-bold leading-tight text-primary sm:text-[2rem] lg:text-[2.15rem] lg:leading-[1.02]">
                        {slide.headline}
                      </h2>
                    </div>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-text-secondary sm:mt-4 sm:text-[15px]">
                      {slide.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 sm:mt-4">
                      {slide.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/80 sm:tracking-[0.24em]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative mt-1 flex min-h-[260px] items-center justify-center pb-3 sm:mt-2 sm:min-h-[300px] sm:items-end sm:pb-0 md:min-h-[320px] lg:mt-0 lg:min-h-0">
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
                    className={`relative z-10 mx-auto block h-auto max-h-[250px] w-full max-w-[315px] object-contain object-center transition-all duration-700 ease-out sm:max-h-none sm:max-w-[400px] md:max-w-[420px] lg:absolute lg:inset-x-0 lg:bottom-0 lg:max-w-[560px] ${
                      isActive ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-[0.98] opacity-0'
                    }`}
                  />
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="relative z-30 mt-3 grid grid-cols-2 gap-2 pt-2 sm:mt-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-2 lg:justify-start">
        {serviceSlides.map((slide, index) => (
          <button
            key={slide.name}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-pressed={index === activeSlide}
            className={`group inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-2 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.18em] transition-colors sm:justify-start sm:px-0 sm:py-0 sm:text-left sm:text-[11px] sm:tracking-[0.32em] ${
              index === activeSlide ? 'text-primary' : 'text-text-secondary/70 hover:text-primary'
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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const frameId = requestAnimationFrame(() => setProgress(1))
      return () => cancelAnimationFrame(frameId)
    }
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
    dark:  { wrap: 'bg-primary border-primary text-white hover:shadow-[0_28px_60px_-24px_rgba(15,23,42,0.55)]', label: 'text-white/70', proof: 'text-white/70' },
    light: { wrap: 'bg-background/95 border-border/60 text-primary hover:border-accent/30 hover:shadow-[0_28px_60px_-24px_rgba(99,102,241,0.2)]', label: 'text-text-secondary', proof: 'text-text-secondary/70' },
    accent:{ wrap: 'accent-gradient border-transparent text-white hover:shadow-[0_28px_60px_-24px_rgba(99,102,241,0.55)]', label: 'text-white/70', proof: 'text-white/70' },
    soft:  { wrap: 'bg-surface border-border/60 text-primary hover:border-accent/25 hover:shadow-[0_28px_60px_-24px_rgba(99,102,241,0.15)]', label: 'text-text-secondary', proof: 'text-text-secondary/70' },
  }

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-screen-xl px-5 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">
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
            Strong systems are useful. Measurable impact is what makes them valuable. These numbers come from real production builds, not estimates.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((stat) => {
            const s = cardStyles[stat.tone]
            const Icon = stat.icon
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
                    <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${s.proof}`}>
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
  const [isHoveringButtons, setIsHoveringButtons] = useState(false)
  const navigate = useNavigate()

  // Map service titles to their URLs
  const getServiceUrl = (title) => {
    const urlMap = {
      'Web Applications': '/services/web-applications',
      'eCommerce Systems': '/services/ecommerce',
      'Mobile Applications': '/services/mobile-apps',
      'Backend & APIs': '/services/backend-apis',
      'Business Platforms': '/services/business-platforms',
      'Growth & SEO': '/services/seo-growth'
    }
    return urlMap[title] || '#'
  }

  const serviceUrl = getServiceUrl(title)

  const handleMouseEnter = () => setFlipped(true)
  const handleMouseLeave = () => {
    if (!isHoveringButtons) {
      setFlipped(false)
    }
  }

  const handleCardClick = () => {
    if (serviceUrl !== '#') {
      navigate(serviceUrl)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCardClick()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className="cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      <div
        className="relative w-full transition-transform duration-700 ease-out"
        style={{
          aspectRatio: '1 / 1',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front image only, no overlay text */}
        <div
          className={`absolute inset-0 overflow-hidden rounded-[1.75rem] shadow-[0_12px_40px_-20px_rgba(15,23,42,0.14)] ${
            featured
              ? 'border-2 border-accent shadow-[0_12px_40px_-16px_rgba(121,97,244,0.35)]'
              : 'border border-border/60'
          }`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          onClick={handleCardClick}
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Back details */}
        <div
          className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[1.75rem] border p-6 sm:p-7 ${
            featured
              ? 'border-transparent accent-gradient shadow-[0_20px_60px_-20px_rgba(121,97,244,0.5)]'
              : 'border-border/60 bg-background shadow-[0_12px_40px_-20px_rgba(15,23,42,0.14)]'
          }`}
          style={{
            backfaceVisibility: 'hidden',
          }}
          onClick={(event) => {
            if (!event.target.closest('a')) {
              handleCardClick()
            }
          }}
        >
          {featured && (
            <>
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/8 blur-2xl" />
            </>
          )}
          <div className="relative z-10">
            {featured && (
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest text-white border border-white/20 backdrop-blur-sm">
                  <span className="flex h-1 w-1 rounded-full bg-white animate-pulse" />
                  Featured Service
                </span>
              </div>
            )}
            <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${featured ? 'text-white/70' : 'text-text-secondary/70'}`}>
              {eyebrow}
            </p>
            <h3 className={`mt-3 font-display text-2xl font-bold leading-tight ${featured ? 'text-white' : 'text-primary'}`}>
              {title}
            </h3>
            <p className={`mt-4 text-sm leading-6 ${featured ? 'text-white/75' : 'text-text-secondary'}`}>
              {description}
            </p>
          </div>
          <div
            className="relative z-10 flex gap-3"
            onMouseEnter={() => setIsHoveringButtons(true)}
            onMouseLeave={() => setIsHoveringButtons(false)}
          >
            <div className="inline-flex w-max items-center gap-2 rounded-full bg-accent/8 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              Click card to open page
            </div>
            <a
              href="mailto:contact@codebyjerry.online"
              onClick={(event) => {
                event.stopPropagation()
              }}
              className={`inline-flex w-max items-center gap-2 rounded-full px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                featured
                  ? 'bg-white/20 text-white hover:bg-white/30'
                  : 'bg-primary/8 text-primary hover:bg-primary/15'
              }`}
            >
              Start Project
              <FaEnvelope size={10} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="relative mx-auto max-w-screen-xl scroll-mt-24 px-5 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.04),transparent_50%)]" />

      <div className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Services</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Professional Web, Mobile & Backend Development Services
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            From customer-facing experiences to backend architecture, serious execution, not generic freelance output.
          </p>
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
  )
}

function ContributionsSection() {
  const marqueeItems = [...contributionLogos, ...contributionLogos]

  return (
    <section className="mx-auto max-w-screen-xl px-5 py-8 sm:px-6 md:px-12 md:py-10 lg:px-20">
      <style>{`
        @keyframes contributionsMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="rounded-[2rem] border border-border/70 bg-background/78 px-5 py-6 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.14)] sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div className="max-w-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Contributions</p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-primary sm:text-[2rem]">
              Development Projects & Enterprise Platforms I&apos;ve Contributed To
            </h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary">
              Shown here as contributor work and delivery involvement, not ownership claims.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background via-background/92 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background via-background/92 to-transparent" />

            <div
              className="flex min-w-max items-center gap-4 py-2"
              style={{ animation: 'contributionsMarquee 30s linear infinite' }}
            >
              {marqueeItems.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-surface/70 px-5 py-4 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.16)]"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    loading="lazy"
                    className="max-h-10 w-auto max-w-full object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
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
    if (total < 2 || paused) return
    const id = window.setInterval(() => {
      setActiveImage((c) => (c + 1) % total)
    }, 3600)
    return () => window.clearInterval(id)
  }, [total, paused])

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
    <section id="work" className="mx-auto max-w-screen-xl scroll-mt-24 px-5 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">
      {/* Header */}
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="max-w-lg">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Case Studies</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Real projects. Real results.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          Each project is a system built for a real business, not a template, not a demo. Browse the actual screens delivered to clients.
        </p>
      </div>

      {/* Project tabs */}
      <div className="mt-8 flex flex-wrap gap-2 md:mt-10">
        {caseStudies.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => {
              setActiveProject(index)
              setActiveImage(0)
            }}
            aria-pressed={index === activeProject}
            className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] transition-all sm:px-5 sm:text-[11px] ${
              index === activeProject
                ? 'border-transparent accent-gradient text-white shadow-[0_18px_40px_-26px_rgba(99,102,241,0.48)]'
                : 'border-border/70 bg-background/90 text-text-secondary hover:border-accent/45 hover:text-primary'
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Case study stage */}
      <div
        className="relative mt-8 overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(246,247,255,0.94)_48%,rgba(238,242,255,0.9)_100%)] shadow-[0_26px_70px_-45px_rgba(99,102,241,0.32)] sm:rounded-[2.25rem] md:mt-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.26]"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.12) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        {/* Top accent border */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent" />
        {/* Bottom accent border */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

        {/* Project info */}
        <div className="relative z-10 px-5 pt-7 text-center sm:px-10 sm:pt-8">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-accent/70 md:hidden">
            {currentProject.category}
          </p>
          <h3 className="font-display text-2xl font-bold text-primary sm:text-3xl lg:text-[2.6rem]">
            {currentProject.title}
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-text-secondary">
            {currentProject.tagline}
          </p>
        </div>

        {/* Mobile active screen */}
        <div className="relative z-10 px-4 pb-5 pt-6 md:hidden">
          <div className="overflow-hidden rounded-[1.35rem] border border-border/70 bg-background shadow-[0_22px_46px_-32px_rgba(99,102,241,0.38)]">
            <div className="flex items-center gap-1.5 border-b border-border/70 bg-surface/80 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className="mx-2 min-w-0 flex-1 rounded-md bg-background/85 px-3 py-1 text-center text-[10px] text-text-secondary/70">
                {currentProject.title.toLowerCase().replace(/\s+/g, '')}.com
              </div>
            </div>
            <div className="grid min-h-[210px] place-items-center bg-[#0f172a]">
              <img
                src={currentImages[activeImage]}
                alt={`${currentProject.title} screen ${activeImage + 1}`}
                loading="eager"
                className="block h-auto max-h-[260px] w-full object-contain"
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
                  idx === activeImage ? 'w-5 bg-accent' : 'w-1.5 bg-text-secondary/25'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 3D Stacked Carousel */}
        <div
          className="relative mx-auto mt-10 hidden md:block"
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
                className="absolute left-1/2 top-0 w-[52%] max-w-[520px] -translate-x-1/2 overflow-hidden rounded-[1.25rem] border border-border/70 bg-background transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] sm:w-[55%]"
                style={{
                  ...style,
                  cursor: slot !== 0 ? 'pointer' : 'default',
                  transformStyle: 'preserve-3d',
                  boxShadow: slot === 0
                    ? '0 36px 76px -38px rgba(99,102,241,0.42), 0 0 0 1px rgba(99,102,241,0.08)'
                    : '0 24px 54px -34px rgba(15,23,42,0.24)',
                }}
              >
                {slot === 0 && (
                  <div className="flex items-center gap-1.5 border-b border-border/70 bg-surface/80 px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <div className="mx-3 flex-1 rounded-md bg-background/85 px-3 py-1 text-[10px] text-text-secondary/70">
                      {currentProject.title.toLowerCase().replace(/\s+/g, '')}.com
                    </div>
                  </div>
                )}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[1.25rem]"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 48%)' }}
                />
                <img
                  src={src}
                  alt={`${currentProject.title} screen ${idx + 1}`}
                  loading={abs === 0 ? 'eager' : 'lazy'}
                  className="block h-auto w-full bg-[#0f172a]"
                />
                {slot === 0 && (
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/45 to-transparent" />
                )}
              </div>
            )
          })}
        </div>

        {/* Controls hidden, auto-advances only */}
      </div>
    </section>
  )
}


function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-screen-xl scroll-mt-24 px-5 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-primary bg-[linear-gradient(145deg,#111827_0%,#0b0b0b_48%,#050816_100%)] px-6 py-8 text-white shadow-[0_28px_70px_-38px_rgba(15,23,42,0.5)] sm:px-8 sm:py-10 lg:px-10">
          <div className="pointer-events-none absolute -left-8 top-10 h-36 w-36 rounded-full bg-[rgba(99,102,241,0.24)] blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[rgba(139,92,246,0.16)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl" />

          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-white/70">About</p>
            <h2 className="mt-4 max-w-lg font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.8rem] lg:leading-[1.02]">
              I don't just build websites. I build systems businesses depend on.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
              Full Stack Engineer with 3+ years shipping production systems for real businesses, with platforms that handle real users, real operations, and real growth.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              I work best with founders and teams who care about the outcome, not just the output.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutDeliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-accent-soft">
                    <FaCheckCircle size={12} aria-hidden="true" />
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
              className="group overflow-hidden rounded-[1.75rem] border border-border/60 bg-background/95 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_28px_60px_-28px_rgba(99,102,241,0.2)]"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="block h-full min-h-[200px] w-full object-cover"
              />
              <div className="hidden">
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
                  <p className={`mb-3 text-[10px] font-bold uppercase tracking-[0.22em] ${item.tone === 'accent' ? 'text-white/70' : 'text-accent/70'}`}>
                     {item.proof}
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
  const [animating, setAnimating] = useState(false)
  const total = trustTestimonials.length

  const switchTo = useCallback((idx) => {
    if (idx === activeTestimonial) return
    setAnimating(true)
    setTimeout(() => {
      setActiveTestimonial(idx)
      setAnimating(false)
    }, 300)
  }, [activeTestimonial])

  useEffect(() => {
    const id = window.setInterval(() => switchTo((activeTestimonial + 1) % total), 4500)
    return () => window.clearInterval(id)
  }, [activeTestimonial, switchTo, total])

  const current = trustTestimonials[activeTestimonial]
  const dash = current.dashboard
  const chartMode = activeTestimonial % 5
  const primaryMetric = dash.metrics[chartMode % dash.metrics.length]
  const pieMetric = dash.bars[chartMode % dash.bars.length]
  const linePoints = dash.spark
    .map((v, i) => `${(i / (dash.spark.length - 1)) * 100},${100 - v * 9}`)
    .join(' ')
  const chartOrder = [
    chartMode === 0 ? 'lg:order-1' : chartMode === 1 ? 'lg:order-3' : chartMode === 2 ? 'lg:order-2' : chartMode === 3 ? 'lg:order-4' : 'lg:order-1',
    chartMode === 0 ? 'lg:order-2' : chartMode === 1 ? 'lg:order-1' : chartMode === 2 ? 'lg:order-4' : chartMode === 3 ? 'lg:order-2' : 'lg:order-3',
    chartMode === 0 ? 'lg:order-3' : chartMode === 1 ? 'lg:order-4' : chartMode === 2 ? 'lg:order-1' : chartMode === 3 ? 'lg:order-3' : 'lg:order-2',
    chartMode === 0 ? 'lg:order-4' : chartMode === 1 ? 'lg:order-2' : chartMode === 2 ? 'lg:order-3' : chartMode === 3 ? 'lg:order-1' : 'lg:order-4',
  ]
  return (
    <section className="mx-auto max-w-screen-xl px-5 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">
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
        <div className="mt-8 grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">

          {/* Left rotating testimonials */}
          <article className="relative flex h-auto flex-col rounded-[1.75rem] border border-primary bg-primary p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.16)] sm:p-7">
            {/* bg glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[rgba(139,92,246,0.22)] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 left-8 h-32 w-32 rounded-full bg-[rgba(99,102,241,0.18)] blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <FaQuoteLeft size={16} />
              </span>

              {/* Animated review + response */}
              <div className="relative mt-4 min-h-[190px]">
                {trustTestimonials.map((item, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-700 ease-in-out ${
                      i === activeTestimonial
                        ? 'translate-y-0 opacity-100'
                        : 'pointer-events-none absolute inset-0 translate-y-4 opacity-0'
                    }`}
                  >
                    <div className="rounded-[1.2rem] rounded-tl-md border border-white/12 bg-white/6 px-4 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">Client Review</p>
                      <p
                        className="mt-2 text-[15px] leading-7 text-white/88"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {item.quote}
                      </p>
                    </div>
                    <div className="mt-3 ml-auto max-w-[86%] rounded-[1.2rem] rounded-tr-md bg-white px-4 py-3 text-primary shadow-[0_18px_42px_-30px_rgba(255,255,255,0.28)]">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-text-secondary/70">Response</p>
                      <p
                        className="mt-2 text-[13px] leading-6 text-text-secondary"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {item.response}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-5">
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
                      <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/70">{item.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Right dynamic dashboard synced to active testimonial */}
          <div className="rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(247,248,255,0.96))] p-5 shadow-[0_24px_60px_-38px_rgba(99,102,241,0.22)] sm:p-6">
            <div className={`transition-all duration-300 ${animating ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Outcome Board</p>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-primary">
                    {dash.label}
                  </h3>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-green-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  Live
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className={`rounded-2xl border border-border/70 bg-background p-4 shadow-[0_16px_36px_-32px_rgba(15,23,42,0.18)] ${chartOrder[0]}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">Key Stat</p>
                      <p className="mt-3 font-display text-4xl font-bold leading-none text-primary">{primaryMetric.value}</p>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: `${dash.color}14`, color: dash.color }}>
                      <primaryMetric.Icon size={16} />
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-text-secondary/70">{primaryMetric.label}</p>
                </div>

                <div className={`rounded-2xl border border-border/70 bg-surface/70 p-4 ${chartOrder[1]}`}>
                  <div className="flex items-center gap-4">
                    <div
                      className="grid h-24 w-24 shrink-0 place-items-center rounded-full"
                      style={{ background: `conic-gradient(${dash.color} ${pieMetric.pct * 3.6}deg, rgba(99,102,241,0.12) 0deg)` }}
                    >
                      <div className="grid h-16 w-16 place-items-center rounded-full bg-background">
                        <span className="font-display text-lg font-bold text-primary">{pieMetric.pct}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">Pie Signal</p>
                      <p className="mt-2 text-sm font-bold leading-5 text-primary">{pieMetric.label}</p>
                    </div>
                  </div>
                </div>

                <div className={`rounded-2xl border border-border/70 bg-background p-4 ${chartOrder[2]}`}>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">Line Trend</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-600">Trending</p>
                  </div>
                  <svg viewBox="0 0 100 100" className="mt-3 h-28 w-full overflow-visible" preserveAspectRatio="none" aria-hidden="true">
                    <polyline points={`0,96 ${linePoints} 100,96`} fill={`${dash.color}14`} stroke="none" />
                    <polyline points={linePoints} fill="none" stroke={dash.color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-text-secondary/70">{dash.sparkLabel}</p>
                </div>

                <div className={`rounded-2xl border border-border/70 bg-surface/70 p-4 ${chartOrder[3]}`}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">Progress Bars</p>
                  <div className="mt-4 space-y-3">
                    {dash.bars.map((bar) => (
                      <div key={bar.label}>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs text-text-secondary">{bar.label}</span>
                          <span className="text-xs font-bold text-primary">{bar.pct}%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-border/60">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{ width: `${bar.pct}%`, background: `linear-gradient(90deg, ${dash.color}, #8B5CF6)` }}
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
  )
}

function BlogSection() {
  return (
    <section id="blog" className="mx-auto max-w-screen-xl scroll-mt-24 px-5 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="max-w-lg">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Insights</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Building Better Digital Systems
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          Practical insights from shipping production systems. Learn how to build software that drives real business results.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="group overflow-hidden rounded-[1.75rem] border border-border/60 bg-background/95 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_28px_64px_-28px_rgba(99,102,241,0.2)]"
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
                <span className="text-[10px] font-medium text-text-secondary/70">{post.readTime}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold leading-tight text-primary">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {post.excerpt}
              </p>
              <a
                href={post.link}
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent/80"
              >
                Read Article
                <FaArrowRight size={10} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function FAQSection() {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  // Add FAQ structured data
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <section id="faq" className="mx-auto max-w-screen-xl scroll-mt-24 px-5 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="max-w-lg">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">FAQ</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Common Questions About Working Together
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          Straight answers to help you decide if we're a good fit. No sales pitch, just clarity on how I work and what you can expect.
        </p>
      </div>

      <div className="mt-10 space-y-4 lg:mt-12">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[1.5rem] border border-border/60 bg-background/95 shadow-[0_12px_32px_-20px_rgba(15,23,42,0.12)]"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-surface/50 sm:p-7"
              aria-expanded={openItems.has(index)}
            >
              <h3 className="font-display text-lg font-bold leading-tight text-primary sm:text-xl">
                {faq.question}
              </h3>
              <span
                className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border/60 transition-transform ${
                  openItems.has(index) ? 'rotate-45 bg-accent/10' : ''
                }`}
              >
                <span className="text-sm font-bold text-accent">+</span>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-t border-border/60 px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                <p className="text-sm leading-7 text-text-secondary sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function FreelanceLanding() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

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

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Code by Jerry",
    "description": "Freelance full-stack developer building scalable web apps, dashboards, eCommerce systems, mobile apps, backend APIs, and SEO-ready business platforms.",
    "url": "https://codebyjerry.online",
    "logo": "https://codebyjerry.online/logo.png",
    "founder": {
      "@type": "Person",
      "name": "Jerry (Azhagirishankar K)",
      "jobTitle": "Full Stack Developer",
      "email": "contact@codebyjerry.online",
      "telephone": "+91-7092936243",
      "sameAs": [
        "https://www.linkedin.com/in/code-by-jerry/",
        "https://github.com/code-by-jerry"
      ]
    },
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "eCommerce Development",
      "Backend API Development",
      "SEO Optimization"
    ],
    "areaServed": "Worldwide",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7092936243",
      "contactType": "Customer Service",
      "email": "contact@codebyjerry.online",
      "availableLanguage": "English"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Applications",
            "description": "Custom business systems, dashboards, and admin panels built for real workflows."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "eCommerce Systems",
            "description": "High-converting online stores with payment integrations and cleaner buying flows."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Applications",
            "description": "Flutter or hybrid app experiences connected tightly with your backend systems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Backend & APIs",
            "description": "APIs, automation, integrations, and scalable architectures that support real growth."
          }
        }
      ]
    }
  }

  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO 
        title="Code by Jerry | Expert Full-Stack Developer for Scalable Systems"
        description="Senior Full-Stack Developer specializing in custom web apps, eCommerce platforms, backend APIs, and scalable business systems. High-end delivery for serious founders."
        keywords="full stack developer, freelance developer, web development, Laravel developer, React developer, custom business systems, SEO expert"
        schema={schema}
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />

      {/* Sticky Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-border/50 bg-background/90 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 md:px-12 lg:px-20">

          {/* Left logo and brand */}
          <Link to="/" className="flex min-w-0 items-center gap-3" >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-background/90 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.28)]">
              <img src="/logo.png" alt="Code by Jerry logo" className="h-full w-full object-cover" />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-accent sm:tracking-[0.35em]">Code by Jerry</span>
              <span className="mt-1 block max-w-[10rem] truncate text-[11px] font-medium leading-none text-text-secondary/80 sm:max-w-none">Scalable systems for real businesses</span>
            </span>
          </Link>

          {/* Center desktop nav */}
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

          {/* Right CTA and mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setContactOpen(true)}
              className="hidden items-center gap-2 rounded-full accent-gradient px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_12px_32px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(99,102,241,0.85)] sm:inline-flex"
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
          <nav className="mx-auto flex max-w-screen-xl flex-col px-5 py-4 sm:px-6 md:px-12">
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

          <div className="freelance-hero-grid grid gap-8 pb-10 pt-4 sm:gap-10 sm:py-8 md:gap-14 md:py-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:py-10">

            {/* Left fixed copy */}
            <div className="freelance-hero-copy flex flex-col text-left">

              {/* Availability pill - Urgency added */}
              <div className="mb-5 flex flex-wrap items-center gap-3 sm:mb-6">
                <p className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-accent sm:px-4 sm:tracking-[0.3em]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  Available for freelance projects
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-orange-600 border border-orange-500/20 animate-bounce sm:animate-none">
                   Only 2 slots left for June
                </span>
              </div>

              {/* Headline */}
              <h1 className="freelance-hero-title font-display text-[2.65rem] font-bold leading-[0.98] text-primary sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.0]">
                Full-Stack Developer Building Systems<br />{' '}
                <span className="bg-gradient-to-r from-accent via-[#7961F4] to-[#7c3aed] bg-clip-text text-transparent">
                  Businesses Depend On
                </span>
              </h1>

              {/* Subtext */}
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-text-secondary sm:mt-5 sm:text-[1.05rem] sm:leading-8">
                From web apps and dashboards to eCommerce, mobile apps, and backend systems, I deliver complete, production-grade digital products for growing businesses.
              </p>

              {/* CTAs */}
              <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
                <button
                  onClick={() => setContactOpen(true)}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full accent-gradient px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(99,102,241,0.85)] sm:w-auto sm:px-7 sm:py-4 sm:tracking-[0.2em]"
                >
                  Start a Project
                  <FaArrowRight size={12} />
                </button>
                <a
                  href="/Jerry (Azhagirishankar K).docx"
                  download
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent sm:w-auto sm:px-7 sm:py-4 sm:tracking-[0.2em]"
                >
                  Download Roadmap
                  <FaRocket size={12} className="text-accent" />
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
                {[
                  { value: '10+', label: 'Projects Delivered' },
                  { value: '10K+', label: 'Users Supported' },
                  { value: '3+', label: 'Years Experience' },
                ].map((item, i) => (
                  <div key={i} className="flex min-w-0 flex-col rounded-2xl border border-border/60 bg-background/70 px-3 py-3 sm:flex-row sm:items-center sm:gap-2 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                    {i > 0 && <span className="hidden h-3.5 w-px bg-border/60 sm:block" />}
                    <span className="font-display text-sm font-bold text-primary">{item.value}</span>
                    <span className="mt-1 text-[11px] leading-tight text-text-secondary sm:mt-0 sm:text-xs">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right service showcase */}
            <HeroServiceShowcase />
          </div>

          {/* Trusted By / Feature Bar */}
          <div className="mt-6 border-t border-border/40 pt-10 sm:mt-12">
             <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-text-secondary/60">
                Helping businesses scale across Industries
             </p>
             <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                {['Real Estate', 'Logistics', 'eCommerce', 'SaaS', 'Interior Design'].map((item) => (
                  <span key={item} className="font-display text-xl font-bold tracking-tighter text-primary sm:text-2xl">{item}</span>
                ))}
             </div>
          </div>
        </section>

        <HighImpactSection />

        <ServicesSection />

        <ContributionsSection />

        <DetailedCaseStudiesSection />

        <CaseStudiesSection />

        <AboutSection />

        <TrustSection />

        <BlogSection />

        <FAQSection />

        <section id="process" className="mx-auto max-w-screen-xl scroll-mt-24 px-5 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">
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

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                title: 'I challenge the problem before touching the code',
                body: 'Most briefs describe symptoms, not root causes. I push back and make sure we\'re solving the right thing before a single line is written.',
                featured: true,
                label: 'Clarity First',
                meta: 'Root cause before roadmap',
                Icon: FaCrosshairs,
              },
              {
                title: 'I think in systems, not pages',
                body: 'Every feature is part of a larger operational picture, designed for how data flows, how teams use it, and how it scales.',
                featured: false,
                label: 'System Design',
                meta: 'Flows, teams, scale',
                Icon: FaDatabase,
              },
              {
                title: 'I build for real usage, not demo success',
                body: 'I test against actual usage patterns, edge cases, and the people who run it daily, not just what looks good in a walkthrough.',
                featured: false,
                label: 'Reality Check',
                meta: 'Usage over walkthroughs',
                Icon: FaUsers,
              },
              {
                title: 'I stay accountable beyond launch',
                body: 'Shipping is not the finish line. I stay involved through stabilisation and make sure the system performs in the hands of real users.',
                featured: false,
                label: 'Post Launch',
                meta: 'Support, stabilise, improve',
                Icon: FaSignal,
              },
            ].map((item, i) => (
              <article
                key={i}
                className={`group relative overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                  item.featured
                    ? 'border-transparent accent-gradient text-white shadow-[0_24px_60px_-20px_rgba(121,97,244,0.5)] hover:shadow-[0_28px_64px_-20px_rgba(121,97,244,0.65)]'
                    : 'border-border/70 bg-background/90 shadow-[0_8px_32px_-16px_rgba(15,23,42,0.1)] hover:border-accent/30 hover:shadow-[0_16px_48px_-20px_rgba(99,102,241,0.18)]'
                }`}
              >
                {item.featured && (
                  <>
                    <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-0 left-1/3 h-24 w-24 rounded-full bg-white/8 blur-3xl" />
                  </>
                )}

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
                        item.featured ? 'bg-white/14 text-white' : 'bg-accent/10 text-accent'
                      }`}
                    >
                      <item.Icon size={17} />
                    </span>
                    <div>
                      <p className={`text-[10px] font-bold uppercase tracking-[0.24em] ${item.featured ? 'text-white/70' : 'text-text-secondary/70'}`}>
                        {item.label}
                      </p>
                      <p className={`mt-1 text-[11px] ${item.featured ? 'text-white/70' : 'text-text-secondary/70'}`}>
                        {item.meta}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
                      item.featured ? 'bg-white/12 text-white/78' : 'bg-surface text-text-secondary/70'
                    }`}
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3 className={`relative z-10 mt-5 font-display text-lg font-bold leading-snug sm:text-xl ${item.featured ? 'text-white' : 'text-primary'}`}>
                  {item.title}
                </h3>
                <p className={`relative z-10 mt-3 text-sm leading-6 sm:text-[15px] sm:leading-7 ${item.featured ? 'text-white/74' : 'text-text-secondary'}`}>
                  {item.body}
                </p>
                <div className={`relative z-10 mt-6 h-px w-full ${item.featured ? 'bg-white/16' : 'bg-border/70'}`} />
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-5 pb-16 pt-4 sm:px-6 md:px-12 lg:px-20 lg:pb-24">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-[linear-gradient(135deg,#0f172a_0%,#111827_38%,#1d4ed8_100%)] px-6 py-10 text-white shadow-[0_32px_90px_-40px_rgba(37,99,235,0.42)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="pointer-events-none absolute -left-10 top-0 h-44 w-44 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-10 h-52 w-52 rounded-full bg-[rgba(99,102,241,0.24)] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[rgba(139,92,246,0.18)] blur-3xl" />

            <div className="relative z-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
              <div className="max-w-3xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                  Final CTA
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[3.2rem] lg:leading-[1]">
                  Let&apos;s Build Something Scalable &amp; Impactful
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
                  If you need a developer who can turn a rough concept, business bottleneck, or
                  growth-stage product into a reliable system, this is the point to start the
                  conversation.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {contactDetails
                    .filter(({ label }) => label !== 'WhatsApp')
                    .map(({ label, value, href, icon }) => {
                      const ContactIcon = icon

                      return (
                        <a
                          key={label}
                          href={href}
                          target={label === 'LinkedIn' || label === 'GitHub' ? '_blank' : undefined}
                          rel={label === 'LinkedIn' || label === 'GitHub' ? 'noreferrer' : undefined}
                          className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2.5 text-[11px] font-medium text-white/84 backdrop-blur-sm transition-colors hover:border-white/28 hover:bg-white/12"
                        >
                          <ContactIcon size={12} />
                          <span className="text-white/70">{label}</span>
                          <span>{value}</span>
                        </a>
                      )
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
        href="https://wa.me/917092936243"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full accent-gradient text-white shadow-[0_20px_45px_-20px_rgba(99,102,241,0.85)] transition-transform hover:-translate-y-1"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Exit Intent Popup */}
      <ExitIntentModal />

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}

function ContactFormModal({ isOpen, onClose }) {
  const [status, setStatus] = useState('idle') // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  if (!isOpen) return null

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
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-70">Contact</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight">Let's talk about your project</h2>
              <p className="mt-6 text-sm leading-7 opacity-80">
                Tell me about the bottleneck you're facing. I'll get back to you within 24 hours with a strategic perspective.
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
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10 animate-in zoom-in duration-500">
                <div className="h-20 w-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
                  <FaCheckCircle size={40} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">Message Received!</h3>
                <p className="mt-4 text-sm text-text-secondary">
                  Thanks for reaching out. I've received your details and will get back to you shortly.
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
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-2">Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-2">Tell me about the project</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Briefly describe the challenge..."
                    className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button 
                  disabled={status === 'submitting'}
                  type="submit"
                  className="w-full rounded-full accent-gradient py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ExitIntentModal() {
  const [shown, setShown] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleMouseOut = (e) => {
      if (dismissed || shown) return
      if (e.clientY <= 0 || e.relatedTarget === null) {
        setShown(true)
      }
    }

    // Delay activation by 5s so it doesn't show immediately
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseOut)
    }, 5000)

    return () => {
      document.removeEventListener('mouseleave', handleMouseOut)
      clearTimeout(timer)
    }
  }, [shown, dismissed])

  if (!shown) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 backdrop-blur-md bg-black/40 animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-primary p-8 text-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] sm:p-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
        
        <button 
          onClick={() => { setShown(false); setDismissed(true); }}
          className="absolute right-6 top-6 text-white/50 hover:text-white"
        >
          ✕
        </button>

        <div className="relative z-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-soft">Wait! Before you go...</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Want to see how I scale systems?
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/70">
            Download my **Project Execution Roadmap** for free. It breaks down exactly how I take projects from concept to $1M+ scale.
          </p>
          
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/Jerry (Azhagirishankar K).docx"
              download
              onClick={() => { setShown(false); setDismissed(true); }}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-transform hover:-translate-y-1 shadow-xl"
            >
              Get the Roadmap
              <FaRocket size={14} className="text-accent" />
            </a>
            <button
              onClick={() => { setShown(false); setDismissed(true); }}
              className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white/60"
            >
              No thanks, just browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

