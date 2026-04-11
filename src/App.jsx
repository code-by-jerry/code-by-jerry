import { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
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
import WorkArchive from './pages/WorkArchive'
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
    if (!appRef.current) return;
    // Subtle organic movement of the ambient background
    const tween = gsap.to(appRef.current, {
      backgroundPosition: "40px bottom",
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    return () => tween.kill();
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
    <Routes>
      <Route path="/work" element={<WorkArchive />} />
      <Route path="/*" element={
        <div ref={appRef} className="hero-bg text-text font-sans selection:bg-accent selection:text-white relative min-h-screen">
          <div className="grid-overlay fixed inset-0 z-0 pointer-events-none" />
          <div className="mx-auto min-h-screen max-w-screen-xl px-12 md:px-20 lg:px-32 lg:py-0 relative z-10">
            <div className="lg:flex lg:justify-between lg:gap-4 relative z-40">
              <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:flex-col lg:py-24">
                <Hero />
              </header>
              <main className="lg:w-[54%] lg:py-24 flex flex-col gap-32">
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
      } />
    </Routes>
  )
}

export default App
