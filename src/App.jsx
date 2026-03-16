import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
import About from './components/About'
import WhatIBring from './components/EngineeringFocus'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
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

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    
    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle organic movement of the ambient background
      gsap.to(".hero-bg", {
        backgroundPosition: "40px bottom",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, appRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const sections = ['#about', '#focus', '#projects', '#experience', '#contact'];
    
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 20 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={appRef} className="hero-bg text-text font-sans selection:bg-accent selection:text-white relative min-h-screen">
      
      {/* Permanent Technical Grid Overlay */}
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none" />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-28 lg:py-0 relative z-10">
        <div className="lg:flex lg:justify-between lg:gap-12 relative z-40">
          
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col lg:justify-center lg:py-24 lg:pr-8">
            <Hero />
          </header>

          <main className="lg:w-[50%] lg:py-24 flex flex-col gap-24">
            <About />
            <WhatIBring />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </main>

        </div>
      </div>
    </div>
  )
}

export default App
