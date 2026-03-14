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
    <div className="flex flex-col justify-between h-full w-full relative z-10">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-display tracking-tight text-primary mb-3">
          Code by Jerry
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold font-display text-primary mb-1">
          Full Stack Developer
        </h2>
        <h3 className="text-lg font-medium font-display text-text-secondary mb-6">
          Jerry (Azhagirishankar K)
        </h3>

        <p className="text-base text-text-secondary w-full max-w-sm font-light mb-8 leading-relaxed">
          Designing and building reliable web platforms, scalable systems, and intuitive digital experiences.
        </p>

        <div className="mt-2 mb-10 w-max">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center px-6 py-2.5 rounded-lg border border-border text-primary text-sm font-semibold transition-all hover:bg-surface hover:-translate-y-0.5 shadow-sm hover:shadow active:scale-95">
            View Resume
          </a>
        </div>

        {/* Navigation links */}
        <nav className="hidden lg:block mt-8">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#about" className={`group flex items-center gap-4 py-2 w-max transition-colors ${activeSection === 'about' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'about' ? 'w-16 bg-primary' : 'w-8 bg-border group-hover:w-16 group-hover:bg-primary'}`}></span>
                <span className="text-xs font-semibold uppercase tracking-widest">About</span>
              </a>
            </li>
            <li>
              <a href="#tech" className={`group flex items-center gap-4 py-2 w-max transition-colors ${activeSection === 'tech' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'tech' ? 'w-16 bg-primary' : 'w-8 bg-border group-hover:w-16 group-hover:bg-primary'}`}></span>
                <span className="text-xs font-semibold uppercase tracking-widest">Tech Stack</span>
              </a>
            </li>
            <li>
              <a href="#experience" className={`group flex items-center gap-4 py-2 w-max transition-colors ${activeSection === 'experience' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'experience' ? 'w-16 bg-primary' : 'w-8 bg-border group-hover:w-16 group-hover:bg-primary'}`}></span>
                <span className="text-xs font-semibold uppercase tracking-widest">Experience</span>
              </a>
            </li>
            <li>
              <a href="#projects" className={`group flex items-center gap-4 py-2 w-max transition-colors ${activeSection === 'projects' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'projects' ? 'w-16 bg-primary' : 'w-8 bg-border group-hover:w-16 group-hover:bg-primary'}`}></span>
                <span className="text-xs font-semibold uppercase tracking-widest">Projects</span>
              </a>
            </li>
            <li>
              <a href="#contact" className={`group flex items-center gap-4 py-2 w-max transition-colors ${activeSection === 'contact' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'contact' ? 'w-16 bg-primary' : 'w-8 bg-border group-hover:w-16 group-hover:bg-primary'}`}></span>
                <span className="text-xs font-semibold uppercase tracking-widest">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-12 lg:mt-0 flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <a href="https://github.com/code-by-jerry" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/code-by-jerry" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:contact@codebyjerry.online" aria-label="Email" className="text-text-secondary hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
            <FaEnvelope size={24} />
          </a>
        </div>
        
        <div className="flex flex-col gap-1 text-[10px] uppercase tracking-[0.2em] font-bold text-text-secondary/50">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-border"></span>
            <span>50+ repositories</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-border"></span>
            <span>500+ contributions this year</span>
          </div>
        </div>
      </div>
    </div>
  );
}
