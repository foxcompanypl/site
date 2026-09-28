# foxcompany.pl

Company business card site. Astro, static output, served as a Cloudflare Worker with static assets.

## Develop

```sh
pnpm install
pnpm dev
```

## Build and preview locally

```sh
pnpm build
pnpm preview
```

`pnpm preview` runs `wrangler dev` against the built `dist/` folder, the same way the Worker serves it in production.

## Deploy

```sh
pnpm exec wrangler login
pnpm run deploy
```

`wrangler.jsonc` binds the Worker to `foxcompany.pl` and `www.foxcompany.pl` as custom domains. Before the first deploy, delete any A, AAAA or CNAME records for those hostnames in the Cloudflare DNS panel; Wrangler refuses to bind a custom domain over externally managed records.

## Content

All copy and company data live in `src/data/site.ts`. English is served at `/`, Polish at `/pl/`.
