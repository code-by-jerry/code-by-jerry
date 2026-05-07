import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import SEO from "../components/SEO";
import SiteHeader from "../components/SiteHeader";
import BlogCard from "../components/BlogCard";
import NotFound from "./NotFound";
import { getBlogCategoryBySlug, getBlogsByCategorySlug } from "../blogs";

export default function BlogCategory() {
  const { categorySlug } = useParams();
  const category = getBlogCategoryBySlug(categorySlug);
  const posts = getBlogsByCategorySlug(categorySlug);

  if (!category) return <NotFound />;

  const categoryUrl = `https://codebyjerry.online/blog/category/${category.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${category.name} Articles`,
      description: `Articles about ${category.name.toLowerCase()} from Code by Jerry.`,
      url: categoryUrl,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: posts.map((post, index) => ({
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
        {
          "@type": "ListItem",
          position: 3,
          name: category.name,
          item: categoryUrl,
        },
      ],
    },
  ];

  return (
    <div className="hero-bg min-h-screen font-sans text-text selection:bg-accent selection:text-white">
      <SEO
        title={`${category.name} Articles | Code by Jerry Blog`}
        description={`Read practical ${category.name.toLowerCase()} articles on business systems, full-stack development, automation, performance, and scalable digital products.`}
        keywords={`${category.name}, Code by Jerry blog, business systems, full-stack development, automation, scalable digital systems`}
        schema={schema}
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-screen-xl px-5 pb-12 pt-28 sm:px-6 md:px-12 lg:px-20 lg:pb-16 lg:pt-32">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-accent"
        >
          <FaArrowLeft size={10} />
          Blog
        </Link>

        <section className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
              Category
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
              {category.name}
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            {posts.length} practical article{posts.length === 1 ? "" : "s"} on{" "}
            {category.name.toLowerCase()}, written for founders, business
            owners, agencies, and teams building better digital systems.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>
      </main>
    </div>
  );
}
