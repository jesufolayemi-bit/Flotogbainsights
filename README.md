# flotogbainsights.com — SEO-first rebuild (Eleventy + Vercel)

## Section 1 (this build): foundation, homepage, booking page
- `src/_data/site.json` — ALL business facts in one place (NAP, phone, booking links, socials). Edit here only.
- `src/_data/schemaBuilder.js` — auto JSON-LD on every page: Organization/ProfessionalService, Person, WebSite, WebPage, FAQPage, Service, BreadcrumbList.
- `src/index.njk` — homepage.  `src/pages/book.njk` — coaching/booking page.
- `vercel.json` — 301 redirects from old Wix URLs, headers, build settings.  Sitemap and robots.txt generate automatically.
- Footer newsletter form posts to `site.json > newsletterAction` (MailerLite or Formspree).

## Brand assets from Wix
`scripts/fetch-wix-media.mjs` runs before every build and copies your logo, photo and client logos
from Wix into `src/images/brand/` (list in `src/_data/wixMedia.json`). After the first Vercel build,
download those files and commit them to the repo so the site no longer depends on Wix.
Brand colours (from the Flotog logo): navy #02306C, dark navy #042251, yellow #FCD841, cyan #03B5F8.

## Before going live (fill these in)
1. Confirm the logo and photo appear after the first Vercel build.
2. `site.json > booking` — your Cal.com (or Calendly) links, replacing REPLACE-ME.
3. `site.json > social` — LinkedIn company, LinkedIn personal, Instagram, TikTok URLs.
4. Review every FAQ answer in `index.njk` and `book.njk` for accuracy.
5. Check `site.json > geo` coordinates match your office pin on Google Maps.

## Run locally
npm install
npm start        # http://localhost:8080

## Deploy
Push to GitHub > Vercel: Add New > Project > import the repo. Build settings come from vercel.json.
Vercel > Settings > Domains: add www.flotogbainsights.com as primary and set flotogbainsights.com to redirect to it.

## DO NOT switch DNS from Wix to Vercel until Sections 2 and 3 are done
Section 2: about, blog (all old /post/ slugs migrated), free interview guide, privacy, business services, Decap CMS for publishing.
Section 3: shop, events, Search Console resubmission, launch checklist.
