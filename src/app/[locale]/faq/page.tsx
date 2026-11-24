import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FaqSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'faq.meta' })

  return pageMetadata({
    locale,
    path: '/faq',
    title: t('title'),
    description: t('description'),
    keywords:
      'HMIS FAQ, open source EMR questions, FHIR customization BYOT, ABDM plugin FAQ',
  })
}

function Hero() {
  const t = useTranslations('faq.hero')

  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-normal text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
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

const faqIds = [
  'implementation',
  'ownership',
  'localization',
  'nationalPrograms',
  'monitoringAi',
  'security',
  'settings',
  'support',
] as const

function FAQSection() {
  const t = useTranslations('faq.items')

  return (
    <FaqSection
      faqs={faqIds.map((id) => ({
        question: t(`${id}.question`),
        answer: t(`${id}.answer`),
      }))}
    />
  )
}

function ContactSection() {
  const t = useTranslations('faq.contact')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="text-center">
          <Heading as="h2" className="max-w-4xl font-display tracking-normal">
            {t('title')}
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {t('body')}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">{t('contactUs')}</Button>
            <Button variant="secondary" href="/developers">
              {t('joinCommunity')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default async function FAQ({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
