import { readFileSync } from "node:fs";
export default function () {
  const tracks = JSON.parse(readFileSync(new URL("./tracks.json", import.meta.url), "utf8"));
  return tracks.filter((t) => t.status === "live");
}
