import { Gradient } from './gradient'

export function TopGradient() {
  return (
    <Gradient
      className="absolute top-0 left-1/2 h-[55vh] w-screen -translate-x-1/2 sm:h-[60vh]"
      style={{
        background:
          'linear-gradient(to right, #f0f9a8 0%, #c5e1d0 45%, #b8e3f0 100%)',
        clipPath:
          'polygon(0 0, 100% 0, 100% 82%, 90% 85%, 75% 87%, 60% 89%, 45% 91%, 30% 93%, 15% 95%, 0 97%)',
        maskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 25%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 25%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0) 100%)',
      }}
    />
  )
}
