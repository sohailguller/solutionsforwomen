# Solutions for Women website

The website for [Solutions for Women](https://www.solutionsforwomen.net), a San Francisco nonprofit that supports and connects women to resources, emotional wellness and education.

It is a static site built with [Astro](https://astro.build). It has no database, no plugins and no monthly platform fee, and it loads fast on phones.

## Working on the site

```sh
npm install
npm run dev       # local preview at http://localhost:4321
npm run build     # production build into dist/
npm run check     # type and template checks
```

Node 22 or newer is required.

## Where things live

| To change | Edit |
| --- | --- |
| Email, phone, EIN, Zoom details, PayPal link, social links, menu | `src/data/site.ts` |
| Events (Fleet Week and future events) | `src/data/events.ts` |
| Board members and bios, partner logos | `src/data/board.ts` |
| History timeline on the About page | `src/data/history.ts` |
| Gallery albums | `src/data/gallery.ts` and `src/assets/photos/gallery/` |
| Page text | `src/pages/*.astro` |
| Colours, type and spacing | `src/styles/global.css` (tokens at the top) |

### Adding an event

Add an entry to `src/data/events.ts`. It appears on the homepage and the Events page automatically. It moves off the homepage once its end date has passed and the site has been rebuilt.

### Adding a gallery album

1. Create a folder under `src/assets/photos/gallery/`, for example `vision-board-2026/`.
2. Add photos named `01.jpg`, `02.jpg` and so on. Keep them under about 2,000 px on the long edge.
3. Add the album to `src/data/gallery.ts`.

Astro creates the resized WebP versions at build time.

## Brand

The emblem is the Bay Bridge tower against a sun setting into the Bay, drawn from the organisation's original logo.

- Logo files, with lettering converted to outlines, live in `public/brand/`. They are listed with colours and usage notes at `/brand`.
- On the site, the emblem is the `src/components/Mark.astro` component. Use `ring` on dark backgrounds.
- `sfw-mark-simple.svg` is the favicon version for small sizes.

## Donations

Every Donate button goes to the organisation's PayPal donate page (`donateUrl` in `src/data/site.ts`). It takes one-time, monthly and yearly gifts by PayPal or card, and lets donors cover the fees.

To switch to a nonprofit giving platform such as Zeffy (no platform fees) or Givebutter, change `donateUrl`.

## Forms

The contact form, the monthly-updates sign-up and the volunteer sign-up are emailed to `formsTo` in `src/data/site.ts` (info@solutionsforwomen.net) through [FormSubmit](https://formsubmit.co). There's no account and no monthly fee, and it works on any host, including GitHub Pages and Netlify.

- **Activate once.** The first submission sends an activation email to info@solutionsforwomen.net. Click the link in it, and every submission after that arrives as an email.
- **Hide the address (optional).** After activating, FormSubmit emails a random alias. Replace the email address in `formsTo` with it to keep the address out of the page source.
- **Spam** is blocked by a hidden honeypot field.
- **To change where submissions go,** edit `formsTo`. The new address needs activating once too.

Forms send in the background and show a confirmation in place. Without JavaScript, they fall back to a normal post and return to `/thank-you`.

## Hosting and domain

The site is hosted on **GitHub Pages** at https://solutionsforwomen.net. Every push to `claude/solutions-women-redesign-3kz2qf` rebuilds and publishes it through `.github/workflows/pages.yml`.

- **Domain:** registered at GoDaddy, which also runs the DNS. Only the website records point to GitHub: four `A` records for `@` (`185.199.108.153` to `185.199.111.153`), and a `CNAME` for `www` pointing to `sohailguller.github.io`.
- **Email:** runs on Google Workspace through the `MX` records at GoDaddy. Never change the nameservers or the MX records. The `pay` subdomain record is also in use; leave it alone.
- **Custom domain and HTTPS:** set under **Settings, Pages** in this repository. If the certificate ever gets stuck, remove the custom domain, wait a few minutes, and add it again.
- **Moving hosts:** `vercel.json` and `netlify.toml` let the site move to Vercel or Netlify without code changes. Point the same two DNS records at the new host.
