import path from 'node:path'
import sharp from 'sharp'

const source = process.argv[2]
if (!source) {
  throw new Error(
    'Usage: node scripts/generate-clinic-media.mjs <screenshot-folder>',
  )
}

const screenshots = [
  ['Overview.png', 'control-panel', 2304, 1710, 64, 40],
  ['Welcome.png', 'first-run', 2198, 1456, 62, 24],
  ['Setup Review.png', 'setup-review', 2304, 1710, 64, 40],
  ['Client setup screen.png', 'client-connect', 2196, 1398, 4, 24],
  ['Plugins.png', 'plugins', 2304, 1710, 64, 40],
  ['Updates.png', 'updates', 2304, 1710, 64, 40],
  ['onboarding plugin.png', 'onboarding', 2070, 1398, 0, 0],
]

for (const [filename, output, width, height, top, bottom] of screenshots) {
  let image = sharp(path.join(source, filename))
  const metadata = await image.metadata()
  // Fixed crop/redaction coordinates must never silently apply to a new capture.
  if (metadata.width !== width || metadata.height !== height) {
    throw new Error(
      `Unexpected dimensions for ${filename}; review crop and redaction first`,
    )
  }
  if (output === 'setup-review') {
    const redaction = Buffer.from(
      '<svg width="790" height="48"><rect width="790" height="48" fill="#ffffff"/><text x="8" y="33" font-family="sans-serif" font-size="25" fill="#64746d">[Personal backup path hidden]</text></svg>',
    )
    // Opaque replacement, not blur: no personal path pixels survive publication.
    image = sharp(
      await image
        .composite([{ input: redaction, left: 1130, top: 615 }])
        .png()
        .toBuffer(),
    )
  }
  const side = output === 'onboarding' ? 0 : 4
  await image
    .extract({
      left: side,
      top,
      width: width - side * 2,
      height: height - top - bottom,
    })
    .webp({ quality: 86 })
    .toFile(`public/care-desktop/${output}.webp`)
}

await sharp(
  Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#031f17"/><stop offset="1" stop-color="#03543f"/></linearGradient></defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <circle cx="1090" cy="100" r="280" fill="#31c48d" opacity=".08"/>
    <g fill="#84e1bc"><rect x="72" y="71" width="18" height="54" rx="3"/><rect x="54" y="89" width="54" height="18" rx="3"/></g>
    <g font-family="Arial, sans-serif">
      <text x="132" y="114" font-size="40" font-weight="700" fill="#fff">CARE Clinic</text>
      <text x="64" y="250" font-size="68" font-weight="700" fill="#fff">Free clinic software.</text>
      <text x="64" y="335" font-size="68" font-weight="700" fill="#84e1bc">Your data. Your control.</text>
      <text x="68" y="427" font-size="28" fill="#bdf0d9">Open source. On your clinic's own computer.</text>
      <text x="68" y="552" font-size="23" fill="#bdf0d9">Mac + Windows</text>
      <text x="932" y="552" font-size="23" fill="#bdf0d9">ohc.network</text>
    </g>
  </svg>
`),
)
  .jpeg({ quality: 90 })
  .toFile('public/og/care-desktop.jpg')

await sharp(
  Buffer.from(`
  <svg width="1920" height="1268" xmlns="http://www.w3.org/2000/svg">
    <rect width="1920" height="1268" fill="#e8f4ee"/>
    <rect x="220" y="140" width="1480" height="988" rx="36" fill="#fff"/>
    <g font-family="Arial, sans-serif">
      <text x="320" y="270" font-size="30" letter-spacing="5" fill="#046c4e">REPORT TEMPLATES</text>
      <text x="320" y="390" font-size="66" font-weight="700" fill="#111827">Reports shaped by your setup.</text>
      <text x="320" y="520" font-size="38" fill="#5b6660">Choose templates during CARE Onboarding.</text>
      <path d="M320 600H1600" stroke="#dfe6e2" stroke-width="3"/>
      <text x="320" y="710" font-size="42" fill="#014737">Configured templates</text>
      <text x="320" y="810" font-size="42" fill="#014737">Recorded clinical data</text>
      <text x="320" y="910" font-size="42" fill="#014737">Available reports depend on configuration</text>
      <text x="320" y="1040" font-size="28" fill="#5b6660">Illustration, not an application screenshot</text>
    </g>
  </svg>
`),
)
  .webp({ quality: 86 })
  .toFile('public/care-desktop/report-templates.webp')
