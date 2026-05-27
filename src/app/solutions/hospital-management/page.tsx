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
  Bed,
  BrainCircuit,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardList,
  CreditCard,
  Database,
  FileText,
  FlaskConical,
  GitBranch,
  Hospital,
  LockKeyhole,
  PackageCheck,
  PanelsTopLeft,
  Plug,
  Smartphone,
  Stethoscope,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CARE HMIS - Open Source Hospital Information System (HIS)',
  description:
    'CARE HMIS is an open-source, FHIR R5-aligned Hospital Information System (HIS/HMIS) for OPD, IPD, emergency, labs, pharmacy, billing, inventory, reporting, and AI-ready clinical workflows.',
  keywords: [
    'CARE HMIS',
    'open source HIS',
    'open source HMIS',
    'hospital information system',
    'hospital management information system',
    'open source EMR',
    'FHIR hospital system',
    'hospital workflows',
    'healthcare interoperability',
    'AI-ready hospital information system',
  ],
  alternates: {
    canonical: '/solutions/hospital-management',
  },
  openGraph: {
    title: 'CARE HMIS - Open Source Hospital Information System',
    description:
      'A modular Hospital Information System connecting patient flow, clinical information, hospital operations, revenue workflows, and AI-ready data.',
    url: '/solutions/hospital-management',
    images: [
      {
        url: '/screenshots/hmis-encounter-overview.jpeg',
        width: 1600,
        height: 900,
        alt: 'CARE HMIS encounter overview screen',
      },
    ],
  },
  twitter: {
    title: 'CARE HMIS - Open Source Hospital Information System',
    description:
      'Open-source HIS/HMIS for hospitals that need connected OPD, IPD, emergency, lab, pharmacy, billing, reporting, and AI-ready workflows.',
    images: ['/screenshots/hmis-encounter-overview.jpeg'],
  },
}

const proofStats = [
  ['100+', 'hospitals'],
  ['5', 'deployment states'],
  ['FHIR R5', 'standards-first core'],
  ['MIT', 'open-source licence'],
]

const problemPoints = [
  {
    title: 'Discrete fragments',
    text: 'Registration, labs, medications, discharge, and billing live as separate events instead of one care story.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Disconnected workflows',
    text: 'Orders, results, prescriptions, stock, and dispensing move through silos with no single operational flow.',
    icon: GitBranch,
  },
  {
    title: 'Digital paper',
    text: 'Forms were digitized without redesigning the work around them, so software becomes one more burden.',
    icon: FileText,
  },
  {
    title: 'Lost revenue',
    text: 'Unbilled services, missed charges, and manual invoicing leave money on the table every day.',
    icon: CreditCard,
  },
]

const hospitalFlows = [
  {
    label: 'Patient flow',
    detail:
      'Registration, appointments, OPD, emergency, IPD, ICU, discharge, and follow-up.',
  },
  {
    label: 'Information flow',
    detail:
      'Encounters, orders, results, records, decisions, and longitudinal clinical context.',
  },
  {
    label: 'Revenue flow',
    detail:
      'Charges, invoices, scheme coverage, payments, and reconciliation as care is delivered.',
  },
]

const encounterTypes = [
  ['Outpatient', 'Clinical visits linked to the patient record.'],
  ['Emergency', 'Priority care and emergency workflows.'],
  ['Inpatient', 'Admissions, rounds, orders, notes, and discharge.'],
  ['Observation', 'Short-stay monitoring with continuity.'],
  ['Home health', 'Mobile documentation and care plans.'],
  ['Virtual care', 'Remote consultation with structured records.'],
]

const coreModules = [
  {
    title: 'Clinical data capture',
    text: 'Structured forms, symptoms, conditions, orders, medication requests, and observations.',
    icon: Stethoscope,
  },
  {
    title: 'Scheduling',
    text: 'Appointment calendars, public facility pages, doctor availability, and open slots.',
    icon: CalendarDays,
  },
  {
    title: 'Queues',
    text: 'Doctor, department, pharmacy, billing, and custom service queues for high-volume settings.',
    icon: Users,
  },
  {
    title: 'EMR form builder',
    text: 'Configurable department forms mapped to interoperable clinical resources.',
    icon: ClipboardList,
  },
  {
    title: 'Bed management',
    text: 'Live locations, beds, admission status, hierarchy, and availability.',
    icon: Bed,
  },
  {
    title: 'Administrative hierarchy',
    text: 'Facility, district, state, program, and national structures with data segregation.',
    icon: Hospital,
  },
  {
    title: 'RBAC and audit',
    text: 'Granular role-based access control for doctors, nurses, admins, and health workers.',
    icon: LockKeyhole,
  },
  {
    title: 'Dynamic reports',
    text: 'Treatment summaries, discharge summaries, dashboards, and custom operational reports.',
    icon: ChartNoAxesCombined,
  },
]

const operatingModules = [
  {
    title: 'Lab and diagnostics / LMIS',
    text: 'Clinicians order tests, labs track samples, results attach to the record, and observations use standard codes and units.',
    icon: FlaskConical,
    video: '/videos/his/lmis.mp4',
    poster: '/videos/his/lmis-poster.jpg',
  },
  {
    title: 'Pharmacy and inventory',
    text: 'Prescriptions flow into dispensing, substitutions, stock movement, alerts, procurement, and supply chain workflows.',
    icon: PackageCheck,
    video: '/videos/his/pharmacy.mp4',
    poster: '/videos/his/pharmacy-poster.jpg',
  },
  {
    title: 'Billing and accounting',
    text: 'Cash, insurance, government schemes, invoices, payment capture, and reconciliation connect back to care activity.',
    icon: CreditCard,
    video: '/videos/his/billing.mp4',
    poster: '/videos/his/billing-poster.jpg',
  },
]

const workflowVideos = [
  {
    title: 'Bed management',
    text: 'Track beds, locations, admissions, discharge states, and live availability across hospital hierarchies.',
    video: '/videos/his/bed-management.mp4',
    poster: '/videos/his/bed-management-poster.jpg',
    icon: Bed,
  },
  {
    title: 'Clinical drawings',
    text: 'Capture drawings, body maps, annotations, and visual clinical context directly in the patient record.',
    video: '/videos/his/clinical-drawings.mp4',
    poster: '/videos/his/clinical-drawings-poster.jpg',
    icon: FileText,
  },
  {
    title: 'Dynamic reports',
    text: 'Generate operational and clinical reports from shared encounters, forms, orders, and care activity.',
    video: '/videos/his/dynamic-reports.mp4',
    poster: '/videos/his/dynamic-reports-poster.jpg',
    icon: ChartNoAxesCombined,
  },
]

const standards = [
  ['FHIR R5', 'clinical resources and APIs'],
  ['SNOMED CT', 'clinical terminology'],
  ['LOINC', 'labs and observations'],
  ['UCUM', 'units of measure'],
  ['ICD-10', 'classification support'],
  ['BYOT', 'bring your own terminology'],
]

const apps = [
  ['ABDM', 'M1, M2, M3 and identity workflows through plugins.'],
  ['TeleICU', 'Camera, vitals, remote review, and critical care extension.'],
  ['Care Scribe', 'Multilingual voice fill and assistive documentation.'],
  ['Token display', 'Queue and token screens for TVs and public counters.'],
  ['Labs and devices', 'Orders, results, PACS, and bedside integrations.'],
  [
    'Claims and messaging',
    'HCX, reminders, analytics, and patient communication.',
  ],
]

const hisLayers = [
  {
    title: 'Clinical record',
    text: 'Patients, encounters, notes, diagnoses, orders, observations, medications, care plans, and discharge summaries.',
  },
  {
    title: 'Hospital operations',
    text: 'Appointments, queues, beds, wards, departments, staff roles, stock movement, reports, and dashboards.',
  },
  {
    title: 'Revenue cycle',
    text: 'Charge capture, invoices, payments, scheme coverage, claims direction, reconciliation, and accounting integration.',
  },
  {
    title: 'Interoperability layer',
    text: 'FHIR-aligned APIs, terminology bindings, ABDM workflows, device integrations, and plugin-based extensions.',
  },
]

const departmentCoverage = [
  ['Front desk', 'Registration, demographics, patient search, appointments, queues, and visit creation.'],
  ['OPD and clinics', 'Consultations, notes, prescriptions, investigations, follow-up, referrals, and summaries.'],
  ['Emergency', 'Rapid registration, triage direction, emergency encounters, orders, observation, and handover.'],
  ['Inpatient wards', 'Admissions, bed allocation, rounds, nursing updates, orders, discharge, and transfers.'],
  ['ICU and critical care', 'TeleICU extension, vitals/device direction, remote review, video, and escalation workflows.'],
  ['Laboratory', 'Lab orders, specimen tracking direction, results, diagnostic reports, and LOINC/UCUM alignment.'],
  ['Pharmacy', 'Prescriptions, dispensing, substitutions, stock alerts, procurement, inventory, and audit trails.'],
  ['Billing and accounts', 'Service charges, invoices, payments, insurance/scheme support, and reconciliation workflows.'],
  ['Administration', 'Facilities, departments, users, roles, access control, audit logs, reports, and operational analytics.'],
]

const implementationNeeds = [
  ['Master data', 'Facilities, departments, rooms, beds, services, staff, user roles, tariffs, and drug catalogues.'],
  ['Workflow mapping', 'OPD, emergency, IPD, pharmacy, lab, billing, and discharge flows aligned to local practice.'],
  ['Forms and terminology', 'Configurable EMR forms, FHIR resources, ValueSets, SNOMED CT, LOINC, UCUM, and ICD-10.'],
  ['Integrations', 'ABDM, devices, lab systems, accounting tools, messaging, analytics, payments, and partner plugins.'],
  ['Security model', 'Role-based access, audit trails, hosting choices, data ownership, backup, and operational controls.'],
  ['Adoption plan', 'Training, phased rollout, support desk, reporting cadence, feedback loops, and release upgrades.'],
]

const faqs = [
  {
    question: 'What is CARE HMIS?',
    answer:
      'CARE HMIS is an open-source Hospital Information System and Hospital Management Information System built around CARE Core. It connects clinical records, hospital operations, billing, reporting, integrations, and AI-ready workflows on one standards-based platform.',
  },
  {
    question: 'Is CARE HMIS an EMR or a full HIS?',
    answer:
      'CARE HMIS includes EMR capabilities, but it is broader than an electronic medical record. It supports patient registration, OPD, emergency, inpatient care, labs, pharmacy, inventory, billing, reporting, access control, integrations, and deployment workflows.',
  },
  {
    question: 'Can CARE HMIS be self-hosted?',
    answer:
      'Yes. CARE is designed for self-hosted, cloud, hybrid, and on-premise deployment models, so hospitals and governments can own their infrastructure and avoid software licence lock-in.',
  },
  {
    question: 'Which hospital departments can CARE HMIS support?',
    answer:
      'CARE HMIS can support front desk, OPD, emergency, inpatient wards, ICU and TeleICU workflows, laboratory, pharmacy, inventory, billing, administration, analytics, and patient-facing workflows.',
  },
  {
    question: 'How does CARE HMIS support interoperability?',
    answer:
      'CARE HMIS is standards-first, with FHIR R5-aligned resources, open APIs, terminology support for SNOMED CT, LOINC, UCUM and ICD-10, and plugin-based integrations for national rails, devices, labs, claims, messaging, and analytics.',
  },
  {
    question: 'How is AI used in CARE HMIS?',
    answer:
      'AI is assistive and human-in-the-loop. CARE HMIS can support voice fill, documentation drafts, document understanding, summaries, and decision-support workflows on top of structured clinical data and audit-aware processes.',
  },
]

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CARE HMIS',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    url: 'https://ohc.network/solutions/hospital-management',
    description:
      'CARE HMIS is an open-source Hospital Information System for connected clinical, operational, financial, reporting, and AI-ready hospital workflows.',
    softwareRequirements: 'Web browser',
    license: 'https://opensource.org/license/mit/',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Patient registration and longitudinal records',
      'OPD, emergency, inpatient, observation, home health, and virtual care workflows',
      'Clinical notes, orders, prescriptions, forms, observations, and reports',
      'Laboratory, pharmacy, inventory, billing, and accounting workflows',
      'FHIR R5-aligned APIs and terminology support',
      'Plugin-based extensions for ABDM, TeleICU, Care Scribe, devices, messaging, and analytics',
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

function VideoFrame({
  src,
  poster,
  label,
  className = 'aspect-[1280/868]',
}: {
  src: string
  poster: string
  label: string
  className?: string
}) {
  return (
    <video
      aria-label={label}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      poster={poster}
      preload="metadata"
      className={`${className} w-full object-cover`}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-14 max-w-6xl sm:mt-18">
      <div className="absolute inset-x-8 top-12 bottom-0 rounded-full bg-[#12806a]/18 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#071812] p-2 shadow-[0_34px_100px_rgba(7,24,19,0.22)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(184,243,111,0.18),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_32%)]" />
        <video
          aria-label="CARE HMIS workflow video showing a connected hospital information system"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          poster="/videos/care-hmis-hero-poster.jpg"
          preload="metadata"
          className="relative aspect-[1280/872] w-full rounded-md object-cover"
        >
          <source src="/videos/care-hmis-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute right-5 bottom-5 hidden rounded-lg border border-white/14 bg-[#041611]/80 px-4 py-3 text-white shadow-2xl backdrop-blur-xl sm:block">
          <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
            Live HIS workflow
          </p>
          <p className="mt-1 text-sm font-semibold">
            Encounters, orders, forms, reports, and operational context.
          </p>
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
          <Subheading>CARE HMIS</Subheading>
          <h1 className="mx-auto mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            The open hospital OS for connected care.
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            CARE HMIS is an open-source Hospital Information System that
            connects patient flow, information flow, and revenue flow across
            outpatient, emergency, inpatient, labs, pharmacy, billing, and
            reporting workflows.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Plan an HMIS deployment</span>
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
          <HeroVisual />
        </div>
      </Container>
    </div>
  )
}

function ProofStrip() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_24px_80px_rgba(7,24,19,0.06)] sm:grid-cols-2 lg:grid-cols-4">
        {proofStats.map(([value, label]) => (
          <div
            key={label}
            className="border-[#dfe6e2] p-6 sm:p-8 lg:border-l first:lg:border-l-0 [&:not(:first-child)]:border-t sm:[&:not(:first-child)]:border-t-0"
          >
            <p className="text-4xl/[0.95] font-semibold tracking-normal text-gray-950 sm:text-5xl/[0.9]">
              {value}
            </p>
            <p className="mt-3 text-sm/6 font-medium text-gray-600">{label}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function HisOverviewSection() {
  return (
    <Container className="py-18 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <Subheading>Hospital Information System</Subheading>
          <Heading as="h2" className="mt-3">
            HIS depth with open-source ownership.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            CARE HMIS is built for hospitals that need more than a digital file.
            It combines EMR, HMIS, hospital operations, revenue cycle workflows,
            interoperability, and AI-ready clinical data in one reusable open
            platform.
          </p>
        </div>
        <div className="grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] sm:grid-cols-2">
          {hisLayers.map((layer) => (
            <div key={layer.title} className="bg-white p-6 sm:p-7">
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[#12806a] uppercase">
                HIS layer
              </p>
              <h3 className="mt-5 text-2xl/[1.05] font-semibold text-gray-950">
                {layer.title}
              </h3>
              <p className="mt-4 text-sm/6 text-gray-600">{layer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function ProblemSection() {
  return (
    <section className="py-18 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Subheading>The real problem</Subheading>
            <Heading as="h2" className="mt-3">
              Software exists. A connected workflow does not.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              The goal is not electronic records. It is a hospital that can
              coordinate care, measure quality, manage resources, and safely use
              assistive AI.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {problemPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_14px_44px_rgba(7,24,19,0.04)]"
              >
                <point.icon className="size-5 text-[#12806a]" />
                <h3 className="mt-8 text-lg font-semibold text-gray-950">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm/6 text-gray-600">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function FlowSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div>
            <Subheading dark>Three flows at once</Subheading>
            <Heading as="h2" dark className="mt-3">
              Records become workflows. Workflows become operations.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">
              CARE HMIS treats a hospital as a living system. Every patient
              event, clinical decision, and financial transaction can move
              through one connected operating layer.
            </p>
          </div>
          <div className="grid gap-3">
            {hospitalFlows.map((flow, index) => (
              <div
                key={flow.label}
                className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.055] p-5 sm:grid-cols-[52px_0.4fr_1fr] sm:items-start"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-white/10 font-mono text-xs font-semibold text-[#b8f36f]">
                  0{index + 1}
                </div>
                <h3 className="font-semibold text-white">{flow.label}</h3>
                <p className="text-sm/6 text-white/62">{flow.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function EncounterSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <Subheading>Every encounter</Subheading>
          <Heading as="h2" className="mt-3">
            One platform for every care setting.
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          CARE supports the full patient journey, while keeping clinical
          documentation consistent across hospitals, clinics, homes, and virtual
          visits.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_24px_80px_rgba(7,24,19,0.06)]">
          <VideoFrame
            src="/videos/his/doctor-notes.mp4"
            poster="/videos/his/doctor-notes-poster.jpg"
            label="CARE HMIS questionnaire and doctor notes workflow"
            className="h-full min-h-[360px]"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {encounterTypes.map(([name, text]) => (
            <div
              key={name}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <Activity className="size-5 text-[#12806a]" />
              <h3 className="mt-8 text-lg font-semibold text-gray-950">
                {name}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function CoreModulesSection() {
  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <Subheading>Core modules</Subheading>
            <Heading as="h2" className="mt-3">
              The workflows a hospital expects, built on one core.
            </Heading>
          </div>
          <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
            Modules are not isolated applications. They share patients,
            encounters, orders, observations, roles, reports, and audit trails.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] sm:grid-cols-2 lg:grid-cols-4">
          {coreModules.map((module) => (
            <div key={module.title} className="min-h-64 bg-white p-6 sm:p-7">
              <module.icon className="size-5 text-[#12806a]" />
              <h3 className="mt-8 text-xl/6 font-semibold text-gray-950">
                {module.title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{module.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function WorkflowVideosSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div>
          <Subheading>Workflows in motion</Subheading>
          <Heading as="h2" className="mt-3">
            See the hospital OS as real product workflows.
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          These are not static module names. CARE HMIS supports live workflows
          across bed management, clinical drawings, and dynamic reporting on the
          same shared patient and facility data layer.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {workflowVideos.map((workflow) => (
          <article
            key={workflow.title}
            className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_18px_58px_rgba(7,24,19,0.05)]"
          >
            <div className="overflow-hidden bg-[#eef5f0]">
              <VideoFrame
                src={workflow.video}
                poster={workflow.poster}
                label={`CARE HMIS ${workflow.title} workflow video`}
              />
            </div>
            <div className="p-6">
              <workflow.icon className="size-5 text-[#12806a]" />
              <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
                {workflow.title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{workflow.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}

function DepartmentCoverageSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
        <div>
          <Subheading>HIS coverage</Subheading>
          <Heading as="h2" className="mt-3">
            One operating layer across hospital departments.
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          CARE HMIS gives hospitals a shared information system for clinical,
          administrative, operational, and financial work. Each department can
          keep its workflow while contributing to one longitudinal record.
        </p>
      </div>

      <div className="mt-12 grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] md:grid-cols-3">
        {departmentCoverage.map(([department, detail]) => (
          <article key={department} className="min-h-44 bg-white p-6 sm:p-7">
            <BadgeCheck className="size-5 text-[#12806a]" />
            <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
              {department}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">{detail}</p>
          </article>
        ))}
      </div>
    </Container>
  )
}

function OperationsSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="max-w-4xl">
        <Subheading>Hospital operations</Subheading>
        <Heading as="h2" className="mt-3">
          The back office is clinical infrastructure.
        </Heading>
        <p className="mt-6 text-lg/7 text-gray-600">
          Labs, pharmacy, stock, billing, and accounting are not downstream
          admin tasks. They are part of the same clinical timeline.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {operatingModules.map((module) => (
          <article
            key={module.title}
            className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_18px_58px_rgba(7,24,19,0.05)]"
          >
            <div className="overflow-hidden bg-[#eef5f0]">
              <VideoFrame
                src={module.video}
                poster={module.poster}
                label={`CARE HMIS ${module.title} workflow video`}
              />
            </div>
            <div className="p-6">
              <module.icon className="size-5 text-[#12806a]" />
              <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
                {module.title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{module.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}

function StandardsSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Subheading dark>Standards and architecture</Subheading>
            <Heading as="h2" dark className="mt-3">
              Built for exchange, analytics, and assistive AI.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">
              CARE HMIS is standards-first, API-first, modular, cloud agnostic,
              mobile-first, and designed to be extended without forking the
              core.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {standards.map(([name, detail]) => (
              <div
                key={name}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <Database className="mb-8 size-5 text-[#b8f36f]" />
                <p className="text-xl font-semibold text-white">{name}</p>
                <p className="mt-2 text-sm/5 text-white/55">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function AppsAndAiSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Subheading>Apps and AI</Subheading>
          <Heading as="h2" className="mt-3">
            Extend the hospital OS without breaking the core.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            CARE Apps add national rails, TeleICU, AI documentation, devices,
            claims, token display, messaging, and analytics through a plugin
            layer. AI drafts. Humans decide. CARE records.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {apps.map(([title, text]) => (
              <div
                key={title}
                className="rounded-lg border border-[#dfe6e2] bg-white p-5"
              >
                <Plug className="size-4 text-[#12806a]" />
                <h3 className="mt-5 text-base font-semibold text-gray-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm/6 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_24px_80px_rgba(7,24,19,0.08)]">
          <img
            src="/screenshots/hmis-ai-scribe.jpeg"
            alt="Care Scribe AI documentation concept"
            className="aspect-[1.32] w-full object-cover"
          />
          <div className="border-t border-[#dfe6e2] p-6">
            <div className="flex items-center gap-3">
              <BrainCircuit className="size-5 text-[#12806a]" />
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[#12806a] uppercase">
                Responsible AI
              </p>
            </div>
            <p className="mt-4 text-sm/6 text-gray-600">
              Voice fill, document understanding, record summaries, discharge
              drafts, and decision support sit on top of structured clinical
              data with human review.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

function ImplementationSection() {
  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>Implementation model</Subheading>
          <Heading as="h2" className="mt-3">
            A serious HIS rollout is product, process, and governance.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            CARE HMIS deployments can start with a focused hospital workflow and
            expand into a complete Hospital Information System. The same open
            core supports phased adoption, local configuration, partner-led
            implementation, and long-term release upgrades.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {implementationNeeds.map(([need, detail], index) => (
            <article
              key={need}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-[#e7f4ed] font-mono text-xs font-semibold text-[#12806a]">
                0{index + 1}
              </div>
              <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
                {need}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </div>
  )
}

function DeploymentSection() {
  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <Subheading>Deployment proof</Subheading>
            <Heading as="h2" className="mt-3">
              CARE HMIS 3.0 is live across multiple deployments.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              CARE HMIS 3.0 is now live across deployments in Kerala, Karnataka,
              Jharkhand, Assam, and Manipur, supporting 100+ hospitals through a
              reusable open-core model.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" className="w-full sm:w-auto">
                Start a deployment conversation
              </Button>
              <Button
                variant="secondary"
                href="/impact"
                className="w-full sm:w-auto"
              >
                View impact
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['Kerala', 'live deployment'],
              ['Karnataka', 'live deployment'],
              ['Jharkhand', 'live deployment'],
              ['Assam', 'live deployment'],
              ['Manipur', 'live deployment'],
              ['100+', 'hospitals'],
            ].map(([value, label]) => (
              <div
                key={`${value}-${label}`}
                className="rounded-lg border border-[#dfe6e2] bg-white p-6"
              >
                <BadgeCheck className="mb-8 size-5 text-[#12806a]" />
                <p className="text-2xl/[1] font-semibold text-gray-950">
                  {value}
                </p>
                <p className="mt-2 text-sm/6 text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FAQSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <Subheading>HIS FAQ</Subheading>
          <Heading as="h2" className="mt-3">
            What hospitals usually ask before evaluating CARE HMIS.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            These answers are written for teams comparing open-source HIS, HMIS,
            EMR, and hospital management software options.
          </p>
        </div>
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <h3 className="text-xl/6 font-semibold text-gray-950">
                {faq.question}
              </h3>
              <p className="mt-4 text-sm/6 text-gray-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </Container>
  )
}

function FinalSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="rounded-lg border border-[#dfe6e2] bg-white p-8 text-center shadow-[0_28px_90px_rgba(7,24,19,0.07)] sm:p-12">
        <Smartphone className="mx-auto size-6 text-[#12806a]" />
        <Heading as="h2" className="mx-auto mt-6 max-w-4xl">
          Intelligent hospitals need connected workflows first.
        </Heading>
        <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
          CARE HMIS gives hospitals the shared operating layer for clinical
          work, operations, revenue, analytics, and carefully governed AI.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/contact" className="w-full sm:w-auto">
            Plan an HMIS deployment
          </Button>
          <Button
            variant="secondary"
            href="/product/apps-integrations"
            className="w-full sm:w-auto"
          >
            Explore apps and integrations
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

export default function HospitalManagement() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <ProofStrip />
        <HisOverviewSection />
        <ProblemSection />
        <FlowSection />
        <EncounterSection />
        <CoreModulesSection />
        <WorkflowVideosSection />
        <DepartmentCoverageSection />
        <OperationsSection />
        <StandardsSection />
        <AppsAndAiSection />
        <ImplementationSection />
        <DeploymentSection />
        <FAQSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
