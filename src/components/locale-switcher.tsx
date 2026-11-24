'use client'

import { localeInfo, locales } from '@/i18n/config'
import { localizePath, splitLocaleFromPath } from '@/i18n/paths'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { Languages } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

/**
 * Language menu. Each option links to the current page in that language.
 * Locales use separate root layouts, so switching is a full page load.
 */
export function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations('nav')
  const locale = useLocale()
  const { path } = splitLocaleFromPath(usePathname())

  return (
    <Menu as="div" className={className}>
      <MenuButton
        aria-label={t('language', {
          language: localeInfo[locale].nativeName,
        })}
        className="flex h-12 items-center gap-2 rounded-lg border border-black/8 bg-white/62 px-3 text-sm font-medium text-gray-950 shadow-sm backdrop-blur-xl transition hover:bg-white"
      >
        <Languages className="size-4 shrink-0 text-[#0b6b55]" />
        <span lang={localeInfo[locale].htmlLang} className="hidden sm:inline">
          {localeInfo[locale].nativeName}
        </span>
        <span aria-hidden="true" className="uppercase sm:hidden">
          {locale}
        </span>
        <ChevronDownIcon className="size-4 shrink-0" />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className="z-40 mt-2 w-52 origin-top-right overflow-hidden rounded-lg border border-black/8 bg-white py-1 shadow-[0_18px_45px_rgba(7,24,19,0.12)] ring-1 ring-black/5 focus:outline-none"
      >
        {locales.map((option) => {
          const info = localeInfo[option]
          const isCurrent = option === locale
          return (
            <MenuItem key={option}>
              <a
                href={localizePath(path, option)}
                hrefLang={info.htmlLang}
                aria-current={isCurrent ? 'page' : undefined}
                className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-gray-950 transition data-focus:bg-[#f4f7f7]"
              >
                <span className="flex flex-col">
                  <span
                    lang={info.htmlLang}
                    className={isCurrent ? 'font-medium text-[#0b6b55]' : ''}
                  >
                    {info.nativeName}
                  </span>
                  {info.nativeName !== info.englishName && (
                    <span lang="en" className="text-xs text-gray-500">
                      {info.englishName}
                    </span>
                  )}
                </span>
                {isCurrent && (
                  <CheckIcon className="size-4 shrink-0 text-[#0b6b55]" />
                )}
              </a>
            </MenuItem>
          )
        })}
      </MenuItems>
    </Menu>
  )
}
