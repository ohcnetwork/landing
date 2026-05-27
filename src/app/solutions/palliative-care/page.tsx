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
  BarChart3,
  BrainCircuit,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  FileText,
  HandHeart,
  HeartPulse,
  Home,
  Hospital,
  Languages,
  Network,
  Route,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CARE Home Care Grid - Open Source Palliative Care Platform',
  description:
    'CARE powers palliative and home-based care grids for patient registration, care-team coordination, home visits, follow-ups, referrals, dashboards, AI-ready documentation, and statewide program visibility.',
  keywords: [
    'CARE palliative care',
    'CARE Home Care Grid',
    'open source palliative care platform',
    'home-based care software',
    'community-based palliative care',
    'palliative care patient registry',
    'palliative care dashboard',
    'palliative care volunteer coordination',
    'Kerala Palliative Care Grid',
    'Kerala CARE',
    'digital public infrastructure healthcare',
    'open healthcare infrastructure',
    'FHIR palliative care',
    'home visit workflow software',
    'community health worker software',
  ],
  alternates: {
    canonical: '/solutions/palliative-care',
  },
  openGraph: {
    title: 'CARE Home Care Grid - Open Palliative Care Infrastructure',
    description:
      'A CARE-powered operating layer for home-based and community-based palliative care.',
    url: '/solutions/palliative-care',
    images: [
      {
        url: '/logos/care-palliative.svg',
        width: 512,
        height: 512,
        alt: 'CARE Palliative logo',
      },
    ],
  },
  twitter: {
    title: 'CARE Home Care Grid - Open Palliative Care Infrastructure',
    description:
      'Coordinate vulnerable patients, home visits, care teams, follow-ups, referrals, dashboards, and AI-ready records with CARE.',
    images: ['/logos/care-palliative.svg'],
  },
}

const heroPills = [
  'Patient registry',
  'Home visits',
  'Care teams',
  'Follow-ups',
  'Dashboards',
  'AI-ready records',
]

const gridColumns = [
  {
    label: 'Community layer',
    items: [
      {
        title: 'Patient home',
        detail: 'needs, caregiver, locality',
        icon: Home,
      },
      {
        title: 'Field teams',
        detail: 'workers, volunteers, nurses',
        icon: Users,
      },
      {
        title: 'Facilities',
        detail: 'primary care, hospitals, referrals',
        icon: Hospital,
      },
    ],
  },
  {
    label: 'Program layer',
    items: [
      {
        title: 'Visit queue',
        detail: 'today, due, overdue',
        icon: CalendarCheck,
      },
      {
        title: 'Escalations',
        detail: 'doctor review, referral, supplies',
        icon: Route,
      },
      {
        title: 'Coverage view',
        detail: 'ward, district, state',
        icon: BarChart3,
      },
    ],
  },
]

const careCorePrimitives = [
  'Patients',
  'Facilities',
  'Users',
  'Roles',
  'Forms',
  'Tasks',
  'Referrals',
  'Care plans',
  'Dashboards',
  'APIs',
  'Audit trails',
  'FHIR-aligned records',
]

const workflowSteps = [
  ['Identify', 'Find patients who need continuous support.'],
  ['Register', 'Create a shared record with local context.'],
  ['Assess', 'Capture clinical, functional, and social needs.'],
  ['Assign', 'Link the patient to a care team and facility.'],
  ['Visit', 'Document home care at the point of service.'],
  ['Follow up', 'Schedule the next action and owner.'],
  ['Escalate', 'Route medical, referral, or supply needs.'],
  ['Monitor', 'See coverage, gaps, and program quality.'],
]

const capabilityGroups = [
  {
    title: 'Patient registry',
    text: 'A shared registry for vulnerable patients, families, caregivers, addresses, facility linkage, care needs, risk status, and local body mapping.',
    icon: ClipboardList,
  },
  {
    title: 'Home visit workflows',
    text: 'Mobile-first workflows for visit lists, vitals, symptoms, nursing needs, medicine needs, caregiver concerns, notes, and next visit dates.',
    icon: Home,
  },
  {
    title: 'Care-team coordination',
    text: 'Assign field workers, nurses, doctors, volunteers, NGOs, facilities, and follow-up owners without losing accountability across the network.',
    icon: Network,
  },
  {
    title: 'Structured records',
    text: 'Every visit, assessment, referral, note, follow-up, and care plan becomes part of the longitudinal CARE record.',
    icon: FileText,
  },
  {
    title: 'Dashboards and coverage',
    text: 'Track registered patients, overdue visits, high-risk patients, referral status, workload, district coverage, and service gaps.',
    icon: BarChart3,
  },
  {
    title: 'Volunteer and NGO coordination',
    text: 'Support registration, role mapping, training status, patient assignment, activity tracking, and collaboration with care teams.',
    icon: HandHeart,
  },
  {
    title: 'Referral and escalation',
    text: 'Move from home care to doctor review, facility referral, specialist palliative care, teleconsultation, or supply support when risk increases.',
    icon: Route,
  },
  {
    title: 'Care planning',
    text: 'Turn problems, goals, interventions, home-care tasks, follow-up schedules, caregiver instructions, and review cycles into action.',
    icon: ClipboardCheck,
  },
]

const differentiators = [
  'Open-source and public-good oriented',
  'Built on CARE Core, not a one-off app',
  'FHIR-aligned structured patient records',
  'Mobile-first frontline workflows',
  'Designed for government and voluntary-sector networks',
  'Dashboards for live program visibility',
  'Role-based access and audit trails',
  'Ready for AI-assisted documentation and summaries',
]

const implementationSteps = [
  {
    title: 'Map the care model',
    text: 'Understand patient identification, field teams, facilities, NGOs, referral routes, home-visit forms, training, and reporting needs.',
  },
  {
    title: 'Pilot one geography',
    text: 'Configure forms, dashboards, roles, visit workflows, and support processes in one district, network, or program area.',
  },
  {
    title: 'Train by role',
    text: 'Prepare field workers, nurses, doctors, volunteers, facility admins, coordinators, and program teams with workflow-specific training.',
  },
  {
    title: 'Scale with playbooks',
    text: 'Reuse deployment checklists, training packs, dashboard packs, data-quality reviews, support models, and governance rhythms.',
  },
]

const proofStats = [
  ['1,300+', 'primary care centers'],
  ['1,300+', 'NGOs and care organizations'],
  ['330,000+', 'registered patients'],
  ['1.3M+', 'home-care consultations'],
  ['12,000+', 'daily users'],
]

const aiUseCases = [
  {
    title: 'Voice-native visit notes',
    text: 'Help nurses and field teams document in local languages with review before saving.',
    icon: Languages,
  },
  {
    title: 'Patient summaries',
    text: 'Summarize long histories, recent visits, open tasks, and follow-up needs before a home visit.',
    icon: BrainCircuit,
  },
  {
    title: 'Follow-up drafts',
    text: 'Draft care plans, caregiver instructions, referral summaries, and next-step checklists.',
    icon: ClipboardCheck,
  },
]

const replicationAssets = [
  'Deployment blueprint',
  'Workflow templates',
  'Form templates',
  'Dashboard indicators',
  'Training materials',
  'Volunteer role model',
  'Security baseline',
  'Localization guide',
]

const faqs = [
  {
    question: 'What is CARE Home Care Grid?',
    answer:
      'CARE Home Care Grid is the CARE-powered operating layer for home-based and community-based care programs. It supports patient registration, care-team assignment, home visits, structured documentation, follow-ups, referrals, dashboards, and program visibility.',
  },
  {
    question: 'Is CARE only for palliative care?',
    answer:
      'No. The same CARE Core primitives can support palliative care, elderly care, NCD follow-up, post-discharge follow-up, oncology follow-up, disability and rehabilitation programs, and other longitudinal community-care workflows.',
  },
  {
    question: 'How does CARE support field teams?',
    answer:
      'CARE gives field teams mobile-first workflows for visit lists, assessments, notes, symptoms, vitals, medicine needs, caregiver concerns, follow-up dates, and escalation requests, while keeping the patient record connected to facilities and program dashboards.',
  },
  {
    question: 'How is Kerala relevant to this page?',
    answer:
      'Kerala is the reference deployment that shows the model at population scale. The page focuses on CARE as reusable infrastructure, with Kerala used as proof that home-based care can be coordinated through a shared digital grid.',
  },
  {
    question: 'Can implementation partners deploy a Home Care Grid?',
    answer:
      'Yes. CARE provides the open core, workflows, APIs, forms, roles, dashboards, and implementation patterns. Partners can localize the care model, train users, integrate local systems, and contribute improvements back to the shared core.',
  },
]

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CARE Home Care Grid',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    url: 'https://ohc.network/solutions/palliative-care',
    description:
      'CARE Home Care Grid supports palliative and home-based care programs with patient registration, home visits, care-team coordination, referrals, dashboards, structured records, and AI-ready workflows.',
    softwareRequirements: 'Web browser',
    license: 'https://opensource.org/license/mit/',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Palliative care patient registry',
      'Home visit workflows',
      'Care-team and volunteer coordination',
      'Follow-up and referral management',
      'Program dashboards and coverage monitoring',
      'FHIR-aligned structured records',
      'AI-ready documentation and summarization workflows',
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

function CareGridVisual() {
  return (
    <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
      <div className="absolute inset-x-10 top-8 bottom-0 rounded-full bg-[#12806a]/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#041611] p-3 shadow-[0_38px_120px_rgba(7,24,19,0.24)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(184,243,111,0.23),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.1),transparent_34%)]" />
        <div className="relative grid gap-3 lg:grid-cols-[0.78fr_1.1fr_0.78fr]">
          {gridColumns.map((column) => (
            <div
              key={column.label}
              className="rounded-lg border border-white/10 bg-white/[0.055] p-4"
            >
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                {column.label}
              </p>
              <div className="mt-4 space-y-2">
                {column.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#061f19]/82 p-3"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <item.icon className="size-4 text-[#b8f36f]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs/5 text-white/48">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="order-first rounded-lg border border-white/12 bg-[linear-gradient(145deg,rgba(119,220,154,0.48),rgba(6,76,57,0.88)_48%,rgba(3,27,21,0.98))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)] lg:order-none">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg border border-white/15 bg-white/12">
                  <HeartPulse className="size-6 text-[#e8fff0]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-white/58 uppercase">
                    CARE solution
                  </p>
                  <p className="mt-1 text-3xl/[0.95] font-semibold text-white">
                    Home Care Grid
                  </p>
                </div>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold text-white/70 sm:inline-flex">
                Powered by CARE Core
              </span>
            </div>

            <div className="mt-7 rounded-lg border border-white/12 bg-white/[0.08] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Shared patient timeline
                  </p>
                  <p className="mt-1 text-xs/5 text-white/52">
                    Every visit, task, referral, and follow-up in one record.
                  </p>
                </div>
                <BadgeCheck className="size-5 shrink-0 text-[#b8f36f]" />
              </div>
              <div className="mt-5 grid grid-cols-4 gap-1.5">
                {['Need', 'Visit', 'Task', 'Plan'].map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.08] px-2 py-3 text-center text-xs font-semibold text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {['Forms', 'Roles', 'Tasks', 'Dashboards'].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.07] px-3 py-3 text-sm font-semibold text-white"
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
            src="/logos/care-palliative.svg"
            alt=""
            className="mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
          <Subheading as="div" className="mt-8">
            CARE Home Care Grid
          </Subheading>
          <h1 className="mx-auto mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            Care is local. Coordination is statewide.
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/74 sm:text-2xl/8">
            CARE powers palliative and home-based care grids that help health
            systems know every vulnerable patient, coordinate local care teams,
            document home visits, track follow-ups, and monitor coverage across
            communities.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href="/contact"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Build a Home Care Grid</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/product/care-core"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Explore CARE Core</span>
              <ArrowRight className="size-4" />
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
          <CareGridVisual />
        </div>
      </Container>
    </div>
  )
}

function OperatingLayerSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
        <div>
          <Subheading>Why CARE</Subheading>
          <Heading as="h2" className="mt-3">
            Home-based care is a coordination problem.
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          Palliative care happens through relationships over time: patients,
          caregivers, volunteers, nurses, doctors, facilities, NGOs, and program
          teams working together. CARE gives that network a shared operating
          layer without turning care into a narrow registry or a standalone app.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_24px_80px_rgba(7,24,19,0.05)] sm:p-8">
          <Subheading as="div">CARE Core primitives</Subheading>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {careCorePrimitives.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#e3ebe6] bg-[#fbfcfb] px-4 py-3 text-sm font-semibold text-gray-950"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-[#dfe6e2] bg-[#052e24] p-6 text-white shadow-[0_24px_80px_rgba(5,46,36,0.16)] sm:p-8">
          <Workflow className="size-7 text-[#b8f36f]" />
          <h3 className="mt-10 text-3xl/[1] font-semibold">
            Not another vertical system.
          </h3>
          <p className="mt-5 text-sm/6 text-white/62">
            The same patient may move between home care, primary care,
            hospitals, pharmacy, diagnostics, TeleICU, and follow-up. CARE keeps
            those workflows connected on one open foundation.
          </p>
        </div>
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
            <Subheading dark>A care grid around every patient</Subheading>
            <Heading as="h2" dark className="mt-3">
              From first identification to the next safe follow-up.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">
              CARE supports the complete loop of community-based care: who needs
              help, who is responsible, what happened at the visit, what must
              happen next, and where the system is falling behind.
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
          The pieces a home-care network actually needs.
        </Heading>
        <p className="mt-6 text-lg/7 text-gray-600">
          CARE turns home visits into structured continuity of care: records,
          teams, visits, referrals, tasks, dashboards, and improvement loops.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilityGroups.map((item) => (
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

function ProofSection() {
  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <Subheading>Reference deployment</Subheading>
            <Heading as="h2" className="mt-3">
              CARE has already been tested at population scale.
            </Heading>
          </div>
          <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
            Kerala&apos;s palliative-care grid is the strongest proof point:
            CARE supports a statewide care-coordination model across patients,
            home visits, care teams, voluntary organizations, public facilities,
            and program dashboards.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#fbfcfb] shadow-[0_24px_80px_rgba(7,24,19,0.06)] sm:grid-cols-2 lg:grid-cols-5">
          {proofStats.map(([value, label]) => (
            <div
              key={label}
              className="border-[#dfe6e2] p-6 sm:p-8 lg:border-l first:lg:border-l-0 [&:not(:first-child)]:border-t sm:[&:not(:first-child)]:border-t-0"
            >
              <p className="text-4xl/[0.95] font-semibold tracking-normal text-gray-950 sm:text-5xl/[0.9]">
                {value}
              </p>
              <p className="mt-3 text-sm/6 font-medium text-gray-600">
                {label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-4xl text-xs/5 text-gray-500">
          Deployment snapshot for CARE-powered home and palliative-care
          programs.
        </p>
      </Container>
    </div>
  )
}

function DifferentiatorSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-8 shadow-[0_24px_80px_rgba(7,24,19,0.05)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <Subheading>Built on CARE Core</Subheading>
            <Heading as="h2" className="mt-3">
              Reusable infrastructure, not a one-off palliative module.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              CARE gives governments, hospitals, NGOs, and implementation
              partners a common foundation for home-based care that can be
              adapted locally and reused across programs.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {differentiators.map((item) => (
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
              Pilot a district. Train the network. Scale the grid.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              CARE deployments can begin with a focused geography and expand
              through repeatable workflows, training packs, dashboards, and
              data-quality routines.
            </p>
          </div>
          <div className="grid gap-3">
            {implementationSteps.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 rounded-lg border border-[#dfe6e2] bg-white p-5 shadow-[0_14px_44px_rgba(7,24,19,0.035)] sm:grid-cols-[52px_0.36fr_1fr] sm:items-start"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#eaf4ee] font-mono text-xs font-semibold text-[#12806a]">
                  0{index + 1}
                </div>
                <h3 className="font-semibold text-gray-950">{item.title}</h3>
                <p className="text-sm/6 text-gray-600">{item.text}</p>
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
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Subheading dark>CARE AI for home care</Subheading>
            <Heading as="h2" dark className="mt-3">
              Reduce documentation burden without reducing accountability.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">
              AI belongs inside the care workflow, on top of trusted records,
              roles, forms, and audit trails. In home-based care, CARE AI can
              help field teams document faster and help program teams see what
              needs attention.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {aiUseCases.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <item.icon className="size-5 text-[#b8f36f]" />
                <h3 className="mt-8 text-xl/[1.05] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm/6 text-white/58">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-4 sm:grid-cols-4">
          {['AI drafts', 'Humans decide', 'CARE records', 'Systems learn'].map(
            (item) => (
              <div
                key={item}
                className="rounded-md bg-white/[0.08] px-4 py-3 text-center text-sm font-semibold text-white/82"
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    </Container>
  )
}

function ReplicationSection() {
  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <Subheading>Reusable Home Care Grid</Subheading>
            <Heading as="h2" className="mt-3">
              One reference model, many care programs.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              CARE&apos;s home-care architecture can support palliative care,
              elderly care, NCD follow-up, oncology follow-up, post-discharge
              monitoring, disability care, rehabilitation, and other programs
              that depend on continuity outside the facility.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {replicationAssets.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-[#dfe6e2] bg-[#fbfcfb] p-4"
              >
                <ShieldCheck className="size-5 shrink-0 text-[#12806a]" />
                <p className="font-semibold text-gray-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function OutcomesSection() {
  const outcomeGroups = [
    ['Coverage', 'registered patients, assigned teams, local body coverage'],
    ['Continuity', 'visits completed, overdue patients, follow-up closure'],
    ['Quality', 'documentation completeness, referral completion, review time'],
    ['Equity', 'coverage gaps across geographies and vulnerable groups'],
  ]

  return (
    <Container className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Subheading as="div">Outcomes to measure</Subheading>
        <Heading as="h2" className="mt-3">
          Measure continuity, not just registrations.
        </Heading>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {outcomeGroups.map(([title, text]) => (
          <article
            key={title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
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
  )
}

function FaqSection() {
  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Subheading as="div">Home Care Grid FAQ</Subheading>
          <Heading as="h2" className="mt-3">
            Open palliative care infrastructure, explained plainly.
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
        <Subheading as="div">Deploy CARE for home-based care</Subheading>
        <Heading as="h2" className="mt-3">
          Build a care grid for every vulnerable patient.
        </Heading>
        <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
          CARE helps health systems move from fragmented home-visit programs to
          coordinated, measurable, and compassionate care networks.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="/contact">
            Start a deployment conversation
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button variant="secondary" href="/product/care-ai">
            Explore CARE AI
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

export default function PalliativeCare() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <OperatingLayerSection />
        <WorkflowSection />
        <CapabilitiesSection />
        <ProofSection />
        <DifferentiatorSection />
        <ImplementationSection />
        <AiSection />
        <ReplicationSection />
        <OutcomesSection />
        <FaqSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
