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
  BookOpenCheck,
  BrainCircuit,
  Calculator,
  ChartNoAxesCombined,
  ClipboardCheck,
  ClipboardList,
  Eye,
  FileSearch,
  FileSignature,
  FileText,
  GitBranch,
  Handshake,
  HeartPulse,
  Hospital,
  Languages,
  Layers3,
  LockKeyhole,
  Mic2,
  Network,
  Pill,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CARE AI - Responsible AI on Trusted Healthcare Infrastructure',
  description:
    'CARE AI is the responsible AI layer for CARE Core: AI medical scribe, realtime voice scribe, voice EMR, form intelligence, clinical summaries, Care Ask doctor copilot, document AI, drug safety alerts, score calculators, and human-in-the-loop healthcare workflows.',
  keywords: [
    'CARE AI',
    'responsible AI healthcare',
    'AI medical scribe',
    'open source AI medical scribe',
    'Care Scribe',
    'realtime voice scribe',
    'voice EMR',
    'voice EHR',
    'clinical summarization',
    'doctor copilot',
    'Care Ask',
    'healthcare document AI',
    'medical document understanding',
    'AI discharge summary',
    'drug safety alerts',
    'AI score calculators',
    'FHIR AI',
    'AI for HMIS',
    'AI for hospital information systems',
    'human in the loop healthcare AI',
    'AI for public health programs',
  ],
  alternates: {
    canonical: '/product/care-ai',
  },
  openGraph: {
    title: 'CARE AI - Responsible AI on Trusted Healthcare Infrastructure',
    description:
      'Assistive healthcare AI built on CARE Core: voice workflows, clinical summaries, document intelligence, care planning, safety alerts, and human-reviewed AI.',
    url: '/product/care-ai',
    images: [
      {
        url: '/videos/care-ai-hero-poster.jpg',
        width: 1600,
        height: 1226,
        alt: 'CARE AI and Care Scribe workflow concept',
      },
    ],
  },
  twitter: {
    title: 'CARE AI - Responsible AI on Trusted Healthcare Infrastructure',
    description:
      'AI medical scribe, voice EMR, clinical summaries, document AI, safety alerts, and workflow intelligence on CARE Core.',
    images: ['/videos/care-ai-hero-poster.jpg'],
  },
}

const thesis = [
  'It should understand the patient record.',
  'It should respect clinical workflows.',
  'It should follow permissions and audit trails.',
  'It should help health workers, not replace them.',
]

const coreContext = [
  'Longitudinal patient records',
  'Clinical forms and submissions',
  'Encounter history',
  'Medications, allergies, vitals, labs, and observations',
  'Care plans, tasks, referrals, and follow-ups',
  'Facility and user context',
  'Role-based permissions',
  'Audit trails',
  'APIs and plugin architecture',
  'Standards-aligned data models',
]

const principles = [
  {
    title: 'Grounded in context',
    text: 'AI should use patient, encounter, facility, role, form, task, and workflow context from CARE Core.',
    icon: Layers3,
  },
  {
    title: 'Reviewed before saving',
    text: 'AI can listen, extract, summarize, suggest, calculate, and draft. The care team remains in control.',
    icon: ClipboardCheck,
  },
  {
    title: 'Traceable to sources',
    text: 'Summaries, handovers, care plans, and discharge drafts should point back to source information wherever possible.',
    icon: SearchCheck,
  },
  {
    title: 'Governed by roles',
    text: 'Doctors, nurses, field workers, administrators, volunteers, and researchers should not have the same AI permissions.',
    icon: LockKeyhole,
  },
  {
    title: 'Designed for safety',
    text: 'AI should reduce burden without reducing accountability, and every capability should be evaluated in real care settings.',
    icon: ShieldCheck,
  },
  {
    title: 'Recorded by CARE',
    text: 'Accepted AI output becomes part of the same auditable, standards-aligned health record where care is delivered.',
    icon: FileSignature,
  },
]

const capabilities = [
  {
    title: 'Care Scribe',
    category: 'AI medical scribe',
    text: 'Voice-based documentation assistance grounded in the patient record and the active CARE workflow.',
    points: [
      'Clinical notes and visit summaries',
      'Structured form filling',
      'Nursing and field visit documentation',
      'Review before saving',
      'Audit of generated and accepted content',
    ],
    icon: Mic2,
  },
  {
    title: 'Realtime Voice Scribe',
    category: 'Voice EMR',
    text: 'Realtime speech support that structures documentation while the consultation is happening.',
    points: [
      'Realtime transcription',
      'History, symptoms, examination, assessment, and plan detection',
      'Structured field suggestions',
      'Missing information prompts',
      'Clinician edit, approval, and save',
    ],
    icon: Languages,
  },
  {
    title: 'Vision for Patient Registration',
    category: 'Front-desk AI',
    text: 'Registration intelligence for cleaner patient records and lower manual data entry at the front door of care.',
    points: [
      'Extract details from forms, IDs, or documents',
      'Auto-fill registration fields',
      'Suggest possible duplicate records',
      'Flag missing or inconsistent information',
      'Attach source documents to the patient record',
    ],
    icon: Eye,
  },
  {
    title: 'Vision for Documentation',
    category: 'Healthcare document AI',
    text: 'Document understanding for scanned reports, prescriptions, referral letters, lab reports, and historical notes.',
    points: [
      'Read uploaded documents and images',
      'Extract key fields from reports',
      'Convert paper records into structured data',
      'Summarize referral letters',
      'Review extracted data before saving',
    ],
    icon: FileSearch,
  },
  {
    title: 'AI Summary on Records',
    category: 'Clinical summarization',
    text: 'Patient summaries that help care teams reach the right part of a long record faster.',
    points: [
      'One-line patient overview',
      'Recent visit summary',
      'Problem-oriented summary',
      'Medication and lab trend summaries',
      'Pending task and follow-up summaries',
    ],
    icon: FileText,
  },
  {
    title: 'Doctor Summary',
    category: 'Pre-encounter context',
    text: 'A concise view of the patient before the consultation begins, designed to reduce cognitive load.',
    points: [
      'Chief concern and relevant history',
      'Active problems and medications',
      'Allergies and recent labs',
      'Pending investigations',
      'Risk flags and follow-up needs',
    ],
    icon: Stethoscope,
  },
  {
    title: 'Care Ask',
    category: 'Doctor copilot',
    text: 'A doctor-facing copilot for patient-context questions and workflow support across the CARE record.',
    points: [
      'What changed since the last visit?',
      'Show recent abnormal labs',
      'Summarize the current admission',
      'List current medications',
      'Generate patient instructions from today’s plan',
    ],
    icon: BrainCircuit,
  },
  {
    title: 'Differential Diagnosis Support',
    category: 'Clinical reasoning support',
    text: 'Careful, clinician-led reasoning support for structured checklists, red flags, and missing history prompts.',
    points: [
      'Differential checklist generation',
      'Red-flag reminders',
      'Suggested examination questions',
      'Investigation prompts',
      'Consider, ask, check, and rule out suggestions',
    ],
    icon: Activity,
  },
  {
    title: 'Care Plan Generation',
    category: 'Actionable care plans',
    text: 'Draft care plans that can become tasks, reminders, referrals, follow-ups, and measurable continuity.',
    points: [
      'Problems and goals',
      'Medications and investigations',
      'Counseling and follow-up',
      'Referrals and home-care tasks',
      'Monitoring plans and caregiver instructions',
    ],
    icon: Route,
  },
  {
    title: 'AI-Powered Score Calculators',
    category: 'Clinical scoring',
    text: 'Score calculators connected to structured data and the escalation workflows that follow.',
    points: [
      'BMI, MEWS, NEWS2, and GCS',
      'Program-specific scores',
      'Palliative-care risk scores',
      'NCD risk scores',
      'Follow-up and escalation routing',
    ],
    icon: Calculator,
  },
  {
    title: 'Drug Safety Alerts',
    category: 'Medication safety',
    text: 'Relevant, explainable, severity-ranked prescribing alerts where medication decisions happen.',
    points: [
      'Allergy and interaction risks',
      'Duplicate therapy',
      'Contraindications and dose concerns',
      'Renal, hepatic, pregnancy, and age cautions',
      'Override with reason where appropriate',
    ],
    icon: Pill,
  },
  {
    title: 'Discharge Summary Builder',
    category: 'Continuity after discharge',
    text: 'Draft discharge summaries generated from the actual hospital timeline, then reviewed and signed.',
    points: [
      'Admission reason and diagnoses',
      'Procedures and clinical course',
      'Medication changes and lab trends',
      'Pending results',
      'Follow-up and referral notes',
    ],
    icon: FileSignature,
  },
  {
    title: 'Handover Chart',
    category: 'Care transitions',
    text: 'Structured handover notes for shifts, wards, teams, and high-risk transitions of care.',
    points: [
      'Patient status and current risks',
      'Pending labs and tasks',
      'Medication changes',
      'Escalation needs',
      'Nursing priorities and discharge readiness',
    ],
    icon: GitBranch,
  },
  {
    title: 'Care Form Builder Skill',
    category: 'Guideline to workflow',
    text: 'AI support for converting guidelines, PDFs, SOPs, and paper forms into draft CARE forms and workflows.',
    points: [
      'Form sections and field definitions',
      'Validations and conditional logic',
      'Terminology mappings',
      'Indicators and role-specific views',
      'Draft workflow structure',
    ],
    icon: ClipboardList,
  },
  {
    title: 'Care Form Enhancer',
    category: 'Learning workflows',
    text: 'Submission analysis that suggests how program forms can become clearer, faster, and more structured.',
    points: [
      'Frequently empty fields',
      'Confusing labels and duplicate fields',
      'Validation failures',
      'Long completion time and drop-off points',
      'Free-text patterns that should become structured fields',
    ],
    icon: Sparkles,
  },
]

const teams = [
  {
    title: 'For doctors',
    text: 'Spend less time searching and typing, and more time making decisions.',
    items: [
      'Care Scribe',
      'Realtime voice documentation',
      'Doctor Summary',
      'Care Ask',
      'Differential diagnosis support',
      'Drug safety alerts',
      'Discharge summary builder',
    ],
    icon: UserRoundCheck,
  },
  {
    title: 'For nurses',
    text: 'Document faster, coordinate better, and reduce handover risk.',
    items: [
      'Realtime nursing notes',
      'Handover charts',
      'Score calculators',
      'Pending task summaries',
      'Patient status summaries',
      'Ward-level documentation support',
    ],
    icon: HeartPulse,
  },
  {
    title: 'For field workers',
    text: 'Complete structured documentation with less typing and better local-language support.',
    items: [
      'Voice-native forms',
      'Home-visit summaries',
      'Follow-up prompts',
      'Risk flag suggestions',
      'Caregiver instruction drafts',
      'Local-language support',
    ],
    icon: Users,
  },
  {
    title: 'For hospitals',
    text: 'Improve documentation quality, discharge workflows, patient handovers, and medication safety.',
    items: [
      'Discharge summary builder',
      'Handover chart',
      'Drug safety alerts',
      'Doctor summaries',
      'Score calculators',
      'Documentation analytics',
    ],
    icon: Hospital,
  },
  {
    title: 'For public-health programs',
    text: 'Move from guidelines to better digital workflows and stronger program learning loops.',
    items: [
      'Care Form Builder Skill',
      'Care Form Enhancer',
      'Program workflow summaries',
      'Indicator extraction',
      'Submission quality review',
      'Field-level improvement suggestions',
    ],
    icon: Network,
  },
]

const integrations = [
  {
    title: 'External scribe providers',
    text: 'CARE can support voice-to-discrete-data integrations where a partner scribe transforms doctor-patient conversations into structured notes while CARE remains the patient-context layer and system of record.',
  },
  {
    title: 'Eka Scribe via V2DD-style integrations',
    text: 'A scribe partner can provide structured voice outputs, while CARE provides workflow context, review surfaces, final save, and auditability.',
  },
  {
    title: 'India AI models and AI Centers of Excellence',
    text: 'As Indian foundational models, local-language models, and healthcare AI research mature, CARE can provide the real-world health-system layer for responsible evaluation and use.',
  },
  {
    title: 'Research and government-approved AI models',
    text: 'Trusted partners can bring speech, vision, drug-safety, score-calculation, summarization, and program-specific models through plugin patterns.',
  },
]

const safety = [
  ['Human review', 'AI-generated clinical content should be reviewed before becoming part of the medical record.'],
  ['Source grounding', 'Summaries, discharge notes, handovers, and care plans should link back to source records wherever possible.'],
  ['Role-based access', 'A doctor, nurse, volunteer, administrator, and researcher should not have the same AI capabilities or data access.'],
  ['Audit trails', 'Every AI interaction should log who used it, what context was used, what was generated, what was edited, and what was saved.'],
  ['Clinical accountability', 'AI supports the care team. It does not replace clinical responsibility.'],
  ['Evaluation', 'Every AI feature should be measured by workflow impact, safety, adoption, quality, and outcomes.'],
]

const metrics = [
  'Documentation time saved',
  'Form completion rate',
  'Correction rate',
  'Data completeness',
  'Summary accuracy',
  'Discharge turnaround time',
  'Handover completeness',
  'Alert acceptance rate',
  'Override rate',
  'Clinician satisfaction',
  'Follow-up completion',
  'Safety incidents',
]

const roadmap = [
  {
    horizon: 'Horizon 1',
    title: 'Documentation relief',
    text: 'Reduce typing and improve structured capture.',
    focus: [
      'Care Scribe',
      'Realtime voice documentation',
      'Vision for documentation',
      'AI summaries',
      'Doctor Summary',
      'Discharge summary builder',
      'Handover chart',
    ],
  },
  {
    horizon: 'Horizon 2',
    title: 'Workflow intelligence',
    text: 'Make CARE workflows AI-assisted.',
    focus: [
      'Care Ask Doctor Copilot',
      'Care plan generation',
      'AI-powered score calculators',
      'Drug safety alerts',
      'Care Form Builder Skill',
      'Care Form Enhancer',
      'Vision for registration',
    ],
  },
  {
    horizon: 'Horizon 3',
    title: 'Learning health systems',
    text: 'Move from assistance to continuous improvement.',
    focus: [
      'Differential diagnosis support',
      'Program copilots',
      'Quality improvement analytics',
      'Risk stratification',
      'Operational intelligence',
      'AI evaluation infrastructure',
      'South-to-South reusable AI workflows',
    ],
  },
]

const difference = [
  ['Workflow-native', 'Embedded where care happens.'],
  ['Patient-aware', 'Grounded in CARE records.'],
  ['Human-reviewed', 'Designed for clinical accountability.'],
  ['Standards-aligned', 'Built on open healthcare data models.'],
  ['Audit-ready', 'Traceable and governable.'],
  ['Extensible', 'Ready for partner models and AI integrations.'],
  ['Public-good oriented', 'Designed to strengthen open healthcare infrastructure.'],
]

const faqs = [
  {
    question: 'What is CARE AI?',
    answer:
      'CARE AI is the assistive intelligence layer built on top of CARE Core. It brings AI-powered documentation, summarization, voice workflows, form intelligence, clinical context, care planning, safety alerts, and workflow support into the same open healthcare platform where care is delivered.',
  },
  {
    question: 'Is CARE AI an AI doctor?',
    answer:
      'No. CARE AI is not an AI doctor, autonomous diagnosis tool, or black-box product outside the clinical workflow. It drafts, extracts, summarizes, suggests, and calculates while humans review and decide.',
  },
  {
    question: 'What is the CARE AI principle?',
    answer:
      'AI drafts. Humans decide. CARE records. Systems learn. CARE AI is built around human review, clinical accountability, source grounding, role-based permissions, and audit trails.',
  },
  {
    question: 'What is Care Scribe?',
    answer:
      'Care Scribe helps doctors, nurses, and care teams convert speech and clinical conversations into structured documentation inside CARE. It is documentation assistance grounded in the patient record and active workflow.',
  },
  {
    question: 'How is CARE AI different from a standalone chatbot?',
    answer:
      'CARE AI starts with the health system. It uses CARE Core context such as patients, encounters, forms, roles, orders, medications, labs, care plans, tasks, audit trails, APIs, and standards-based data models.',
  },
  {
    question: 'Can external AI partners integrate with CARE AI?',
    answer:
      'Yes. CARE AI is designed as an open and extensible AI layer where trusted scribe providers, speech models, vision models, local-language models, drug-safety engines, score calculators, and research models can integrate safely into CARE workflows.',
  },
]

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'CARE AI - Responsible AI on Trusted Healthcare Infrastructure',
    url: 'https://ohc.network/product/care-ai',
    description:
      'CARE AI is responsible, assistive healthcare AI built on CARE Core for medical scribing, voice workflows, form intelligence, clinical summaries, document AI, care planning, drug safety, and workflow support.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Open Healthcare Network',
      url: 'https://ohc.network',
    },
    about: [
      { '@type': 'Thing', name: 'Responsible healthcare AI' },
      { '@type': 'Thing', name: 'AI medical scribe' },
      { '@type': 'Thing', name: 'Voice EMR' },
      { '@type': 'Thing', name: 'Clinical summarization' },
      { '@type': 'Thing', name: 'Healthcare document AI' },
      { '@type': 'Thing', name: 'Human-in-the-loop AI' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ohc.network' },
      { '@type': 'ListItem', position: 2, name: 'CARE', item: 'https://ohc.network/product/care-core' },
      { '@type': 'ListItem', position: 3, name: 'CARE AI', item: 'https://ohc.network/product/care-ai' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CARE AI',
    alternateName: [
      'Care Scribe',
      'CARE AI Medical Scribe',
      'CARE Voice EMR',
      'CARE Healthcare Workflow AI',
    ],
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    url: 'https://ohc.network/product/care-ai',
    description:
      'CARE AI is the responsible AI layer for CARE Core, supporting AI medical scribe workflows, voice EMR documentation, clinical summaries, document understanding, care planning, drug safety alerts, score calculators, and human-in-the-loop healthcare workflows.',
    featureList: capabilities.map((capability) => capability.title),
    publisher: {
      '@type': 'Organization',
      name: 'Open Healthcare Network Foundation',
      url: 'https://ohc.network',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'CARE AI capabilities',
    itemListElement: capabilities.map((capability, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: capability.title,
      description: capability.text,
    })),
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

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-14 max-w-6xl sm:mt-18">
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#061711] p-2 shadow-[0_34px_100px_rgba(7,24,19,0.22)]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(184,243,111,0.16),transparent_30%),linear-gradient(0deg,rgba(18,128,106,0.2),transparent_45%)]" />
        <div className="relative grid gap-2 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-md bg-white">
            <video
              aria-label="CARE AI medical scribe workflow showing voice documentation and clinical context"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              poster="/videos/care-ai-hero-poster.jpg"
              preload="metadata"
              className="aspect-[1600/1226] h-full w-full object-cover object-left-top"
            >
              <source src="/videos/care-ai-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="grid gap-2">
            {[
              ['Context', 'CARE Core supplies patient, role, facility, workflow, and record context.'],
              ['Draft', 'AI listens, extracts, summarizes, suggests, calculates, or prepares a draft.'],
              ['Review', 'The care team edits, approves, rejects, or asks for more evidence.'],
              ['Record', 'Accepted output becomes auditable data inside CARE.'],
            ].map(([step, text], index) => (
              <div
                key={step}
                className="rounded-md border border-white/10 bg-white/[0.055] p-5 text-white backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-white/10 font-mono text-xs font-semibold text-[#b8f36f]">
                    0{index + 1}
                  </div>
                  <p className="text-lg font-semibold">{step}</p>
                </div>
                <p className="mt-4 text-sm/6 text-white/62">{text}</p>
              </div>
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
          <Subheading>CARE AI</Subheading>
          <h1 className="mx-auto mt-5 max-w-6xl font-display text-5xl/[1] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            Responsible AI on trusted healthcare infrastructure
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            CARE AI brings AI-powered documentation, summarization, voice
            workflows, form intelligence, clinical context, care planning,
            safety alerts, and workflow support into the same open healthcare
            platform where care is delivered.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Discuss CARE AI</span>
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

function HealthSystemFirstSection() {
  return (
    <Container className="py-18 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <Subheading>Health system first</Subheading>
          <Heading as="h2" className="mt-3">
            AI in healthcare should not sit outside the health system.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            Most healthcare AI tools start with a model. CARE AI starts with the
            health system: patients, encounters, facilities, users, roles,
            forms, orders, labs, medications, referrals, care plans, tasks,
            audit trails, APIs, and standards-based data models.
          </p>
        </div>
        <div className="grid gap-3">
          {thesis.map((line) => (
            <div
              key={line}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6 text-xl/7 font-semibold text-gray-950 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function PrincipleSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <Subheading dark>Our principle</Subheading>
            <Heading as="h2" dark className="mt-3">
              AI drafts. Humans decide. CARE records. Systems learn.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">
              CARE AI is not a standalone chatbot, an AI doctor, or a black-box
              tool outside the clinical workflow. It is a set of AI skills
              powered by CARE Core and designed for accountable care teams.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6"
              >
                <principle.icon className="size-5 text-[#b8f36f]" />
                <h3 className="mt-7 text-lg font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm/6 text-white/62">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function CoreSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <Subheading>Powered by CARE Core</Subheading>
          <Heading as="h2" className="mt-3">
            Workflow-aware, patient-aware, and accountable.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            A doctor opening an encounter needs different AI support from a
            nurse preparing a handover, a field worker completing a home visit,
            a registration staff member scanning documents, or a program manager
            improving a clinical form. CARE AI is designed for that reality.
          </p>
        </div>
        <div className="grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] sm:grid-cols-2">
          {coreContext.map((item) => (
            <div key={item} className="bg-white p-5">
              <BadgeCheck className="size-4 text-[#12806a]" />
              <p className="mt-5 text-sm/6 font-semibold text-gray-950">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function CapabilitiesSection() {
  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="max-w-5xl">
          <Subheading>CARE AI capabilities</Subheading>
          <Heading as="h2" className="mt-3">
            From AI medical scribe to learning clinical workflows.
          </Heading>
          <p className="mt-6 max-w-4xl text-lg/7 text-gray-600">
            CARE AI is a capability layer, not one feature. Each skill is meant
            to reduce burden, improve structured data capture, surface relevant
            patient context, and make healthcare workflows easier to complete.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
            >
              <capability.icon className="size-5 text-[#12806a]" />
              <p className="mt-7 font-mono text-xs font-semibold tracking-[0.16em] text-[#12806a] uppercase">
                {capability.category}
              </p>
              <h3 className="mt-3 text-2xl/[1.05] font-semibold text-gray-950">
                {capability.title}
              </h3>
              <p className="mt-4 text-sm/6 text-gray-600">{capability.text}</p>
              <ul className="mt-6 space-y-2">
                {capability.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm/6 text-gray-700"
                  >
                    <span className="mt-2 size-1.5 flex-none rounded-full bg-[#12806a]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </div>
  )
}

function TeamSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
        <div>
          <Subheading>Built for care teams</Subheading>
          <Heading as="h2" className="mt-3">
            Different teams need different intelligence.
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          CARE AI is designed for doctors, nurses, field workers, hospitals,
          public-health programs, and implementation partners who need AI that
          is practical, responsible, and grounded in real health-system data.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-5">
        {teams.map((team) => (
          <article
            key={team.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)] lg:col-span-1"
          >
            <team.icon className="size-5 text-[#12806a]" />
            <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
              {team.title}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">{team.text}</p>
            <ul className="mt-6 space-y-2">
              {team.items.map((item) => (
                <li key={item} className="text-sm/5 font-medium text-gray-800">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Container>
  )
}

function ExtensibleSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <Subheading dark>Extensible by design</Subheading>
            <Heading as="h2" dark className="mt-3">
              CARE can be the trusted substrate for partner AI.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">
              Not every AI capability needs to be built by OHC Foundation. CARE
              should make it possible for trusted AI partners, research
              institutions, public-sector AI initiatives, and local model
              providers to integrate safely into healthcare workflows.
            </p>
          </div>
          <div className="grid gap-3">
            {integrations.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6"
              >
                <Handshake className="size-5 text-[#b8f36f]" />
                <h3 className="mt-7 text-xl/6 font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm/6 text-white/62">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function SafetySection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <Subheading>Safety and governance</Subheading>
          <Heading as="h2" className="mt-3">
            Healthcare AI must be designed for trust.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            CARE AI follows a safety-first posture: source grounding, human
            review, role-based access, audit trails, clinical accountability,
            and real-world evaluation.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {safety.map(([title, text]) => (
            <article
              key={title}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <ShieldCheck className="size-5 text-[#12806a]" />
              <h3 className="mt-7 text-lg font-semibold text-gray-950">
                {title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <ChartNoAxesCombined className="size-5 text-[#12806a]" />
          <h3 className="text-xl font-semibold text-gray-950">
            Useful evaluation metrics
          </h3>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric}
              className="rounded-lg border border-[#dfe6e2] bg-white px-4 py-3 text-sm font-medium text-gray-800"
            >
              {metric}
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function RoadmapSection() {
  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>Roadmap</Subheading>
          <Heading as="h2" className="mt-3">
            From documentation relief to learning health systems.
          </Heading>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {roadmap.map((stage) => (
            <article
              key={stage.horizon}
              className="rounded-lg border border-[#dfe6e2] bg-white p-7 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
            >
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[#12806a] uppercase">
                {stage.horizon}
              </p>
              <h3 className="mt-7 text-2xl/[1.05] font-semibold text-gray-950">
                {stage.title}
              </h3>
              <p className="mt-4 text-sm/6 text-gray-600">{stage.text}</p>
              <ul className="mt-6 space-y-2">
                {stage.focus.map((item) => (
                  <li key={item} className="text-sm/5 font-medium text-gray-800">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </div>
  )
}

function DifferenceSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
        <div>
          <Subheading>The CARE AI difference</Subheading>
          <Heading as="h2" className="mt-3">
            A safer, faster interface to trusted healthcare infrastructure.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            The goal is not to make healthcare workers depend on another
            black-box product. The goal is to give them a smarter interface to
            open, accountable infrastructure.
          </p>
        </div>
        <div className="grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] sm:grid-cols-2">
          {difference.map(([title, text]) => (
            <div key={title} className="bg-white p-6">
              <BookOpenCheck className="size-5 text-[#12806a]" />
              <h3 className="mt-7 text-xl/6 font-semibold text-gray-950">
                {title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function FAQSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <Subheading dark>FAQ</Subheading>
            <Heading as="h2" dark className="mt-3">
              What CARE AI is, and what it is not.
            </Heading>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6"
              >
                <h3 className="text-xl/6 font-semibold text-white">
                  {faq.question}
                </h3>
                <p className="mt-4 text-sm/6 text-white/62">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FinalSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="rounded-lg border border-[#dfe6e2] bg-white p-8 text-center shadow-[0_28px_90px_rgba(7,24,19,0.07)] sm:p-12">
        <BrainCircuit className="mx-auto size-6 text-[#12806a]" />
        <Heading as="h2" className="mx-auto mt-6 max-w-4xl">
          AI for the healthcare commons.
        </Heading>
        <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
          CARE Core gives AI the context. CARE AI gives health workers the
          interface. Human review keeps care accountable. Open infrastructure
          makes the model reusable.
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-xl/7 font-semibold text-gray-950">
          CARE AI is responsible AI on trusted healthcare infrastructure.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/contact" className="w-full sm:w-auto">
            Discuss CARE AI
          </Button>
          <Button
            variant="secondary"
            href="/product/care-core"
            className="w-full sm:w-auto"
          >
            Explore CARE Core
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

export default function CareAI() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <HealthSystemFirstSection />
        <PrincipleSection />
        <CoreSection />
        <CapabilitiesSection />
        <TeamSection />
        <ExtensibleSection />
        <SafetySection />
        <RoadmapSection />
        <DifferenceSection />
        <FAQSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
