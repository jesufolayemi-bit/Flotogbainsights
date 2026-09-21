const slugify = (s) =>
  String(s).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);

export default function (eleventyConfig) {
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
