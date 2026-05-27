import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  HeartPulse,
  Hospital,
  MonitorDot,
  PawPrint,
  Stethoscope,
  Workflow,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CARE Solutions - Open Healthcare Deployment Patterns',
  description:
    'Explore CARE solution blueprints for hospital management, TeleICU, palliative care, clinics, animal health, public health programs, AI-ready workflows, and open healthcare infrastructure.',
  keywords: [
    'CARE solutions',
    'open healthcare platform',
    'open source HMIS',
    'open source HIS',
    'TeleICU',
    'palliative care grid',
    'primary care clinic software',
    'animal health EMR',
    'digital public infrastructure healthcare',
    'FHIR healthcare workflows',
  ],
  alternates: {
    canonical: '/solutions',
  },
  openGraph: {
    title: 'CARE Solutions - Open Healthcare Deployment Patterns',
    description:
      'Reusable healthcare workflows built on CARE Core: hospital systems, critical care, home care, clinics, animal health, and AI-ready programs.',
    url: '/solutions',
    images: [
      {
        url: '/og/ohc-landing-cover.png',
        width: 1200,
        height: 630,
        alt: 'Open Healthcare Network Foundation',
      },
    ],
  },
}

const solutions = [
  {
    title: 'Hospital Management',
    eyebrow: 'CARE HMIS',
    description:
      'An open Hospital Information System for OPD, emergency, inpatient, labs, pharmacy, billing, reporting, and AI-ready clinical workflows.',
    href: '/solutions/hospital-management',
    icon: Hospital,
    logo: '/logos/care-hmis.svg',
    status: 'Field-ready',
  },
  {
    title: 'TeleICU',
    eyebrow: 'CARE TeleICU',
    description:
      'Hub-and-spoke critical-care workflows for remote ICU review, specialist hubs, CARE EMR documentation, video context, and protocols.',
    href: '/solutions/teleicu',
    icon: MonitorDot,
    logo: '/logos/care-teleicu.svg',
    status: 'Field-proven',
  },
  {
    title: 'Palliative Care',
    eyebrow: 'Home Care Grid',
    description:
      'A care-coordination grid for vulnerable patients, home visits, care teams, follow-ups, referrals, dashboards, and continuity at home.',
    href: '/solutions/palliative-care',
    icon: HeartPulse,
    logo: '/logos/care-palliative.svg',
    status: 'Reference model',
  },
  {
    title: 'Clinics and Primary Care',
    eyebrow: 'CARE Clinics',
    description:
      'Clinic and primary-care workflows for appointments, registration, encounters, prescriptions, investigations, follow-up, and reporting.',
    href: '/solutions/care-clinics',
    icon: Stethoscope,
    logo: '/logos/care-clinics.svg',
    status: 'Deployment blueprint',
  },
  {
    title: 'Animal Health',
    eyebrow: 'CARE Janwar',
    description:
      'A CARE blueprint for veterinary clinics, public animal-health programs, field visits, vaccination, diagnostics, pharmacy, and program dashboards.',
    href: '/solutions/care-janwar',
    icon: PawPrint,
    logo: '/logos/care-janwar.svg',
    status: 'Deployment blueprint',
  },
]

const coreLayers = [
  'Patients',
  'Facilities',
  'Encounters',
  'Forms',
  'Orders',
  'Tasks',
  'Care plans',
  'Referrals',
  'Reports',
  'APIs',
  'RBAC',
  'Audit',
]

const principles = [
  {
    title: 'One core, many workflows',
    text: 'Solutions are assembled from CARE Core primitives, apps, plugins, forms, terminology, APIs, dashboards, and implementation playbooks.',
    icon: Workflow,
  },
  {
    title: 'Field use before polish theatre',
    text: 'Each page explains the actual workflow surface: who uses it, what gets recorded, what moves next, and how the system improves.',
    icon: BadgeCheck,
  },
  {
    title: 'AI on top of clean data',
    text: 'AI is framed as assistive: documentation, summaries, form support, decision support, and workflow intelligence on trusted records.',
    icon: BrainCircuit,
  },
]

function SolutionsConstellation() {
  return (
    <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
      <div className="absolute inset-x-8 top-10 bottom-0 rounded-full bg-[#12806a]/18 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#041611] p-3 shadow-[0_38px_120px_rgba(7,24,19,0.24)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(184,243,111,0.22),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.11),transparent_32%)]" />
        <div className="relative grid gap-3 lg:grid-cols-[0.95fr_1.1fr_0.95fr]">
          <div className="grid gap-3">
            {solutions.slice(0, 2).map((solution) => (
              <a
                key={solution.title}
                href={solution.href}
                className="group rounded-lg border border-white/10 bg-white/[0.055] p-4 transition hover:bg-white/[0.08]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <solution.icon className="size-5 text-[#b8f36f]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                      {solution.eyebrow}
                    </p>
                    <h2 className="mt-2 text-xl/[1] font-semibold text-white">
                      {solution.title}
                    </h2>
                    <p className="mt-3 text-xs/5 text-white/50">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-lg border border-white/12 bg-[linear-gradient(145deg,rgba(119,220,154,0.48),rgba(6,76,57,0.88)_48%,rgba(3,27,21,0.98))] p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-white/58 uppercase">
                  Shared foundation
                </p>
                <p className="mt-2 text-4xl/[0.95] font-semibold">CARE Core</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold text-white/70">
                FHIR R5
              </span>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-2">
              {coreLayers.map((layer) => (
                <div
                  key={layer}
                  className="rounded-md border border-white/10 bg-white/[0.08] px-2 py-3 text-center text-xs font-semibold text-white/76"
                >
                  {layer}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {solutions.slice(2).map((solution) => (
              <a
                key={solution.title}
                href={solution.href}
                className="group rounded-lg border border-white/10 bg-white/[0.055] p-4 transition hover:bg-white/[0.08]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <solution.icon className="size-5 text-[#b8f36f]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                      {solution.eyebrow}
                    </p>
                    <h2 className="mt-2 text-xl/[1] font-semibold text-white">
                      {solution.title}
                    </h2>
                    <p className="mt-3 text-xs/5 text-white/50">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-6xl pt-16 pb-18 text-center sm:pt-24 sm:pb-24 md:pt-32">
          <Subheading as="div">CARE Solutions</Subheading>
          <h1 className="mx-auto mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            Deployable healthcare workflows on one open core.
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/74 sm:text-2xl/8">
            CARE solutions are reusable blueprints for hospitals, critical care,
            home-based care, clinics, public health programs, and animal health,
            all built on the same standards-based healthcare operating layer.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/product/care-core">
              Explore CARE Core
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button variant="secondary" href="/contact">
              Discuss a deployment
            </Button>
          </div>
          <SolutionsConstellation />
        </div>
      </Container>
    </div>
  )
}

function SolutionsSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div>
          <Subheading>Solution blueprints</Subheading>
          <Heading as="h2" className="mt-3">
            Product depth without product fragmentation.
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          Each solution is a deployment pattern on CARE Core. Some are already
          field-proven. Others are packaged as implementation-ready blueprints
          for partners and programs to localize.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {solutions.map((solution) => (
          <a
            key={solution.title}
            href={solution.href}
            className="group rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)] transition hover:-translate-y-0.5 hover:border-[#12806a]/35 hover:shadow-[0_28px_88px_rgba(7,24,19,0.09)]"
          >
            <div className="flex items-start justify-between gap-4">
              <img
                src={solution.logo}
                alt=""
                className="h-12 w-12 object-contain"
              />
              <span className="rounded-full border border-[#dfe6e2] bg-[#f7f9f6] px-3 py-1 text-xs font-semibold text-[#12806a]">
                {solution.status}
              </span>
            </div>
            <p className="mt-8 font-mono text-xs font-semibold tracking-[0.16em] text-[#12806a] uppercase">
              {solution.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl/[1] font-semibold text-gray-950">
              {solution.title}
            </h2>
            <p className="mt-4 text-sm/6 text-gray-600">
              {solution.description}
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#12806a]">
              Explore solution
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </p>
          </a>
        ))}
      </div>
    </Container>
  )
}

function PatternSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Subheading dark>How OHC thinks about solutions</Subheading>
            <Heading as="h2" dark className="mt-3">
              The solution changes. The infrastructure stays shared.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">
              This is the difference between a product catalogue and a public
              infrastructure stack. CARE solutions reuse the same primitives,
              improve the same core, and avoid splitting health systems into
              isolated applications.
            </p>
          </div>
          <div className="grid gap-3">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6"
              >
                <item.icon className="size-5 text-[#b8f36f]" />
                <h3 className="mt-8 text-2xl/[1.05] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm/6 text-white/58">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function EcosystemSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-8 shadow-[0_24px_80px_rgba(7,24,19,0.05)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Subheading>Implementation ecosystem</Subheading>
            <Heading as="h2" className="mt-3">
              Built for governments, hospitals, partners, and programs.
            </Heading>
          </div>
          <div>
            <p className="text-lg/7 text-gray-600">
              OHC Foundation stewards CARE Core, standards alignment, release
              discipline, documentation, and shared architecture. Implementation
              partners can configure workflows, localize forms, integrate
              systems, train users, and contribute improvements back.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/ecosystem/implementation-partners">
                Work with partners
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="secondary" href="/product/apps-integrations">
                Apps and integrations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'CARE Solutions',
          url: 'https://ohc.network/solutions',
          description:
            'CARE solution blueprints for healthcare deployment patterns on one open core.',
          publisher: {
            '@type': 'Organization',
            name: 'Open Healthcare Network Foundation',
            url: 'https://ohc.network',
          },
          hasPart: solutions.map((solution) => ({
            '@type': 'WebPage',
            name: solution.title,
            url: `https://ohc.network${solution.href}`,
            description: solution.description,
          })),
        }).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default function Solutions() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <SolutionsSection />
        <PatternSection />
        <EcosystemSection />
      </main>
      <Footer />
    </div>
  )
}
