import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import { BadgeCheck, ExternalLink, FileText } from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'foundationIso.meta' })

  return pageMetadata({
    locale,
    path: '/foundation/iso',
    title: t('title'),
    description: t('description'),
    keywords:
      'OHC ISO certification, ISO 27001, ISO 82304, health software safety, information security, open healthcare',
  })
}

const isoCertifications = [
  {
    id: 'informationSecurity',
    standard: 'ISO 27001:2022',
    file: 'ISO 27001_2022.pdf',
  },
  {
    id: 'healthSoftware',
    standard: 'ISO 82304-1:2016',
    file: 'ISO 82304-1_2016.pdf',
  },
  {
    id: 'wellnessApps',
    standard: 'ISO 82304-2:2021',
    file: 'ISO 82304-2_2021.pdf',
  },
] as const

const whyCertifiedPoints = ['trust', 'patientData', 'safety'] as const

function docUrl(filename: string) {
  return `/docs/${encodeURIComponent(filename)}`
}

function Hero() {
  const t = useTranslations('foundationIso.hero')

  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <div className="max-w-4xl">
            <Subheading>Open Healthcare Network Foundation</Subheading>
            <h1 className="mt-4 font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
              {t('title')}
            </h1>
            <p className="mt-8 max-w-3xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              {t('body')}
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CertificationsSection() {
  const t = useTranslations('foundationIso.certifications')

  return (
    <Container className="py-24">
      <div className="space-y-8">
        {isoCertifications.map((cert) => (
          <div
            key={cert.standard}
            className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white"
          >
            <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-[1fr_0.4fr]">
              <div>
                <div className="flex items-start gap-4">
                  <BadgeCheck className="mt-0.5 size-6 shrink-0 text-[#12806a]" />
                  <div>
                    <p className="font-mono text-xs font-semibold tracking-widest text-[#12806a] uppercase">
                      {cert.standard}
                    </p>
                    <h3 className="mt-1.5 text-xl font-semibold text-gray-950">
                      {t(`items.${cert.id}.title`)}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-base/7 text-gray-600">
                  {t(`items.${cert.id}.description`)}
                </p>
                <div className="mt-5 rounded-md bg-[#f7f9f6] px-4 py-3">
                  <p className="text-xs font-semibold tracking-wide text-gray-950/50 uppercase">
                    {t('scope')}
                  </p>
                  <p className="mt-1 text-sm/6 text-gray-700">
                    {t(`items.${cert.id}.scope`)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-6 lg:items-end lg:pt-2">
                <div className="flex items-center gap-2 rounded-full border border-[#c6ddd6] bg-[#edf5f1] px-3 py-1.5">
                  <span className="size-2 rounded-full bg-[#12806a]" />
                  <span className="text-xs font-semibold text-[#12806a]">
                    {t('certified')}
                  </span>
                </div>
                <a
                  href={docUrl(cert.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#dfe6e2] bg-white px-4 py-2.5 text-sm font-semibold text-gray-950 hover:bg-[#f7f9f6]"
                >
                  <FileText className="size-4 text-[#12806a]" />
                  {t('viewCertificate')}
                  <ExternalLink className="size-3.5 text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function WhyCertifiedSection() {
  const t = useTranslations('foundationIso.whyCertified')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-2">
              {t('title')}
            </Heading>
          </div>
          <div className="space-y-6">
            {whyCertifiedPoints.map((id) => (
              <div
                key={id}
                className="rounded-lg border border-[#dfe6e2] bg-white p-6"
              >
                <h3 className="text-base font-semibold text-gray-950">
                  {t(`points.${id}.title`)}
                </h3>
                <p className="mt-2 text-sm/6 text-gray-600">
                  {t(`points.${id}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default async function IsoPage({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <CertificationsSection />
        <WhyCertifiedSection />
      </main>
      <Footer />
    </div>
  )
}
