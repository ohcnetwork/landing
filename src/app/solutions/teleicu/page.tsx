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
  Camera,
  ClipboardCheck,
  Cpu,
  FileText,
  GraduationCap,
  HeartPulse,
  Hospital,
  Network,
  Play,
  Stethoscope,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CARE TeleICU - Open Critical Care Infrastructure',
  description:
    'CARE TeleICU powers hub-and-spoke critical care networks for government hospitals, 10-bed ICU units, remote specialist review, CARE EMR documentation, ICU protocols, training, equipment workflows, and AI-ready critical care data.',
  keywords: [
    'TeleICU',
    'CARE TeleICU',
    '10BedICU',
    'remote ICU monitoring',
    'critical care infrastructure',
    'hub and spoke TeleICU',
    'open source TeleICU EMR',
    'CARE EMR',
    'government hospital ICU',
    'ONVIF healthcare',
    'ICU protocols',
    'critical care training',
    'rural critical care',
    'digital public goods healthcare',
  ],
  alternates: {
    canonical: '/solutions/teleicu',
  },
  openGraph: {
    title: 'CARE TeleICU - Open Critical Care Infrastructure',
    description:
      'A CARE-powered TeleICU model for 10-bed ICUs, specialist hubs, protocols, training, and critical care documentation.',
    url: '/solutions/teleicu',
    images: [
      {
        url: '/logos/10bedicu.png',
        width: 500,
        height: 500,
        alt: '10BedICU logo',
      },
    ],
  },
  twitter: {
    title: 'CARE TeleICU - Open Critical Care Infrastructure',
    description:
      'Hub-and-spoke critical care networks powered by CARE, TeleICU workflows, protocols, training, and open infrastructure.',
    images: ['/logos/10bedicu.png'],
  },
}

const metrics = [
  { value: '216', label: '10BedICU units' },
  { value: '100,000+', label: 'lives saved' },
  { value: '15', label: 'TeleICU hubs' },
  { value: '10', label: 'program states' },
  { value: '28%', label: 'of India covered' },
]

const states = [
  'Karnataka',
  'Manipur',
  'Meghalaya',
  'Sikkim',
  'Nagaland',
  'Assam',
  'Puducherry',
  'Jharkhand',
  'Andhra Pradesh',
  'Telangana',
]

const modelLayers = [
  {
    title: 'Government hospital spoke',
    text: 'A 10-bed ICU unit is established inside a secondary government hospital, close to patients who would otherwise travel for critical care.',
    icon: Hospital,
  },
  {
    title: 'Specialist TeleICU hub',
    text: 'Medical college or specialist hub teams support multiple spoke hospitals through remote review, structured rounds, escalation, and mentoring.',
    icon: Network,
  },
  {
    title: 'CARE technology platform',
    text: 'CARE brings the ICU record, patient timeline, orders, notes, rounds, forms, video context, and reporting into one open clinical platform.',
    icon: Cpu,
  },
]

const operatingSystem = [
  {
    title: 'ICU equipment',
    text: 'Beds, monitors, ventilators, oxygen support, and bedside infrastructure give each unit the physical critical-care base.',
    icon: Bed,
  },
  {
    title: 'TeleICU video and devices',
    text: 'Camera and bedside signals help specialists see context, review patients, and guide spoke teams remotely.',
    icon: Camera,
  },
  {
    title: 'CARE EMR workflows',
    text: 'Rounds, notes, investigations, vitals, clinical forms, orders, and handover records stay attached to the patient timeline.',
    icon: FileText,
  },
  {
    title: 'ICU protocols',
    text: 'Standard clinical protocols make care more consistent and give teams a shared operating model for critical situations.',
    icon: ClipboardCheck,
  },
  {
    title: 'Training programs',
    text: 'Clinical teams are trained on ICU practices, equipment handling, TeleICU workflows, and CARE software usage.',
    icon: GraduationCap,
  },
  {
    title: 'Community participation',
    text: 'Local governance and Rogi Kalyan Samithi-style participation support adoption, accountability, and long-term sustainability.',
    icon: Users,
  },
]

const outcomes = [
  {
    title: 'Specialist reach without moving every patient',
    text: 'Hub teams can support several district and smaller hospitals while local teams remain the point of care.',
    icon: Stethoscope,
  },
  {
    title: 'Structured critical-care records',
    text: 'CARE keeps remote reviews, ICU notes, observations, orders, and escalation workflows in the same clinical record.',
    icon: HeartPulse,
  },
  {
    title: 'Quality improvement loop',
    text: 'Consistent documentation, protocols, and dashboards make training, supervision, reporting, and operational review easier.',
    icon: Activity,
  },
]

const launchMilestones = [
  ['May 2022', 'Manipur'],
  ['Nov 2022', 'Karnataka'],
  ['Jan 2023', 'Nagaland'],
  ['Jun 2023', 'Assam'],
  ['Dec 2023', 'Meghalaya'],
  ['Feb 2024', 'Puducherry'],
  ['Mar 2024', 'Sikkim'],
]

const faqs = [
  {
    question: 'What is CARE TeleICU?',
    answer:
      'CARE TeleICU is a hub-and-spoke critical care workflow built on CARE. It connects ICU spoke hospitals with specialist hubs through CARE EMR documentation, video/device context, ICU protocols, training, dashboards, and escalation workflows.',
  },
  {
    question: 'How is CARE used in the 10BedICU model?',
    answer:
      '10BedICU uses CARE as the technology platform for ICU documentation, TeleICU workflows, patient timelines, forms, rounds, notes, reporting, and remote specialist review alongside equipment, protocols, training, and community participation.',
  },
  {
    question: 'Can TeleICU be deployed outside the 10BedICU program?',
    answer:
      'Yes. The same CARE TeleICU architecture can support critical-care networks, hospital groups, government programs, and implementation partners that need remote specialist review and structured critical-care documentation.',
  },
]

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CARE TeleICU',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    url: 'https://ohc.network/solutions/teleicu',
    description:
      'CARE TeleICU supports hub-and-spoke critical care networks with remote ICU review, CARE EMR workflows, video and device context, protocols, training, and dashboards.',
    publisher: {
      '@type': 'Organization',
      name: 'Open Healthcare Network Foundation',
      url: 'https://ohc.network',
    },
    featureList: [
      'Hub-and-spoke TeleICU workflows',
      'CARE EMR documentation for ICU rounds, notes, observations, and orders',
      'Video and bedside device context',
      'ICU protocols and training workflows',
      'Program dashboards and implementation reporting',
      'AI-ready structured critical-care records',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
]

function HeroDiagram() {
  return (
    <div className="relative mx-auto mt-16 max-w-6xl">
      <div className="absolute inset-x-12 top-16 h-48 rounded-full bg-[#b8f36f]/20 blur-3xl" />
      <div className="relative rounded-lg border border-[#dce7df] bg-white/68 p-3 shadow-[0_34px_110px_rgba(7,24,19,0.13)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-lg bg-[#041611] p-4 text-white">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.1fr_0.95fr] lg:items-center">
            <div className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg border border-white/10 bg-white/10">
                  <Hospital className="size-6 text-[#b8f36f]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                    Spoke unit
                  </p>
                  <p className="mt-1 text-2xl/[1] font-semibold">10-bed ICU</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-5 gap-1.5">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex aspect-square items-center justify-center rounded-md border border-white/10 bg-white/[0.08]"
                  >
                    <Bed className="size-4 text-white/72" />
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm/6 text-white/56">
                Government hospital ICU beds with local teams, equipment, and
                CARE workflows.
              </p>
            </div>

            <div className="relative rounded-lg border border-white/12 bg-[linear-gradient(145deg,rgba(104,224,157,0.42),rgba(6,76,57,0.86)_46%,rgba(3,27,21,0.98))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(230,255,232,0.28),transparent_30%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-lg border border-white/15 bg-white/12">
                      <Cpu className="size-6 text-[#e8fff0]" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-white/58 uppercase">
                        Technology layer
                      </p>
                      <p className="mt-1 text-3xl/[0.95] font-semibold">
                        CARE TeleICU
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold text-white/70">
                    EMR + Video + Protocols
                  </span>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-2">
                  {[
                    'Rounds',
                    'Vitals',
                    'Orders',
                    'Notes',
                    'Alerts',
                    'Reports',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.08] px-3 py-3 text-sm font-semibold"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg border border-white/10 bg-white/10">
                  <Stethoscope className="size-6 text-[#b8f36f]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                    Specialist hub
                  </p>
                  <p className="mt-1 text-2xl/[1] font-semibold">TeleICU hub</p>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                {['Remote review', 'Escalation', 'Mentoring', 'Dashboard'].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#061f19]/82 px-3 py-2 text-sm font-semibold"
                    >
                      <BadgeCheck className="size-4 text-[#b8f36f]" />
                      {item}
                    </div>
                  ),
                )}
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
            <img
              src="/logos/10bedicu.png"
              alt="10BedICU"
              className="mx-auto h-20 w-20 object-contain sm:h-24 sm:w-24"
            />
            <Subheading as="div" className="mt-8">
              CARE TeleICU
            </Subheading>
            <h1 className="mx-auto mt-5 max-w-6xl font-display text-6xl/[0.9] font-semibold tracking-normal text-balance text-[#05070c] sm:text-8xl/[0.84] md:text-9xl/[0.82]">
              Critical care, anywhere.
            </h1>
            <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/72 sm:text-2xl/8">
              CARE TeleICU is the open critical-care layer behind 10BedICU:
              10-bed ICU units, specialist hubs, CARE EMR workflows, video and
              device context, protocols, training, and program dashboards for
              underserved hospitals.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href="https://10bedicu.org/">
                Visit 10BedICU
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="secondary" href="/contact">
                Plan a TeleICU deployment
              </Button>
            </div>
          </div>

          <HeroDiagram />

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-2 sm:grid-cols-5">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-[#dfe6e2] bg-white/72 px-3 py-4 text-center shadow-[0_10px_30px_rgba(7,24,19,0.04)] backdrop-blur-xl"
              >
                <p className="text-3xl/[1] font-semibold tracking-normal text-gray-950">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs/5 font-semibold text-[#12806a]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-4 max-w-4xl text-center text-xs/5 text-gray-500">
            Program figures are from 10BedICU public reporting.
          </p>
        </div>
      </Container>
    </div>
  )
}

function ModelSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <Subheading>Program model</Subheading>
          <Heading as="h2" className="mt-3 max-w-4xl">
            The ICU is local. The specialist network is shared.
          </Heading>
        </div>
        <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
          10BedICU began in 2021 to bring critical-care infrastructure to rural
          and smaller government hospitals. CARE makes the model digital:
          patient records, ICU rounds, escalation, reporting, and remote review
          stay on one shared platform.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {modelLayers.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-7 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <item.icon className="size-6 text-[#12806a]" />
            <h3 className="mt-10 text-2xl/[1.05] font-semibold text-gray-950">
              {item.title}
            </h3>
            <p className="mt-4 text-sm/6 text-gray-600">{item.text}</p>
          </article>
        ))}
      </div>
    </Container>
  )
}

function OperatingSystemSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Subheading as="div">What the model needs</Subheading>
        <Heading as="h2" className="mt-3">
          Critical care is a system, not a camera feed.
        </Heading>
        <p className="mt-6 text-lg/7 text-gray-600">
          The 10BedICU approach works because physical infrastructure, CARE,
          TeleICU hubs, training, protocols, and local community participation
          reinforce each other.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {operatingSystem.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_18px_58px_rgba(7,24,19,0.04)]"
          >
            <item.icon className="size-5 text-[#12806a]" />
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

function OutcomesSection() {
  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Subheading dark>Why it matters</Subheading>
            <Heading as="h2" dark className="mt-3">
              Specialist care travels through infrastructure.
            </Heading>
            <p className="mt-6 text-lg/7 text-white/62">
              CARE TeleICU lets critical-care knowledge, protocols, and review
              capacity move across a network while patients stay closer to home.
            </p>
          </div>
          <div className="grid gap-3">
            {outcomes.map((item) => (
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

function StateCoverageSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Subheading>Program states</Subheading>
          <Heading as="h2" className="mt-3">
            A repeatable rollout pattern across states.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            10BedICU deployments span ten states and union territories, with
            state launches documented across multiple programs.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {states.map((state) => (
            <div
              key={state}
              className="flex items-center gap-3 rounded-lg border border-[#dfe6e2] bg-white p-4 shadow-[0_12px_36px_rgba(7,24,19,0.035)]"
            >
              <BadgeCheck className="size-5 shrink-0 text-[#12806a]" />
              <p className="font-semibold text-gray-950">{state}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-lg border border-[#dfe6e2] bg-white p-6 shadow-[0_24px_80px_rgba(7,24,19,0.05)]">
        <div className="grid gap-4 md:grid-cols-7">
          {launchMilestones.map(([date, state]) => (
            <div key={`${date}-${state}`} className="min-w-0">
              <p className="font-mono text-xs font-semibold text-[#12806a]">
                {date}
              </p>
              <p className="mt-2 truncate text-sm font-semibold text-gray-950">
                {state}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function VideoSection() {
  return (
    <div className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Subheading>Field story</Subheading>
            <Heading as="h2" className="mt-3">
              See how a 10-bed ICU reaches remote areas.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              A field story from Nagaland shows how critical-care
              infrastructure, training, and remote support change access for
              smaller hospitals.
            </p>
            <div className="mt-8">
              <Button
                variant="secondary"
                href="https://youtube.com/watch?v=lMTrirp__SI"
              >
                Watch on YouTube
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
          <a
            href="https://youtube.com/watch?v=lMTrirp__SI"
            className="group relative block overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#052e24] shadow-[0_34px_100px_rgba(5,46,36,0.18)]"
          >
            <div className="aspect-video bg-[url('https://i.ytimg.com/vi/lMTrirp__SI/hqdefault.jpg')] bg-cover bg-center opacity-70 transition group-hover:scale-[1.015]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,46,36,0.95),rgba(5,46,36,0.42)_52%,rgba(184,243,111,0.18))]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/14 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <Play className="ml-1 size-8 fill-white text-white" />
              </div>
            </div>
          </a>
        </div>
      </Container>
    </div>
  )
}

function AiSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="rounded-lg border border-[#dfe6e2] bg-[#fbfcfb] p-8 shadow-[0_24px_80px_rgba(7,24,19,0.05)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <Subheading>AI-ready critical care</Subheading>
            <Heading as="h2" className="mt-3">
              AI belongs on top of trusted records, not outside the ICU.
            </Heading>
          </div>
          <div>
            <p className="text-lg/7 text-gray-600">
              CARE TeleICU creates structured critical-care data: observations,
              orders, notes, forms, escalations, handovers, and outcomes. That
              makes AI assistance possible for documentation, summarization,
              risk review, handover support, and quality improvement while
              keeping clinicians in control.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/product/care-ai">
                Explore CARE AI
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="secondary" href="/product/care-core">
                CARE Core
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function FaqSection() {
  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Subheading as="div">TeleICU FAQ</Subheading>
          <Heading as="h2" className="mt-3">
            Critical-care infrastructure, explained plainly.
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
        <Subheading as="div">Deploy CARE TeleICU</Subheading>
        <Heading as="h2" className="mt-3">
          Build a critical-care network that can keep improving.
        </Heading>
        <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
          OHC can help governments, hospitals, and implementation partners plan
          CARE-based TeleICU deployments, integrate remote specialist workflows,
          and adapt the model for local clinical and operational realities.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="/contact">Start a deployment conversation</Button>
          <Button variant="secondary" href="/product/apps-integrations">
            TeleICU as a CARE app
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

export default function TeleICU() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <StructuredData />
      <Hero />
      <main>
        <ModelSection />
        <OperatingSystemSection />
        <OutcomesSection />
        <StateCoverageSection />
        <VideoSection />
        <AiSection />
        <FaqSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
