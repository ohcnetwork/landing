import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { CorePluginCloud } from '@/components/core-plugin-cloud'
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
    namespace: 'productAppsIntegrations.meta',
  })

  return pageMetadata({
    locale,
    path: '/product/apps-integrations',
    title: t('title'),
    description: t('description'),
    keywords:
      'healthcare integrations, ABDM plugin, ONVIF TeleICU, AI scribe, FHIR plugins',
  })
}

const categories = [
  'nationalId',
  'telemetry',
  'documentation',
  'labs',
  'pharmacy',
  'imaging',
  'payments',
  'messaging',
  'data',
] as const

function Hero() {
  const t = useTranslations('productAppsIntegrations.hero')

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
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/build-on-care">{t('buildOnCare')}</Button>
            <Button variant="secondary" href="#integrations">
              {t('exploreIntegrations')}
            </Button>
            <Button variant="secondary" href="/contact">
              {t('discussIntegration')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ArchitectureCloudSection() {
  const t = useTranslations('productAppsIntegrations.architecture')

  return (
    <Container className="pb-24">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-2">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
        </div>
        <CorePluginCloud className="shadow-[0_32px_90px_rgba(5,46,36,0.24)]" />
      </div>
    </Container>
  )
}

function FeaturedSection() {
  const t = useTranslations('productAppsIntegrations.featured')

  return (
    <Container className="py-24">
      <Subheading id="integrations" className="scroll-mt-8">
        {t('eyebrow')}
      </Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-normal">
        {t('title')}
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <BentoCard
          eyebrow={t('abdm.eyebrow')}
          title={t('abdm.title')}
          description={t('abdm.description')}
          graphic={
            <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#052e24]">ABDM</div>
                <div className="mt-2 text-sm text-[#12806a]">
                  {t('abdm.graphicLabel')}
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow={t('teleicu.eyebrow')}
          title={t('teleicu.title')}
          description={t('teleicu.description')}
          graphic={
            <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#052e24]">ONVIF</div>
                <div className="mt-2 text-sm text-[#12806a]">
                  {t('teleicu.graphicLabel')}
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-1"
        />
        <BentoCard
          eyebrow={t('scribe.eyebrow')}
          title={t('scribe.title')}
          description={t('scribe.description')}
          graphic={
            <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#052e24]">
                  {t('scribe.graphicTitle')}
                </div>
                <div className="mt-2 text-sm text-[#12806a]">
                  {t('scribe.graphicLabel')}
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-b-4xl lg:col-span-1 lg:rounded-tr-4xl"
        />
      </div>
    </Container>
  )
}

function CategoriesSection() {
  const t = useTranslations('productAppsIntegrations.categories')

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

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((id) => (
            <div
              key={id}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6 transition-colors hover:border-[#bdd0c5]"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {t(`items.${id}.name`)}
              </h3>
              <p className="text-sm text-gray-600">
                {t(`items.${id}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact">{t('browseAll')}</Button>
        </div>
      </Container>
    </div>
  )
}

export default async function AppsIntegrations({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <ArchitectureCloudSection />
        <FeaturedSection />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  )
}
