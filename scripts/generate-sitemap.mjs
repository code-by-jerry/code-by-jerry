import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const siteUrl = "https://codebyjerry.online";
const today = new Date().toISOString().slice(0, 10);

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/portfolio", priority: "0.8", changefreq: "weekly" },
  { path: "/case-studies", priority: "0.8", changefreq: "monthly" },
  { path: "/case-studies/real-estate-platform", priority: "0.7", changefreq: "monthly" },
  { path: "/remote-full-stack-developer-india", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/services/web-applications", priority: "0.9", changefreq: "monthly" },
  { path: "/services/ecommerce", priority: "0.9", changefreq: "monthly" },
  { path: "/services/mobile-apps", priority: "0.9", changefreq: "monthly" },
  { path: "/services/backend-apis", priority: "0.9", changefreq: "monthly" },
  { path: "/services/business-platforms", priority: "0.9", changefreq: "monthly" },
  { path: "/services/seo-growth", priority: "0.9", changefreq: "monthly" },

  { path: "/services/custom-web-app-development", priority: "0.9", changefreq: "monthly" },
  { path: "/services/ecommerce-development", priority: "0.9", changefreq: "monthly" },
  { path: "/services/mobile-app-development", priority: "0.9", changefreq: "monthly" },
  { path: "/services/api-integration-development", priority: "0.9", changefreq: "monthly" },
  { path: "/services/business-automation", priority: "0.9", changefreq: "monthly" },
  { path: "/services/admin-dashboard-development", priority: "0.9", changefreq: "monthly" },
  { path: "/services/startup-mvp-development", priority: "0.9", changefreq: "monthly" },
  { path: "/services/seo-performance-optimization", priority: "0.9", changefreq: "monthly" },
];

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};

  return match[1].split(/\r?\n/).reduce((data, line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return data;

    const key = line.slice(0, separatorIndex).trim();
    const value = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^["']|["']$/g, "");

    if (key) data[key] = value;
    return data;
  }, {});
}

function slugFromFilename(filename) {
  return filename.replace(/\.md$/, "");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const blogDir = join(process.cwd(), "src", "blogs");
const blogFiles = readdirSync(blogDir)
  .filter((filename) => filename.endsWith(".md"))
  .map((filename) => {
    const raw = readFileSync(join(blogDir, filename), "utf8");
    const data = parseFrontmatter(raw);

    return {
      category: data.category || "Web Development",
      path: `/blog/${data.slug || slugFromFilename(filename)}`,
      lastmod: data.date || today,
      priority: "0.7",
      changefreq: "monthly",
    };
  });

const blogRoutes = blogFiles
  .map(({ path, lastmod, priority, changefreq }) => ({
    path,
    lastmod,
    priority,
    changefreq,
  }))
  .sort((a, b) => a.path.localeCompare(b.path));

const categoryRoutes = Array.from(
  new Set(blogFiles.map((blog) => slugify(blog.category)))
)
  .map((categorySlug) => ({
    path: `/blog/category/${categorySlug}`,
    lastmod: today,
    priority: "0.6",
    changefreq: "monthly",
  }))
  .sort((a, b) => a.path.localeCompare(b.path));

const routes = [...staticRoutes, ...categoryRoutes, ...blogRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${route.lastmod || today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(process.cwd(), "public", "sitemap.xml"), xml);

console.log(`Generated sitemap with ${routes.length} URLs.`);
