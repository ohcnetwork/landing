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
  BrainCircuit,
  ChartNoAxesCombined,
  CreditCard,
  FlaskConical,
  MapPinned,
  PackageCheck,
  PawPrint,
  Stethoscope,
  Syringe,
  Workflow,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

const path = '/solutions/care-janwar'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({
    locale,
    namespace: 'solutionsCareJanwar.meta',
  })

  return pageMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
    keywords: [
      'CARE Janwar',
      'open source veterinary EMR',
      'animal health software',
      'veterinary clinic software',
      'public animal health platform',
      'livestock health software',
      'veterinary hospital management system',
      'animal vaccination software',
      'One Health digital platform',
      'open source animal health EMR',
    ],
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizePath(path, locale),
      images: [
        {
          url: '/logos/care-janwar.svg',
          width: 512,
          height: 512,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      title: t('ogTitle'),
      description: t('twitterDescription'),
      images: ['/logos/care-janwar.svg'],
    },
  })
}

const workflowSteps = [
  'register',
  'triage',
  'examine',
  'order',
  'vaccinate',
  'dispense',
  'followUp',
  'report',
] as const

const capabilities = [
  { id: 'records', icon: PawPrint },
  { id: 'encounters', icon: Stethoscope },
  { id: 'vaccination', icon: Syringe },
  { id: 'diagnostics', icon: FlaskConical },
  { id: 'pharmacy', icon: PackageCheck },
  { id: 'billing', icon: CreditCard },
  { id: 'field', icon: MapPinned },
  { id: 'dashboards', icon: ChartNoAxesCombined },
] as const

const useCases = ['clinics', 'hospitals', 'field', 'programs'] as const

const implementationSteps = ['model', 'configure', 'launch', 'scale'] as const

const aiCapabilities = ['fieldNotes', 'summaries', 'signals'] as const

const outcomeGroups = [
  'continuity',
  'coverage',
  'operations',
  'dataQuality',
] as const

const faqIds = ['what', 'separate', 'programs', 'judgment'] as const

type Faq = { question: string; answer: string }

function JanwarVisual() {
  const t = useTranslations('solutionsCareJanwar.visual')
  const tSteps = useTranslations('solutionsCareJanwar.workflow.steps')
  const subjectModel: string[] = t.raw('subjectModel')
  const activities: string[] = t.raw('activities')

  return (
    <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
      <div className="absolute inset-x-8 top-8 bottom-0 rounded-full bg-[#12806a]/18 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#041611] p-3 shadow-[0_38px_120px_rgba(7,24,19,0.24)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(184,243,111,0.22),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.1),transparent_34%)]" />
        <div className="relative grid gap-3 lg:grid-cols-[0.82fr_1.1fr_0.82fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
              {t('recordLabel')}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {subjectModel.slice(0, 8).map((item, index) => (
                <div
                  key={index}
                  className="rounded-md border border-white/10 bg-[#061f19]/82 px-3 py-3 text-xs font-semibold text-white/76"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-[linear-gradient(145deg,rgba(119,220,154,0.48),rgba(6,76,57,0.88)_48%,rgba(3,27,21,0.98))] p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg border border-white/15 bg-white/12">
                  <PawPrint className="size-6 text-[#e8fff0]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-white/58 uppercase">
                    {t('solutionLabel')}
                  </p>
                  <p className="mt-1 text-3xl/[0.95] font-semibold">
                    CARE Janwar
                  </p>
                </div>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold text-white/70 sm:inline-flex">
                {t('oneHealth')}
              </span>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-2">
              {activities.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-white/10 bg-white/[0.08] px-3 py-4 text-sm font-semibold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.08] p-4">
              <p className="text-sm font-semibold">{t('sharedLayer.title')}</p>
              <p className="mt-2 text-xs/5 text-white/54">
                {t('sharedLayer.text')}
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
              {t('programLabel')}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {subjectModel.slice(8).map((item, index) => (
                <div
                  key={index}
                  className="rounded-md border border-white/10 bg-[#061f19]/82 px-3 py-3 text-xs font-semibold text-white/76"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-3 grid gap-2 rounded-lg border border-white/10 bg-white/[0.055] p-3 sm:grid-cols-4 lg:grid-cols-8">
          {workflowSteps.map((id, index) => (
            <div
              key={id}
              className="flex items-center gap-2 rounded-md bg-[#061f19]/72 px-3 py-2 text-xs font-semibold text-white/72"
            >
              <span className="font-mono text-[#b8f36f]">
                {String(index + 1).padStart(2, '0')}
              </span>
              {tSteps(`${id}.title`)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const t = useTranslations('solutionsCareJanwar.hero')
  const heroPills: string[] = t.raw('pills')

  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-6xl pt-16 pb-18 text-center sm:pt-24 sm:pb-24 md:pt-32">
          <img
            src="/logos/care-janwar.svg"
            alt=""
            className="mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
          <Subheading as="div" className="mt-8">
            CARE Janwar
          </Subheading>
          <h1 className="mx-auto mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            {t('title')}
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/74 sm:text-2xl/8">
            {t('body')}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact">
              {t('discuss')}
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button variant="secondary" href="/product/care-core">
              {t('exploreCore')}
            </Button>
          </div>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
            {heroPills.map((pill, index) => (
              <span
                key={index}
                className="rounded-full border border-[#dfe6e2] bg-white/74 px-3 py-1.5 text-sm font-semibold text-[#173d34] shadow-sm backdrop-blur-xl"
              >
                {pill}
              </span>
            ))}
          </div>
          <JanwarVisual />
        </div>
      </Container>
    </div>
  )
}

function OverviewSection() {
  const t = useTranslations('solutionsCareJanwar.overview')

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
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

      <div className="mt-14 grid gap-5 lg:grid-cols-4">
        {useCases.map((id) => (
          <article
            key={id}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <Workflow className="size-5 text-[#12806a]" />
            <h3 className="mt-8 text-xl/6 font-semibold text-gray-950">
              {t(`useCases.${id}.title`)}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">
              {t(`useCases.${id}.text`)}
            </p>
          </article>
        ))}
      </div>
    </Container>
  )
}

function WorkflowSection() {
  const t = useTranslations('solutionsCareJanwar.workflow')

  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">{t('body')}</p>
          </div>
          <div className="grid gap-3">
            {workflowSteps.map((id, index) => (
              <article
                key={id}
                className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.055] p-5 sm:grid-cols-[56px_0.35fr_1fr] sm:items-start"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-white/10 font-mono text-xs font-semibold text-[#b8f36f]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-white">
                  {t(`steps.${id}.title`)}
                </h3>
                <p className="text-sm/6 text-white/58">
                  {t(`steps.${id}.text`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function CapabilitiesSection() {
  const t = useTranslations('solutionsCareJanwar.capabilities')

  return (
    <Container className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Subheading as="div">{t('eyebrow')}</Subheading>
        <Heading as="h2" className="mt-3">
          {t('title')}
        </Heading>
        <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => (
          <article
            key={item.id}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <item.icon className="size-5 text-[#12806a]" />
            <h3 className="mt-8 text-xl/6 font-semibold text-gray-950">
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

function CoreSection() {
  const t = useTranslations('solutionsCareJanwar.core')
  const careCoreBenefits: string[] = t.raw('benefits')

  return (
    <Container className="py-20 sm:py-24">
      <div className="rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-8 shadow-[0_24px_80px_rgba(7,24,19,0.05)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {careCoreBenefits.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border border-[#dfe6e2] bg-white p-4"
              >
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-[#12806a]" />
                <p className="text-sm/6 font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

function ImplementationSection() {
  const t = useTranslations('solutionsCareJanwar.implementation')

  return (
    <div className="bg-[#fbfcfb] py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
          </div>
          <div className="grid gap-3">
            {implementationSteps.map((id, index) => (
              <article
                key={id}
                className="grid gap-4 rounded-lg border border-[#dfe6e2] bg-white p-5 shadow-[0_14px_44px_rgba(7,24,19,0.035)] sm:grid-cols-[52px_0.36fr_1fr] sm:items-start"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#eaf4ee] font-mono text-xs font-semibold text-[#12806a]">
                  0{index + 1}
                </div>
                <h3 className="font-semibold text-gray-950">
                  {t(`steps.${id}.title`)}
                </h3>
                <p className="text-sm/6 text-gray-600">
                  {t(`steps.${id}.text`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function AiSection() {
  const t = useTranslations('solutionsCareJanwar.ai')

  return (
    <Container className="py-20 sm:py-24">
      <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#052e24] p-8 text-white shadow-[0_34px_100px_rgba(5,46,36,0.18)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">{t('body')}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {aiCapabilities.map((id) => (
              <article
                key={id}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <BrainCircuit className="size-5 text-[#b8f36f]" />
                <h3 className="mt-8 text-xl/[1.05] font-semibold text-white">
                  {t(`items.${id}.title`)}
                </h3>
                <p className="mt-3 text-sm/6 text-white/58">
                  {t(`items.${id}.text`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

function OutcomesSection() {
  const t = useTranslations('solutionsCareJanwar.outcomes')

  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Subheading as="div">{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomeGroups.map((id) => (
            <article
              key={id}
              className="rounded-lg border border-[#dfe6e2] bg-[#fbfcfb] p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
            >
              <Activity className="size-5 text-[#12806a]" />
              <h3 className="mt-8 text-xl/6 font-semibold text-gray-950">
                {t(`items.${id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`items.${id}.text`)}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </div>
  )
}

function FinalSection() {
  const t = useTranslations('solutionsCareJanwar.final')

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
          <Button href="/contact">
            {t('start')}
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button variant="secondary" href="/product/care-core">
            CARE Core
          </Button>
        </div>
      </div>
    </Container>
  )
}

function StructuredData({ faqs }: { faqs: Faq[] }) {
  const t = useTranslations('solutionsCareJanwar.structuredData')
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'CARE Janwar',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web',
      url: 'https://ohc.network/solutions/care-janwar',
      description: t('description'),
      softwareRequirements: 'Web browser',
      license: 'https://opensource.org/license/mit/',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      featureList: t.raw('featureList') as string[],
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

export default async function CareJanwar({ params }: PageProps) {
  await initLocale(params)
  const t = await getTranslations('solutionsCareJanwar.faq')
  const faqs: Faq[] = faqIds.map((id) => ({
    question: t(`items.${id}.question`),
    answer: t(`items.${id}.answer`),
  }))

  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData faqs={faqs} />
      <Hero />
      <main>
        <OverviewSection />
        <WorkflowSection />
        <CapabilitiesSection />
        <CoreSection />
        <ImplementationSection />
        <AiSection />
        <OutcomesSection />
        <FaqSection faqs={faqs} />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
