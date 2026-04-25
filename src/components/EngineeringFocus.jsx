import { createElement } from 'react'
import { FaCogs, FaDatabase, FaShieldAlt } from 'react-icons/fa'

const techStack = [
  { name: 'SQL', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/sql.png' },
  { name: 'React', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/React.png' },
  { name: 'PHP', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/php.png' },
  { name: 'Node.js', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/node-js.png' },
  { name: 'OAuth', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/oauth.png' },
  { name: 'Tailwind CSS', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/tailwind%20css.png' },
  { name: 'JavaScript', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/javascript.webp' },
  { name: 'Vercel', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/vercel.png' },
  { name: 'Next.js', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/next-js.svg' },
  { name: 'TypeScript', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/typescript.jpg' },
  { name: 'PostgreSQL', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/postgres.png' },
  { name: 'Inertia.js', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/inertia.jpg' },
  { name: 'MySQL', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/mysql.png' },
  { name: 'Laravel', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/Laravel.png' },
  { name: 'Bootstrap', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/boostrap.jpg' },
  { name: 'Firebase', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/Firebase.png' },
  { name: 'Cloudflare', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/Cloudflare.png' },
  { name: 'Alpine.js', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/alpine.jpg' },
  { name: 'Git', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/Git.png' },
  { name: 'GCP', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/GCP.png' },
  { name: 'PHPUnit', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/PHPUnit.jpg' },
  { name: 'Postman', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/Postman.png' },
  { name: 'Shopify', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/Shopify.png' },
  { name: 'Hostinger', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/Hostinger.png' },
  { name: 'WordPress', src: 'https://ik.imagekit.io/codebyjerry/Techstack%20logos/WordPress.png' },
]

const capabilities = [
  {
    title: 'Architecture',
    body: 'Multi-role platforms, API boundaries, database structure, and deployment paths that stay maintainable.',
    Icon: FaCogs,
  },
  {
    title: 'Performance',
    body: 'Query tuning, asset delivery, frontend rendering, and practical optimization for production traffic.',
    Icon: FaDatabase,
    featured: true,
  },
  {
    title: 'Reliability',
    body: 'Auth, RBAC, data integrity, testing habits, and launch support for systems people depend on.',
    Icon: FaShieldAlt,
  },
]

function StackRow({ items, reverse = false }) {
  const repeated = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <div className={`tech-stack-marquee flex w-max gap-3 py-2 ${reverse ? 'tech-stack-marquee-reverse' : ''}`}>
        {repeated.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex h-16 w-36 shrink-0 items-center gap-3 rounded-2xl border border-border/70 bg-background/90 px-4 shadow-[0_14px_36px_-28px_rgba(15,23,42,0.24)]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-white">
              <img src={tech.src} alt={tech.name} className="h-6 w-6 object-contain" loading="lazy" />
            </span>
            <span className="truncate text-[11px] font-bold uppercase tracking-[0.12em] text-primary/72">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WhatIBring() {
  const midpoint = Math.ceil(techStack.length / 2)
  const firstRow = techStack.slice(0, midpoint)
  const secondRow = techStack.slice(midpoint)

  return (
    <section id="focus" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      <div className="sticky top-0 z-20 -mx-5 mb-5 w-screen border-y border-border/50 bg-background/92 px-5 py-4 backdrop-blur sm:-mx-6 sm:px-6 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:border-0 lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-display text-sm font-bold uppercase tracking-widest text-primary">Engineering Expertise</h2>
      </div>

      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Technical Depth</p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
          Production stack for modern web platforms.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary">
          Tools I use to build, ship, optimize, and maintain Laravel, React, commerce, and cloud-backed systems.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-surface/60 py-5 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.16)]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />
        <StackRow items={firstRow} />
        <StackRow items={secondRow} reverse />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {capabilities.map(({ title, body, Icon: CapabilityIcon, featured }) => (
          <article
            key={title}
            className={`flex min-h-[178px] flex-col justify-between rounded-[1.5rem] border p-5 transition-all duration-300 hover:-translate-y-1 ${
              featured
                ? 'border-transparent accent-gradient text-white shadow-[0_22px_55px_-28px_rgba(99,102,241,0.58)]'
                : 'border-border/70 bg-background/82 hover:border-accent/25'
            }`}
          >
            <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${featured ? 'bg-white/14 text-white' : 'bg-accent/10 text-accent'}`}>
              {createElement(CapabilityIcon, { size: 15 })}
            </span>
            <div>
              <h3 className={`font-display text-[10px] font-bold uppercase tracking-widest ${featured ? 'text-white' : 'text-primary'}`}>
                {title}
              </h3>
              <p className={`mt-2 text-[11px] leading-relaxed ${featured ? 'text-white/72' : 'text-text-secondary'}`}>
                {body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
