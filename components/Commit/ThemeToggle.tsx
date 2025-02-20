'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface ThemeIconProps extends React.SVGProps<SVGSVGElement> { }

function ThemeIcon(props: ThemeIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"
      />
    </svg>
  )
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const otherTheme: 'light' | 'dark' = resolvedTheme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      type="button"
      className="group absolute right-4 top-4 z-50 -m-2.5 p-2.5"
      onClick={() => setTheme(otherTheme)}
    >
      <span className="sr-only">Switch to {otherTheme} theme</span>
      <ThemeIcon className="h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100" />
    </button>
  )
}
