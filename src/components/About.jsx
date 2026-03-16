export default function About() {
  return (
    <section id="about" className="scroll-mt-16 lg:scroll-mt-24 w-full">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">About</h2>
      </div>
      
      <div className="text-text-secondary text-base leading-relaxed space-y-6 max-w-2xl font-light">
        <p>
          I’m a <span className="text-primary font-semibold">full-stack engineer</span> focused on building <span className="text-primary font-semibold">reliable web platforms</span>, scalable systems, and intuitive digital experiences. I enjoy working at the intersection of <span className="text-primary font-semibold">backend architecture</span> and user experience, where thoughtful system design meets clean, maintainable code.
        </p>
        <p>
          Currently, I work as a developer building and optimizing modern web applications used in <span className="text-primary font-semibold">real-world production environments</span>. My work involves designing <span className="text-primary font-semibold">secure systems</span>, improving application performance, and creating platforms that handle complex workflows and large volumes of data while maintaining a smooth user experience.
        </p>
        <p>
          Over time, I’ve had the opportunity to build and contribute to projects across several domains, including <span className="text-primary font-semibold">real-time delivery platforms</span>, learning management systems, enterprise tools, and financial management systems. These experiences have shaped how I approach building software — focusing on <span className="text-primary font-semibold">scalability, reliability, and long-term maintainability</span> rather than just solving immediate problems.
        </p>
        <p className="italic text-text-secondary/80">
          Outside of development, I enjoy exploring new technologies, building side projects, and experimenting with system architecture.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-border/40">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-4 font-display">Currently Working On</h3>
        <ul className="flex flex-col gap-3">
          {[
            "Designing scalable delivery platforms with real-time tracking",
            "Improving system performance and database architecture",
            "Exploring modern frontend animation systems and UI performance"
          ].map((item, i) => (
            <li key={i} className="text-xs text-text-secondary flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
