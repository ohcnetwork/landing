import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  ArrowRight,
  Blocks,
  BookOpenCheck,
  Building2,
  ClipboardCheck,
  Code2,
  GitMerge,
  GraduationCap,
  Handshake,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Implementation Partners - Deploy and Extend CARE',
  description:
    'Join the OHC implementation ecosystem to deploy, localize, and extend CARE while strengthening the shared open core.',
  keywords:
    'CARE implementation partners, healthcare system integrators, CARE plugins, open source healthcare deployment, HMIS implementation',
}

const capabilities = [
  'Hospital HMIS and EMR deployments',
  'TeleICU and hub-and-spoke critical care workflows',
  'Palliative care and home-based care coordination',
  'ABDM, national rails, and identity integrations',
  'Labs, pharmacy, billing, inventory, and analytics modules',
  'Custom forms, terminology bindings, reports, and dashboards',
]

const expectations = [
  {
    title: 'Deploy without fragmenting',
    description:
      'Localize workflows through configuration, plugins, and documented extensions before forking the core.',
    icon: GitMerge,
  },
  {
    title: 'Contribute improvements back',
    description:
      'Bug fixes, reusable modules, forms, integrations, and documentation should strengthen the shared core.',
    icon: Code2,
  },
  {
    title: 'Respect release compatibility',
    description:
      'Implementations should track supported releases, upgrade paths, and security advisories.',
    icon: ShieldCheck,
  },
  {
    title: 'Build clinical trust',
    description:
      'Workflow changes should be tested with frontline staff and reviewed for safety, usability, and auditability.',
    icon: ClipboardCheck,
  },
]

const roadmap = [
  { title: 'Partner onboarding', icon: Handshake },
  { title: 'Implementation guides', icon: BookOpenCheck },
  { title: 'Plugin submission rules', icon: Blocks },
  { title: 'Training and certification direction', icon: GraduationCap },
  { title: 'Deployment quality checklist', icon: ClipboardCheck },
  { title: 'Support and escalation boundaries', icon: Wrench },
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>Implementation ecosystem</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            Deploy open healthcare infrastructure while strengthening the shared
            core.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            OHC Foundation enables implementation partners to deploy, extend,
            and localize CARE for governments, hospitals, NGOs, and public
            health programs without creating a fragmented product landscape.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/contact"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Become a partner</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/product/apps-integrations"
              className="w-full sm:w-auto"
            >
              Explore plugin model
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CapabilitiesSection() {
  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <Subheading>What partners can implement</Subheading>
          <Heading as="h2" className="mt-2">
            CARE is a platform for many deployment shapes, not one fixed app.
          </Heading>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <div
              key={capability}
              className="rounded-lg border border-[#dfe6e2] bg-white p-5"
            >
              <Building2 className="mb-4 size-5 text-[#12806a]" />
              <p className="text-sm/6 font-semibold text-gray-900">
                {capability}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function ExpectationsSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>Partner expectations</Subheading>
          <Heading as="h2" className="mt-2">
            Commercial opportunity and public-good discipline can work together.
          </Heading>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {expectations.map((item) => (
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

function RoadmapSection() {
  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <Subheading>Partner program direction</Subheading>
          <Heading as="h2" className="mt-2">
            The ecosystem needs playbooks, not one-off handholding.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            OHC can support more deployments by publishing implementation
            guides, compatibility expectations, contribution rules, and training
            paths that let partners deliver locally while improving the shared
            commons.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {roadmap.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <item.icon className="size-6 text-[#12806a]" />
              <h3 className="mt-6 text-lg font-semibold text-gray-950">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default function ImplementationPartners() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <CapabilitiesSection />
        <ExpectationsSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  )
}
