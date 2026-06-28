import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const root = process.cwd()
const postsDirectory = path.join(root, 'content/blog')
const coversDirectory = path.join(root, 'public/blog/covers')

const palettes = [
  {
    bg: '#f7f3e8',
    ink: '#12312c',
    muted: '#5f6f69',
    primary: '#0b6b55',
    secondary: '#d66f3d',
    accent: '#e9b44c',
    wash: '#e2eee7',
  },
  {
    bg: '#f3f8f6',
    ink: '#1f2933',
    muted: '#63736d',
    primary: '#0f766e',
    secondary: '#3f82f6',
    accent: '#f0b429',
    wash: '#dbeafe',
  },
  {
    bg: '#fbf7f1',
    ink: '#263238',
    muted: '#6a6f64',
    primary: '#2f855a',
    secondary: '#b45309',
    accent: '#0ea5a4',
    wash: '#f4e7d1',
  },
  {
    bg: '#f4f6fb',
    ink: '#1f2a44',
    muted: '#667085',
    primary: '#2563eb',
    secondary: '#0f766e',
    accent: '#d97706',
    wash: '#dff2ea',
  },
  {
    bg: '#f8f8f2',
    ink: '#202a24',
    muted: '#68746e',
    primary: '#166534',
    secondary: '#be5b45',
    accent: '#2f80ed',
    wash: '#eef1d8',
  },
]

const motifs = ['grid', 'route', 'modules', 'dashboard', 'clinical']

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function escapeYaml(value) {
  return String(value).replaceAll('"', '\\"')
}

function hash(value) {
  let total = 0
  for (let index = 0; index < value.length; index++) {
    total = (total * 31 + value.charCodeAt(index)) >>> 0
  }
  return total
}

function wrapText(text, maxCharacters) {
  const words = text.split(/\s+/)
  const lines = []
  let line = ''

  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (next.length > maxCharacters && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }

  if (line) lines.push(line)
  return lines.slice(0, 4)
}

function shortDate(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function motifSvg(type, palette, seed) {
  const jitter = (index, range = 36) =>
    ((seed >> index % 12) % range) - range / 2

  if (type === 'route') {
    const points = [
      [980, 240 + jitter(1)],
      [1100, 310 + jitter(2)],
      [1040, 440 + jitter(3)],
      [1200, 520 + jitter(4)],
      [1120, 675 + jitter(5)],
      [1320, 735 + jitter(6)],
    ]

    const pathData = points
      .map(([x, y], index) => `${index === 0 ? 'M' : 'L'} ${x} ${y}`)
      .join(' ')

    return `
      <path d="${pathData}" fill="none" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
      <path d="${pathData}" fill="none" stroke="${palette.ink}" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 16" opacity="0.42"/>
      ${points
        .map(
          ([x, y], index) => `
          <circle cx="${x}" cy="${y}" r="${index === 0 || index === points.length - 1 ? 22 : 15}" fill="${index % 2 ? palette.accent : palette.primary}"/>
          <circle cx="${x}" cy="${y}" r="6" fill="${palette.bg}"/>`,
        )
        .join('')}
    `
  }

  if (type === 'modules') {
    return Array.from({ length: 8 }, (_, index) => {
      const x = 930 + (index % 2) * 220
      const y = 230 + Math.floor(index / 2) * 125
      const color = [palette.primary, palette.secondary, palette.accent][
        index % 3
      ]
      return `
        <rect x="${x}" y="${y}" width="172" height="78" rx="18" fill="${index % 2 ? '#ffffff' : palette.wash}" stroke="${color}" stroke-width="3"/>
        <rect x="${x + 22}" y="${y + 23}" width="82" height="10" rx="5" fill="${color}" opacity="0.85"/>
        <rect x="${x + 22}" y="${y + 45}" width="126" height="8" rx="4" fill="${palette.ink}" opacity="0.22"/>`
    }).join('')
  }

  if (type === 'dashboard') {
    return `
      <rect x="915" y="215" width="440" height="510" rx="28" fill="#ffffff" stroke="${palette.ink}" stroke-width="3" opacity="0.94"/>
      <rect x="955" y="260" width="150" height="116" rx="18" fill="${palette.primary}" opacity="0.95"/>
      <rect x="1130" y="260" width="180" height="116" rx="18" fill="${palette.wash}" stroke="${palette.secondary}" stroke-width="3"/>
      <rect x="955" y="410" width="355" height="40" rx="20" fill="${palette.ink}" opacity="0.1"/>
      <rect x="955" y="485" width="112" height="150" rx="18" fill="${palette.accent}" opacity="0.82"/>
      <rect x="1088" y="525" width="98" height="110" rx="18" fill="${palette.secondary}" opacity="0.82"/>
      <rect x="1208" y="455" width="102" height="180" rx="18" fill="${palette.primary}" opacity="0.82"/>
      <path d="M965 690 C1030 640 1090 704 1145 646 C1208 580 1260 620 1322 552" fill="none" stroke="${palette.secondary}" stroke-width="7" stroke-linecap="round"/>
    `
  }

  if (type === 'clinical') {
    return `
      <rect x="940" y="220" width="390" height="520" rx="34" fill="#ffffff" stroke="${palette.ink}" stroke-width="3" opacity="0.95"/>
      <path d="M1118 308 h64 v64 h64 v64 h-64 v64 h-64 v-64 h-64 v-64 h64 z" fill="${palette.primary}" opacity="0.94"/>
      <rect x="995" y="570" width="280" height="14" rx="7" fill="${palette.ink}" opacity="0.17"/>
      <rect x="995" y="612" width="225" height="14" rx="7" fill="${palette.secondary}" opacity="0.85"/>
      <rect x="995" y="654" width="250" height="14" rx="7" fill="${palette.ink}" opacity="0.17"/>
      <circle cx="1015" cy="310" r="42" fill="${palette.accent}" opacity="0.9"/>
      <circle cx="1015" cy="310" r="14" fill="${palette.bg}"/>
    `
  }

  return `
    <g opacity="0.75">
      ${Array.from({ length: 10 }, (_, row) =>
        Array.from({ length: 8 }, (_, column) => {
          const x = 930 + column * 58
          const y = 235 + row * 54
          const fill =
            (row + column) % 4 === 0 ? palette.secondary : palette.primary
          return `<rect x="${x}" y="${y}" width="34" height="34" rx="9" fill="${fill}" opacity="${0.18 + ((row + column) % 3) * 0.14}"/>`
        }).join(''),
      ).join('')}
    </g>
    <path d="M910 705 C1020 610 1125 760 1240 640 C1295 584 1325 580 1370 615" fill="none" stroke="${palette.accent}" stroke-width="9" stroke-linecap="round"/>
  `
}

function createCover({ slug, title, excerpt, publishedAt, categories }) {
  const seed = hash(slug)
  const palette = palettes[seed % palettes.length]
  const motif = motifs[seed % motifs.length]
  const titleLines = wrapText(title, 18)
  const category = categories?.[0]?.title || 'CARE'
  const date = shortDate(publishedAt)
  const eyebrow = `${category.toUpperCase()} / OHC ARCHIVE`

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)}</title>
  <desc id="desc">${escapeXml(excerpt || `${title} cover image`)}</desc>
  <defs>
    <pattern id="microgrid-${slug}" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M44 0H0V44" fill="none" stroke="${palette.ink}" stroke-width="1" opacity="0.08"/>
    </pattern>
    <linearGradient id="wash-${slug}" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="${palette.bg}"/>
      <stop offset="0.58" stop-color="${palette.wash}"/>
      <stop offset="1" stop-color="#ffffff"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#wash-${slug})"/>
  <rect width="1600" height="1000" fill="url(#microgrid-${slug})"/>
  <path d="M0 780 C230 700 320 860 505 760 C700 656 720 515 930 565 C1168 621 1258 448 1600 498 V1000 H0 Z" fill="${palette.primary}" opacity="0.08"/>
  <rect x="84" y="84" width="1432" height="832" rx="44" fill="none" stroke="${palette.ink}" stroke-width="3" opacity="0.14"/>
  <text x="140" y="180" fill="${palette.primary}" font-family="'Switzer', 'Inter', 'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="2">${escapeXml(eyebrow)}</text>
  <text x="140" y="752" fill="${palette.muted}" font-family="'Switzer', 'Inter', 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="600">${escapeXml(date)}</text>
  <text x="140" y="812" fill="${palette.ink}" font-family="'Switzer', 'Inter', 'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="3">CARE / OPEN HEALTHCARE NETWORK</text>
  <g font-family="'Switzer', 'Inter', 'Helvetica Neue', Arial, sans-serif" font-size="${titleLines.length > 3 ? 74 : 84}" font-weight="700" letter-spacing="0" fill="${palette.ink}">
    ${titleLines
      .map(
        (line, index) =>
          `<text x="140" y="${310 + index * (titleLines.length > 3 ? 86 : 96)}">${escapeXml(line)}</text>`,
      )
      .join('\n    ')}
  </g>
  <g transform="translate(${58 + (seed % 19) - 8} ${(seed % 23) - 10})">
    <circle cx="1265" cy="220" r="116" fill="${palette.accent}" opacity="0.13"/>
    <rect x="870" y="174" width="560" height="610" rx="52" fill="#ffffff" opacity="0.46"/>
    ${motifSvg(motif, palette, seed)}
  </g>
  <path d="M140 676 H615" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round"/>
  <path d="M140 704 H455" stroke="${palette.accent}" stroke-width="8" stroke-linecap="round" opacity="0.9"/>
</svg>
`
}

function upsertMainImage(raw, slug, title) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n/)
  if (!match) return raw

  const block = `mainImage:\n  src: "/blog/covers/${slug}.svg"\n  alt: "${escapeYaml(`${title} cover illustration`)}"`
  let frontmatter = match[1].replace(/\n?mainImage:\n(?:  .+\n?)*/m, '\n')
  frontmatter = frontmatter.replace(/\n{3,}/g, '\n\n').trimEnd()

  if (frontmatter.includes('\nfeatured:')) {
    frontmatter = frontmatter.replace(/\nfeatured:/, `\n${block}\nfeatured:`)
  } else {
    frontmatter = `${frontmatter}\n${block}`
  }

  return `---\n${frontmatter}\n---\n${raw.slice(match[0].length)}`
}

fs.mkdirSync(coversDirectory, { recursive: true })

const files = fs
  .readdirSync(postsDirectory)
  .filter((fileName) => fileName.endsWith('.md'))
  .sort()

for (const fileName of files) {
  const slug = fileName.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, fileName)
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(raw)
  const svg = createCover({
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || '',
    publishedAt: data.publishedAt || data.date,
    categories: data.categories || [],
  })

  fs.writeFileSync(
    path.join(coversDirectory, `${slug}.svg`),
    svg.replace(/[ \t]+$/gm, ''),
  )
  fs.writeFileSync(fullPath, upsertMainImage(raw, slug, data.title || slug))
}

console.log(
  `Generated ${files.length} blog covers in ${path.relative(root, coversDirectory)}`,
)
