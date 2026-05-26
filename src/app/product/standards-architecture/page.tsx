import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  ArrowRight,
  Braces,
  BrainCircuit,
  CloudCog,
  DatabaseZap,
  FileJson2,
  KeyRound,
  Languages,
  Network,
  ShieldCheck,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Standards & Architecture - CARE Platform',
  description:
    'CARE is designed around FHIR R5, SNOMED CT, LOINC, UCUM, ICD-10, ABDM alignment, open APIs, terminology services, and self-hostable deployment models.',
  keywords:
    'CARE standards architecture, FHIR R5, SNOMED CT, LOINC, UCUM, ICD-10, ABDM, open healthcare APIs, terminology services',
}

const standards = [
  {
    name: 'FHIR R5',
    description:
      'FHIR-aligned resources and APIs for modern health data exchange and workflow modeling.',
  },
  {
    name: 'SNOMED CT',
    description:
      'Clinical terminology direction for structured observations, findings, procedures, and concepts.',
  },
  {
    name: 'LOINC',
    description:
      'Laboratory and observation coding for diagnostic and measurement workflows.',
  },
  {
    name: 'UCUM',
    description:
      'Standard units for measurements, vitals, labs, and quantitative observations.',
  },
  {
    name: 'ICD-10',
    description:
      'Classification support for diagnosis grouping, reporting, and program analytics.',
  },
  {
    name: 'ABDM',
    description:
      'India digital health alignment through CARE Apps and integration patterns.',
  },
]

const architecture = [
  {
    title: 'Configurable forms',
    description:
      'Questionnaires and EMR forms map operational workflows to structured clinical data.',
    icon: FileJson2,
  },
  {
    title: 'Terminology bindings',
    description:
      'Bring-your-own terminology and shared terminology services can align local workflows with standards.',
    icon: Languages,
  },
  {
    title: 'Open APIs',
    description:
      'API-first architecture lets hospitals, governments, and partners integrate without closed vendor gates.',
    icon: Braces,
  },
  {
    title: 'Plugin extensibility',
    description:
      'Apps and integrations extend CARE for national rails, TeleICU, AI documentation, labs, pharmacy, billing, and analytics.',
    icon: Network,
  },
]

const deployment = [
  'Self-hosted',
  'Government cloud',
  'Hospital VPC',
  'Hybrid deployments',
  'Cloud-agnostic infrastructure',
  'Mobile-first workflows',
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>CARE standards and architecture</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            Standards-first by design, not integration as an afterthought.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            CARE is designed as a standards-first core: configurable forms,
            FHIR-aligned resources, terminology bindings, plugins, open APIs,
            sovereign hosting, and AI-ready structured data.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/product/care-core"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Explore CARE Core</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/about/security-compliance"
              className="w-full sm:w-auto"
            >
              Security & compliance
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StandardsSection() {
  return (
    <Container className="py-24">
      <Subheading>Standards layer</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        CARE speaks the language of modern health systems.
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {standards.map((standard) => (
          <div
            key={standard.name}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6"
          >
            <DatabaseZap className="size-6 text-[#12806a]" />
            <h3 className="mt-6 text-xl font-semibold text-gray-950">
              {standard.name}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">
              {standard.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function ArchitectureSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Subheading>Architecture principles</Subheading>
            <Heading as="h2" className="mt-2">
              Modular workflows on a shared clinical data foundation.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              CARE avoids treating interoperability as a later integration
              project. The platform uses structured resources, configurable
              forms, terminology, and APIs so deployments can adapt locally
              while preserving data reuse.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {architecture.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[#dfe6e2] bg-white p-6"
              >
                <item.icon className="size-6 text-[#12806a]" />
                <h3 className="mt-6 text-lg font-semibold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm/6 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function DeploymentSection() {
  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <Subheading>Sovereign deployment</Subheading>
          <Heading as="h2" className="mt-2">
            Health systems should be able to own their infrastructure and data.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            CARE is self-hostable and cloud-agnostic. Governments and
            institutions can run it in their own infrastructure, integrate with
            national systems, and maintain local control over data and
            operations.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {deployment.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#dfe6e2] bg-white p-5"
            >
              <CloudCog className="mb-4 size-5 text-[#12806a]" />
              <p className="text-sm/6 font-semibold text-gray-900">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function AISection() {
  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Subheading dark>AI-readiness</Subheading>
            <Heading as="h2" dark className="mt-2">
              AI works best when the underlying health record is structured,
              traceable, and interoperable.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">
              OHC frames AI as assistive and human-in-the-loop. CARE can support
              voice-native forms, documentation drafts, summarization, and
              document understanding because workflows are connected to
              structured data and audit trails.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'AI draft flags', icon: BrainCircuit },
              { title: 'Auditability', icon: ShieldCheck },
              { title: 'Role-based access', icon: KeyRound },
              { title: 'Structured clinical data', icon: DatabaseZap },
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

export default function StandardsArchitecture() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <StandardsSection />
        <ArchitectureSection />
        <DeploymentSection />
        <AISection />
      </main>
      <Footer />
    </div>
  )
}
