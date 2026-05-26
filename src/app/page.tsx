import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { CorePluginCloud } from '@/components/core-plugin-cloud'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { YouTubeVideo } from '@/components/youtube-video'
import { getFeaturedPosts } from '@/lib/blog'
import dayjs from 'dayjs'
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Braces,
  BrainCircuit,
  Building2,
  CircleCheck,
  Code2,
  FileCheck2,
  Globe2,
  Hospital,
  Landmark,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Wallet,
  Workflow,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Healthcare Network Foundation - Open Health Infrastructure',
  description:
    'Open Healthcare Network Foundation stewards CARE, an MIT-licensed Digital Public Good for self-hostable, standards-based health infrastructure without vendor lock-in.',
  keywords:
    'Open Healthcare Network Foundation, CARE, Digital Public Goods, open source health infrastructure, healthcare DPI, FHIR R5, MIT license, ABDM, TeleICU, HMIS',
  openGraph: {
    title: 'Open Healthcare Network Foundation - Open Health Infrastructure',
    description:
      'The neutral foundation stewarding CARE and the open-source health infrastructure layer.',
    images: [
      {
        url: '/og/ohc-landing-cover.png',
        width: 1920,
        height: 1080,
        alt: 'Open Healthcare Network Foundation',
      },
    ],
  },
  twitter: {
    title: 'Open Healthcare Network Foundation - Open Health Infrastructure',
    description:
      'CARE is the flagship open-source Digital Public Good stewarded by OHC Foundation.',
    images: ['/og/ohc-landing-cover.png'],
  },
}

const credibilityPoints = [
  ['Verified DPG', 'CARE is listed in the Digital Public Goods registry.'],
  ['MIT licensed', 'Reusable by governments, hospitals, NGOs, and partners.'],
  ['FHIR-native', 'Built around standards, terminology, and open APIs.'],
]

const operatingSystem = [
  [
    'Core platform',
    'Stable primitives, APIs, forms, access control, audit trails, reports, and extensibility.',
  ],
  [
    'Standards',
    'FHIR-aligned modeling, terminology bindings, ABDM patterns, and implementation guides.',
  ],
  [
    'Quality and security',
    'Release discipline, vulnerability handling, testing expectations, and documentation quality.',
  ],
  [
    'Ecosystem',
    'Developer community, clinical review, implementation partners, and public-good funding paths.',
  ],
  [
    'AI readiness',
    'Assistive, human-reviewed documentation and summarization on structured clinical data.',
  ],
]

const careModules = [
  'Longitudinal patient records',
  'OP, IP, emergency, observation, home visits',
  'Clinical notes, forms, orders, prescriptions',
  'Labs, pharmacy, inventory, radiology, billing',
  'Tasks, referrals, care plans, dashboards',
  'ABDM, TeleICU, AI documentation, open APIs',
]

const standards = [
  ['FHIR R5', Braces],
  ['SNOMED CT', FileCheck2],
  ['LOINC', BookOpenCheck],
  ['UCUM', Code2],
  ['ICD-10', ShieldCheck],
  ['ABDM', Globe2],
] as const

const compounding = [
  {
    title: 'Software leverage',
    description:
      'Each reusable module, form, and integration reduces the cost of the next public health deployment.',
    icon: Layers3,
  },
  {
    title: 'Open distribution',
    description:
      'Governments, hospitals, implementers, clinicians, and developers can adopt without vendor permission.',
    icon: Network,
  },
  {
    title: 'Data foundation for AI',
    description:
      'Assistive AI becomes safer when it sits on structured, interoperable, auditable health data.',
    icon: BrainCircuit,
  },
  {
    title: 'Governance moat',
    description:
      'The foundation turns open source into infrastructure institutions can trust for long-term operations.',
    icon: Landmark,
  },
]

const audiences = [
  [
    'Governments',
    'Own, adapt, and scale health infrastructure locally.',
    '/contact',
  ],
  [
    'Funders',
    'Back the shared core, not one-off software delivery.',
    '/support',
  ],
  [
    'Hospitals',
    'Deploy practical HMIS and EMR workflows without license lock-in.',
    '/solutions/hospital-management',
  ],
  [
    'Implementation partners',
    'Localize CARE and contribute improvements back.',
    '/ecosystem/implementation-partners',
  ],
  [
    'Developers',
    'Build open-source healthcare infrastructure used in the field.',
    '/developers',
  ],
  [
    'Clinicians',
    'Shape workflows, forms, safety, and AI documentation behavior.',
    '/ecosystem/clinicians',
  ],
]

const solutionListing = [
  {
    title: 'CARE HMIS',
    description:
      'Hospital management workflows for registration, encounters, labs, pharmacy, billing, reports, and patient portal.',
    logo: '/logos/care-hmis.svg',
    href: '/solutions/hospital-management',
  },
  {
    title: 'TeleICU',
    description:
      'Hub-and-spoke critical care workflows with remote rounds, escalation, devices, and video context.',
    logo: '/logos/care-teleicu.svg',
    href: '/solutions/teleicu',
  },
  {
    title: 'Palliative Care Grid',
    description:
      'Home-based care coordination, longitudinal records, tasks, referrals, follow-up, and field workflows.',
    logo: '/logos/care-palliative.svg',
    href: '/solutions/palliative-care',
  },
  {
    title: 'Care Clinics',
    description:
      'Primary care and outpatient workflows for scheduling, prescriptions, investigations, and continuity.',
    logo: '/logos/care-clinics.svg',
    href: '/solutions/care-clinics',
  },
  {
    title: 'Care Janwar',
    description:
      'Animal health workflows built on the same open-core pattern for facilities and field programs.',
    logo: '/logos/care-janwar.svg',
    href: '/solutions/care-janwar',
  },
]

function GridField({ dark = false }: { dark?: boolean }) {
  const color = dark ? 'rgba(130, 217, 229, 0.10)' : 'rgba(9, 35, 50, 0.055)'

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
        maskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.13), transparent)',
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.13), transparent)',
      }}
    />
  )
}

function ProductStage() {
  return (
    <div className="relative mx-auto mt-16 mb-12 max-w-6xl px-0 sm:mt-20 sm:mb-16">
      <div className="absolute inset-x-6 top-10 bottom-0 bg-[linear-gradient(180deg,rgba(18,128,106,0.26),rgba(9,35,50,0.08)_44%,transparent)] blur-3xl" />
      <CorePluginCloud />
    </div>
  )
}

function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <GridField />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-6xl pt-16 pb-8 text-center sm:pt-24">
          <div className="mx-auto mb-8 flex w-fit max-w-full flex-wrap items-center justify-center gap-2 rounded-lg border border-[#cad8cf] bg-white/78 px-3 py-2 text-sm font-semibold text-[#173d34] shadow-[0_10px_30px_rgba(8,20,31,0.08)] backdrop-blur-xl">
            <BadgeCheck className="size-4 text-[#12806a]" />
            <span>Verified DPG</span>
            <span className="text-gray-400">/</span>
            <span>MIT licensed</span>
            <span className="text-gray-400">/</span>
            <span>Self-hostable</span>
          </div>
          <h1 className="mx-auto max-w-6xl font-display text-5xl/[0.94] font-bold tracking-normal text-balance text-[#05070c] sm:text-7xl/[0.9] md:text-8xl/[0.86] lg:text-9xl/[0.84]">
            The open operating system for healthcare.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl/8 font-medium text-gray-700 sm:text-2xl/9">
            OHC Foundation stewards CARE Core, apps, standards, and integrations
            so governments, hospitals, and implementers can run interoperable
            health systems without vendor lock-in.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button
              href="/product/care-core"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Explore CARE</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/support"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Fund the commons</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/contact"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Partner with OHC</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
        <ProductStage />
      </Container>
    </div>
  )
}

function CredibilityBand() {
  return (
    <div className="border-y border-[#dfe6e2] bg-white/76 backdrop-blur-xl">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.64fr_1.36fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[#12806a] uppercase">
              Public proof
            </p>
            <p className="mt-3 max-w-xl text-xl/7 font-semibold tracking-normal text-gray-950 sm:text-2xl/8">
              Open infrastructure, supported by real institutions and verifiable
              public-good signals.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {credibilityPoints.map(([label, detail]) => (
                <div key={label} className="flex gap-3">
                  <CircleCheck className="mt-1 size-4 shrink-0 text-[#12806a]" />
                  <div>
                    <p className="text-sm font-semibold text-gray-950">
                      {label}
                    </p>
                    <p className="mt-1 text-sm/5 text-gray-600">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-5 border-t border-[#dfe6e2] pt-7 lg:grid-cols-[140px_1fr] lg:items-center">
              <p className="font-mono text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
                Supported by
              </p>
              <LogoCloud />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FoundationLayerSection() {
  return (
    <Container className="py-28 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <Subheading>Foundation layer</Subheading>
          <Heading as="h2" className="mt-4">
            The institution around the healthcare OS.
          </Heading>
          <p className="mt-7 text-lg/7 text-gray-600">
            Healthcare systems do not adopt source code alone. They need
            governance, releases, documentation, security, and an ecosystem that
            keeps the shared core dependable over years.
          </p>
        </div>
        <div className="border-y border-[#dfe6e2]">
          {operatingSystem.map(([title, description], index) => (
            <div
              key={title}
              className="grid gap-4 border-[#dfe6e2] py-5 md:grid-cols-[0.42fr_1fr] md:gap-8 [&:not(:first-child)]:border-t"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gray-400">
                  0{index + 1}
                </span>
                <h3 className="text-base font-semibold text-gray-950">
                  {title}
                </h3>
              </div>
              <p className="text-sm/6 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function CareSection() {
  return (
    <div className="relative overflow-hidden bg-[#052e24] py-28 text-white">
      <GridField dark />
      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          <Subheading dark>CARE is the product proof</Subheading>
          <Heading as="h2" dark className="mt-4">
            One open core. Many real workflows.
          </Heading>
          <p className="mx-auto mt-7 max-w-3xl text-lg/7 text-white/68">
            CARE Core provides the common primitives. CARE Apps extend the
            platform for national rails, HMIS, TeleICU, palliative care, AI
            documentation, LMIS, pharmacy, billing, and analytics.
          </p>
        </div>
        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {careModules.map((module, index) => (
            <div
              key={module}
              className="group rounded-lg border border-white/10 bg-white/[0.055] p-5 transition hover:border-[#b8f36f]/45 hover:bg-white/[0.075]"
            >
              <div className="flex items-center justify-between">
                <Workflow className="size-5 text-[#b8f36f]" />
                <span className="font-mono text-xs text-white/35">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-8 text-base/6 font-semibold text-white">
                {module}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/product/care-core" className="w-full sm:w-auto">
            CARE Core
          </Button>
          <Button
            variant="secondary"
            href="/product/apps-integrations"
            className="w-full sm:w-auto"
          >
            Apps & integrations
          </Button>
        </div>
      </Container>
    </div>
  )
}

function SolutionListingSection() {
  return (
    <div className="border-y border-[#dfe6e2] bg-[#f7f9f6] py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <Subheading>Solutions</Subheading>
            <Heading as="h2" className="mt-4">
              Deployable workflows on the healthcare OS.
            </Heading>
          </div>
          <p className="text-lg/7 text-gray-600">
            CARE Core is the shared foundation. Solutions package that core into
            practical workflows for hospitals, critical care, home care,
            clinics, public health programs, and specialized field operations.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] md:grid-cols-2 lg:grid-cols-5">
          {solutionListing.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group flex min-h-[320px] flex-col bg-white p-6 transition hover:bg-[#fbfcfb]"
            >
              <div className="flex h-28 items-center justify-center rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-5">
                <img
                  src={solution.logo}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mt-8 text-xl/7 font-semibold text-gray-950">
                {solution.title}
              </h3>
              <p className="mt-3 flex-1 text-sm/6 text-gray-600">
                {solution.description}
              </p>
              <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#12806a]">
                Explore
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Button variant="secondary" href="/solutions">
            View all solutions
          </Button>
        </div>
      </Container>
    </div>
  )
}

function StandardsSection() {
  return (
    <Container className="py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Subheading>Architecture</Subheading>
          <Heading as="h2" className="mt-4">
            AI-ready because the data layer is structured first.
          </Heading>
          <p className="mt-7 text-lg/7 text-gray-600">
            CARE is designed around configurable forms, FHIR-aligned resources,
            terminology bindings, open APIs, audit trails, and role-based
            access. AI is framed as assistive and human-reviewed because
            clinical accountability cannot be automated away.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {standards.map(([name, Icon]) => (
            <div
              key={name}
              className="rounded-lg border border-[#dfe6e2] bg-white p-5 shadow-sm transition hover:border-[#bdd0c5] hover:shadow-[0_18px_45px_rgba(8,20,31,0.08)]"
            >
              <Icon className="size-5 text-[#0f8b6c]" />
              <p className="mt-10 text-xl font-semibold text-gray-950">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function CompoundingSection() {
  return (
    <div className="border-y border-[#dfe6e2] bg-[#f7f9f6] py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <Subheading>Why this can scale</Subheading>
            <Heading as="h2" className="mt-4">
              A nonprofit with product leverage.
            </Heading>
          </div>
          <p className="text-lg/7 text-gray-600">
            The best nonprofit technology organizations compound: each
            implementation makes the infrastructure better, each partner expands
            distribution, and each funded release makes future adoption cheaper.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] md:grid-cols-2 lg:grid-cols-4">
          {compounding.map((item, index) => (
            <div key={item.title} className="bg-white p-6">
              <div className="flex items-center justify-between">
                <item.icon className="size-6 text-[#12806a]" />
                <span className="font-mono text-xs text-gray-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-10 text-lg font-semibold text-gray-950">
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

function ImpactSection() {
  return (
    <Container className="py-28">
      <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <Subheading>Evidence</Subheading>
          <Heading as="h2" className="mt-4">
            Field proof, handled with discipline.
          </Heading>
          <p className="mt-7 text-lg/7 text-gray-600">
            OHC has public proof across the DPG registry, open-source
            repositories, standards architecture, and program deployments. The
            site keeps metrics dated and program-specific so funders,
            governments, and media see disciplined claims instead of impact
            theater.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/impact" className="w-full sm:w-auto">
              View impact
            </Button>
            <Button
              variant="secondary"
              href="/press-media"
              className="w-full sm:w-auto"
            >
              Press facts
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_22px_70px_rgba(8,20,31,0.09)]">
          <div className="h-80 border-b border-[#dfe6e2]">
            <Map />
          </div>
          <div className="grid divide-y divide-[#dfe6e2] md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              ['DPG', 'Externally listed'],
              ['MIT', 'Reusable by default'],
              ['Open APIs', 'Built for integration'],
            ].map(([label, text]) => (
              <div key={label} className="p-5">
                <p className="text-xl font-semibold text-gray-950">{label}</p>
                <p className="mt-2 text-sm/6 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

function GitHubVideoSection() {
  return (
    <div className="border-y border-[#dfe6e2] bg-[#f7f9f6] py-28">
      <Container>
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <Subheading>GitHub Story</Subheading>
          <Heading as="h2" className="mt-4">
            Open-source collaboration, shown through the work.
          </Heading>
          <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
            The GitHub story is useful proof because it shows OHC as a real
            contributor network: clinicians, engineers, and institutions
            building healthcare infrastructure in the open.
          </p>
        </div>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-[#dfe6e2] bg-white p-2 shadow-[0_28px_90px_rgba(6,63,50,0.12)]">
          <YouTubeVideo
            videoId="-wxIzaqvkQA"
            title="Open Healthcare Network - GitHub Story"
            className="overflow-hidden rounded-lg"
          />
        </div>
      </Container>
    </div>
  )
}

function BlogSection() {
  const posts = getFeaturedPosts(3)

  if (posts.length === 0) return null

  return (
    <Container className="py-28">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div>
          <Subheading>Blog</Subheading>
          <Heading as="h2" className="mt-4">
            Notes for builders of public-good health infrastructure.
          </Heading>
        </div>
        <div className="lg:justify-self-end">
          <Button variant="secondary" href="/blog">
            Read the blog
          </Button>
        </div>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white p-6 transition hover:bg-[#fbfcfb]"
          >
            <p className="font-mono text-xs font-semibold tracking-wide text-[#6b7880] uppercase">
              {dayjs(post.publishedAt).format('MMM D, YYYY')}
            </p>
            <h3 className="mt-8 text-2xl/7 font-semibold text-gray-950">
              {post.title}
            </h3>
            <p className="mt-4 text-sm/6 text-gray-600">{post.excerpt}</p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#12806a]">
              Read essay
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </p>
          </Link>
        ))}
      </div>
    </Container>
  )
}

function AudienceSection() {
  const icons = [Landmark, Wallet, Hospital, Building2, Code2, Stethoscope]

  return (
    <div className="relative overflow-hidden bg-[#052e24] py-28 text-white">
      <GridField dark />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Subheading dark>Who should work with OHC</Subheading>
            <Heading as="h2" dark className="mt-4">
              One foundation, multiple high-leverage paths.
            </Heading>
            <p className="mt-7 text-lg/7 text-white/65">
              Governments can deploy, funders can support, implementation
              partners can localize, developers can contribute, and clinicians
              can shape workflows.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10">
            {audiences.map(([title, text, href], index) => {
              const Icon = icons[index]
              return (
                <a
                  key={title}
                  href={href}
                  className="group grid gap-4 border-white/10 bg-white/[0.045] p-5 transition hover:bg-white/[0.075] md:grid-cols-[38px_0.35fr_1fr_24px] md:items-center [&:not(:first-child)]:border-t"
                >
                  <Icon className="size-5 text-[#b8f36f]" />
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm/6 text-white/62">{text}</p>
                  <ArrowRight className="size-4 text-[#b8f36f] transition group-hover:translate-x-1" />
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FinalCtaSection() {
  return (
    <Container className="py-28">
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-8 shadow-sm sm:p-12">
        <GridField />
        <div className="relative mx-auto max-w-4xl text-center">
          <Sparkles className="mx-auto size-6 text-[#0f8b6c]" />
          <Heading as="h2" className="mt-6">
            Build the open healthcare commons.
          </Heading>
          <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
            Help OHC Foundation maintain the shared core, governance, security,
            documentation, and ecosystem that let health systems deploy modern
            software without vendor lock-in.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/support" className="w-full sm:w-auto">
              Fund the commons
            </Button>
            <Button
              variant="secondary"
              href="/contact"
              className="w-full sm:w-auto"
            >
              Start a conversation
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <Hero />
      <main>
        <CredibilityBand />
        <FoundationLayerSection />
        <CareSection />
        <SolutionListingSection />
        <StandardsSection />
        <CompoundingSection />
        <GitHubVideoSection />
        <ImpactSection />
        <Testimonials />
        <BlogSection />
        <AudienceSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
