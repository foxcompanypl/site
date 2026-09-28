# foxcompany.pl

Company business card site. Astro, static output, served as a Cloudflare Worker with static assets.

## Develop

```sh
npm install
npm run dev
```

## Build and preview locally

```sh
npm run build
npm run preview
```

`npm run preview` runs `wrangler dev` against the built `dist/` folder, the same way the Worker serves it in production.

## Deploy

```sh
npx wrangler login
npm run deploy
```

`wrangler.jsonc` binds the Worker to `foxcompany.pl` and `www.foxcompany.pl` as custom domains. On the first deploy Wrangler asks to replace the existing DNS records for those hostnames; confirm to move traffic to the Worker.

## Content

All copy and company data live in `src/data/site.ts`. English is served at `/`, Polish at `/pl/`.
