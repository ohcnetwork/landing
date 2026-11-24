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
  Building2,
  Code2,
  GitBranch,
  Globe2,
  HeartHandshake,
  Hospital,
  Landmark,
  Stethoscope,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'network.meta' })

  return pageMetadata({
    locale,
    path: '/network',
    title: t('title'),
    description: t('description'),
    keywords:
      'OHC ecosystem, open healthcare network, CARE contributors, healthcare implementation partners, clinical community',
  })
}

const ecosystem = [
  { id: 'governments', icon: Landmark },
  { id: 'hospitals', icon: Hospital },
  { id: 'partners', icon: Building2 },
  { id: 'clinicians', icon: Stethoscope },
  { id: 'developers', icon: Code2 },
  { id: 'funders', icon: HeartHandshake },
] as const

const milestones = [
  'pandemic',
  'dpg',
  'criticalCare',
  'hmis',
  'foundation',
] as const

function Hero() {
  const t = useTranslations('network.hero')

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
              href="/ecosystem/implementation-partners"
              className="w-full sm:w-auto"
            >
              {t('implementationPartners')}
            </Button>
            <Button
              variant="secondary"
              href="/developers"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('developerCommunity')}</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function EcosystemSection() {
  const t = useTranslations('network.ecosystem')

  return (
    <Container className="py-24">
      <div className="max-w-4xl">
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading as="h2" className="mt-2">
          {t('title')}
        </Heading>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ecosystem.map((item) => (
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
    </Container>
  )
}

function JourneySection() {
  const t = useTranslations('network.journey')

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
          <div className="space-y-4">
            {milestones.map((id) => (
              <div
                key={id}
                className="rounded-lg border border-[#dfe6e2] bg-white p-6"
              >
                <GitBranch className="size-5 text-[#12806a]" />
                <h3 className="mt-4 text-lg font-semibold text-gray-950">
                  {t(`milestones.${id}.title`)}
                </h3>
                <p className="mt-3 text-sm/6 text-gray-600">
                  {t(`milestones.${id}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function CommonsSection() {
  const t = useTranslations('network.commons')
  const items: string[] = t.raw('items')

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
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <Globe2 className="mb-4 size-5 text-lime-200" />
                <p className="text-base/6 font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default async function Network({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <EcosystemSection />
        <JourneySection />
        <CommonsSection />
      </main>
      <Footer />
    </div>
  )
}
