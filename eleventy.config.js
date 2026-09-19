export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // ISO date for sitemap / schema
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  // Absolute URL helper
  eleventyConfig.addFilter("absUrl", (path, base) => new URL(path, base).href);
  // Safe JSON for JSON-LD
  eleventyConfig.addFilter("jsonld", (obj) => JSON.stringify(obj, null, 2).replace(/</g, "\\u003c"));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
