import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  BadgeCheck,
  Download,
  FileText,
  Github,
  Image as ImageIcon,
  Newspaper,
  ShieldAlert,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'pressMedia.meta' })

  return pageMetadata({
    locale,
    path: '/press-media',
    title: t('title'),
    description: t('description'),
    keywords:
      'OHC press kit, Open Healthcare Network media, CARE DPG facts, healthcare commons press',
  })
}

const publicFacts = [
  { id: 'role', icon: Newspaper },
  { id: 'dpg', icon: BadgeCheck },
  { id: 'openSource', icon: Github },
  { id: 'standards', icon: FileText },
] as const

function Hero() {
  const t = useTranslations('pressMedia.hero')

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
        </div>
      </Container>
    </div>
  )
}

function BoilerplateSection() {
  const t = useTranslations('pressMedia.boilerplate')

  return (
    <Container className="py-24">
      <Subheading>{t('eyebrow')}</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        {t('title')}
      </Heading>
      <div className="mt-10 rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-8">
        <p className="text-lg/8 text-gray-700">{t('foundation')}</p>
        <p className="mt-6 text-lg/8 text-gray-700">{t('care')}</p>
      </div>
    </Container>
  )
}

function FactsSection() {
  const t = useTranslations('pressMedia.facts')

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
          {publicFacts.map((fact) => (
            <div
              key={fact.id}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <fact.icon className="size-6 text-[#12806a]" />
              <h3 className="mt-6 text-lg font-semibold text-gray-950">
                {t(`items.${fact.id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`items.${fact.id}.text`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function AssetsSection() {
  const t = useTranslations('pressMedia.assets')

  return (
    <Container className="py-24">
      <div className="max-w-4xl">
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading as="h2" className="mt-2">
          {t('title')}
        </Heading>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-[#dfe6e2] bg-white p-8">
          <ImageIcon className="size-6 text-[#12806a]" />
          <h3 className="mt-6 text-lg font-semibold text-gray-950">
            {t('logos.title')}
          </h3>
          <p className="mt-3 text-sm/6 text-gray-600">{t('logos.text')}</p>
          <Button
            variant="secondary"
            href="https://github.com/ohcnetwork/branding"
            className="mt-6"
          >
            {t('logos.action')}
          </Button>
        </div>
        <div className="rounded-lg border border-[#dfe6e2] bg-white p-8">
          <Download className="size-6 text-[#12806a]" />
          <h3 className="mt-6 text-lg font-semibold text-gray-950">
            {t('map.title')}
          </h3>
          <p className="mt-3 text-sm/6 text-gray-600">{t('map.text')}</p>
          <Button
            variant="secondary"
            href="/care_deployment_map.png"
            className="mt-6"
          >
            {t('map.action')}
          </Button>
        </div>
        <div className="rounded-lg border border-[#dfe6e2] bg-white p-8">
          <ShieldAlert className="size-6 text-[#12806a]" />
          <h3 className="mt-6 text-lg font-semibold text-gray-950">
            {t('metrics.title')}
          </h3>
          <p className="mt-3 text-sm/6 text-gray-600">{t('metrics.text')}</p>
          <Button variant="secondary" href="/contact" className="mt-6">
            {t('metrics.action')}
          </Button>
        </div>
      </div>
    </Container>
  )
}

function ContactSection() {
  const t = useTranslations('pressMedia.contact')

  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="text-center">
          <Subheading dark>{t('eyebrow')}</Subheading>
          <Heading as="h2" dark className="mx-auto mt-2 max-w-4xl">
            {t('title')}
          </Heading>
          <div className="mt-8">
            <Button href="/contact">{t('action')}</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default async function PressMedia({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <BoilerplateSection />
        <FactsSection />
        <AssetsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
