import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { pageMetadata } from '@/i18n/metadata'
import { localizePath } from '@/i18n/paths'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  HeartPulse,
  Hospital,
  MonitorDot,
  PawPrint,
  Stethoscope,
  Workflow,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'solutions.meta' })

  return pageMetadata({
    locale,
    path: '/solutions',
    title: t('title'),
    description: t('description'),
    keywords: [
      'CARE solutions',
      'open healthcare platform',
      'open source HMIS',
      'open source HIS',
      'TeleICU',
      'palliative care grid',
      'primary care clinic software',
      'animal health EMR',
      'digital public infrastructure healthcare',
      'FHIR healthcare workflows',
    ],
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      url: localizePath('/solutions', locale),
      images: [
        {
          url: '/og/ohc-landing-cover.png',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
  })
}

const solutions = [
  {
    id: 'hmis',
    href: '/solutions/hospital-management',
    icon: Hospital,
    logo: '/logos/care-hmis.svg',
  },
  {
    id: 'teleicu',
    href: '/solutions/teleicu',
    icon: MonitorDot,
    logo: '/logos/care-teleicu.svg',
  },
  {
    id: 'palliative',
    href: '/solutions/palliative-care',
    icon: HeartPulse,
    logo: '/logos/care-palliative.svg',
  },
  {
    id: 'clinic',
    href: '/solutions/care-clinics',
    icon: Stethoscope,
    logo: '/logos/care-logo.svg',
  },
  {
    id: 'janwar',
    href: '/solutions/care-janwar',
    icon: PawPrint,
    logo: '/logos/care-janwar.svg',
  },
] as const

const principles = [
  { id: 'oneCore', icon: Workflow },
  { id: 'fieldUse', icon: BadgeCheck },
  { id: 'aiOnCleanData', icon: BrainCircuit },
] as const

function SolutionsConstellation() {
  const t = useTranslations('solutions.constellation')
  const tItems = useTranslations('solutions.items')
  const coreLayers: string[] = t.raw('coreLayers')

  return (
    <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
      <div className="absolute inset-x-8 top-10 bottom-0 rounded-full bg-[#12806a]/18 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#041611] p-3 shadow-[0_38px_120px_rgba(7,24,19,0.24)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(184,243,111,0.22),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.11),transparent_32%)]" />
        <div className="relative grid gap-3 lg:grid-cols-[0.95fr_1.1fr_0.95fr]">
          <div className="grid gap-3">
            {solutions.slice(0, 2).map((solution) => (
              <Link
                key={solution.id}
                href={solution.href}
                className="group rounded-lg border border-white/10 bg-white/[0.055] p-4 transition hover:bg-white/[0.08]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <solution.icon className="size-5 text-[#b8f36f]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                      {tItems(`${solution.id}.eyebrow`)}
                    </p>
                    <h2 className="mt-2 text-xl/[1] font-semibold text-white">
                      {tItems(`${solution.id}.title`)}
                    </h2>
                    <p className="mt-3 text-xs/5 text-white/50">
                      {tItems(`${solution.id}.description`)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="rounded-lg border border-white/12 bg-[linear-gradient(145deg,rgba(119,220,154,0.48),rgba(6,76,57,0.88)_48%,rgba(3,27,21,0.98))] p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-white/58 uppercase">
                  {t('sharedFoundation')}
                </p>
                <p className="mt-2 text-4xl/[0.95] font-semibold">CARE Core</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold text-white/70">
                FHIR R5
              </span>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-2">
              {coreLayers.map((layer, index) => (
                <div
                  key={index}
                  className="rounded-md border border-white/10 bg-white/[0.08] px-2 py-3 text-center text-xs font-semibold text-white/76"
                >
                  {layer}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {solutions.slice(2).map((solution) => (
              <Link
                key={solution.id}
                href={solution.href}
                className="group rounded-lg border border-white/10 bg-white/[0.055] p-4 transition hover:bg-white/[0.08]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <solution.icon className="size-5 text-[#b8f36f]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                      {tItems(`${solution.id}.eyebrow`)}
                    </p>
                    <h2 className="mt-2 text-xl/[1] font-semibold text-white">
                      {tItems(`${solution.id}.title`)}
                    </h2>
                    <p className="mt-3 text-xs/5 text-white/50">
                      {tItems(`${solution.id}.description`)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const t = useTranslations('solutions.hero')

  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-6xl pt-16 pb-18 text-center sm:pt-24 sm:pb-24 md:pt-32">
          <Subheading as="div">{t('eyebrow')}</Subheading>
          <h1 className="mx-auto mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            {t('title')}
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/74 sm:text-2xl/8">
            {t('body')}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/product/care-core">
              {t('exploreCareCore')}
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button variant="secondary" href="/contact">
              {t('discussDeployment')}
            </Button>
          </div>
          <SolutionsConstellation />
        </div>
      </Container>
    </div>
  )
}

function SolutionsSection() {
  const t = useTranslations('solutions.blueprints')
  const tItems = useTranslations('solutions.items')

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
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

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {solutions.map((solution) => (
          <Link
            key={solution.id}
            href={solution.href}
            className="group rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)] transition hover:-translate-y-0.5 hover:border-[#12806a]/35 hover:shadow-[0_28px_88px_rgba(7,24,19,0.09)]"
          >
            <div className="flex items-start justify-between gap-4">
              <img
                src={solution.logo}
                alt=""
                className="h-12 w-12 object-contain"
              />
              <span className="rounded-full border border-[#dfe6e2] bg-[#f7f9f6] px-3 py-1 text-xs font-semibold text-[#12806a]">
                {tItems(`${solution.id}.status`)}
              </span>
            </div>
            <p className="mt-8 font-mono text-xs font-semibold tracking-[0.16em] text-[#12806a] uppercase">
              {tItems(`${solution.id}.eyebrow`)}
            </p>
            <h2 className="mt-3 text-3xl/[1] font-semibold text-gray-950">
              {tItems(`${solution.id}.title`)}
            </h2>
            <p className="mt-4 text-sm/6 text-gray-600">
              {tItems(`${solution.id}.description`)}
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#12806a]">
              {t('explore')}
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </p>
          </Link>
        ))}
      </div>
    </Container>
  )
}

function PatternSection() {
  const t = useTranslations('solutions.pattern')

  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">{t('body')}</p>
          </div>
          <div className="grid gap-3">
            {principles.map((item) => (
              <article
                key={item.id}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6"
              >
                <item.icon className="size-5 text-[#b8f36f]" />
                <h3 className="mt-8 text-2xl/[1.05] font-semibold text-white">
                  {t(`principles.${item.id}.title`)}
                </h3>
                <p className="mt-3 text-sm/6 text-white/58">
                  {t(`principles.${item.id}.text`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function EcosystemSection() {
  const t = useTranslations('solutions.ecosystem')

  return (
    <Container className="py-20 sm:py-24">
      <div className="rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-8 shadow-[0_24px_80px_rgba(7,24,19,0.05)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-3">
              {t('title')}
            </Heading>
          </div>
          <div>
            <p className="text-lg/7 text-gray-600">{t('body')}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/ecosystem/implementation-partners">
                {t('workWithPartners')}
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="secondary" href="/product/apps-integrations">
                {t('appsIntegrations')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function StructuredData() {
  const t = useTranslations('solutions.structuredData')
  const tItems = useTranslations('solutions.items')
  const locale = useLocale()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: t('name'),
          url: `https://ohc.network${localizePath('/solutions', locale)}`,
          description: t('description'),
          publisher: {
            '@type': 'Organization',
            name: 'Open Healthcare Network Foundation',
            url: 'https://ohc.network',
          },
          hasPart: solutions.map((solution) => ({
            '@type': 'WebPage',
            name: tItems(`${solution.id}.title`),
            url: `https://ohc.network${localizePath(solution.href, locale)}`,
            description: tItems(`${solution.id}.description`),
          })),
        }).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default async function Solutions({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <SolutionsSection />
        <PatternSection />
        <EcosystemSection />
      </main>
      <Footer />
    </div>
  )
}
