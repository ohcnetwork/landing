import { clsx } from 'clsx'
import Image from 'next/image'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'grid grid-cols-2 gap-5 md:grid-cols-4',
      )}
    >
      <div className="flex justify-center">
        <div className="w-48 flex items-center">
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
        <div className="w-24 flex items-center">
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
        <div className="w-16 flex justify-center items-center">
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
        <div className="w-56 flex items-center">
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
        <div className="w-24 flex items-center">
          <Image
            width={160}
            height={40}
            className="object-contain"
            src="/logos/ima-kochi.png"
            alt="IMA Logo"
          />
        </div>
      </div>
      
      <div className="flex justify-center items-center">
        <div className="w-36 flex items-center">
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
        <div className="w-36 flex items-center">
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
        <div className="w-32 flex items-center">
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
