import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  ArrowRight,
  BadgeIndianRupee,
  Building2,
  FileText,
  Globe2,
  HeartHandshake,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'support.meta' })

  return pageMetadata({
    locale,
    path: '/support',
    title: t('title'),
    description: t('description'),
    keywords:
      'fund open healthcare, OHC Foundation support, healthcare commons, CARE Core funding, digital public infrastructure sponsor',
  })
}

const fundingSupports = [
  { id: 'careCore', icon: Layers3 },
  { id: 'security', icon: ShieldCheck },
  { id: 'documentation', icon: FileText },
  { id: 'ecosystem', icon: Users },
  { id: 'ai', icon: Sparkles },
  { id: 'southToSouth', icon: Globe2 },
] as const

const sponsorTypes = ['visionary', 'member', 'program', 'individual'] as const

function Hero() {
  const t = useTranslations('support.hero')

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
              href="mailto:finance@ohc.network"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('contactFinance')}</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              href="/support/how-to-fund"
            >
              {t('howToFund')}
            </Button>
            <Button
              variant="outline"
              href="/funding.json"
              className="w-full sm:w-auto"
            >
              {t('viewFile', { file: 'funding.json' })}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function WhyFundSection() {
  const t = useTranslations('support.whyFund')

  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-2">
            {t('title')}
          </Heading>
        </div>
        <div className="space-y-6 text-lg/8 text-gray-600">
          <p>{t('body')}</p>
          <p>{t('model')}</p>
        </div>
      </div>
    </Container>
  )
}

function SupportAreasSection() {
  const t = useTranslations('support.areas')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-2">
            {t('title')}
          </Heading>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {fundingSupports.map((item) => (
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

function SponsorSection() {
  const t = useTranslations('support.sponsors')

  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-2">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            {t('body', { file: 'funding.json' })}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {sponsorTypes.map((id) => (
            <div
              key={id}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <BadgeIndianRupee className="size-6 text-[#12806a]" />
              <h3 className="mt-6 text-lg font-semibold text-gray-950">
                {t(`items.${id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`items.${id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function ContactSection() {
  const t = useTranslations('support.contact')

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
            <a
              href="mailto:finance@ohc.network"
              className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <HeartHandshake className="size-6 text-lime-200" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                {t('grants')}
              </h3>
              <p className="mt-3 text-sm/6 text-white/65">
                finance@ohc.network
              </p>
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <Building2 className="size-6 text-lime-200" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                {t('partnerships')}
              </h3>
              <p className="mt-3 text-sm/6 text-white/65">
                {t('partnershipsText')}
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default async function Support({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <WhyFundSection />
        <SupportAreasSection />
        <SponsorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
