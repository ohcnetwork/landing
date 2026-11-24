import { defaultLocale, isLocale, locales, type Locale } from './config'

/**
 * Whether an href points at a page on this site that has localized versions.
 * External URLs, protocol links (mailto:, tel:), in-page anchors and static
 * files such as `/funding.json` or `/blog/feed.xml` are left untouched.
 */
export function isLocalizableHref(href: string): boolean {
  if (!href.startsWith('/') || href.startsWith('//')) return false
  const pathname = href.split(/[?#]/, 1)[0]
  return !/\/[^/]+\.[^/]+$/.test(pathname)
}

/**
 * Add the locale prefix to an internal path: `('/about', 'pt')` → `/pt/about`.
 * The default locale is unprefixed. Query strings and hashes are preserved.
 */
export function localizePath(href: string, locale: Locale): string {
  if (locale === defaultLocale || !isLocalizableHref(href)) return href
  if (href === '/' || href.startsWith('/?') || href.startsWith('/#')) {
    return `/${locale}${href.slice(1)}`
  }
  return `/${locale}${href}`
}

/**
 * Split a pathname into its locale and the locale-independent path:
 * `/pt/about` → `{ locale: 'pt', path: '/about' }`.
 */
export function splitLocaleFromPath(pathname: string): {
  locale: Locale
  path: string
} {
  const [, first, ...rest] = pathname.split('/')
  if (isLocale(first) && first !== defaultLocale) {
    return { locale: first, path: `/${rest.join('/')}` }
  }
  return { locale: defaultLocale, path: pathname || '/' }
}

/** Every localized URL of a path, keyed by locale. */
export function localizedPaths(path: string): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, localizePath(path, locale)]),
  ) as Record<Locale, string>
}
