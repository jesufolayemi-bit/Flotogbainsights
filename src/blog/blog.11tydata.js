export default {
  layout: "layouts/post.njk",
  pageType: "BlogPosting",
  ogType: "article",
  eleventyComputed: {
    permalink: (data) => `/blog/${data.page.fileSlug}/`,
    ogImage: (data) => data.cover || undefined,
    breadcrumbs: (data) => [
      { name: "Blog", url: "/blog/" },
      ...(data.series ? [{ name: data.series, url: `/blog/series/${slug(data.series)}/` }] : []),
      { name: data.title, url: `/blog/${data.page.fileSlug}/` }
    ]
  }
};
function slug(s) {
  return String(s).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/^(.{0,80})(-.*)?$/, "$1").replace(/-+$/, "");
}
