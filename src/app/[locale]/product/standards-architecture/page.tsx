import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  ArrowRight,
  Braces,
  BrainCircuit,
  CloudCog,
  DatabaseZap,
  FileJson2,
  KeyRound,
  Languages,
  Network,
  ShieldCheck,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({
    locale,
    namespace: 'productStandardsArchitecture.meta',
  })

  return pageMetadata({
    locale,
    path: '/product/standards-architecture',
    title: t('title'),
    description: t('description'),
    keywords:
      'CARE standards architecture, FHIR R5, SNOMED CT, LOINC, UCUM, ICD-10, ABDM, open healthcare APIs, terminology services',
  })
}

const standards = [
  { id: 'fhir', name: 'FHIR R5' },
  { id: 'snomed', name: 'SNOMED CT' },
  { id: 'loinc', name: 'LOINC' },
  { id: 'ucum', name: 'UCUM' },
  { id: 'icd10', name: 'ICD-10' },
  { id: 'abdm', name: 'ABDM' },
] as const

const architecture = [
  { id: 'forms', icon: FileJson2 },
  { id: 'terminology', icon: Languages },
  { id: 'apis', icon: Braces },
  { id: 'plugins', icon: Network },
] as const

const aiReadiness = [
  { id: 'draftFlags', icon: BrainCircuit },
  { id: 'auditability', icon: ShieldCheck },
  { id: 'roleBasedAccess', icon: KeyRound },
  { id: 'structuredData', icon: DatabaseZap },
] as const

function Hero() {
  const t = useTranslations('productStandardsArchitecture.hero')

  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>{t('eyebrow')}</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            {t('title')}
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {t('body')}
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/product/care-core"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('exploreCore')}</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/about/security-compliance"
              className="w-full sm:w-auto"
            >
              {t('securityCompliance')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StandardsSection() {
  const t = useTranslations('productStandardsArchitecture.standards')

  return (
    <Container className="py-24">
      <Subheading>{t('eyebrow')}</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        {t('title')}
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {standards.map((standard) => (
          <div
            key={standard.id}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6"
          >
            <DatabaseZap className="size-6 text-[#12806a]" />
            <h3 className="mt-6 text-xl font-semibold text-gray-950">
              {standard.name}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">
              {t(`items.${standard.id}`)}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function ArchitectureSection() {
  const t = useTranslations('productStandardsArchitecture.architecture')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-2">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {architecture.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-[#dfe6e2] bg-white p-6"
              >
                <item.icon className="size-6 text-[#12806a]" />
                <h3 className="mt-6 text-lg font-semibold text-gray-950">
                  {t(`items.${item.id}.title`)}
                </h3>
                <p className="mt-3 text-sm/6 text-gray-600">
                  {t(`items.${item.id}.description`)}
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
  const t = useTranslations('productStandardsArchitecture.deployment')
  const options: string[] = t.raw('options')

  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-2">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {options.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#dfe6e2] bg-white p-5"
            >
              <CloudCog className="mb-4 size-5 text-[#12806a]" />
              <p className="text-sm/6 font-semibold text-gray-900">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function AISection() {
  const t = useTranslations('productStandardsArchitecture.ai')

  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-2">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">{t('body')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {aiReadiness.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <item.icon className="size-6 text-lime-200" />
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {t(`items.${item.id}`)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default async function StandardsArchitecture({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <StandardsSection />
        <ArchitectureSection />
        <DeploymentSection />
        <AISection />
      </main>
      <Footer />
    </div>
  )
}
