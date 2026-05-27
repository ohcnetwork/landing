import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  ChartNoAxesCombined,
  CreditCard,
  FlaskConical,
  MapPinned,
  PackageCheck,
  PawPrint,
  Stethoscope,
  Syringe,
  Workflow,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CARE Janwar - Open Source Animal Health and Veterinary EMR',
  description:
    'CARE Janwar is a CARE Core blueprint for veterinary clinics, public animal-health programs, field visits, vaccination, diagnostics, pharmacy, inventory, billing, dashboards, and AI-ready animal health records.',
  keywords: [
    'CARE Janwar',
    'open source veterinary EMR',
    'animal health software',
    'veterinary clinic software',
    'public animal health platform',
    'livestock health software',
    'veterinary hospital management system',
    'animal vaccination software',
    'One Health digital platform',
    'open source animal health EMR',
  ],
  alternates: {
    canonical: '/solutions/care-janwar',
  },
  openGraph: {
    title: 'CARE Janwar - Open Source Animal Health Infrastructure',
    description:
      'A CARE blueprint for veterinary clinics, public animal-health programs, field visits, vaccination, diagnostics, pharmacy, and dashboards.',
    url: '/solutions/care-janwar',
    images: [
      {
        url: '/logos/care-janwar.svg',
        width: 512,
        height: 512,
        alt: 'CARE Janwar logo',
      },
    ],
  },
  twitter: {
    title: 'CARE Janwar - Open Source Animal Health Infrastructure',
    description:
      'Veterinary and public animal-health workflows built on CARE Core.',
    images: ['/logos/care-janwar.svg'],
  },
}

const heroPills = [
  'Veterinary EMR',
  'Field visits',
  'Vaccination',
  'Diagnostics',
  'Pharmacy',
  'Program dashboards',
]

const subjectModel = [
  'Animal record',
  'Owner or keeper',
  'Species',
  'Breed',
  'Age and sex',
  'Facility',
  'Encounter',
  'Vaccination',
  'Medication',
  'Lab result',
  'Field visit',
  'Follow-up',
]

const workflowSteps = [
  [
    'Register',
    'Create animal, owner or keeper, facility, and location context.',
  ],
  [
    'Triage',
    'Capture reason for visit, species-specific observations, and risk flags.',
  ],
  [
    'Examine',
    'Record clinical notes, vitals, findings, diagnosis, and care advice.',
  ],
  [
    'Order',
    'Request lab tests, imaging direction, procedures, medications, or referrals.',
  ],
  [
    'Vaccinate',
    'Track vaccination schedules, doses, batch details, and reminders.',
  ],
  [
    'Dispense',
    'Connect prescriptions to pharmacy, inventory, and audit trails.',
  ],
  [
    'Follow up',
    'Schedule review, field visit, referral, or program-level action.',
  ],
  [
    'Report',
    'See clinical activity, stock, vaccination coverage, and program signals.',
  ],
]

const capabilities = [
  {
    title: 'Animal and owner records',
    text: 'Longitudinal animal records linked to owners, keepers, facilities, locations, identifiers, and visit history.',
    icon: PawPrint,
  },
  {
    title: 'Veterinary encounters',
    text: 'Outpatient, inpatient, observation, field-visit, and follow-up workflows with configurable clinical forms.',
    icon: Stethoscope,
  },
  {
    title: 'Vaccination workflows',
    text: 'Vaccination schedules, dose records, batch details, reminders, campaign reporting, and coverage dashboards.',
    icon: Syringe,
  },
  {
    title: 'Diagnostics and lab',
    text: 'Lab orders, sample tracking direction, diagnostic reports, results review, and structured observations.',
    icon: FlaskConical,
  },
  {
    title: 'Pharmacy and inventory',
    text: 'Medication requests, dispensing, substitutions, stock alerts, procurement, expiry review, and movement logs.',
    icon: PackageCheck,
  },
  {
    title: 'Billing and accounts',
    text: 'Service charges, invoices, receipts, payment capture, scheme direction, and daily financial reports.',
    icon: CreditCard,
  },
  {
    title: 'Field and mobile care',
    text: 'Mobile-first workflows for farm visits, field clinics, outbreak follow-up, community camps, and remote areas.',
    icon: MapPinned,
  },
  {
    title: 'Program dashboards',
    text: 'Track visits, disease categories, vaccination, stock, lab activity, geographic coverage, and operational load.',
    icon: ChartNoAxesCombined,
  },
]

const useCases = [
  {
    title: 'Veterinary clinics',
    text: 'Registration, consultations, prescriptions, vaccination, billing, follow-up, and pharmacy workflows.',
  },
  {
    title: 'Public animal hospitals',
    text: 'Facility operations, OPD load, pharmacy, diagnostics, reports, user roles, and program oversight.',
  },
  {
    title: 'Mobile and field teams',
    text: 'Field visits, location context, offline-friendly direction, vaccination camps, and follow-up lists.',
  },
  {
    title: 'Animal-health programs',
    text: 'Vaccination campaigns, disease surveillance direction, welfare workflows, labs, and district dashboards.',
  },
]

const careCoreBenefits = [
  'Adapted from CARE Core primitives',
  'Open-source and MIT-licensed',
  'Configurable forms and terminology',
  'Self-hostable for public-sector ownership',
  'Role-based access and audit trails',
  'Extensible with pharmacy, lab, billing, dashboards, and AI plugins',
]

const implementationSteps = [
  [
    'Model the care setting',
    'Define clinic, hospital, field, program, vaccination, lab, pharmacy, and reporting workflows.',
  ],
  [
    'Configure records and forms',
    'Set animal attributes, species and breed fields, encounter templates, vaccination forms, and follow-up logic.',
  ],
  [
    'Launch the core loop',
    'Start with registration, encounter, prescription, vaccination, billing, reports, and stock movement.',
  ],
  [
    'Scale by program',
    'Extend into field visits, campaign dashboards, diagnostics, procurement, surveillance direction, and AI support.',
  ],
]

const aiCapabilities = [
  {
    title: 'Field-note drafts',
    text: 'Convert field observations and spoken notes into structured draft records for review.',
  },
  {
    title: 'Record summaries',
    text: 'Summarize animal history, vaccinations, treatments, pending follow-ups, and recent diagnostics.',
  },
  {
    title: 'Program signals',
    text: 'Help program teams scan patterns, missing fields, overdue follow-ups, stock gaps, and unusual activity.',
  },
]

const outcomeGroups = [
  [
    'Care continuity',
    'repeat visits, follow-up completion, vaccination reminders',
  ],
  [
    'Program coverage',
    'field visits, campaign coverage, geography, facility activity',
  ],
  [
    'Operations',
    'stock levels, expiry, billing, lab turnaround, staff workload',
  ],
  [
    'Data quality',
    'complete records, coded fields, duplicate reduction, dashboard usage',
  ],
]

const faqs = [
  {
    question: 'What is CARE Janwar?',
    answer:
      'CARE Janwar is a CARE Core blueprint for veterinary and public animal-health workflows. It adapts CARE concepts such as records, encounters, forms, orders, pharmacy, inventory, billing, reports, access control, and dashboards for animal health settings.',
  },
  {
    question: 'Is CARE Janwar a separate platform?',
    answer:
      'It is best treated as a solution built on CARE Core, not a disconnected product. The deployment can use veterinary-specific records, forms, terminology, reports, and workflows while continuing to strengthen the shared CARE architecture.',
  },
  {
    question: 'Can it support public animal-health programs?',
    answer:
      'Yes. The blueprint can support vaccination campaigns, field visits, public animal hospitals, lab workflows, pharmacy and inventory, district dashboards, and program reporting when localized for a specific program.',
  },
  {
    question: 'Does this replace veterinary judgment?',
    answer:
      'No. CARE Janwar records and coordinates workflows. AI, where used, should remain assistive, reviewed, role-governed, and audit-aware.',
  },
]

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CARE Janwar',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    url: 'https://ohc.network/solutions/care-janwar',
    description:
      'CARE Janwar is an open-source animal health and veterinary EMR blueprint for clinics, field visits, vaccination, diagnostics, pharmacy, billing, inventory, and dashboards.',
    softwareRequirements: 'Web browser',
    license: 'https://opensource.org/license/mit/',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Animal and owner records',
      'Veterinary encounters and field visits',
      'Vaccination schedules and campaign workflows',
      'Diagnostics, pharmacy, inventory, and billing',
      'Program dashboards and reporting',
      'AI-ready structured animal-health records',
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Open Healthcare Network Foundation',
      url: 'https://ohc.network',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
]

function JanwarVisual() {
  return (
    <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
      <div className="absolute inset-x-8 top-8 bottom-0 rounded-full bg-[#12806a]/18 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#041611] p-3 shadow-[0_38px_120px_rgba(7,24,19,0.24)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(184,243,111,0.22),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.1),transparent_34%)]" />
        <div className="relative grid gap-3 lg:grid-cols-[0.82fr_1.1fr_0.82fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
              Veterinary record
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {subjectModel.slice(0, 8).map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-white/10 bg-[#061f19]/82 px-3 py-3 text-xs font-semibold text-white/76"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-[linear-gradient(145deg,rgba(119,220,154,0.48),rgba(6,76,57,0.88)_48%,rgba(3,27,21,0.98))] p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg border border-white/15 bg-white/12">
                  <PawPrint className="size-6 text-[#e8fff0]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-white/58 uppercase">
                    CARE solution
                  </p>
                  <p className="mt-1 text-3xl/[0.95] font-semibold">
                    CARE Janwar
                  </p>
                </div>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold text-white/70 sm:inline-flex">
                One Health ready
              </span>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-2">
              {['Clinic visit', 'Field camp', 'Vaccination', 'Lab report'].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.08] px-3 py-4 text-sm font-semibold text-white"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
            <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.08] p-4">
              <p className="text-sm font-semibold">Shared operational layer</p>
              <p className="mt-2 text-xs/5 text-white/54">
                Records, encounters, vaccination, pharmacy, labs, billing, field
                visits, and dashboards stay connected.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
              Program layer
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {subjectModel.slice(8).map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-white/10 bg-[#061f19]/82 px-3 py-3 text-xs font-semibold text-white/76"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-3 grid gap-2 rounded-lg border border-white/10 bg-white/[0.055] p-3 sm:grid-cols-4 lg:grid-cols-8">
          {workflowSteps.map(([step], index) => (
            <div
              key={step}
              className="flex items-center gap-2 rounded-md bg-[#061f19]/72 px-3 py-2 text-xs font-semibold text-white/72"
            >
              <span className="font-mono text-[#b8f36f]">
                {String(index + 1).padStart(2, '0')}
              </span>
              {step}
            </div>
          ))}
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
          <img
            src="/logos/care-janwar.svg"
            alt=""
            className="mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
          <Subheading as="div" className="mt-8">
            CARE Janwar
          </Subheading>
          <h1 className="mx-auto mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            Open infrastructure for animal health care.
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/74 sm:text-2xl/8">
            CARE Janwar adapts CARE Core for veterinary clinics, public
            animal-health programs, field visits, vaccination, diagnostics,
            pharmacy, billing, inventory, and program dashboards.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact">
              Discuss animal-health workflows
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button variant="secondary" href="/product/care-core">
              Explore CARE Core
            </Button>
          </div>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
            {heroPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[#dfe6e2] bg-white/74 px-3 py-1.5 text-sm font-semibold text-[#173d34] shadow-sm backdrop-blur-xl"
              >
                {pill}
              </span>
            ))}
          </div>
          <JanwarVisual />
        </div>
      </Container>
    </div>
  )
}

function OverviewSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
        <div>
          <Subheading>Why CARE Janwar</Subheading>
          <Heading as="h2" className="mt-3">
            Animal health needs records, workflows, stock, and program
            visibility.
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          Veterinary care is more than a visit note. It involves owners,
          keepers, locations, species, vaccination schedules, medicines, lab
          results, field teams, public programs, and operational reporting. CARE
          Janwar packages those workflows on the same open foundation.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-4">
        {useCases.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <Workflow className="size-5 text-[#12806a]" />
            <h3 className="mt-8 text-xl/6 font-semibold text-gray-950">
              {item.title}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">{item.text}</p>
          </article>
        ))}
      </div>
    </Container>
  )
}

function WorkflowSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <Subheading dark>Animal-health workflow</Subheading>
            <Heading as="h2" dark className="mt-3">
              From registration to field follow-up.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">
              CARE Janwar can connect clinic visits, vaccination, diagnostics,
              pharmacy, field teams, and dashboards through one longitudinal
              record.
            </p>
          </div>
          <div className="grid gap-3">
            {workflowSteps.map(([title, text], index) => (
              <article
                key={title}
                className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.055] p-5 sm:grid-cols-[56px_0.35fr_1fr] sm:items-start"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-white/10 font-mono text-xs font-semibold text-[#b8f36f]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="text-sm/6 text-white/58">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function CapabilitiesSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Subheading as="div">Product capabilities</Subheading>
        <Heading as="h2" className="mt-3">
          The building blocks for veterinary and public animal-health programs.
        </Heading>
        <p className="mt-6 text-lg/7 text-gray-600">
          CARE Janwar adapts the CARE operating model for clinical records,
          field workflows, vaccination, diagnostics, pharmacy, inventory,
          billing, and program dashboards.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <item.icon className="size-5 text-[#12806a]" />
            <h3 className="mt-8 text-xl/6 font-semibold text-gray-950">
              {item.title}
            </h3>
            <p className="mt-4 text-sm/6 text-gray-600">{item.text}</p>
          </article>
        ))}
      </div>
    </Container>
  )
}

function CoreSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-8 shadow-[0_24px_80px_rgba(7,24,19,0.05)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <Subheading>Built on CARE Core</Subheading>
            <Heading as="h2" className="mt-3">
              A specialized workflow should not require a separate foundation.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              CARE Janwar is a solution blueprint on top of the same open core:
              records, encounters, forms, users, roles, orders, tasks, reports,
              APIs, audit trails, and plugin-based extensions.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {careCoreBenefits.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-[#dfe6e2] bg-white p-4"
              >
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-[#12806a]" />
                <p className="text-sm/6 font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

function ImplementationSection() {
  return (
    <div className="bg-[#fbfcfb] py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Subheading>Implementation model</Subheading>
            <Heading as="h2" className="mt-3">
              Start with the care record. Expand into the public-health layer.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              Animal-health deployments can begin with clinic workflows and
              extend into field teams, vaccination campaigns, labs, inventory,
              and program dashboards.
            </p>
          </div>
          <div className="grid gap-3">
            {implementationSteps.map(([title, text], index) => (
              <article
                key={title}
                className="grid gap-4 rounded-lg border border-[#dfe6e2] bg-white p-5 shadow-[0_14px_44px_rgba(7,24,19,0.035)] sm:grid-cols-[52px_0.36fr_1fr] sm:items-start"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#eaf4ee] font-mono text-xs font-semibold text-[#12806a]">
                  0{index + 1}
                </div>
                <h3 className="font-semibold text-gray-950">{title}</h3>
                <p className="text-sm/6 text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function AiSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#052e24] p-8 text-white shadow-[0_34px_100px_rgba(5,46,36,0.18)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <Subheading dark>AI-ready animal health</Subheading>
            <Heading as="h2" dark className="mt-3">
              AI should assist field and clinical teams, with review.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">
              CARE Janwar can make structured animal-health data available for
              assistive workflows such as field-note drafting, summaries,
              missing-field prompts, stock review, and program monitoring.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {aiCapabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <BrainCircuit className="size-5 text-[#b8f36f]" />
                <h3 className="mt-8 text-xl/[1.05] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm/6 text-white/58">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

function OutcomesSection() {
  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Subheading as="div">Outcomes to measure</Subheading>
          <Heading as="h2" className="mt-3">
            Measure care continuity and public-health visibility.
          </Heading>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomeGroups.map(([title, text]) => (
            <article
              key={title}
              className="rounded-lg border border-[#dfe6e2] bg-[#fbfcfb] p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
            >
              <Activity className="size-5 text-[#12806a]" />
              <h3 className="mt-8 text-xl/6 font-semibold text-gray-950">
                {title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </div>
  )
}

function FaqSection() {
  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Subheading as="div">CARE Janwar FAQ</Subheading>
          <Heading as="h2" className="mt-3">
            Animal-health deployment, explained plainly.
          </Heading>
        </div>
        <div className="mx-auto mt-12 max-w-4xl divide-y divide-[#dfe6e2] rounded-lg border border-[#dfe6e2] bg-white">
          {faqs.map((item) => (
            <article key={item.question} className="p-6 sm:p-8">
              <h3 className="text-xl/6 font-semibold text-gray-950">
                {item.question}
              </h3>
              <p className="mt-4 text-sm/6 text-gray-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </div>
  )
}

function FinalSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Subheading as="div">Deploy CARE Janwar</Subheading>
        <Heading as="h2" className="mt-3">
          Build animal-health workflows on the same open foundation.
        </Heading>
        <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
          CARE Janwar gives implementation partners and public programs a
          starting point for veterinary records, field workflows, vaccination,
          diagnostics, pharmacy, inventory, billing, and program visibility.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="/contact">
            Start a workflow conversation
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button variant="secondary" href="/product/care-core">
            CARE Core
          </Button>
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
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default function CareJanwar() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <OverviewSection />
        <WorkflowSection />
        <CapabilitiesSection />
        <CoreSection />
        <ImplementationSection />
        <AiSection />
        <OutcomesSection />
        <FaqSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
