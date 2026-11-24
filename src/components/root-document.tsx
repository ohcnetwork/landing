import '@/styles/tailwind.css'

import { localeInfo, type Locale } from '@/i18n/config'
import { baseClientNamespaces, pickNamespaces } from '@/i18n/messages'
import { localizePath } from '@/i18n/paths'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import {
  Bricolage_Grotesque,
  Noto_Sans_Devanagari,
  Noto_Serif_Tibetan,
} from 'next/font/google'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
})

// Script fallbacks for Hindi and Dzongkha. They sit after the Latin fonts in
// the font stacks and are only downloaded when the page contains those scripts.
const devanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  preload: false,
  variable: '--font-devanagari',
})

const tibetan = Noto_Serif_Tibetan({
  subsets: ['tibetan'],
  display: 'swap',
  preload: false,
  variable: '--font-tibetan',
})

/** Site-wide metadata, shared by the root layouts and the 404 page. */
export async function rootMetadata(locale: Locale): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'common.meta' })

  return {
    metadataBase: new URL('https://ohc.network'),
    title: {
      template: '%s - Open Healthcare Network',
      default: t('title'),
    },
    description: t('description'),
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
      url: `https://ohc.network${localizePath('/', locale)}`,
      locale: localeInfo[locale].ogLocale,
      title: t('title'),
      description: t('ogDescription'),
      images: [
        {
          url: '/og/ohc-landing-cover.png',
          width: 1920,
          height: 1080,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ohcnetwork',
      title: t('title'),
      description: t('twitterDescription'),
      images: ['/og/ohc-landing-cover.png'],
    },
  }
}

/**
 * The `<html>` document for every page. Callers must register the locale
 * with `initLocale()` / `setRequestLocale()` before rendering it.
 */
export async function RootDocument({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  const messages = await getMessages()

  return (
    <html
      lang={localeInfo[locale].htmlLang}
      className={`${bricolage.variable} ${devanagari.variable} ${tibetan.variable} antialiased`}
    >
      {/* Rendered only by root layouts, where <head> is the App Router way. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
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
      <body className="text-gray-950 antialiased">
        <NextIntlClientProvider
          messages={pickNamespaces(messages, baseClientNamespaces)}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
