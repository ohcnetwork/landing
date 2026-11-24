import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import { ArrowRight, ExternalLink, FileText, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({
    locale,
    namespace: 'foundationDocuments.meta',
  })

  return pageMetadata({
    locale,
    path: '/foundation/documents',
    title: t('title'),
    description: t('description'),
    keywords:
      'OHC Foundation documents, certificate of incorporation, MOA, AOA, PAN, GST, 80G, 12A, Section 8, MSME, Darpan',
  })
}

const incorporationDocs = [
  { id: 'incorporationCertificate', file: 'COI OHC Foundation.pdf' },
  { id: 'moa', file: 'MOA.pdf' },
  { id: 'aoa', file: 'AOA.pdf' },
  { id: 'section8License', file: 'Section 8 License.pdf' },
] as const

const taxDocs = [
  { id: 'pan', file: 'PAN OHC.pdf' },
  { id: 'tan', file: 'TAN OHC.pdf' },
  { id: 'gst', file: 'GST Certificate.pdf' },
  { id: 'lut', file: 'LUT GST 2026-27.pdf' },
  { id: 'registration12a', file: 'Form 10AC 12A registration.pdf' },
  { id: 'registration80g', file: 'Form 10AC 80G registration.pdf' },
  { id: 'msme', file: 'MSME Certificate.pdf' },
] as const

const otherDocs = [
  { id: 'darpan', file: 'Darpan.pdf' },
  { id: 'spree', file: 'Spree Registration.pdf' },
] as const

type Document = (
  | typeof incorporationDocs
  | typeof taxDocs
  | typeof otherDocs
)[number]

function docUrl(filename: string) {
  return `/docs/${encodeURIComponent(filename)}`
}

function DocumentCard({ doc }: { doc: Document }) {
  const t = useTranslations('foundationDocuments.documents')

  return (
    <div className="flex flex-col rounded-lg border border-[#dfe6e2] bg-white p-6">
      <FileText className="size-6 shrink-0 text-[#12806a]" />
      <h3 className="mt-4 text-base font-semibold text-gray-950">
        {t(`items.${doc.id}.title`)}
      </h3>
      <p className="mt-2 grow text-sm/6 text-gray-600">
        {t(`items.${doc.id}.description`)}
      </p>
      <a
        href={docUrl(doc.file)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#12806a] hover:text-[#0f6b58]"
      >
        {t('viewDocument')}
        <ExternalLink className="size-3.5" />
      </a>
    </div>
  )
}

function Hero() {
  const t = useTranslations('foundationDocuments.hero')

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

function RegistrationDetailsSection() {
  const t = useTranslations('foundationDocuments.registration')

  // Legal identifiers and the postal address stay in their official form.
  const registrationDetails = [
    { id: 'entityName', value: 'Open Healthcare Network Foundation' },
    { id: 'entityType', value: t('values.entityType') },
    { id: 'incorporationDate', value: t('values.incorporationDate') },
    { id: 'cin', value: 'U88100KL2025NPL098818' },
    {
      id: 'address',
      value:
        '1st Floor, C M Complex, Kalavath Road, Palarivattom, Kochi, Ernakulam, Kerala, India – 682025',
    },
    { id: 'certificate80g', value: 'AAECO9546JF20261' },
    { id: 'certificate12a', value: 'AAECO9546JF20251' },
    { id: 'gst', value: '32AAECO9546J1Z5' },
    { id: 'pan', value: 'AAECO9546J' },
  ] as const

  return (
    <Container className="pt-24 pb-0">
      <div className="max-w-4xl">
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading as="h2" className="mt-2">
          {t('title')}
        </Heading>
      </div>
      <div className="mt-12 overflow-hidden rounded-lg border border-[#dfe6e2] bg-white">
        {registrationDetails.map((item, index) => (
          <div
            key={item.id}
            className={`grid grid-cols-1 gap-2 p-5 sm:grid-cols-[0.5fr_1fr] sm:gap-8 ${
              index !== 0 ? 'border-t border-[#dfe6e2]' : ''
            }`}
          >
            <p className="text-sm/6 font-medium text-gray-950/60">
              {t(`labels.${item.id}`)}
            </p>
            <p className="font-mono text-sm/6 font-semibold text-gray-950">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function IncorporationSection() {
  const t = useTranslations('foundationDocuments.incorporation')

  return (
    <Container className="py-24">
      <Subheading>{t('eyebrow')}</Subheading>
      <Heading as="h2" className="mt-2 max-w-2xl">
        {t('title')}
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {incorporationDocs.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>
    </Container>
  )
}

function TaxComplianceSection() {
  const t = useTranslations('foundationDocuments.tax')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading as="h2" className="mt-2 max-w-2xl">
          {t('title')}
        </Heading>
        <p className="mt-4 max-w-2xl text-base/7 text-gray-600">
          {t.rich('body', {
            email: 'finance@ohc.network',
            link: (chunks) => (
              <a
                href="mailto:finance@ohc.network"
                className="font-medium text-[#12806a] underline underline-offset-2 hover:text-[#0f6b58]"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {taxDocs.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function OtherRegistrationsSection() {
  const t = useTranslations('foundationDocuments.other')

  return (
    <Container className="py-24">
      <Subheading>{t('eyebrow')}</Subheading>
      <Heading as="h2" className="mt-2 max-w-2xl">
        {t('title')}
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherDocs.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>
    </Container>
  )
}

function IsoCalloutSection() {
  const t = useTranslations('foundationDocuments.iso')

  return (
    <div className="bg-[#052e24] py-20 text-white">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-6 text-lime-300" />
              <Subheading dark>{t('eyebrow')}</Subheading>
            </div>
            <Heading as="h2" dark className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-4 text-base/7 text-white/70">{t('body')}</p>
          </div>
          <Link
            href="/foundation/iso"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
          >
            {t('cta')}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default async function FoundationDocumentsPage({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <RegistrationDetailsSection />
        <IncorporationSection />
        <TaxComplianceSection />
        <OtherRegistrationsSection />
        <IsoCalloutSection />
      </main>
      <Footer />
    </div>
  )
}
