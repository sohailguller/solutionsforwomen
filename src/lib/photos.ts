import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/**/*.{jpg,png}',
  { eager: true },
);

const byKey = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const key = path.replace('/src/assets/photos/', '').replace(/\.(jpg|png)$/, '');
  byKey.set(key, mod.default);
}

/** Look up a photo by its path under src/assets/photos, without extension. */
export function photo(key: string): ImageMetadata {
  const img = byKey.get(key);
  if (!img) throw new Error(`Unknown photo: ${key}`);
  return img;
}

/** All photos in a folder, sorted by filename. */
export function folder(prefix: string): { key: string; src: ImageMetadata }[] {
  return [...byKey.entries()]
    .filter(([k]) => k.startsWith(prefix + '/'))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, src]) => ({ key, src }));
}
