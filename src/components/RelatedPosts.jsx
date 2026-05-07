import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function RelatedPosts({ posts }) {
  if (!posts.length) return null;

  return (
    <section className="mt-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
            Keep Reading
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-primary">
            Related insights
          </h2>
        </div>
        <Link
          to="/blog"
          className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-text-secondary transition-colors hover:text-accent sm:inline-flex"
        >
          All Posts
        </Link>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-2xl border border-border/60 bg-surface/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-background"
          >
            <Link to={`/blog/${post.slug}`} className="block">
              <div className="aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-accent/20 bg-accent/8 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-accent">
                  {post.category}
                </span>
                <span className="shrink-0 text-[10px] text-text-secondary/70">
                  {post.readTime}
                </span>
              </div>
              <h3 className="mt-3 font-display text-base font-bold leading-snug text-primary">
                <Link to={`/blog/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </Link>
              </h3>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent/80"
              >
                Read Next
                <FaArrowRight size={9} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
