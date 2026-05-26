import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[#f7f9f6] from-0% via-[#edf6ee] via-48% to-[#e5f3ec] to-100% sm:bg-linear-145',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          'bg-linear-115 from-[#f7f9f6] from-0% via-[#e8f1ef] via-50% to-[#dff2e9] to-100%',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
