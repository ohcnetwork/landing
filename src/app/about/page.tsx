import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About OHC — Mission, Principles, Governance',
  description:
    'OHC stewards open, standards‑based infrastructure so countries can scale care without lock‑in.',
  keywords:
    'digital public goods healthcare, sovereign data, MIT license healthcare, interoperability',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Digital Public Goods for open, sovereign health systems.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            OHC stewards open, standards‑based infrastructure so countries can
            scale care without lock‑in.
          </p>
        </div>
      </Container>
    </div>
  )
}

function MissionSection() {
  return (
    <Container className="py-24">
      <Subheading>Mission</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Make high‑quality healthcare digitally accessible
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        By building <strong>open, interoperable</strong> infrastructure as{' '}
        <strong>Digital Public Goods</strong>—so countries can scale care
        without lock‑in.
      </p>
    </Container>
  )
}

function PrinciplesSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Principles</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl">
          Core principles that guide our work
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <BentoCard
            eyebrow="Open by design"
            title="MIT license & community model"
            description="Open source by default with community-driven development and transparent governance."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900">MIT</div>
                  <div className="mt-2 text-sm text-blue-700">Open Source</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Standards first"
            title="FHIR R5, SNOMED, LOINC, UCUM, ICD‑10"
            description="Built on global healthcare standards for interoperability and data exchange."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-900">FHIR</div>
                  <div className="mt-2 text-sm text-green-700">Standards</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-b-4xl lg:col-span-1 lg:rounded-tr-4xl"
          />
          <BentoCard
            eyebrow="Frontline‑first"
            title="UX drives adoption"
            description="Mobile-first design with templates, autocomplete, and voice-to-text for frontline healthcare workers."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-900">UX</div>
                  <div className="mt-2 text-sm text-purple-700">First</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-bl-4xl"
          />
          <BentoCard
            eyebrow="Sovereign data"
            title="Zero license fees"
            description="You own code and data with complete control over your infrastructure and data sovereignty."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-900">Own</div>
                  <div className="mt-2 text-sm text-orange-700">Your Data</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-b-4xl lg:col-span-1 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function GovernanceSection() {
  return (
    <Container className="py-24">
      <Subheading>Governance</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Community-driven governance with transparent decision making
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        OHC is stewarded by <strong>14+ core maintainers</strong> and a global
        community of <strong>1,040+ contributors</strong> with transparent
        governance and decision-making processes.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-blue-900">
            Core Maintainers
          </h3>
          <p className="text-blue-700">
            14+ experienced maintainers guide technical direction and
            architecture decisions
          </p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-green-900">
            Community Contributors
          </h3>
          <p className="text-green-700">
            1,040+ contributors from around the world building and improving
            CARE
          </p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-purple-900">
            Transparent Process
          </h3>
          <p className="text-purple-700">
            Open RFCs, community discussions, and transparent decision-making
            processes
          </p>
        </div>
      </div>
    </Container>
  )
}

export default function About() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <MissionSection />
        <PrinciplesSection />
        <GovernanceSection />
      </main>
      <Footer />
    </div>
  )
}
