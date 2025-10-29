import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { TopGradient } from '@/components/TopGradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CARE HMIS — FHIR‑Powered Hospital Platform',
  description: 'A modular, MIT‑licensed HMIS covering every encounter with standards‑based interoperability and rapid rollouts at national scale.',
  keywords: 'hospital management system FHIR, open source HMIS, SNOMED LOINC UCUM ICD‑10, healthcare interoperability',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            CARE HMIS — one platform for every encounter.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Outpatient, emergency, inpatient, observation, home health, and virtual care—<strong>all on one FHIR‑native system</strong>.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Request a demo</Button>
            <Button variant="secondary" href="/developers">Deploy CARE HMIS</Button>
            <Button variant="secondary" href="/developers">Explore the code</Button>
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
        Proven results across 11 States with rapid deployment and frontline adoption.
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
          <div className="text-4xl font-bold text-blue-900 mb-2">FHIR R5</div>
          <p className="text-blue-700 font-medium">Interoperable by default</p>
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

function CoreModulesSection() {
  const modules = [
    'Clinical data capture with terminology mapping',
    'Templates, autocomplete, voice‑to‑text',
    'Scheduling & public facility pages with reminders',
    'Administrative hierarchies & RBAC',
    'Custom EMR forms mapped to FHIR',
    'LMIS / Pharmacy / Inventory / Billing',
    'Patient login (OTP) & dynamic reports',
    'Clinical drawings & dashboards'
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Core modules</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl">
          Everything you need for comprehensive hospital management.
        </Heading>
        <p className="mt-6 max-w-4xl text-lg text-gray-600">
          Clinical data capture · Scheduling & public facility pages · Admin hierarchies & RBAC · Custom EMR forms · LMIS · Pharmacy & Inventory · Billing & Accounting · Patient login (OTP) · Dynamic reports · Clinical drawings · Dashboards.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{module}</h3>
            </div>
          ))}
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
        Start with a multi‑facility pilot → district → state
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        Host in your VPC or gov cloud; configure local terminologies and forms. Our proven playbook ensures rapid deployment.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Pilot Phase</h3>
          <p className="text-blue-700">Start with 3-5 facilities to validate workflows and train teams</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-2">District Rollout</h3>
          <p className="text-green-700">Scale to district level with standardized processes</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">State Scale</h3>
          <p className="text-purple-700">Full state deployment with centralized management</p>
        </div>
      </div>
    </Container>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: "How long to go live?",
      answer: "Weeks for multi‑hospital pilots with our playbook."
    },
    {
      question: "Do we keep ownership?",
      answer: "Yes—MIT license; code & data are yours."
    },
    {
      question: "Can we map to national rails?",
      answer: "Yes—via Care Apps (e.g., ABDM)."
    }
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>FAQs</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl">
          Common questions about CARE HMIS deployment
        </Heading>

        <div className="mt-16 space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default function HospitalManagement() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <OutcomesSection />
        <CoreModulesSection />
        <ImplementationSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
