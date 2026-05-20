const blogModules = import.meta.glob("./*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const fallbackImage =
  "https://ik.imagekit.io/codebyjerry/services/Web%20System.png?tr=f-auto,q-80";

const orderedBlogImages = [
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%201.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%202.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%203.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%204.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%205.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%206.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%207.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%208.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%209.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2010.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2011.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2012.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2013.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2014.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2015.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2016.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2017.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2018.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2020.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2019.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2022.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2021.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2023.png",
  "https://ik.imagekit.io/codebyjerry/coj%20blogs/blog%2024.png",
];

export const slugify = (value) =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const slugFromPath = (path) =>
  path
    .split("/")
    .pop()
    .replace(/\.md$/, "");

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return;

    const key = line.slice(0, separatorIndex).trim();
    const value = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^["']|["']$/g, "");

    if (key) data[key] = value;
  });

  return { data, content: match[2].trim() };
}

function normalizeImageUrl(value) {
  if (!value) return fallbackImage;

  const markdownLink = value.match(/^\[.*?\]\((.*?)\)$/);
  if (markdownLink?.[1]) return markdownLink[1];

  return value;
}

export const blogs = Object.entries(blogModules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = data.slug || slugFromPath(path);
    const category = data.category || "Web Development";

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      readTime: data.readTime || "3 min read",
      category,
      categorySlug: slugify(category),
      image: normalizeImageUrl(data.image),
      keywords: data.keywords || "",
      content,
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map((blog, index) => ({
    ...blog,
    image: orderedBlogImages[index] || blog.image,
  }));

export const featuredBlogs = blogs.slice(0, 3);

export const blogCategories = Object.values(
  blogs.reduce((categories, blog) => {
    if (!categories[blog.categorySlug]) {
      categories[blog.categorySlug] = {
        name: blog.category,
        slug: blog.categorySlug,
        count: 0,
      };
    }

    categories[blog.categorySlug].count += 1;
    return categories;
  }, {})
).sort((a, b) => a.name.localeCompare(b.name));

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug);
}

export function getBlogCategoryBySlug(categorySlug) {
  return blogCategories.find((category) => category.slug === categorySlug);
}

export function getBlogsByCategorySlug(categorySlug) {
  return blogs.filter((blog) => blog.categorySlug === categorySlug);
}

export function getRelatedBlogs(currentSlug, limit = 3) {
  const currentBlog = getBlogBySlug(currentSlug);
  if (!currentBlog) return [];

  const sameCategory = blogs.filter(
    (blog) =>
      blog.slug !== currentSlug &&
      blog.category.toLowerCase() === currentBlog.category.toLowerCase()
  );

  const fallback = blogs.filter(
    (blog) =>
      blog.slug !== currentSlug &&
      !sameCategory.some((related) => related.slug === blog.slug)
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}
