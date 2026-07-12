import { Link } from 'react-router-dom'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Atha Constructions',
    sector: 'Construction Operations',
    status: 'Live',
    year: '2026',
    logo: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Atha%20Constructions.webp?updatedAt=1777100806093',
    description:
      'Lead-focused construction platform with pricing visibility, cost estimators, inquiry handling, SEO controls, theme customization, and an internal admin system.',
    positioning: 'Consultation, lead management, and content operations for a construction business.',
    tech: ['React', 'Inertia.js', 'Laravel', 'MySQL', 'SEO'],
    link: 'https://athaconstruction.in/',
  },
  {
    title: 'JippyMart',
    sector: 'Food Delivery Commerce',
    status: 'Live',
    year: '2025',
    logo: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/jippymart.webp?updatedAt=1777100737251',
    description:
      'Full-scale food delivery ecosystem with customer storefront, restaurant management, centralized admin operations, mobile deep links, and delivery coordination.',
    positioning: 'Multi-role commerce operations across customers, restaurants, admins, and delivery workflows.',
    tech: ['Laravel', 'Firebase', 'MySQL', 'Razorpay', 'REST API'],
    link: 'https://jippymart.in/mart/',
  },
  {
    title: 'Area24Realty',
    sector: 'Real Estate Operations',
    status: 'Live',
    year: '2025',
    logo: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/area24realty.webp?updatedAt=1777100909832',
    description:
      'Multi-region real estate platform with interactive mapping, advanced listing management, analytics dashboards, owner and agent portals, and lead handling.',
    positioning: 'Property discovery and publishing workflows built for regional real estate scale.',
    tech: ['Laravel', 'TypeScript', 'MySQL', 'Maps', 'SEO'],
    link: 'https://area24group.com/',
  },
  {
    title: 'Nesthetix Designs',
    sector: 'Interior Design Business',
    status: 'Live',
    year: '2025',
    logo: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/nesthetix.webp?updatedAt=1777100737298',
    description:
      'Premium interior design website with lead generation, service showcasing, SEO structure, lightweight CMS management, and visual project presentation.',
    positioning: 'Brand trust, inquiry conversion, and content updates for a design-led service business.',
    tech: ['React', 'Inertia.js', 'Laravel', 'ImageKit', 'GSAP'],
    link: 'https://nesthetixdesigns.com/',
  },
  {
    title: 'Baybee',
    sector: 'Shopify Commerce',
    status: 'Live',
    year: '2024',
    logo: 'https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Baybee_logo.svg?updatedAt=1779037891024',
    description:
      'Shopify commerce implementation for a baby products brand with optimized storefront structure, product organization, and cleaner purchase flows.',
    positioning: 'Mobile-first shopping experience shaped around product confidence and conversion.',
    tech: ['Shopify', 'Liquid', 'GoKwik', 'Custom UI'],
    link: 'https://baybee.co.in/',
  },
]

function ProjectLogo({ project }) {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-white p-3">
      <img
        src={project.logo}
        alt={`${project.title} logo`}
        loading="lazy"
        className="max-h-full max-w-full object-contain grayscale transition duration-300 group-hover:grayscale-0"
      />
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Selected Live Work</p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
          Production systems with business weight.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary">
          A focused set of live platforms across construction, commerce, real estate, services, and retail.
          Each one is positioned around operational value, not just screen delivery.
        </p>
      </div>

      <div className="divide-y divide-border/60 border-y border-border/70">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group grid gap-4 py-6 transition-colors hover:bg-surface/45 sm:grid-cols-[4rem_1fr] sm:px-4"
          >
            <ProjectLogo project={project} />

            <div className="min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">
                    {project.sector} - {project.year} - {project.status}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold leading-tight text-primary">
                    {project.title}
                  </h3>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 text-text-secondary transition-colors hover:border-primary hover:text-primary"
                >
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>

              <p className="mt-3 text-sm leading-7 text-text-secondary">{project.description}</p>
              <p className="mt-3 text-xs font-semibold leading-6 text-primary/80">{project.positioning}</p>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[10px] font-bold leading-5 text-text-secondary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="pt-8">
        <Link
          to="/portfolio"
          className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:text-accent"
        >
          View full archive
          <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
