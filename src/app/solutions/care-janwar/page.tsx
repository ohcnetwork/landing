import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { ExploreButtons } from '@/components/explore-buttons'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Care Janwar — Veterinary EMR on Care Core',
  description:
    'Adapt CARE to veterinary workflows—encounters, LMIS, pharmacy, inventory, and billing with an MIT‑licensed, FHIR‑inspired core.',
  keywords:
    'veterinary EMR open source, animal health HMIS, veterinary clinic software FHIR',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            One Platform for Animal Health, Modeled on Human-Care Standards.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Built on FHIR-native,CARE Janvar brings structured data, clinical
            precision, and digital compassion to veterinary care.
          </p>
          <ExploreButtons />
        </div>
      </Container>
    </div>
  )
}

function UseCasesSection() {
  return (
    <Container className="py-24">
      <Subheading>Use cases</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        Comprehensive veterinary practice management from small clinics to
        district hospitals
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-lg border border-green-200 bg-green-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-green-900">
            Outpatient Visits & Triage
          </h3>
          <p className="text-green-700">
            Species/breed tagging, vaccination schedules, appointment management
          </p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-blue-900">
            Inpatient & Observation
          </h3>
          <p className="text-blue-700">
            Ward management, treatment protocols, monitoring systems
          </p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-purple-900">
            LMIS & Pharmacy
          </h3>
          <p className="text-purple-700">
            Lab orders/results, medication management, inventory tracking
          </p>
        </div>
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-orange-900">
            Billing & Client Accounts
          </h3>
          <p className="text-orange-700">
            Client management, billing, payment processing, public facility
            pages
          </p>
        </div>
      </div>
    </Container>
  )
}

function WhyCareJanwarSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Why Care Janwar</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
          Standards‑aligned data model with configurable terminologies
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <BentoCard
            eyebrow="Standards"
            title="Standards‑aligned data model"
            description="Configurable terminologies and forms mapped to FHIR resources for veterinary practice."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-900">FHIR</div>
                  <div className="mt-2 text-sm text-green-700">Veterinary</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Sovereignty"
            title="Sovereign & MIT‑licensed"
            description="No lock‑in with complete ownership of code and data. Deploy in your infrastructure."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900">MIT</div>
                  <div className="mt-2 text-sm text-blue-700">Open Source</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="lg:col-span-1"
          />
          <BentoCard
            eyebrow="Mobile"
            title="Mobile‑first for on‑site care"
            description="Field-ready mobile apps for on-site veterinary care, farm visits, and remote consultations."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-900">
                    Mobile
                  </div>
                  <div className="mt-2 text-sm text-purple-700">
                    Field Ready
                  </div>
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

function FAQSection() {
  return (
    <Container className="py-24">
      <Subheading>FAQ</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        Common questions about Care Janwar deployment
      </Heading>

      <div className="mt-16 rounded-lg border border-gray-200 bg-white p-8">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Do we need a separate instance?
        </h3>
        <p className="text-gray-600">
          You can run a dedicated tenant with veterinary‑specific forms and
          codes mapped to FHIR resources. This allows you to maintain separate
          workflows while leveraging the same core platform infrastructure.
        </p>
      </div>
    </Container>
  )
}

export default function CareJanwar() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <UseCasesSection />
        <WhyCareJanwarSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
