import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { TopGradient } from '@/components/TopGradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impact — States, Hospitals, and Frontline Adoption',
  description: 'See OHC&apos;s impact: 10 States, 1,200+ hospitals, 200k encounters, and 10k+ workers using CARE.',
  keywords: 'digital health impact, HMIS scale, open source healthcare outcomes',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Public code → public impact.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Real-world deployment across 10 States with measurable outcomes in healthcare delivery and frontline adoption.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Request a briefing</Button>
            <Button variant="secondary" href="/contact">Download the impact one‑pager</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function AtAGlanceSection() {
  return (
    <Container className="py-24">
      <Subheading>At a glance</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Scale and impact across 10 Indian states
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
          <div className="text-4xl font-bold text-blue-900 mb-2">10</div>
          <p className="text-blue-700 font-medium">States deployed</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
          <div className="text-4xl font-bold text-green-900 mb-2">1,200+</div>
          <p className="text-green-700 font-medium">Hospitals in &lt; 6 weeks</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
          <div className="text-4xl font-bold text-purple-900 mb-2">200k+</div>
          <p className="text-purple-700 font-medium">Encounters captured</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
          <div className="text-4xl font-bold text-orange-900 mb-2">10k+</div>
          <p className="text-orange-700 font-medium">Healthcare workers</p>
        </div>
      </div>
    </Container>
  )
}

function CaseStudiesSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Case studies</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl">
          Real-world deployments with measurable outcomes
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <BentoCard
            eyebrow="TeleICU"
            title="206 10‑bed ICUs & 14 hubs across 9 states"
            description="Hub-and-spoke monitoring with ONVIF cameras and integrated rounds for specialist care delivery."
            graphic={
              <div className="h-80 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900">206</div>
                  <div className="text-sm text-blue-700 mt-2">ICUs</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Kerala Palliative Care Grid"
            title="1,300+ centers, 221k registered, 669k impacted, 1,320 DAU"
            description="Statewide home-based care coordination with real-time updates and structured data capture."
            graphic={
              <div className="h-80 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-900">221k</div>
                  <div className="text-sm text-green-700 mt-2">Patients</div>
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

function ImpactMetricsSection() {
  return (
    <Container className="py-24">
      <Subheading>Impact metrics</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Measurable outcomes across different healthcare settings
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Deployment</h3>
          <p className="text-gray-600 mb-4">1,200+ hospitals deployed in less than 6 weeks using our proven implementation playbook.</p>
          <div className="text-2xl font-bold text-blue-900">6 weeks</div>
          <p className="text-sm text-gray-600">Average deployment time</p>
        </div>
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontline Adoption</h3>
          <p className="text-gray-600 mb-4">10k+ healthcare workers actively using CARE with high satisfaction rates.</p>
          <div className="text-2xl font-bold text-green-900">10k+</div>
          <p className="text-sm text-gray-600">Active users</p>
        </div>
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Capture</h3>
          <p className="text-gray-600 mb-4">200k+ structured encounters captured with FHIR compliance and interoperability.</p>
          <div className="text-2xl font-bold text-purple-900">200k+</div>
          <p className="text-sm text-gray-600">Encounters captured</p>
        </div>
      </div>
    </Container>
  )
}

function TestimonialsSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Testimonials</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl">
          What implementers and healthcare workers say about CARE
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <blockquote className="text-lg text-gray-700 mb-4">
              &quot;Rapid rollout to hundreds of facilities without lock‑in.&quot;
            </blockquote>
            <cite className="text-sm font-medium text-gray-900">— State program lead</cite>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <blockquote className="text-lg text-gray-700 mb-4">
              &quot;Frontline teams adopted it quickly; templates and voice‑to‑text help.&quot;
            </blockquote>
            <cite className="text-sm font-medium text-gray-900">— Nursing admin</cite>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Impact() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <AtAGlanceSection />
        <CaseStudiesSection />
        <ImpactMetricsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
