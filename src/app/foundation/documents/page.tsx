import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { ArrowRight, ExternalLink, FileText, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Foundation Documents - Open Healthcare Network Foundation',
  description:
    'Legal registration, compliance, and certification documents for Open Healthcare Network Foundation, including COI, MOA, AOA, PAN, GST, 80G, 12A, and ISO certificates.',
  keywords:
    'OHC Foundation documents, certificate of incorporation, MOA, AOA, PAN, GST, 80G, 12A, Section 8, MSME, Darpan',
}

const registrationDetails = [
  { label: 'Entity name', value: 'Open Healthcare Network Foundation' },
  { label: 'Entity type', value: 'Section 8 Company (Non-Profit)' },
  { label: 'Date of incorporation', value: '2 December 2025' },
  { label: 'Corporate Identity Number (CIN)', value: 'U88100KL2025NPL098818' },
  {
    label: 'Registered address',
    value:
      '1st Floor, C M Complex, Kalavath Road, Palarivattom, Kochi, Ernakulam, Kerala, India – 682025',
  },
  { label: '80G Certificate', value: 'AAECO9546JF20261' },
  { label: '12A Certificate', value: 'AAECO9546JF20251' },
  { label: 'GST Number', value: '32AAECO9546J1Z5' },
  { label: 'PAN Number', value: 'AAECO9546J' },
]

type Document = {
  title: string
  description: string
  file: string
}

const incorporationDocs: Document[] = [
  {
    title: 'Certificate of Incorporation',
    description:
      'Official certificate issued by the Ministry of Corporate Affairs confirming registration as a Section 8 company.',
    file: 'COI OHC Foundation.pdf',
  },
  {
    title: 'Memorandum of Association (MOA)',
    description:
      "Defines the foundation's objects, scope, purpose, and the limits within which it may operate.",
    file: 'MOA.pdf',
  },
  {
    title: 'Articles of Association (AOA)',
    description:
      "Governs the foundation's internal management, meeting rules, officer roles, and operational procedures.",
    file: 'AOA.pdf',
  },
  {
    title: 'Section 8 License',
    description:
      'License granted under Section 8 of the Companies Act, 2013, confirming non-profit status and purpose.',
    file: 'Section 8 License.pdf',
  },
]

const taxDocs: Document[] = [
  {
    title: 'PAN Card',
    description:
      'Permanent Account Number issued by the Income Tax Department of India.',
    file: 'PAN OHC.pdf',
  },
  {
    title: 'TAN Certificate',
    description:
      'Tax Deduction and Collection Account Number for compliance with TDS obligations.',
    file: 'TAN OHC.pdf',
  },
  {
    title: 'GST Certificate',
    description:
      'Goods and Services Tax registration certificate issued by the GST Council.',
    file: 'GST Certificate.pdf',
  },
  {
    title: 'LUT (GST) 2026–27',
    description:
      'Letter of Undertaking filed under GST for zero-rated supply of services without payment of integrated tax.',
    file: 'LUT GST 2026-27.pdf',
  },
  {
    title: '12A Provisional Registration (Form 10AC)',
    description:
      'Income tax exemption registration for non-profit organisations under Section 12A of the Income Tax Act, 1961.',
    file: 'Form 10AC 12A registration.pdf',
  },
  {
    title: '80G Provisional Registration (Form 10AC)',
    description:
      'Certificate enabling donors to claim tax deductions on contributions to the foundation under Section 80G.',
    file: 'Form 10AC 80G registration.pdf',
  },
  {
    title: 'MSME Certificate',
    description:
      'Udyam registration under the Micro, Small and Medium Enterprises Development Act.',
    file: 'MSME Certificate.pdf',
  },
]

const otherDocs: Document[] = [
  {
    title: 'NGO Darpan Registration',
    description:
      'Registration with the NGO Darpan portal, a NITI Aayog initiative for transparency in non-profit organisations.',
    file: 'Darpan.pdf',
  },
  {
    title: 'Spree Registration',
    description: 'Spree portal registration document.',
    file: 'Spree Registration.pdf',
  },
]

function docUrl(filename: string) {
  return `/docs/${encodeURIComponent(filename)}`
}

function DocumentCard({ doc }: { doc: Document }) {
  return (
    <div className="flex flex-col rounded-lg border border-[#dfe6e2] bg-white p-6">
      <FileText className="size-6 shrink-0 text-[#12806a]" />
      <h3 className="mt-4 text-base font-semibold text-gray-950">
        {doc.title}
      </h3>
      <p className="mt-2 grow text-sm/6 text-gray-600">{doc.description}</p>
      <a
        href={docUrl(doc.file)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#12806a] hover:text-[#0f6b58]"
      >
        View document
        <ExternalLink className="size-3.5" />
      </a>
    </div>
  )
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <div className="max-w-4xl">
            <Subheading>Open Healthcare Network Foundation</Subheading>
            <h1 className="mt-4 font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
              Foundation documents.
            </h1>
            <p className="mt-8 max-w-3xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Legal, compliance, and certification documents for Open Healthcare
              Network Foundation — available for funders, partners, and
              implementation organisations.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function RegistrationDetailsSection() {
  return (
    <Container className="pt-24 pb-0">
      <div className="max-w-4xl">
        <Subheading>Registration details</Subheading>
        <Heading as="h2" className="mt-2">
          Key identifiers at a glance.
        </Heading>
      </div>
      <div className="mt-12 overflow-hidden rounded-lg border border-[#dfe6e2] bg-white">
        {registrationDetails.map((item, index) => (
          <div
            key={item.label}
            className={`grid grid-cols-1 gap-2 p-5 sm:grid-cols-[0.5fr_1fr] sm:gap-8 ${
              index !== 0 ? 'border-t border-[#dfe6e2]' : ''
            }`}
          >
            <p className="text-sm/6 font-medium text-gray-950/60">
              {item.label}
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
  return (
    <Container className="py-24">
      <Subheading>Incorporation &amp; constitution</Subheading>
      <Heading as="h2" className="mt-2 max-w-2xl">
        Foundational legal documents.
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {incorporationDocs.map((doc) => (
          <DocumentCard key={doc.title} doc={doc} />
        ))}
      </div>
    </Container>
  )
}

function TaxComplianceSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <Subheading>Tax &amp; compliance</Subheading>
        <Heading as="h2" className="mt-2 max-w-2xl">
          Tax registration and statutory compliance.
        </Heading>
        <p className="mt-4 max-w-2xl text-base/7 text-gray-600">
          Donations to OHC Foundation are eligible for 80G tax deduction. For
          donation receipts, contact{' '}
          <a
            href="mailto:finance@ohc.network"
            className="font-medium text-[#12806a] underline underline-offset-2 hover:text-[#0f6b58]"
          >
            finance@ohc.network
          </a>
          .
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {taxDocs.map((doc) => (
            <DocumentCard key={doc.title} doc={doc} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function OtherRegistrationsSection() {
  return (
    <Container className="py-24">
      <Subheading>Other registrations</Subheading>
      <Heading as="h2" className="mt-2 max-w-2xl">
        Portal and programme registrations.
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherDocs.map((doc) => (
          <DocumentCard key={doc.title} doc={doc} />
        ))}
      </div>
    </Container>
  )
}

function IsoCalloutSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-6 text-lime-300" />
              <Subheading dark>ISO Certifications</Subheading>
            </div>
            <Heading as="h2" dark className="mt-3">
              Certified for security and health software safety.
            </Heading>
            <p className="mt-4 text-base/7 text-white/70">
              OHC Foundation holds ISO 27001:2022, ISO 82304-1:2016, and ISO
              82304-2:2021 certifications covering information security
              management and health software safety requirements.
            </p>
          </div>
          <Link
            href="/foundation/iso"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
          >
            View ISO certifications
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default function FoundationDocumentsPage() {
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
