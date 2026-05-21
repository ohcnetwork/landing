import { Container } from '@/components/container'
import { ExploreButtons } from '@/components/explore-buttons'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Care Clinics — Primary & Multi‑Specialty Clinic Platform',
  description:
    'Clinic‑ready EMR with scheduling, inventory, pharmacy, billing, reports, and telehealth—backed by a FHIR‑native core.',
  keywords:
    'clinic EMR FHIR, primary care EMR, multi‑clinic management, open source clinic software',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Built for Clinics That Want to Scale, Not Just Digitize.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            CARE gives clinics the digital foundation to scale and operate
            efficiently.
          </p>
          <ExploreButtons />
        </div>
      </Container>
    </div>
  )
}

function OutcomesSection() {
  return (
    <Container className="py-24">
      <Subheading>Outcomes</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        Faster intake, fewer clicks with templates and voice‑to‑text
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-blue-900">
            Faster Intake
          </h3>
          <p className="text-blue-700">
            Templates, autocomplete, and voice-to-text reduce data entry time by
            60%
          </p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-green-900">
            Public Facility Pages
          </h3>
          <p className="text-green-700">
            Online booking and appointment management for better patient
            experience
          </p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-purple-900">
            Clean Billing & Reports
          </h3>
          <p className="text-purple-700">
            Integrated inventory, procurement, billing, and reporting for
            complete clinic management
          </p>
        </div>
      </div>
    </Container>
  )
}

function FeaturesSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Core Features</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
          Everything you need for comprehensive clinic management
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Visit Capture
              </h3>
              <p className="text-gray-600">
                Structured encounter forms with templates and voice-to-text
                input
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Scheduling
              </h3>
              <p className="text-gray-600">
                Appointment booking, reminders, and calendar management
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Inventory & Procurement
              </h3>
              <p className="text-gray-600">
                Stock management, procurement workflows, and supply chain
                tracking
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                E-Prescription
              </h3>
              <p className="text-gray-600">
                Digital prescriptions made safer with automatic drug and dosage
                checks.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Billing & Accounting
              </h3>
              <p className="text-gray-600">
                Integrated billing, insurance processing, and financial
                reporting
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Telehealth
              </h3>
              <p className="text-gray-600">
                Remote consultations with integrated video and documentation
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function CareClinics() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <OutcomesSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
