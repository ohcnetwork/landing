import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  ArrowRight,
  ClipboardCheck,
  GitPullRequest,
  Landmark,
  LockKeyhole,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Governance - Open Healthcare Network Foundation',
  description:
    'How OHC Foundation separates fiduciary stewardship, technical direction, maintainership, contribution, security, and release governance.',
  keywords:
    'OHC governance, open source healthcare governance, technical steering committee, CARE maintainers, open healthcare foundation',
}

const layers = [
  {
    title: 'Foundation Board',
    description:
      'Mission, legal, fiduciary, financial, fundraising, risk, and long-term institutional stewardship.',
    icon: Landmark,
  },
  {
    title: 'Technical Steering Committee',
    description:
      'Architecture, technical vision, maintainership, release discipline, and community process oversight.',
    icon: Scale,
  },
  {
    title: 'Project maintainers',
    description:
      'Day-to-day code review, roadmap execution, issue triage, documentation, and contributor mentorship.',
    icon: GitPullRequest,
  },
  {
    title: 'Project groups',
    description:
      'Focused ownership for CARE Core, Apps, standards, security, implementation guides, and clinical workflows.',
    icon: Users,
  },
]

const policies = [
  {
    title: 'Open contribution',
    text: 'Contributions should flow through public repositories, clear review rules, and a documented maintainer path.',
  },
  {
    title: 'License clarity',
    text: 'CARE code is MIT licensed. Documentation and implementation guides should use open content licenses where appropriate.',
  },
  {
    title: 'Release governance',
    text: 'Stable releases, compatibility expectations, and long-term support direction should be visible to implementers.',
  },
  {
    title: 'Security reporting',
    text: 'Vulnerability reporting, disclosure expectations, access-control practices, and auditability are foundation concerns.',
  },
  {
    title: 'Conflict handling',
    text: 'The foundation should make conflicts of interest and decision escalation paths explicit as the ecosystem grows.',
  },
  {
    title: 'Clinical accountability',
    text: 'Clinical workflow and AI-related changes need review paths that respect safety, auditability, and human accountability.',
  },
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>Governance</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            Shared infrastructure needs visible decision-making.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            OHC Foundation exists so CARE is not controlled by one vendor, one
            donor, one state, or one implementation partner. Governance
            separates fiduciary stewardship from technical direction while
            keeping maintainers close to the work.
          </p>
        </div>
      </Container>
    </div>
  )
}

function LayersSection() {
  return (
    <Container className="py-24">
      <Subheading>Stewardship model</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Clear roles for institutional oversight and technical ownership.
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {layers.map((layer) => (
          <div
            key={layer.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6"
          >
            <layer.icon className="size-6 text-[#12806a]" />
            <h3 className="mt-6 text-lg font-semibold text-gray-950">
              {layer.title}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">{layer.description}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function DecisionSection() {
  const rows = [
    ['Mission, legal, finance, risk', 'Foundation Board'],
    ['Architecture and technical roadmap', 'Technical Steering Committee'],
    ['Code review and release readiness', 'Maintainers'],
    ['Plugin compatibility and extensions', 'Project groups and maintainers'],
    ['Clinical workflow safety', 'Clinicians, maintainers, and product leads'],
    ['Security disclosure and response', 'Security maintainers and foundation'],
  ]

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Subheading>How decisions are made</Subheading>
            <Heading as="h2" className="mt-2">
              The board stewards the institution. Technical leaders steward the
              platform.
            </Heading>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white">
            {rows.map(([scope, owner], index) => (
              <div
                key={scope}
                className="grid grid-cols-1 border-[#dfe6e2] p-5 sm:grid-cols-[1fr_0.8fr] sm:gap-6 [&:not(:first-child)]:border-t"
              >
                <p className="text-sm/6 font-semibold text-gray-950">{scope}</p>
                <p className="mt-2 text-sm/6 text-gray-600 sm:mt-0">{owner}</p>
                {index === 0 ? null : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function PolicySection() {
  return (
    <Container className="py-24">
      <div className="max-w-4xl">
        <Subheading>Public commitments</Subheading>
        <Heading as="h2" className="mt-2">
          Governance should be published as operating practice, not branding.
        </Heading>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {policies.map((policy) => (
          <div
            key={policy.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6"
          >
            <ClipboardCheck className="size-6 text-[#12806a]" />
            <h3 className="mt-6 text-lg font-semibold text-gray-950">
              {policy.title}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">{policy.text}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function SecuritySection() {
  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Subheading dark>Trust and safety</Subheading>
            <Heading as="h2" dark className="mt-2">
              Security, release quality, and clinical safety are governance
              work.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">
              Open healthcare infrastructure must be auditable, maintainable,
              and safe to operate in real clinical settings. Governance connects
              technical review, responsible disclosure, release compatibility,
              and human-in-the-loop AI practices.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/about/security-compliance"
                className="w-full sm:w-auto"
              >
                Security & compliance
              </Button>
              <Button
                variant="secondary"
                href="/developers"
                className="flex w-full items-center gap-2 sm:w-auto"
              >
                <span>Contribute</span>
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Audit trails', icon: ShieldCheck },
              { title: 'Access controls', icon: LockKeyhole },
              { title: 'Release readiness', icon: ClipboardCheck },
              { title: 'Maintainer review', icon: GitPullRequest },
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

export default function Governance() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <LayersSection />
        <DecisionSection />
        <PolicySection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  )
}
