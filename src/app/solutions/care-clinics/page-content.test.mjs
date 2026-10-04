import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import sharp from 'sharp'

const page = (
  await readFile(new URL('./page.tsx', import.meta.url), 'utf8')
).replace(/\s+/g, ' ')
const media = new URL('../../../../public/care-desktop/', import.meta.url)

test('keeps clinic setup, catalog and operating requirements explicit', () => {
  for (const required of [
    'save and verify the PEM',
    'Six single-use codes reset',
    'healthy, running clinic',
    'frontend-only changes sync registrations',
    'arbitrary',
    'database migrations',
    'Later queues a prepared update',
    'not independent',
    'macOS notarized; Windows unsigned',
    'CARE Clinic itself',
    'updated source catalog',
    'v0.1.9',
    'System requirements',
    'Recommended: 8 GB RAM, 4-core processor and 30 GB free storage.',
  ]) {
    assert.ok(
      page.includes(required),
      `Missing important qualification: ${required}`,
    )
  }
  for (const obsolete of [
    'catalog of three',
    'daily summary for the owner',
    'nothing rebuilt in spreadsheets',
    'Everything inside.',
    '02:00',
    'signed through',
    '<span>Advanced</span>',
  ]) {
    assert.ok(!page.includes(obsolete), `Obsolete claim: ${obsolete}`)
  }
})

test('uses honest media and release links in both download groups', () => {
  assert.equal((page.match(/href=\{CLINIC_RELEASES_URL\}/g) ?? []).length, 2)
  assert.ok(page.includes("image: '/care-desktop/onboarding.webp'"))
  assert.ok(page.includes("poster: '/care-desktop/report-templates.webp'"))
  assert.ok(!page.includes('/core/posters/dynamic_reports.jpg'))
  assert.ok(page.includes('General CARE demo'))
  assert.ok(page.includes('earlier CARE Desktop'))
  assert.ok(page.includes('faqs.map'))
})

test('published screenshots have the reviewed, border-trimmed dimensions', async () => {
  for (const [file, width, height] of [
    ['control-panel', 2296, 1606],
    ['setup-review', 2296, 1606],
    ['plugins', 2296, 1606],
    ['updates', 2296, 1606],
    ['first-run', 2190, 1370],
    ['client-connect', 2188, 1370],
    ['onboarding', 2070, 1398],
  ]) {
    const input = await readFile(new URL(`${file}.webp`, media))
    const metadata = await sharp(input).metadata()
    assert.equal(metadata.width, width, file)
    assert.equal(metadata.height, height, file)
    assert.equal(metadata.format, 'webp', file)
    // The removed black window edges are neutral dark pixels, not green UI.
    const { data, info } = await sharp(input)
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })
    for (const [x, y] of [
      [0, 0],
      [width - 1, 0],
      [0, height - 1],
      [width - 1, height - 1],
    ]) {
      const rgb = [
        ...data.subarray(
          (y * width + x) * info.channels,
          (y * width + x) * info.channels + 3,
        ),
      ]
      assert.ok(
        Math.max(...rgb) > 70 || Math.max(...rgb) - Math.min(...rgb) > 15,
        `${file}: black corner at ${x},${y}`,
      )
    }
  }
})

test('social preview is the expected social-card size', async () => {
  const input = await readFile(new URL('../og/care-desktop.jpg', media))
  const metadata = await sharp(input).metadata()
  assert.equal(metadata.width, 1200)
  assert.equal(metadata.height, 630)
})
