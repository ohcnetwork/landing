import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Messages } from '@/i18n/messages'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Download,
  HeartPulse,
  Hospital,
  MapPinned,
  MonitorDot,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'impact.meta' })

  return pageMetadata({
    locale,
    path: '/impact',
    title: t('title'),
    description: t('description'),
    keywords:
      'OHC impact, CARE deployments, TeleICU, Kerala Palliative Care Grid, CARE HMIS, open source healthcare impact',
  })
}

// Figures stay in code; their labels are translated.
const contributorCount = '1,385+'

const heroMetrics = [
  { id: 'consultations', value: '1.3M+' },
  { id: 'teleicuHospitals', value: '120+' },
  { id: 'hmisHospitals', value: '100+' },
  { id: 'contributors', value: contributorCount },
] as const

type ProgramMessages = Messages['impact']['programs']

/** A figure (`value`) or a translated place name (`place`), with its label. */
type Metric = { label: keyof ProgramMessages['metrics'] } & (
  | { value: string }
  | { place: keyof ProgramMessages['places'] }
)

type Program = {
  id: keyof ProgramMessages['items']
  icon: LucideIcon
  metrics: Metric[]
}

const programPanels: Program[] = [
  {
    id: 'palliative',
    icon: HeartPulse,
    metrics: [
      { value: '1,300+', label: 'primaryCareCenters' },
      { value: '1,300+', label: 'ngos' },
      { value: '330,000+', label: 'registeredPatients' },
      { value: '1.3M+', label: 'homeCareConsultations' },
      { value: '12,000+', label: 'dailyUsers' },
    ],
  },
  {
    id: 'teleicu',
    icon: MonitorDot,
    metrics: [
      { value: '120+', label: 'hospitals' },
      { value: '7', label: 'states' },
      { value: '150,000+', label: 'patients' },
      { value: '1,696', label: 'dailyActiveUsers' },
    ],
  },
  {
    id: 'hmis',
    icon: Hospital,
    metrics: [
      { value: '5', label: 'deploymentStates' },
      { value: '100+', label: 'hospitals' },
      { place: 'kerala', label: 'liveDeployment' },
      { place: 'karnataka', label: 'liveDeployment' },
      { place: 'jharkhandAssamManipur', label: 'liveDeployments' },
    ],
  },
]

const validationSignals = [
  { id: 'dpg', icon: BadgeCheck, values: { date: '01.07.2025' } },
  { id: 'mit', icon: ShieldCheck, values: {} },
  { id: 'community', icon: Code2, values: { count: contributorCount } },
] as const

function Hero() {
  const t = useTranslations('impact.hero')

  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-34">
          <Subheading>{t('eyebrow')}</Subheading>
          <h1 className="mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            {t('title')}
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {t('body')}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/care_deployment_map.png"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('deploymentsMap')}</span>
              <Download className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/blog"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('updates')}</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function SnapshotSection() {
  const t = useTranslations('impact.snapshot')

  return (
    <Container className="py-16 sm:py-20">
      <div className="grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_24px_80px_rgba(7,24,19,0.06)] sm:grid-cols-2 lg:grid-cols-4">
        {heroMetrics.map(({ id, value }) => (
          <div
            key={id}
            className="border-[#dfe6e2] p-6 sm:p-8 lg:border-l first:lg:border-l-0 [&:not(:first-child)]:border-t sm:[&:not(:first-child)]:border-t-0"
          >
            <p className="text-4xl/[0.95] font-semibold tracking-normal text-gray-950 sm:text-5xl/[0.9]">
              {value}
            </p>
            <p className="mt-3 text-sm/6 font-medium text-gray-600">{t(id)}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function ProgramPanel({
  program,
  featured = false,
}: {
  program: Program
  featured?: boolean
}) {
  const t = useTranslations('impact.programs')

  return (
    <article
      className={
        featured
          ? 'overflow-hidden rounded-lg bg-[#052e24] text-white shadow-[0_32px_90px_rgba(5,46,36,0.22)]'
          : 'overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_18px_56px_rgba(7,24,19,0.05)]'
      }
    >
      <div
        className={
          featured
            ? 'grid gap-12 p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12'
            : 'grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.86fr_1.14fr]'
        }
      >
        <div>
          <div
            className={
              featured
                ? 'flex size-12 items-center justify-center rounded-lg border border-white/10 bg-white/10'
                : 'flex size-12 items-center justify-center rounded-lg bg-[#e8f3ed] text-[#0b6b55]'
            }
          >
            <program.icon className="size-6" />
          </div>
          <p
            className={
              featured
                ? 'mt-8 font-mono text-xs font-semibold tracking-[0.18em] text-[#b8f36f] uppercase'
                : 'mt-8 font-mono text-xs font-semibold tracking-[0.18em] text-[#12806a] uppercase'
            }
          >
            {t(`items.${program.id}.eyebrow`)}
          </p>
          <h2
            className={
              featured
                ? 'mt-3 max-w-2xl text-4xl/[0.98] font-semibold tracking-normal text-balance sm:text-6xl/[0.92]'
                : 'mt-3 max-w-2xl text-3xl/[1] font-semibold tracking-normal text-balance text-gray-950 sm:text-5xl/[0.94]'
            }
          >
            {t(`items.${program.id}.title`)}
          </h2>
          <p
            className={
              featured
                ? 'mt-6 max-w-2xl text-lg/7 text-white/68'
                : 'mt-6 max-w-2xl text-lg/7 text-gray-600'
            }
          >
            {t(`items.${program.id}.text`)}
          </p>
        </div>

        <div
          className={
            featured
              ? 'grid content-end gap-3 sm:grid-cols-2'
              : 'grid content-end gap-3 sm:grid-cols-2'
          }
        >
          {program.metrics.map((metric, index) => (
            <div
              key={`${program.id}-${index}`}
              className={
                featured
                  ? 'rounded-lg border border-white/10 bg-white/[0.055] p-5'
                  : 'rounded-lg border border-[#dfe6e2] bg-[#fbfcfb] p-5'
              }
            >
              <p
                className={
                  featured
                    ? 'text-3xl/[0.96] font-semibold tracking-normal text-white'
                    : 'text-3xl/[0.96] font-semibold tracking-normal text-gray-950'
                }
              >
                {'place' in metric ? t(`places.${metric.place}`) : metric.value}
              </p>
              <p
                className={
                  featured
                    ? 'mt-2 text-sm/5 font-medium text-white/55'
                    : 'mt-2 text-sm/5 font-medium text-gray-600'
                }
              >
                {t(`metrics.${metric.label}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

function ProgramsSection() {
  const t = useTranslations('impact.programs')

  return (
    <section className="py-10 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-3">
              {t('title')}
            </Heading>
          </div>
          <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
            {t('body')}
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {programPanels.map((program, index) => (
            <ProgramPanel
              key={program.id}
              program={program}
              featured={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

function MapSection() {
  const t = useTranslations('impact.map')

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_22px_70px_rgba(8,20,31,0.08)]">
          <div className="h-[420px]">
            <Map />
          </div>
        </div>

        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/care_deployment_map.png"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('download')}</span>
              <Download className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/blog"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('updates')}</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

function ValidationSection() {
  const t = useTranslations('impact.validation')

  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
          </div>

          <div className="grid gap-3">
            {validationSignals.map((signal) => (
              <div
                key={signal.id}
                className="grid gap-4 rounded-lg border border-[#dfe6e2] bg-white p-6 sm:grid-cols-[44px_0.42fr_1fr] sm:items-start"
              >
                <signal.icon className="size-5 text-[#12806a]" />
                <h3 className="font-semibold text-gray-950">
                  {t(`items.${signal.id}.label`)}
                </h3>
                <p className="text-sm/6 text-gray-600">
                  {t(`items.${signal.id}.detail`, signal.values)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FinalSection() {
  const t = useTranslations('impact.final')

  return (
    <Container className="py-20 sm:py-24">
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-white p-8 text-center shadow-[0_28px_90px_rgba(7,24,19,0.07)] sm:p-12">
        <MapPinned className="mx-auto size-6 text-[#12806a]" />
        <Heading as="h2" className="mx-auto mt-6 max-w-4xl">
          {t('title')}
        </Heading>
        <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
          {t('body')}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/product/care-core" className="w-full sm:w-auto">
            {t('exploreCore')}
          </Button>
          <Button
            variant="secondary"
            href="/contact"
            className="w-full sm:w-auto"
          >
            {t('conversation')}
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default async function Impact({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <Hero />
      <main>
        <SnapshotSection />
        <ProgramsSection />
        <MapSection />
        <ValidationSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
