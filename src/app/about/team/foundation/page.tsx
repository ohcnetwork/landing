import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { PersonSocialLinks, type Person } from '@/components/person-roster'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import leadershipData from '@/data/leadership.json'
import {
  ArrowRight,
  BrainCircuit,
  ClipboardCheck,
  Code2,
  Handshake,
  ShieldCheck,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foundation Team - Open Healthcare Network Foundation',
  description:
    'The foundation team operating OHC Foundation, CARE Core, open healthcare infrastructure, AI, product, engineering, partnerships, and ecosystem enablement.',
  keywords:
    'OHC foundation team, Open Healthcare Network CEO, Open Healthcare Network CTO, CARE team',
}

const foundationTeam = leadershipData.foundationTeam as Person[]

const operatingAreas = [
  {
    title: 'Product and AI',
    text: 'Roadmap, workflow strategy, assistive AI direction, and product quality for healthcare users.',
    icon: BrainCircuit,
  },
  {
    title: 'Architecture and engineering',
    text: 'CARE Core, APIs, plugins, implementation quality, and platform maintainability.',
    icon: Code2,
  },
  {
    title: 'Foundation operations',
    text: 'Governance support, documentation, fundraising readiness, reporting, and institutional systems.',
    icon: ClipboardCheck,
  },
  {
    title: 'Ecosystem enablement',
    text: 'Implementation partners, hospitals, governments, funders, clinicians, and open-source contributors.',
    icon: Handshake,
  },
]

function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-34">
          <Subheading>Foundation team</Subheading>
          <h1 className="mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            The operators building the institution.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            This page is the foundation team roster. It starts with the CEO and
            CTO, and is structured so product, engineering, AI, partnerships,
            documentation, community, and operations roles can be added as the
            foundation grows.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/about/team"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Board and advisors</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/foundation/governance"
              className="w-full sm:w-auto"
            >
              Governance model
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function OperatingAreasSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <Subheading>Operating model</Subheading>
          <Heading as="h2" className="mt-3">
            A small foundation team with high leverage.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            The foundation team exists to make CARE reusable, governable, and
            fundable beyond any one deployment. The roster will expand as roles
            become public.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {operatingAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <area.icon className="size-5 text-[#12806a]" />
              <h3 className="mt-8 text-lg font-semibold text-gray-950">
                {area.title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{area.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function TeamPortrait({ person }: { person: Person }) {
  if (person.image) {
    return (
      <img
        src={person.image}
        alt={`${person.name} headshot`}
        className="relative z-10 size-36 rounded-full object-cover shadow-[0_26px_70px_rgba(7,24,19,0.18)] ring-1 ring-white/70 transition duration-500 group-hover:scale-[1.035] sm:size-44"
      />
    )
  }

  return (
    <div className="relative z-10 flex size-36 items-center justify-center rounded-full bg-white/80 text-4xl font-semibold text-[#0b6b55] shadow-[0_26px_70px_rgba(7,24,19,0.14)] ring-1 ring-black/8 sm:size-44">
      {person.initials}
    </div>
  )
}

function TeamProfileCard({ person, index }: { person: Person; index: number }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_28px_90px_rgba(7,24,19,0.07)]">
      <div className="relative flex aspect-[1.08] items-center justify-center overflow-hidden bg-[#eef5f0]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#fbfdfb_0%,#edf6f1_44%,#cde8dc_100%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(#0b6b5514_1px,transparent_1px),linear-gradient(90deg,#0b6b5514_1px,transparent_1px)] [background-size:30px_30px] opacity-[0.26]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/55 to-transparent" />
        <div className="absolute top-6 left-6 rounded-full border border-white/70 bg-white/62 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[#31584d] uppercase shadow-sm backdrop-blur">
          0{index + 1}
        </div>
        <TeamPortrait person={person} />
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-3xl/8 font-semibold tracking-normal text-gray-950">
          {person.name}
        </h3>
        <p className="mt-3 min-h-14 text-lg/7 text-gray-600">{person.role}</p>
        <div className="mt-7">
          <PersonSocialLinks person={person} variant="icon" />
        </div>
      </div>
    </article>
  )
}

function TeamGridSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div>
          <Subheading>Current team</Subheading>
          <Heading as="h2" className="mt-3">
            Foundation operating leads.
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          This public roster starts intentionally small and is built to expand.
          Product, engineering, AI, community, partnerships, documentation, and
          operations leaders can be added as the foundation publishes those
          roles.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {foundationTeam.map((person, index) => (
          <TeamProfileCard
            key={`foundation-team-${person.name}`}
            person={person}
            index={index}
          />
        ))}
      </div>
    </Container>
  )
}

function RosterStewardshipSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Subheading dark>Public roster</Subheading>
            <Heading as="h2" dark className="mt-3">
              Leadership should be visible, current, and deliberate.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">
              The foundation team page will expand as roles are confirmed for
              publication, with clear accountability for product, engineering,
              partnerships, operations, community, and stewardship.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6">
            <ShieldCheck className="size-6 text-[#b8f36f]" />
            <p className="mt-8 font-mono text-sm font-semibold tracking-[0.12em] text-white uppercase">
              Stewardship signal
            </p>
            <p className="mt-4 text-sm/6 text-white/62">
              A public roster helps governments, funders, hospitals, and
              contributors understand who is accountable for the institution
              behind CARE and related open healthcare infrastructure.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function FoundationTeam() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <Hero />
      <main>
        <TeamGridSection />
        <OperatingAreasSection />
        <RosterStewardshipSection />
      </main>
      <Footer />
    </div>
  )
}
