// One-off (re-runnable) copy of every published Wix blog post into src/blog/*.md,
// with images saved into src/images/blog/. Existing files are skipped unless --force.
// Run by the "Migrate Wix blog" GitHub Action, or locally: node scripts/migrate-wix-blog.mjs
import { writeFile, mkdir, access } from "node:fs/promises";
import { ricosToMarkdown, localImageName, mediaUrl, textOf } from "./ricos-to-markdown.mjs";

const CLIENT_ID = process.env.WIX_CLIENT_ID || "11887a88-9d9e-4619-9b07-550445eb3904";
const FORCE = process.argv.includes("--force");
const POSTS_DIR = "src/blog";
const IMG_DIR = "src/images/blog";

const exists = (p) => access(p).then(() => true, () => false);

async function token() {
  const res = await fetch("https://www.wixapis.com/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clientId: CLIENT_ID, grantType: "anonymous" })
  });
  if (!res.ok) throw new Error(`Token request failed: HTTP ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

async function listPosts(auth) {
  const all = [];
  for (let offset = 0; ; offset += 100) {
    const url = `https://www.wixapis.com/blog/v3/posts?paging.limit=100&paging.offset=${offset}&fieldsets=RICH_CONTENT&fieldsets=URL`;
    const res = await fetch(url, { headers: { Authorization: auth } });
    if (!res.ok) throw new Error(`List posts failed: HTTP ${res.status} ${await res.text()}`);
    const data = await res.json();
    all.push(...(data.posts || []));
    const total = data.metaData?.total ?? all.length;
    if (all.length >= total || !(data.posts || []).length) break;
  }
  return all;
}

const images = new Map(); // wix media id -> local path
function queueImage(id) {
  const name = localImageName(id);
  images.set(id, `${IMG_DIR}/${name}`);
  return `/images/blog/${name}`;
}

async function downloadImages() {
  await mkdir(IMG_DIR, { recursive: true });
  let n = 0;
  for (const [id, path] of images) {
    if (await exists(path)) continue;
    const res = await fetch(mediaUrl(id));
    if (!res.ok) { console.warn(`  image failed (${res.status}): ${id}`); continue; }
    await writeFile(path, Buffer.from(await res.arrayBuffer()));
    n++;
  }
  console.log(`Downloaded ${n} new images`);
}

const yaml = (s) => JSON.stringify(String(s ?? ""));

function clip(text, max = 158) {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return t.slice(0, t.lastIndexOf(" ", max - 1)).replace(/[,;:\-–]+$/, "") + "…";
}

// "DAY 4 | The Mistakes... - Getting a room to act" -> { day: 4, title, dek }
function parseDayHeading(post) {
  const first = (post.richContent?.nodes || []).find((n) => n.type === "HEADING" || (n.type === "PARAGRAPH" && textOf(n).trim()));
  const text = (first ? textOf(first) : post.excerpt || "").replace(/\s+/g, " ").trim();
  const m = text.match(/^DAY\s*(\d+)\s*\|\s*(.+)$/i);
  if (!m) return null;
  const [main, ...rest] = m[2].split(/\s+[-–—]\s+/);
  return { day: Number(m[1]), title: main.trim(), dek: rest.join(" - ").trim(), usedHeading: first?.type === "HEADING" };
}

function firstParagraph(post, skip) {
  const paras = (post.richContent?.nodes || []).filter((n) => n.type === "PARAGRAPH").map((n) => textOf(n).trim()).filter((t) => t.length > 60);
  return paras[0] || post.excerpt || "";
}

async function main() {
  await mkdir(POSTS_DIR, { recursive: true });
  const auth = await token();
  const posts = await listPosts(auth);
  console.log(`Found ${posts.length} published posts`);
  let written = 0, skipped = 0;

  for (const post of posts) {
    const file = `${POSTS_DIR}/${post.slug}.md`;
    if (!FORCE && (await exists(file))) { skipped++; continue; }

    const dayInfo = parseDayHeading(post);
    const title = dayInfo ? dayInfo.title : post.title;
    const body = ricosToMarkdown(post.richContent, { onImage: queueImage, skipFirstHeading: !!dayInfo?.usedHeading, defaultAlt: title });
    const coverId = post.media?.wixMedia?.image?.id;
    const cover = coverId ? queueImage(coverId) : "";

    const description = clip(dayInfo?.dek || firstParagraph(post));

    const fm = [
      "---",
      `title: ${yaml(title)}`,
      dayInfo ? `series: ${yaml(post.title)}` : null,
      dayInfo ? `day: ${dayInfo.day}` : null,
      dayInfo?.dek ? `dek: ${yaml(dayInfo.dek)}` : null,
      `description: ${yaml(description)}`,
      `date: ${post.firstPublishedDate}`,
      post.lastPublishedDate && post.lastPublishedDate !== post.firstPublishedDate ? `updated: ${post.lastPublishedDate}` : null,
      cover ? `cover: ${yaml(cover)}` : null,
      `readingTime: ${post.minutesToRead || 4}`,
      `wixId: ${yaml(post.id)}`,
      "---",
      ""
    ].filter((l) => l !== null).join("\n");

    await writeFile(file, fm + body);
    written++;
  }

  await downloadImages();
  console.log(`Posts written: ${written}, already present: ${skipped}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
