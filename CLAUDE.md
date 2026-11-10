# Working on the Solutions for Women website

The person asking for changes is usually Shannon Wise, Board President of Solutions for Women. She is not technical. She will describe changes in everyday words ("add our December brunch", "put these photos up", "Deb's title changed"), may attach photos from her phone, and should never have to touch code, files, Git or GitHub.

## How to talk to her

- Plain, warm, short sentences. No jargon: never mention commits, branches, builds, components, TypeScript, Astro, pull requests or file paths unless she asks.
- If something is missing (a date, a time, a location, which album a photo belongs to), ask her one simple question at a time, and suggest a likely answer she can confirm.
- Before publishing, tell her in one or two sentences what will change on the site, and ask "Shall I publish this to the website?" Publish only after she says yes, or if her message already said to publish.
- After publishing, tell her the site updates in about two minutes and give her the page link, for example https://solutionsforwomen.net/events.
- If a request would change the design, layout, colours, fonts or navigation, or add a whole new page, say it is a bigger change and suggest she check with her web helper first.
- Never delete content (events, board members, photos, pages) without asking her to confirm first.

## Where things live

| She asks about | Edit |
| --- | --- |
| Events (add, change, remove) | `src/data/events.ts` (event photos and flyers go in `src/assets/photos/events/`) |
| Gallery photos and albums | `src/data/gallery.ts` and `src/assets/photos/gallery/<album-id>/` |
| Board members and bios | `src/data/board.ts` (headshots go in `src/assets/photos/board/<slug>.jpg`) |
| Partners | `partners` in `src/data/board.ts` and `src/assets/photos/partners/` |
| Email, phone, Zoom support-group details, donate link, social links | `src/data/site.ts` |
| History timeline (About page) | `src/data/history.ts` |
| Wording on a particular page | the matching file in `src/pages/` |

Any page reads its photos by key, which is the path under `src/assets/photos/` without the extension (see `src/lib/photos.ts`).

### Events

- Each event needs `slug` (lowercase-with-dashes, unique), `title`, `start` and `end` in Pacific time ISO format, a human `dateLabel` and `timeLabel`, `location`, a one-sentence `summary`, `details` paragraphs, an `image` key with descriptive `imageAlt`, and `volunteer` (true shows the volunteer sign-up form).
- Upcoming events show on the homepage and the Events page automatically. They move off once their end date passes and the site is rebuilt.
- Every event gets its own page at `/events/<slug>`.

### Photos she attaches

- Attached images are saved as files in this session. Copy them into the right folder under `src/assets/photos/`, converting to JPEG.
- iPhone HEIC photos are common: convert them (for example with Pillow plus `pillow-heif`).
- Fix rotation (EXIF) and resize so the long edge is at most 1800 px, at quality 80. Remove location data.
- Gallery albums use files named `01.jpg`, `02.jpg` and so on. To add an album, create the folder and add an entry to `albums` in `src/data/gallery.ts`, newest album first.
- Write short, factual alt text describing what is in the photo.

## Rules for the site

- Keep the existing design system in `src/styles/global.css`: warm paper and ink colours, Newsreader headings, Libre Franklin body text, square buttons.
- Don't add gradients, emoji, all-caps or letter-spaced labels, pill-shaped buttons, coloured card borders, icon feature grids, stock photos or AI-generated images.
- Keep her wording. Fix obvious typos, but don't rewrite her text into marketing copy.
- Don't change DNS, the domain, `CNAME`, `.github/workflows/`, `astro.config.mjs` redirects, the PayPal link or the form setup unless the web helper asks.

## Before publishing, every time

1. `npm install` if `node_modules` is missing.
2. `npx astro check`, which must report 0 errors.
3. `npm run build`, which must succeed.
4. Look at the changed page if you can (for example with Playwright against `npx astro preview`), on desktop and phone widths.

If any step fails, fix it before publishing. If you can't, tell her plainly that the change couldn't go live yet, and that her web helper can take a look.

## Publishing

The live site, https://solutionsforwomen.net, is hosted on GitHub Pages. It rebuilds automatically whenever `main` changes, and the update is live within about two minutes.

To publish: commit with a clear message describing the content change (for example "Add December brunch event"), then get the change onto `main`. Push to `main` directly if this session allows it, otherwise open a pull request into `main` and merge it. Once the deploy has had time to finish, check that the live page shows the change.
