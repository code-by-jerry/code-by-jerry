import { createElement } from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const contactLinks = [
    { label: 'Email', value: 'contact@codebyjerry.online', href: 'mailto:contact@codebyjerry.online', Icon: FaEnvelope },
    { label: 'Phone', value: '+91 7092936243', href: 'tel:+917092936243', Icon: FaPhoneAlt },
    { label: 'WhatsApp', value: 'Message directly', href: 'https://wa.me/917092936243', Icon: FaWhatsapp },
    { label: 'LinkedIn', value: 'code-by-jerry', href: 'https://www.linkedin.com/in/code-by-jerry/', Icon: FaLinkedinIn },
    { label: 'GitHub', value: 'code-by-jerry', href: 'https://github.com/code-by-jerry', Icon: FaGithub },
  ]

  return (
    <section id="contact" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      <div className="sticky top-0 z-20 -mx-5 mb-5 w-screen border-y border-border/50 bg-background/92 px-5 py-4 backdrop-blur sm:-mx-6 sm:px-6 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:border-0 lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">Contact</h2>
      </div>

      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">Contact</p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
          Ready for senior engineering work and serious product teams.
        </h2>
      </div>

      <div className="flex flex-col gap-7">
        <div className="rounded-[2rem] border border-border/70 bg-background/88 p-5 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.16)] sm:p-6">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-6 font-display">Opportunity</h3>
          <h4 className="text-sm font-bold text-primary mb-4">I'm currently open to discussing opportunities in:</h4>
          <ul className="flex flex-col gap-3">
            {[
              "Full Stack Development roles",
              "Backend Engineering roles",
              "High-impact product teams building scalable systems"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-xs leading-6 text-text-secondary">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-[2.25rem] border border-primary/10 bg-[linear-gradient(135deg,#0f172a_0%,#111827_38%,#1d4ed8_100%)] p-6 text-white shadow-[0_32px_90px_-40px_rgba(37,99,235,0.42)] sm:p-8">
          <div className="pointer-events-none absolute right-0 top-10 h-52 w-52 rounded-full bg-[rgba(99,102,241,0.22)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 h-40 w-40 rounded-full bg-[rgba(139,92,246,0.16)] blur-3xl" />

          <div className="relative z-10">
          <h3 className="mb-6 font-display text-3xl font-bold leading-tight text-white">Let's build something great together.</h3>
          <div className="text-text-secondary leading-relaxed max-w-xl space-y-4 mb-8">
            <p>
              <span className="text-white/76">I'm always open to discussing new projects, product ideas, or opportunities to build scalable digital platforms.</span>
            </p>
            <p>
              <span className="text-white/68">If you're working on something interesting, feel free to reach out.</span>
            </p>
            <p className="pt-2 text-[10px] font-bold uppercase tracking-widest text-white/45">
              Based in India - Available for remote collaboration
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map(({ label, value, href, Icon: ContactIcon }) => {
              return (
                <a
                  key={label}
                  href={href}
                  target={label === 'WhatsApp' || label === 'LinkedIn' || label === 'GitHub' ? '_blank' : undefined}
                  rel={label === 'WhatsApp' || label === 'LinkedIn' || label === 'GitHub' ? 'noreferrer' : undefined}
                  className="inline-flex min-w-0 items-center gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/82 backdrop-blur-sm transition-colors hover:border-white/28 hover:bg-white/12"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                    {createElement(ContactIcon, { size: 14 })}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/46">{label}</span>
                    <span className="block truncate text-xs font-semibold text-white/86">{value}</span>
                  </span>
                </a>
              )
            })}
          </div>

          <div className="mt-8">
            <a href="mailto:contact@codebyjerry.online" className="group inline-flex max-w-full flex-col gap-2 font-display text-lg font-bold leading-tight text-white transition-colors hover:text-accent sm:text-xl" aria-label="Email Contact">
              <span className="text-sm font-bold uppercase tracking-widest text-accent-soft transition-colors group-hover:text-white">Get in touch</span>
              <span className="inline-flex min-w-0 items-center gap-3 break-all">
                contact@codebyjerry.online
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hidden h-6 w-6 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-accent sm:inline-block" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
              </span>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
