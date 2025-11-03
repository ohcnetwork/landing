'use client'

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
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 h-full w-full rounded-lg"
          width={width}
          height={height}
        />
      </div>
    </div>
  )
}
