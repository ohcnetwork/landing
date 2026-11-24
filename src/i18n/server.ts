import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { defaultLocale, isLocale, type Locale } from './config'

/**
 * Route params of every page and layout. `locale` is set for prefixed locales
 * (`/pt/...`) and absent for the default locale, whose routes live in the
 * `(default)` route group and re-export the `[locale]` pages.
 */
export type LocaleParams = { locale?: string }

export type PageProps<Params extends object = object> = {
  params: Promise<Params & LocaleParams>
}

/** Resolve the locale of a page or layout without side effects. */
export async function resolveLocale(
  params: Promise<LocaleParams>,
): Promise<Locale> {
  const { locale } = await params
  if (locale === undefined) return defaultLocale
  if (!isLocale(locale)) notFound()
  return locale
}

/**
 * Resolve the locale and register it for static rendering. Call this first in
 * every page and layout component, before any translation call.
 */
export async function initLocale(
  params: Promise<LocaleParams>,
): Promise<Locale> {
  const locale = await resolveLocale(params)
  setRequestLocale(locale)
  return locale
}
