'use client'

import { useEffect, useState } from "react"
import { ArrowUp } from 'lucide-react'

export function ScrollToTop () {
    const [visible, setIsVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setIsVisible(window.scrollY > 400)
        onScroll()
        window.addEventListener('scroll', onScroll, {
            passive: true
        })

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <button
            type="button"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-6 right-6 z-50 flex size-11 items-center justify-center rounded-full bg-[#063F32] text-white shadow-lg transition-all duration-300 hover:bg-[#1d4b41] ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
        >
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-gray-950 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
      Scroll up
    </span>
            <ArrowUp/>
        </button>
    )
}
