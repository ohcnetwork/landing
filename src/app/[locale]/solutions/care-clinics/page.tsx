import { Container } from '@/components/container'
import { FaqSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { pageMetadata } from '@/i18n/metadata'
import { localizePath } from '@/i18n/paths'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import { clsx } from 'clsx'
import {
  AlignLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Database,
  FileText,
  Key,
  Lock,
  MessageCircle,
  QrCode,
  Server,
  Shield,
  User,
  Wifi,
  WifiOff,
  type LucideIcon,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { AutoplayVideo } from './autoplay-video'
import s from './care-desktop.module.css'
import {
  ClinicDownloadButton,
  ClinicDownloadProvider,
  type ClinicDownloadLabels,
} from './download-button'
import { CLINIC_RELEASES_URL, CLINIC_REPO_URL } from './release-download'

const path = '/solutions/care-clinics'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({
    locale,
    namespace: 'solutionsCareClinics.meta',
  })

  return pageMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
    keywords: [
      'CARE Clinic',
      'free clinic management software',
      'open source clinic software',
      'clinic EMR',
      'offline clinic software',
      'OPD management software',
      'small clinic software',
      'clinic billing software',
      'patient records software',
      'self-hosted EMR',
    ],
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      url: localizePath(path, locale),
      images: [
        {
          url: '/og/care-desktop.jpg',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      title: t('title'),
      description: t('twitterDescription'),
      images: ['/og/care-desktop.jpg'],
    },
  })
}

const REPO_URL = CLINIC_REPO_URL
const LICENSE_URL = `${REPO_URL}/blob/main/LICENSE`
const DOCS_URL = `${REPO_URL}/blob/main/docs/README.md`
const SUPPORT_FORM_URL = 'https://forms.gle/tW2LT3edhMWFTBxw8'
/** Latest published release when the release notes on this page were checked. */
const LATEST_RELEASE = 'v0.1.9'
/** Version shown in the screenshots, which still carry CARE Desktop branding. */
const SCREENSHOT_VERSION = '0.1.8'
const CLINIC_HOST = 'care.local'
const CLINIC_URL = 'https://<clinic>.local'
const CLINIC_SETUP_URL = 'http://<clinic>.local/setup'

const overviewTiles = [
  { id: 'records', icon: Server },
  { id: 'desks', icon: Wifi },
  { id: 'offline', icon: WifiOff },
  { id: 'backups', icon: Database },
] as const

const careSteps = [
  {
    id: 'consultation',
    video: 'clinical_data_capture',
    poster: '/core/posters/clinical_data_capture.jpg',
  },
  {
    id: 'forms',
    video: 'Customizable_EMR_Forms',
    poster: '/core/posters/Customizable_EMR_Forms.jpg',
  },
  {
    id: 'investigations',
    video: 'lab_management',
    poster: '/core/posters/lab_management.jpg',
  },
  {
    id: 'pharmacy',
    video: 'pharmacy_and_inventory',
    poster: '/care-desktop/posters/pharmacy_and_inventory.jpg',
  },
  {
    id: 'billing',
    video: 'billing_and_accounting',
    poster: '/care-desktop/posters/billing_and_accounting.jpg',
  },
  {
    id: 'reports',
    video: 'dynamic_reports',
    poster: '/care-desktop/report-templates.webp',
  },
] as const

const boxItems = [
  { id: 'appointments', icon: Calendar },
  { id: 'registration', icon: User },
  { id: 'prescriptions', icon: FileText },
  { id: 'followUp', icon: Clock },
] as const

const plugins = [
  { id: 'onboarding', icon: AlignLeft, name: 'CARE Onboarding' },
] as const

const dataPoints = [
  { id: 'telemetry', icon: Shield },
  { id: 'encryption', icon: Lock },
  { id: 'backups', icon: Database },
  { id: 'recovery', icon: Key },
] as const

const setupSteps = [
  {
    id: 'download',
    image: '/care-desktop/first-run.webp',
    width: 2190,
    height: 1370,
  },
  {
    id: 'host',
    image: '/care-desktop/setup-review.webp',
    width: 2296,
    height: 1606,
  },
  {
    id: 'team',
    image: '/care-desktop/client-connect.webp',
    width: 2188,
    height: 1370,
  },
  {
    id: 'onboarding',
    image: '/care-desktop/onboarding.webp',
    width: 2070,
    height: 1398,
  },
] as const

const comparisonRows = [
  'bestFor',
  'whereItRuns',
  'price',
  'internet',
  'teamAccess',
  'backups',
] as const

const faqIds = [
  'free',
  'requirements',
  'storage',
  'public',
  'team',
  'offline',
  'download',
  'backups',
  'migration',
  'sameAsCare',
  'usageData',
  'opd',
  'plugins',
  'updates',
] as const

type Faq = { question: string; answer: string }

const h2Class =
  'text-[clamp(36px,4.4vw,64px)] leading-[1.02] font-medium tracking-normal text-balance'
const leadClass =
  'text-[clamp(18px,1.5vw,21px)] leading-[1.6] text-pretty text-[#374151]'
const eyebrowClass =
  'font-mono text-xs font-semibold tracking-[0.18em] text-[#046c4e] uppercase'
const tileHover =
  'transition duration-400 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(1,71,55,0.35)]'
const paneHover =
  'transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.5'
const mintButton =
  'inline-flex items-center gap-2.5 rounded-[14px] bg-white font-semibold text-[#014737] no-underline shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] transition-colors hover:bg-[#def7ec]'
const glassButton =
  'inline-flex items-center gap-2.5 rounded-[14px] border border-white/25 bg-white/10 font-bold text-white no-underline transition-colors hover:bg-white/20'

const gridLines = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
  backgroundSize: '48px 48px',
}

const shineText =
  'bg-[linear-gradient(90deg,#84e1bc_0%,#ffffff_40%,#31c48d_60%,#84e1bc_100%)] bg-clip-text text-transparent'

function Shell({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className="px-6 lg:px-8">
      <div className={clsx('mx-auto max-w-7xl', className)}>{children}</div>
    </div>
  )
}

function Glow({
  className,
  strength = 0.28,
}: {
  className?: string
  strength?: number
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx('pointer-events-none absolute', className)}
      style={{
        background: `radial-gradient(ellipse at 50% 70%, rgba(49,196,141,${strength}), rgba(49,196,141,0) 68%)`,
      }}
    />
  )
}

function Blob({
  className,
  color = '49,196,141',
  strength = 0.4,
}: {
  className?: string
  color?: string
  strength?: number
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx('pointer-events-none absolute rounded-full', className)}
      style={{
        background: `radial-gradient(circle, rgba(${color},${strength}), rgba(${color},0) 65%)`,
      }}
    />
  )
}

function Chip({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'absolute flex items-center gap-2.5 rounded-full bg-white/96 px-3.5 py-2.5 text-[13.5px] font-bold whitespace-nowrap text-[#014737] shadow-[0_16px_32px_-16px_rgba(0,0,0,0.5)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

function LiveDot({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        s.pulse,
        'block size-2.5 rounded-[3px] bg-[#0d9f6e]',
        className,
      )}
    />
  )
}

function IconBadge({
  icon: Icon,
  dark = false,
  className,
}: {
  icon: LucideIcon
  dark?: boolean
  className?: string
}) {
  return (
    <span
      className={clsx(
        'flex shrink-0 items-center justify-center',
        dark
          ? 'size-12 rounded-[14px] bg-[#014737] text-[#84e1bc]'
          : 'size-11 rounded-xl bg-[#def7ec] text-[#046c4e]',
        className,
      )}
    >
      <Icon className="size-[22px]" strokeWidth={2} aria-hidden="true" />
    </span>
  )
}

function ArrowLink({
  href,
  children,
  icon: Icon = ArrowUpRight,
  className,
}: {
  href: string
  children: React.ReactNode
  icon?: LucideIcon
  className?: string
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex items-center gap-1.5 font-bold text-[#046c4e] no-underline hover:text-[#014737]',
        className,
      )}
    >
      {children}
      <Icon className="size-[15px]" strokeWidth={2.4} aria-hidden="true" />
    </Link>
  )
}

function Hero() {
  const t = useTranslations('solutionsCareClinics.hero')
  const tLinks = useTranslations('solutionsCareClinics.links')

  return (
    <section
      id="top"
      className="relative overflow-hidden text-white"
      style={{
        background:
          'linear-gradient(180deg, #031f17 0%, #014737 58%, #052a20 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <Blob
          strength={0.55}
          className={clsx(
            s.blob,
            '-top-[220px] -left-40 size-[720px] blur-[40px]',
          )}
        />
        <Blob
          color="132,225,188"
          strength={0.38}
          className={clsx(
            s.blobAlt,
            'top-40 -right-[260px] size-[820px] blur-[50px]',
          )}
        />
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_30%,#000_10%,transparent_70%)]"
          style={gridLines}
        />
      </div>

      <Shell className="relative z-[1] flex flex-col items-center gap-14 pt-16 pb-24 sm:pt-20 lg:gap-16 lg:pb-28">
        <div className="flex max-w-[1080px] flex-col items-center gap-6 text-center">
          <p
            className={clsx(
              s.intro,
              s.delay1,
              'inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 py-2 pr-3.5 pl-2.5 text-[13.5px] font-semibold text-[#def7ec]',
            )}
          >
            <span
              className={clsx(
                s.pulse,
                'block size-[9px] rounded-full bg-[#31c48d]',
              )}
            />
            CARE Clinic
            <span
              aria-hidden="true"
              className="hidden text-[#84e1bc] sm:inline"
            >
              ·
            </span>
            <span className="hidden sm:inline">{t('tagline')}</span>
          </p>
          <h1
            className={clsx(
              s.intro,
              s.delay2,
              'font-display text-[clamp(44px,6vw,88px)] leading-[0.94] font-bold tracking-normal text-balance text-white',
            )}
          >
            {t.rich('title', {
              shine: (chunks) => (
                <span className={clsx(s.shine, shineText, 'block')}>
                  {chunks}
                </span>
              ),
            })}
          </h1>
          <p
            className={clsx(
              s.intro,
              s.delay3,
              'max-w-[700px] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-pretty text-[#bdf0d9]',
            )}
          >
            {t('body')}
          </p>
          <div
            className={clsx(
              s.intro,
              s.delay4,
              'mt-2.5 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center',
            )}
          >
            <ClinicDownloadButton
              className={clsx(
                mintButton,
                'h-14 justify-center px-7 text-[17px]',
              )}
            />
            <a
              href={SUPPORT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                glassButton,
                'h-14 justify-center px-4 text-base sm:px-6',
              )}
            >
              <MessageCircle className="size-[18px]" aria-hidden="true" />
              {tLinks('requestSetup')}
            </a>
          </div>
          <a
            href={CLINIC_RELEASES_URL}
            className="text-sm text-[#bdf0d9] underline underline-offset-4 hover:text-white"
          >
            {tLinks('githubReleases')}
          </a>
          <p
            className={clsx(
              s.intro,
              s.delay4,
              'text-sm font-semibold tracking-[0.02em] text-[#84e1bc]',
            )}
          >
            {t('motto')}
          </p>
        </div>

        <div
          className={clsx(s.intro, s.delay5, 'relative w-full max-w-[1100px]')}
        >
          <Glow
            strength={0.4}
            className="-inset-[60px] rounded-[60px] blur-[34px]"
          />
          <figure
            className={clsx(
              paneHover,
              'relative m-0 overflow-hidden rounded-[18px] border border-white/15 bg-[#04241b] shadow-[0_60px_120px_-50px_rgba(0,0,0,0.7)] sm:rounded-[26px]',
            )}
          >
            <img
              src="/care-desktop/control-panel.webp"
              width={2296}
              height={1606}
              fetchPriority="high"
              alt={t('imageAlt')}
              className="h-auto w-full"
            />
            <figcaption className="sr-only">
              {t('imageCaption', { version: SCREENSHOT_VERSION })}
            </figcaption>
          </figure>
          <Chip
            className={clsx(s.floaty, '-top-[22px] left-3 sm:-left-[18px]')}
          >
            <LiveDot />
            {t.rich('clinicAddress', {
              host: CLINIC_HOST,
              mono: (chunks) => (
                <span className={clsx('font-mono', 'font-semibold')}>
                  {chunks}
                </span>
              ),
            })}
          </Chip>
          <Chip
            className={clsx(
              s.floatyAlt,
              'right-3 -bottom-[22px] sm:-right-[14px]',
            )}
          >
            <Database className="size-4" strokeWidth={2.4} aria-hidden="true" />
            {t('backups')}
          </Chip>
        </div>
        <p className="max-w-[760px] text-center text-sm leading-relaxed text-[#bdf0d9]">
          {t('screenshotNote', { version: SCREENSHOT_VERSION })}
        </p>
      </Shell>
    </section>
  )
}

function Ticker() {
  const t = useTranslations('solutionsCareClinics.ticker')
  const highlights: string[] = t.raw('items')

  return (
    <section
      aria-label={t('label')}
      className={clsx(
        s.tickerWrap,
        'relative overflow-hidden border-y border-white/8 bg-[#031f17] text-[#def7ec]',
      )}
    >
      <div
        className={clsx(
          s.ticker,
          'flex w-max items-center py-[18px] text-[15px] font-semibold whitespace-nowrap',
        )}
      >
        {[...highlights, ...highlights].map((item, index) => (
          <span
            key={index}
            aria-hidden={index >= highlights.length ? true : undefined}
            className="flex items-center gap-3.5 pr-12"
          >
            <span className="block size-2 rounded-[2px] bg-[#31c48d]" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

function Overview() {
  const t = useTranslations('solutionsCareClinics.overview')

  return (
    <section id="overview" className="bg-white">
      <Shell className="flex flex-col gap-12 py-20 lg:gap-14 lg:py-24">
        <div
          className={clsx(
            s.reveal,
            'grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2 lg:items-start',
          )}
        >
          <h2 className={h2Class}>{t('title')}</h2>
          <p className={leadClass}>{t('body')}</p>
        </div>

        <div
          className={clsx(
            s.reveal,
            'grid auto-rows-[minmax(190px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4',
          )}
        >
          <div
            className={clsx(
              tileHover,
              'relative flex flex-col justify-end gap-2 overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#014737,#03543f)] p-7 text-white sm:col-span-2',
            )}
          >
            <span
              aria-hidden="true"
              className="absolute -top-[30px] right-2.5 font-display text-[200px] leading-none font-bold text-white/8"
            >
              ₹0
            </span>
            <span className="relative text-[22px] font-semibold">
              {t('price.title')}
            </span>
            <span className="relative text-[15.5px] leading-[1.5] text-[#bdf0d9]">
              {t('price.text')}
            </span>
          </div>
          {overviewTiles.map((tile) => (
            <div
              key={tile.id}
              className={clsx(
                tileHover,
                'flex flex-col justify-between gap-[18px] rounded-[22px] bg-[#f4f7f5] p-[26px]',
              )}
            >
              <IconBadge icon={tile.icon} />
              <span className="flex flex-col gap-1.5">
                <span className="text-[19px] font-semibold">
                  {t(`tiles.${tile.id}.title`)}
                </span>
                <span className="text-[15px] leading-[1.5] text-[#5b6660]">
                  {t(`tiles.${tile.id}.text`)}
                </span>
              </span>
            </div>
          ))}
          <div
            className={clsx(
              tileHover,
              'flex flex-col justify-between gap-[18px] rounded-[22px] bg-[#111827] px-7 py-[26px] text-white sm:col-span-2',
            )}
          >
            <span className="flex flex-col gap-1.5">
              <span className="text-[19px] font-semibold">
                {t('openSource.title')}
              </span>
              <span className="text-[15px] leading-[1.5] text-[#b0aea5]">
                {t('openSource.text')}
              </span>
            </span>
            <span
              className={clsx(
                'font-mono',
                'flex items-center gap-3 overflow-hidden rounded-xl bg-white/8 px-4 py-3 text-[13.5px] font-medium whitespace-nowrap text-[#84e1bc]',
              )}
            >
              <span className="text-[#5e5d59]">$</span>
              <span className="truncate">
                git clone github.com/ohcnetwork/care_clinic
              </span>
            </span>
          </div>
        </div>
      </Shell>
    </section>
  )
}

function Price() {
  const t = useTranslations('solutionsCareClinics.price')

  return (
    <section
      id="price"
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(160deg, #031f17, #014737 70%)' }}
    >
      <Blob
        className={clsx(
          s.blob,
          '-top-[200px] -right-[100px] size-[700px] blur-[50px]',
        )}
      />
      <Shell className="relative grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <h2
          className={clsx(
            s.reveal,
            'flex flex-col gap-2 leading-[0.92] font-medium tracking-normal',
          )}
        >
          {t.rich('title', {
            amount: (chunks) => (
              <span
                className={clsx(
                  s.shine,
                  shineText,
                  'font-display text-[clamp(120px,15vw,220px)] font-bold',
                )}
              >
                {chunks}
              </span>
            ),
            text: (chunks) => (
              <span className="text-[clamp(30px,3.4vw,50px)] text-white">
                {chunks}
              </span>
            ),
          })}
        </h2>
        <div className={clsx(s.reveal, 'flex flex-col gap-6')}>
          <p className="text-[19px] leading-[1.6] text-pretty text-[#def7ec]">
            {t('body')}
          </p>
          <p className="rounded-[14px] border border-white/18 bg-white/6 px-[18px] py-4 text-sm leading-[1.55] text-[#bdf0d9]">
            {t('note')}
          </p>
        </div>
      </Shell>
    </section>
  )
}

function CareInMotion() {
  const t = useTranslations('solutionsCareClinics.care')

  return (
    <section id="care" className="bg-white">
      <Shell className="flex flex-col gap-16 py-20 lg:gap-24 lg:py-24">
        <div
          className={clsx(
            s.reveal,
            'flex flex-col items-center gap-5 text-center',
          )}
        >
          <p className="inline-flex items-center rounded-full bg-[#def7ec] px-3.5 py-2 font-mono text-xs font-semibold tracking-[0.18em] text-[#046c4e] uppercase">
            {t('eyebrow')}
          </p>
          <h2
            className={clsx(
              h2Class,
              'max-w-[900px] text-[clamp(36px,4.6vw,68px)]',
            )}
          >
            {t('title')}
          </h2>
          <p className={clsx(leadClass, 'max-w-[720px]')}>{t('body')}</p>
          <p className="max-w-[760px] text-sm leading-relaxed text-[#5b6660]">
            {t('disclaimer')}
          </p>
        </div>

        {careSteps.map((step, index) => {
          const flip = index % 2 === 1
          const caption = t(`steps.${step.id}.caption`)
          return (
            <article
              key={step.video}
              className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2"
            >
              <div
                className={clsx(
                  flip ? s.fromRight : s.fromLeft,
                  'flex max-w-[480px] flex-col gap-4',
                  flip && 'lg:order-2 lg:justify-self-end',
                )}
              >
                <span
                  className={clsx(
                    'font-mono',
                    'text-[13px] font-semibold text-[#0d9f6e]',
                  )}
                >
                  {String(index + 1).padStart(2, '0')}{' '}
                  <span className="text-[#8a948f]">
                    / {String(careSteps.length).padStart(2, '0')}
                  </span>
                </span>
                <h3 className={eyebrowClass}>{t(`steps.${step.id}.label`)}</h3>
                <p className="text-[clamp(30px,3vw,44px)] leading-[1.08] font-medium tracking-normal text-balance text-[#111827]">
                  {t(`steps.${step.id}.title`)}
                </p>
                <p className="text-[17px] leading-[1.6] text-pretty text-[#5b6660]">
                  {t(`steps.${step.id}.text`)}
                </p>
              </div>
              <div className={clsx(s.zoom, 'relative', flip && 'lg:order-1')}>
                <Glow className="-inset-[30px] rounded-[50px] blur-[30px]" />
                <figure
                  className={clsx(
                    paneHover,
                    'relative m-0 aspect-[1920/1268] overflow-hidden rounded-[22px] border border-[#dfe6e2] bg-[#04241b] shadow-[0_40px_80px_-40px_rgba(1,71,55,0.5)]',
                  )}
                >
                  {step.video === 'dynamic_reports' ? (
                    <img
                      src={step.poster}
                      width={1920}
                      height={1268}
                      loading="lazy"
                      alt={t('reportsAlt')}
                      className="absolute inset-0 size-full object-contain"
                    />
                  ) : (
                    <AutoplayVideo
                      src={`/core/${step.video}.mp4`}
                      poster={step.poster}
                      label={t('videoLabel', { caption })}
                      className="absolute inset-0 size-full object-contain"
                    />
                  )}
                  <figcaption className="sr-only">
                    {step.video === 'dynamic_reports'
                      ? t('reportsCaption', { caption })
                      : t('demoCaption', { caption })}
                  </figcaption>
                </figure>
                <p className="relative mt-3 text-sm leading-relaxed text-[#5b6660]">
                  {step.video === 'dynamic_reports'
                    ? t('reportsNote')
                    : t('demoNote')}
                </p>
              </div>
            </article>
          )
        })}
      </Shell>
    </section>
  )
}

function AlsoInTheBox() {
  const t = useTranslations('solutionsCareClinics.also')

  return (
    <section id="also" className="bg-[#f4f7f5]">
      <Shell className="flex flex-col gap-9 py-20 lg:py-24">
        <div className={clsx(s.reveal, 'flex flex-col gap-2.5')}>
          <p className={eyebrowClass}>{t('eyebrow')}</p>
          <h2 className="max-w-[760px] text-[clamp(24px,2.4vw,34px)] leading-[1.15] font-medium tracking-normal text-balance text-[#111827]">
            {t('title')}
          </h2>
        </div>
        <div
          className={clsx(
            s.reveal,
            'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4',
          )}
        >
          {boxItems.map((item) => (
            <article
              key={item.id}
              className={clsx(
                tileHover,
                'flex flex-col gap-3.5 rounded-[20px] border border-[#dfe6e2] bg-white p-[26px]',
              )}
            >
              <IconBadge
                icon={item.icon}
                className="size-[42px] rounded-[11px]"
              />
              <h3 className={eyebrowClass}>{t(`items.${item.id}.label`)}</h3>
              <p className="text-[22px] leading-[1.1] font-semibold">
                {t(`items.${item.id}.title`)}
              </p>
              <p className="text-[15px] leading-[1.55] text-[#5b6660]">
                {t(`items.${item.id}.text`)}
              </p>
            </article>
          ))}
        </div>
      </Shell>
    </section>
  )
}

function ClinicSection() {
  const t = useTranslations('solutionsCareClinics.clinic')

  return (
    <section
      id="desktop"
      className="relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(180deg, #031f17, #014737 60%, #052a20)',
      }}
    >
      <Blob
        className={clsx(
          s.blob,
          '-top-[260px] left-[30%] size-[800px] blur-[50px]',
        )}
      />
      <Shell className="relative flex flex-col items-center gap-14 py-20 lg:py-28">
        <div
          className={clsx(
            s.reveal,
            'flex max-w-[880px] flex-col items-center gap-[18px] text-center',
          )}
        >
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[#84e1bc] uppercase">
            CARE Clinic
          </p>
          <h2 className="text-[clamp(34px,4.4vw,62px)] leading-[1.02] font-medium tracking-normal text-balance text-white">
            {t('title')}
          </h2>
          <p className="max-w-[680px] text-[clamp(17px,1.4vw,20px)] leading-[1.6] text-pretty text-[#bdf0d9]">
            {t('body')}
          </p>
        </div>
        <div className={clsx(s.zoom, 'relative w-full max-w-[1000px]')}>
          <Glow
            strength={0.38}
            className="-inset-[50px] rounded-[60px] blur-[34px]"
          />
          <figure
            className={clsx(
              paneHover,
              'relative m-0 overflow-hidden rounded-[18px] border border-white/15 bg-[#f4f7f5] shadow-[0_60px_120px_-50px_rgba(0,0,0,0.7)] sm:rounded-[24px]',
            )}
          >
            <img
              src="/care-desktop/control-panel.webp"
              width={2296}
              height={1606}
              loading="lazy"
              decoding="async"
              alt={t('imageAlt', { version: SCREENSHOT_VERSION })}
              className="h-auto w-full"
            />
          </figure>
          <Chip
            className={clsx(s.floaty, '-top-[22px] right-3 sm:-right-[14px]')}
          >
            <LiveDot />
            {t('localCare')}
          </Chip>
          <Chip
            className={clsx(
              s.floatyAlt,
              '-bottom-[22px] left-3 sm:-left-[14px]',
            )}
          >
            <Lock className="size-4" strokeWidth={2.4} aria-hidden="true" />
            {t('backups')}
          </Chip>
        </div>
      </Shell>
    </section>
  )
}

function PluginsSection() {
  const t = useTranslations('solutionsCareClinics.plugins')

  return (
    <section id="plugins" className="bg-white">
      <Shell className="flex flex-col gap-12 py-20 lg:py-24">
        <div
          className={clsx(s.reveal, 'flex max-w-[840px] flex-col gap-[18px]')}
        >
          <h2 className={h2Class}>{t('title')}</h2>
          <p className={leadClass}>{t('body')}</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className={clsx(s.reveal, 'grid grid-cols-1 gap-5')}>
            {plugins.map((plugin) => (
              <article
                key={plugin.name}
                className={clsx(
                  tileHover,
                  'flex flex-col gap-3 rounded-[22px] bg-[#f4f7f5] px-[30px] pt-[30px] pb-[26px]',
                )}
              >
                <IconBadge icon={plugin.icon} />
                <h3 className={eyebrowClass}>{plugin.name}</h3>
                <p className="text-[26px] leading-[1.1] font-semibold text-[#111827]">
                  {t(`items.${plugin.id}.title`)}
                </p>
                <p className="text-base leading-[1.55] text-[#5b6660]">
                  {t(`items.${plugin.id}.text`)}
                </p>
                <p className="mt-auto border-t border-[#dfe6e2] pt-4 text-[13.5px] font-semibold text-[#5b6660]">
                  {t(`items.${plugin.id}.note`)}
                </p>
              </article>
            ))}
          </div>
          <p className="text-[15px] leading-[1.55] text-[#5b6660]">
            {t('hostedNote')}
          </p>
          <p className="text-sm leading-relaxed text-[#5b6660]">
            {t.rich('releaseNote', {
              version: LATEST_RELEASE,
              catalog: (chunks) => (
                <a
                  href={`${REPO_URL}/blob/main/app/internal/plugins/catalog.yml`}
                  className="font-semibold underline underline-offset-4"
                >
                  {chunks}
                </a>
              ),
              release: (chunks) => (
                <a
                  href={`${REPO_URL}/releases/tag/${LATEST_RELEASE}`}
                  className="font-semibold underline underline-offset-4"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 pt-4 lg:grid-cols-2">
          <div
            className={clsx(s.reveal, 'flex max-w-[520px] flex-col gap-3.5')}
          >
            <h3 className="text-[clamp(28px,2.8vw,38px)] leading-[1.1] font-medium tracking-normal">
              {t('beyond.title')}
            </h3>
            <p className="text-[17px] leading-[1.6] text-pretty text-[#374151]">
              {t.rich('beyond.body', {
                link: (chunks) => (
                  <Link
                    href="/product/apps-integrations"
                    className="font-bold text-[#046c4e] underline decoration-[#046c4e]/30 underline-offset-4 hover:text-[#014737]"
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </p>
            <p className="text-[15px] leading-[1.6] text-[#5b6660]">
              {t('beyond.applyNote')}
            </p>
            <p className="text-[15px] leading-[1.6] text-[#5b6660]">
              {t('beyond.trustNote')}
            </p>
          </div>
          <div className={clsx(s.zoom, 'relative')}>
            <Glow className="-inset-[30px] rounded-[50px] blur-[30px]" />
            <figure
              className={clsx(
                paneHover,
                'relative m-0 flex flex-col gap-3.5 rounded-[22px] border border-[#dfe6e2] bg-white px-[18px] pt-[18px] pb-5 shadow-[0_40px_80px_-40px_rgba(1,71,55,0.5)]',
              )}
            >
              <span
                className={clsx(
                  'font-mono',
                  'flex items-center gap-2 text-xs font-semibold text-[#5b6660]',
                )}
              >
                <span>{t('breadcrumb.controlPanel')}</span>
                <span aria-hidden="true">›</span>
                <span className="text-[#046c4e]">
                  {t('breadcrumb.plugins')}
                </span>
              </span>
              <div className="relative overflow-hidden rounded-xl bg-[#f4f7f5]">
                <img
                  src="/care-desktop/plugins.webp"
                  width={2296}
                  height={1606}
                  loading="lazy"
                  decoding="async"
                  alt={t('imageAlt')}
                  className="h-auto w-full"
                />
              </div>
            </figure>
          </div>
        </div>
      </Shell>
    </section>
  )
}

function UpdatesSection() {
  const t = useTranslations('solutionsCareClinics.updates')

  return (
    <section id="updates" className="bg-[#f4f7f5]">
      <Shell className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <div className={clsx(s.reveal, 'flex flex-col gap-5')}>
          <p className={eyebrowClass}>{t('eyebrow')}</p>
          <h2 className={h2Class}>{t('title')}</h2>
          <p className="text-[17px] leading-[1.6] text-[#374151]">
            {t('careUpdates')}
          </p>
          <p className="text-[17px] leading-[1.6] text-[#374151]">
            {t('appUpdates')}
          </p>
          <p className="text-[15px] leading-[1.6] text-[#5b6660]">
            {t('pluginUpdates')}
          </p>
          <ArrowLink
            href={`${REPO_URL}/blob/main/docs/desktop-workflows.md#updates-and-running-work`}
          >
            {t('workflowLink')}
          </ArrowLink>
        </div>
        <figure
          className={clsx(
            s.zoom,
            'm-0 overflow-hidden rounded-[22px] border border-[#dfe6e2] bg-white shadow-[0_40px_80px_-40px_rgba(1,71,55,0.5)]',
          )}
        >
          <img
            src="/care-desktop/updates.webp"
            width={2296}
            height={1606}
            loading="lazy"
            decoding="async"
            alt={t('imageAlt', { version: SCREENSHOT_VERSION })}
            className="h-auto w-full"
          />
        </figure>
      </Shell>
    </section>
  )
}

function DataSection() {
  const t = useTranslations('solutionsCareClinics.data')

  return (
    <section id="data" className="bg-[#f4f7f5]">
      <Shell className="flex flex-col gap-12 py-20 lg:py-24">
        <div
          className={clsx(
            s.reveal,
            'grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-2 lg:items-end',
          )}
        >
          <h2 className={h2Class}>{t('title')}</h2>
          <p className={leadClass}>{t('body')}</p>
        </div>
        <div
          className={clsx(s.reveal, 'grid grid-cols-1 gap-5 md:grid-cols-2')}
        >
          {dataPoints.map((point) => (
            <div
              key={point.id}
              className={clsx(
                tileHover,
                'flex gap-5 rounded-[22px] border border-[#dfe6e2] bg-white p-6 sm:p-[30px]',
              )}
            >
              <IconBadge icon={point.icon} dark />
              <span className="flex flex-col gap-2">
                <h3 className="text-2xl leading-[1.1] font-semibold">
                  {t(`points.${point.id}.title`)}
                </h3>
                <p className="text-base leading-[1.55] text-[#5b6660]">
                  {t(`points.${point.id}.text`)}
                </p>
              </span>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  )
}

function TeamSection() {
  const t = useTranslations('solutionsCareClinics.team')

  return (
    <section id="team" className="bg-white">
      <Shell className="grid grid-cols-1 items-center gap-x-16 gap-y-14 py-20 lg:grid-cols-2 lg:py-24">
        <div
          className={clsx(s.reveal, 'flex max-w-[520px] flex-col gap-[18px]')}
        >
          <h2 className={h2Class}>{t('title')}</h2>
          <p className={leadClass}>{t('body')}</p>
          <p className="text-sm leading-[1.55] text-[#5b6660]">{t('note')}</p>
        </div>
        <div className={clsx(s.zoom, 'relative flex flex-col gap-4')}>
          <Glow className="-inset-[30px] rounded-[50px] blur-[30px]" />
          <figure
            className={clsx(
              paneHover,
              'relative m-0 overflow-hidden rounded-[22px] border border-[#dfe6e2] bg-[#f4f7f5] shadow-[0_40px_80px_-40px_rgba(1,71,55,0.5)]',
            )}
          >
            <img
              src="/care-desktop/client-connect.webp"
              width={2188}
              height={1370}
              loading="lazy"
              decoding="async"
              alt={t('imageAlt')}
              className="h-auto w-full"
            />
          </figure>
          <div className="relative flex items-center gap-4 rounded-2xl border border-[#dfe6e2] bg-[#f4f7f5] px-4 py-3.5">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-[#dfe6e2] bg-white text-[#374151]">
              <QrCode className="size-7" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <p className="text-sm leading-[1.5] text-[#5b6660]">
              {t.rich('phones', {
                url: CLINIC_SETUP_URL,
                strong: (chunks) => (
                  <span className="font-bold text-[#111827]">{chunks}</span>
                ),
                mono: (chunks) => (
                  <span
                    className={clsx(
                      'font-mono',
                      'text-[13px] font-semibold text-[#374151]',
                    )}
                  >
                    {chunks}
                  </span>
                ),
              })}
            </p>
          </div>
        </div>
      </Shell>
    </section>
  )
}

function OfflineSection() {
  const t = useTranslations('solutionsCareClinics.offline')

  return (
    <section
      id="offline"
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(160deg, #031f17, #014737 70%)' }}
    >
      <Blob
        className={clsx(
          s.blob,
          '-top-[200px] -right-[100px] size-[640px] blur-[50px]',
        )}
      />
      <Shell className="relative">
        <div
          className={clsx(
            s.reveal,
            'flex flex-col items-center gap-5 py-20 text-center lg:py-24',
          )}
        >
          <span className="flex size-16 items-center justify-center rounded-[18px] border border-white/15 bg-white/10 text-[#84e1bc]">
            <WifiOff className="size-7" strokeWidth={2} aria-hidden="true" />
          </span>
          <h2 className={clsx(h2Class, 'max-w-[820px] text-white')}>
            {t('title')}
          </h2>
          <p className="max-w-[760px] text-[clamp(18px,1.5vw,21px)] leading-[1.6] text-pretty text-[#bdf0d9]">
            {t('body')}
          </p>
        </div>
      </Shell>
    </section>
  )
}

function SetupSection() {
  const t = useTranslations('solutionsCareClinics.setup')

  return (
    <section id="setup" className="bg-[#f4f7f5]">
      <Shell className="flex flex-col gap-12 py-20 lg:py-24">
        <div
          className={clsx(s.reveal, 'flex max-w-[840px] flex-col gap-[18px]')}
        >
          <h2 className={h2Class}>{t('title')}</h2>
          <p className={leadClass}>{t('body')}</p>
        </div>
        <ol className="m-0 grid list-none grid-cols-1 gap-x-7 gap-y-12 p-0 md:grid-cols-2">
          {setupSteps.map((step, index) => (
            <li
              key={step.id}
              className={clsx(s.zoom, 'flex flex-col gap-[22px]')}
            >
              <figure
                className={clsx(
                  paneHover,
                  'relative m-0 aspect-[1100/700] overflow-hidden rounded-[20px] border border-[#dfe6e2] bg-white shadow-[0_30px_60px_-36px_rgba(1,71,55,0.4)]',
                )}
              >
                <img
                  src={step.image}
                  width={step.width}
                  height={step.height}
                  loading="lazy"
                  decoding="async"
                  alt={t(`steps.${step.id}.alt`)}
                  className="size-full object-contain"
                />
              </figure>
              <div className="flex items-start gap-4">
                <span
                  className={clsx(
                    'font-mono',
                    'flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#014737] text-[15px] font-semibold text-[#84e1bc]',
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex flex-col gap-1.5">
                  <h3 className="text-2xl leading-[1.1] font-semibold">
                    {t(`steps.${step.id}.title`)}
                  </h3>
                  <p className="text-base leading-[1.55] text-[#5b6660]">
                    {t(`steps.${step.id}.text`)}
                  </p>
                </span>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-sm leading-relaxed text-[#5b6660]">{t('note')}</p>
      </Shell>
    </section>
  )
}

function OpenSourceSection() {
  const t = useTranslations('solutionsCareClinics.openSource')
  const tLinks = useTranslations('solutionsCareClinics.links')

  return (
    <section id="open-source" className="bg-white">
      <Shell className="flex flex-col gap-14 py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-14 lg:grid-cols-2">
          <div
            className={clsx(s.reveal, 'flex max-w-[520px] flex-col gap-[22px]')}
          >
            <h2 className={h2Class}>{t('title')}</h2>
            <p className={leadClass}>{t('body')}</p>
            <div className="flex flex-wrap gap-x-7 gap-y-2.5 pt-1.5 text-base">
              <ArrowLink href={REPO_URL}>{t('viewSource')}</ArrowLink>
              <ArrowLink href={LICENSE_URL}>{t('readLicence')}</ArrowLink>
              <ArrowLink href={DOCS_URL}>{tLinks('documentation')}</ArrowLink>
            </div>
          </div>
          {/* The licence is reproduced verbatim, so it stays in English. */}
          <div
            className={clsx(
              s.zoom,
              'font-mono',
              'flex flex-col gap-4 rounded-[22px] bg-[#111827] px-6 pt-7 pb-7 text-[13px] leading-[1.6] text-[#c2c0b6] shadow-[0_40px_80px_-40px_rgba(17,24,39,0.6)] sm:px-[30px]',
            )}
          >
            <span className="flex items-center justify-between gap-3 text-xs font-semibold text-[#87867f]">
              <span className="flex items-center gap-2">
                <span className="block size-2.5 rounded-full bg-[#31c48d]" />
                LICENSE
              </span>
              <span className="truncate">
                github.com/ohcnetwork/care_clinic
              </span>
            </span>
            <span className="text-base font-semibold text-white">
              MIT License
            </span>
            <span className="text-[#84e1bc]">
              Copyright (c) 2026 Open Healthcare Network Foundation
            </span>
            <span>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the &quot;Software&quot;), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </span>
            <span>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </span>
            <span className="text-[#87867f]">
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF
              ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
              AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </span>
          </div>
        </div>

        <div
          className={clsx(
            s.reveal,
            'grid grid-cols-1 gap-x-16 gap-y-6 border-t border-[#eef2ef] pt-10 lg:grid-cols-3',
          )}
        >
          <h3 className="text-[clamp(28px,2.8vw,38px)] leading-[1.1] font-medium tracking-normal">
            {t('underTheHood.title')}
          </h3>
          <p className="text-[17px] leading-[1.6] text-pretty text-[#374151] lg:col-span-2">
            {t('underTheHood.body')}
          </p>
        </div>
      </Shell>
    </section>
  )
}

function WhichCareSection() {
  const t = useTranslations('solutionsCareClinics.whichCare')
  const specs: [string, React.ReactNode][] = [
    [t('specs.platforms.term'), t('specs.platforms.detail')],
    [
      t('specs.installers.term'),
      t('specs.installers.detail', { version: LATEST_RELEASE }),
    ],
    [t('specs.staffDevices.term'), t('specs.staffDevices.detail')],
    [
      t('specs.network.term'),
      t.rich('specs.network.detail', {
        url: CLINIC_URL,
        mono: (chunks) => (
          <span className={clsx('font-mono', 'text-[13.5px] font-semibold')}>
            {chunks}
          </span>
        ),
      }),
    ],
    [t('specs.internet.term'), t('specs.internet.detail')],
    [t('specs.backups.term'), t('specs.backups.detail')],
    [t('specs.security.term'), t('specs.security.detail')],
    [
      t('specs.systemRequirements.term'),
      t.rich('specs.systemRequirements.detail', {
        link: (chunks) => (
          <Link
            href="/system-requirements"
            className="font-semibold text-[#046c4e] underline decoration-[#046c4e]/30 underline-offset-4 hover:text-[#014737]"
          >
            {chunks}
          </Link>
        ),
      }),
    ],
    [t('specs.telemetry.term'), t('specs.telemetry.detail')],
    [t('specs.licence.term'), 'MIT'],
    [t('specs.updates.term'), t('specs.updates.detail')],
    [
      t('specs.source.term'),
      <a
        key="source"
        href={REPO_URL}
        className={clsx(
          'font-mono',
          'text-[13.5px] font-semibold text-[#046c4e] hover:text-[#014737]',
        )}
      >
        github.com/ohcnetwork/care_clinic
      </a>,
    ],
  ]

  return (
    <section id="which-care" className="bg-[#f4f7f5]">
      <Shell className="flex flex-col gap-16 py-20 lg:gap-20 lg:py-24">
        <div className="flex flex-col gap-9">
          <h2 className={clsx(s.reveal, h2Class, 'max-w-[840px]')}>
            {t('title')}
          </h2>
          <div
            className={clsx(
              s.zoom,
              'overflow-x-auto rounded-[22px] border border-[#dfe6e2] bg-white',
            )}
          >
            <table className="w-full min-w-[640px] border-collapse text-left text-[15.5px] leading-[1.5]">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-1/5 border-b border-[#dfe6e2] px-6 py-[22px]"
                  >
                    <span className="sr-only">{t('comparison')}</span>
                  </th>
                  <th
                    scope="col"
                    className="w-2/5 border-b border-l border-[#dfe6e2] border-l-[#eef2ef] bg-[#def7ec] px-6 py-[22px] text-[22px] font-semibold text-[#014737]"
                  >
                    CARE Clinic
                  </th>
                  <th
                    scope="col"
                    className="w-2/5 border-b border-l border-[#dfe6e2] border-l-[#eef2ef] px-6 py-[22px] text-[22px] font-semibold text-[#111827]"
                  >
                    {t('partnerColumn')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((id) => (
                  <tr key={id}>
                    <th
                      scope="row"
                      className="border-b border-[#eef2ef] px-6 py-[18px] align-top text-sm font-bold text-[#374151]"
                    >
                      {t(`rows.${id}.label`)}
                    </th>
                    <td className="border-b border-l border-[#eef2ef] bg-[#def7ec]/35 px-6 py-[18px] align-top text-[#111827]">
                      {t(`rows.${id}.clinic`)}
                    </td>
                    <td className="border-b border-l border-[#eef2ef] px-6 py-[18px] align-top text-[#111827]">
                      {t(`rows.${id}.partner`)}
                    </td>
                  </tr>
                ))}
                <tr>
                  <th
                    scope="row"
                    className="px-6 py-[18px] align-middle text-sm font-bold text-[#374151]"
                  >
                    {t('getStarted')}
                  </th>
                  <td className="border-l border-[#eef2ef] bg-[#def7ec]/35 px-6 py-[18px] align-middle">
                    <a
                      href="#download"
                      className="inline-flex h-[46px] items-center gap-2 rounded-xl bg-[#057a55] px-5 text-[15px] font-bold text-white no-underline transition-colors hover:bg-[#046c4e]"
                    >
                      {t('chooseInstaller')}
                    </a>
                  </td>
                  <td className="border-l border-[#eef2ef] px-6 py-[18px] align-middle">
                    <ArrowLink
                      href="/contact"
                      icon={ArrowRight}
                      className="text-[15.5px]"
                    >
                      {t('deploymentConversation')}
                    </ArrowLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={clsx(s.reveal, 'flex flex-col gap-6')}>
          <h3 className="text-[clamp(28px,2.8vw,38px)] leading-[1.1] font-medium tracking-normal">
            {t('specsTitle')}
          </h3>
          <dl className="m-0 grid grid-cols-1 border-t border-[#dfe6e2] md:grid-cols-2 md:gap-x-12">
            {specs.map(([term, detail], index) => (
              <div
                key={index}
                className="grid grid-cols-[120px_minmax(0,1fr)] gap-4 border-b border-[#dfe6e2] py-3.5 sm:grid-cols-[150px_minmax(0,1fr)]"
              >
                <dt className="text-[13.5px] font-bold text-[#374151]">
                  {term}
                </dt>
                <dd className="m-0 text-[14.5px] leading-[1.5] text-[#111827]">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Shell>
    </section>
  )
}

function DownloadSection() {
  const t = useTranslations('solutionsCareClinics.download')
  const tLinks = useTranslations('solutionsCareClinics.links')

  return (
    <section
      id="download"
      className="relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(180deg, #031f17, #014737 55%, #052a20)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <Blob
          strength={0.5}
          className={clsx(
            s.blob,
            '-top-[200px] -left-[120px] size-[680px] blur-[44px]',
          )}
        />
        <Blob
          color="132,225,188"
          strength={0.35}
          className={clsx(
            s.blobAlt,
            '-right-[200px] -bottom-[260px] size-[760px] blur-[50px]',
          )}
        />
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_50%,#000_10%,transparent_70%)]"
          style={gridLines}
        />
      </div>
      <Shell className="relative">
        <div
          className={clsx(
            s.reveal,
            'flex flex-col items-center gap-7 py-24 text-center lg:py-32',
          )}
        >
          <h2 className="max-w-[900px] text-[clamp(40px,5.4vw,80px)] leading-[1.02] font-medium tracking-normal text-balance text-white">
            {t.rich('title', {
              shine: (chunks) => (
                <span className={clsx(s.shine, shineText, 'block sm:inline')}>
                  {chunks}
                </span>
              ),
            })}
          </h2>
          <p className="text-[clamp(19px,1.6vw,23px)] leading-[1.5] text-[#def7ec]">
            {t('body')}
          </p>
          <div className="mt-2 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center">
            <ClinicDownloadButton
              className={clsx(
                mintButton,
                'h-[58px] justify-center px-[30px] text-[17px]',
              )}
            />
            <a
              href={SUPPORT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                glassButton,
                'h-[58px] justify-center border-white/30 bg-white/12 px-7 text-[17px]',
              )}
            >
              <MessageCircle className="size-[18px]" aria-hidden="true" />
              {tLinks('requestSetup')}
            </a>
          </div>
          <a
            href={CLINIC_RELEASES_URL}
            className="text-sm text-[#bdf0d9] underline underline-offset-4 hover:text-white"
          >
            {tLinks('githubReleases')}
          </a>
          <p className="max-w-[640px] text-sm leading-relaxed text-[#bdf0d9]">
            {t('fallback')}
          </p>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-2.5">
            <ArrowLink
              href={REPO_URL}
              className="font-semibold text-[#84e1bc] hover:text-white"
            >
              {t('viewOnGithub')}
            </ArrowLink>
            <ArrowLink
              href={DOCS_URL}
              className="font-semibold text-[#84e1bc] hover:text-white"
            >
              {tLinks('documentation')}
            </ArrowLink>
          </div>
          <p className="mt-6 max-w-[760px] text-sm leading-[1.6] text-pretty text-[#bdf0d9]">
            {t('legal')}
          </p>
        </div>
      </Shell>
    </section>
  )
}

function StructuredData({ faqs }: { faqs: Faq[] }) {
  const t = useTranslations('solutionsCareClinics')
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'CARE Clinic',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'macOS, Windows',
      url: 'https://ohc.network/solutions/care-clinics',
      downloadUrl: 'https://ohc.network/solutions/care-clinics#download',
      description: t('meta.description'),
      license: 'https://opensource.org/license/mit/',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
      featureList: t.raw('structuredData.featureList') as string[],
      publisher: {
        '@type': 'Organization',
        name: 'Open Healthcare Network Foundation',
        url: 'https://ohc.network',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default async function CareClinicPage({ params }: PageProps) {
  await initLocale(params)
  const t = await getTranslations('solutionsCareClinics')
  const faqs: Faq[] = faqIds.map((id) => ({
    question: t(`faq.items.${id}.question`),
    answer: t(`faq.items.${id}.answer`, { version: LATEST_RELEASE }),
  }))
  const platformLabels = (platform: string) => ({
    downloadFor: t('installer.downloadFor', { platform }),
    preparing: t('installer.preparing', { platform }),
    frameTitle: t('installer.frameTitle', { platform }),
    noInstaller: t('installer.errors.noInstaller', { platform }),
  })
  const downloadLabels: ClinicDownloadLabels = {
    button: t('installer.button'),
    releases: t('links.githubReleases'),
    requested: t('installer.requested'),
    platforms: {
      mac: platformLabels('Mac'),
      windows: platformLabels('Windows'),
    },
    errors: {
      rateLimited: t('installer.errors.rateLimited'),
      releaseUnavailable: t('installer.errors.releaseUnavailable'),
      invalidRelease: t('installer.errors.invalidRelease'),
      invalidUrl: t('installer.errors.invalidUrl'),
      reload: t('installer.errors.reload'),
      network: t('installer.errors.network'),
    },
  }

  return (
    <div className="overflow-x-clip bg-white">
      <StructuredData faqs={faqs} />
      <div className="bg-white pb-4">
        <Container>
          <Navbar />
        </Container>
      </div>
      <div className="text-[#111827]">
        <ClinicDownloadProvider labels={downloadLabels}>
          <main>
            <Hero />
            <Ticker />
            <Overview />
            <Price />
            <CareInMotion />
            <AlsoInTheBox />
            <ClinicSection />
            <PluginsSection />
            <UpdatesSection />
            <DataSection />
            <TeamSection />
            <OfflineSection />
            <SetupSection />
            <OpenSourceSection />
            <WhichCareSection />
            <FaqSection faqs={faqs} />
            <DownloadSection />
          </main>
        </ClinicDownloadProvider>
      </div>
      <Footer />
    </div>
  )
}
