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
  CheckCircle2,
  ExternalLink,
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
  const t = await getTranslations({
    locale,
    namespace: 'supportHowToFund.meta',
  })

  return pageMetadata({
    locale,
    path: '/support/how-to-fund',
    title: t('title'),
    description: t('description'),
    keywords:
      'fund OHC Foundation, donate open healthcare, bank transfer OHC, 80G tax deduction, healthcare foundation funding',
  })
}

const financeEmail = 'finance@ohc.network'

// Bank details and legal identifiers stay in their official form; only the
// labels are translated.
const bankDetails = [
  { id: 'accountName', value: 'Open Healthcare Network Foundation' },
  { id: 'accountNumber', value: '50200117363340' },
  { id: 'ifsc', value: 'HDFC0001512' },
  { id: 'bank', value: 'HDFC Bank' },
  { id: 'branch', value: 'Kaloor Branch' },
  { id: 'accountType', value: 'Current Account' },
  { id: 'swift', value: 'HDFCINBB' },
] as const

const orgDetails = [
  { id: 'entityName', value: 'Open Healthcare Network Foundation' },
  { id: 'pan', value: 'AAECO9546J' },
  { id: 'certificate80g', value: 'AAECO9546JF20261' },
  { id: 'certificate12a', value: 'AAECO9546JF20251' },
  { id: 'gst', value: '32AAECO9546J1Z5' },
  { id: 'cin', value: 'U88100KL2025NPL098818' },
  {
    id: 'address',
    value:
      '1st Floor, C M Complex, Kalavath Road, Palarivattom, Kochi, Ernakulam, Kerala – 682025',
  },
] as const

const whatYouFund = [
  { id: 'careCore', icon: Layers3 },
  { id: 'security', icon: ShieldCheck },
  { id: 'documentation', icon: FileText },
  { id: 'ecosystem', icon: Users },
  { id: 'ai', icon: Sparkles },
  { id: 'southToSouth', icon: Globe2 },
] as const

const sponsorTiers = ['visionary', 'member', 'program', 'individual'] as const

const taxBenefits = ['deduction', 'receipts', 'fcra'] as const

function Hero() {
  const t = useTranslations('supportHowToFund.hero')

  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>Open Healthcare Network Foundation</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            {t('title')}
          </h1>
          <p className="mt-8 max-w-3xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {t('body')}
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              href={`mailto:${financeEmail}`}
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('contactFinance')}</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/foundation/documents"
              className="w-full sm:w-auto"
            >
              {t('legalDocuments')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function BankTransferSection() {
  const t = useTranslations('supportHowToFund')

  return (
    <Container className="py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Bank Transfer */}
        <div>
          <Subheading>{t('bankTransfer.eyebrow')}</Subheading>
          {/* Payment system names stay in English. */}
          <Heading as="h2" className="mt-2">
            NEFT / RTGS / IMPS
          </Heading>
          <p className="mt-4 text-base/7 text-gray-600">
            {t('bankTransfer.body')}
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-[#dfe6e2] bg-white">
            {bankDetails.map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-[1fr_1.4fr] items-center gap-4 px-5 py-4 ${
                  index !== 0 ? 'border-t border-[#dfe6e2]' : ''
                }`}
              >
                <p className="text-sm/6 text-gray-500">
                  {t(`bankTransfer.labels.${item.id}`)}
                </p>
                <div className="flex items-center">
                  <p className="font-mono text-sm/6 font-semibold text-gray-950">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs/5 text-gray-400">
            {t.rich('bankTransfer.receiptNote', {
              email: financeEmail,
              link: (chunks) => (
                <a
                  href={`mailto:${financeEmail}`}
                  className="underline hover:text-gray-600"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>

        {/* International */}
        <div>
          <Subheading>{t('international.eyebrow')}</Subheading>
          <Heading as="h2" className="mt-2">
            {t('international.title')}
          </Heading>
          <p className="mt-4 text-base/7 text-gray-600">
            {t('international.body')}
          </p>
          <div className="mt-6">
            <a
              href={`mailto:${financeEmail}`}
              className="inline-flex items-center gap-2 rounded-lg border border-[#dfe6e2] bg-white px-5 py-3 text-sm font-semibold text-gray-950 transition hover:border-[#12806a] hover:text-[#12806a]"
            >
              <HeartHandshake className="size-4 text-[#12806a]" />
              {financeEmail}
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

function OrgDetailsSection() {
  const t = useTranslations('supportHowToFund.orgDetails')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-2">
            {t('title')}
          </Heading>
          <p className="mt-4 text-base/7 text-gray-600">{t('body')}</p>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl border border-[#dfe6e2] bg-white">
          {orgDetails.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 gap-2 px-6 py-4 sm:grid-cols-[0.45fr_1fr] sm:gap-8 ${
                index !== 0 ? 'border-t border-[#dfe6e2]' : ''
              }`}
            >
              <p className="text-sm/6 font-medium text-gray-500">
                {t(`labels.${item.id}`)}
              </p>
              <p className="font-mono text-sm/6 font-semibold text-gray-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/foundation/documents"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#12806a] hover:text-[#0f6b58]"
          >
            <FileText className="size-4" />
            {t('viewDocuments')}
            <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </Container>
    </div>
  )
}

function TaxBenefitsSection() {
  const t = useTranslations('supportHowToFund.taxBenefits')

  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-2">
            {t('title')}
          </Heading>
          <p className="mt-6 text-base/7 text-gray-600">{t('body')}</p>
          <div className="mt-8">
            <a
              href={`mailto:${financeEmail}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#12806a] hover:text-[#0f6b58]"
            >
              {t('requestReceipt')}
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {taxBenefits.map((id) => (
            <div
              key={id}
              className="flex gap-4 rounded-xl border border-[#dfe6e2] bg-white p-6"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#12806a]" />
              <div>
                <h3 className="text-sm font-semibold text-gray-950">
                  {t(`items.${id}.title`)}
                </h3>
                <p className="mt-1.5 text-sm/6 text-gray-600">
                  {t(`items.${id}.description`, { email: financeEmail })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function WhatYouFundSection() {
  const t = useTranslations('supportHowToFund.whatYouFund')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-2">
            {t('title')}
          </Heading>
          <p className="mt-4 max-w-3xl text-base/7 text-gray-600">
            {t('body')}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatYouFund.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-[#dfe6e2] bg-white p-6"
            >
              <item.icon className="size-6 text-[#12806a]" />
              <h3 className="mt-6 text-base font-semibold text-gray-950">
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

function SponsorTiersSection() {
  const t = useTranslations('supportHowToFund.tiers')

  return (
    <Container className="py-24">
      <div className="max-w-4xl">
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading as="h2" className="mt-2">
          {t('title')}
        </Heading>
        <p className="mt-4 text-base/7 text-gray-600">{t('body')}</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sponsorTiers.map((id) => (
          <div
            key={id}
            className="flex flex-col rounded-xl border border-[#dfe6e2] bg-white p-6"
          >
            <BadgeIndianRupee className="size-6 text-[#12806a]" />
            <h3 className="mt-6 text-base font-semibold text-gray-950">
              {t(`items.${id}.title`)}
            </h3>
            <p className="mt-3 grow text-sm/6 text-gray-600">
              {t(`items.${id}.description`)}
            </p>
            <p className="mt-4 text-xs font-medium text-[#12806a]">
              {t(`items.${id}.note`)}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function ContactSection() {
  const t = useTranslations('supportHowToFund.contact')

  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-2">
              {t('title')}
            </Heading>
            <p className="mt-6 text-base/7 text-white/70">{t('body')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${financeEmail}`}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <HeartHandshake className="size-6 text-lime-200" />
              <h3 className="mt-6 text-base font-semibold text-white">
                {t('finance')}
              </h3>
              <p className="mt-2 text-sm/6 text-white/65">{t('financeText')}</p>
              <p className="mt-3 text-sm font-semibold text-lime-200">
                {financeEmail}
              </p>
            </a>
            <Link
              href="/foundation/documents"
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <Building2 className="size-6 text-lime-200" />
              <h3 className="mt-6 text-base font-semibold text-white">
                {t('documents')}
              </h3>
              <p className="mt-2 text-sm/6 text-white/65">
                {t('documentsText')}
              </p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-lime-200">
                {t('viewDocuments')}
                <ExternalLink className="size-3.5" />
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default async function HowToFund({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <BankTransferSection />
        <OrgDetailsSection />
        <TaxBenefitsSection />
        <WhatYouFundSection />
        <SponsorTiersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
