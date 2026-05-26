import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Download,
  HeartPulse,
  Hospital,
  MapPinned,
  MonitorDot,
  ShieldCheck,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impact - CARE in the Field',
  description:
    'CARE impact across Kerala Palliative Care, TeleICU, CARE HMIS deployments, open-source contributors, and Digital Public Good validation.',
  keywords:
    'OHC impact, CARE deployments, TeleICU, Kerala Palliative Care Grid, CARE HMIS, open source healthcare impact',
}

const heroMetrics = [
  ['1.3M+', 'home-care consultations'],
  ['120+', 'TeleICU hospitals'],
  ['100+', 'HMIS hospitals'],
  ['1,385+', 'GitHub contributors'],
]

const programPanels = [
  {
    eyebrow: 'Kerala Palliative Care',
    title: 'A statewide grid for home-based care.',
    text: 'CARE powers daily operations across primary care centers, NGOs, clinicians, and field teams serving patients who need continuity beyond the hospital.',
    icon: HeartPulse,
    metrics: [
      ['1,300+', 'primary care centers'],
      ['1,300+', 'NGOs'],
      ['330,000+', 'registered patients'],
      ['1.3M+', 'home-care consultations'],
      ['12,000+', 'daily users'],
    ],
  },
  {
    eyebrow: 'TeleICU',
    title: 'Specialist critical care, extended through open infrastructure.',
    text: 'CARE supports hub-and-spoke ICU workflows across hospitals, states, patients, and daily clinical users.',
    icon: MonitorDot,
    metrics: [
      ['120+', 'hospitals'],
      ['7', 'states'],
      ['150,000+', 'patients'],
      ['1,696', 'daily active users'],
    ],
  },
  {
    eyebrow: 'CARE HMIS 3.0',
    title: 'A modern HMIS layer already live across multiple deployments.',
    text: 'CARE HMIS 3.0 supports hospital workflows across registration, encounters, notes, orders, labs, pharmacy, billing, reporting, and analytics.',
    icon: Hospital,
    metrics: [
      ['5', 'deployment states'],
      ['100+', 'hospitals'],
      ['Kerala', 'live deployment'],
      ['Karnataka', 'live deployment'],
      ['Jharkhand, Assam, Manipur', 'live deployments'],
    ],
  },
]

const validationSignals = [
  {
    label: 'Verified Digital Public Good',
    detail:
      'CARE is listed in the DPGA registry and was last evaluated on 01.07.2025.',
    icon: BadgeCheck,
  },
  {
    label: 'MIT licensed',
    detail:
      'The core remains reusable for governments, hospitals, NGOs, and implementation partners.',
    icon: ShieldCheck,
  },
  {
    label: 'Open-source community',
    detail:
      '1,385+ code contributors have helped build the CARE ecosystem on GitHub.',
    icon: Code2,
  },
]

function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-34">
          <Subheading>Impact</Subheading>
          <h1 className="mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            Open healthcare infrastructure, proven in care delivery.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            CARE is no longer only a promising open-source project. It is
            running palliative care, critical care, hospital workflows, and
            public-good infrastructure across real health systems.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/care_deployment_map.png"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Care deployments map</span>
              <Download className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/blog"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Updates of 2026</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function SnapshotSection() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_24px_80px_rgba(7,24,19,0.06)] sm:grid-cols-2 lg:grid-cols-4">
        {heroMetrics.map(([value, label]) => (
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

function ProgramPanel({
  program,
  featured = false,
}: {
  program: (typeof programPanels)[number]
  featured?: boolean
}) {
  return (
    <article
      className={
        featured
          ? 'overflow-hidden rounded-lg bg-[#052e24] text-white shadow-[0_32px_90px_rgba(5,46,36,0.22)]'
          : 'overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_18px_56px_rgba(7,24,19,0.05)]'
      }
    >
      <div
        className={
          featured
            ? 'grid gap-12 p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12'
            : 'grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.86fr_1.14fr]'
        }
      >
        <div>
          <div
            className={
              featured
                ? 'flex size-12 items-center justify-center rounded-lg border border-white/10 bg-white/10'
                : 'flex size-12 items-center justify-center rounded-lg bg-[#e8f3ed] text-[#0b6b55]'
            }
          >
            <program.icon className="size-6" />
          </div>
          <p
            className={
              featured
                ? 'mt-8 font-mono text-xs font-semibold tracking-[0.18em] text-[#b8f36f] uppercase'
                : 'mt-8 font-mono text-xs font-semibold tracking-[0.18em] text-[#12806a] uppercase'
            }
          >
            {program.eyebrow}
          </p>
          <h2
            className={
              featured
                ? 'mt-3 max-w-2xl text-4xl/[0.98] font-semibold tracking-normal text-balance sm:text-6xl/[0.92]'
                : 'mt-3 max-w-2xl text-3xl/[1] font-semibold tracking-normal text-balance text-gray-950 sm:text-5xl/[0.94]'
            }
          >
            {program.title}
          </h2>
          <p
            className={
              featured
                ? 'mt-6 max-w-2xl text-lg/7 text-white/68'
                : 'mt-6 max-w-2xl text-lg/7 text-gray-600'
            }
          >
            {program.text}
          </p>
        </div>

        <div
          className={
            featured
              ? 'grid content-end gap-3 sm:grid-cols-2'
              : 'grid content-end gap-3 sm:grid-cols-2'
          }
        >
          {program.metrics.map(([value, label]) => (
            <div
              key={`${program.eyebrow}-${value}-${label}`}
              className={
                featured
                  ? 'rounded-lg border border-white/10 bg-white/[0.055] p-5'
                  : 'rounded-lg border border-[#dfe6e2] bg-[#fbfcfb] p-5'
              }
            >
              <p
                className={
                  featured
                    ? 'text-3xl/[0.96] font-semibold tracking-normal text-white'
                    : 'text-3xl/[0.96] font-semibold tracking-normal text-gray-950'
                }
              >
                {value}
              </p>
              <p
                className={
                  featured
                    ? 'mt-2 text-sm/5 font-medium text-white/55'
                    : 'mt-2 text-sm/5 font-medium text-gray-600'
                }
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

function ProgramsSection() {
  return (
    <section className="py-10 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <Subheading>Where CARE runs</Subheading>
            <Heading as="h2" className="mt-3">
              One core. Many care delivery systems.
            </Heading>
          </div>
          <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
            These are not separate products. They are deployment patterns built
            on the same open healthcare operating layer.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {programPanels.map((program, index) => (
            <ProgramPanel
              key={program.eyebrow}
              program={program}
              featured={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

function MapSection() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_22px_70px_rgba(8,20,31,0.08)]">
          <div className="h-[420px]">
            <Map />
          </div>
        </div>

        <div>
          <Subheading>Care deployments map</Subheading>
          <Heading as="h2" className="mt-3">
            Deployment proof should be visible, navigable, and current.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            The map shows where CARE-powered programs have run across public
            health, hospitals, critical care, and community care. The 2026
            updates page carries the current narrative as deployments mature.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/care_deployment_map.png"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Download map</span>
              <Download className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/blog"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Updates of 2026</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

function ValidationSection() {
  return (
    <div className="bg-[#f7f9f6] py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <Subheading>Beyond deployments</Subheading>
            <Heading as="h2" className="mt-3">
              Public-good signals that outlast any one program.
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              OHC&apos;s impact is not only the software running in the field.
              It is the open-source community, licence, standards discipline,
              and external validation that make CARE reusable.
            </p>
          </div>

          <div className="grid gap-3">
            {validationSignals.map((signal) => (
              <div
                key={signal.label}
                className="grid gap-4 rounded-lg border border-[#dfe6e2] bg-white p-6 sm:grid-cols-[44px_0.42fr_1fr] sm:items-start"
              >
                <signal.icon className="size-5 text-[#12806a]" />
                <h3 className="font-semibold text-gray-950">{signal.label}</h3>
                <p className="text-sm/6 text-gray-600">{signal.detail}</p>
              </div>
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
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-white p-8 text-center shadow-[0_28px_90px_rgba(7,24,19,0.07)] sm:p-12">
        <MapPinned className="mx-auto size-6 text-[#12806a]" />
        <Heading as="h2" className="mx-auto mt-6 max-w-4xl">
          The point is not one deployment. It is reusable capacity.
        </Heading>
        <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
          CARE gives health systems a shared operating layer they can adapt,
          own, and extend. OHC Foundation exists to keep that layer open,
          governed, and ready for the next program.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/product/care-core" className="w-full sm:w-auto">
            Explore CARE Core
          </Button>
          <Button
            variant="secondary"
            href="/contact"
            className="w-full sm:w-auto"
          >
            Start a deployment conversation
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function Impact() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <Hero />
      <main>
        <SnapshotSection />
        <ProgramsSection />
        <MapSection />
        <ValidationSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
