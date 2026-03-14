import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'tech', 'experience', 'projects', 'contact'];
      let currentSection = '';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold based on viewport height, looking for elements in upper half
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.3) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col justify-between h-full w-full relative z-10 lg:py-12">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-display tracking-tight text-primary mb-2">
          Code by Jerry
        </h1>
        <h2 className="text-lg md:text-xl font-semibold font-display text-primary mb-1">
          Full Stack Developer
        </h2>
        <h3 className="text-base font-medium font-display text-text-secondary mb-4 opacity-80">
          Jerry (Azhagirishankar K)
        </h3>

        <p className="text-sm md:text-base text-text-secondary w-full max-w-xs font-light mb-6 leading-relaxed">
          Designing and building reliable web platforms, scalable systems, and intuitive digital experiences.
        </p>

        {/* Navigation links */}
        <nav className="hidden lg:block">
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#about" className={`group flex items-center gap-4 py-1.5 w-max transition-colors ${activeSection === 'about' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'about' ? 'w-12 bg-primary' : 'w-6 bg-border group-hover:w-12 group-hover:bg-primary'}`}></span>
                <span className="text-[10px] font-bold uppercase tracking-widest">About</span>
              </a>
            </li>
            <li>
              <a href="#tech" className={`group flex items-center gap-4 py-1.5 w-max transition-colors ${activeSection === 'tech' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'tech' ? 'w-12 bg-primary' : 'w-6 bg-border group-hover:w-12 group-hover:bg-primary'}`}></span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Tech Stack</span>
              </a>
            </li>
            <li>
              <a href="#experience" className={`group flex items-center gap-4 py-1.5 w-max transition-colors ${activeSection === 'experience' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'experience' ? 'w-12 bg-primary' : 'w-6 bg-border group-hover:w-12 group-hover:bg-primary'}`}></span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Experience</span>
              </a>
            </li>
            <li>
              <a href="#projects" className={`group flex items-center gap-4 py-1.5 w-max transition-colors ${activeSection === 'projects' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'projects' ? 'w-12 bg-primary' : 'w-6 bg-border group-hover:w-12 group-hover:bg-primary'}`}></span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Projects</span>
              </a>
            </li>
            <li>
              <a href="#contact" className={`group flex items-center gap-4 py-1.5 w-max transition-colors ${activeSection === 'contact' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'contact' ? 'w-12 bg-primary' : 'w-6 bg-border group-hover:w-12 group-hover:bg-primary'}`}></span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-8 lg:mt-0 flex flex-col gap-5">
        <div className="flex items-center gap-5 text-text-secondary">
          <a href="https://github.com/code-by-jerry" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:-translate-y-0.5 duration-200">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/code-by-jerry" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:-translate-y-0.5 duration-200">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:contact@codebyjerry.online" aria-label="Email" className="hover:text-primary transition-colors hover:-translate-y-0.5 duration-200">
            <FaEnvelope size={20} />
          </a>
        </div>
        
        <div className="flex flex-col gap-1 text-[9px] uppercase tracking-[0.2em] font-bold text-text-secondary/40">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-border"></span>
            <span>50+ repositories</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-border"></span>
            <span>500+ contributions</span>
          </div>
        </div>
      </div>
    </div>
  );
}
