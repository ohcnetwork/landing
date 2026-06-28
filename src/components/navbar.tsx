'use client'

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
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Link } from './link'
import { Logo } from './logo'

const links = [
  { href: '/', label: 'Home' },
  {
    href: '/about',
    label: 'Foundation',
    submenu: [
      { href: '/about', label: 'Mission' },
      { href: '/foundation/governance', label: 'Governance' },
      { href: '/about/team', label: 'Board & Advisors' },
      { href: '/about/team/foundation', label: 'Foundation Team' },
      { href: '/about/security-compliance', label: 'Security & Compliance' },
    ],
  },
  {
    href: '/product/care-core',
    label: 'CARE',
    submenu: [
      { href: '/product/care-core', label: 'CARE Core' },
      { href: '/product/care-ai', label: 'CARE AI' },
      { href: '/product/apps-integrations', label: 'Apps & Integrations' },
      {
        href: '/product/standards-architecture',
        label: 'Standards & Architecture',
      },
    ],
  },
  {
    href: '/solutions',
    label: 'Solutions',
    submenu: [
      { href: '/solutions/hospital-management', label: 'Hospital Management' },
      { href: '/solutions/teleicu', label: 'TeleICU' },
      { href: '/solutions/palliative-care', label: 'Palliative Care' },
      { href: '/solutions/care-clinics', label: 'Care Clinics' },
    ],
  },
  { href: '/impact', label: 'Impact' },
  {
    href: '/network',
    label: 'Ecosystem',
    submenu: [
      { href: '/network', label: 'The Network' },
      {
        href: '/ecosystem/implementation-partners',
        label: 'Implementation Partners',
      },
      { href: '/ecosystem/clinicians', label: 'Clinicians' },
      { href: '/developers', label: 'Developers' },
    ],
  },
  { href: '/support', label: 'Support' },
  {
    href: '/resources',
    label: 'Resources',
    submenu: [
      { href: '/blog', label: 'Blog' },
      { href: '/press-media', label: 'Press & Media' },
      { href: '/faq', label: 'FAQ' },
      { href: '/funding.json', label: 'Support metadata' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

function isLinkActive(href: string, pathname: string): boolean {
  if (href === '/') {
    return pathname === '/'
  }
  return pathname.startsWith(href)
}

function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="relative hidden rounded-lg border border-black/8 bg-white/60 px-2 shadow-[0_10px_30px_rgba(7,24,19,0.06)] backdrop-blur-xl lg:flex">
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
                  {label}
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
                          {item.label}
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
                {label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg border border-black/8 bg-white/62 shadow-sm backdrop-blur-xl hover:bg-white lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  const pathname = usePathname()

  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label, submenu }, linkIndex) => {
          const isActive = isLinkActive(href, pathname)
          const hasActiveSubmenu = submenu?.some((item) =>
            isLinkActive(item.href, pathname),
          )

          return (
            <motion.div
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
                rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
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
                    {label}
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
                          {item.label}
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
                  {label}
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
  return (
    <Disclosure as="header" className="relative z-30 pt-8">
      <div>
        <div className="relative flex justify-between">
          <div className="relative flex gap-6">
            <div className="py-3">
              <Link href="/" title="Home">
                <Logo className="h-12" />
              </Link>
            </div>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </div>
      </div>
      <MobileNav />
    </Disclosure>
  )
}
