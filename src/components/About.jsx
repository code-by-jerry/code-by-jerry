import { createElement } from 'react'
import { FaBolt, FaCodeBranch, FaDatabase } from 'react-icons/fa'

const proofPoints = [
  {
    value: '40%',
    label: 'Performance Gain',
    detail: 'Across production rebuilds and optimization work.',
  },
  {
    value: '10K+',
    label: 'Users Supported',
    detail: 'On live platforms across commerce and operations.',
  },
  {
    value: '3+',
    label: 'Years Shipping',
    detail: 'Laravel, React, Inertia, MySQL, and Firebase systems.',
  },
]

const deliverySignals = [
  { label: 'Architecture', Icon: FaDatabase },
  { label: 'Performance', Icon: FaBolt },
  { label: 'Automation', Icon: FaCodeBranch },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      <div className="sticky top-0 z-20 -mx-5 mb-5 w-screen border-y border-border/50 bg-background/92 px-5 py-4 backdrop-blur sm:-mx-6 sm:px-6 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:border-0 lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-display text-sm font-bold uppercase tracking-widest text-primary">About</h2>
      </div>

      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Profile</p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
          Full-stack engineer for business-critical platforms.
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-background/88 p-5 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.16)] backdrop-blur sm:p-7">
        <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative z-10">
          <p className="max-w-2xl text-[15px] leading-7 text-text-secondary sm:text-base sm:leading-8">
            I turn unclear product ideas, manual business workflows, and growing operational pressure into stable digital systems. My strength is understanding the real problem behind a request, shaping the right flow, and delivering platforms that are fast, organized, easy to manage, and reliable in daily use.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {deliverySignals.map(({ label, Icon: SignalIcon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-accent/10 bg-accent/5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-accent"
              >
                {createElement(SignalIcon, { size: 11 })}
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {proofPoints.map((item, index) => (
          <article
            key={item.label}
            className={`rounded-[1.5rem] border p-5 transition-all duration-300 hover:-translate-y-1 ${
              index === 0
                ? 'border-transparent accent-gradient text-white shadow-[0_22px_55px_-28px_rgba(99,102,241,0.58)]'
                : 'border-border/70 bg-background/82 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.18)] hover:border-accent/25'
            }`}
          >
            <p className={`font-display text-2xl font-bold ${index === 0 ? 'text-white' : 'text-primary'}`}>{item.value}</p>
            <h3 className={`mt-2 text-[10px] font-bold uppercase tracking-widest ${index === 0 ? 'text-white/78' : 'text-primary/70'}`}>
              {item.label}
            </h3>
            <p className={`mt-2 text-[11px] leading-5 ${index === 0 ? 'text-white/68' : 'text-text-secondary'}`}>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
