// Converts Wix "Ricos" rich content (the format Wix Blog stores posts in) to Markdown.
// Images become <img> tags with width/height so pages don't jump while loading.

const INTERNAL = /^https?:\/\/(www\.)?flotogbainsights\.com/i;

export function mediaUrl(id) {
  return `https://static.wixstatic.com/media/${id}`;
}

export function localImageName(id) {
  // "f4dc16_abc~mv2.png" -> "f4dc16_abc.png"
  return id.replace(/~mv2/, "").replace(/[^A-Za-z0-9._-]/g, "_");
}

function rewriteLink(url) {
  if (!url) return url;
  let u = url.replace(INTERNAL, "") || "/";
  if (u !== url) {
    const m = u.match(/^\/post\/([^/?#]+)/);
    if (m) u = `/blog/${m[1]}/`;
    if (u === "") u = "/";
  }
  return u;
}

function escapeMd(text) {
  return text.replace(/\\/g, "\\\\").replace(/([*_`[\]])/g, "\\$1");
}

function textOf(node) {
  if (!node) return "";
  if (node.type === "TEXT") return node.textData?.text ?? "";
  return (node.nodes || []).map(textOf).join("");
}

function renderText(node) {
  const raw = node.textData?.text ?? "";
  if (!raw) return "";
  const decos = node.textData?.decorations || [];
  const bold = decos.some((d) => d.type === "BOLD" && (d.fontWeightValue ?? 700) >= 600);
  const italic = decos.some((d) => d.type === "ITALIC" && d.italicData !== false);
  const link = decos.find((d) => d.type === "LINK")?.linkData?.link?.url;

  // keep surrounding spaces outside the markers so ** ** stays valid Markdown
  const lead = raw.match(/^\s*/)[0];
  const trail = raw.match(/\s*$/)[0];
  const core = raw.trim();
  if (!core) return raw;
  let out = escapeMd(core);
  if (bold && italic) out = `***${out}***`;
  else if (bold) out = `**${out}**`;
  else if (italic) out = `*${out}*`;
  if (link) out = `[${out}](${rewriteLink(link)})`;
  return lead + out + trail;
}

function inline(nodes) {
  return (nodes || []).map((n) => (n.type === "TEXT" ? renderText(n) : inline(n.nodes))).join("")
    .replace(/\*\*\*\*/g, "").replace(/\s+\n/g, "\n");
}

// A paragraph that is a single short bold line acts as a sub-heading in these posts.
function isPseudoHeading(p) {
  const texts = (p.nodes || []).filter((n) => n.type === "TEXT" && n.textData?.text?.trim());
  if (!texts.length) return false;
  const allBold = texts.every((n) => (n.textData.decorations || []).some((d) => d.type === "BOLD"));
  const anyItalic = texts.some((n) => (n.textData.decorations || []).some((d) => d.type === "ITALIC"));
  const t = textOf(p).trim();
  return allBold && !anyItalic && t.length <= 90 && !/[.!?:]$/.test(t);
}

export function ricosToMarkdown(doc, { onImage, skipFirstHeading = false, defaultAlt = "" } = {}) {
  const out = [];
  let skipped = !skipFirstHeading;

  function block(node, depth = 0) {
    switch (node.type) {
      case "HEADING": {
        const text = inline(node.nodes).trim();
        if (!text) return;
        if (!skipped) { skipped = true; return; }
        const lvl = node.headingData?.level ?? 2;
        out.push(`${"#".repeat(Math.min(Math.max(lvl, 2), 4))} ${text.replace(/\*\*/g, "")}`);
        return;
      }
      case "PARAGRAPH": {
        const text = inline(node.nodes).trim();
        if (!text) return;
        if (isPseudoHeading(node)) out.push(`## ${textOf(node).trim()}`);
        else out.push(text);
        return;
      }
      case "BLOCKQUOTE": {
        const inner = (node.nodes || []).map((n) => inline(n.nodes || [n]).trim()).filter(Boolean).join("\n>\n> ");
        if (inner) out.push(`> ${inner}`);
        return;
      }
      case "BULLETED_LIST":
      case "ORDERED_LIST": {
        const ordered = node.type === "ORDERED_LIST";
        const lines = [];
        (node.nodes || []).forEach((li, i) => {
          const parts = [];
          const nested = [];
          for (const c of li.nodes || []) {
            if (c.type === "BULLETED_LIST" || c.type === "ORDERED_LIST") nested.push(c);
            else parts.push(inline(c.nodes || [c]).trim());
          }
          const indent = "   ".repeat(depth);
          lines.push(`${indent}${ordered ? `${i + 1}.` : "-"} ${parts.filter(Boolean).join(" ")}`);
          for (const n of nested) {
            const sub = [];
            const saved = out.length;
            block(n, depth + 1);
            sub.push(...out.splice(saved));
            lines.push(...sub);
          }
        });
        out.push(lines.join("\n"));
        return;
      }
      case "IMAGE": {
        const img = node.imageData?.image;
        const id = img?.src?.id || img?.src?.url;
        if (!id) return;
        const src = onImage ? onImage(id) : mediaUrl(id);
        const alt = (node.imageData?.altText || defaultAlt).replace(/"/g, "&quot;");
        const w = img.width ? ` width="${img.width}"` : "";
        const h = img.height ? ` height="${img.height}"` : "";
        let tag = `<img src="${src}" alt="${alt}"${w}${h} loading="lazy">`;
        const cap = node.imageData?.caption;
        out.push(cap ? `<figure>${tag}<figcaption>${cap}</figcaption></figure>` : tag);
        return;
      }
      case "DIVIDER":
        out.push("---");
        return;
      case "CODE_BLOCK":
        out.push("```\n" + textOf(node) + "\n```");
        return;
      case "TABLE": {
        const rows = (node.nodes || []).map((row) =>
          (row.nodes || []).map((cell) => inline((cell.nodes || []).flatMap((c) => c.nodes || [])).replace(/\|/g, "\\|").trim()));
        if (!rows.length) return;
        const cols = Math.max(...rows.map((r) => r.length));
        const pad = (r) => [...r, ...Array(cols - r.length).fill("")];
        out.push([`| ${pad(rows[0]).join(" | ")} |`, `| ${Array(cols).fill("---").join(" | ")} |`,
          ...rows.slice(1).map((r) => `| ${pad(r).join(" | ")} |`)].join("\n"));
        return;
      }
      default: {
        // Unknown block (collapsible, button, embed...): keep its text so nothing is lost
        if (node.nodes?.length) node.nodes.forEach((n) => block(n, depth));
      }
    }
  }

  (doc?.nodes || []).forEach((n) => block(n));
  return out.join("\n\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

export { textOf };
