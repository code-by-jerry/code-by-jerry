const blogModules = import.meta.glob("./*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const fallbackImage =
  "https://ik.imagekit.io/codebyjerry/services/Web%20System.png?tr=f-auto,q-80";

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

export const blogs = Object.entries(blogModules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = data.slug || slugFromPath(path);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      readTime: data.readTime || "3 min read",
      category: data.category || "Web Development",
      image: data.image || fallbackImage,
      keywords: data.keywords || "",
      content,
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const featuredBlogs = blogs.slice(0, 3);

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug);
}
