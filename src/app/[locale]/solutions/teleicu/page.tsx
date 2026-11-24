import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FaqSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { pageMetadata } from '@/i18n/metadata'
import { localizePath } from '@/i18n/paths'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bed,
  Camera,
  ClipboardCheck,
  Cpu,
  FileText,
  GraduationCap,
  HeartPulse,
  Hospital,
  Network,
  Play,
  Stethoscope,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useFormatter, useLocale, useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({
    locale,
    namespace: 'solutionsTeleicu.meta',
  })

  return pageMetadata({
    locale,
    path: '/solutions/teleicu',
    title: t('title'),
    description: t('description'),
    keywords: [
      'TeleICU',
      'CARE TeleICU',
      '10BedICU',
      'remote ICU monitoring',
      'critical care infrastructure',
      'hub and spoke TeleICU',
      'open source TeleICU EMR',
      'CARE EMR',
      'government hospital ICU',
      'ONVIF healthcare',
      'ICU protocols',
      'critical care training',
      'rural critical care',
      'digital public goods healthcare',
    ],
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      url: localizePath('/solutions/teleicu', locale),
      images: [
        {
          url: '/logos/10bedicu.png',
          width: 500,
          height: 500,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      title: t('title'),
      description: t('twitterDescription'),
      images: ['/logos/10bedicu.png'],
    },
  })
}

const faqIds = ['what', 'tenBedIcu', 'outside'] as const

const states = [
  'karnataka',
  'manipur',
  'meghalaya',
  'sikkim',
  'nagaland',
  'assam',
  'puducherry',
  'jharkhand',
  'andhraPradesh',
  'telangana',
] as const

const modelLayers = [
  { id: 'spoke', icon: Hospital },
  { id: 'hub', icon: Network },
  { id: 'platform', icon: Cpu },
] as const

const operatingSystem = [
  { id: 'equipment', icon: Bed },
  { id: 'video', icon: Camera },
  { id: 'emr', icon: FileText },
  { id: 'protocols', icon: ClipboardCheck },
  { id: 'training', icon: GraduationCap },
  { id: 'community', icon: Users },
] as const

const outcomes = [
  { id: 'reach', icon: Stethoscope },
  { id: 'records', icon: HeartPulse },
  { id: 'quality', icon: Activity },
] as const

/** State launch months (UTC), shown as "May 2022". */
const launchMilestones = [
  { date: '2022-05-01', state: 'manipur' },
  { date: '2022-11-01', state: 'karnataka' },
  { date: '2023-01-01', state: 'nagaland' },
  { date: '2023-06-01', state: 'assam' },
  { date: '2023-12-01', state: 'meghalaya' },
  { date: '2024-02-01', state: 'puducherry' },
  { date: '2024-03-01', state: 'sikkim' },
] as const

function HeroDiagram() {
  const t = useTranslations('solutionsTeleicu.diagram')
  const technologyItems: string[] = t.raw('technologyItems')
  const hubItems: string[] = t.raw('hubItems')

  return (
    <div className="relative mx-auto mt-16 max-w-6xl">
      <div className="absolute inset-x-12 top-16 h-48 rounded-full bg-[#b8f36f]/20 blur-3xl" />
      <div className="relative rounded-lg border border-[#dce7df] bg-white/68 p-3 shadow-[0_34px_110px_rgba(7,24,19,0.13)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-lg bg-[#041611] p-4 text-white">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.1fr_0.95fr] lg:items-center">
            <div className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg border border-white/10 bg-white/10">
                  <Hospital className="size-6 text-[#b8f36f]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                    {t('spokeUnit')}
                  </p>
                  <p className="mt-1 text-2xl/[1] font-semibold">
                    {t('spokeTitle')}
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-5 gap-1.5">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex aspect-square items-center justify-center rounded-md border border-white/10 bg-white/[0.08]"
                  >
                    <Bed className="size-4 text-white/72" />
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm/6 text-white/56">{t('spokeBody')}</p>
            </div>

            <div className="relative rounded-lg border border-white/12 bg-[linear-gradient(145deg,rgba(104,224,157,0.42),rgba(6,76,57,0.86)_46%,rgba(3,27,21,0.98))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(230,255,232,0.28),transparent_30%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-lg border border-white/15 bg-white/12">
                      <Cpu className="size-6 text-[#e8fff0]" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-white/58 uppercase">
                        {t('technologyLayer')}
                      </p>
                      <p className="mt-1 text-3xl/[0.95] font-semibold">
                        CARE TeleICU
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold text-white/70">
                    {t('technologyBadge')}
                  </span>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-2">
                  {technologyItems.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-white/10 bg-white/[0.08] px-3 py-3 text-sm font-semibold"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg border border-white/10 bg-white/10">
                  <Stethoscope className="size-6 text-[#b8f36f]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                    {t('specialistHub')}
                  </p>
                  <p className="mt-1 text-2xl/[1] font-semibold">
                    {t('hubTitle')}
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                {hubItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#061f19]/82 px-3 py-2 text-sm font-semibold"
                  >
                    <BadgeCheck className="size-4 text-[#b8f36f]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const t = useTranslations('solutionsTeleicu.hero')
  const format = useFormatter()
  const metrics = [
    { id: 'units', value: format.number(216) },
    { id: 'lives', value: `${format.number(100000)}+` },
    { id: 'hubs', value: format.number(15) },
    { id: 'states', value: format.number(10) },
    { id: 'coverage', value: format.number(0.28, { style: 'percent' }) },
  ] as const

  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32">
          <div className="mx-auto max-w-6xl text-center">
            <img
              src="/logos/10bedicu.png"
              alt="10BedICU"
              className="mx-auto h-20 w-20 object-contain sm:h-24 sm:w-24"
            />
            <Subheading as="div" className="mt-8">
              CARE TeleICU
            </Subheading>
            <h1 className="mx-auto mt-5 max-w-6xl font-display text-6xl/[0.9] font-semibold tracking-normal text-balance text-[#05070c] sm:text-8xl/[0.84] md:text-9xl/[0.82]">
              {t('title')}
            </h1>
            <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/72 sm:text-2xl/8">
              {t('body')}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href="https://10bedicu.org/">
                {t('visit10BedIcu')}
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="secondary" href="/contact">
                {t('planDeployment')}
              </Button>
            </div>
          </div>

          <HeroDiagram />

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-2 sm:grid-cols-5">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="rounded-lg border border-[#dfe6e2] bg-white/72 px-3 py-4 text-center shadow-[0_10px_30px_rgba(7,24,19,0.04)] backdrop-blur-xl"
              >
                <p className="text-3xl/[1] font-semibold tracking-normal text-gray-950">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs/5 font-semibold text-[#12806a]">
                  {t(`metrics.${metric.id}`)}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-4 max-w-4xl text-center text-xs/5 text-gray-500">
            {t('metricsSource')}
          </p>
        </div>
      </Container>
    </div>
  )
}

function ModelSection() {
  const t = useTranslations('solutionsTeleicu.model')

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3 max-w-4xl">
            {t('title')}
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          {t('body')}
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {modelLayers.map((item) => (
          <article
            key={item.id}
            className="rounded-lg border border-[#dfe6e2] bg-white p-7 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <item.icon className="size-6 text-[#12806a]" />
            <h3 className="mt-10 text-2xl/[1.05] font-semibold text-gray-950">
              {t(`items.${item.id}.title`)}
            </h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              {t(`items.${item.id}.text`)}
            </p>
          </article>
        ))}
      </div>
    </Container>
  )
}

function OperatingSystemSection() {
  const t = useTranslations('solutionsTeleicu.operatingSystem')

  return (
    <Container className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Subheading as="div">{t('eyebrow')}</Subheading>
        <Heading as="h2" className="mt-3">
          {t('title')}
        </Heading>
        <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {operatingSystem.map((item) => (
          <article
            key={item.id}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <item.icon className="size-5 text-[#12806a]" />
            <h3 className="mt-8 text-xl/6 font-semibold text-gray-950">
              {t(`items.${item.id}.title`)}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">
              {t(`items.${item.id}.text`)}
            </p>
          </article>
        ))}
      </div>
    </Container>
  )
}

function OutcomesSection() {
  const t = useTranslations('solutionsTeleicu.outcomes')

  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">{t('body')}</p>
          </div>
          <div className="grid gap-3">
            {outcomes.map((item) => (
              <article
                key={item.id}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6"
              >
                <item.icon className="size-5 text-[#b8f36f]" />
                <h3 className="mt-8 text-2xl/[1.05] font-semibold text-white">
                  {t(`items.${item.id}.title`)}
                </h3>
                <p className="mt-3 text-sm/6 text-white/58">
                  {t(`items.${item.id}.text`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function StateCoverageSection() {
  const t = useTranslations('solutionsTeleicu.stateCoverage')
  const tStates = useTranslations('solutionsTeleicu.states')
  const format = useFormatter()

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {states.map((state) => (
            <div
              key={state}
              className="flex items-center gap-3 rounded-lg border border-[#dfe6e2] bg-white p-4 shadow-[0_12px_36px_rgba(7,24,19,0.035)]"
            >
              <BadgeCheck className="size-5 shrink-0 text-[#12806a]" />
              <p className="font-semibold text-gray-950">{tStates(state)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_24px_80px_rgba(7,24,19,0.05)]">
        <div className="grid gap-4 md:grid-cols-7">
          {launchMilestones.map(({ date, state }) => (
            <div key={`${date}-${state}`} className="min-w-0">
              <p className="font-mono text-xs font-semibold text-[#12806a]">
                {format.dateTime(new Date(date), {
                  year: 'numeric',
                  month: 'short',
                })}
              </p>
              <p className="mt-2 truncate text-sm font-semibold text-gray-950">
                {tStates(state)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function VideoSection() {
  const t = useTranslations('solutionsTeleicu.video')

  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
            <div className="mt-8">
              <Button
                variant="secondary"
                href="https://youtube.com/watch?v=lMTrirp__SI"
              >
                {t('watchOnYoutube')}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
          <a
            href="https://youtube.com/watch?v=lMTrirp__SI"
            className="group relative block overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#052e24] shadow-[0_34px_100px_rgba(5,46,36,0.18)]"
          >
            <div className="aspect-video bg-[url('https://i.ytimg.com/vi/lMTrirp__SI/hqdefault.jpg')] bg-cover bg-center opacity-70 transition group-hover:scale-[1.015]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,46,36,0.95),rgba(5,46,36,0.42)_52%,rgba(184,243,111,0.18))]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/14 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <Play className="ml-1 size-8 fill-white text-white" />
              </div>
            </div>
          </a>
        </div>
      </Container>
    </div>
  )
}

function AiSection() {
  const t = useTranslations('solutionsTeleicu.ai')

  return (
    <Container className="py-20 sm:py-24">
      <div className="rounded-lg border border-[#dfe6e2] bg-[#fbfcfb] p-8 shadow-[0_24px_80px_rgba(7,24,19,0.05)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-3">
              {t('title')}
            </Heading>
          </div>
          <div>
            <p className="text-lg/7 text-gray-600">{t('body')}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/product/care-ai">
                {t('exploreCareAi')}
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="secondary" href="/product/care-core">
                {t('careCore')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function FinalSection() {
  const t = useTranslations('solutionsTeleicu.final')

  return (
    <Container className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Subheading as="div">{t('eyebrow')}</Subheading>
        <Heading as="h2" className="mt-3">
          {t('title')}
        </Heading>
        <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
          {t('body')}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="/contact">{t('startConversation')}</Button>
          <Button variant="secondary" href="/product/apps-integrations">
            {t('teleicuApp')}
          </Button>
        </div>
      </div>
    </Container>
  )
}

function useFaqs() {
  const t = useTranslations('solutionsTeleicu.faq.items')

  return faqIds.map((id) => ({
    question: t(`${id}.question`),
    answer: t(`${id}.answer`),
  }))
}

function FAQSection() {
  return <FaqSection faqs={useFaqs()} />
}

function StructuredData() {
  const t = useTranslations('solutionsTeleicu')
  const locale = useLocale()
  const faqs = useFaqs()
  const featureList: string[] = t.raw('structuredData.featureList')

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'CARE TeleICU',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web',
      url: `https://ohc.network${localizePath('/solutions/teleicu', locale)}`,
      description: t('structuredData.description'),
      publisher: {
        '@type': 'Organization',
        name: 'Open Healthcare Network Foundation',
        url: 'https://ohc.network',
      },
      featureList,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
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

export default async function TeleICU({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <ModelSection />
        <OperatingSystemSection />
        <OutcomesSection />
        <StateCoverageSection />
        <VideoSection />
        <AiSection />
        <FAQSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
