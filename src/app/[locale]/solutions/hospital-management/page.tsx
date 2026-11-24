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
  BrainCircuit,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardList,
  CreditCard,
  Database,
  FileText,
  FlaskConical,
  GitBranch,
  Hospital,
  LockKeyhole,
  PackageCheck,
  PanelsTopLeft,
  Plug,
  Smartphone,
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
    namespace: 'solutionsHospitalManagement.meta',
  })

  return pageMetadata({
    locale,
    path: '/solutions/hospital-management',
    title: t('title'),
    description: t('description'),
    keywords: [
      'CARE HMIS',
      'open source HIS',
      'open source HMIS',
      'hospital information system',
      'hospital management information system',
      'open source EMR',
      'FHIR hospital system',
      'hospital workflows',
      'healthcare interoperability',
      'AI-ready hospital information system',
    ],
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizePath('/solutions/hospital-management', locale),
      images: [
        {
          url: '/screenshots/hmis-encounter-overview.jpeg',
          width: 1600,
          height: 900,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      title: t('ogTitle'),
      description: t('twitterDescription'),
      images: ['/screenshots/hmis-encounter-overview.jpeg'],
    },
  })
}

/** CARE HMIS release shown in the deployment section. */
const hmisVersion = '3.0'

const faqIds = [
  'what',
  'emrOrHis',
  'selfHosted',
  'departments',
  'interoperability',
  'ai',
] as const

const hisLayers = [
  'clinicalRecord',
  'operations',
  'revenue',
  'interoperability',
] as const

const hospitalFlows = ['patient', 'information', 'revenue'] as const

const encounterTypes = [
  'outpatient',
  'emergency',
  'inpatient',
  'observation',
  'homeHealth',
  'virtualCare',
] as const

const departmentCoverage = [
  'frontDesk',
  'opd',
  'emergency',
  'inpatient',
  'icu',
  'laboratory',
  'pharmacy',
  'billing',
  'administration',
] as const

const implementationNeeds = [
  'masterData',
  'workflowMapping',
  'formsTerminology',
  'integrations',
  'security',
  'adoption',
] as const

const problemPoints = [
  { id: 'fragments', icon: PanelsTopLeft },
  { id: 'disconnected', icon: GitBranch },
  { id: 'digitalPaper', icon: FileText },
  { id: 'lostRevenue', icon: CreditCard },
] as const

const coreModules = [
  { id: 'clinicalData', icon: Stethoscope },
  { id: 'scheduling', icon: CalendarDays },
  { id: 'queues', icon: Users },
  { id: 'formBuilder', icon: ClipboardList },
  { id: 'beds', icon: Bed },
  { id: 'hierarchy', icon: Hospital },
  { id: 'rbac', icon: LockKeyhole },
  { id: 'reports', icon: ChartNoAxesCombined },
] as const

const operatingModules = [
  {
    id: 'lab',
    icon: FlaskConical,
    video: '/videos/his/lmis.mp4',
    poster: '/videos/his/lmis-poster.jpg',
  },
  {
    id: 'pharmacy',
    icon: PackageCheck,
    video: '/videos/his/pharmacy.mp4',
    poster: '/videos/his/pharmacy-poster.jpg',
  },
  {
    id: 'billing',
    icon: CreditCard,
    video: '/videos/his/billing.mp4',
    poster: '/videos/his/billing-poster.jpg',
  },
] as const

const workflowVideos = [
  {
    id: 'beds',
    video: '/videos/his/bed-management.mp4',
    poster: '/videos/his/bed-management-poster.jpg',
    icon: Bed,
  },
  {
    id: 'drawings',
    video: '/videos/his/clinical-drawings.mp4',
    poster: '/videos/his/clinical-drawings-poster.jpg',
    icon: FileText,
  },
  {
    id: 'reports',
    video: '/videos/his/dynamic-reports.mp4',
    poster: '/videos/his/dynamic-reports-poster.jpg',
    icon: ChartNoAxesCombined,
  },
] as const

const standards = [
  { id: 'fhir', name: 'FHIR R5' },
  { id: 'snomed', name: 'SNOMED CT' },
  { id: 'loinc', name: 'LOINC' },
  { id: 'ucum', name: 'UCUM' },
  { id: 'icd10', name: 'ICD-10' },
  { id: 'byot', name: 'BYOT' },
] as const

const apps = [
  'abdm',
  'teleicu',
  'scribe',
  'tokenDisplay',
  'labsDevices',
  'claimsMessaging',
] as const

const deploymentStates = [
  'kerala',
  'karnataka',
  'jharkhand',
  'assam',
  'manipur',
] as const

function VideoFrame({
  src,
  poster,
  label,
  className = 'aspect-[1280/868]',
}: {
  src: string
  poster: string
  label: string
  className?: string
}) {
  return (
    <video
      aria-label={label}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      poster={poster}
      preload="metadata"
      className={`${className} w-full object-cover`}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

function HeroVisual() {
  const t = useTranslations('solutionsHospitalManagement.hero')

  return (
    <div className="relative mx-auto mt-14 max-w-6xl sm:mt-18">
      <div className="absolute inset-x-8 top-12 bottom-0 rounded-full bg-[#12806a]/18 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#071812] p-2 shadow-[0_34px_100px_rgba(7,24,19,0.22)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(184,243,111,0.18),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_32%)]" />
        <video
          aria-label={t('videoLabel')}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          poster="/videos/care-hmis-hero-poster.jpg"
          preload="metadata"
          className="relative aspect-[1280/872] w-full rounded-md object-cover"
        >
          <source src="/videos/care-hmis-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute right-5 bottom-5 hidden rounded-lg border border-white/14 bg-[#041611]/80 px-4 py-3 text-white shadow-2xl backdrop-blur-xl sm:block">
          <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
            {t('liveWorkflow')}
          </p>
          <p className="mt-1 text-sm font-semibold">
            {t('liveWorkflowDetail')}
          </p>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const t = useTranslations('solutionsHospitalManagement.hero')

  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-6xl pt-16 pb-18 text-center sm:pt-24 sm:pb-24 md:pt-32">
          <Subheading>CARE HMIS</Subheading>
          <h1 className="mx-auto mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
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
              <span>{t('planDeployment')}</span>
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
          <HeroVisual />
        </div>
      </Container>
    </div>
  )
}

function ProofStrip() {
  const t = useTranslations('solutionsHospitalManagement.proof')
  const format = useFormatter()
  const proofStats = [
    { id: 'hospitals', value: `${format.number(100)}+` },
    { id: 'states', value: format.number(5) },
    { id: 'fhir', value: 'FHIR R5' },
    { id: 'mit', value: 'MIT' },
  ] as const

  return (
    <Container className="py-14 sm:py-16">
      <div className="grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_24px_80px_rgba(7,24,19,0.06)] sm:grid-cols-2 lg:grid-cols-4">
        {proofStats.map(({ id, value }) => (
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

function HisOverviewSection() {
  const t = useTranslations('solutionsHospitalManagement.overview')

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
        <div className="grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] sm:grid-cols-2">
          {hisLayers.map((id) => (
            <div key={id} className="bg-white p-6 sm:p-7">
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[#12806a] uppercase">
                {t('layerLabel')}
              </p>
              <h3 className="mt-5 text-2xl/[1.05] font-semibold text-gray-950">
                {t(`layers.${id}.title`)}
              </h3>
              <p className="mt-4 text-sm/6 text-gray-600">
                {t(`layers.${id}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function ProblemSection() {
  const t = useTranslations('solutionsHospitalManagement.problem')

  return (
    <section className="py-18 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {problemPoints.map((point) => (
              <div
                key={point.id}
                className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_14px_44px_rgba(7,24,19,0.04)]"
              >
                <point.icon className="size-5 text-[#12806a]" />
                <h3 className="mt-8 text-lg font-semibold text-gray-950">
                  {t(`items.${point.id}.title`)}
                </h3>
                <p className="mt-3 text-sm/6 text-gray-600">
                  {t(`items.${point.id}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function FlowSection() {
  const t = useTranslations('solutionsHospitalManagement.flows')

  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">{t('body')}</p>
          </div>
          <div className="grid gap-3">
            {hospitalFlows.map((id, index) => (
              <div
                key={id}
                className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.055] p-5 sm:grid-cols-[52px_0.4fr_1fr] sm:items-start"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-white/10 font-mono text-xs font-semibold text-[#b8f36f]">
                  0{index + 1}
                </div>
                <h3 className="font-semibold text-white">
                  {t(`items.${id}.label`)}
                </h3>
                <p className="text-sm/6 text-white/62">
                  {t(`items.${id}.detail`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function EncounterSection() {
  const t = useTranslations('solutionsHospitalManagement.encounters')

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
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

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_24px_80px_rgba(7,24,19,0.06)]">
          <VideoFrame
            src="/videos/his/doctor-notes.mp4"
            poster="/videos/his/doctor-notes-poster.jpg"
            label={t('videoLabel')}
            className="h-full min-h-[360px]"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {encounterTypes.map((id) => (
            <div
              key={id}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <Activity className="size-5 text-[#12806a]" />
              <h3 className="mt-8 text-lg font-semibold text-gray-950">
                {t(`types.${id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`types.${id}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function CoreModulesSection() {
  const t = useTranslations('solutionsHospitalManagement.coreModules')

  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
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

        <div className="mt-12 grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] sm:grid-cols-2 lg:grid-cols-4">
          {coreModules.map((module) => (
            <div key={module.id} className="min-h-64 bg-white p-6 sm:p-7">
              <module.icon className="size-5 text-[#12806a]" />
              <h3 className="mt-8 text-xl/6 font-semibold text-gray-950">
                {t(`items.${module.id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`items.${module.id}.text`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function WorkflowVideosSection() {
  const t = useTranslations('solutionsHospitalManagement.workflows')

  return (
    <Container className="py-20 sm:py-24">
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

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {workflowVideos.map((workflow) => (
          <article
            key={workflow.id}
            className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_18px_58px_rgba(7,24,19,0.05)]"
          >
            <div className="overflow-hidden bg-[#eef5f0]">
              <VideoFrame
                src={workflow.video}
                poster={workflow.poster}
                label={t('videoLabel', {
                  title: t(`items.${workflow.id}.title`),
                })}
              />
            </div>
            <div className="p-6">
              <workflow.icon className="size-5 text-[#12806a]" />
              <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
                {t(`items.${workflow.id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`items.${workflow.id}.text`)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}

function DepartmentCoverageSection() {
  const t = useTranslations('solutionsHospitalManagement.departments')

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

      <div className="mt-12 grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] md:grid-cols-3">
        {departmentCoverage.map((id) => (
          <article key={id} className="min-h-44 bg-white p-6 sm:p-7">
            <BadgeCheck className="size-5 text-[#12806a]" />
            <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
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

function OperationsSection() {
  const t = useTranslations('solutionsHospitalManagement.operations')

  return (
    <Container className="py-20 sm:py-24">
      <div className="max-w-4xl">
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading as="h2" className="mt-3">
          {t('title')}
        </Heading>
        <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {operatingModules.map((module) => (
          <article
            key={module.id}
            className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_18px_58px_rgba(7,24,19,0.05)]"
          >
            <div className="overflow-hidden bg-[#eef5f0]">
              <VideoFrame
                src={module.video}
                poster={module.poster}
                label={t('videoLabel', {
                  title: t(`items.${module.id}.title`),
                })}
              />
            </div>
            <div className="p-6">
              <module.icon className="size-5 text-[#12806a]" />
              <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
                {t(`items.${module.id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`items.${module.id}.text`)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}

function StandardsSection() {
  const t = useTranslations('solutionsHospitalManagement.standards')

  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">{t('body')}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {standards.map(({ id, name }) => (
              <div
                key={id}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <Database className="mb-8 size-5 text-[#b8f36f]" />
                <p className="text-xl font-semibold text-white">{name}</p>
                <p className="mt-2 text-sm/5 text-white/55">
                  {t(`items.${id}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function AppsAndAiSection() {
  const t = useTranslations('solutionsHospitalManagement.apps')

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {apps.map((id) => (
              <div
                key={id}
                className="rounded-lg border border-[#dfe6e2] bg-white p-5"
              >
                <Plug className="size-4 text-[#12806a]" />
                <h3 className="mt-5 text-base font-semibold text-gray-950">
                  {t(`items.${id}.title`)}
                </h3>
                <p className="mt-2 text-sm/6 text-gray-600">
                  {t(`items.${id}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_24px_80px_rgba(7,24,19,0.08)]">
          <img
            src="/screenshots/hmis-ai-scribe.jpeg"
            alt={t('imageAlt')}
            className="aspect-[1.32] w-full object-cover"
          />
          <div className="border-t border-[#dfe6e2] p-6">
            <div className="flex items-center gap-3">
              <BrainCircuit className="size-5 text-[#12806a]" />
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[#12806a] uppercase">
                {t('responsibleAi')}
              </p>
            </div>
            <p className="mt-4 text-sm/6 text-gray-600">
              {t('responsibleAiBody')}
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

function ImplementationSection() {
  const t = useTranslations('solutionsHospitalManagement.implementation')

  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {implementationNeeds.map((id, index) => (
            <article
              key={id}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-[#e7f4ed] font-mono text-xs font-semibold text-[#12806a]">
                0{index + 1}
              </div>
              <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
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

function DeploymentSection() {
  const t = useTranslations('solutionsHospitalManagement.deployment')
  const format = useFormatter()
  const deploymentCards = [
    ...deploymentStates.map((id) => ({
      key: id,
      value: t(`states.${id}`),
      label: t('liveDeployment'),
    })),
    {
      key: 'hospitals',
      value: `${format.number(100)}+`,
      label: t('hospitals'),
    },
  ]

  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-3">
              {t('title', { version: hmisVersion })}
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              {t('body', { version: hmisVersion })}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" className="w-full sm:w-auto">
                {t('startConversation')}
              </Button>
              <Button
                variant="secondary"
                href="/impact"
                className="w-full sm:w-auto"
              >
                {t('viewImpact')}
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {deploymentCards.map(({ key, value, label }) => (
              <div
                key={key}
                className="rounded-lg border border-[#dfe6e2] bg-white p-6"
              >
                <BadgeCheck className="mb-8 size-5 text-[#12806a]" />
                <p className="text-2xl/[1] font-semibold text-gray-950">
                  {value}
                </p>
                <p className="mt-2 text-sm/6 text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function useFaqs() {
  const t = useTranslations('solutionsHospitalManagement.faq.items')

  return faqIds.map((id) => ({
    question: t(`${id}.question`),
    answer: t(`${id}.answer`),
  }))
}

function FAQSection() {
  return <FaqSection faqs={useFaqs()} />
}

function FinalSection() {
  const t = useTranslations('solutionsHospitalManagement.final')

  return (
    <Container className="py-20 sm:py-24">
      <div className="rounded-lg border border-[#dfe6e2] bg-white p-8 text-center shadow-[0_28px_90px_rgba(7,24,19,0.07)] sm:p-12">
        <Smartphone className="mx-auto size-6 text-[#12806a]" />
        <Heading as="h2" className="mx-auto mt-6 max-w-4xl">
          {t('title')}
        </Heading>
        <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
          {t('body')}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/contact" className="w-full sm:w-auto">
            {t('planDeployment')}
          </Button>
          <Button
            variant="secondary"
            href="/product/apps-integrations"
            className="w-full sm:w-auto"
          >
            {t('exploreApps')}
          </Button>
        </div>
      </div>
    </Container>
  )
}

function StructuredData() {
  const t = useTranslations('solutionsHospitalManagement')
  const locale = useLocale()
  const faqs = useFaqs()
  const featureList: string[] = t.raw('structuredData.featureList')

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'CARE HMIS',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web',
      url: `https://ohc.network${localizePath('/solutions/hospital-management', locale)}`,
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

export default async function HospitalManagement({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <ProofStrip />
        <HisOverviewSection />
        <ProblemSection />
        <FlowSection />
        <EncounterSection />
        <CoreModulesSection />
        <WorkflowVideosSection />
        <DepartmentCoverageSection />
        <OperationsSection />
        <StandardsSection />
        <AppsAndAiSection />
        <ImplementationSection />
        <DeploymentSection />
        <FAQSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
