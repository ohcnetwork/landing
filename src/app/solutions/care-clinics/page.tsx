import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { TopGradient } from '@/components/TopGradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Care Clinics — Primary & Multi‑Specialty Clinic Platform',
  description: 'Clinic‑ready EMR with scheduling, inventory, pharmacy, billing, reports, and telehealth—backed by a FHIR‑native core.',
  keywords: 'clinic EMR FHIR, primary care EMR, multi‑clinic management, open source clinic software',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Digitize clinics fast—with structure for scale.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            For primary care and multi‑specialty networks: visit capture, scheduling, inventory, e‑prescriptions, billing, and telehealth—<strong>all mapped to FHIR</strong>.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Digitize your clinics</Button>
            <Button variant="secondary" href="/contact">See a live demo</Button>
            <Button variant="secondary" href="/contact">Get the implementation guide</Button>
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
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        Faster intake, fewer clicks with templates and voice‑to‑text
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Faster Intake</h3>
          <p className="text-blue-700">Templates, autocomplete, and voice-to-text reduce data entry time by 60%</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Public Facility Pages</h3>
          <p className="text-green-700">Online booking and appointment management for better patient experience</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Clean Billing & Reports</h3>
          <p className="text-purple-700">Integrated inventory, procurement, billing, and reporting for complete clinic management</p>
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
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Capture</h3>
              <p className="text-gray-600">Structured encounter forms with templates and voice-to-text input</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scheduling</h3>
              <p className="text-gray-600">Appointment booking, reminders, and calendar management</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inventory & Procurement</h3>
              <p className="text-gray-600">Stock management, procurement workflows, and supply chain tracking</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-Prescriptions</h3>
              <p className="text-gray-600">Digital prescriptions with drug interaction checking and formulary management</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Billing & Accounting</h3>
              <p className="text-gray-600">Integrated billing, insurance processing, and financial reporting</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telehealth</h3>
              <p className="text-gray-600">Remote consultations with integrated video and documentation</p>
            </div>
          </div>
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
        Pilot one clinic → replicate across locations
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        Cloud‑agnostic hosting with role‑based access and hierarchical org model. Start small and scale efficiently.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
          <div className="text-4xl font-bold text-blue-900 mb-2">1</div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Pilot Clinic</h3>
          <p className="text-blue-700">Start with one clinic to validate workflows and train staff</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
          <div className="text-4xl font-bold text-green-900 mb-2">2</div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">Replicate</h3>
          <p className="text-green-700">Replicate across multiple locations with standardized processes</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
          <div className="text-4xl font-bold text-purple-900 mb-2">3</div>
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Cloud Hosting</h3>
          <p className="text-purple-700">Deploy in your preferred cloud with role-based access</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
          <div className="text-4xl font-bold text-orange-900 mb-2">4</div>
          <h3 className="text-lg font-semibold text-orange-900 mb-2">Scale</h3>
          <p className="text-orange-700">Scale across your entire clinic network with centralized management</p>
        </div>
      </div>
    </Container>
  )
}

export default function CareClinics() {
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
