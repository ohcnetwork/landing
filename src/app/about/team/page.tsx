import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { PeopleSection, type Person } from '@/components/person-roster'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import leadershipData from '@/data/leadership.json'
import {
  ArrowRight,
  BadgeCheck,
  GitPullRequest,
  Landmark,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Board, Advisors, and Maintainers - Open Healthcare Network Foundation',
  description:
    'Foundation board, advisory board, governance layers, and maintainers stewarding OHC Foundation and CARE.',
  keywords:
    'OHC foundation board, OHC advisory board, Open Healthcare Network governance, CARE maintainers, OHC leadership',
}

const board = leadershipData.foundationBoard as Person[]
const advisors = leadershipData.advisoryBoard as Person[]
const maintainerRoles = leadershipData.maintainerRoles as string[]

const governanceLayers = [
  {
    title: 'Foundation Board',
    text: 'Mission, fiduciary oversight, risk, funding, legal accountability, and long-term institutional stewardship.',
    icon: Landmark,
  },
  {
    title: 'Advisory Board',
    text: 'Independent guidance from public infrastructure, health systems, philanthropy, technology, and open-source leaders.',
    icon: Scale,
  },
  {
    title: 'Foundation Team',
    text: 'Product, engineering, AI, community, partnerships, and operating leadership for OHC Foundation.',
    icon: Users,
  },
  {
    title: 'Maintainers',
    text: 'Architecture, code review, release discipline, security, documentation, and contributor pathways.',
    icon: GitPullRequest,
  },
]

function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-34">
          <Subheading>Leadership and governance layers</Subheading>
          <h1 className="mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            A full institution around CARE Core.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            OHC Foundation is being built as a durable home for open healthcare
            infrastructure: board stewardship, independent advisors, foundation
            operators, and maintainers close to the code and field deployments.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/foundation/governance"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Governance model</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/about/team/foundation"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Foundation team</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function LayersSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <Subheading>Governance map</Subheading>
          <Heading as="h2" className="mt-3">
            Board, advisors, team, and maintainers have different jobs.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            This separation matters. The board safeguards the institution.
            Advisors sharpen direction. The foundation team operates the
            roadmap. Maintainers protect technical quality.
          </p>
        </div>
        <div className="border-y border-[#dfe6e2]">
          {governanceLayers.map((layer, index) => (
            <div
              key={layer.title}
              className="grid gap-4 border-[#dfe6e2] py-5 sm:grid-cols-[44px_0.45fr_1fr] sm:items-start [&:not(:first-child)]:border-t"
            >
              <layer.icon className="size-5 text-[#12806a]" />
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gray-400">
                  0{index + 1}
                </span>
                <h3 className="text-base font-semibold text-gray-950">
                  {layer.title}
                </h3>
              </div>
              <p className="text-sm/6 text-gray-600">{layer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function MaintainerSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Subheading dark>Maintainers and contributors</Subheading>
            <Heading as="h2" dark className="mt-3">
              The wider technical community remains central.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">
              The public roster will grow as maintainer, clinical, and project
              committee roles are confirmed. For now, this page reserves the
              structure for a complete foundation team page.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {maintainerRoles.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <BadgeCheck className="mb-7 size-5 text-[#b8f36f]" />
                <p className="text-sm/6 font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FinalSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-8 sm:p-12">
        <ShieldCheck className="size-6 text-[#12806a]" />
        <Heading as="h2" className="mt-6 max-w-4xl">
          Open healthcare infrastructure needs visible stewardship.
        </Heading>
        <p className="mt-6 max-w-3xl text-lg/7 text-gray-600">
          The roster will expand as the foundation formalizes additional board,
          advisory, maintainer, clinical, and operating roles.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/foundation/governance" className="w-full sm:w-auto">
            Read governance model
          </Button>
          <Button
            variant="secondary"
            href="/support"
            className="w-full sm:w-auto"
          >
            Support the foundation
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function Team() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <Hero />
      <main>
        <LayersSection />
        <PeopleSection
          eyebrow="Foundation Board"
          title="Board stewardship for a neutral healthcare commons."
          description="The foundation board provides institutional oversight for mission, fiduciary responsibility, partnerships, and long-term trust."
          people={board}
        />
        <PeopleSection
          eyebrow="Advisory Board"
          title="Independent guidance for public-good infrastructure."
          description="The advisory board section is designed to grow as OHC adds leaders from digital public infrastructure, healthcare, philanthropy, standards, and open source."
          people={advisors}
          columns="lg:grid-cols-1"
        />
        <MaintainerSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
