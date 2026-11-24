import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FaqSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Locale } from '@/i18n/config'
import { pageMetadata } from '@/i18n/metadata'
import { localizePath } from '@/i18n/paths'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BrainCircuit,
  Calculator,
  ChartNoAxesCombined,
  ClipboardCheck,
  ClipboardList,
  Eye,
  FileSearch,
  FileSignature,
  FileText,
  GitBranch,
  Handshake,
  HeartPulse,
  Hospital,
  Languages,
  Layers3,
  LockKeyhole,
  Mic2,
  Network,
  Pill,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

const path = '/product/care-ai'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'productCareAi.meta' })

  return pageMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
    keywords: [
      'CARE AI',
      'responsible AI healthcare',
      'AI medical scribe',
      'open source AI medical scribe',
      'Care Scribe',
      'realtime voice scribe',
      'voice EMR',
      'voice EHR',
      'clinical summarization',
      'doctor copilot',
      'Care Ask',
      'healthcare document AI',
      'medical document understanding',
      'AI discharge summary',
      'drug safety alerts',
      'AI score calculators',
      'FHIR AI',
      'AI for HMIS',
      'AI for hospital information systems',
      'human in the loop healthcare AI',
      'AI for public health programs',
    ],
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      url: localizePath(path, locale),
      images: [
        {
          url: '/videos/care-ai-hero-poster.jpg',
          width: 1600,
          height: 1226,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      title: t('title'),
      description: t('twitterDescription'),
      images: ['/videos/care-ai-hero-poster.jpg'],
    },
  })
}

const steps = ['context', 'draft', 'review', 'record'] as const

const principles = [
  { id: 'grounded', icon: Layers3 },
  { id: 'reviewed', icon: ClipboardCheck },
  { id: 'traceable', icon: SearchCheck },
  { id: 'roles', icon: LockKeyhole },
  { id: 'safety', icon: ShieldCheck },
  { id: 'recorded', icon: FileSignature },
] as const

const capabilities = [
  { id: 'careScribe', icon: Mic2 },
  { id: 'realtimeScribe', icon: Languages },
  { id: 'visionRegistration', icon: Eye },
  { id: 'visionDocumentation', icon: FileSearch },
  { id: 'recordSummary', icon: FileText },
  { id: 'doctorSummary', icon: Stethoscope },
  { id: 'careAsk', icon: BrainCircuit },
  { id: 'differentialDiagnosis', icon: Activity },
  { id: 'carePlan', icon: Route },
  { id: 'scoreCalculators', icon: Calculator },
  { id: 'drugSafety', icon: Pill },
  { id: 'dischargeSummary', icon: FileSignature },
  { id: 'handoverChart', icon: GitBranch },
  { id: 'formBuilder', icon: ClipboardList },
  { id: 'formEnhancer', icon: Sparkles },
] as const

const teams = [
  { id: 'doctors', icon: UserRoundCheck },
  { id: 'nurses', icon: HeartPulse },
  { id: 'fieldWorkers', icon: Users },
  { id: 'hospitals', icon: Hospital },
  { id: 'publicHealth', icon: Network },
] as const

const integrations = [
  'externalScribes',
  'ekaScribe',
  'indiaAi',
  'researchModels',
] as const

const safety = [
  'humanReview',
  'sourceGrounding',
  'roleBasedAccess',
  'auditTrails',
  'accountability',
  'evaluation',
] as const

const roadmap = ['horizon1', 'horizon2', 'horizon3'] as const

const difference = [
  'workflowNative',
  'patientAware',
  'humanReviewed',
  'standardsAligned',
  'auditReady',
  'extensible',
  'publicGood',
] as const

const faqs = [
  'whatIs',
  'aiDoctor',
  'principle',
  'careScribe',
  'chatbot',
  'partners',
] as const

/** Absolute URL of a page in the given locale. */
function siteUrl(href: string, locale: Locale) {
  const localized = localizePath(href, locale)
  return `https://ohc.network${localized === '/' ? '' : localized}`
}

function HeroVisual() {
  const t = useTranslations('productCareAi.heroVisual')

  return (
    <div className="relative mx-auto mt-14 max-w-6xl sm:mt-18">
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#061711] p-2 shadow-[0_34px_100px_rgba(7,24,19,0.22)]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(184,243,111,0.16),transparent_30%),linear-gradient(0deg,rgba(18,128,106,0.2),transparent_45%)]" />
        <div className="relative grid gap-2 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-md bg-white">
            <video
              aria-label={t('videoLabel')}
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              poster="/videos/care-ai-hero-poster.jpg"
              preload="metadata"
              className="aspect-[1600/1226] h-full w-full object-cover object-left-top"
            >
              <source src="/videos/care-ai-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="grid gap-2">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-md border border-white/10 bg-white/[0.055] p-5 text-white backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-white/10 font-mono text-xs font-semibold text-[#b8f36f]">
                    0{index + 1}
                  </div>
                  <p className="text-lg font-semibold">
                    {t(`steps.${step}.title`)}
                  </p>
                </div>
                <p className="mt-4 text-sm/6 text-white/62">
                  {t(`steps.${step}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const t = useTranslations('productCareAi.hero')

  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-6xl pt-16 pb-18 text-center sm:pt-24 sm:pb-24 md:pt-32">
          <Subheading>CARE AI</Subheading>
          <h1 className="mx-auto mt-5 max-w-6xl font-display text-5xl/[1] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            {t('title')}
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {t('body')}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('discuss')}</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/product/care-core"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('exploreCore')}</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <HeroVisual />
        </div>
      </Container>
    </div>
  )
}

function HealthSystemFirstSection() {
  const t = useTranslations('productCareAi.healthSystem')
  const thesis: string[] = t.raw('thesis')

  return (
    <Container className="py-18 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
        </div>
        <div className="grid gap-3">
          {thesis.map((line, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6 text-xl/7 font-semibold text-gray-950 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function PrincipleSection() {
  const t = useTranslations('productCareAi.principle')

  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">{t('body')}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.id}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6"
              >
                <principle.icon className="size-5 text-[#b8f36f]" />
                <h3 className="mt-7 text-lg font-semibold text-white">
                  {t(`items.${principle.id}.title`)}
                </h3>
                <p className="mt-3 text-sm/6 text-white/62">
                  {t(`items.${principle.id}.text`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function CoreSection() {
  const t = useTranslations('productCareAi.core')
  const coreContext: string[] = t.raw('context')

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
        </div>
        <div className="grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] sm:grid-cols-2">
          {coreContext.map((item, index) => (
            <div key={index} className="bg-white p-5">
              <BadgeCheck className="size-4 text-[#12806a]" />
              <p className="mt-5 text-sm/6 font-semibold text-gray-950">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function CapabilitiesSection() {
  const t = useTranslations('productCareAi.capabilities')

  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="max-w-5xl">
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mt-6 max-w-4xl text-lg/7 text-gray-600">{t('body')}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const points: string[] = t.raw(`items.${capability.id}.points`)

            return (
              <article
                key={capability.id}
                className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
              >
                <capability.icon className="size-5 text-[#12806a]" />
                <p className="mt-7 font-mono text-xs font-semibold tracking-[0.16em] text-[#12806a] uppercase">
                  {t(`items.${capability.id}.category`)}
                </p>
                <h3 className="mt-3 text-2xl/[1.05] font-semibold text-gray-950">
                  {t(`items.${capability.id}.title`)}
                </h3>
                <p className="mt-4 text-sm/6 text-gray-600">
                  {t(`items.${capability.id}.text`)}
                </p>
                <ul className="mt-6 space-y-2">
                  {points.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm/6 text-gray-700"
                    >
                      <span className="mt-2 size-1.5 flex-none rounded-full bg-[#12806a]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

function TeamSection() {
  const t = useTranslations('productCareAi.teams')

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
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

      <div className="mt-12 grid gap-5 lg:grid-cols-5">
        {teams.map((team) => {
          const items: string[] = t.raw(`items.${team.id}.items`)

          return (
            <article
              key={team.id}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)] lg:col-span-1"
            >
              <team.icon className="size-5 text-[#12806a]" />
              <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
                {t(`items.${team.id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`items.${team.id}.text`)}
              </p>
              <ul className="mt-6 space-y-2">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm/5 font-medium text-gray-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Container>
  )
}

function ExtensibleSection() {
  const t = useTranslations('productCareAi.extensible')

  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">{t('body')}</p>
          </div>
          <div className="grid gap-3">
            {integrations.map((id) => (
              <article
                key={id}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6"
              >
                <Handshake className="size-5 text-[#b8f36f]" />
                <h3 className="mt-7 text-xl/6 font-semibold text-white">
                  {t(`items.${id}.title`)}
                </h3>
                <p className="mt-3 text-sm/6 text-white/62">
                  {t(`items.${id}.text`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function SafetySection() {
  const t = useTranslations('productCareAi.safety')
  const metrics: string[] = t.raw('metrics')

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {safety.map((id) => (
            <article
              key={id}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <ShieldCheck className="size-5 text-[#12806a]" />
              <h3 className="mt-7 text-lg font-semibold text-gray-950">
                {t(`items.${id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`items.${id}.text`)}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <ChartNoAxesCombined className="size-5 text-[#12806a]" />
          <h3 className="text-xl font-semibold text-gray-950">
            {t('metricsTitle')}
          </h3>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#dfe6e2] bg-white px-4 py-3 text-sm font-medium text-gray-800"
            >
              {metric}
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function RoadmapSection() {
  const t = useTranslations('productCareAi.roadmap')

  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {roadmap.map((id) => {
            const focus: string[] = t.raw(`items.${id}.focus`)

            return (
              <article
                key={id}
                className="rounded-lg border border-[#dfe6e2] bg-white p-7 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
              >
                <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[#12806a] uppercase">
                  {t(`items.${id}.horizon`)}
                </p>
                <h3 className="mt-7 text-2xl/[1.05] font-semibold text-gray-950">
                  {t(`items.${id}.title`)}
                </h3>
                <p className="mt-4 text-sm/6 text-gray-600">
                  {t(`items.${id}.text`)}
                </p>
                <ul className="mt-6 space-y-2">
                  {focus.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm/5 font-medium text-gray-800"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

function DifferenceSection() {
  const t = useTranslations('productCareAi.difference')

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
        </div>
        <div className="grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] sm:grid-cols-2">
          {difference.map((id) => (
            <div key={id} className="bg-white p-6">
              <BookOpenCheck className="size-5 text-[#12806a]" />
              <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
                {t(`items.${id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`items.${id}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function FAQSection() {
  const t = useTranslations('productCareAi.faq')

  return (
    <FaqSection
      faqs={faqs.map((id) => ({
        question: t(`items.${id}.question`),
        answer: t(`items.${id}.answer`),
      }))}
    />
  )
}

function FinalSection() {
  const t = useTranslations('productCareAi.final')

  return (
    <Container className="py-20 sm:py-24">
      <div className="rounded-lg border border-[#dfe6e2] bg-white p-8 text-center shadow-[0_28px_90px_rgba(7,24,19,0.07)] sm:p-12">
        <BrainCircuit className="mx-auto size-6 text-[#12806a]" />
        <Heading as="h2" className="mx-auto mt-6 max-w-4xl">
          {t('title')}
        </Heading>
        <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
          {t('body')}
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-xl/7 font-semibold text-gray-950">
          {t('tagline')}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/contact" className="w-full sm:w-auto">
            {t('discuss')}
          </Button>
          <Button
            variant="secondary"
            href="/product/care-core"
            className="w-full sm:w-auto"
          >
            {t('exploreCore')}
          </Button>
        </div>
      </div>
    </Container>
  )
}

function StructuredData() {
  const t = useTranslations('productCareAi')
  const locale = useLocale()
  const pageUrl = siteUrl(path, locale)
  const about: string[] = t.raw('structuredData.about')
  const capabilityList = capabilities.map(({ id }) => ({
    title: t(`capabilities.items.${id}.title`),
    text: t(`capabilities.items.${id}.text`),
  }))

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: t('meta.title'),
      url: pageUrl,
      description: t('structuredData.pageDescription'),
      isPartOf: {
        '@type': 'WebSite',
        name: 'Open Healthcare Network',
        url: 'https://ohc.network',
      },
      about: about.map((name) => ({ '@type': 'Thing', name })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: t('structuredData.breadcrumbHome'),
          item: siteUrl('/', locale),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'CARE',
          item: siteUrl('/product/care-core', locale),
        },
        { '@type': 'ListItem', position: 3, name: 'CARE AI', item: pageUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'CARE AI',
      alternateName: [
        'Care Scribe',
        'CARE AI Medical Scribe',
        'CARE Voice EMR',
        'CARE Healthcare Workflow AI',
      ],
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web',
      url: pageUrl,
      description: t('structuredData.appDescription'),
      featureList: capabilityList.map((capability) => capability.title),
      publisher: {
        '@type': 'Organization',
        name: 'Open Healthcare Network Foundation',
        url: 'https://ohc.network',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: t('structuredData.capabilitiesListName'),
      itemListElement: capabilityList.map((capability, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: capability.title,
        description: capability.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((id) => ({
        '@type': 'Question',
        name: t(`faq.items.${id}.question`),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t(`faq.items.${id}.answer`),
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

export default async function CareAI({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <HealthSystemFirstSection />
        <PrincipleSection />
        <CoreSection />
        <CapabilitiesSection />
        <TeamSection />
        <ExtensibleSection />
        <SafetySection />
        <RoadmapSection />
        <DifferenceSection />
        <FAQSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
