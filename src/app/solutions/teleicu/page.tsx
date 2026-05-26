import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TeleICU — Remote ICU Monitoring on CARE',
  description:
    'Deploy ONVIF‑based TeleICU with integrated documentation and hub dashboards—built as a plug‑in to the FHIR‑native CARE platform.',
  keywords:
    'TeleICU, remote ICU monitoring, ONVIF healthcare, critical care hub and spoke',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <div className="flex-shrink-0">
            <img
              src="/logos/10bedicu.png"
              alt="10 BED ICU"
              className="h-32 object-contain lg:h-40"
            />
          </div>
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-normal text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Critical Care reached every bed.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            The <strong>10BedICU</strong> Project sets up 10-bed ICUs in
            government hospitals using the CARE technology platform, standard
            clinical ICU protocols, and trained staff. We partner with state
            governments to deliver high-quality critical care in underserved
            areas across India.
          </p>

          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://10bedicu.org">10BedICU Project </Button>
            <Button variant="secondary" href="https://github.com/ohcnetwork">
              Explore the code
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function OutcomesSection() {
  const outcomes = [
    {
      title: 'Hub-and-spoke coverage',
      description:
        'Specialist teams can support multiple facilities through structured rounds, video, and escalation workflows.',
    },
    {
      title: 'Standardized ICU workflows',
      description:
        'CARE supports rounds, charts, clinical scoring, notes, and monitoring patterns for critical care.',
    },
    {
      title: 'Device and video integration',
      description:
        'ONVIF-compatible video and vitals integration patterns help connect bedside context to remote review.',
    },
    {
      title: 'Metrics need dates',
      description:
        'Publish ICU, hub, hospital, state, and outcome counts only with source, date, and program-owner approval.',
    },
  ]

  return (
    <Container className="py-24">
      <Subheading>Outcomes</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Extend specialist capacity across districts with standardized critical
        care workflows.
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
        {outcomes.map((outcome) => (
          <div
            key={outcome.title}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-gray-950">
              {outcome.title}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">
              {outcome.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}
function ImpactSection() {
  return (
    <Container className="py-24">
      <Subheading>Impacts</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-normal">
        Extend specialist capacity across districts with standardized care.
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6">
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
            Extend Specialist Capacity
          </h3>
          <p className="text-[#12806a]">
            One specialist can monitor multiple ICUs across different locations
          </p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6">
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
            Standardize Rounds
          </h3>
          <p className="text-[#12806a]">
            Consistent care protocols and escalation procedures
          </p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6">
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
            Quality Improvement
          </h3>
          <p className="text-[#12806a]">
            Capture data for continuous quality improvement and training
          </p>
        </div>
      </div>
    </Container>
  )
}

function FeaturesSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <Subheading>Features</Subheading>
        <Heading
          as="h2"
          className="mt-2 max-w-4xl font-display tracking-normal"
        >
          ONVIF‑compatible video with integrated documentation
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <BentoCard
            eyebrow="Video Monitoring"
            title="ONVIF‑compatible cameras"
            description="Near real‑time bedside view with standard ONVIF protocol support for easy integration."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#052e24]">ONVIF</div>
                  <div className="mt-2 text-sm text-[#12806a]">Real-time</div>
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
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#052e24]">EMR</div>
                  <div className="mt-2 text-sm text-[#12806a]">Integrated</div>
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
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#052e24]">Hub</div>
                  <div className="mt-2 text-sm text-[#12806a]">Dashboard</div>
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
        Enable cameras in wards; pair with CARE; train teams
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        Start with 10–20 beds and scale. Our proven deployment pattern ensures
        rapid adoption and measurable impact.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6 text-center">
          <div className="mb-2 text-4xl font-bold text-[#052e24]">1</div>
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
            Enable Cameras
          </h3>
          <p className="text-[#12806a]">
            Install ONVIF-compatible cameras in ICU wards
          </p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6 text-center">
          <div className="mb-2 text-4xl font-bold text-[#052e24]">2</div>
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
            Pair with CARE
          </h3>
          <p className="text-[#12806a]">
            Connect cameras to CARE platform for integrated monitoring
          </p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6 text-center">
          <div className="mb-2 text-4xl font-bold text-[#052e24]">3</div>
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
            Train Teams
          </h3>
          <p className="text-[#12806a]">
            Train healthcare workers on TeleICU workflows and protocols
          </p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6 text-center">
          <div className="mb-2 text-4xl font-bold text-[#052e24]">4</div>
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">Scale</h3>
          <p className="text-[#12806a]">
            Start with 10-20 beds and scale across facilities
          </p>
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
        <ImpactSection />
        <FeaturesSection />
        <ImplementationSection />
      </main>
      <Footer />
    </div>
  )
}
