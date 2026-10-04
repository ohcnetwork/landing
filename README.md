This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Care Clinic downloads

The Mac and Windows buttons on `/solutions/care-clinics` look up the latest
published release from `ohcnetwork/care_clinic` in the browser and request its
`-macos.dmg` or `-windows-amd64-setup.exe` asset directly. This works with the
site's static export and does not require a server or GitHub token.

Buttons for the same platform share a lock while the release is loading and for
a three-second handoff cooldown. The label and dimensions stay unchanged, with a
spinner indicating the temporary disabled state. A hidden attachment frame keeps
the clinic page open. Browsers do not expose native download start or completion
events, so the cooldown is only duplicate-click protection, not a progress
indicator. Lookup failures are shown beside the button and allow retry.

Run the release-selection checks with:

```bash
node --experimental-strip-types --test src/app/solutions/care-clinics/release-download.test.mjs
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
