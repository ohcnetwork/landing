'use client'

import { Play } from 'lucide-react'
import { useState } from 'react'

interface YouTubeVideoProps {
  videoId: string
  title: string
  className?: string
  width?: number
  height?: number
}

export function YouTubeVideo({
  videoId,
  title,
  className = '',
  width = 560,
  height = 315,
}: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#052e24] ${className}`}
    >
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 h-full w-full rounded-lg"
            width={width}
            height={height}
          />
        ) : (
          <button
            type="button"
            aria-label={`Play ${title}`}
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 isolate flex items-center justify-center overflow-hidden rounded-lg text-left"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center opacity-55"
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,46,36,0.96),rgba(5,46,36,0.54)_48%,rgba(184,243,111,0.20)_100%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[40px_40px]"
            />
            <span className="relative mx-auto flex max-w-2xl flex-col items-center px-6 text-center text-white">
              <span className="flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/14 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <Play className="ml-1 size-8 fill-white text-white" />
              </span>
              <span className="mt-8 font-mono text-xs font-semibold tracking-wide text-[#b8f36f] uppercase">
                GitHub Story
              </span>
              <span className="mt-3 block text-3xl/9 font-semibold tracking-normal text-balance sm:text-5xl/[1]">
                Open Healthcare Network in the open-source ecosystem.
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
