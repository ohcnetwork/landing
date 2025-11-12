'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from './button'

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
  const [isLoaded, setIsLoaded] = useState(false)

  const handleClick = () => {
    setIsLoaded(true)
  }

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {!isLoaded ? (
          <Button
            variant="secondary"
            onClick={handleClick}
            className="absolute top-0 left-0 w-full h-full cursor-pointer rounded-lg overflow-hidden group"
            aria-label={`Play ${title}`}
          >
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              fill
              className="object-cover"
            />
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/logos/yt-logo-red.svg"
                alt="Play"
                width={80}
                height={80}
                className="w-12 h-12 md:w-20 md:h-20 group-hover:scale-110 transition-transform duration-200"
              />
            </div>
          </Button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 h-full w-full rounded-lg"
            width={width}
            height={height}
          />
        )}
      </div>
    </div>
  )
}
