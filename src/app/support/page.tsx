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
  title: 'Support - Fund the Open Healthcare Commons',
  description:
    'Fund OHC Foundation to sustain CARE Core, security, documentation, release discipline, implementation ecosystem enablement, and open healthcare DPG adoption.',
  keywords:
    'fund open healthcare, OHC Foundation support, healthcare commons, CARE Core funding, digital public infrastructure sponsor',
}

const fundingSupports = [
  {
    title: 'CARE Core',
    description:
      'Shared healthcare primitives, APIs, workflows, FHIR-aligned data models, and platform reliability.',
    icon: Layers3,
  },
  {
    title: 'Security and LTS',
    description:
      'Release discipline, quality assurance, vulnerability response, auditability, and long-term support direction.',
    icon: ShieldCheck,
  },
  {
    title: 'Documentation and guides',
    description:
      'Implementation guides, deployment packs, technical references, training material, and reusable playbooks.',
    icon: FileText,
  },
  {
    title: 'Implementation ecosystem',
    description:
      'System integrator enablement, plugin compatibility, contribution pathways, and localization support.',
    icon: Users,
  },
  {
    title: 'Assistive AI for health',
    description:
      'Human-in-the-loop documentation, voice-native forms, summarization, and safe workflow support.',
    icon: Sparkles,
  },
  {
    title: 'South-to-South reuse',
    description:
      'Deployment patterns and country-ready infrastructure that can be adapted beyond one state or program.',
    icon: Globe2,
  },
]

const sponsorTypes = [
  {
    title: 'Visionary Sponsor',
    description:
      'Major philanthropic or institutional support for stewarding open healthcare digital public infrastructure.',
  },
  {
    title: 'Foundation Member',
    description:
      'Company, healthcare provider, implementation partner, or ecosystem organization support for long-term stewardship.',
  },
  {
    title: 'Program Sponsor',
    description:
      'Targeted support for CARE Core, security, AI documentation, palliative care, TeleICU, or deployment packs.',
  },
  {
    title: 'Individual Sponsor',
    description:
      'Support from individuals who want to back open healthcare infrastructure and the OHC mission.',
  },
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>Support OHC Foundation</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            Fund the open healthcare commons.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Help maintain the shared infrastructure, governance, security,
            documentation, and ecosystem that make open healthcare systems
            possible at scale.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              href="mailto:finance@ohc.network"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Contact finance</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              href="/support/how-to-fund"
            >
              How to fund us
            </Button>
            <Button
              variant="outline"
              href="/funding.json"
              className="w-full sm:w-auto"
            >
              View funding.json
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function WhyFundSection() {
  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Subheading>Why fund</Subheading>
          <Heading as="h2" className="mt-2">
            Funding OHC is not funding one deployment.
          </Heading>
        </div>
        <div className="space-y-6 text-lg/8 text-gray-600">
          <p>
            It funds the shared platform, governance, release practices,
            documentation, security, and implementation ecosystem that make many
            deployments safer and less expensive to repeat.
          </p>
          <p>
            The foundation model lets funders support public-good infrastructure
            that governments, hospitals, NGOs, and implementation partners can
            reuse without license lock-in.
          </p>
        </div>
      </div>
    </Container>
  )
}

function SupportAreasSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>What support funds</Subheading>
          <Heading as="h2" className="mt-2">
            The institutional work behind reusable deployments.
          </Heading>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {fundingSupports.map((item) => (
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
    </div>
  )
}

function SponsorSection() {
  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Subheading>Sponsor paths</Subheading>
          <Heading as="h2" className="mt-2">
            Institutional support for a public-good infrastructure layer.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            Funding conversations can be structured around the public
            funding.json plans while tailoring scope, governance, reporting, and
            compliance needs directly with the foundation.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {sponsorTypes.map((type) => (
            <div
              key={type.title}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <BadgeIndianRupee className="size-6 text-[#12806a]" />
              <h3 className="mt-6 text-lg font-semibold text-gray-950">
                {type.title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
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
            <Subheading dark>Start the conversation</Subheading>
            <Heading as="h2" dark className="mt-2">
              Back the commons that health systems can own, adapt, and scale.
            </Heading>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:finance@ohc.network"
              className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <HeartHandshake className="size-6 text-lime-200" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                Grants and sponsorships
              </h3>
              <p className="mt-3 text-sm/6 text-white/65">
                finance@ohc.network
              </p>
            </a>
            <a
              href="/contact"
              className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <Building2 className="size-6 text-lime-200" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                Partnerships
              </h3>
              <p className="mt-3 text-sm/6 text-white/65">
                Government, hospital, SI, and ecosystem conversations.
              </p>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Support() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <WhyFundSection />
        <SupportAreasSection />
        <SponsorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
