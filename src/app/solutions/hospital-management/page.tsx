import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { ExploreButtons } from '@/components/explore-buttons'
import { Footer } from '@/components/footer'
import { LogoTimeline } from '@/components/logo-timeline'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CARE HMIS — FHIR‑Powered Hospital Platform',
  description:
    'A modular, MIT‑licensed HMIS covering every encounter with standards‑based interoperability and rapid rollouts at national scale.',
  keywords:
    'hospital management system FHIR, open source HMIS, SNOMED LOINC UCUM ICD‑10, healthcare interoperability',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Open Source Infrastructure for Intelligent Hospitals.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            An AI-ready, FHIR-native hospital system that powers everything from
            outpatient to intensive care.
          </p>
          <ExploreButtons />
        </div>
      </Container>
    </div>
  )
}

function CoreModulesSection() {
  const modules = [
    'Administration',
    'Definitions',
    'Clinical',
    'Scheduling',
    'Pharmacy & Inventory',
    'Laboratory & Diagnostics',
    'Patient login (OTP) & dynamic reports',
    ' Billing & Accounting',
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Core modules</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
          Everything you need for comprehensive hospital management.
        </Heading>
        <p className="mt-6 max-w-4xl text-lg text-gray-600">
          <span>
            CARE HMIS is built on a FHIR-inspired data model that brings
            structure, flexibility, and interoperability to every part of
            hospital operations.
          </span>
          <span>
            {' '}
            Its modular architecture makes it easy to extend, integrate, and
            automate, ensuring that every workflow speaks the same clinical
            language.
          </span>
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {module}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function PluginSection() {
  return (
    <Container className="py-24">
      <Subheading>Build to be plugged into</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Built to plug in, extend, and evolve with your healthcare ecosystem
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        Community can create CARE Apps(Plugins) that add new features and
        integrations just like app on a smartphone but for healthcare flow
      </p>
      <BentoCard
        eyebrow="Integrations"
        title="Care Apps"
        description="Extensible apps: ABDM M1–M3, TeleICU (ONVIF), Care Scribe (multilingual AI voice fill)."
        graphic={<LogoTimeline />}
        link={{
          href: '/product/apps-integrations',
          label: 'Explore Care Apps',
        }}
        fade={['bottom']}
        className="lg:col-span-3 lg:rounded-tr-4xl"
      />
    </Container>
  )
}

// function FAQSection() {
//   const faqs = [
//     {
//       question: "How long to go live?",
//       answer: "Weeks for multi‑hospital pilots with our playbook."
//     },
//     {
//       question: "Do we keep ownership?",
//       answer: "Yes—MIT license; code & data are yours."
//     },
//     {
//       question: "Can we map to national rails?",
//       answer: "Yes—via Care Apps (e.g., ABDM)."
//     }
//   ]

//   return (
//     <div className="bg-gray-50 py-24">
//       <Container>
//         <Subheading>FAQs</Subheading>
//         <Heading as="h2" className="mt-2 max-w-4xl">
//           Common questions about CARE HMIS deployment
//         </Heading>

//         <div className="mt-16 space-y-8">
//           {faqs.map((faq, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
//               <p className="text-gray-600">{faq.answer}</p>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   )
// }

export default function HospitalManagement() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <CoreModulesSection />
        <PluginSection />
        {/* <FAQSection /> */}
      </main>
      <Footer />
    </div>
  )
}
