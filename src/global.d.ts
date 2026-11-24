import type { Locale } from '@/i18n/config'
import type en from '@/i18n/en-catalog.generated'
import type { formats } from '@/i18n/request'

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale
    Messages: typeof en
    Formats: typeof formats
  }
}
