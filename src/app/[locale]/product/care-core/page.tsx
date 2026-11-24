import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { CorePluginCloud } from '@/components/core-plugin-cloud'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { pageMetadata } from '@/i18n/metadata'
import { localizePath } from '@/i18n/paths'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Building2,
  Calendar,
  Cloud,
  CreditCard,
  Database,
  Edit3,
  FileText,
  GitBranch,
  HeartPulse,
  Hospital,
  Layers3,
  Link,
  LockKeyhole,
  Pill,
  Plug,
  Smartphone,
  Stethoscope,
  TestTube,
  TrendingUp,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

const path = '/product/care-core'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'productCareCore.meta' })

  return pageMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
    keywords: [
      'CARE Core',
      'open healthcare OS',
      'open source healthcare platform',
      'FHIR R5 healthcare platform',
      'open source HIS',
      'open source HMIS',
      'open source EMR',
      'healthcare interoperability',
      'Digital Public Good healthcare',
      'MIT licensed healthcare software',
      'FHIR native healthcare platform',
      'healthcare API',
      'SNOMED CT',
      'LOINC',
      'UCUM',
      'ICD-10',
      'healthcare plugin architecture',
      'self-hostable healthcare infrastructure',
    ],
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      url: localizePath(path, locale),
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
      title: t('title'),
      description: t('twitterDescription'),
      images: ['/screenshots/hmis-encounter-overview.jpeg'],
    },
  })
}

const coreModules = [
  'administration',
  'definitions',
  'clinical',
  'scheduling',
  'pharmacy',
  'labs',
  'billing',
  'coordination',
] as const

const architecturePrinciples = [
  { id: 'sharedCore', icon: Database },
  { id: 'workflows', icon: Edit3 },
  { id: 'plugins', icon: Plug },
] as const

const primitives = [
  { id: 'patients', icon: Stethoscope },
  { id: 'facilities', icon: Building2 },
  { id: 'providers', icon: Hospital },
  { id: 'encounters', icon: HeartPulse },
  { id: 'forms', icon: FileText },
  { id: 'observations', icon: BarChart3 },
  { id: 'orders', icon: GitBranch },
  { id: 'medications', icon: Pill },
  { id: 'labs', icon: TestTube },
  { id: 'scheduling', icon: Calendar },
  { id: 'access', icon: LockKeyhole },
  { id: 'reports', icon: TrendingUp },
] as const

const demos = [
  {
    id: 'dataCapture',
    video: '/core/clinical_data_capture.mp4',
    poster: '/core/posters/clinical_data_capture.jpg',
    icon: FileText,
  },
  {
    id: 'emrForms',
    video: '/core/Customizable_EMR_Forms.mp4',
    poster: '/core/posters/Customizable_EMR_Forms.jpg',
    icon: Edit3,
  },
  {
    id: 'labs',
    video: '/core/lab_management.mp4',
    poster: '/core/posters/lab_management.jpg',
    icon: TestTube,
  },
  {
    id: 'pharmacy',
    video: '/core/pharmacy_and_inventory.mp4',
    poster: '/core/posters/pharmacy_and_inventory.jpg',
    icon: Pill,
  },
  {
    id: 'billing',
    video: '/core/billing_and_accounting.mp4',
    poster: '/core/posters/billing_and_accounting.jpg',
    icon: CreditCard,
  },
  {
    id: 'reports',
    video: '/core/dynamic_reports.mp4',
    poster: '/core/posters/dynamic_reports.jpg',
    icon: BarChart3,
  },
] as const

const standards = [
  'fhir',
  'snomed',
  'loinc',
  'ucum',
  'icd10',
  'openApis',
] as const

const deploymentModes = [
  { id: 'sovereign', icon: Cloud },
  { id: 'mobile', icon: Smartphone },
  { id: 'aiReady', icon: BrainCircuit },
] as const

function CoreSlab() {
  const t = useTranslations('productCareCore.coreSlab')
  const value = (chunks: React.ReactNode) => (
    <b className="font-semibold text-white/82">{chunks}</b>
  )

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/15 bg-[linear-gradient(145deg,rgba(104,224,157,0.46),rgba(10,92,68,0.86)_42%,rgba(3,27,21,0.98))] p-4 text-white shadow-[0_34px_92px_rgba(4,40,30,0.42)] sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(218,255,226,0.34),transparent_30%),radial-gradient(circle_at_84%_22%,rgba(184,243,111,0.18),transparent_26%)]" />
      <div className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg border border-white/15 bg-white/12">
              <Database className="size-5 text-[#e8fff0]" />
            </div>
            <div>
              <p className="font-mono text-xs font-semibold text-white/58 uppercase">
                {t('eyebrow')}
              </p>
              <h2 className="mt-1 text-4xl/[0.9] font-semibold tracking-normal sm:text-6xl/[0.85]">
                CARE Core
              </h2>
            </div>
          </div>
          <div className="w-fit rounded-lg border border-white/10 bg-white/10 px-3 py-2 font-mono text-xs font-semibold text-white/72">
            v3.0.0 / FHIR R5
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {coreModules.map((id) => (
            <div
              key={id}
              className="rounded-lg border border-white/10 bg-white/[0.075] p-3"
            >
              <p className="truncate text-sm font-semibold text-white">
                {t(`modules.${id}.name`)}
              </p>
              <p className="mt-1 truncate text-xs text-white/48">
                {t(`modules.${id}.detail`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-2 rounded-lg border border-white/10 bg-[#031b15]/45 p-4 text-sm text-white/62 sm:grid-cols-2">
          <p>{t.rich('persistence', { b: value })}</p>
          <p className="sm:text-right">{t.rich('runtime', { b: value })}</p>
        </div>
      </div>
    </div>
  )
}

function HeroVisual() {
  const t = useTranslations('productCareCore.heroVisual')
  const plugins: string[] = t.raw('plugins')
  const solutions: string[] = t.raw('solutions')

  return (
    <div className="relative mx-auto mt-16 max-w-6xl">
      <div className="absolute inset-x-10 top-12 h-40 rounded-full bg-[#b8f36f]/24 blur-3xl" />
      <div className="relative rounded-lg border border-[#dce7df] bg-white/64 p-3 shadow-[0_34px_110px_rgba(7,24,19,0.13)] backdrop-blur-xl">
        <div className="rounded-lg bg-[#041611] p-3 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]">
          <div className="grid gap-3 lg:grid-cols-[1.28fr_0.72fr]">
            <CoreSlab />
            <div className="grid gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
                <div className="flex items-center gap-2">
                  <Plug className="size-4 text-[#b8f36f]" />
                  <p className="font-mono text-xs font-semibold text-[#b8f36f] uppercase">
                    {t('pluginSurface')}
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {plugins.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-xs font-semibold text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
                <div className="flex items-center gap-2">
                  <Layers3 className="size-4 text-[#b8f36f]" />
                  <p className="font-mono text-xs font-semibold text-[#b8f36f] uppercase">
                    {t('enabledSolutions')}
                  </p>
                </div>
                <div className="mt-4 grid gap-2">
                  {solutions.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#061f19]/82 px-3 py-2 text-sm font-semibold text-white"
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
    </div>
  )
}

function Hero() {
  const t = useTranslations('productCareCore.hero')
  const proofPoints: string[] = t.raw('proofPoints')

  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32">
          <div className="mx-auto max-w-6xl text-center">
            <Subheading as="div">CARE Core</Subheading>
            <h1 className="mx-auto mt-5 max-w-6xl font-display text-6xl/[0.9] font-semibold tracking-normal text-balance text-[#05070c] sm:text-8xl/[0.84] md:text-9xl/[0.82]">
              {t('title')}
            </h1>
            <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/72 sm:text-2xl/8">
              {t('body')}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href="/product/apps-integrations">
                <span>{t('seePlugins')}</span>
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="secondary" href="/developers">
                {t('developerDocs')}
              </Button>
            </div>
          </div>

          <HeroVisual />

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-2 sm:grid-cols-5">
            {proofPoints.map((point, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#dfe6e2] bg-white/72 px-3 py-3 text-center text-sm font-semibold text-[#173d34] shadow-[0_10px_30px_rgba(7,24,19,0.04)] backdrop-blur-xl"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function ArchitectureSection() {
  const t = useTranslations('productCareCore.architecture')

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
        {architecturePrinciples.map((item) => (
          <article
            key={item.id}
            className="rounded-lg border border-[#dfe6e2] bg-white p-7 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <item.icon className="size-6 text-[#12806a]" />
            <h3 className="mt-10 text-2xl/[1.05] font-semibold tracking-normal text-gray-950">
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

function PrimitivesSection() {
  const t = useTranslations('productCareCore.primitives')

  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Subheading as="div">{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {primitives.map((item) => (
            <div
              key={item.id}
              className="group rounded-lg border border-[#e0e8e3] bg-[#fbfcfb] p-5 transition hover:border-[#b9cbc2] hover:bg-white hover:shadow-[0_16px_42px_rgba(7,24,19,0.06)]"
            >
              <item.icon className="size-5 text-[#12806a]" />
              <p className="mt-8 text-base/5 font-semibold text-gray-950">
                {t(`items.${item.id}`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function DemoVideo({
  video,
  poster,
  label,
}: {
  video: string
  poster: string
  label: string
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
      className="aspect-[1280/868] w-full object-cover"
    >
      <source src={video} type="video/mp4" />
    </video>
  )
}

function ProductDemosSection() {
  const t = useTranslations('productCareCore.demos')

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
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
        {demos.map((demo) => (
          <article
            key={demo.id}
            className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_18px_58px_rgba(7,24,19,0.05)]"
          >
            <div className="overflow-hidden bg-[#eef5f0]">
              <DemoVideo
                video={demo.video}
                poster={demo.poster}
                label={t('videoLabel', {
                  title: t(`items.${demo.id}.title`),
                })}
              />
            </div>
            <div className="p-6">
              <demo.icon className="size-5 text-[#12806a]" />
              <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
                {t(`items.${demo.id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`items.${demo.id}.text`)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}

function PluginArchitectureSection() {
  const t = useTranslations('productCareCore.plugins')

  return (
    <div className="bg-[#f5f8f5] py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/product/apps-integrations">
                {t('exploreApps')}
              </Button>
              <Button variant="secondary" href="/product/care-ai">
                CARE AI
              </Button>
            </div>
          </div>
          <CorePluginCloud className="shadow-[0_34px_100px_rgba(5,46,36,0.22)]" />
        </div>
      </Container>
    </div>
  )
}

function StandardsSection() {
  const t = useTranslations('productCareCore.standards')

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
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((id) => (
              <div
                key={id}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <Link className="size-5 text-[#b8f36f]" />
                <p className="mt-8 text-2xl/[1] font-semibold text-white">
                  {t(`items.${id}.name`)}
                </p>
                <p className="mt-2 text-sm/5 text-white/52">
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

function DeploymentSection() {
  const t = useTranslations('productCareCore.deployment')

  return (
    <Container className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Subheading as="div">{t('eyebrow')}</Subheading>
        <Heading as="h2" className="mt-3">
          {t('title')}
        </Heading>
        <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {deploymentModes.map((mode) => (
          <article
            key={mode.id}
            className="rounded-lg border border-[#dfe6e2] bg-white p-7 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <mode.icon className="size-6 text-[#12806a]" />
            <h3 className="mt-10 text-2xl/[1.05] font-semibold text-gray-950">
              {t(`items.${mode.id}.title`)}
            </h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              {t(`items.${mode.id}.text`)}
            </p>
          </article>
        ))}
      </div>
    </Container>
  )
}

function StewardshipSection() {
  const t = useTranslations('productCareCore.stewardship')

  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="rounded-lg border border-[#dfe6e2] bg-[#fbfcfb] p-8 shadow-[0_24px_80px_rgba(7,24,19,0.05)] sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Subheading>{t('eyebrow')}</Subheading>
              <Heading as="h2" className="mt-3">
                {t('title')}
              </Heading>
            </div>
            <div>
              <p className="text-lg/7 text-gray-600">{t('body')}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/foundation/governance">{t('governance')}</Button>
                <Button variant="secondary" href="/support">
                  {t('fund')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FinalSection() {
  const t = useTranslations('productCareCore.final')

  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <Subheading as="div">{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
            {t('body')}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/solutions/hospital-management">
              {t('exploreHmis')}
            </Button>
            <Button variant="secondary" href="/contact">
              {t('talk')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StructuredData() {
  const t = useTranslations('productCareCore.structuredData')
  const locale = useLocale()
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CARE Core',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    url: `https://ohc.network${localizePath(path, locale)}`,
    description: t('description'),
    license: 'https://opensource.org/license/mit/',
    publisher: {
      '@type': 'Organization',
      name: 'Open Healthcare Network Foundation',
      url: 'https://ohc.network',
    },
    featureList: t.raw('featureList') as string[],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default async function CareCore({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <ArchitectureSection />
        <PrimitivesSection />
        <ProductDemosSection />
        <PluginArchitectureSection />
        <StandardsSection />
        <DeploymentSection />
        <StewardshipSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
