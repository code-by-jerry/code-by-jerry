import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/Hero'
import About from '../components/About'
import WhatIBring from '../components/EngineeringFocus'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../App.css'

gsap.registerPlugin(ScrollTrigger)

export default function DeveloperPortfolio() {
  const appRef = useRef(null)

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

  useEffect(() => {
    if (!appRef.current) return

    const tween = gsap.to(appRef.current, {
      backgroundPosition: '40px bottom',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    return () => tween.kill()
  }, [])

  useEffect(() => {
    const sections = ['#about', '#focus', '#projects', '#experience', '#contact']

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div
      ref={appRef}
      className="hero-bg relative min-h-screen font-sans text-text selection:bg-accent selection:text-white"
    >
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none" />
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-12 md:px-20 lg:px-32 lg:py-0">
        <div className="relative z-40 lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:flex-col lg:py-24">
            <Hero />
          </header>
          <main className="flex flex-col gap-32 lg:w-[54%] lg:py-24">
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
    </div>
  )
}
