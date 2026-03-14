export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 lg:scroll-mt-24 w-full pb-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">Contact</h2>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-display font-bold text-primary">Let's build something great together.</h3>
        <p className="text-text-secondary leading-relaxed max-w-md">I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        
        <div className="mt-4">
          <a href="mailto:contact@codebyjerry.online" className="inline-flex items-center font-medium leading-tight text-primary font-display group hover:text-accent transition-colors text-lg" aria-label="Email Contact">
            <span><span className="border-b border-transparent pb-px transition group-hover:border-accent">contact@codebyjerry.online</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-accent" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg></span>
          </a>
        </div>
      </div>
    </section>
  );
}
