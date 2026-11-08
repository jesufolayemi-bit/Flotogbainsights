"""Turn a weekly Flotog content doc into five scheduled blog posts.

    pandoc week.docx -t markdown --wrap=none -o week.md
    python3 scripts/build-week.py week.md "<Series name>" week.json
    python3 scripts/render-table-images.py

week.json:
  {"dates": {"1": "2026-11-09", ...},          # publish date per day
   "descriptions": {"1": "...", ...},           # Google description, <= 160 chars
   "skip": [],                                  # days to leave out
   "replace": {"2": [["old", "new"]]}}          # optional fixes after conversion

Each post gets: title, subtitle (dek), series/day, the newsletter article
(sections as h2, dialogue boxes as callouts, tables as HTML tables, bullet
lists), the sign-off and signature, the TOMORROW / NEXT WEEK teaser, and the
LinkedIn post text for the copy page. Covers are added separately.
"""
import re, sys, json, pathlib

src, SERIES, cfgp = sys.argv[1:4]
SRC = pathlib.Path(src).read_text()
import os
OUT = pathlib.Path(os.environ.get("OUT_DIR") or pathlib.Path(__file__).resolve().parent.parent / "src/blog")
CFG = json.loads(pathlib.Path(cfgp).read_text())
SIG = ('<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching '
       'for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)')


def clean(s):
    return s.replace("\\'", "'").replace('\\"', '"').replace("\\$", "$").replace("\\...", "...").strip()


def slugify(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower().replace("&", " and ")).strip("-")


def grid_cells(block):
    """Paragraphs inside a one-column pandoc grid table (a boxed panel)."""
    paras, cur = [], []
    for line in block:
        if not line.startswith("|"):
            continue
        c = line.strip("|").strip()
        if c == "":
            if cur: paras.append(" ".join(cur)); cur = []
        else:
            cur.append(c)
    if cur: paras.append(" ".join(cur))
    return [clean(p) for p in paras]


def callout(paras):
    out = ['<div class="callout">', ""]
    for p in paras:
        m = re.fullmatch(r"\*\*(.+)\*\*", p)
        if m: out += [f"<strong>{m.group(1)}</strong>", ""]; continue
        m = re.fullmatch(r"\*(.+)\*", p)
        if m: out += [f"<em>{m.group(1)}</em>", ""]; continue
        out += [p, ""]
    out.append("</div>")
    return "\n".join(out)


FULL_RULE = re.compile(r"^\s{2}-{10,}\s*$")
COL_RULE = re.compile(r"^\s{2}-{3,}(\s+-{3,})+\s*$")


def table_html(block):
    """Pandoc simple/multiline table (indented, dashed rules) -> HTML table."""
    sep_i = next(i for i, l in enumerate(block) if COL_RULE.match(l))
    starts = [m.start() for m in re.finditer(r"-+", block[sep_i])]

    def cells(lines):
        out = []
        for k, s in enumerate(starts):
            e = starts[k + 1] if k + 1 < len(starts) else None
            out.append(" ".join(clean(l[s:e]) for l in lines if l[s:e].strip()).strip())
        return [c.replace("**", "") for c in out]

    header = cells([l for l in block[1:sep_i] if l.strip()])
    rows, cur = [], []
    for l in block[sep_i + 1:]:
        if FULL_RULE.match(l) or COL_RULE.match(l) or not l.strip():
            if cur: rows.append(cells(cur)); cur = []
        else:
            cur.append(l)
    if cur: rows.append(cells(cur))
    h = "".join(f"<th>{c}</th>" for c in header)
    b = "".join("<tr>" + "".join(f"<td><strong>{c}</strong></td>" if k == 0 else f"<td>{c}</td>"
                                 for k, c in enumerate(r)) + "</tr>" for r in rows)
    return f"<table>\n<thead><tr>{h}</tr></thead>\n<tbody>{b}</tbody>\n</table>"


def yaml_q(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


days = re.split(r"\*\*DAY (\d) • [^*]+\*\*", SRC)
for i in range(1, len(days), 2):
    n, body = days[i], days[i + 1]
    if int(n) in CFG.get("skip", []):
        continue
    lines = body.strip("\n").split("\n")
    title = clean(lines[0].strip("*"))
    dek = clean(lines[2].strip("*"))

    li = body.split("**LINKEDIN POST**", 1)[1].split("**NEWSLETTER ARTICLE**", 1)[0]
    linkedin = "\n\n".join(clean(p).replace("**", "") for p in li.strip().split("\n\n") if p.strip())

    art, tail = body.split("**NEWSLETTER ARTICLE**", 1)[1].split("***Go out and be successful.***", 1)
    art = art.strip("\n").split("\n")

    tl = tail.split("\n")
    k = next(j for j, l in enumerate(tl) if l.startswith("+---"))
    k2 = next(j for j in range(k + 1, len(tl)) if tl[j].startswith("+---"))
    label, t_title, t_line = grid_cells(tl[k:k2 + 1])[:3]
    label, t_title = label.strip("*"), t_title.strip("*")

    parts, listbuf, j = [], [], 0

    def flush():
        if listbuf:
            parts.append("\n".join(listbuf)); listbuf.clear()

    while j < len(art):
        line = art[j]
        if line.startswith("+---"):
            flush()
            k = j + 1
            while not art[k].startswith("+---"): k += 1
            parts.append(callout(grid_cells(art[j:k + 1]))); j = k + 1; continue
        if FULL_RULE.match(line):
            flush()
            k = j + 1
            while not FULL_RULE.match(art[k]): k += 1
            parts.append(table_html(art[j:k + 1])); j = k + 1; continue
        if re.match(r"^-\s+", line):
            listbuf.append("- " + clean(re.sub(r"^-\s+", "", line)))
        elif line.strip():
            flush(); parts.append(line)
        j += 1
    flush()

    # The italic opening paragraph runs into the first body paragraph
    parts = [clean(parts[0].strip("*")) + " " + clean(parts[1])] + parts[2:]

    md = []
    for p in parts:
        if p.startswith(("<div", "<table", "- ")):
            md.append(p); continue
        p = clean(p)
        m = re.fullmatch(r"\*\*([^*]+)\*\*", p)
        if m and m.group(1) == m.group(1).upper():
            md.append(f'<p class="table-title"><strong>{m.group(1)}</strong></p>'); continue
        md.append(f"## {m.group(1)}" if m else p)
    md += ["<strong><em>Go out and be successful.</em></strong>", SIG,
           f"<em>{label}</em>", f"<em>{t_title} - {t_line}</em>"]
    text = "\n\n".join(md) + "\n"
    for old, new in CFG.get("replace", {}).get(n, []):
        assert old in text, (n, old)
        text = text.replace(old, new, 1)

    desc = CFG["descriptions"][n]
    assert len(desc) <= 160 and "—" not in desc, (n, len(desc))
    words = len(re.sub(r"<[^>]+>", " ", text).split())
    slug = slugify(title)
    li_yaml = "linkedinPost: |\n" + "\n".join(("  " + l) if l else "" for l in linkedin.split("\n"))
    front = "\n".join([
        "---", f"title: {yaml_q(title)}", f"slug: {slug}", f"series: {yaml_q(SERIES)}", f"day: {n}",
        f"dek: {yaml_q(dek)}", f"description: {yaml_q(desc)}", f"date: {CFG['dates'][n]}T06:00:00.000Z",
        f"readingTime: {max(1, round(words / 220))}", li_yaml, "---"])
    (OUT / f"{slug}.md").write_text(front + "\n" + text)
    print(f"Day {n}: {slug} | {words} words | h2={text.count(chr(10) + '## ')} | "
          f"tables={text.count('<table>')} | desc {len(desc)} | teaser {label}")
