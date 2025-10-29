import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { TopGradient } from '@/components/TopGradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import { ExploreButtons } from '@/components/explore-buttons'

export const metadata: Metadata = {
  title: 'Palliative Care Grid — Home‑Based Care at Scale',
  description: 'Coordinate home visits statewide with CARE—frontline apps, structured records, and live dashboards proven in Kerala.',
  keywords: 'palliative care digital, home health EMR, ASHA coordination, community health platform',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Continuity of Care at Home, Reimagined
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            CARE extends the hospital’s care ecosystem into patients’ homes,  enabling caregivers to deliver continuous, coordinated, and compassionate care.
          </p>

          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">See a field demo</Button>
            <Button variant="secondary" href="/contact">Fund a district</Button>
            <Button variant="secondary" href="/contact">Talk to implementers</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ImpactSection() {
  return (
    <Container className="py-24">
      <Subheading>By the numbers</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        Kerala&apos;s Palliative Care Grid demonstrates real-world impact at scale.
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
          <div className="text-4xl font-bold text-green-900 mb-2">2600+</div>
          <p className="text-green-700 font-medium">Care Facilities</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
          <div className="text-4xl font-bold text-blue-900 mb-2">221k+</div>
          <p className="text-blue-700 font-medium">Patients registered</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
          <div className="text-4xl font-bold text-purple-900 mb-2">750k+</div>
          <p className="text-purple-700 font-medium">Home Visits</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
          <div className="text-4xl font-bold text-orange-900 mb-2">1,300+</div>
          <p className="text-orange-700 font-medium">active users
          </p>
        </div>
      </div>
    </Container>
  )
}

function WhyItWorksSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Why it works</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
          Frontline app for visits, notes, and follow‑ups with structured records
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <BentoCard
            eyebrow="Frontline App"
            title="Mobile-first for field workers"
            description="ASHA workers and nurses use mobile apps for home visits, notes, and follow-ups with offline capability."
            graphic={
              <div className="h-80 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-900">Mobile</div>
                  <div className="text-sm text-green-700 mt-2">First</div>
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
              <div className="h-80 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900">FHIR</div>
                  <div className="text-sm text-blue-700 mt-2">Structured</div>
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
              <div className="h-80 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-900">Live</div>
                  <div className="text-sm text-purple-700 mt-2">Dashboards</div>
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
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        Pilot a district → scale statewide
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        Start with a single district to validate workflows, train frontline workers, then scale across the state with proven processes.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-2">District Pilot</h3>
          <p className="text-green-700">Start with one district to validate workflows
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Training & Adoption</h3>
          <p className="text-blue-700">Training of frontline workers</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">State Scale</h3>
          <p className="text-purple-700">Scale across all districts with standardized processes and dashboards
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
