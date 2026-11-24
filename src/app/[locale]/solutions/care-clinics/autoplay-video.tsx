'use client'

import { useEffect, useRef } from 'react'

// Muted product loop that only plays while on screen, so a page with several
// demos doesn't download and decode all of them at once.
export function AutoplayVideo({
  src,
  poster,
  label,
  className,
  eager = false,
}: {
  src: string
  poster: string
  label: string
  className?: string
  eager?: boolean
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    // React doesn't always serialise `muted`, and browsers block unmuted autoplay.
    video.muted = true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      aria-label={label}
      muted
      loop
      playsInline
      disablePictureInPicture
      poster={poster}
      preload={eager ? 'auto' : 'none'}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
