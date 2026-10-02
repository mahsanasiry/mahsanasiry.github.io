# Personal portfolio

My developer portfolio, built with **Next.js 14**, **TypeScript** and **Tailwind CSS** and exported as a static site.

- Responsive, accessible layout (skip link, keyboard support, visible focus)
- All content in one file: `src/data/site.ts`
- Contact form (Web3Forms) with validation and a spam trap
- SEO basics: metadata, Open Graph tags, sitemap, robots.txt and structured data
- Deployed with GitHub Actions to GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

Open `src/data/site.ts` and change the lines marked `TODO`.

## Deploy

1. Create a repository named `YOUR-USERNAME.github.io` (the site is then served at `https://YOUR-USERNAME.github.io/`).
2. Push the code. In **Settings > Pages**, set **Source** to **GitHub Actions**.
3. Every push to `main` publishes the site.
