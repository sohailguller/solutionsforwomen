// Prefix root-relative links in the built HTML with BASE_PATH, for hosting
// under a sub-path such as GitHub Pages (username.github.io/repo).
// Astro already prefixes its own asset URLs; this handles hand-written links.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
if (!base) process.exit(0);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });

let count = 0;
for (const file of walk('dist')) {
  const html = readFileSync(file, 'utf8');
  const out = html.replace(/\b(href|src|action)="\/(?!\/)([^"]*)"/g, (m, attr, rest) => {
    if (('/' + rest).startsWith(base + '/') || '/' + rest === base) return m;
    count++;
    return `${attr}="${base}/${rest}"`;
  });
  if (out !== html) writeFileSync(file, out);
}
console.log(`rebase: prefixed ${count} links with ${base}`);
