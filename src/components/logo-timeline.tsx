import { clsx } from 'clsx'

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative">
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-gray-900/15 from-[2px] to-[2px] bg-size-[12px_100%]" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-gray-900/10 from-[2px] to-[2px] bg-size-[12px_100%] group-last:hidden" />
      {children}
    </div>
  )
}

function Logo({
  label,
  src,
  className,
}: {
  label: string
  src?: string
  className: string
}) {
  return (
    <div
      className={clsx(
        className,
        'absolute top-2 grid w-fit items-center gap-2 px-3 py-1 whitespace-nowrap',
        src ? 'grid-cols-[1rem_1fr]' : 'grid-cols-1',
        'rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset',
        '[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-timing-function:linear]',
      )}
    >
      {src && <img alt="" src={src} className="size-4" />}
      <span className="text-sm/6 font-medium text-white">{label}</span>
    </div>
  )
}

export function LogoTimeline() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <div className="@container absolute inset-0 grid grid-cols-1 pt-8">
        <Row>
          <Logo
            label="Tele-ICU"
            className="[animation-delay:-26s] [animation-duration:30s]"
          />
          <Logo
            label="Analytics"
            className="[animation-delay:-8s] [animation-duration:30s]"
          />
        </Row>
        <Row>
          <Logo
            label="ABDM"
            className="[animation-delay:-40s] [animation-duration:40s]"
          />
          <Logo
            label="Doctor Connect"
            className="[animation-delay:-20s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          <Logo
            label="Pretty Print"
            className="[animation-delay:-10s] [animation-duration:40s]"
          />
          <Logo
            label="Scribe"
            className="[animation-delay:-32s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          <Logo
            label="HCX"
            className="[animation-delay:-45s] [animation-duration:45s]"
          />
          <Logo
            label="LiveKit"
            className="[animation-delay:-23s] [animation-duration:45s]"
          />
        </Row>
      </div>
    </div>
  )
}
