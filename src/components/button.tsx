import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-lg border border-[#061521] bg-[#052e24] shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_10px_24px_rgba(7,24,38,0.22)]',
    'text-base font-medium whitespace-nowrap text-white',
    'transition hover:-translate-y-0.5 hover:bg-[#063f32] hover:shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_14px_30px_rgba(7,24,38,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f8b6c] data-disabled:opacity-40',
  ),
  secondary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-lg border border-[#d8e1db] bg-white shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_8px_18px_rgba(15,23,42,0.08)]',
    'text-base font-medium whitespace-nowrap text-[#173d34]',
    'transition hover:-translate-y-0.5 hover:border-[#bac7c2] hover:bg-[#fafaf7] hover:shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_12px_26px_rgba(15,23,42,0.10)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f8b6c] data-disabled:opacity-40',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)]',
    'rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
    'text-sm font-medium whitespace-nowrap text-gray-950',
    'transition hover:bg-[#f7f9f6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f8b6c] data-disabled:bg-transparent data-disabled:opacity-40',
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant])

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
