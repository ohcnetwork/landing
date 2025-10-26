import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TeleICU — Remote ICU Monitoring on CARE',
  description: 'Deploy ONVIF‑based TeleICU with integrated documentation and hub dashboards—built as a plug‑in to the FHIR‑native CARE platform.',
  keywords: 'TeleICU, remote ICU monitoring, ONVIF healthcare, critical care hub and spoke',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Specialist care reaches every bed.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Hub‑and‑spoke monitoring with ONVIF cameras and integrated rounds—<strong>near real‑time</strong>, centrally managed, <strong>documented inside CARE</strong>.
          </p>
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 max-w-lg">
            <p className="text-sm font-medium text-blue-900">
              <strong>Deployment:</strong> <strong>206 10‑bed ICUs</strong> & <strong>14 hubs</strong> across <strong>9 states</strong>
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Set up a pilot TeleICU</Button>
            <Button variant="secondary" href="/contact">Sponsor devices for a district</Button>
            <Button variant="secondary" href="/contact">Request a technical brief</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function OutcomesSection() {
  return (
    <Container className="py-24">
      <Subheading>Outcomes</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Extend specialist capacity across districts with standardized care.
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Extend Specialist Capacity</h3>
          <p className="text-blue-700">One specialist can monitor multiple ICUs across different locations</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Standardize Rounds</h3>
          <p className="text-green-700">Consistent care protocols and escalation procedures</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Quality Improvement</h3>
          <p className="text-purple-700">Capture data for continuous quality improvement and training</p>
        </div>
      </div>
    </Container>
  )
}

function FeaturesSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Features</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl">
          ONVIF‑compatible video with integrated documentation
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <BentoCard
            eyebrow="Video Monitoring"
            title="ONVIF‑compatible cameras"
            description="Near real‑time bedside view with standard ONVIF protocol support for easy integration."
            graphic={
              <div className="h-80 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900">ONVIF</div>
                  <div className="text-sm text-blue-700 mt-2">Real-time</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Documentation"
            title="Integrated rounds & notes"
            description="All TeleICU interactions documented inside the EMR with structured data capture."
            graphic={
              <div className="h-80 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-900">EMR</div>
                  <div className="text-sm text-green-700 mt-2">Integrated</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="lg:col-span-1"
          />
          <BentoCard
            eyebrow="Management"
            title="Hub dashboard oversight"
            description="Multi‑facility oversight with centralized monitoring and management capabilities."
            graphic={
              <div className="h-80 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-900">Hub</div>
                  <div className="text-sm text-purple-700 mt-2">Dashboard</div>
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
      <Heading as="h2" className="mt-2 max-w-4xl">
        Enable cameras in wards; pair with CARE; train teams
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        Start with 10–20 beds and scale. Our proven deployment pattern ensures rapid adoption and measurable impact.
      </p>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
          <div className="text-4xl font-bold text-blue-900 mb-2">1</div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Enable Cameras</h3>
          <p className="text-blue-700">Install ONVIF-compatible cameras in ICU wards</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
          <div className="text-4xl font-bold text-green-900 mb-2">2</div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">Pair with CARE</h3>
          <p className="text-green-700">Connect cameras to CARE platform for integrated monitoring</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
          <div className="text-4xl font-bold text-purple-900 mb-2">3</div>
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Train Teams</h3>
          <p className="text-purple-700">Train healthcare workers on TeleICU workflows and protocols</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
          <div className="text-4xl font-bold text-orange-900 mb-2">4</div>
          <h3 className="text-lg font-semibold text-orange-900 mb-2">Scale</h3>
          <p className="text-orange-700">Start with 10-20 beds and scale across facilities</p>
        </div>
      </div>
    </Container>
  )
}

export default function TeleICU() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <OutcomesSection />
        <FeaturesSection />
        <ImplementationSection />
      </main>
      <Footer />
    </div>
  )
}
