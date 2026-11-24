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
  Blocks,
  BookOpenCheck,
  Building2,
  ClipboardCheck,
  Code2,
  GitMerge,
  GraduationCap,
  Handshake,
  ShieldCheck,
  Wrench,
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
    namespace: 'ecosystemImplementationPartners.meta',
  })

  return pageMetadata({
    locale,
    path: '/ecosystem/implementation-partners',
    title: t('title'),
    description: t('description'),
    keywords:
      'CARE implementation partners, healthcare system integrators, CARE plugins, open source healthcare deployment, HMIS implementation',
  })
}

const expectations = [
  { id: 'deploy', icon: GitMerge },
  { id: 'contribute', icon: Code2 },
  { id: 'compatibility', icon: ShieldCheck },
  { id: 'trust', icon: ClipboardCheck },
] as const

const roadmap = [
  { id: 'onboarding', icon: Handshake },
  { id: 'guides', icon: BookOpenCheck },
  { id: 'plugins', icon: Blocks },
  { id: 'training', icon: GraduationCap },
  { id: 'quality', icon: ClipboardCheck },
  { id: 'support', icon: Wrench },
] as const

function Hero() {
  const t = useTranslations('ecosystemImplementationPartners.hero')

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
              <span>{t('becomePartner')}</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/product/apps-integrations"
              className="w-full sm:w-auto"
            >
              {t('explorePlugins')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CapabilitiesSection() {
  const t = useTranslations('ecosystemImplementationPartners.capabilities')
  const capabilities: string[] = t.raw('items')

  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-2">
            {t('title')}
          </Heading>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#dfe6e2] bg-white p-5"
            >
              <Building2 className="mb-4 size-5 text-[#12806a]" />
              <p className="text-sm/6 font-semibold text-gray-900">
                {capability}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function ExpectationsSection() {
  const t = useTranslations('ecosystemImplementationPartners.expectations')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-2">
            {t('title')}
          </Heading>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {expectations.map((item) => (
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
    </div>
  )
}

function RoadmapSection() {
  const t = useTranslations('ecosystemImplementationPartners.roadmap')

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
        <div className="grid gap-4 sm:grid-cols-2">
          {roadmap.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <item.icon className="size-6 text-[#12806a]" />
              <h3 className="mt-6 text-lg font-semibold text-gray-950">
                {t(`items.${item.id}`)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default async function ImplementationPartners({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <CapabilitiesSection />
        <ExpectationsSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  )
}
