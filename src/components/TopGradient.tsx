import { Gradient } from './gradient'

export function TopGradient() {
  return (
    <Gradient
      className="absolute top-0 left-1/2 h-[62vh] w-screen -translate-x-1/2 sm:h-[68vh]"
      style={{
        background:
          'linear-gradient(135deg, #f8fbf2 0%, #eef8e8 28%, #e8f4ec 52%, #e5f3ec 78%, #fbfcfb 100%)',
        clipPath:
          'polygon(0 0, 100% 0, 100% 76%, 82% 80%, 64% 84%, 44% 88%, 22% 92%, 0 96%)',
        maskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 34%, rgba(0,0,0,0.46) 68%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 34%, rgba(0,0,0,0.46) 68%, rgba(0,0,0,0) 100%)',
      }}
    />
  )
}
