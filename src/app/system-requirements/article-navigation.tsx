'use client'

import { Link } from '@/components/link'
import { Check, ChevronDown, Link as LinkIcon, Printer } from 'lucide-react'
import { useEffect, useState } from 'react'
import s from './system-requirements.module.css'

export const sections = [
  { id: 'general-requirements', title: 'Procurement scope' },
  { id: 'hardware', title: 'Desktop & laptop specifications' },
  { id: 'mobile-devices', title: 'Tablets & mobile devices' },
  { id: 'operating-systems', title: 'Operating system versions' },
  { id: 'web-browsers', title: 'Browser versions' },
  { id: 'network', title: 'Network & connectivity' },
  { id: 'peripherals', title: 'Printers, scanners & media' },
  { id: 'deployment', title: 'Hosting & server procurement' },
  { id: 'acceptance', title: 'Acceptance & supplier evidence' },
]

export function ArticleNavigation() {
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
  }, [])

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
      <nav aria-label="In this article" className={s.desktopToc}>
        <p className={s.tocTitle}>In this article</p>
        <div className={s.tocLinks}>{links}</div>
        <div className={s.sidebarHelp}>
          <p>Planning a rollout?</p>
          <span>Find the right setup for your facility.</span>
          <Link href="/ecosystem/implementation-partners">
            Meet our implementation partners ↗
          </Link>
        </div>
      </nav>
      <details className={s.mobileToc}>
        <summary>
          In this article <ChevronDown size={16} aria-hidden="true" />
        </summary>
        <nav
          aria-label="In this article"
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

export function ArticleActions() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>(
    'idle',
  )

  useEffect(() => {
    let closedNotes: HTMLDetailsElement[] = []
    const beforePrint = () => {
      closedNotes = Array.from(
        document.querySelectorAll<HTMLDetailsElement>(
          'details[data-print-expand]:not([open])',
        ),
      )
      closedNotes.forEach((note) => {
        note.open = true
      })
    }
    const afterPrint = () => {
      closedNotes.forEach((note) => {
        note.open = false
      })
      closedNotes = []
    }
    window.addEventListener('beforeprint', beforePrint)
    window.addEventListener('afterprint', afterPrint)
    return () => {
      window.removeEventListener('beforeprint', beforePrint)
      window.removeEventListener('afterprint', afterPrint)
      afterPrint()
    }
  }, [])

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
            ? 'Link copied'
            : copyState === 'failed'
              ? 'Copy the URL from your browser'
              : 'Copy link'}
        </span>
      </button>
      <button type="button" onClick={() => window.print()}>
        <Printer size={15} aria-hidden="true" /> Print
      </button>
    </div>
  )
}
