'use client'

import type { Messages } from '@/i18n/messages'
import { splitLocaleFromPath } from '@/i18n/paths'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Link } from './link'
import { LocaleSwitcher } from './locale-switcher'
import { Logo } from './logo'

type NavLabel = keyof Messages['nav']['links']

type NavLink = {
  href: string
  label: NavLabel
  submenu?: { href: string; label: NavLabel }[]
}

const links: NavLink[] = [
  { href: '/', label: 'home' },
  {
    href: '/about',
    label: 'foundation',
    submenu: [
      { href: '/about', label: 'mission' },
      { href: '/foundation/governance', label: 'governance' },
      { href: '/about/team', label: 'boardAdvisors' },
      { href: '/about/team/foundation', label: 'foundationTeam' },
      { href: '/about/security-compliance', label: 'securityCompliance' },
    ],
  },
  {
    href: '/product/care-core',
    label: 'care',
    submenu: [
      { href: '/product/care-core', label: 'careCore' },
      { href: '/product/care-ai', label: 'careAi' },
      { href: '/product/apps-integrations', label: 'appsIntegrations' },
      {
        href: '/product/standards-architecture',
        label: 'standardsArchitecture',
      },
    ],
  },
  {
    href: '/solutions',
    label: 'solutions',
    submenu: [
      { href: '/solutions/hospital-management', label: 'hospitalManagement' },
      { href: '/solutions/teleicu', label: 'teleicu' },
      { href: '/solutions/palliative-care', label: 'palliativeCare' },
      { href: '/solutions/care-clinics', label: 'careClinic' },
    ],
  },
  { href: '/impact', label: 'impact' },
  {
    href: '/network',
    label: 'ecosystem',
    submenu: [
      { href: '/network', label: 'network' },
      {
        href: '/ecosystem/implementation-partners',
        label: 'implementationPartners',
      },
      { href: '/ecosystem/clinicians', label: 'clinicians' },
      { href: '/build-on-care', label: 'buildOnCare' },
      { href: '/developers', label: 'developers' },
    ],
  },
  {
    href: '/support',
    label: 'support',
    submenu: [
      { href: '/support', label: 'supportOhc' },
      { href: '/supporters', label: 'supporters' },
    ],
  },
  {
    href: '/resources',
    label: 'resources',
    submenu: [
      { href: '/blog', label: 'blog' },
      { href: '/press-media', label: 'pressMedia' },
      { href: '/faq', label: 'faq' },
      { href: '/system-requirements', label: 'browserRequirements' },
      { href: '/funding.json', label: 'supportMetadata' },
      { href: '/contact', label: 'contact' },
    ],
  },
]

/** The current path without its locale prefix, to compare against hrefs. */
function useSitePath() {
  return splitLocaleFromPath(usePathname()).path
}

function isLinkActive(href: string, pathname: string): boolean {
  if (href === '/') {
    return pathname === '/'
  }
  return pathname === href || pathname.startsWith(href + '/')
}

function DesktopNav() {
  const t = useTranslations('nav.links')
  const pathname = useSitePath()

  return (
    <nav className="relative hidden rounded-lg border border-black/8 bg-white/60 px-2 shadow-[0_10px_30px_rgba(7,24,19,0.06)] backdrop-blur-xl xl:flex">
      {links.map(({ href, label, submenu }) => {
        const isActive = isLinkActive(href, pathname)
        const hasActiveSubmenu = submenu?.some((item) =>
          isLinkActive(item.href, pathname),
        )

        return (
          <div key={href} className="relative flex items-center">
            {submenu ? (
              <Menu as="div" className="relative">
                <MenuButton
                  className={`flex items-center justify-center rounded-lg px-4 py-3 text-base font-medium bg-blend-multiply transition hover:bg-black/2.5 ${
                    isActive || hasActiveSubmenu
                      ? 'text-[#0b6b55]'
                      : 'text-gray-950'
                  }`}
                >
                  {t(label)}
                  <ChevronDownIcon className="ml-1 h-4 w-4 flex-shrink-0" />
                </MenuButton>
                <MenuItems className="absolute left-0 z-10 mt-2 w-60 origin-top-left overflow-hidden rounded-lg border border-black/8 bg-white shadow-[0_18px_45px_rgba(7,24,19,0.12)] ring-1 ring-black/5">
                  {submenu.map((item) => {
                    const isSubmenuActive = isLinkActive(item.href, pathname)
                    return (
                      <MenuItem key={item.href}>
                        <Link
                          href={item.href}
                          className={`block px-4 py-2.5 text-sm transition hover:bg-[#f4f7f7] ${
                            isSubmenuActive
                              ? 'font-medium text-[#0b6b55]'
                              : 'text-gray-950'
                          }`}
                        >
                          {t(item.label)}
                        </Link>
                      </MenuItem>
                    )
                  })}
                </MenuItems>
              </Menu>
            ) : (
              <Link
                href={href}
                className={`flex items-center justify-center rounded-lg px-4 py-3 text-base font-medium bg-blend-multiply transition hover:bg-black/2.5 ${
                  isActive ? 'text-[#0b6b55]' : 'text-gray-950'
                }`}
              >
                {t(label)}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

function MobileNavButton() {
  const t = useTranslations('nav')

  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg border border-black/8 bg-white/62 shadow-sm backdrop-blur-xl hover:bg-white xl:hidden"
      aria-label={t('openMenu')}
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  const t = useTranslations('nav.links')
  const pathname = useSitePath()
  const reduceMotion = useReducedMotion()

  return (
    <DisclosurePanel className="xl:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label, submenu }, linkIndex) => {
          const isActive = isLinkActive(href, pathname)
          const hasActiveSubmenu = submenu?.some((item) =>
            isLinkActive(item.href, pathname),
          )

          return (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.15,
                ease: 'easeInOut',
                rotateX: {
                  duration: reduceMotion ? 0 : 0.3,
                  delay: reduceMotion ? 0 : linkIndex * 0.1,
                },
              }}
              key={href}
            >
              {submenu ? (
                <div>
                  <div
                    className={`mb-2 text-base font-medium ${
                      isActive || hasActiveSubmenu
                        ? 'text-[#0b6b55]'
                        : 'text-gray-950'
                    }`}
                  >
                    {t(label)}
                  </div>
                  <div className="ml-4 space-y-2">
                    {submenu.map((item) => {
                      const isSubmenuActive = isLinkActive(item.href, pathname)
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block text-sm ${
                            isSubmenuActive
                              ? 'font-medium text-[#0b6b55]'
                              : 'text-gray-600'
                          }`}
                        >
                          {t(item.label)}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  href={href}
                  className={`text-base font-medium ${
                    isActive ? 'text-[#0b6b55]' : 'text-gray-950'
                  }`}
                >
                  {t(label)}
                </Link>
              )}
            </motion.div>
          )
        })}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  const t = useTranslations('nav.links')

  return (
    <Disclosure as="header" className="relative z-30 pt-8">
      <div>
        <div className="relative flex justify-between">
          <div className="relative flex gap-6">
            <div className="py-3">
              <Link href="/" title={t('home')}>
                <Logo className="h-12" />
              </Link>
            </div>
            {banner && (
              <div className="relative hidden items-center py-3 xl:flex">
                {banner}
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <DesktopNav />
            <LocaleSwitcher className="self-center" />
            <MobileNavButton />
          </div>
        </div>
      </div>
      <MobileNav />
    </Disclosure>
  )
}
