import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Palliative Care Grid — Home‑Based Care at Scale',
  description:
    'Coordinate home visits statewide with CARE—frontline apps, structured records, and live dashboards proven in Kerala.',
  keywords:
    'palliative care digital, home health EMR, ASHA coordination, community health platform',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-normal text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Continuity of Care at Home, Reimagined
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            CARE extends the hospital’s care ecosystem into patients’ homes,
            enabling caregivers to deliver continuous, coordinated, and
            compassionate care.
          </p>

          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Discuss deployment model</Button>
            {/* <Button variant="secondary" href="/contact">Fund a district</Button> */}
            <Button variant="secondary" href="/contact">
              Talk to implementers
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ImpactSection() {
  const impactAreas = [
    {
      title: 'Care centers and NGOs',
      description:
        'Facility and community teams coordinate home-based care through shared patient records and visit workflows.',
    },
    {
      title: 'Registered patients',
      description:
        'Patient counts should be published with a current as-of date and program-owner verification.',
    },
    {
      title: 'Home visits and encounters',
      description:
        'Encounter metrics should be separated from patient counts, active users, and impacted population.',
    },
    {
      title: 'Daily adoption',
      description:
        'Active usage should define role, date range, and measurement method before publication.',
    },
  ]

  return (
    <Container className="py-24">
      <Subheading>Impact model</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-normal">
        Kerala&apos;s Palliative Care Grid demonstrates why home-based care
        needs shared infrastructure.
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        Public metrics for centers, registered patients, visits, and daily
        adoption should be pulled from the metrics register with source and
        as-of dates before publication.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
        {impactAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-gray-950">
              {area.title}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">{area.description}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function WhyItWorksSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <Subheading>Why it works</Subheading>
        <Heading
          as="h2"
          className="mt-2 max-w-4xl font-display tracking-normal"
        >
          Frontline app for visits, notes, and follow‑ups with structured
          records
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <BentoCard
            eyebrow="Frontline App"
            title="Mobile-first for field workers"
            description="ASHA workers and nurses use mobile apps for home visits, notes, and follow-ups with offline capability."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#052e24]">
                    Mobile
                  </div>
                  <div className="mt-2 text-sm text-[#12806a]">First</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Care Core"
            title="Structured records & shareable"
            description="All patient data captured in FHIR format with seamless sharing across care teams and facilities."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#052e24]">FHIR</div>
                  <div className="mt-2 text-sm text-[#12806a]">Structured</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="lg:col-span-1"
          />
          <BentoCard
            eyebrow="Dashboards"
            title="Live coverage & outcomes tracking"
            description="Real-time dashboards track coverage, outcomes, and quality metrics across the entire state."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#052e24]">Live</div>
                  <div className="mt-2 text-sm text-[#12806a]">Dashboards</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-b-4xl lg:col-span-1 lg:rounded-tr-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function ImplementationSection() {
  return (
    <Container className="py-24">
      <Subheading>Implementation</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-normal">
        Pilot a district → scale statewide
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        Start with a single district to validate workflows, train frontline
        workers, then scale across the state with proven processes.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6">
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
            District Pilot
          </h3>
          <p className="text-[#12806a]">
            Start with one district to validate workflows
          </p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6">
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
            Training & Adoption
          </h3>
          <p className="text-[#12806a]">Training of frontline workers</p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6">
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
            State Scale
          </h3>
          <p className="text-[#12806a]">
            Scale across all districts with standardized processes and
            dashboards
          </p>
        </div>
      </div>
    </Container>
  )
}

export default function PalliativeCare() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <ImpactSection />
        <WhyItWorksSection />
        <ImplementationSection />
      </main>
      <Footer />
    </div>
  )
}
