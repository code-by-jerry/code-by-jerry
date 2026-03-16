import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'focus', 'projects', 'experience', 'contact'];
      let currentSection = '';
      
      // Check if user is at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentSection = 'contact';
      } else {
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.3) {
              currentSection = section;
              break;
            }
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
    <div className="flex flex-col w-full relative z-10 h-full justify-between py-0">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-primary mb-2">
          Code by Jerry
        </h1>
        <div className="space-y-1 mb-4">
          <h2 className="text-xl md:text-2xl font-semibold font-display text-primary">
            Full Stack Engineer
          </h2>
          <h3 className="text-sm font-medium font-display text-text-secondary opacity-60">
            Jerry (Azhagirishankar K)
          </h3>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 text-emerald-500 text-[10px] font-bold uppercase tracking-wider mb-6 border border-emerald-500/10 w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          Open to Opportunities
        </div>

        <p className="text-sm text-text-secondary w-full max-w-sm font-light mb-8 leading-relaxed">
          Designing and building <span className="text-primary font-medium">production-grade web platforms</span> focused on <span className="text-gradient font-bold">performance</span>, <span className="text-gradient font-bold">scalability</span>, and <span className="text-gradient font-bold">maintainability</span>.
        </p>

        {/* Navigation links */}
        <nav className="hidden lg:block">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#about" className={`group flex items-center gap-4 py-1.5 w-max transition-colors ${activeSection === 'about' ? 'text-accent' : 'text-text-secondary hover:text-accent'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'about' ? 'w-16 bg-accent' : 'w-8 bg-border group-hover:w-16 group-hover:bg-accent'}`}></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">About</span>
              </a>
            </li>
            <li>
              <a href="#focus" className={`group flex items-center gap-4 py-1.5 w-max transition-colors ${activeSection === 'focus' ? 'text-accent' : 'text-text-secondary hover:text-accent'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'focus' ? 'w-16 bg-accent' : 'w-8 bg-border group-hover:w-16 group-hover:bg-accent'}`}></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Expertise</span>
              </a>
            </li>
            <li>
              <a href="#projects" className={`group flex items-center gap-4 py-1.5 w-max transition-colors ${activeSection === 'projects' ? 'text-accent' : 'text-text-secondary hover:text-accent'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'projects' ? 'w-16 bg-accent' : 'w-8 bg-border group-hover:w-16 group-hover:bg-accent'}`}></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Projects</span>
              </a>
            </li>
            <li>
              <a href="#experience" className={`group flex items-center gap-4 py-1.5 w-max transition-colors ${activeSection === 'experience' ? 'text-accent' : 'text-text-secondary hover:text-accent'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'experience' ? 'w-16 bg-accent' : 'w-8 bg-border group-hover:w-16 group-hover:bg-accent'}`}></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Experience</span>
              </a>
            </li>
            <li>
              <a href="#contact" className={`group flex items-center gap-4 py-1.5 w-max transition-colors ${activeSection === 'contact' ? 'text-accent' : 'text-text-secondary hover:text-accent'}`}>
                <span className={`h-[1px] transition-all duration-300 ${activeSection === 'contact' ? 'w-16 bg-accent' : 'w-8 bg-border group-hover:w-16 group-hover:bg-accent'}`}></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Contact</span>
              </a>
            </li>
                      </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6 text-text-secondary">
          <a href="https://github.com/code-by-jerry" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-200">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/code-by-jerry" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-200">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:contact@codebyjerry.online" aria-label="Email" className="hover:text-primary transition-all duration-200">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>



  );
}
