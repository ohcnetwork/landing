import { clsx } from 'clsx'

const logos = [
  {
    src: '/logos/aicte.png',
    alt: 'AICTE',
    className: 'max-h-10 max-w-36',
  },
  {
    src: '/logos/e-gov-foundation-logo.png',
    alt: 'eGov Foundation',
    className: 'max-h-10 max-w-28',
  },
  {
    src: '/logos/ACT-Logo.png',
    alt: 'ACT',
    className: 'max-h-10 max-w-24',
  },
  {
    src: '/logos/logo-msdf-color.svg',
    alt: 'Michael & Susan Dell Foundation',
    className: 'max-h-10 max-w-44',
  },
  {
    src: '/logos/ima-kochi.png',
    alt: 'IMA Kochi',
    className: 'max-h-10 max-w-24',
  },
  {
    src: '/logos/kerala-startup-mission.svg',
    alt: 'Kerala Startup Mission',
    className: 'max-h-10 max-w-36',
  },
  {
    src: '/logos/saturn-global-logo.svg',
    alt: 'Saturn Global',
    className: 'max-h-10 max-w-36',
  },
  {
    src: '/logos/swasth.svg',
    alt: 'Swasth',
    className: 'max-h-10 max-w-32',
  },
]

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(className, 'flex flex-wrap items-center gap-x-8 gap-y-5')}
    >
      {logos.map((logo) => (
        <div
          key={logo.src}
          className="flex min-h-8 items-center justify-center"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className={clsx(
              logo.className,
              'object-contain opacity-62 grayscale saturate-[0.75] transition hover:opacity-100 hover:grayscale-0 hover:saturate-100',
            )}
          />
        </div>
      ))}
    </div>
  )
}
