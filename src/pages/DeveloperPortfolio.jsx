import { useEffect, useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Lenis from 'lenis'
import Hero from '../components/Hero'
import About from '../components/About'
import WhatIBring from '../components/EngineeringFocus'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../App.css'

export default function DeveloperPortfolio() {
  const appRef = useRef(null)

  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.getAttribute('content')
    const keywords = document.querySelector('meta[name="keywords"]')
    const previousKeywords = keywords?.getAttribute('content')

    document.title = 'Code by Jerry | Senior Full Stack Developer Portfolio'
    description?.setAttribute(
      'content',
      'Senior Full Stack Developer portfolio for Jerry, focused on Laravel, React, Inertia, scalable platforms, backend APIs, and production engineering.',
    )
    if (keywords) {
      keywords.setAttribute('content', 'full stack developer, Laravel, React, Inertia.js, backend APIs, scalable web apps, freelance developer')
    } else {
      const metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      metaKeywords.content = 'full stack developer, Laravel, React, Inertia.js, backend APIs, scalable web apps, freelance developer'
      document.head.appendChild(metaKeywords)
    }

    // Add structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Jerry (Azhagirishankar K)",
      "jobTitle": "Senior Full Stack Developer",
      "description": "Senior Full Stack Developer specializing in Laravel, React, Inertia.js, scalable platforms, backend APIs, and production engineering.",
      "url": "https://codebyjerry.online/portfolio",
      "sameAs": [
        "https://www.linkedin.com/in/code-by-jerry/",
        "https://github.com/code-by-jerry"
      ],
      "knowsAbout": [
        "Laravel",
        "React",
        "Inertia.js",
        "Full Stack Development",
        "Backend APIs",
        "Scalable Web Applications",
        "Production Engineering"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Full Stack Developer",
        "occupationLocation": {
          "@type": "Country",
          "name": "India"
        }
      }
    })
    document.head.appendChild(script)

    return () => {
      document.title = previousTitle
      if (description && previousDescription) {
        description.setAttribute('content', previousDescription)
      }
      if (keywords && previousKeywords) {
        keywords.setAttribute('content', previousKeywords)
      } else if (keywords) {
        document.head.removeChild(keywords)
      }
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    let rafId = 0

    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div
      ref={appRef}
      className="hero-bg relative min-h-screen font-sans text-text selection:bg-accent selection:text-white"
    >
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="relative z-40 lg:flex lg:justify-between lg:gap-10">
          <header className="pb-14 pt-10 sm:pt-14 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:flex-col lg:py-24">
            <Hero />
          </header>
          <main className="flex flex-col gap-16 pb-16 sm:gap-20 lg:w-[54%] lg:gap-28 lg:py-24">
            <About />
            <WhatIBring />
            <Projects />
            <Experience />
            <div>
              <Contact />
              <Footer />
            </div>
          </main>
        </div>
      </div>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/917092936243"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full accent-gradient text-white shadow-[0_20px_45px_-20px_rgba(99,102,241,0.85)] transition-transform hover:-translate-y-1"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  )
}
