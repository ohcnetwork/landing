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
  BrainCircuit,
  ClipboardList,
  FilePenLine,
  HeartPulse,
  Mic,
  ShieldAlert,
  Stethoscope,
  Users,
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
    namespace: 'ecosystemClinicians.meta',
  })

  return pageMetadata({
    locale,
    path: '/ecosystem/clinicians',
    title: t('title'),
    description: t('description'),
    keywords:
      'CARE clinicians, clinical workflows, open source EMR clinicians, AI scribe healthcare, clinical forms FHIR',
  })
}

const workflowAreas = [
  { id: 'notes', icon: FilePenLine },
  { id: 'forms', icon: ClipboardList },
  { id: 'coordination', icon: HeartPulse },
  { id: 'ai', icon: BrainCircuit },
] as const

const communityItems = [
  { id: 'share', icon: Stethoscope },
  { id: 'review', icon: ClipboardList },
  { id: 'test', icon: BrainCircuit },
  { id: 'mentor', icon: Users },
] as const

function Hero() {
  const t = useTranslations('ecosystemClinicians.hero')

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
              href="/contact"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('joinReview')}</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/product/care-core"
              className="w-full sm:w-auto"
            >
              {t('reviewModules')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function WorkflowSection() {
  const t = useTranslations('ecosystemClinicians.workflow')

  return (
    <Container className="py-24">
      <div className="max-w-4xl">
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading as="h2" className="mt-2">
          {t('title')}
        </Heading>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {workflowAreas.map((area) => (
          <div
            key={area.id}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6"
          >
            <area.icon className="size-6 text-[#12806a]" />
            <h3 className="mt-6 text-lg font-semibold text-gray-950">
              {t(`items.${area.id}.title`)}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">
              {t(`items.${area.id}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function SafetySection() {
  const t = useTranslations('ecosystemClinicians.safety')
  const principles: string[] = t.raw('principles')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-2">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#dfe6e2] bg-white p-5"
              >
                <ShieldAlert className="mb-4 size-5 text-[#12806a]" />
                <p className="text-sm/6 font-semibold text-gray-900">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function AISection() {
  const t = useTranslations('ecosystemClinicians.ai')

  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-2">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
        </div>
        <div className="rounded-lg border border-[#dfe6e2] bg-white p-8">
          <Mic className="size-8 text-[#12806a]" />
          <p className="mt-6 text-xl/8 font-medium text-gray-800">
            {t('quote')}
          </p>
        </div>
      </div>
    </Container>
  )
}

function CommunitySection() {
  const t = useTranslations('ecosystemClinicians.community')

  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-2">
              {t('title')}
            </Heading>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {communityItems.map((item) => (
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

export default async function Clinicians({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <WorkflowSection />
        <SafetySection />
        <AISection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}
