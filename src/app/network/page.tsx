import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  ArrowRight,
  Building2,
  Code2,
  GitBranch,
  Globe2,
  HeartHandshake,
  Hospital,
  Landmark,
  Stethoscope,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Network - OHC Ecosystem',
  description:
    'The OHC ecosystem brings together governments, hospitals, implementation partners, clinicians, developers, funders, and standards collaborators.',
  keywords:
    'OHC ecosystem, open healthcare network, CARE contributors, healthcare implementation partners, clinical community',
}

const ecosystem = [
  {
    title: 'Governments',
    description:
      'Deploy open, standards-based infrastructure with local ownership and long-term public-sector control.',
    icon: Landmark,
  },
  {
    title: 'Hospitals',
    description:
      'Adopt practical HMIS and EMR workflows without license lock-in.',
    icon: Hospital,
  },
  {
    title: 'Implementation partners',
    description:
      'Localize, integrate, train, support, and contribute back to the shared core.',
    icon: Building2,
  },
  {
    title: 'Clinicians',
    description:
      'Shape clinical workflows, forms, terminology, safety, and assistive AI behavior.',
    icon: Stethoscope,
  },
  {
    title: 'Developers',
    description:
      'Maintain open-source healthcare infrastructure used in real care settings.',
    icon: Code2,
  },
  {
    title: 'Funders',
    description:
      'Sustain the public-good infrastructure, release discipline, documentation, and ecosystem.',
    icon: HeartHandshake,
  },
]

const milestones = [
  {
    title: 'Pandemic response roots',
    text: 'CARE began as open-source infrastructure for health system coordination during the COVID-19 response.',
  },
  {
    title: 'Digital Public Good verification',
    text: 'CARE is listed in the Digital Public Goods registry as Care | Open Healthcare Network with MIT license.',
  },
  {
    title: 'Critical care and TeleICU',
    text: 'CARE evolved to support hub-and-spoke critical care workflows and TeleICU integrations.',
  },
  {
    title: 'HMIS and palliative care',
    text: 'The platform now supports broader hospital, community, and home-based care workflows.',
  },
  {
    title: 'Foundation stewardship',
    text: 'OHC Foundation provides the neutral institutional home for governance, quality, security, documentation, and ecosystem enablement.',
  },
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>The OHC Network</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            Open infrastructure only works when built together.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            OHC is a network of governments, hospitals, implementers,
            clinicians, developers, standards collaborators, and funders
            co-building around CARE Core and related open healthcare Digital
            Public Goods.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/ecosystem/implementation-partners"
              className="w-full sm:w-auto"
            >
              Implementation partners
            </Button>
            <Button
              variant="secondary"
              href="/developers"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Developer community</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function EcosystemSection() {
  return (
    <Container className="py-24">
      <div className="max-w-4xl">
        <Subheading>Ecosystem</Subheading>
        <Heading as="h2" className="mt-2">
          A shared core, many roles.
        </Heading>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ecosystem.map((item) => (
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
    </Container>
  )
}

function JourneySection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Subheading>Journey</Subheading>
            <Heading as="h2" className="mt-2">
              From crisis response to foundation-stewarded healthcare commons.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              The network story should show evolution without freezing OHC in
              its pandemic origin. The durable identity is open healthcare
              infrastructure under neutral stewardship.
            </p>
          </div>
          <div className="space-y-4">
            {milestones.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[#dfe6e2] bg-white p-6"
              >
                <GitBranch className="size-5 text-[#12806a]" />
                <h3 className="mt-4 text-lg font-semibold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm/6 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function CommonsSection() {
  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Subheading dark>Commons model</Subheading>
            <Heading as="h2" dark className="mt-2">
              The network is not a vendor channel. It is how the commons stays
              useful.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">
              A foundation-led ecosystem lets many institutions build and deploy
              CARE while sharing improvements, avoiding fragmentation, and
              giving health systems more control over technology and data.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Open-source contribution',
              'Clinical workflow feedback',
              'Implementation playbooks',
              'Reusable standards work',
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <Globe2 className="mb-4 size-5 text-lime-200" />
                <p className="text-base/6 font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Network() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <EcosystemSection />
        <JourneySection />
        <CommonsSection />
      </main>
      <Footer />
    </div>
  )
}
