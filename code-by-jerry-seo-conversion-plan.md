# Code by Jerry SEO & Conversion Plan

## 0. Execution Status

Last updated: 2026-05-07

This section tracks what has already been implemented in the codebase and what still needs to be done.

### Completed In Codebase

- Core brand positioning has been clarified away from Laravel-only positioning.
- Homepage SEO metadata has been updated toward stack-flexible full-stack development for business systems.
- About/developer page metadata has been adjusted so Laravel is treated as experience, not the full brand identity.
- Blog system exists using Markdown files in `src/blogs`.
- Blog listing page exists at:

```text
/blog
```

- Blog detail pages exist at:

```text
/blog/:slug
```

- Blog posts use `BlogPosting` schema.
- Blog index uses `CollectionPage` schema.
- Blog pages use `BreadcrumbList` schema.
- SEO component supports:
  - title
  - description
  - keywords
  - canonical URLs
  - robots meta
  - Open Graph tags
  - Twitter card tags
  - schema injection
- `robots.txt` exists.
- Sitemap generation has been added through:

```text
scripts/generate-sitemap.mjs
```

- `npm run build` now regenerates the sitemap automatically before building.
- Current sitemap includes:
  - homepage
  - about
  - portfolio
  - services hub
  - existing service pages
  - blog index
  - Markdown blog posts
- Services hub has been added:

```text
/services
```

- Main navigation now points to `/services`.
- Shared header exists across:
  - blog pages
  - portfolio page
  - services hub
- Homepage conversion CTAs have been strengthened with:
  - contact form CTA
  - WhatsApp CTA
  - inline contact section
  - repeated CTA strips between sections
- Blog article pages now include a reusable CTA block with contact-section and WhatsApp links.
- Blog detail pages now show related posts based on category first, then recent posts as fallback.
- Blog category pages have been added at `/blog/category/:categorySlug`.
- Blog index and blog cards now link to category pages.
- Sitemap generation now includes blog category pages automatically.
- Build now includes static prerendering for public routes from the sitemap.
- Prerendering writes static HTML into `dist/**/index.html`, so Cloudflare Pages can still deploy the site as a normal static build.
- Temporary SSR build output is removed from `dist/server` after prerendering, so no server runtime is required on Cloudflare Pages.
- Blog image frontmatter has been audited and malformed Markdown-link image values were converted to plain URLs.
- Blog loader now normalizes Markdown-style image links as a defensive fallback.
- Existing service pages received a light conversion and SEO cleanup:
  - service CTAs now route to the real homepage contact section
  - service page work links now route to `/portfolio`
  - "back to services" links now route to `/services`
  - framework-heavy service metadata was softened toward stack-flexible delivery where needed
- Case study index page has been added at `/case-studies`.
- First individual case study page has been added at `/case-studies/real-estate-platform`.
- Case study pages include Article/CollectionPage schema, BreadcrumbList schema, related service links, screenshots, and conversion CTA.
- Case studies are now discoverable from the shared header, homepage header, services hub, and portfolio page.
- First location landing page has been added at `/remote-full-stack-developer-india`.
- The remote full-stack developer India page includes SEO metadata, ProfessionalService schema, BreadcrumbList schema, service links, and conversion CTAs.
- Services hub now includes an internal link to the remote full-stack developer India page.
- StaticForms contact form setup exists.
- FAQ schema exists on the homepage.

### Partially Completed

- Individual service pages existed previously, but URL structure was being aligned to the final SEO plan.

Current (legacy) service URLs (still present):
```text
/services/web-applications
/services/ecommerce
/services/mobile-apps
/services/backend-apis
/services/business-platforms
/services/seo-growth
```

Final SEO service URLs (added in this iteration):
```text
/services/custom-web-app-development
/services/ecommerce-development
/services/mobile-app-development
/services/api-integration-development
/services/business-automation
/services/admin-dashboard-development
/services/startup-mvp-development
/services/seo-performance-optimization
```

Decision (Option A, Cloudflare-static safe) implemented:
- We **added new final SEO routes** (new pages) and **kept existing routes working** (no redirects added in this iteration).

Now implemented for the new final service pages (codebase criteria met):
- Breadcrumb UI + `BreadcrumbList` schema
- FAQs UI + `FAQPage` structured data
- Related case studies section/cards

Blog in-article contextual internal linking:
- Implemented on all blog posts via `BlogInArticleLinks` (services + case studies).

Still pending in codebase (mainly content volume):
- More case studies (current `src/data/caseStudies.js` contains only 1 study)
- Remaining location landing pages:
  - /bangalore-web-application-developer
  - /chennai-full-stack-developer
  - /coimbatore-business-software-developer
  - /hyderabad-startup-mvp-developer

### Missing In Codebase

#### High Priority

- Services pages rewritten using the final service page template.
- More individual case study pages.
- Remaining location landing pages:

```text
/bangalore-web-application-developer
/chennai-full-stack-developer
/coimbatore-business-software-developer
/hyderabad-startup-mvp-developer
```

- Breadcrumb UI on service pages and case study pages.
- Stronger FAQ sections on each service page.
- Internal linking from blogs to service pages.
- Internal linking from service pages to blogs and case studies.

#### Medium Priority

- Services hub should include links to relevant blogs.
- Service pages should be expanded later with stronger proof, FAQs, related blogs, and case study links.
- Route-based code splitting should be considered to reduce bundle size.
- More image optimization and fallback handling.

#### Lower Priority

- Dedicated `/faq` page.
- Dedicated `/industries` or industry landing sections.
- Newsletter or lead magnet.
- Downloadable project planning checklist.

### Missing Outside The Codebase

These items cannot be solved only with code.

- Google Search Console setup.
- Sitemap submission in Google Search Console.
- URL inspection for important pages.
- Google Analytics or privacy-friendly analytics setup.
- Keyword tracking.
- LinkedIn profile optimization.
- GitHub profile optimization.
- Dev.to profile.
- Hashnode profile.
- Medium profile.
- Content republishing/distribution workflow.
- Backlink building from relevant communities.
- Monthly Search Console review.
- Content refresh cycle every 60-90 days.

### Immediate Next Codebase Actions

Recommended order:

1. Add blog internal CTA component.
2. Add related posts to blog detail pages.
3. Add blog category pages.
4. Audit all blog frontmatter images.
5. Improve existing service pages with stack-flexible positioning and stronger CTA blocks.
6. Add more dedicated case study pages.
7. Add remaining location pages only when each page has a clear SEO purpose and useful local intent.

### Immediate Outside Actions

Recommended order:

1. Deploy current changes.
2. Verify `https://codebyjerry.online/sitemap.xml` works after deployment.
3. Set up Google Search Console.
4. Submit sitemap.
5. Inspect homepage, `/services`, `/blog`, and 3 important blog posts.
6. Update LinkedIn headline and About section to match the new positioning.
7. Update GitHub profile link and bio.
8. Start weekly blog publishing/distribution.

### Current Strategic Priority

The current priority is:

```text
Build topical authority around stack-flexible business systems, not one technology.
```
 
The next 30 days should focus on:

- service page depth
- blog internal linking
- case study trust
- Search Console indexing
- conversion CTAs

## 1. Core Positioning

Code by Jerry should not be positioned as a Laravel-only developer brand.

Laravel can remain part of the credibility story because it is connected to professional experience and real production work, but the public SEO positioning should be broader and stronger:

```text
Remote full-stack developer building scalable business systems, web applications, eCommerce platforms, automation tools, APIs, dashboards, and startup MVPs using the right stack for the project.
```

## 2. What To Avoid

Avoid positioning the site around:

- Laravel developer only
- PHP developer only
- Web designer near me
- Software company in a city
- Freelancer available for anything
- Generic website developer

These positions are either too narrow, too local, or too weak for high-value leads.

## 3. What To Emphasize

The brand should emphasize:

- Custom business software
- Scalable web applications
- eCommerce systems
- Admin dashboards
- CRM and internal tools
- API integrations
- Business automation
- Startup MVP development
- SEO-ready websites
- Performance-focused engineering
- Stack flexibility

The message should be:

```text
I choose the stack based on the business problem, timeline, scalability needs, and long-term maintainability.
```

## 4. How To Mention Laravel

Laravel should be used as a credibility signal, not the main identity.

Good usage:

```text
Experienced in production systems across Laravel, React, Node.js, Firebase, APIs, eCommerce platforms, and modern frontend stacks.
```

Avoid:

```text
Laravel Developer for all projects
```

Better:

```text
Full-stack developer with professional Laravel experience and stack-flexible delivery across modern web technologies.
```

## 5. Primary SEO Positioning

The site should rank for business-focused and project-focused searches, not only technology-specific searches.

Primary positioning:

```text
Remote Full-Stack Developer for Business Systems, eCommerce, Automation, APIs, and Scalable Web Applications.
```

Secondary positioning:

```text
Stack-flexible developer helping startups, local businesses, agencies, and growing companies build reliable digital systems.
```

## 6. Target Audiences

### Startup Founders

They search for:

- startup MVP developer
- SaaS application developer
- scalable web application developer
- remote full-stack developer
- product development freelancer
- web app developer for startups

### Small And Medium Businesses

They search for:

- custom business software developer
- CRM development freelancer
- business automation software developer
- admin dashboard developer
- internal tool developer
- eCommerce website developer

### Agencies

They search for:

- white label full-stack developer
- remote frontend developer
- backend API developer
- freelance React developer
- developer for client projects

### eCommerce Brands

They search for:

- custom eCommerce developer
- Shopify optimization developer
- checkout optimization developer
- eCommerce platform developer
- website speed optimization for eCommerce

## 7. Keyword Strategy

### Main Keyword Clusters

#### Cluster A: Full-Stack Development

- remote full-stack developer
- freelance full-stack developer
- full-stack developer India
- full-stack web application developer
- custom web application developer
- scalable web application developer

#### Cluster B: Business Software

- custom business software developer
- business automation software developer
- CRM development freelancer
- internal tool developer
- admin dashboard developer
- workflow automation developer

#### Cluster C: Startup And SaaS

- startup MVP developer
- SaaS application developer
- MVP development freelancer
- scalable SaaS architecture
- product development freelancer
- build MVP for startup

#### Cluster D: eCommerce

- eCommerce website developer
- custom eCommerce development
- Shopify optimization developer
- eCommerce platform developer
- checkout performance optimization
- online store developer

#### Cluster E: API And Integrations

- API development services
- API integration developer
- backend API developer
- payment integration developer
- third-party integration developer

#### Cluster F: Technology Support Keywords

These should support pages, not dominate the brand:

- React developer
- Node.js developer
- Laravel developer
- Firebase developer
- Shopify developer
- Tailwind CSS developer
- Cloudflare Pages developer

## 8. Site Architecture Plan

### Existing Pages To Keep

```text
/
/about
/portfolio
/blog
/blog/:slug
```

### Service Hub To Add

```text
/services
```

Purpose:

- Introduce all services
- Link to individual service pages
- Improve internal linking
- Help users choose the right service

### Core Service Pages To Add

```text
/services/custom-web-app-development
/services/ecommerce-development
/services/mobile-app-development
/services/api-integration-development
/services/business-automation
/services/admin-dashboard-development
/services/startup-mvp-development
/services/seo-performance-optimization
```

Each service page should target one keyword cluster.

### Case Study Pages To Add

```text
/case-studies
/case-studies/ecommerce-platform
/case-studies/real-estate-platform
/case-studies/business-automation-system
/case-studies/admin-dashboard
```

### Location Pages To Add Carefully

Use remote-first positioning.

```text
/bangalore-web-application-developer
/chennai-full-stack-developer
/coimbatore-business-software-developer
/hyderabad-startup-mvp-developer
/remote-full-stack-developer-india
```

Do not claim a fake office.

Use language like:

```text
Remote-first full-stack developer serving businesses in Bangalore, Chennai, Coimbatore, Hyderabad, and across India.
```

## 9. Service Page Template

Every service page should follow this structure:

1. Hero
2. Who this service is for
3. Problems solved
4. What gets built
5. Technologies used
6. Process
7. Related case studies
8. FAQs
9. Strong CTA

### Service Page Hero Formula

```text
Custom Web Application Development for Growing Businesses
Build scalable dashboards, portals, internal tools, and business platforms designed around real workflows.
```

### Service Page CTA Examples

- Discuss Your Project
- Build Your Business System
- Start Your MVP
- Get a Scalable Platform Built
- Talk About Your Workflow

Avoid weak CTAs like:

- Contact me
- Submit
- Learn more

## 10. Blog Strategy

The blog should create authority and long-tail traffic.

### Blog Categories

- Business Software
- Web Development
- eCommerce
- Automation
- Startup MVP
- SEO & Performance
- APIs
- Case Studies
- Tech Strategy

### Blog Types

#### Type 1: Business Problem Blogs

Examples:

- Why Most Custom Business Software Fails
- When Should a Business Build Custom Software?
- How Automation Reduces Manual Work for Growing Teams
- Why Small Businesses Need CRM Systems
- How Internal Dashboards Improve Operations

#### Type 2: Startup And MVP Blogs

Examples:

- How To Build an MVP Without Wasting Budget
- Best Tech Stack for Startup MVPs
- How Founders Should Plan a SaaS Product
- Why Startups Should Avoid Overbuilding
- How To Validate a Product Before Full Development

#### Type 3: eCommerce Blogs

Examples:

- Shopify vs Custom eCommerce Platform
- How Website Speed Impacts eCommerce Sales
- Checkout Mistakes That Reduce Conversion
- How To Scale an Online Store Backend
- Why eCommerce Brands Need Better Admin Systems

#### Type 4: Technical Authority Blogs

Examples:

- React Performance Tips for Business Websites
- API Security Best Practices
- How To Design Scalable Admin Dashboards
- Database Design Mistakes in Business Applications
- Cloudflare Pages for Fast Frontend Deployment

### Blog Publishing Workflow

1. Pick one keyword cluster.
2. Choose one problem the audience actually has.
3. Write a practical article with examples.
4. Add a strong meta title and description.
5. Add internal links to service pages.
6. Add a CTA inside the article.
7. Add related posts.
8. Share on LinkedIn, Dev.to, Hashnode, and Medium.
9. Track Search Console impressions after indexing.
10. Update after 60-90 days based on query data.

## 11. Case Study Strategy

Case studies are conversion assets and SEO assets.

Each case study should include:

- Business problem
- Why the old process failed
- Solution built
- Stack used
- Architecture overview
- Key features
- Screenshots
- Results
- Lessons learned
- CTA

### Case Study Title Examples

```text
How a Custom Admin Dashboard Improved Operations for a Growing Business
```

```text
Building an eCommerce Platform With Better Checkout and Backend Workflows
```

```text
Real Estate Platform Case Study: Listings, CRM, and Lead Capture System
```

## 12. Technical SEO Plan

### Must Have

- Unique title per page
- Unique description per page
- Canonical URLs
- Open Graph tags
- Twitter cards
- Sitemap
- robots.txt
- Structured data
- Fast mobile performance
- Lazy-loaded images
- Clean internal links
- 404 page

### Schema To Add

- `Person`
- `ProfessionalService`
- `WebSite`
- `BlogPosting`
- `Article`
- `BreadcrumbList`
- `FAQPage`
- `CollectionPage`
- `Service`

### Sitemap Should Include

- Homepage
- About
- Portfolio
- Services hub
- Individual service pages
- Blog index
- Blog posts
- Case studies
- Location pages

## 13. React/Vite SEO Risk

The site is currently React + Vite SPA.

This risk has now been reduced by adding static prerendering to the build.

Current implementation:

```text
npm run build
  -> generate sitemap
  -> build client assets
  -> build temporary SSR renderer
  -> prerender sitemap routes into static HTML
  -> remove temporary dist/server output
```

Cloudflare Pages impact:

```text
Safe for Cloudflare Pages because the final deployment artifact is still static dist output.
```

Priority:

```text
Completed
```

Reason:

Google can index JavaScript sites, but static HTML gives faster and more reliable indexing.

## 14. Conversion Plan

Every important page should answer:

1. What do you build?
2. Who do you help?
3. What business problem do you solve?
4. Why should someone trust you?
5. What should they do next?

### Required CTAs

Use a mix of:

- Contact form
- WhatsApp
- Email
- Project discussion button

### CTA Placement

Add CTAs:

- Hero section
- After service explanation
- After proof/case study
- Inside blog articles
- Before FAQ
- After FAQ
- End of page

### CTA Copy

Use:

- Discuss Your Project
- Build Your Platform
- Start Your MVP
- Talk About Your Workflow
- Send Project Details
- WhatsApp Jerry

Avoid:

- Submit
- Click here
- Contact me only

## 15. Internal Linking Plan

### Homepage Should Link To

- Services hub
- Top service pages
- Portfolio
- Blog
- Contact section

### Blog Posts Should Link To

- Related service page
- Related blog posts
- Case study page
- Contact form

### Service Pages Should Link To

- Case studies
- Relevant blogs
- Contact section
- Portfolio

### Case Studies Should Link To

- Service page
- Blog explaining the topic
- Contact CTA

## 16. Off-Site SEO Plan

This cannot be solved in the codebase.

### Profiles To Build

- LinkedIn
- GitHub
- Dev.to
- Hashnode
- Medium
- Indie Hackers
- Product Hunt, if launching tools
- Relevant startup/community profiles

### Backlink Rules

Do:

- Link to specific service pages.
- Link to strong blog posts.
- Link to case studies.
- Use natural anchor text.

Do not:

- Buy backlinks.
- Spam directories.
- Create fake local listings.
- Use duplicate AI-generated articles everywhere.

## 17. Search Console Workflow

After deployment:

1. Verify domain in Google Search Console.
2. Submit sitemap.
3. Inspect homepage.
4. Inspect service pages.
5. Inspect top blog posts.
6. Track impressions weekly.
7. Identify keywords appearing on page 2 or 3.
8. Improve those pages.
9. Add internal links.
10. Resubmit updated URLs.

## 18. 90-Day Execution Plan

### Weeks 1-2: Foundation

- Improve SEO component.
- Add sitemap.
- Add robots.txt.
- Add structured data.
- Add services hub.
- Add internal links from homepage.
- Add blog CTA component.

### Weeks 3-4: Service Pages

Create:

- Custom web app development
- eCommerce development
- Business automation
- API integration development
- Startup MVP development

### Month 2: Authority

- Publish 4 blogs.
- Add 2 case study pages.
- Add blog category pages.
- Add related posts.
- Improve portfolio internal linking.

### Month 3: Location And Optimization

- Add Bangalore page.
- Add Chennai page.
- Add Coimbatore page.
- Add Hyderabad page.
- Add remote full-stack developer India page.
- Review Search Console data.
- Improve titles and descriptions.
- Add internal links based on impressions.

## 19. Content Quality Rules

Every page must be:

- Specific
- Practical
- Business-focused
- Outcome-driven
- Written for decision makers
- Supported by proof
- Connected to a CTA

Avoid:

- Thin pages
- Repeated content
- Keyword stuffing
- Fake local claims
- Generic AI-style paragraphs
- Overly technical pages with no business context

## 20. Final Brand Statement

Use this as the master direction:

```text
Code by Jerry helps startups, agencies, eCommerce brands, and growing businesses build scalable digital systems, custom web applications, automation workflows, APIs, dashboards, and MVPs using the right technology for the job.
```

Short version:

```text
Stack-flexible full-stack developer for scalable business systems.
```

This solves the Laravel concern clearly:

```text
Laravel is part of the experience story, not the brand limitation.
```
