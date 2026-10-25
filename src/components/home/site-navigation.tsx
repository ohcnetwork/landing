'use client'

import { Logo } from '@/components/logo'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowUpRight, ChevronDown, Menu as MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './site-navigation.module.css'

const navigation = [
  {
    label: 'Foundation',
    links: [
      { label: 'Our mission', href: '/about' },
      { label: 'Our impact', href: '/impact' },
      { label: 'Governance', href: '/foundation/governance' },
      { label: 'Board & advisors', href: '/about/team' },
      { label: 'Foundation team', href: '/about/team/foundation' },
      { label: 'Security & compliance', href: '/about/security-compliance' },
    ],
  },
  {
    label: 'Platform',
    links: [
      { label: 'Explore CARE', href: '/product/care-core' },
      { label: 'CARE AI', href: '/product/care-ai' },
      { label: 'Apps & integrations', href: '/product/apps-integrations' },
      {
        label: 'Standards & architecture',
        href: '/product/standards-architecture',
      },
      { label: 'Build on CARE', href: '/build-on-care' },
    ],
  },
  {
    label: 'Solutions',
    links: [
      { label: 'All solutions', href: '/solutions' },
      { label: 'Hospital management', href: '/solutions/hospital-management' },
      { label: 'TeleICU', href: '/solutions/teleicu' },
      { label: 'Palliative care', href: '/solutions/palliative-care' },
      { label: 'CARE Clinic', href: '/solutions/care-clinics' },
      { label: 'Animal health', href: '/solutions/care-janwar' },
    ],
  },
  {
    label: 'Community',
    links: [
      { label: 'The network', href: '/network' },
      {
        label: 'Implementation partners',
        href: '/ecosystem/implementation-partners',
      },
      { label: 'For clinicians', href: '/ecosystem/clinicians' },
      { label: 'For developers', href: '/developers' },
      { label: 'Stories & updates', href: '/blog' },
      { label: 'Support our work', href: '/support' },
      { label: 'Our supporters', href: '/supporters' },
    ],
  },
]

export function HomeNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!mobileOpen) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        toggleRef.current?.focus()
      }
    }

    function closeOnOutsideClick(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMobileOpen(false)
      }
    }

    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setMobileOpen(false)
    }

    const desktopQuery = window.matchMedia('(min-width: 1001px)')
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsideClick)
    desktopQuery.addEventListener('change', closeOnDesktop)

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      desktopQuery.removeEventListener('change', closeOnDesktop)
    }
  }, [mobileOpen])

  return (
    <header
      ref={headerRef}
      className={styles.header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setMobileOpen(false)
        }
      }}
    >
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Open Healthcare Network home"
          onClick={() => setMobileOpen(false)}
        >
          <Logo className={styles.logo} />
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navigation.map((group) => (
            <Menu as="div" key={group.label} className={styles.menu}>
              <MenuButton className={styles.navButton}>
                {group.label}
                <ChevronDown size={13} strokeWidth={1.7} aria-hidden="true" />
              </MenuButton>
              <MenuItems className={styles.dropdown}>
                {group.links.map((link) => (
                  <MenuItem key={link.href}>
                    <Link href={link.href} className={styles.dropdownLink}>
                      {link.label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <Link
            href="/contact"
            className={styles.contactLink}
            onClick={() => setMobileOpen(false)}
          >
            Get in touch
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className={styles.mobileToggle}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
            aria-controls="homepage-mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X size={23} aria-hidden="true" />
            ) : (
              <MenuIcon size={23} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav
        id="homepage-mobile-navigation"
        className={styles.mobileNav}
        aria-label="Mobile navigation"
        hidden={!mobileOpen}
      >
        <div className={styles.mobileGroups}>
          {navigation.map((group) => (
            <section key={group.label} className={styles.mobileGroup}>
              <h2>{group.label}</h2>
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              ))}
            </section>
          ))}
        </div>
        <Link
          href="/contact"
          className={styles.mobileContact}
          onClick={() => setMobileOpen(false)}
        >
          Let’s build better healthcare together
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  )
}

const footerGroups = [
  {
    label: 'Foundation',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Our impact', href: '/impact' },
      { label: 'Our team', href: '/about/team' },
      { label: 'Governance', href: '/foundation/governance' },
      { label: 'Support our work', href: '/support' },
    ],
  },
  {
    label: 'CARE platform',
    links: [
      { label: 'CARE Core', href: '/product/care-core' },
      { label: 'CARE AI', href: '/product/care-ai' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Apps & integrations', href: '/product/apps-integrations' },
      { label: 'Security & compliance', href: '/about/security-compliance' },
    ],
  },
  {
    label: 'Get involved',
    links: [
      { label: 'Our network', href: '/network' },
      { label: 'Build on CARE', href: '/build-on-care' },
      { label: 'For developers', href: '/developers' },
      { label: 'For clinicians', href: '/ecosystem/clinicians' },
      { label: 'Become a partner', href: '/ecosystem/implementation-partners' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { label: 'Stories & updates', href: '/blog' },
      { label: 'Press & media', href: '/press-media' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact us', href: '/contact' },
    ],
  },
]

export function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <Link
              href="/"
              className={styles.brand}
              aria-label="Open Healthcare Network home"
            >
              <Logo className={styles.footerLogo} />
            </Link>
            <p>
              Open technology.
              <br />
              Better care. For everyone.
            </p>
            <a
              className={styles.githubLink}
              href="https://github.com/ohcnetwork"
            >
              Find us on GitHub
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          {footerGroups.map((group) => (
            <nav
              key={group.label}
              className={styles.footerGroup}
              aria-label={group.label}
            >
              <h2>{group.label}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className={styles.footerBottom}>
          <p>
            © {new Date().getFullYear()} Open Healthcare Network Foundation.
          </p>
          <p>Built in the open. Built for the public good.</p>
        </div>
      </div>
    </footer>
  )
}
