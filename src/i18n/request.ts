import { getRequestConfig } from 'next-intl/server'
import { defaultLocale, isLocale, timeZone } from './config'
import { loadMessages } from './messages'

export const formats = {
  dateTime: {
    /** Sep 7, 2026 */
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    /** Monday, September 7, 2026 */
    long: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
    /** September 2026 */
    month: { year: 'numeric', month: 'long' },
  },
} as const

export default getRequestConfig(
  async ({ locale: explicitLocale, requestLocale }) => {
    const requested = explicitLocale ?? (await requestLocale)
    const locale = isLocale(requested) ? requested : defaultLocale

    return {
      locale,
      messages: await loadMessages(locale),
      timeZone,
      formats,
    }
  },
)
