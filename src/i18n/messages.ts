import { defaultLocale, type Locale } from './config'
import en from './en-catalog.generated'

export type Messages = typeof en
export type Namespace = keyof Messages

/**
 * Namespaces that client components read with `useTranslations()`. Only these
 * are serialized into every page; everything else stays on the server.
 * Pages can pass extra namespaces to a subtree with `<ClientMessages>`.
 */
export const baseClientNamespaces = ['nav'] as const satisfies Namespace[]

const cache = new Map<Locale, Promise<Messages>>()

/**
 * Load the catalog for a locale. Translations live in
 * `src/messages/<locale>/<namespace>.json` and mirror the English files; any
 * missing namespace, key or empty string falls back to English.
 */
export function loadMessages(locale: Locale): Promise<Messages> {
  if (locale === defaultLocale) return Promise.resolve(en)

  let messages = cache.get(locale)
  if (!messages) {
    messages = loadTranslatedMessages(locale)
    cache.set(locale, messages)
  }
  return messages
}

async function loadTranslatedMessages(locale: Locale): Promise<Messages> {
  const namespaces = Object.keys(en) as Namespace[]
  const translated = await Promise.all(
    namespaces.map(async (namespace) => {
      try {
        const file = await import(`../messages/${locale}/${namespace}.json`)
        return [namespace, file.default] as const
      } catch {
        return [namespace, undefined] as const
      }
    }),
  )
  return withFallback(en, Object.fromEntries(translated)) as Messages
}

function withFallback(base: unknown, override: unknown): unknown {
  if (override === undefined || override === null || override === '') {
    return base
  }
  if (Array.isArray(base)) {
    return Array.isArray(override) && override.length === base.length
      ? base.map((item, index) => withFallback(item, override[index]))
      : base
  }
  if (base && typeof base === 'object') {
    if (typeof override !== 'object' || Array.isArray(override)) return base
    return Object.fromEntries(
      Object.entries(base).map(([key, value]) => [
        key,
        withFallback(value, (override as Record<string, unknown>)[key]),
      ]),
    )
  }
  return typeof override === typeof base ? override : base
}

export function pickNamespaces(
  messages: Messages,
  namespaces: readonly Namespace[],
): Partial<Messages> {
  return Object.fromEntries(
    namespaces.map((namespace) => [namespace, messages[namespace]]),
  ) as Partial<Messages>
}
