import { clsx } from 'clsx'
import Image from 'next/image'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx(className, 'grid grid-cols-2 gap-5 md:grid-cols-4')}>
      <div className="flex justify-center">
        <div className="flex w-48 items-center">
          <Image
            width={160}
            height={40}
            className="object-contain"
            src="/logos/aicte.png"
            alt="AICTE Logo"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex w-24 items-center">
          <Image
            width={160}
            height={40}
            className="object-contain"
            src="/logos/e-gov-foundation-logo.png"
            alt="e-gov foundation Logo"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex w-16 items-center justify-center">
          <Image
            width={160}
            height={40}
            className="object-contain"
            src="/logos/ACT-Logo.png"
            alt="ACT Logo"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex w-56 items-center">
          <Image
            width={160}
            height={40}
            className="object-contain"
            src="/logos/logo-msdf-color.svg"
            alt="Michael & Susan Dell Foundation Logo"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex w-24 items-center">
          <Image
            width={160}
            height={40}
            className="object-contain"
            src="/logos/ima-kochi.png"
            alt="IMA Logo"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex w-36 items-center">
          <Image
            width={160}
            height={40}
            className="object-contain"
            src="/logos/kerala-startup-mission.svg"
            alt="Kerala Startup Mission Logo"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex w-36 items-center">
          <Image
            width={160}
            height={40}
            className="object-contain"
            src="/logos/saturn-global-logo.svg"
            alt="Saturn Global Logo"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex w-32 items-center">
          <Image
            width={160}
            height={40}
            className="object-contain"
            src="/logos/swasth.svg"
            alt="Swasth Logo"
          />
        </div>
      </div>
    </div>
  )
}
