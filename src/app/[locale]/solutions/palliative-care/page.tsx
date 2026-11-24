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
  BarChart3,
  BrainCircuit,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  FileText,
  HandHeart,
  HeartPulse,
  Home,
  Hospital,
  Languages,
  Network,
  Route,
  ShieldCheck,
  Users,
  Workflow,
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
    namespace: 'solutionsPalliativeCare.meta',
  })

  return pageMetadata({
    locale,
    path: '/solutions/palliative-care',
    title: t('title'),
    description: t('description'),
    keywords: [
      'CARE palliative care',
      'CARE Home Care Grid',
      'open source palliative care platform',
      'home-based care software',
      'community-based palliative care',
      'palliative care patient registry',
      'palliative care dashboard',
      'palliative care volunteer coordination',
      'Kerala Palliative Care Grid',
      'Kerala CARE',
      'digital public infrastructure healthcare',
      'open healthcare infrastructure',
      'FHIR palliative care',
      'home visit workflow software',
      'community health worker software',
    ],
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizePath('/solutions/palliative-care', locale),
      images: [
        {
          url: '/logos/care-palliative.svg',
          width: 512,
          height: 512,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      title: t('ogTitle'),
      description: t('twitterDescription'),
      images: ['/logos/care-palliative.svg'],
    },
  })
}

const faqIds = [
  'what',
  'onlyPalliative',
  'fieldTeams',
  'kerala',
  'partners',
] as const

const workflowSteps = [
  'identify',
  'register',
  'assess',
  'assign',
  'visit',
  'followUp',
  'escalate',
  'monitor',
] as const

const implementationSteps = ['mapModel', 'pilot', 'train', 'scale'] as const

const outcomeGroups = ['coverage', 'continuity', 'quality', 'equity'] as const

const gridColumns = [
  {
    id: 'community',
    items: [
      { id: 'patientHome', icon: Home },
      { id: 'fieldTeams', icon: Users },
      { id: 'facilities', icon: Hospital },
    ],
  },
  {
    id: 'program',
    items: [
      { id: 'visitQueue', icon: CalendarCheck },
      { id: 'escalations', icon: Route },
      { id: 'coverage', icon: BarChart3 },
    ],
  },
] as const

const capabilityGroups = [
  { id: 'registry', icon: ClipboardList },
  { id: 'homeVisits', icon: Home },
  { id: 'coordination', icon: Network },
  { id: 'records', icon: FileText },
  { id: 'dashboards', icon: BarChart3 },
  { id: 'volunteers', icon: HandHeart },
  { id: 'referrals', icon: Route },
  { id: 'carePlanning', icon: ClipboardCheck },
] as const

const aiUseCases = [
  { id: 'voiceNotes', icon: Languages },
  { id: 'summaries', icon: BrainCircuit },
  { id: 'followUpDrafts', icon: ClipboardCheck },
] as const

function CareGridVisual() {
  const t = useTranslations('solutionsPalliativeCare')
  const timelineItems: string[] = t.raw('grid.timelineItems')
  const blocks: string[] = t.raw('grid.blocks')

  return (
    <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
      <div className="absolute inset-x-10 top-8 bottom-0 rounded-full bg-[#12806a]/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#041611] p-3 shadow-[0_38px_120px_rgba(7,24,19,0.24)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(184,243,111,0.23),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.1),transparent_34%)]" />
        <div className="relative grid gap-3 lg:grid-cols-[0.78fr_1.1fr_0.78fr]">
          {gridColumns.map((column) => (
            <div
              key={column.id}
              className="rounded-lg border border-white/10 bg-white/[0.055] p-4"
            >
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                {t(`grid.columns.${column.id}`)}
              </p>
              <div className="mt-4 space-y-2">
                {column.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#061f19]/82 p-3"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <item.icon className="size-4 text-[#b8f36f]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t(`grid.items.${item.id}.title`)}
                      </p>
                      <p className="mt-1 text-xs/5 text-white/48">
                        {t(`grid.items.${item.id}.detail`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="order-first rounded-lg border border-white/12 bg-[linear-gradient(145deg,rgba(119,220,154,0.48),rgba(6,76,57,0.88)_48%,rgba(3,27,21,0.98))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)] lg:order-none">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg border border-white/15 bg-white/12">
                  <HeartPulse className="size-6 text-[#e8fff0]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-white/58 uppercase">
                    {t('grid.solutionLabel')}
                  </p>
                  <p className="mt-1 text-3xl/[0.95] font-semibold text-white">
                    {t('grid.solutionTitle')}
                  </p>
                </div>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold text-white/70 sm:inline-flex">
                {t('grid.poweredBy')}
              </span>
            </div>

            <div className="mt-7 rounded-lg border border-white/12 bg-white/[0.08] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {t('grid.timelineTitle')}
                  </p>
                  <p className="mt-1 text-xs/5 text-white/52">
                    {t('grid.timelineBody')}
                  </p>
                </div>
                <BadgeCheck className="size-5 shrink-0 text-[#b8f36f]" />
              </div>
              <div className="mt-5 grid grid-cols-4 gap-1.5">
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-md border border-white/10 bg-white/[0.08] px-2 py-3 text-center text-xs font-semibold text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {blocks.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-white/10 bg-white/[0.07] px-3 py-3 text-sm font-semibold text-white"
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
              {t(`workflow.steps.${id}.title`)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const t = useTranslations('solutionsPalliativeCare.hero')
  const heroPills: string[] = t.raw('pills')

  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-6xl pt-16 pb-18 text-center sm:pt-24 sm:pb-24 md:pt-32">
          <img
            src="/logos/care-palliative.svg"
            alt=""
            className="mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
          <Subheading as="div" className="mt-8">
            {t('eyebrow')}
          </Subheading>
          <h1 className="mx-auto mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            {t('title')}
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/74 sm:text-2xl/8">
            {t('body')}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href="/contact"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('buildGrid')}</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/product/care-core"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('exploreCareCore')}</span>
              <ArrowRight className="size-4" />
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
          <CareGridVisual />
        </div>
      </Container>
    </div>
  )
}

function OperatingLayerSection() {
  const t = useTranslations('solutionsPalliativeCare.operatingLayer')
  const careCorePrimitives: string[] = t.raw('primitives')

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

      <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_24px_80px_rgba(7,24,19,0.05)] sm:p-8">
          <Subheading as="div">{t('primitivesTitle')}</Subheading>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {careCorePrimitives.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#e3ebe6] bg-[#fbfcfb] px-4 py-3 text-sm font-semibold text-gray-950"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-[#dfe6e2] bg-[#052e24] p-6 text-white shadow-[0_24px_80px_rgba(5,46,36,0.16)] sm:p-8">
          <Workflow className="size-7 text-[#b8f36f]" />
          <h3 className="mt-10 text-3xl/[1] font-semibold">
            {t('verticalTitle')}
          </h3>
          <p className="mt-5 text-sm/6 text-white/62">{t('verticalBody')}</p>
        </div>
      </div>
    </Container>
  )
}

function WorkflowSection() {
  const t = useTranslations('solutionsPalliativeCare.workflow')

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
  const t = useTranslations('solutionsPalliativeCare.capabilities')

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
        {capabilityGroups.map((item) => (
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

function ProofSection() {
  const t = useTranslations('solutionsPalliativeCare.proof')
  const format = useFormatter()
  const proofStats = [
    { id: 'centers', value: `${format.number(1300)}+` },
    { id: 'organizations', value: `${format.number(1300)}+` },
    { id: 'patients', value: `${format.number(330000)}+` },
    {
      id: 'consultations',
      value: `${format.number(1300000, { notation: 'compact' })}+`,
    },
    { id: 'users', value: `${format.number(12000)}+` },
  ] as const

  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
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

        <div className="mt-12 grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#fbfcfb] shadow-[0_24px_80px_rgba(7,24,19,0.06)] sm:grid-cols-2 lg:grid-cols-5">
          {proofStats.map(({ id, value }) => (
            <div
              key={id}
              className="border-[#dfe6e2] p-6 sm:p-8 lg:border-l first:lg:border-l-0 [&:not(:first-child)]:border-t sm:[&:not(:first-child)]:border-t-0"
            >
              <p className="text-4xl/[0.95] font-semibold tracking-normal text-gray-950 sm:text-5xl/[0.9]">
                {value}
              </p>
              <p className="mt-3 text-sm/6 font-medium text-gray-600">
                {t(`stats.${id}`)}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-4xl text-xs/5 text-gray-500">{t('note')}</p>
      </Container>
    </div>
  )
}

function DifferentiatorSection() {
  const t = useTranslations('solutionsPalliativeCare.differentiators')
  const differentiators: string[] = t.raw('items')

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
            {differentiators.map((item, index) => (
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
  const t = useTranslations('solutionsPalliativeCare.implementation')

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
  const t = useTranslations('solutionsPalliativeCare.ai')
  const principles: string[] = t.raw('principles')

  return (
    <Container className="py-20 sm:py-24">
      <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#052e24] p-8 text-white shadow-[0_34px_100px_rgba(5,46,36,0.18)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">{t('body')}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {aiUseCases.map((item) => (
              <article
                key={item.id}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <item.icon className="size-5 text-[#b8f36f]" />
                <h3 className="mt-8 text-xl/[1.05] font-semibold text-white">
                  {t(`items.${item.id}.title`)}
                </h3>
                <p className="mt-3 text-sm/6 text-white/58">
                  {t(`items.${item.id}.text`)}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-4 sm:grid-cols-4">
          {principles.map((item, index) => (
            <div
              key={index}
              className="rounded-md bg-white/[0.08] px-4 py-3 text-center text-sm font-semibold text-white/82"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function ReplicationSection() {
  const t = useTranslations('solutionsPalliativeCare.replication')
  const replicationAssets: string[] = t.raw('assets')

  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {replicationAssets.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-[#dfe6e2] bg-[#fbfcfb] p-4"
              >
                <ShieldCheck className="size-5 shrink-0 text-[#12806a]" />
                <p className="font-semibold text-gray-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function OutcomesSection() {
  const t = useTranslations('solutionsPalliativeCare.outcomes')

  return (
    <Container className="py-20 sm:py-24">
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
            className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
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
  )
}

function useFaqs() {
  const t = useTranslations('solutionsPalliativeCare.faq.items')

  return faqIds.map((id) => ({
    question: t(`${id}.question`),
    answer: t(`${id}.answer`),
  }))
}

function FAQSection() {
  return <FaqSection faqs={useFaqs()} />
}

function FinalSection() {
  const t = useTranslations('solutionsPalliativeCare.final')

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
            {t('startConversation')}
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button variant="secondary" href="/product/care-ai">
            {t('exploreCareAi')}
          </Button>
        </div>
      </div>
    </Container>
  )
}

function StructuredData() {
  const t = useTranslations('solutionsPalliativeCare')
  const locale = useLocale()
  const faqs = useFaqs()
  const featureList: string[] = t.raw('structuredData.featureList')

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: t('structuredData.name'),
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web',
      url: `https://ohc.network${localizePath('/solutions/palliative-care', locale)}`,
      description: t('structuredData.description'),
      softwareRequirements: 'Web browser',
      license: 'https://opensource.org/license/mit/',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      featureList,
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

export default async function PalliativeCare({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <OperatingLayerSection />
        <WorkflowSection />
        <CapabilitiesSection />
        <ProofSection />
        <DifferentiatorSection />
        <ImplementationSection />
        <AiSection />
        <ReplicationSection />
        <OutcomesSection />
        <FAQSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
