'use client'

import { Link } from '@/components/link'
import { Check, ChevronDown, Link as LinkIcon, Printer } from 'lucide-react'
import { useEffect, useState } from 'react'
import s from './system-requirements.module.css'

export function ArticleNavigation({
  sections,
  labels,
}: {
  /** Article sections in order, with translated titles. */
  sections: { id: string; title: string }[]
  /** Translated labels, passed from the server component. */
  labels: {
    title: string
    helpTitle: string
    helpBody: string
    contact: string
  }
}) {
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    let frame = 0
    const update = () => {
      const current = sections.filter(({ id }) => {
        const element = document.getElementById(id)
        return element && element.getBoundingClientRect().top <= 180
      })
      setActive(current.at(-1)?.id ?? sections[0].id)
      frame = 0
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.cancelAnimationFrame(frame)
    }
  }, [sections])

  const links = sections.map((section, index) => (
    <a
      key={section.id}
      href={`#${section.id}`}
      aria-current={active === section.id ? 'location' : undefined}
      className={s.tocLink}
    >
      <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      {section.title}
    </a>
  ))

  return (
    <>
      <nav aria-label={labels.title} className={s.desktopToc}>
        <p className={s.tocTitle}>{labels.title}</p>
        <div className={s.tocLinks}>{links}</div>
        <div className={s.sidebarHelp}>
          <p>{labels.helpTitle}</p>
          <span>{labels.helpBody}</span>
          <Link href="/contact">{labels.contact}</Link>
        </div>
      </nav>
      <details className={s.mobileToc}>
        <summary>
          {labels.title} <ChevronDown size={16} aria-hidden="true" />
        </summary>
        <nav
          aria-label={labels.title}
          onClick={(event) => {
            if ((event.target as HTMLElement).closest('a')) {
              event.currentTarget.closest('details')?.removeAttribute('open')
            }
          }}
        >
          {links}
        </nav>
      </details>
    </>
  )
}

export function ArticleActions({
  labels,
}: {
  /** Translated labels, passed from the server component. */
  labels: {
    copyLink: string
    linkCopied: string
    copyFailed: string
    print: string
  }
}) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>(
    'idle',
  )

  useEffect(() => {
    if (copyState === 'idle') return
    const timeout = window.setTimeout(() => setCopyState('idle'), 3000)
    return () => window.clearTimeout(timeout)
  }, [copyState])

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}${window.location.pathname}`,
      )
      setCopyState('copied')
    } catch {
      setCopyState('failed')
    }
  }

  return (
    <div className={s.articleActions}>
      <button type="button" onClick={copyLink}>
        {copyState === 'copied' ? (
          <Check size={15} aria-hidden="true" />
        ) : (
          <LinkIcon size={15} aria-hidden="true" />
        )}
        <span aria-live="polite">
          {copyState === 'copied'
            ? labels.linkCopied
            : copyState === 'failed'
              ? labels.copyFailed
              : labels.copyLink}
        </span>
      </button>
      <button type="button" onClick={() => window.print()}>
        <Printer size={15} aria-hidden="true" /> {labels.print}
      </button>
    </div>
  )
}
