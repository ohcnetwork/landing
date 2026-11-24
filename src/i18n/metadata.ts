import type { Metadata } from 'next'
import { defaultLocale, localeInfo, locales, type Locale } from './config'
import { localizedPaths } from './paths'

/** `canonical` plus `hreflang` alternates for a page that exists in every locale. */
export function localeAlternates(
  path: string,
  locale: Locale,
): NonNullable<Metadata['alternates']> {
  const paths = localizedPaths(path)
  return {
    canonical: paths[locale],
    languages: {
      ...Object.fromEntries(
        locales.map((l) => [localeInfo[l].htmlLang, paths[l]]),
      ),
      'x-default': paths[defaultLocale],
    },
  }
}

/**
 * Page metadata with the locale-specific bits filled in: canonical URL,
 * hreflang alternates and `og:locale`. `path` is the unprefixed route of the
 * page, e.g. `/about`.
 */
export function pageMetadata({
  locale,
  path,
  ...metadata
}: Metadata & { locale: Locale; path: string }): Metadata {
  return {
    ...metadata,
    alternates: { ...localeAlternates(path, locale), ...metadata.alternates },
    ...(metadata.openGraph && {
      openGraph: {
        ...metadata.openGraph,
        locale: localeInfo[locale].ogLocale,
      },
    }),
  }
}
