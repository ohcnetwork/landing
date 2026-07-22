import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
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

export const metadata: Metadata = {
  title: 'How to Fund OHC Foundation',
  description:
    'Send a direct grant, bank transfer, or donation to Open Healthcare Network Foundation. Account details, wire transfer instructions, and tax benefit information for Indian and international funders.',
  keywords:
    'fund OHC Foundation, donate open healthcare, bank transfer OHC, 80G tax deduction, healthcare foundation funding',
}

const bankDetails = [
  { label: 'Account name', value: 'Open Healthcare Network Foundation' },
  { label: 'Account number', value: '50200117363340' },
  { label: 'IFSC code', value: 'HDFC0001512' },
  { label: 'Bank', value: 'HDFC Bank' },
  { label: 'Branch', value: 'Kaloor Branch' },
  { label: 'Account type', value: 'Current Account' },
  { label: 'SWIFT / BIC', value: 'HDFCINBB' },
]

const orgDetails = [
  { label: 'Entity name', value: 'Open Healthcare Network Foundation' },
  { label: 'PAN', value: 'AAECO9546J' },
  { label: '80G certificate', value: 'AAECO9546JF20261' },
  { label: '12A certificate', value: 'AAECO9546JF20251' },
  { label: 'GST', value: '32AAECO9546J1Z5' },
  { label: 'CIN', value: 'U88100KL2025NPL098818' },
  {
    label: 'Registered address',
    value:
      '1st Floor, C M Complex, Kalavath Road, Palarivattom, Kochi, Ernakulam, Kerala – 682025',
  },
]

const whatYouFund = [
  {
    icon: Layers3,
    title: 'CARE Core',
    description:
      'Shared healthcare primitives, APIs, workflows, FHIR-aligned data models, and platform reliability that every deployment depends on.',
  },
  {
    icon: ShieldCheck,
    title: 'Security and LTS',
    description:
      'Release discipline, quality assurance, vulnerability response, auditability, and long-term support across active deployments.',
  },
  {
    icon: FileText,
    title: 'Documentation and guides',
    description:
      'Implementation guides, deployment packs, technical references, training material, and reusable playbooks for new deployments.',
  },
  {
    icon: Users,
    title: 'Implementation ecosystem',
    description:
      'System integrator enablement, plugin compatibility, contribution pathways, and localization support across languages and regions.',
  },
  {
    icon: Sparkles,
    title: 'Assistive AI for health',
    description:
      'Human-in-the-loop documentation, voice-native forms, summarization, and safe workflow support for clinicians and staff.',
  },
  {
    icon: Globe2,
    title: 'South-to-South reuse',
    description:
      'Deployment patterns and country-ready infrastructure that can be adapted beyond one state or program.',
  },
]

const sponsorTiers = [
  {
    title: 'Visionary Sponsor',
    description:
      'Major philanthropic or institutional support for stewarding open healthcare digital public infrastructure at scale.',
    note: 'Contact us to discuss scope and structure.',
  },
  {
    title: 'Foundation Member',
    description:
      'Annual membership for companies, healthcare providers, implementation partners, and ecosystem organizations.',
    note: 'Includes governance participation rights.',
  },
  {
    title: 'Program Sponsor',
    description:
      'Targeted support for CARE Core, security, AI documentation, palliative care, TeleICU, or deployment packs.',
    note: 'Defined scope with regular reporting.',
  },
  {
    title: 'Individual Supporter',
    description:
      'One-time or recurring support from individuals who want to back open healthcare infrastructure and the OHC mission.',
    note: '80G tax deduction eligible for Indian donors.',
  },
]

const taxBenefits = [
  {
    title: '80G deduction',
    description:
      'Indian resident donors can claim deduction on the donated amount under Section 80G of the Income Tax Act, 1961.',
  },
  {
    title: 'Donation receipts',
    description:
      'Official receipts for all donations are issued by the foundation. Contact finance@ohc.network after transferring funds.',
  },
  {
    title: 'FCRA status',
    description:
      'For international wire transfers, contact us to confirm current FCRA status and applicable compliance requirements.',
  },
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>Open Healthcare Network Foundation</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            How to fund us.
          </h1>
          <p className="mt-8 max-w-3xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Send a direct bank transfer or international wire to OHC Foundation.
            Donations support open healthcare infrastructure used by hospitals,
            public health programs, and governments.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              href="mailto:finance@ohc.network"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Contact finance team</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/foundation/documents"
              className="w-full sm:w-auto"
            >
              View legal documents
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function BankTransferSection() {
  return (
    <Container className="py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Bank Transfer */}
        <div>
          <Subheading>Bank transfer</Subheading>
          <Heading as="h2" className="mt-2">
            NEFT / RTGS / IMPS
          </Heading>
          <p className="mt-4 text-base/7 text-gray-600">
            Transfer directly to the foundation&apos;s current account. Use your
            organisation name or donor name as the reference.
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-[#dfe6e2] bg-white">
            {bankDetails.map((item, index) => (
              <div
                key={item.label}
                className={`grid grid-cols-[1fr_1.4fr] items-center gap-4 px-5 py-4 ${
                  index !== 0 ? 'border-t border-[#dfe6e2]' : ''
                }`}
              >
                <p className="text-sm/6 text-gray-500">{item.label}</p>
                <div className="flex items-center">
                  <p className="font-mono text-sm/6 font-semibold text-gray-950">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs/5 text-gray-400">
            * Contact{' '}
            <a
              href="mailto:finance@ohc.network"
              className="underline hover:text-gray-600"
            >
              finance@ohc.network
            </a>{' '}
            after transfer to receive a donation receipt.
          </p>
        </div>

        {/* International */}
        <div>
          <Subheading>International wire</Subheading>
          <Heading as="h2" className="mt-2">
            From outside India
          </Heading>
          <p className="mt-4 text-base/7 text-gray-600">
            For international donors and institutional funders, please contact
            the finance team before initiating a transfer. We will confirm
            current FCRA status and provide the correct wire details.
          </p>
          <div className="mt-6">
            <a
              href="mailto:finance@ohc.network"
              className="inline-flex items-center gap-2 rounded-lg border border-[#dfe6e2] bg-white px-5 py-3 text-sm font-semibold text-gray-950 transition hover:border-[#12806a] hover:text-[#12806a]"
            >
              <HeartHandshake className="size-4 text-[#12806a]" />
              finance@ohc.network
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

function OrgDetailsSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>Foundation details</Subheading>
          <Heading as="h2" className="mt-2">
            Payee and compliance identifiers.
          </Heading>
          <p className="mt-4 text-base/7 text-gray-600">
            Use these for grant applications, wire transfers, donation forms, or
            when your compliance team needs to verify the receiving entity.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl border border-[#dfe6e2] bg-white">
          {orgDetails.map((item, index) => (
            <div
              key={item.label}
              className={`grid grid-cols-1 gap-2 px-6 py-4 sm:grid-cols-[0.45fr_1fr] sm:gap-8 ${
                index !== 0 ? 'border-t border-[#dfe6e2]' : ''
              }`}
            >
              <p className="text-sm/6 font-medium text-gray-500">
                {item.label}
              </p>
              <p className="font-mono text-sm/6 font-semibold text-gray-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="/foundation/documents"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#12806a] hover:text-[#0f6b58]"
          >
            <FileText className="size-4" />
            View all foundation documents
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </Container>
    </div>
  )
}

function TaxBenefitsSection() {
  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Subheading>Tax benefits</Subheading>
          <Heading as="h2" className="mt-2">
            80G deduction for Indian donors.
          </Heading>
          <p className="mt-6 text-base/7 text-gray-600">
            OHC Foundation holds a provisional 80G registration. Indian resident
            individuals and companies can claim deduction on donations
            under Section 80G of the Income Tax Act, 1961.
          </p>
          <div className="mt-8">
            <a
              href="mailto:finance@ohc.network"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#12806a] hover:text-[#0f6b58]"
            >
              Request a donation receipt
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {taxBenefits.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-[#dfe6e2] bg-white p-6"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#12806a]" />
              <div>
                <h3 className="text-sm font-semibold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm/6 text-gray-600">
                  {item.description}
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
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>What your funding supports</Subheading>
          <Heading as="h2" className="mt-2">
            The institutional work behind every deployment.
          </Heading>
          <p className="mt-4 max-w-3xl text-base/7 text-gray-600">
            Funding OHC Foundation is not funding one hospital or one
            deployment. It funds the shared platform, governance, release
            practices, documentation, security, and implementation ecosystem
            that make many deployments safer and less expensive to repeat.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatYouFund.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#dfe6e2] bg-white p-6"
            >
              <item.icon className="size-6 text-[#12806a]" />
              <h3 className="mt-6 text-base font-semibold text-gray-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function SponsorTiersSection() {
  return (
    <Container className="py-24">
      <div className="max-w-4xl">
        <Subheading>Funding structures</Subheading>
        <Heading as="h2" className="mt-2">
          Flexible arrangements for any funder type.
        </Heading>
        <p className="mt-4 text-base/7 text-gray-600">
          Funding can be structured as a one-time grant, annual sponsorship,
          institutional membership, or program-targeted support. Contact the
          finance team to discuss the arrangement that fits your organisation.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sponsorTiers.map((tier) => (
          <div
            key={tier.title}
            className="flex flex-col rounded-xl border border-[#dfe6e2] bg-white p-6"
          >
            <BadgeIndianRupee className="size-6 text-[#12806a]" />
            <h3 className="mt-6 text-base font-semibold text-gray-950">
              {tier.title}
            </h3>
            <p className="mt-3 grow text-sm/6 text-gray-600">
              {tier.description}
            </p>
            <p className="mt-4 text-xs font-medium text-[#12806a]">
              {tier.note}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function ContactSection() {
  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Subheading dark>Get in touch</Subheading>
            <Heading as="h2" dark className="mt-2">
              We&apos;ll guide you through the process.
            </Heading>
            <p className="mt-6 text-base/7 text-white/70">
              Whether you&apos;re sending a small individual contribution or
              structuring a large institutional grant, the finance team is
              available to help with receipts, documentation, compliance, and
              reporting.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:finance@ohc.network"
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <HeartHandshake className="size-6 text-lime-200" />
              <h3 className="mt-6 text-base font-semibold text-white">
                Finance team
              </h3>
              <p className="mt-2 text-sm/6 text-white/65">
                Receipts, wire instructions, grant documentation.
              </p>
              <p className="mt-3 text-sm font-semibold text-lime-200">
                finance@ohc.network
              </p>
            </a>
            <a
              href="/foundation/documents"
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <Building2 className="size-6 text-lime-200" />
              <h3 className="mt-6 text-base font-semibold text-white">
                Foundation documents
              </h3>
              <p className="mt-2 text-sm/6 text-white/65">
                COI, MOA, PAN, 80G, 12A, GST, and other legal certificates.
              </p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-lime-200">
                View all documents
                <ExternalLink className="size-3.5" />
              </p>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function HowToFund() {
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
