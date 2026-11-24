import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
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
  const t = await getTranslations({
    locale,
    namespace: 'aboutSecurityCompliance.meta',
  })

  return pageMetadata({
    locale,
    path: '/about/security-compliance',
    title: t('title'),
    description: t('description'),
    keywords:
      'healthcare security open source, FHIR compliance, RBAC healthcare, sovereign cloud',
  })
}

const sovereignty = ['infrastructure', 'licenseFees', 'dataOwnership'] as const

const aiCards = ['plugins', 'guardrails'] as const

const strong = (chunks: React.ReactNode) => <strong>{chunks}</strong>

function Hero() {
  const t = useTranslations('aboutSecurityCompliance.hero')

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

function StandardsSection() {
  const t = useTranslations('aboutSecurityCompliance.standards')

  return (
    <Container className="py-24">
      <Subheading>{t('eyebrow')}</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-normal">
        {t('title')}
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        {t.rich('body', { strong })}
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6 text-center">
          <div className="mb-2 text-2xl font-bold text-[#052e24]">FHIR R5</div>
          <p className="text-sm text-[#12806a]">{t('items.fhir')}</p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6 text-center">
          <div className="mb-2 text-2xl font-bold text-[#052e24]">SNOMED</div>
          <p className="text-sm text-[#12806a]">{t('items.snomed')}</p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6 text-center">
          <div className="mb-2 text-2xl font-bold text-[#052e24]">LOINC</div>
          <p className="text-sm text-[#12806a]">{t('items.loinc')}</p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6 text-center">
          <div className="mb-2 text-2xl font-bold text-[#052e24]">ICD-10</div>
          <p className="text-sm text-[#12806a]">{t('items.icd10')}</p>
        </div>
      </div>
    </Container>
  )
}

function AccessControlSection() {
  const t = useTranslations('aboutSecurityCompliance.access')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading
          as="h2"
          className="mt-2 max-w-4xl font-display tracking-normal"
        >
          {t('title')}
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <BentoCard
            eyebrow={t('hierarchy.eyebrow')}
            title={t('hierarchy.title')}
            description={t('hierarchy.description')}
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#052e24]">
                    {t('hierarchy.graphicTitle')}
                  </div>
                  <div className="mt-2 text-sm text-[#12806a]">
                    {t('hierarchy.graphicLabel')}
                  </div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow={t('auditTrails.eyebrow')}
            title={t('auditTrails.title')}
            description={t('auditTrails.description')}
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#052e24]">
                    {t('auditTrails.graphicTitle')}
                  </div>
                  <div className="mt-2 text-sm text-[#12806a]">
                    {t('auditTrails.graphicLabel')}
                  </div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="lg:col-span-1"
          />
          <BentoCard
            eyebrow={t('monitoring.eyebrow')}
            title={t('monitoring.title')}
            description={t('monitoring.description')}
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#052e24]">
                    {t('monitoring.graphicTitle')}
                  </div>
                  <div className="mt-2 text-sm text-[#12806a]">
                    {t('monitoring.graphicLabel')}
                  </div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-b-4xl lg:col-span-1 lg:rounded-tr-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function SovereigntySection() {
  const t = useTranslations('aboutSecurityCompliance.sovereignty')

  return (
    <Container className="py-24">
      <Subheading>{t('eyebrow')}</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-normal">
        {t('title')}
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        {t.rich('body', { strong })}
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {sovereignty.map((id) => (
          <div
            key={id}
            className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6"
          >
            <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
              {t(`items.${id}.title`)}
            </h3>
            <p className="text-[#12806a]">{t(`items.${id}.text`)}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function AIReadySection() {
  const t = useTranslations('aboutSecurityCompliance.aiReady')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading
          as="h2"
          className="mt-2 max-w-4xl font-display tracking-normal"
        >
          {t('title')}
        </Heading>
        <p className="mt-6 max-w-4xl text-lg text-gray-600">{t('body')}</p>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {aiCards.map((id) => {
            const items: string[] = t.raw(`${id}.items`)

            return (
              <div
                key={id}
                className="rounded-lg border border-[#dfe6e2] bg-white p-8"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {t(`${id}.title`)}
                </h3>
                <p className="mb-4 text-gray-600">{t(`${id}.body`)}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default async function SecurityCompliance({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <StandardsSection />
        <AccessControlSection />
        <SovereigntySection />
        <AIReadySection />
      </main>
      <Footer />
    </div>
  )
}
