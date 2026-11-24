import { RootDocument, rootMetadata } from '@/components/root-document'
import { prefixedLocales } from '@/i18n/config'
import { initLocale, resolveLocale, type LocaleParams } from '@/i18n/server'
import type { Metadata } from 'next'

// Prefixed locales only; the default locale is served by the (default) group.
export const dynamicParams = false

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<LocaleParams>
}): Promise<Metadata> {
  return rootMetadata(await resolveLocale(params))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<LocaleParams>
}>) {
  const locale = await initLocale(params)

  return <RootDocument locale={locale}>{children}</RootDocument>
}
