import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  ArrowRight,
  FileText,
  Fingerprint,
  HeartPulse,
  IdCard,
  Landmark,
  Link2,
  Lock,
  Network,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ABDM - CARE Platform',
  description:
    "CARE aligns with India's Ayushman Bharat Digital Mission (ABDM) through ABHA-based identity, health record linking, consent-driven data sharing, and standards-first interoperability.",
  keywords:
    'ABDM, Ayushman Bharat Digital Mission, ABHA, health ID, HFR, HPR, consent manager, FHIR, digital health India, CARE ABDM',
}

const buildingBlocks = [
  {
    name: 'ABHA (Health ID)',
    description:
      'Ayushman Bharat Health Account gives patients a portable, unique health identity to link and access records across facilities.',
    icon: IdCard,
  },
  {
    name: 'Health Facility Registry',
    description:
      'Standardized registration of hospitals and clinics so facilities are discoverable within the national digital health ecosystem.',
    icon: Landmark,
  },
  {
    name: 'Healthcare Professionals Registry',
    description:
      'A verified directory of clinicians and health workers that supports trusted, attributable care delivery.',
    icon: Fingerprint,
  },
  {
    name: 'Consent Manager',
    description:
      'Patient-controlled consent flows govern how longitudinal health records are shared between providers.',
    icon: ShieldCheck,
  },
]

const capabilities = [
  {
    title: 'ABHA-based patient identity',
    description:
      'Link patient encounters in CARE to ABHA numbers and addresses for a portable, longitudinal health record.',
    icon: IdCard,
  },
  {
    title: 'Record linking & discovery',
    description:
      'Support health information exchange so records created in CARE can be discovered and linked across the ecosystem.',
    icon: Link2,
  },
  {
    title: 'Consent-driven sharing',
    description:
      'Data leaves CARE only through explicit, auditable patient consent, keeping patients in control of their records.',
    icon: Lock,
  },
  {
    title: 'FHIR-aligned exchange',
    description:
      'ABDM-compliant FHIR resources let CARE package and share clinical data using national interoperability standards.',
    icon: Workflow,
  },
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>Ayushman Bharat Digital Mission</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            CARE, aligned with India&apos;s digital health rails.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            The Ayushman Bharat Digital Mission (ABDM) builds a national digital
            health ecosystem for India. CARE aligns with ABDM through ABHA-based
            identity, health record linking, and consent-driven, standards-first
            data exchange.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/product/standards-architecture"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Standards &amp; Architecture</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/contact"
              className="w-full sm:w-auto"
            >
              Talk to our team
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function AboutSection() {
  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Subheading>What is ABDM?</Subheading>
          <Heading as="h2" className="mt-2">
            A national ecosystem for connected, patient-owned health records.
          </Heading>
        </div>
        <div>
          <p className="text-lg/7 text-gray-600">
            The Ayushman Bharat Digital Mission is India&apos;s initiative to
            create seamless online platforms for interoperable and standardized
            digital health services. It gives every citizen a health identity,
            connects hospitals and clinicians through national registries, and
            lets patients securely access and share their longitudinal health
            records with consent.
          </p>
          <p className="mt-6 text-lg/7 text-gray-600">
            CARE is built standards-first, so aligning with ABDM is a natural
            extension rather than a bolt-on integration. Facilities running CARE
            can participate in the ecosystem while retaining sovereign control of
            their data and infrastructure.
          </p>
        </div>
      </div>
    </Container>
  )
}

function BuildingBlocksSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <Subheading>ABDM building blocks</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl">
          The core registries and services that power the ecosystem.
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {buildingBlocks.map((block) => (
            <div
              key={block.name}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <block.icon className="size-6 text-[#12806a]" />
              <h3 className="mt-6 text-xl font-semibold text-gray-950">
                {block.name}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function CapabilitiesSection() {
  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Subheading>How CARE aligns</Subheading>
          <Heading as="h2" className="mt-2">
            ABDM-ready workflows on a shared clinical data foundation.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            CARE connects operational workflows to structured, FHIR-aligned
            clinical data. That foundation lets deployments participate in ABDM
            with patient identity, record linking, and consent-based exchange.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <item.icon className="size-6 text-[#12806a]" />
              <h3 className="mt-6 text-lg font-semibold text-gray-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function CtaSection() {
  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Subheading dark>Patient-first & sovereign</Subheading>
            <Heading as="h2" dark className="mt-2">
              National interoperability without giving up control of your data.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">
              CARE is self-hostable and cloud-agnostic. Governments and
              institutions can align with ABDM, exchange data through consent,
              and still own their infrastructure and health records.
            </p>
            <div className="mt-8">
              <Button href="/contact" className="flex items-center gap-2">
                <span>Talk to our team</span>
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Consent-driven exchange', icon: ShieldCheck },
              { title: 'Portable health records', icon: HeartPulse },
              { title: 'Open, standard APIs', icon: Network },
              { title: 'FHIR-aligned data', icon: FileText },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <item.icon className="size-6 text-lime-200" />
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function ABDM() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <AboutSection />
        <BuildingBlocksSection />
        <CapabilitiesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
