// Converts Wix "Ricos" rich content (the format Wix Blog stores posts in) to Markdown.
// Bold/italic are written as <strong>/<em> so mixed formatting can never break,
// images keep width/height, and single-cell tables (Wix "callout" boxes) become styled callouts.

const INTERNAL = /^https?:\/\/(www\.)?flotogbainsights\.com/i;
const AUTHOR = /^(oluwatosin|tosin)\s+ogunkoya$/i;

export function mediaUrl(id) {
  return `https://static.wixstatic.com/media/${id}`;
}

export function localImageName(id) {
  return id.replace(/~mv2/, "").replace(/[^A-Za-z0-9._-]/g, "_");
}

function rewriteLink(url) {
  if (!url) return url;
  let u = url.replace(INTERNAL, "");
  if (u === url) return url; // external link
  if (!u || u === "/") return "/";
  const m = u.match(/^\/post\/([^/?#]+)/);
  if (m) return `/blog/${m[1]}/`;
  return u;
}

const escHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escMd = (s) => s.replace(/\\/g, "\\\\").replace(/([*_`[\]])/g, "\\$1");
const esc = (s) => escMd(escHtml(s));

export function textOf(node) {
  if (!node) return "";
  if (node.type === "TEXT") return node.textData?.text ?? "";
  return (node.nodes || []).map(textOf).join("");
}

function runsOf(nodes, acc = []) {
  for (const n of nodes || []) {
    if (n.type === "TEXT") {
      const d = n.textData?.decorations || [];
      acc.push({
        text: n.textData?.text ?? "",
        b: d.some((x) => x.type === "BOLD" && (x.fontWeightValue ?? 700) >= 600),
        i: d.some((x) => x.type === "ITALIC" && x.italicData !== false),
        link: d.find((x) => x.type === "LINK")?.linkData?.link?.url || ""
      });
    } else if (n.nodes?.length) runsOf(n.nodes, acc);
  }
  return acc;
}

function inline(nodes) {
  const runs = [];
  for (const r of runsOf(nodes)) {
    const last = runs[runs.length - 1];
    if (last && last.b === r.b && last.i === r.i && last.link === r.link) last.text += r.text;
    else runs.push({ ...r });
  }
  return runs.map((r) => {
    const lead = r.text.match(/^\s*/)[0];
    const core = r.text.trim();
    const trail = core ? r.text.match(/\s*$/)[0] : "";
    if (!core) return r.text.replace(/\s+/g, " ");
    let out = esc(core);
    if (r.i) out = `<em>${out}</em>`;
    if (r.b) out = `<strong>${out}</strong>`;
    if (r.link) out = `[${out}](${rewriteLink(r.link)})`;
    return lead + out + trail;
  }).join("").replace(/[ \t]+/g, " ").trim();
}

// A single short bold line acts as a sub-heading in these posts.
function isPseudoHeading(p) {
  const runs = runsOf(p.nodes).filter((r) => r.text.trim());
  if (!runs.length) return false;
  const t = runs.map((r) => r.text).join("").trim();
  return runs.every((r) => r.b) && !runs.some((r) => r.i) && t.length <= 90 &&
    !/[.!?]$/.test(t) && !AUTHOR.test(t) && !/^tomorrow/i.test(t);
}

export function ricosToMarkdown(doc, { onImage, skipNodeId = null, defaultAlt = "" } = {}) {
  function render(nodes, depth = 0, inCallout = false) {
    const out = [];
    for (const node of nodes || []) {
      if (skipNodeId && node.id === skipNodeId) continue;
      switch (node.type) {
        case "HEADING": {
          const text = textOf(node).trim();
          if (!text) break;
          const lvl = node.headingData?.level ?? 2;
          out.push(`${"#".repeat(Math.min(Math.max(lvl, 2), 4))} ${esc(text)}`);
          break;
        }
        case "PARAGRAPH": {
          const text = inline(node.nodes);
          if (!text) break;
          out.push(!inCallout && isPseudoHeading(node) ? `## ${esc(textOf(node).trim().replace(/:$/, ""))}` : text);
          break;
        }
        case "BLOCKQUOTE": {
          const inner = render(node.nodes, depth).join("\n\n");
          if (inner) out.push(inner.split("\n").map((l) => `> ${l}`.trimEnd()).join("\n"));
          break;
        }
        case "BULLETED_LIST":
        case "ORDERED_LIST": {
          const ordered = node.type === "ORDERED_LIST";
          const lines = [];
          (node.nodes || []).forEach((li, i) => {
            const text = [], nested = [];
            for (const c of li.nodes || []) {
              if (c.type === "BULLETED_LIST" || c.type === "ORDERED_LIST") nested.push(...render([c], depth + 1));
              else text.push(inline(c.nodes || [c]));
            }
            lines.push(`${"   ".repeat(depth)}${ordered ? `${i + 1}.` : "-"} ${text.filter(Boolean).join(" ")}`);
            lines.push(...nested);
          });
          out.push(lines.join("\n"));
          break;
        }
        case "IMAGE": {
          const img = node.imageData?.image;
          const id = img?.src?.id || img?.src?.url;
          if (!id) break;
          const src = onImage ? onImage(id) : mediaUrl(id);
          const alt = escHtml(node.imageData?.altText || defaultAlt).replace(/"/g, "&quot;");
          const w = img.width ? ` width="${img.width}"` : "";
          const h = img.height ? ` height="${img.height}"` : "";
          const tag = `<img src="${src}" alt="${alt}"${w}${h} loading="lazy">`;
          const cap = node.imageData?.caption;
          out.push(cap ? `<figure>${tag}<figcaption>${escHtml(cap)}</figcaption></figure>` : tag);
          break;
        }
        case "DIVIDER":
          out.push("---");
          break;
        case "CODE_BLOCK":
          out.push("```\n" + textOf(node) + "\n```");
          break;
        case "TABLE": {
          const rows = (node.nodes || []).filter((r) => r.type === "TABLE_ROW" || r.nodes);
          const cols = Math.max(0, ...rows.map((r) => (r.nodes || []).length));
          if (cols <= 1) {
            // Wix callout box: keep every paragraph, render as a styled aside
            const inner = rows.flatMap((r) => (r.nodes || []).flatMap((cell) => render(cell.nodes, depth, true)));
            if (inner.length) out.push(`<div class="callout">\n\n${inner.join("\n\n")}\n\n</div>`);
          } else {
            const cells = rows.map((r) => (r.nodes || []).map((cell) =>
              (cell.nodes || []).map((b) => inline(b.nodes || [b])).filter(Boolean).join("<br>").replace(/\|/g, "\\|")));
            const pad = (r) => [...r, ...Array(cols - r.length).fill("")];
            out.push([`| ${pad(cells[0]).join(" | ")} |`, `| ${Array(cols).fill("---").join(" | ")} |`,
              ...cells.slice(1).map((r) => `| ${pad(r).join(" | ")} |`)].join("\n"));
          }
          break;
        }
        default:
          if (node.nodes?.length) out.push(...render(node.nodes, depth));
      }
    }
    return out;
  }
  return render(doc?.nodes).join("\n\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
