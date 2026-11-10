import '@/styles/tailwind.css'
import type { Metadata } from 'next'

import localFont from 'next/font/local'

const bricolage = localFont({
  src: '../../public/fonts/bricolage-grotesque-latin-variable.woff2',
  weight: '200 800',
  style: 'normal',
  display: 'swap',
  variable: '--font-bricolage',
})

const inter = localFont({
  src: '../../public/fonts/inter-latin-variable.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ohc.network'),
  title: {
    template: '%s - Open Healthcare Network',
    default:
      'Open Healthcare Network Foundation - Open Healthcare Infrastructure',
  },
  description:
    'Open Healthcare Network Foundation stewards CARE and related open-source Digital Public Goods for interoperable, self-hostable, standards-based healthcare systems without vendor lock-in.',
  keywords:
    'Digital Public Goods, Open Healthcare Network, CARE HMIS, FHIR R5, Healthcare Interoperability, ABDM, TeleICU, AI Scribe, Open Source Health Infrastructure, MIT License',
  authors: [{ name: 'Open Healthcare Network (OHC)' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'Open Healthcare Network',
    url: 'https://ohc.network/',
    title:
      'Open Healthcare Network Foundation - Open Healthcare Infrastructure',
    description:
      'A neutral foundation stewarding CARE and related open-source Digital Public Goods for healthcare.',
    images: [
      {
        url: '/og/ohc-landing-cover.png',
        width: 1920,
        height: 1080,
        alt: 'Open Healthcare Network — Digital Public Goods for Healthcare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ohcnetwork',
    title:
      'Open Healthcare Network Foundation - Open Healthcare Infrastructure',
    description:
      'OHC Foundation stewards open, standards-based digital public infrastructure for healthcare.',
    images: ['/og/ohc-landing-cover.png'],
  },
  alternates: {
    canonical: 'https://ohc.network/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} antialiased`}
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Open Healthcare Network Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
