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

## CARE Clinic downloads

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
Only the initiating button announces status changes and errors to screen readers;
other copies still show the shared loading and error state without live announcements.
An ordinary "Download from GitHub releases" link stays available beside both
button groups without JavaScript, and also appears in errors, for API rate limits
or browser-blocked attachment handoffs. It opens the official release page rather
than assuming the browser started a download.

Run the release-selection and page/media regression checks with:

```bash
node --experimental-strip-types --test src/app/solutions/care-clinics/{release-download.test.mjs,page-content.test.mjs}
```

## CARE Clinic page media and accuracy

The Clinic page uses supplied application captures (including version 0.1.8 with
the earlier CARE Desktop name, and the 0.1.9 client screen). Keep their displayed
versions honest. The onboarding image is the actual **Get started** screen, not a
completed setup. Window chrome and stray black borders are trimmed; the setup
review's personal backup path is replaced with an opaque, labelled redaction.
No passwords, recovery keys, code sheets or patient records should be added.

Regenerate the WebP screenshots, report-template illustration and branded
1200 x 630 social image using the original supplied screenshot folder:

```bash
node scripts/generate-clinic-media.mjs "/path/to/care desktop screenshots"
```

The script checks the expected capture dimensions before cropping or redacting.
Review the resulting images whenever inputs change; do not merely update the
dimension check. Originals are never modified. Shared `/core` media is unchanged:
the page labels those videos as configuration-dependent general CARE demos,
and does not use the unrelated encounter poster as a reporting screenshot.

Accuracy was checked against CARE Clinic source at `de9d492` and the public
v0.1.9 release on 4 October 2026. The updated source catalog has only CARE
Onboarding; v0.1.9 still includes the older catalog. Its release manifest declares
notarized macOS and unsigned Windows installers. Recheck release metadata and
catalog contents when updating the dated page notes; do not infer signing from
CI capabilities. Keep visible copy, FAQ JSON-LD and SoftwareApplication features
consistent with setup, backups, device trust, plugin and update workflows.
The compact system requirements use CARE Clinic's 30 GB free-space check and
[Rancher Desktop's CPU/RAM recommendations](https://docs.rancherdesktop.io/getting-started/installation/)
(4 CPU cores and 8 GB memory). These are not measured CARE Clinic capacity
guarantees; larger workloads need additional resources.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
