import { localizePath } from '@/i18n/paths'
import { useLocale } from 'next-intl'
import NextLink, { type LinkProps } from 'next/link'
import { forwardRef } from 'react'

/**
 * Site link. Internal paths are written without a locale (`/about`) and are
 * prefixed with the current locale automatically (`/pt/about`).
 */
export const Link = forwardRef(function Link(
  props: LinkProps & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  const locale = useLocale()

  if (
    typeof props.href === 'string' &&
    (/^https?:\/\//.test(props.href) ||
      /^mailto:/.test(props.href) ||
      /\/[^/?#]+\.[^/?#]+($|[?#])/.test(props.href))
  ) {
    const href = props.href
    const anchorProps = { ...props } as Record<string, unknown>

    for (const key of [
      'replace',
      'scroll',
      'shallow',
      'passHref',
      'prefetch',
      'locale',
      'href',
    ]) {
      delete anchorProps[key]
    }

    return (
      <a
        ref={ref}
        href={href}
        {...(anchorProps as React.ComponentPropsWithoutRef<'a'>)}
      />
    )
  }

  return (
    <NextLink ref={ref} {...props} href={localizePath(props.href, locale)} />
  )
})
