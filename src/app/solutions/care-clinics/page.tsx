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
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  FileText,
  FlaskConical,
  Hospital,
  PackageCheck,
  Smartphone,
  Stethoscope,
  Users,
  Workflow,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CARE Clinics - Open Source Clinic and Primary Care Software',
  description:
    'CARE Clinics is an open-source clinic and primary-care blueprint for appointments, registration, OPD encounters, prescriptions, investigations, pharmacy, billing, follow-up, reporting, and AI-ready outpatient workflows.',
  keywords: [
    'CARE Clinics',
    'open source clinic software',
    'primary care EMR',
    'clinic management software',
    'outpatient EMR',
    'open source OPD software',
    'FHIR clinic software',
    'primary healthcare software',
    'clinic appointment software',
    'clinic billing software',
    'AI-ready clinic EMR',
  ],
  alternates: {
    canonical: '/solutions/care-clinics',
  },
  openGraph: {
    title: 'CARE Clinics - Open Source Clinic and Primary Care Software',
    description:
      'A CARE blueprint for connected clinic workflows: appointments, encounters, prescriptions, investigations, pharmacy, billing, follow-up, and reports.',
    url: '/solutions/care-clinics',
    images: [
      {
        url: '/logos/care-clinics.svg',
        width: 512,
        height: 512,
        alt: 'CARE Clinics logo',
      },
    ],
  },
  twitter: {
    title: 'CARE Clinics - Open Source Clinic and Primary Care Software',
    description:
      'Connected outpatient workflows for clinics and primary care, built on CARE Core.',
    images: ['/logos/care-clinics.svg'],
  },
}

const heroPills = [
  'Appointments',
  'OPD encounters',
  'Prescriptions',
  'Investigations',
  'Billing',
  'Follow-up',
]

const clinicFlows = [
  {
    label: 'Patient flow',
    items: ['Book', 'Register', 'Consult', 'Follow up'],
    icon: Users,
  },
  {
    label: 'Clinical flow',
    items: ['Forms', 'Orders', 'Rx', 'Summary'],
    icon: Stethoscope,
  },
  {
    label: 'Operations flow',
    items: ['Queues', 'Stock', 'Billing', 'Reports'],
    icon: Hospital,
  },
]

const workflowSteps = [
  [
    'Book',
    'Create appointment slots, public facility pages, and visit queues.',
  ],
  [
    'Register',
    'Capture demographics, identifiers, contacts, and visit reason.',
  ],
  ['Consult', 'Record notes, forms, diagnoses, vitals, orders, and advice.'],
  ['Order', 'Request labs, imaging, procedures, medications, and follow-up.'],
  ['Dispense', 'Connect prescriptions to pharmacy, stock, and audit trails.'],
  [
    'Bill',
    'Capture services, payments, invoices, coverage, and reconciliation.',
  ],
  ['Follow up', 'Assign tasks, reminders, referrals, and next visit dates.'],
  [
    'Report',
    'Review activity, outcomes, quality, stock, and operational load.',
  ],
]

const capabilities = [
  {
    title: 'Appointments and queues',
    text: 'Facility pages, appointment slots, walk-ins, token direction, waiting lists, and service queues for busy outpatient settings.',
    icon: CalendarDays,
  },
  {
    title: 'Patient registration',
    text: 'Fast demographic capture, patient search, identifiers, contact details, consent direction, and longitudinal record linkage.',
    icon: Users,
  },
  {
    title: 'OPD encounters',
    text: 'Clinical notes, vitals, symptoms, diagnoses, observations, advice, follow-up dates, and configurable specialty forms.',
    icon: FileText,
  },
  {
    title: 'EMR form builder',
    text: 'Templates for primary care, specialty clinics, NCD follow-up, screening, immunization, and program-specific outpatient workflows.',
    icon: ClipboardList,
  },
  {
    title: 'Prescriptions',
    text: 'Medication requests, dosage instructions, substitutions, refill direction, dispensing handoff, and pharmacy audit trails.',
    icon: ClipboardCheck,
  },
  {
    title: 'Investigations',
    text: 'Lab orders, diagnostic reports, sample tracking direction, results review, and structured observations linked to the encounter.',
    icon: FlaskConical,
  },
  {
    title: 'Pharmacy and inventory',
    text: 'Clinic stock, dispensing, procurement, stock alerts, expiry review, item movement, and facility-level inventory visibility.',
    icon: PackageCheck,
  },
  {
    title: 'Billing and reports',
    text: 'Service charges, invoices, payments, schemes, receipts, daily summaries, operational dashboards, and accounting direction.',
    icon: CreditCard,
  },
  {
    title: 'Patient engagement',
    text: 'Patient portal direction, OTP login, appointment reminders, instructions, follow-up nudges, and communication requests.',
    icon: Smartphone,
  },
  {
    title: 'Analytics',
    text: 'Visit volume, diagnosis trends, follow-up completion, prescription patterns, stock movement, revenue, and service utilization.',
    icon: ChartNoAxesCombined,
  },
]

const clinicModels = [
  {
    title: 'Single clinic',
    text: 'A lightweight setup for outpatient registration, consultation, prescription, billing, reports, and patient follow-up.',
  },
  {
    title: 'Clinic network',
    text: 'Multi-site operations with shared configuration, facility-level reporting, role-based access, and common patient workflows.',
  },
  {
    title: 'Primary-care program',
    text: 'CARE forms and dashboards for screening, chronic-care follow-up, referrals, immunization, and public-health reporting.',
  },
  {
    title: 'Specialty outpatient center',
    text: 'Configurable specialty templates, investigations, pharmacy workflows, procedure billing, and follow-up pathways.',
  },
]

const coreDifferentiators = [
  'Built on CARE Core, not a standalone clinic app',
  'FHIR-aligned records and open APIs',
  'Configurable forms for different clinic types',
  'Self-hostable, cloud, hybrid, or on-premise',
  'Role-based access control and audit trails',
  'Extensible with labs, pharmacy, billing, ABDM, and AI plugins',
]

const aiCapabilities = [
  {
    title: 'Voice and form assist',
    text: 'Draft visit notes, fill structured forms, and reduce outpatient typing while keeping clinician review in the loop.',
  },
  {
    title: 'Doctor summary',
    text: 'Summarize the patient record, recent visits, medications, investigations, and follow-up needs before the consultation.',
  },
  {
    title: 'Care plan support',
    text: 'Draft follow-up instructions, task lists, patient guidance, and referral summaries from the encounter context.',
  },
]

const implementationSteps = [
  [
    'Configure clinic master data',
    'Facilities, departments, services, tariffs, staff roles, rooms, schedules, and catalogues.',
  ],
  [
    'Map workflows',
    'Registration, OPD, pharmacy, lab, billing, follow-up, reports, and patient communication.',
  ],
  [
    'Launch focused workflows',
    'Start with booking, registration, consultation, prescription, billing, and reports.',
  ],
  [
    'Extend with apps',
    'Add labs, pharmacy, inventory, ABDM, patient portal, messaging, analytics, and AI support as needed.',
  ],
]

const outcomeGroups = [
  [
    'Access',
    'appointment availability, walk-in wait time, follow-up completion',
  ],
  [
    'Clinical quality',
    'record completeness, investigation closure, prescription review',
  ],
  [
    'Operations',
    'queue load, pharmacy stock, billing turnaround, daily reporting',
  ],
  ['Continuity', 'repeat visits, referral completion, care-plan adherence'],
]

const faqs = [
  {
    question: 'What is CARE Clinics?',
    answer:
      'CARE Clinics is a clinic and primary-care deployment blueprint built on CARE Core. It supports appointments, registration, OPD encounters, prescriptions, investigations, pharmacy, billing, reports, patient engagement, and follow-up workflows.',
  },
  {
    question: 'Is this different from CARE HMIS?',
    answer:
      'CARE Clinics uses the same open core as CARE HMIS, but the workflow surface is tuned for outpatient and primary-care settings instead of a full hospital rollout with inpatient, emergency, and ward operations.',
  },
  {
    question: 'Can CARE Clinics support multiple clinic sites?',
    answer:
      'Yes. CARE can model facilities, users, roles, schedules, services, reports, and data access across a clinic network while still supporting facility-level operations.',
  },
  {
    question: 'Can implementation partners localize it?',
    answer:
      'Yes. Partners can configure forms, service catalogues, billing rules, reports, integrations, training, and deployment processes while contributing reusable improvements back to CARE Core.',
  },
]

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CARE Clinics',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    url: 'https://ohc.network/solutions/care-clinics',
    description:
      'CARE Clinics is an open-source clinic and primary-care blueprint for appointments, registration, OPD encounters, prescriptions, investigations, pharmacy, billing, reports, and follow-up workflows.',
    softwareRequirements: 'Web browser',
    license: 'https://opensource.org/license/mit/',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Clinic appointment scheduling and queues',
      'Patient registration and outpatient encounters',
      'Clinical notes, forms, prescriptions, and orders',
      'Lab, pharmacy, inventory, billing, and reports',
      'Patient engagement and follow-up workflows',
      'AI-ready structured outpatient records',
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

function ClinicVisual() {
  return (
    <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
      <div className="absolute inset-x-8 top-8 bottom-0 rounded-full bg-[#12806a]/18 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#041611] p-3 shadow-[0_38px_120px_rgba(7,24,19,0.24)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(184,243,111,0.22),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.1),transparent_34%)]" />
        <div className="relative grid gap-3 lg:grid-cols-[0.84fr_1.08fr_0.84fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
              Front desk
            </p>
            <div className="mt-4 space-y-2">
              {['Appointments', 'Patient search', 'Visit queue'].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-[#061f19]/82 px-3 py-3 text-sm font-semibold text-white"
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
                  <Stethoscope className="size-6 text-[#e8fff0]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-white/58 uppercase">
                    CARE solution
                  </p>
                  <p className="mt-1 text-3xl/[0.95] font-semibold">
                    CARE Clinics
                  </p>
                </div>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold text-white/70 sm:inline-flex">
                OPD + Primary care
              </span>
            </div>
            <div className="mt-7 grid gap-2 sm:grid-cols-3">
              {clinicFlows.map((flow) => (
                <div
                  key={flow.label}
                  className="rounded-lg border border-white/10 bg-white/[0.08] p-3"
                >
                  <flow.icon className="size-4 text-[#b8f36f]" />
                  <p className="mt-3 text-sm font-semibold">{flow.label}</p>
                  <div className="mt-3 space-y-1">
                    {flow.items.map((item) => (
                      <p
                        key={item}
                        className="rounded-md bg-white/[0.08] px-2 py-1.5 text-xs text-white/68"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
              Back office
            </p>
            <div className="mt-4 space-y-2">
              {['Pharmacy stock', 'Billing', 'Daily reports'].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-[#061f19]/82 px-3 py-3 text-sm font-semibold text-white"
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
            src="/logos/care-clinics.svg"
            alt=""
            className="mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
          <Subheading as="div" className="mt-8">
            CARE Clinics
          </Subheading>
          <h1 className="mx-auto mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            The open clinic OS for connected outpatient care.
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/74 sm:text-2xl/8">
            CARE Clinics gives primary-care centers, specialty clinics, and
            clinic networks a shared operating layer for appointments,
            encounters, prescriptions, investigations, billing, follow-up, and
            reports.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact">
              Plan a clinic deployment
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
          <ClinicVisual />
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
          <Subheading>Why CARE Clinics</Subheading>
          <Heading as="h2" className="mt-3">
            Clinics need continuity, not just faster data entry.
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          Clinics are often the first and most frequent point of care. CARE
          helps turn each visit into a structured record, a completed workflow,
          a clear follow-up, and a data point the system can learn from.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-4">
        {clinicModels.map((model) => (
          <article
            key={model.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <Workflow className="size-5 text-[#12806a]" />
            <h3 className="mt-8 text-xl/6 font-semibold text-gray-950">
              {model.title}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">{model.text}</p>
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
            <Subheading dark>Clinic workflow</Subheading>
            <Heading as="h2" dark className="mt-3">
              One outpatient loop from booking to follow-up.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">
              CARE Clinics connects the front desk, clinician, pharmacy, lab,
              billing counter, patient, and reporting team through the same
              patient timeline.
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
          The operating surface for a modern clinic.
        </Heading>
        <p className="mt-6 text-lg/7 text-gray-600">
          CARE Clinics is not a thin appointment tool. It connects clinical
          documentation, clinic operations, pharmacy, billing, reports, and
          follow-up on the same open platform.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
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
              Clinic workflows should strengthen the shared healthcare core.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              The clinic blueprint reuses CARE Core primitives for patients,
              encounters, forms, orders, medications, reports, access control,
              audit trails, APIs, and standards-aligned records.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {coreDifferentiators.map((item) => (
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

function AiSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <Subheading dark>AI-ready outpatient care</Subheading>
            <Heading as="h2" dark className="mt-3">
              AI should help the visit, not sit outside it.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">
              CARE Clinics gives AI the context it needs: the patient record,
              encounter, forms, medications, investigations, roles, and audit
              trail. AI drafts; clinicians review; CARE records.
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
      </Container>
    </div>
  )
}

function ImplementationSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Subheading>Implementation model</Subheading>
          <Heading as="h2" className="mt-3">
            Start small. Keep the architecture ready to grow.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            CARE Clinics can start with the essential outpatient loop and expand
            into labs, pharmacy, inventory, billing, patient engagement,
            analytics, and AI support.
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
  )
}

function OutcomesSection() {
  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Subheading as="div">Outcomes to measure</Subheading>
          <Heading as="h2" className="mt-3">
            A clinic system should improve care, operations, and continuity.
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
          <Subheading as="div">CARE Clinics FAQ</Subheading>
          <Heading as="h2" className="mt-3">
            Clinic deployment, explained plainly.
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
        <Subheading as="div">Deploy CARE Clinics</Subheading>
        <Heading as="h2" className="mt-3">
          Build a clinic workflow that can grow into a health system.
        </Heading>
        <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
          CARE helps clinics move from isolated software to connected outpatient
          infrastructure that can support patients, teams, programs, and
          partners over time.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="/contact">
            Start a deployment conversation
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button variant="secondary" href="/solutions/hospital-management">
            Compare CARE HMIS
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

export default function CareClinics() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <OverviewSection />
        <WorkflowSection />
        <CapabilitiesSection />
        <CoreSection />
        <AiSection />
        <ImplementationSection />
        <OutcomesSection />
        <FaqSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
