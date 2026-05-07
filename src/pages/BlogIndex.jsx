import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SiteHeader from "../components/SiteHeader";
import BlogCard from "../components/BlogCard";
import { blogCategories, blogs } from "../blogs";

export default function BlogIndex() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Code by Jerry Blog",
      description:
        "Practical articles on business software, full-stack development, automation, eCommerce, APIs, SEO, and scalable digital systems.",
      url: "https://codebyjerry.online/blog",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: blogs.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: post.title,
          url: `https://codebyjerry.online/blog/${post.slug}`,
        })),
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
      ],
    },
  ];

  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO
        title="Blog | Business Software, Automation & Full-Stack Development | Code by Jerry"
        description="Practical articles on business software, full-stack development, automation, eCommerce, APIs, SEO, and scalable digital systems."
        keywords="business software blog, full-stack development blog, automation, eCommerce development, API development, SEO, startup MVP"
        schema={schema}
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

        <section className="mt-10 flex flex-wrap gap-2">
          {blogCategories.map((category) => (
            <Link
              key={category.slug}
              to={`/blog/category/${category.slug}`}
              className="rounded-full border border-border/70 bg-background/82 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary transition-all hover:border-accent/30 hover:text-accent"
            >
              {category.name}
              <span className="ml-2 text-text-secondary/60">
                {category.count}
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>
      </main>
    </div>
  );
}
