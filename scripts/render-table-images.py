"""Render every table in the blog posts as a branded PNG for LinkedIn.

LinkedIn articles cannot show tables, so each table is uploaded there as an
image. This script finds posts containing <table>, renders each table (with
the bold title line above it) to src/images/blog/tables/<slug>-table-<n>.png,
and records the list in the post's front matter as `tableImages`. The LinkedIn
copy page then shows a download button per table and marks where each goes.

Run locally (needs Python Playwright + Chromium), then commit the images:
    python3 scripts/render-table-images.py            # only posts missing images
    python3 scripts/render-table-images.py --force    # re-render everything
"""
import re, sys, html, pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
BLOG = ROOT / "src/blog"
OUT = ROOT / "src/images/blog/tables"
FORCE = "--force" in sys.argv

# Content brand colours (navy, teal, gold)
CSS = """
* { box-sizing: border-box; margin: 0; }
body { background: #ffffff; font-family: 'Liberation Sans', 'DejaVu Sans', Arial, sans-serif; color: #1A2A4A; }
.card { width: 1200px; padding: 48px 56px 40px; background: #ffffff; border-top: 10px solid #1A2A4A; }
.title { font-size: 26px; font-weight: 700; letter-spacing: .06em; color: #1A2A4A;
         padding-bottom: 18px; margin-bottom: 26px; border-bottom: 3px solid #B7860B; }
table { width: 100%; border-collapse: collapse; font-size: 22px; line-height: 1.4; }
th { background: #0A6B5E; color: #ffffff; text-align: left; font-weight: 700; padding: 16px 18px; }
td { padding: 16px 18px; vertical-align: top; border-bottom: 1px solid #d9dee6; }
tr:nth-child(even) td { background: #f3f6f8; }
td:first-child { font-weight: 700; color: #1A2A4A; white-space: nowrap; }
.foot { margin-top: 22px; font-size: 17px; color: #6b7686; text-align: right; }
.foot b { color: #0A6B5E; }
"""

def tables_in(body):
    """(title, table_html) for each table, title taken from the line above it."""
    found = []
    for m in re.finditer(r"(?:<p class=\"table-title\"><strong>(.*?)</strong></p>\s*)?(<table>.*?</table>)", body, re.S):
        found.append((html.unescape(m.group(1) or ""), m.group(2)))
    return found

def set_front(text, key, values):
    front, rest = text.split("\n---\n", 1)
    front = re.sub(rf"\n{key}:\n(?:  - .*\n?)*", "\n", front).rstrip("\n")
    front += f"\n{key}:\n" + "\n".join(f'  - "{v}"' for v in values)
    return front + "\n---\n" + rest

posts = [p for p in sorted(BLOG.glob("*.md")) if "<table>" in p.read_text()]
OUT.mkdir(parents=True, exist_ok=True)
with sync_playwright() as pw:
    browser = pw.chromium.launch()
    page = browser.new_page(device_scale_factor=2, viewport={"width": 1200, "height": 800})
    for post in posts:
        text = post.read_text()
        if "\ntableImages:" in text.split("\n---\n", 1)[0] and not FORCE:
            continue
        slug = post.stem
        urls = []
        for i, (title, table) in enumerate(tables_in(text.split("\n---\n", 1)[1]), start=1):
            doc = (f"<html><head><style>{CSS}</style></head><body><div class='card'>"
                   + (f"<div class='title'>{html.escape(title)}</div>" if title else "")
                   + table + "<div class='foot'><b>Flotog BA Insights</b> · flotogbainsights.com</div></div></body></html>")
            page.set_content(doc)
            name = f"{slug}-table-{i}.png"
            page.locator(".card").screenshot(path=str(OUT / name))
            urls.append(f"/images/blog/tables/{name}")
            print("rendered", name)
        post.write_text(set_front(text, "tableImages", urls))
    browser.close()
