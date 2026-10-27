import fs from "node:fs";
import path from "node:path";

// Read at build time so images dropped into public/images/silsiganmetro show up without code changes.
const dir = path.join(process.cwd(), "public/images/silsiganmetro");
const imagePattern = /\.(png|jpe?g|webp)$/i;

export function getSubwayIcon() {
  const icon = ["icon.png", "icon.jpg", "icon.webp"].find((name) => fs.existsSync(path.join(dir, name)));
  return icon ? `/images/silsiganmetro/${icon}` : null;
}

export function getSubwayScreenshots() {
  const shots = path.join(dir, "screenshots");
  if (!fs.existsSync(shots)) return [];
  return fs
    .readdirSync(shots)
    .filter((name) => imagePattern.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((name) => `/images/silsiganmetro/screenshots/${name}`);
}
