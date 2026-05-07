import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import SEO from "../components/SEO";
import SiteHeader from "../components/SiteHeader";
import BlogArticleCTA from "../components/BlogArticleCTA";
import RelatedPosts from "../components/RelatedPosts";
import BlogInArticleLinks from "../components/BlogInArticleLinks";
import NotFound from "./NotFound";
import { getBlogBySlug, getRelatedBlogs } from "../blogs";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) return <NotFound />;

  const relatedPosts = getRelatedBlogs(post.slug);
  const postUrl = `https://codebyjerry.online/blog/${post.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: post.image,
      datePublished: post.date,
      dateModified: post.date,
      articleSection: post.category,
      keywords: post.keywords,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": postUrl,
      },
      author: {
        "@type": "Person",
        name: "Jerry",
        url: "https://codebyjerry.online/about",
      },
      publisher: {
        "@type": "Organization",
        name: "Code by Jerry",
        logo: {
          "@type": "ImageObject",
          url: "https://codebyjerry.online/logo.png",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://codebyjerry.online/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://codebyjerry.online/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: postUrl,
        },
      ],
    },
  ];

  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO
        title={`${post.title} | Code by Jerry`}
        description={post.description}
        keywords={post.keywords}
        ogImage={post.image}
        ogType="article"
        schema={schema}
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-4xl px-5 pb-12 pt-28 sm:px-6 md:px-12 lg:pb-16 lg:pt-32">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-accent"
        >
          <FaArrowLeft size={10} />
          Blog
        </Link>

        <article className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to={`/blog/category/${post.categorySlug}`}
              className="rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent transition-colors hover:border-accent/40 hover:bg-accent/12"
            >
              {post.category}
            </Link>
            <span className="text-xs font-medium text-text-secondary">
              {post.readTime}
            </span>
            {post.date && (
              <span className="text-xs font-medium text-text-secondary">
                {new Intl.DateTimeFormat("en", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(post.date))}
              </span>
            )}
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            {post.description}
          </p>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-border/60 bg-surface">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[16/9] h-full w-full object-cover"
            />
          </div>

          <div className="mt-10 rounded-[2rem] border border-border/60 bg-background/95 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)] sm:p-8 lg:p-10">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-10 font-display text-2xl font-bold leading-tight text-primary first:mt-0">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-8 font-display text-xl font-bold leading-tight text-primary">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mt-5 text-base leading-8 text-text-secondary">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mt-5 space-y-3 text-base leading-7 text-text-secondary">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{children}</span>
                  </li>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>

            <BlogInArticleLinks categorySlug={post.categorySlug} />

            <BlogArticleCTA category={post.category} />
            <RelatedPosts posts={relatedPosts} />
          </div>
        </article>
      </main>
    </div>
  );
}
