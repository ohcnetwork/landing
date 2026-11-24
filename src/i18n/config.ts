/**
 * Locale registry. Everything locale-related (routing, <html lang>, hreflang,
 * Open Graph, the language switcher) reads from here.
 *
 * English is the default locale and is served without a prefix (`/about`).
 * Every other locale is served under its prefix (`/pt/about`).
 */
export const locales = ['en', 'pt', 'dz', 'hi'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeInfo: Record<
  Locale,
  {
    /** Language name in its own script, shown in the language switcher. */
    nativeName: string
    englishName: string
    /** BCP 47 tag for `<html lang>` and `hreflang`. */
    htmlLang: string
    /** Open Graph `og:locale` value. */
    ogLocale: string
  }
> = {
  en: {
    nativeName: 'English',
    englishName: 'English',
    htmlLang: 'en',
    ogLocale: 'en_US',
  },
  pt: {
    nativeName: 'Português',
    englishName: 'Portuguese',
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
  },
  dz: {
    nativeName: 'རྫོང་ཁ',
    englishName: 'Dzongkha',
    htmlLang: 'dz',
    ogLocale: 'dz_BT',
  },
  hi: {
    nativeName: 'हिन्दी',
    englishName: 'Hindi',
    htmlLang: 'hi',
    ogLocale: 'hi_IN',
  },
}

/** Locales that get a URL prefix (all but the default). */
export const prefixedLocales = locales.filter(
  (locale) => locale !== defaultLocale,
)

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === 'string' && (locales as readonly string[]).includes(value)
  )
}

/** Time zone used when formatting dates, so builds are machine-independent. */
export const timeZone = 'UTC'
