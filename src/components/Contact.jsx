export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 lg:scroll-mt-24 w-full pb-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-display">Contact</h2>
      </div>

      <div className="flex flex-col gap-12">
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-6 font-display">Opportunity</h3>
          <h4 className="text-sm font-bold text-primary mb-4">I'm currently open to discussing opportunities in:</h4>
          <ul className="flex flex-col gap-3">
            {[
              "Full Stack Development roles",
              "Backend Engineering roles",
              "High-impact product teams building scalable systems"
            ].map((item, i) => (
              <li key={i} className="text-xs text-text-secondary flex gap-3 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-12 border-t border-border/40">
          <h3 className="text-3xl font-display font-bold text-primary mb-6">Let's build something great together.</h3>
          <p className="text-text-secondary leading-relaxed max-w-xl mb-4">
            I'm always interested in discussing new projects, innovative ideas, or opportunities to build meaningful products.
          </p>
          <p className="text-text-secondary leading-relaxed max-w-xl mb-8">
            Whether it's a startup idea, a scalable platform, or an engineering challenge — I'm happy to connect.
          </p>
          
          <div className="mt-4">
            <a href="mailto:contact@codebyjerry.online" className="inline-flex items-center font-bold leading-tight text-primary font-display group hover:text-accent transition-colors text-xl underline decoration-accent/30 underline-offset-8 hover:decoration-accent" aria-label="Email Contact">
              contact@codebyjerry.online
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-3 inline-block h-6 w-6 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-accent" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
