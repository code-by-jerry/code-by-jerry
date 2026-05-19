import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-border/60 bg-background/95 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_28px_64px_-28px_rgba(17, 24, 39,0.2)]">
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
          <Link
            to={`/blog/category/${post.categorySlug}`}
            className="rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent transition-colors hover:border-accent/40 hover:bg-accent/12"
          >
            {post.category}
          </Link>
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
  );
}
