# Muhammad Abdullah — Portfolio (Next.js)

A rebuild of the old Bootstrap portfolio using Next.js 16 (App Router), TypeScript,
Tailwind CSS v4, and Framer Motion for scroll-reveal animations.

## What to edit first

Almost everything on the page is driven from one file:

- `src/lib/data.ts` — name, tagline, skills, experience, education, and projects.
  Anything marked `TODO` should be replaced with your real details (GitHub URL,
  resume link, and real project write-ups especially — the Projects section
  currently has clearly-marked placeholder cards).

Components live in `src/components/` — each section (`Hero.tsx`, `About.tsx`,
`Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `Contact.tsx`, `Footer.tsx`) is
self-contained and reads from `data.ts`.

The contact form in `Contact.tsx` is UI-only right now (no email actually
sends). Fastest way to make it work without writing a backend:
1. Create a free form endpoint at [Formspree](https://formspree.io) or
   [Web3Forms](https://web3forms.com).
2. Point the form's `onSubmit` (or its `action`) at that endpoint.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Deploying

Push this folder to a GitHub repo, then import it at
[vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js, so no
config is needed. Every push to `main` redeploys automatically.
