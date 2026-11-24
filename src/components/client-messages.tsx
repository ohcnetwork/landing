import {
  baseClientNamespaces,
  pickNamespaces,
  type Namespace,
} from '@/i18n/messages'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

/**
 * Makes extra message namespaces available to the client components inside
 * it, so they can call `useTranslations(namespace)`. Only wrap the part of the
 * page that needs them, to keep page payloads small. For a handful of strings,
 * passing translated props from the server parent is simpler.
 */
export async function ClientMessages({
  namespaces,
  children,
}: {
  namespaces: Namespace[]
  children: React.ReactNode
}) {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider
      messages={pickNamespaces(messages, [
        ...baseClientNamespaces,
        ...namespaces,
      ])}
    >
      {children}
    </NextIntlClientProvider>
  )
}
