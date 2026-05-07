import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const rootDir = process.cwd();
const distDir = join(rootDir, "dist");
const serverEntry = join(distDir, "server", "entry-server.js");
const templatePath = join(distDir, "index.html");
const sitemapPath = join(distDir, "sitemap.xml");

if (!existsSync(serverEntry)) {
  throw new Error("Missing SSR server entry. Run `vite build --ssr src/entry-server.jsx` first.");
}

if (!existsSync(templatePath)) {
  throw new Error("Missing dist/index.html. Run the client build first.");
}

if (!existsSync(sitemapPath)) {
  throw new Error("Missing dist/sitemap.xml. Run sitemap generation before building.");
}

const { render } = await import(pathToFileURL(serverEntry).href);
const template = readFileSync(templatePath, "utf8");
const sitemap = readFileSync(sitemapPath, "utf8");

const routes = Array.from(sitemap.matchAll(/<loc>https:\/\/codebyjerry\.online(.*?)<\/loc>/g))
  .map((match) => match[1])
  .filter((route) => route && !route.includes("#"))
  .sort((a, b) => a.localeCompare(b));

const injectHtml = (html, appHtml) =>
  html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

for (const route of routes) {
  const appHtml = render(route);
  const html = injectHtml(template, appHtml);

  if (route === "/") {
    writeFileSync(templatePath, html);
    continue;
  }

  const outputPath = join(distDir, route.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, html);
}

const serverDir = join(distDir, "server");
if (existsSync(serverDir)) {
  rmSync(serverDir, { recursive: true, force: true });
}

console.log(`Prerendered ${routes.length} routes into dist.`);
