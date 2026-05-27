import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { CorePluginCloud } from '@/components/core-plugin-cloud'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Building2,
  Calendar,
  Cloud,
  CreditCard,
  Database,
  Edit3,
  FileText,
  GitBranch,
  HeartPulse,
  Hospital,
  Layers3,
  Link,
  LockKeyhole,
  Pill,
  Plug,
  Smartphone,
  Stethoscope,
  TestTube,
  TrendingUp,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CARE Core - The Open Healthcare OS Layer',
  description:
    'CARE Core is the open, MIT-licensed, FHIR R5-aligned operating layer for healthcare: shared primitives, APIs, role-based access, audit trails, forms, encounters, orders, labs, pharmacy, billing, analytics, and plugin-ready workflows.',
  keywords: [
    'CARE Core',
    'open healthcare OS',
    'open source healthcare platform',
    'FHIR R5 healthcare platform',
    'open source HIS',
    'open source HMIS',
    'open source EMR',
    'healthcare interoperability',
    'Digital Public Good healthcare',
    'MIT licensed healthcare software',
    'FHIR native healthcare platform',
    'healthcare API',
    'SNOMED CT',
    'LOINC',
    'UCUM',
    'ICD-10',
    'healthcare plugin architecture',
    'self-hostable healthcare infrastructure',
  ],
  alternates: {
    canonical: '/product/care-core',
  },
  openGraph: {
    title: 'CARE Core - The Open Healthcare OS Layer',
    description:
      'The stable standards-based core behind CARE: primitives, APIs, workflows, plugins, and AI-ready health data infrastructure.',
    url: '/product/care-core',
    images: [
      {
        url: '/screenshots/hmis-encounter-overview.jpeg',
        width: 1600,
        height: 900,
        alt: 'CARE Core clinical workflow interface',
      },
    ],
  },
  twitter: {
    title: 'CARE Core - The Open Healthcare OS Layer',
    description:
      'Open, standards-based healthcare infrastructure for hospitals, public health programs, and care coordination.',
    images: ['/screenshots/hmis-encounter-overview.jpeg'],
  },
}

const coreModules = [
  ['Administration', 'Patients / Facilities / Users'],
  ['Definitions', 'ValueSets / Questionnaires'],
  ['Clinical', 'Encounters / Observations'],
  ['Scheduling', 'Schedules / Slots / Bookings'],
  ['Pharmacy', 'Dispense / Inventory'],
  ['Labs', 'Service requests / Diagnostics'],
  ['Billing', 'Claims / Coverage / Invoice'],
  ['Coordination', 'Tasks / Care plans / Referrals'],
]

const proofPoints = [
  'Verified Digital Public Good',
  'MIT licensed',
  'FHIR R5-aligned',
  'API-first',
  'Self-hostable',
]

const architecturePrinciples = [
  {
    title: 'Stable shared core',
    text: 'Patients, facilities, providers, encounters, observations, orders, forms, tasks, care plans, reports, roles, and audit trails live in one reusable foundation.',
    icon: Database,
  },
  {
    title: 'Configurable workflows',
    text: 'Programs can model clinical and operational workflows through questionnaires, forms, terminology bindings, and deployment-specific configuration.',
    icon: Edit3,
  },
  {
    title: 'Plugin-ready surface',
    text: 'Apps and integrations add AI scribe, TeleICU, devices, labs, pharmacy, billing, messaging, claims, analytics, and national rails without fragmenting the core.',
    icon: Plug,
  },
]

const primitives = [
  { title: 'Patients and identity', icon: Stethoscope },
  { title: 'Facilities and hierarchy', icon: Building2 },
  { title: 'Providers and teams', icon: Hospital },
  { title: 'Encounters and episodes', icon: HeartPulse },
  { title: 'Questionnaires and forms', icon: FileText },
  { title: 'Observations and vitals', icon: BarChart3 },
  { title: 'Orders and requests', icon: GitBranch },
  { title: 'Medications and pharmacy', icon: Pill },
  { title: 'Labs and diagnostics', icon: TestTube },
  { title: 'Scheduling and slots', icon: Calendar },
  { title: 'Access control and audit', icon: LockKeyhole },
  { title: 'Reports and analytics', icon: TrendingUp },
]

const demos = [
  {
    title: 'Clinical data capture',
    text: 'Structured forms, observations, notes, terminology, and clinical context captured inside the longitudinal record.',
    video: '/core/clinical_data_capture.mp4',
    poster: '/core/posters/clinical_data_capture.jpg',
    icon: FileText,
  },
  {
    title: 'Configurable EMR forms',
    text: 'Program and hospital teams can shape workflows without turning every deployment into a new product fork.',
    video: '/core/Customizable_EMR_Forms.mp4',
    poster: '/core/posters/Customizable_EMR_Forms.jpg',
    icon: Edit3,
  },
  {
    title: 'Lab management',
    text: 'Orders, samples, diagnostic reports, values, units, and results flow back into the same patient timeline.',
    video: '/core/lab_management.mp4',
    poster: '/core/posters/lab_management.jpg',
    icon: TestTube,
  },
  {
    title: 'Pharmacy and inventory',
    text: 'Prescriptions connect to dispense, stock movement, substitutions, alerts, procurement, and inventory visibility.',
    video: '/core/pharmacy_and_inventory.mp4',
    poster: '/core/posters/pharmacy_and_inventory.jpg',
    icon: Pill,
  },
  {
    title: 'Billing and accounting',
    text: 'Invoices, payments, claims, coverage, scheme support, and reconciliation stay connected to real care activity.',
    video: '/core/billing_and_accounting.mp4',
    poster: '/core/posters/billing_and_accounting.jpg',
    icon: CreditCard,
  },
  {
    title: 'Dynamic reports',
    text: 'Clinical and operational reports are generated from the same structured workflows, not rebuilt in spreadsheets later.',
    video: '/core/dynamic_reports.mp4',
    poster: '/core/posters/dynamic_reports.jpg',
    icon: BarChart3,
  },
]

const standards = [
  ['FHIR R5', 'resource model and APIs'],
  ['SNOMED CT', 'clinical terminology direction'],
  ['LOINC', 'labs and observations'],
  ['UCUM', 'units of measure'],
  ['ICD-10', 'classification support'],
  ['Open APIs', 'integration by design'],
]

const deploymentModes = [
  {
    title: 'Sovereign hosting',
    text: 'Deploy in a government cloud, hospital VPC, managed cloud, hybrid model, or on-prem environment.',
    icon: Cloud,
  },
  {
    title: 'Mobile-first care',
    text: 'Support wards, clinics, home visits, field teams, and frontline workflows from the same platform primitives.',
    icon: Smartphone,
  },
  {
    title: 'AI-ready records',
    text: 'Assistive AI works best when patient context, forms, encounters, permissions, and audit trails already exist.',
    icon: BrainCircuit,
  },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CARE Core',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  url: 'https://ohc.network/product/care-core',
  description:
    'CARE Core is the open, MIT-licensed, FHIR R5-aligned operating layer for healthcare workflows across hospitals, public health programs, and care coordination.',
  license: 'https://opensource.org/license/mit/',
  publisher: {
    '@type': 'Organization',
    name: 'Open Healthcare Network Foundation',
    url: 'https://ohc.network',
  },
  featureList: [
    'Patients, facilities, users, roles, and access control',
    'Encounters, observations, clinical documentation, orders, and reports',
    'Questionnaires, configurable forms, terminology bindings, and APIs',
    'Labs, pharmacy, inventory, billing, scheduling, and analytics workflows',
    'Plugin-ready integrations for AI, TeleICU, devices, messaging, claims, and national rails',
    'Self-hostable deployment models with audit trails and standards-aligned data',
  ],
}

function CoreSlab() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/15 bg-[linear-gradient(145deg,rgba(104,224,157,0.46),rgba(10,92,68,0.86)_42%,rgba(3,27,21,0.98))] p-4 text-white shadow-[0_34px_92px_rgba(4,40,30,0.42)] sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(218,255,226,0.34),transparent_30%),radial-gradient(circle_at_84%_22%,rgba(184,243,111,0.18),transparent_26%)]" />
      <div className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg border border-white/15 bg-white/12">
              <Database className="size-5 text-[#e8fff0]" />
            </div>
            <div>
              <p className="font-mono text-xs font-semibold text-white/58 uppercase">
                Platform core
              </p>
              <h2 className="mt-1 text-4xl/[0.9] font-semibold tracking-normal sm:text-6xl/[0.85]">
                CARE Core
              </h2>
            </div>
          </div>
          <div className="w-fit rounded-lg border border-white/10 bg-white/10 px-3 py-2 font-mono text-xs font-semibold text-white/72">
            v3.0.0 / FHIR R5
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {coreModules.map(([name, detail]) => (
            <div
              key={name}
              className="rounded-lg border border-white/10 bg-white/[0.075] p-3"
            >
              <p className="truncate text-sm font-semibold text-white">
                {name}
              </p>
              <p className="mt-1 truncate text-xs text-white/48">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-2 rounded-lg border border-white/10 bg-[#031b15]/45 p-4 text-sm text-white/62 sm:grid-cols-2">
          <p>
            Persistence /{' '}
            <b className="font-semibold text-white/82">PostgreSQL</b> /{' '}
            <b className="font-semibold text-white/82">Redis</b> /{' '}
            <b className="font-semibold text-white/82">Object Storage</b>
          </p>
          <p className="sm:text-right">
            Runtime / <b className="font-semibold text-white/82">Django</b> /{' '}
            <b className="font-semibold text-white/82">DRF</b> /{' '}
            <b className="font-semibold text-white/82">Celery</b>
          </p>
        </div>
      </div>
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-16 max-w-6xl">
      <div className="absolute inset-x-10 top-12 h-40 rounded-full bg-[#b8f36f]/24 blur-3xl" />
      <div className="relative rounded-lg border border-[#dce7df] bg-white/64 p-3 shadow-[0_34px_110px_rgba(7,24,19,0.13)] backdrop-blur-xl">
        <div className="rounded-lg bg-[#041611] p-3 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]">
          <div className="grid gap-3 lg:grid-cols-[1.28fr_0.72fr]">
            <CoreSlab />
            <div className="grid gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
                <div className="flex items-center gap-2">
                  <Plug className="size-4 text-[#b8f36f]" />
                  <p className="font-mono text-xs font-semibold text-[#b8f36f] uppercase">
                    Plugin surface
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    'AI Scribe',
                    'TeleICU',
                    'Devices',
                    'Claims',
                    'Messaging',
                    'Analytics',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-xs font-semibold text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
                <div className="flex items-center gap-2">
                  <Layers3 className="size-4 text-[#b8f36f]" />
                  <p className="font-mono text-xs font-semibold text-[#b8f36f] uppercase">
                    Enabled solutions
                  </p>
                </div>
                <div className="mt-4 grid gap-2">
                  {[
                    'Hospital OS',
                    'Critical care',
                    'Palliative care',
                    'Clinic networks',
                    'Public health programs',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#061f19]/82 px-3 py-2 text-sm font-semibold text-white"
                    >
                      <BadgeCheck className="size-4 text-[#b8f36f]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32">
          <div className="mx-auto max-w-6xl text-center">
            <Subheading as="div">CARE Core</Subheading>
            <h1 className="mx-auto mt-5 max-w-6xl font-display text-6xl/[0.9] font-semibold tracking-normal text-balance text-[#05070c] sm:text-8xl/[0.84] md:text-9xl/[0.82]">
              The open healthcare OS starts with Core.
            </h1>
            <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/72 sm:text-2xl/8">
              CARE Core is the stable, standards-based operating layer behind
              CARE: shared healthcare primitives, APIs, permissions, audit
              trails, modules, and plugin surfaces that let many solutions run
              on one trusted foundation.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href="/product/apps-integrations">
                <span>See Core + plugins</span>
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="secondary" href="/developers">
                Developer docs
              </Button>
            </div>
          </div>

          <HeroVisual />

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-2 sm:grid-cols-5">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="rounded-lg border border-[#dfe6e2] bg-white/72 px-3 py-3 text-center text-sm font-semibold text-[#173d34] shadow-[0_10px_30px_rgba(7,24,19,0.04)] backdrop-blur-xl"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function ArchitectureSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <Subheading>Architecture</Subheading>
          <Heading as="h2" className="mt-3 max-w-4xl">
            A kernel for healthcare workflows.
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          CARE Core keeps the primitives stable so hospitals, public health
          programs, implementation partners, and AI tools can build on the same
          record, the same permissions, and the same integration surface.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {architecturePrinciples.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-7 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <item.icon className="size-6 text-[#12806a]" />
            <h3 className="mt-10 text-2xl/[1.05] font-semibold tracking-normal text-gray-950">
              {item.title}
            </h3>
            <p className="mt-4 text-sm/6 text-gray-600">{item.text}</p>
          </article>
        ))}
      </div>
    </Container>
  )
}

function PrimitivesSection() {
  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Subheading as="div">Core primitives</Subheading>
          <Heading as="h2" className="mt-3">
            Reusable building blocks, not one-off screens.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            Each CARE deployment can look different at the workflow layer while
            sharing the same data model, access model, audit trail, and API
            surface underneath.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {primitives.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-[#e0e8e3] bg-[#fbfcfb] p-5 transition hover:border-[#b9cbc2] hover:bg-white hover:shadow-[0_16px_42px_rgba(7,24,19,0.06)]"
            >
              <item.icon className="size-5 text-[#12806a]" />
              <p className="mt-8 text-base/5 font-semibold text-gray-950">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function DemoVideo({
  video,
  poster,
  title,
}: {
  video: string
  poster: string
  title: string
}) {
  return (
    <video
      aria-label={`CARE Core ${title} demo`}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      poster={poster}
      preload="metadata"
      className="aspect-[1280/868] w-full object-cover"
    >
      <source src={video} type="video/mp4" />
    </video>
  )
}

function ProductDemosSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div>
          <Subheading>Workflow modules</Subheading>
          <Heading as="h2" className="mt-3">
            The Core becomes visible where work happens.
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          CARE Core is not a blank data platform. It ships with real clinical,
          operational, and financial workflows that can be composed into HMIS,
          EMR, care coordination, and public health deployments.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {demos.map((demo) => (
          <article
            key={demo.title}
            className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_18px_58px_rgba(7,24,19,0.05)]"
          >
            <div className="overflow-hidden bg-[#eef5f0]">
              <DemoVideo
                video={demo.video}
                poster={demo.poster}
                title={demo.title}
              />
            </div>
            <div className="p-6">
              <demo.icon className="size-5 text-[#12806a]" />
              <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
                {demo.title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{demo.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}

function PluginArchitectureSection() {
  return (
    <div className="bg-[#f5f8f5] py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Subheading>Core + plugins</Subheading>
            <Heading as="h2" className="mt-3">
              Keep the foundation stable. Let solutions move faster.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              CARE Apps extend the platform for AI documentation, TeleICU,
              devices, messaging, claims, analytics, terminology, national
              rails, and deployment-specific workflows. The result is reuse
              without lock-in, and extension without fragmentation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/product/apps-integrations">
                Explore apps and integrations
              </Button>
              <Button variant="secondary" href="/product/care-ai">
                CARE AI
              </Button>
            </div>
          </div>
          <CorePluginCloud className="shadow-[0_34px_100px_rgba(5,46,36,0.22)]" />
        </div>
      </Container>
    </div>
  )
}

function StandardsSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Subheading dark>Standards layer</Subheading>
            <Heading as="h2" dark className="mt-3">
              Designed for interoperability before the first integration.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">
              CARE Core models healthcare data and workflows around open
              standards, open APIs, configurable terminology, and deployment
              patterns that institutions can own.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map(([name, detail]) => (
              <div
                key={name}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <Link className="size-5 text-[#b8f36f]" />
                <p className="mt-8 text-2xl/[1] font-semibold text-white">
                  {name}
                </p>
                <p className="mt-2 text-sm/5 text-white/52">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function DeploymentSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Subheading as="div">Deployment model</Subheading>
        <Heading as="h2" className="mt-3">
          Built for institutions that need ownership.
        </Heading>
        <p className="mt-6 text-lg/7 text-gray-600">
          CARE Core is open-source and self-hostable. Governments, hospitals,
          and implementation partners can deploy it locally, integrate it with
          their ecosystem, and keep improving the shared core.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {deploymentModes.map((mode) => (
          <article
            key={mode.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-7 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <mode.icon className="size-6 text-[#12806a]" />
            <h3 className="mt-10 text-2xl/[1.05] font-semibold text-gray-950">
              {mode.title}
            </h3>
            <p className="mt-4 text-sm/6 text-gray-600">{mode.text}</p>
          </article>
        ))}
      </div>
    </Container>
  )
}

function StewardshipSection() {
  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="rounded-lg border border-[#dfe6e2] bg-[#fbfcfb] p-8 shadow-[0_24px_80px_rgba(7,24,19,0.05)] sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Subheading>Foundation stewardship</Subheading>
              <Heading as="h2" className="mt-3">
                Open healthcare infrastructure needs more than code.
              </Heading>
            </div>
            <div>
              <p className="text-lg/7 text-gray-600">
                OHC Foundation stewards CARE Core so it can serve as durable
                public-good infrastructure: release discipline, security,
                documentation, standards alignment, implementation guidance,
                contributor pathways, and a neutral home for governments,
                hospitals, funders, developers, and implementation partners.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/foundation/governance">Governance model</Button>
                <Button variant="secondary" href="/support">
                  Fund the commons
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FinalSection() {
  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <Subheading as="div">Build on CARE Core</Subheading>
          <Heading as="h2" className="mt-3">
            One open foundation. Many healthcare systems.
          </Heading>
          <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
            Use CARE Core to deploy hospital systems, critical care networks,
            palliative care grids, clinic workflows, public health programs, and
            AI-assisted healthcare tools without starting from scratch.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/solutions/hospital-management">
              Explore CARE HMIS
            </Button>
            <Button variant="secondary" href="/contact">
              Talk to OHC
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default function CareCore() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <ArchitectureSection />
        <PrimitivesSection />
        <ProductDemosSection />
        <PluginArchitectureSection />
        <StandardsSection />
        <DeploymentSection />
        <StewardshipSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
