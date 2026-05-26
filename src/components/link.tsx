import NextLink, { type LinkProps } from 'next/link'
import { forwardRef } from 'react'

export const Link = forwardRef(function Link(
  props: LinkProps & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
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

  return <NextLink ref={ref} {...props} />
})
