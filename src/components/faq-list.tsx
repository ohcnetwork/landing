'use client'

import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'

export function FaqList({
  faqs,
  dark = false,
  initialCount = 5,
  className,
}: {
  faqs: { question: string; answer: string }[]
  dark?: boolean
  initialCount?: number
  className?: string
}) {
  const [expanded, setExpanded] = useState(false)
  const listId = useId()

  return (
    <div className={clsx('w-full', className)}>
      <div id={listId}>
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            hidden={!expanded && index >= initialCount}
            className={clsx(
              'group rounded-xl border-t transition-colors',
              dark
                ? 'border-white/10 open:bg-white/[0.06] hover:bg-white/[0.06]'
                : 'border-[#dfe6e2] open:bg-[#f4f7f5] hover:bg-[#f4f7f5]',
            )}
          >
            <summary
              className={clsx(
                'flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden',
                dark
                  ? 'focus-visible:outline-white'
                  : 'focus-visible:outline-[#046c4e]',
              )}
            >
              <h3
                className={clsx(
                  'text-xl/6 font-semibold',
                  dark ? 'text-white' : 'text-gray-950',
                )}
              >
                {faq.question}
              </h3>
              <ChevronDown
                className={clsx(
                  'size-5 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none',
                  dark ? 'text-white/70' : 'text-[#046c4e]',
                )}
                aria-hidden="true"
              />
            </summary>
            <p
              className={clsx(
                'max-w-4xl px-4 pb-6 text-sm/6',
                dark ? 'text-white/62' : 'text-gray-600',
              )}
            >
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
      {faqs.length > initialCount && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded(!expanded)}
            className={clsx(
              'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border px-6 py-3 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
              dark
                ? 'border-white/25 text-white hover:bg-white/[0.06] focus-visible:outline-white'
                : 'border-[#046c4e]/25 text-[#046c4e] hover:bg-[#f4f7f5] focus-visible:outline-[#046c4e]',
            )}
          >
            {expanded
              ? 'Show fewer questions'
              : `Show all ${faqs.length} questions`}
            <ChevronDown
              className={clsx(
                'size-4 transition-transform motion-reduce:transition-none',
                expanded && 'rotate-180',
              )}
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </div>
  )
}
