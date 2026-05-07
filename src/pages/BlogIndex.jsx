import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SEO from "../components/SEO";
import SiteHeader from "../components/SiteHeader";
import { blogs } from "../blogs";

export default function BlogIndex() {
  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO
        title="Blog | Code by Jerry"
        description="Practical articles on React, Laravel, Shopify, SEO, Cloudflare, SaaS architecture, and building better digital systems."
        keywords="Code by Jerry blog, React blog, Laravel tips, SEO, Shopify optimization, SaaS architecture"
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-screen-xl px-5 pb-12 pt-28 sm:px-6 md:px-12 lg:px-20 lg:pb-16 lg:pt-32">
        <section className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
              Blog
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
              Practical Notes on Better Digital Systems
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            Field notes on architecture, performance, SEO, commerce, and
            product engineering from real production work.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-[1.75rem] border border-border/60 bg-background/95 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_28px_64px_-28px_rgba(99,102,241,0.2)]"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="aspect-[4/3] overflow-hidden bg-surface">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                    {post.category}
                  </span>
                  <span className="shrink-0 text-[10px] font-medium text-text-secondary/70">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-xl font-bold leading-tight text-primary">
                  <Link to={`/blog/${post.slug}`} className="hover:text-accent">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {post.description}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent/80"
                >
                  Read Article
                  <FaArrowRight size={10} />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
