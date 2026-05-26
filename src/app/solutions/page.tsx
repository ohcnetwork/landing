import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  ArrowRight,
  HeartPulse,
  Hospital,
  MonitorDot,
  Stethoscope,
  Workflow,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions - CARE Deployment Patterns',
  description:
    'Explore CARE deployment patterns for hospital management, TeleICU, palliative care, clinics, and public health workflows.',
  keywords:
    'CARE solutions, open source HMIS, TeleICU, palliative care grid, primary care clinics, healthcare workflows',
}

const solutions = [
  {
    title: 'Hospital Management / HMIS',
    description:
      'Registration, encounters, notes, orders, labs, pharmacy, billing, reports, dashboards, and patient portal workflows.',
    href: '/solutions/hospital-management',
    icon: Hospital,
  },
  {
    title: 'TeleICU',
    description:
      'Hub-and-spoke critical care workflows for rounds, remote specialist support, cameras, devices, and care coordination.',
    href: '/solutions/teleicu',
    icon: MonitorDot,
  },
  {
    title: 'Palliative Care Grid',
    description:
      'Home-based care coordination, community workflows, structured follow-up, tasks, referrals, and longitudinal records.',
    href: '/solutions/palliative-care',
    icon: HeartPulse,
  },
  {
    title: 'Clinics and Primary Care',
    description:
      'Lightweight workflows for outpatient care, scheduling, prescriptions, investigations, follow-up, and reporting.',
    href: '/solutions/care-clinics',
    icon: Stethoscope,
  },
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>Solutions</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            CARE Core becomes real through deployable healthcare workflows.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            OHC positions solutions as reusable deployment patterns on top of a
            shared open core: hospital systems, critical care, palliative care,
            clinics, and public health programs.
          </p>
        </div>
      </Container>
    </div>
  )
}

function SolutionsSection() {
  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {solutions.map((solution) => (
          <a
            key={solution.title}
            href={solution.href}
            className="group rounded-lg border border-[#dfe6e2] bg-white p-8 transition hover:border-[#12806a]/40 hover:shadow-lg"
          >
            <solution.icon className="size-7 text-[#12806a]" />
            <h2 className="mt-8 text-2xl font-semibold tracking-normal text-gray-950">
              {solution.title}
            </h2>
            <p className="mt-4 text-base/7 text-gray-600">
              {solution.description}
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#12806a]">
              Explore solution
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </p>
          </a>
        ))}
      </div>
    </Container>
  )
}

function PatternSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Subheading>Deployment pattern</Subheading>
            <Heading as="h2" className="mt-2">
              Solutions should extend the core, not split the commons.
            </Heading>
          </div>
          <div className="rounded-lg border border-[#dfe6e2] bg-white p-8">
            <Workflow className="size-8 text-[#12806a]" />
            <p className="mt-6 text-xl/8 font-medium text-gray-800">
              Each solution page should explain the problem, the CARE workflow,
              modules used, deployment model, implementation responsibilities,
              proof points, and a clear CTA for that audience.
            </p>
            <div className="mt-8">
              <Button href="/product/care-core">Understand CARE Core</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Solutions() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <SolutionsSection />
        <PatternSection />
      </main>
      <Footer />
    </div>
  )
}
