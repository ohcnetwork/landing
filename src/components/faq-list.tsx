'use client'

import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'

export function FaqList({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const [expanded, setExpanded] = useState(false)
  const listId = useId()
  const initialCount = 5

  return (
    <div className="w-full">
      <div id={listId}>
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            hidden={!expanded && index >= initialCount}
            className="group rounded-xl border-t border-[#dfe6e2] transition-colors open:bg-[#f4f7f5] hover:bg-[#f4f7f5]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-[26px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#046c4e] [&::-webkit-details-marker]:hidden">
              <h3 className="text-xl leading-[1.25] font-semibold">
                {faq.question}
              </h3>
              <ChevronDown
                className="size-5 shrink-0 text-[#046c4e] transition-transform group-open:rotate-180 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </summary>
            <p className="max-w-4xl px-4 pb-[26px] text-base leading-[1.6] text-[#374151]">
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
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#046c4e]/25 px-6 py-3 font-semibold text-[#046c4e] transition-colors hover:bg-[#f4f7f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#046c4e]"
          >
            {expanded
              ? 'Show fewer questions'
              : `Show all ${faqs.length} questions`}
            <ChevronDown
              className={`size-4 transition-transform motion-reduce:transition-none ${expanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </div>
  )
}
