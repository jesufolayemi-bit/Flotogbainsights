const slugify = (s) =>
  String(s).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/^(.{0,80})(-.*)?$/, "$1").replace(/-+$/, "");

// Scheduled publishing: a blog post dated in the future is left out of the build
// entirely (no page, not in the blog index, series pages, RSS feed or sitemap)
// until its publish date arrives in Dubai. A daily rebuild at 06:00 Dubai
// (.github/workflows/daily-publish.yml) makes each day's post appear.
// Rule: a post goes live on its calendar date (the date typed in Pages CMS);
// the time of day is ignored. Set SHOW_SCHEDULED=1 to preview future posts locally.
const todayInDubai = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dubai" }).format(new Date()); // YYYY-MM-DD
const postDay = (d) => {
  if (typeof d === "string" && /^\d{4}-\d{2}-\d{2}/.test(d)) return d.slice(0, 10);
  const dt = d instanceof Date ? d : new Date(d);
  return isNaN(dt) ? null : dt.toISOString().slice(0, 10);
};

export default function (eleventyConfig) {
  eleventyConfig.addPreprocessor("scheduled-posts", "md", (data) => {
    if (process.env.SHOW_SCHEDULED === "1") return;
    if (!data.page?.inputPath?.includes("/blog/")) return;
    const day = postDay(data.date ?? data.page.date);
    if (day && day > todayInDubai()) return false; // not yet — skip this post
  });

  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Dubai" }));
  eleventyConfig.addFilter("absUrl", (path, base) => new URL(path, base).href);
  eleventyConfig.addFilter("jsonld", (obj) => JSON.stringify(obj, null, 2).replace(/</g, "\\u003c"));
  eleventyConfig.addFilter("slugify", slugify);
  eleventyConfig.addFilter("findSeries", (list, slug) => (list || []).find((s) => s.slug === slug) || null);
  // Series whose title matches any of the given regex patterns (case-insensitive); empty list returns all
  eleventyConfig.addFilter("seriesMatching", (list, patterns) => {
    if (!patterns || !patterns.length) return list || [];
    const res = patterns.map((p) => new RegExp(p, "i"));
    return (list || []).filter((s) => res.some((r) => r.test(s.title)));
  });
  eleventyConfig.addFilter("liveOnly", (arr) => (arr || []).filter((t) => t.status === "live"));
  eleventyConfig.addFilter("head", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("xmlEscape", (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"));

  // All blog posts, newest first
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/blog/*.md").sort((a, b) => b.date - a.date));

  // Posts grouped into weekly series (Day 1..5), newest series first
  eleventyConfig.addCollection("series", (api) => {
    const map = new Map();
    for (const p of api.getFilteredByGlob("src/blog/*.md")) {
      if (!p.data.series) continue;
      const slug = slugify(p.data.series);
      if (!map.has(slug)) map.set(slug, { slug, title: p.data.series, posts: [] });
      map.get(slug).posts.push(p);
    }
    const list = [...map.values()].map((s) => {
      s.posts.sort((a, b) => (a.data.day ?? 0) - (b.data.day ?? 0) || a.date - b.date);
      s.start = s.posts[0].date;
      s.latest = s.posts.reduce((m, p) => (p.date > m ? p.date : m), s.posts[0].date);
      s.description = s.posts[0].data.description;
      s.cover = s.posts[0].data.cover;
      return s;
    });
    return list.sort((a, b) => b.latest - a.latest);
  });

  // Posts that are not part of a series
  eleventyConfig.addCollection("standalonePosts", (api) =>
    api.getFilteredByGlob("src/blog/*.md").filter((p) => !p.data.series).sort((a, b) => b.date - a.date));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk"
  };
}
