import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The OHC Network — Partners, Plugins, Community',
  description:
    'A global community co‑building open, FHIR‑aligned health infrastructure with Care Core and Care Apps.',
  keywords:
    'open health ecosystem, digital public goods community, healthcare plugins, FHIR contributors',
}

const timelineItems = [
  {
    id: 1,
    title: '2020 | Initial Development',
    purpose:
      'The COVID-19 pandemic was an unprecedented crisis, and there were no existing tools to manage the scale and complexity of the outbreak. In response, a group of volunteers came together to develop CARE, a software solution aimed at managing patient data, coordinating pandemic response efforts, and streamlining resource allocation. CARE was designed to support healthcare workers and administrators in handling the surge in cases efficiently while ensuring transparency and accountability in healthcare delivery.',
    features: [
      'Patient Registration and Tracking',
      'Pandemic Response Coordination',
      'Basic Hospital and Bed Management',
      'Patient Shifting Across Facilities',
      'Collaboration with NHM Kerala',
      'Resource Allocation',
    ],
  },
  {
    id: 2,
    title: '2021 | Enhanced Capabilities for Oxygen Tracking',
    purpose:
      'During the second wave of COVID-19, oxygen availability became a critical issue across India. Oxygen tracking and management features were added to CARE to effectively manage oxygen availability and distribution in Kerala. CARE powered the oxygen war room in Kerala helping district administration to effectively manage the pandemic.',
    features: [
      'Adoption by State Health Dept across 6 States',
      'Oxygen Capacity and Utilization Tracking',
      'Real-Time Resource Monitoring Dashboards',
      'Facility-Level Allocation Management',
      'Reporting and Analytics',
    ],
  },
  {
    id: 3,
    title:
      '2021 | Recognized as the 50th Digital Public Good by the United Nations.',
    purpose:
      'CARE was recognized as 50th Digital Public Good by United Nations considering its transformative healthcare management system, centralizing patient and capacity management across hospitals which empower administrators and healthcare professionals with real-time data for better decision-making',
    features: [
      'CARE was recognized as 50th Digital Public Good by United Nations',
    ],
  },
  {
    id: 4,
    title: '2021 | CARE powers the 10BedICU Project',
    purpose:
      'CARE identified as the teleICU tooling for 10BedICU Project, enabling technology-driven ICU care in rural India and providing TeleICU services to the remotest regions, impacting thousands of lives.CARE is deployed as part of the project by State health departments across government hospitals.',
    features: [
      'IoT integration with medical devices (FHIR and ONVIF based)',
      'ICU Rounds and Charts',
      'Clinical Scoring Systems',
    ],
  },
  {
    id: 5,
    title: '2022-2023 | Continuous Improvements and Advanced Features',
    purpose:
      'Supported the expansion of the 10BedICU project and addressed broader healthcare needs. Over three years, the 10BedICU initiative expanded to 9 states, covering more than 200 hospitals and delivering critical care solutions to underserved regions.',
    features: [
      'Compliance with the Ayushman Bharat Digital Mission (ABDM)',
      'Remote ICU Monitoring Capabilities',
      'Integration with ICU Systems',
      'Remote Doctor Connect',
      'TeleICU Scalability',
      'Secure Data Handling',
      'Reports and Dashboards',
    ],
  },
  {
    id: 6,
    title: '2024 | Transition to HMIS and tooling for Palliative Care Grid',
    purpose:
      'CARE is evolving into a comprehensive Hospital Management Information System (HMIS) to address the growing needs of healthcare institutions. Originally developed as a pandemic management and TeleICU tool, CARE is now expanding to deliver holistic solutions for hospital operations, patient workflows, and administrative management. This transformation empowers healthcare providers to optimize operations, enhance resource efficiency, and improve patient care. Building on its roots as a pandemic management and TeleICU platform, CARE is also being enhanced with a Palliative Care Grid to offer home-based care for elderly citizens. This innovative feature facilitates coordinated care delivery at home, catering to the unique requirements of the aging population. The first implementation is underway in Kerala, in partnership with the National Health Mission (NHM) and private NGOs, representing a significant leap in community healthcare development.',
    features: [
      'Integration with the Health Care Exchange (HCX)',
      'End-to-End Patient Management Workflows',
      'Inventory and Asset Management',
      'Comprehensive Facility Management',
      'Modular and Scalable Architecture',
      'Home-Based Care Coordination',
      'Caregiver and Patient Management',
      'Collaboration with NHM and NGOs',
      'Resource Allocation for Community Care',
      'Telemedicine Support',
    ],
  },
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Open infrastructure only works when built together.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Governments, hospitals, implementers, researchers, and volunteers
            co‑build around <strong>Care Core</strong> and{' '}
            <strong>Care Apps</strong>.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/developers">Join the developer community</Button>
            <Button variant="secondary" href="/contact">
              Partner as an implementer
            </Button>
            <Button variant="secondary" href="/contact">
              Sponsor a state program
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CommunitySection() {
  return (
    <Container className="py-24">
      <Subheading>Community (by the numbers)</Subheading>
      <Heading as="h2" className="max-w-4x mt-2 font-display tracking-tight">
        Global community of contributors and maintainers building Digital Public
        Goods
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
          <div className="mb-2 text-4xl font-bold text-blue-900">1,040+</div>
          <p className="font-medium text-blue-700">Contributors</p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
          <div className="mb-2 text-4xl font-bold text-green-900">14+</div>
          <p className="font-medium text-green-700">Core maintainers</p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-6 text-center">
          <div className="mb-2 text-4xl font-bold text-purple-900">50%</div>
          <p className="font-medium text-purple-700">Growth in last 6 months</p>
        </div>
      </div>
    </Container>
  )
}

function DeploymentSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Where it runs</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
          10 States have deployed CARE to power different solutions
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <BentoCard
            eyebrow="States Deployed"
            title="10 Indian States"
            description="CARE powers solutions across 10 Indian states with proven deployment patterns and frontline adoption."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-900">10</div>
                  <div className="mt-2 text-sm text-blue-700">States</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Solutions"
            title="Multiple Use Cases"
            description="Hospital Management, TeleICU, Palliative Care, Care Janwar, and Care Clinics deployed across different states."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-900">5+</div>
                  <div className="mt-2 text-sm text-green-700">Solutions</div>
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

function TimelineSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Our Journey</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
          From pandemic response to comprehensive healthcare platform
        </Heading>
        <p className="mt-6 max-w-4xl text-lg text-gray-600">
          CARE&apos;s evolution from a crisis response tool to a comprehensive
          healthcare management system.
        </p>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500"></div>

          <div className="space-y-16">
            {timelineItems.map((item) => (
              <div key={item.id} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-blue-500 bg-white shadow-lg">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                    <div className="p-8">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800">
                            Milestone {item.id}
                          </span>
                        </div>
                      </div>

                      <p className="mb-6 leading-relaxed text-gray-700">
                        {item.purpose}
                      </p>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
                          Key Features & Achievements
                        </h4>
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                          {item.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <ChevronRightIcon className="mr-2 h-4 w-4 flex-shrink-0 text-blue-500" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function EcosystemSection() {
  return (
    <Container className="py-24">
      <Subheading>Ecosystem</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        Governments, hospitals, implementers, researchers, and volunteers
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        The OHC Network brings together diverse stakeholders to build open,
        interoperable health infrastructure that serves everyone.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-blue-900">
            Governments
          </h3>
          <p className="text-blue-700">
            National and state health departments deploying CARE at scale
          </p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-green-900">
            Hospitals
          </h3>
          <p className="text-green-700">
            Healthcare facilities using CARE for patient care and management
          </p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-purple-900">
            Implementers
          </h3>
          <p className="text-purple-700">
            Technology partners and system integrators deploying CARE
          </p>
        </div>
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-orange-900">
            Researchers
          </h3>
          <p className="text-orange-700">
            Academic and research institutions contributing to CARE development
          </p>
        </div>
      </div>
    </Container>
  )
}

export default function Network() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <CommunitySection />
        <DeploymentSection />
        <TimelineSection />
        <EcosystemSection />
      </main>
      <Footer />
    </div>
  )
}
