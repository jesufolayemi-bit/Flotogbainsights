// Copies brand images from Wix into src/images/brand/ before each build.
// Skips files that already exist, so once they're committed to the repo Wix is no longer needed.
import { readFile, writeFile, access, mkdir } from "node:fs/promises";

const dir = "src/images/brand";
const { files } = JSON.parse(await readFile("src/_data/wixMedia.json", "utf8"));
await mkdir(dir, { recursive: true });

for (const [name, url] of Object.entries(files)) {
  const path = `${dir}/${name}`;
  try { await access(path); continue; } catch {}
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(path, Buffer.from(await res.arrayBuffer()));
    console.log(`fetched ${name}`);
  } catch (err) {
    console.warn(`could not fetch ${name} (${err.message}); add it to ${dir} manually`);
  }
}
