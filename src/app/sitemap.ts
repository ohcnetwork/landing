import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://ohc.network'
const lastModified = new Date('2026-05-27')

const routes = [
  ['', 1],
  ['/about', 0.8],
  ['/about/team', 0.7],
  ['/about/team/foundation', 0.7],
  ['/foundation/governance', 0.8],
  ['/about/security-compliance', 0.7],
  ['/product/care-core', 0.95],
  ['/product/care-ai', 0.95],
  ['/product/apps-integrations', 0.85],
  ['/product/standards-architecture', 0.85],
  ['/solutions', 0.8],
  ['/solutions/hospital-management', 0.95],
  ['/solutions/teleicu', 0.8],
  ['/solutions/palliative-care', 0.8],
  ['/solutions/care-clinics', 0.7],
  ['/impact', 0.85],
  ['/network', 0.75],
  ['/ecosystem/implementation-partners', 0.75],
  ['/ecosystem/clinicians', 0.7],
  ['/developers', 0.8],
  ['/support', 0.75],
  ['/supporters', 0.6],
  ['/blog', 0.75],
  ['/blog/why-open-healthcare-needs-a-foundation', 0.7],
  ['/blog/ai-ready-not-ai-hyped', 0.75],
  ['/blog/care-core-as-operating-layer', 0.7],
  ['/press-media', 0.65],
  ['/faq', 0.65],
  ['/careers', 0.45],
  ['/contact', 0.65],
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(([route, priority]) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority,
  }))
}
