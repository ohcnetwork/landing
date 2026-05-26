import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  ArrowRight,
  BadgeCheck,
  GitBranch,
  Landmark,
  LockKeyhole,
  Network,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foundation - Mission and Stewardship',
  description:
    'Open Healthcare Network Foundation is the neutral steward of CARE and related open healthcare Digital Public Goods.',
  keywords:
    'Open Healthcare Network Foundation, open healthcare foundation, healthcare commons, CARE stewardship, digital public infrastructure',
}

const principles = [
  {
    title: 'Open by default',
    description:
      'MIT-licensed software, open standards, open APIs, and public contribution pathways.',
    icon: GitBranch,
  },
  {
    title: 'Neutral stewardship',
    description:
      'A shared home where governments, hospitals, vendors, NGOs, funders, and contributors can collaborate.',
    icon: Scale,
  },
  {
    title: 'Standards-first',
    description:
      'FHIR, SNOMED CT, LOINC, UCUM, ICD-10, ABDM alignment, terminology bindings, and interoperable APIs.',
    icon: BadgeCheck,
  },
  {
    title: 'Long-term trust',
    description:
      'Release discipline, security, documentation, quality assurance, and implementation ecosystem enablement.',
    icon: ShieldCheck,
  },
]

const stewardship = [
  'CARE Core and common healthcare primitives',
  'CARE Apps and implementation patterns',
  'Standards and terminology alignment',
  'Security, quality, and release processes',
  'Developer, clinician, and implementation communities',
  'Documentation, funding, and ecosystem sustainability',
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <div className="max-w-5xl">
            <Subheading>Open Healthcare Network Foundation</Subheading>
            <h1 className="mt-4 font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
              A neutral home for open healthcare infrastructure.
            </h1>
            <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              OHC Foundation exists to ensure that open healthcare digital
              public infrastructure has durable governance, accountable
              stewardship, release discipline, documentation, security, and a
              community that can outlast any single deployment.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/foundation/governance"
                className="w-full sm:w-auto"
              >
                Governance model
              </Button>
              <Button
                variant="secondary"
                href="/support"
                className="flex w-full items-center gap-2 sm:w-auto"
              >
                <span>Support the foundation</span>
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function MissionSection() {
  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Subheading>Mission</Subheading>
          <Heading as="h2" className="mt-2">
            Steward open, standards-based digital public infrastructure for
            healthcare.
          </Heading>
        </div>
        <div className="space-y-6 text-lg/8 text-gray-600">
          <p>
            The foundation maintains CARE and related open-source building
            blocks that help governments, hospitals, NGOs, and implementation
            partners deploy interoperable, self-hostable health systems without
            vendor lock-in.
          </p>
          <p>
            CARE is the flagship platform and proof point. The foundation&apos;s
            broader role is to protect the commons around it: governance,
            standards, releases, documentation, security, contributor pathways,
            and ecosystem participation.
          </p>
        </div>
      </div>
    </Container>
  )
}

function WhyFoundationSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>Why a foundation</Subheading>
          <Heading as="h2" className="mt-2">
            Public-good infrastructure needs an institution, not only a repo.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            Open healthcare systems must be trusted by governments, clinicians,
            hospitals, system integrators, and funders. That trust comes from
            visible governance, clear contribution rules, reliable releases,
            security processes, and a neutral home where adoption does not mean
            dependency on a single vendor.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <principle.icon className="size-6 text-[#12806a]" />
              <h3 className="mt-6 text-lg font-semibold text-gray-950">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function StewardshipSection() {
  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Subheading>What we steward</Subheading>
          <Heading as="h2" className="mt-2">
            A healthcare commons that can be owned locally and reused globally.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            OHC&apos;s work spans product, governance, and ecosystem layers.
            CARE Core provides the common operating layer. CARE Apps and
            deployment patterns adapt it to hospitals, public health programs,
            national rails, TeleICU, palliative care, and assistive AI
            documentation.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {stewardship.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#dfe6e2] bg-white p-5"
            >
              <Network className="mb-4 size-5 text-[#12806a]" />
              <p className="text-sm/6 font-semibold text-gray-900">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function InstitutionSection() {
  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Subheading dark>Institutional trust</Subheading>
            <Heading as="h2" dark className="mt-2">
              OHC Foundation is designed to separate stewardship from vendor
              control.
            </Heading>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Board oversight',
                text: 'Mission, fiduciary, legal, financial, and strategic stewardship.',
                icon: Landmark,
              },
              {
                title: 'Technical governance',
                text: 'Maintainers and technical committees guide architecture, releases, and contribution processes.',
                icon: Users,
              },
              {
                title: 'Security posture',
                text: 'Security reporting, access-control expectations, and accountable release practices.',
                icon: LockKeyhole,
              },
              {
                title: 'Open license',
                text: 'MIT-licensed code and open documentation patterns keep the commons reusable.',
                icon: ShieldCheck,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <item.icon className="size-6 text-lime-200" />
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm/6 text-white/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function About() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <MissionSection />
        <WhyFoundationSection />
        <StewardshipSection />
        <InstitutionSection />
      </main>
      <Footer />
    </div>
  )
}
