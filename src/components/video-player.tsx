'use client'

interface VideoPlayerProps {
  src: string
  title: string
  poster?: string
  className?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  playsinline?: boolean
  width?: number
  height?: number
}

export function VideoPlayer({
  src,
  poster,
  className = '',
  autoplay = true,
  loop = true,
  muted = true,
  playsinline = true,
  width = 600,
  height = 415,
}: VideoPlayerProps) {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      playsInline={playsinline}
      className={className}
      width={width}
      height={height}
    />
  )
}
