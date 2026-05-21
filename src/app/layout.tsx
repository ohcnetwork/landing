import '@/styles/tailwind.css'
import type { Metadata } from 'next'

import { Bricolage_Grotesque } from 'next/font/google'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Open Healthcare Network',
    default: 'Open Healthcare Network — Digital Public Goods for Healthcare',
  },
  description:
    'Open Healthcare Network (OHC) builds FHIR-native, AI-ready Digital Public Goods for healthcare. Deploy CARE HMIS, TeleICU, and Palliative Care solutions across hospitals and states at national scale.',
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
    title: 'Open Healthcare Network — Digital Public Goods for Healthcare',
    description:
      'Building FHIR-native, AI-ready Digital Public Goods that power national health systems. Open, interoperable, and MIT-licensed — CARE HMIS, TeleICU, and Palliative Care Grid.',
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
    title: 'Open Healthcare Network — Digital Public Goods for Healthcare',
    description:
      'OHC builds open, FHIR-powered infrastructure for governments, hospitals, and innovators. CARE HMIS, TeleICU, and Palliative Care Grid — all open, interoperable, and AI-ready.',
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
    <html lang="en" className={`${bricolage.variable} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
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
