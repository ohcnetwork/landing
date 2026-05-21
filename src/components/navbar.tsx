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
  { href: '/product/care-core', label: 'Core' },
  { href: '/product/apps-integrations', label: 'Integrations' },
  {
    href: '/solutions',
    label: 'Solutions',
    submenu: [
      { href: '/solutions/hospital-management', label: 'Hospital Management' },
      { href: '/solutions/teleicu', label: 'TeleICU' },
      { href: '/solutions/palliative-care', label: 'Palliative Care' },
      { href: '/solutions/care-janwar', label: 'Care Janwar' },
      { href: '/solutions/care-clinics', label: 'Care Clinics' },
    ],
  },
  { href: '/developers', label: 'Developers' },
  { href: '/impact', label: 'Impact' },
  {
    href: '/about',
    label: 'About',
    submenu: [
      { href: '/network', label: 'The Network' },
      { href: '/about/team', label: 'Team' },
      { href: '/about/security-compliance', label: 'Security & Compliance' },
      { href: '/faq', label: 'FAQ' },
      { href: '/press-media', label: 'Press & Media' },
    ],
  },
  { href: '/contact', label: 'Contact' },
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
    <nav className="relative hidden lg:flex">
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
                  className={`flex items-center justify-center px-4 py-3 text-base font-medium bg-blend-multiply data-hover:bg-black/2.5 ${
                    isActive || hasActiveSubmenu
                      ? 'text-green-700'
                      : 'text-gray-950'
                  }`}
                >
                  {label}
                  <ChevronDownIcon className="ml-1 h-4 w-4 flex-shrink-0" />
                </MenuButton>
                <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black/5">
                  {submenu.map((item) => {
                    const isSubmenuActive = isLinkActive(item.href, pathname)
                    return (
                      <MenuItem key={item.href}>
                        <Link
                          href={item.href}
                          className={`block px-4 py-2 text-sm data-hover:bg-gray-50 ${
                            isSubmenuActive
                              ? 'font-medium text-green-600'
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
                className={`flex items-center justify-center px-4 py-3 text-base font-medium bg-blend-multiply data-hover:bg-black/2.5 ${
                  isActive ? 'text-green-700' : 'text-gray-950'
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
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
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
                        ? 'text-green-700'
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
                              ? 'font-medium text-green-600'
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
                    isActive ? 'text-green-700' : 'text-gray-950'
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
    <Disclosure as="header" className="pt-8">
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
