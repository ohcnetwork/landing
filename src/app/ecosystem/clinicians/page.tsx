import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  ArrowRight,
  BrainCircuit,
  ClipboardList,
  FilePenLine,
  HeartPulse,
  Mic,
  ShieldAlert,
  Stethoscope,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clinicians - Shape CARE Workflows',
  description:
    'Clinicians help OHC shape CARE workflows, forms, terminology, notes, rounds, prescriptions, safety, and assistive AI documentation.',
  keywords:
    'CARE clinicians, clinical workflows, open source EMR clinicians, AI scribe healthcare, clinical forms FHIR',
}

const workflowAreas = [
  {
    title: 'Clinical notes and rounds',
    description:
      'Make documentation fit real bedside, outpatient, emergency, home care, and critical care workflows.',
    icon: FilePenLine,
  },
  {
    title: 'Forms and terminology',
    description:
      'Review questionnaires, SNOMED CT, LOINC, UCUM, ICD-10 mappings, and local terminology needs.',
    icon: ClipboardList,
  },
  {
    title: 'Care coordination',
    description:
      'Shape tasks, referrals, care plans, home visits, follow-up, and continuity of care patterns.',
    icon: HeartPulse,
  },
  {
    title: 'AI documentation review',
    description:
      'Guide voice-native forms, AI draft flags, summarization, and human-in-the-loop safety expectations.',
    icon: BrainCircuit,
  },
]

const principles = [
  'Clinical safety before automation',
  'Human-in-the-loop review for AI-assisted documentation',
  'Structured data without burdening frontline staff',
  'Auditability for clinical and administrative actions',
  'Local language and local workflow sensitivity',
  'Open feedback loops with maintainers and implementers',
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>Clinical community</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            CARE should feel like clinical infrastructure, not only IT.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            OHC needs clinicians and frontline workers to shape workflows,
            forms, terminology, safety practices, and assistive AI tools so CARE
            reflects how care is actually delivered.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/contact"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Join clinical review</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/product/care-core"
              className="w-full sm:w-auto"
            >
              Review CARE modules
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function WorkflowSection() {
  return (
    <Container className="py-24">
      <div className="max-w-4xl">
        <Subheading>Where clinicians shape the platform</Subheading>
        <Heading as="h2" className="mt-2">
          Clinical governance belongs close to product decisions.
        </Heading>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {workflowAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6"
          >
            <area.icon className="size-6 text-[#12806a]" />
            <h3 className="mt-6 text-lg font-semibold text-gray-950">
              {area.title}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">{area.description}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function SafetySection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Subheading>Safety and adoption</Subheading>
            <Heading as="h2" className="mt-2">
              Better records only matter if frontline teams can actually use
              them.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              CARE&apos;s clinical design should reduce documentation burden,
              preserve accountability, and support continuity of care across
              facilities, home visits, referrals, and program workflows.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-lg border border-[#dfe6e2] bg-white p-5"
              >
                <ShieldAlert className="mb-4 size-5 text-[#12806a]" />
                <p className="text-sm/6 font-semibold text-gray-900">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function AISection() {
  return (
    <Container className="py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Subheading>Assistive AI</Subheading>
          <Heading as="h2" className="mt-2">
            Voice and AI should draft, not decide.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            Care Scribe and related AI workflows should help clinicians capture
            structured notes, forms, summaries, and care plans with clear draft
            states, review paths, and traceability.
          </p>
        </div>
        <div className="rounded-lg border border-[#dfe6e2] bg-white p-8">
          <Mic className="size-8 text-[#12806a]" />
          <p className="mt-6 text-xl/8 font-medium text-gray-800">
            The foundation&apos;s role is to make AI safer by grounding it in
            open standards, structured clinical data, human review, and
            deployment choices that health systems can govern locally.
          </p>
        </div>
      </div>
    </Container>
  )
}

function CommunitySection() {
  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Subheading dark>Get involved</Subheading>
            <Heading as="h2" dark className="mt-2">
              Help turn clinical reality into reusable open workflows.
            </Heading>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Share workflow needs', icon: Stethoscope },
              { title: 'Review forms and modules', icon: ClipboardList },
              { title: 'Test AI documentation flows', icon: BrainCircuit },
              { title: 'Mentor implementation teams', icon: Users },
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

export default function Clinicians() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <WorkflowSection />
        <SafetySection />
        <AISection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}
