import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security & Compliance — CARE Platform',
  description:
    'CARE implements standards‑based interoperability with strong access controls and sovereign hosting choices.',
  keywords:
    'healthcare security open source, FHIR compliance, RBAC healthcare, sovereign cloud',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Standards, privacy, and control—by design.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            CARE implements standards‑based interoperability with strong access
            controls and sovereign hosting choices.
          </p>
        </div>
      </Container>
    </div>
  )
}

function StandardsSection() {
  return (
    <Container className="py-24">
      <Subheading>Standards</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        Built on global healthcare standards for interoperability and compliance
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        <strong>FHIR R5</strong>, <strong>SNOMED</strong>,{' '}
        <strong>LOINC</strong>, <strong>UCUM</strong>, <strong>ICD‑10</strong>;
        terminology server; <strong>BYOT</strong>.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
          <div className="mb-2 text-2xl font-bold text-blue-900">FHIR R5</div>
          <p className="text-sm text-blue-700">
            Fast Healthcare Interoperability Resources
          </p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
          <div className="mb-2 text-2xl font-bold text-green-900">SNOMED</div>
          <p className="text-sm text-green-700">Clinical terminology</p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-6 text-center">
          <div className="mb-2 text-2xl font-bold text-purple-900">LOINC</div>
          <p className="text-sm text-purple-700">Laboratory codes</p>
        </div>
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-6 text-center">
          <div className="mb-2 text-2xl font-bold text-orange-900">ICD-10</div>
          <p className="text-sm text-orange-700">Diagnosis codes</p>
        </div>
      </div>
    </Container>
  )
}

function AccessControlSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Access & Safety</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
          Hierarchical org model with RBAC and comprehensive logging
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <BentoCard
            eyebrow="Organization Model"
            title="Hierarchical structure"
            description="National → state → district → facility hierarchy with role-based access control."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900">RBAC</div>
                  <div className="mt-2 text-sm text-blue-700">
                    Access Control
                  </div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Logging & Monitoring"
            title="Comprehensive audit trails"
            description="All actions logged with detailed audit trails for compliance and security monitoring."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-900">Audit</div>
                  <div className="mt-2 text-sm text-green-700">Trails</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="lg:col-span-1"
          />
          <BentoCard
            eyebrow="Dashboards"
            title="Real-time monitoring"
            description="Live dashboards for system monitoring, user activity, and security events."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-900">Live</div>
                  <div className="mt-2 text-sm text-purple-700">Monitoring</div>
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

function SovereigntySection() {
  return (
    <Container className="py-24">
      <Subheading>Sovereign infrastructure</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        Deploy in your VPC/gov cloud with complete control
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        <strong>Zero license fees</strong>; you own code and data. Deploy in
        your infrastructure with complete sovereignty and control.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-blue-900">
            Your Infrastructure
          </h3>
          <p className="text-blue-700">
            Deploy in your VPC, government cloud, or hybrid environment
          </p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-green-900">
            Zero License Fees
          </h3>
          <p className="text-green-700">
            MIT license means no ongoing licensing costs or vendor lock-in
          </p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-purple-900">
            Data Ownership
          </h3>
          <p className="text-purple-700">
            You own all data and code with complete control and sovereignty
          </p>
        </div>
      </div>
    </Container>
  )
}

function AIReadySection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>AI‑ready with guardrails</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
          AI tools integrate seamlessly without altering the core
        </Heading>
        <p className="mt-6 max-w-4xl text-lg text-gray-600">
          Voice-fill, AI scribe, and other AI tools work as plugins without
          modifying the core platform, ensuring security and maintainability.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-8">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              AI Plugins
            </h3>
            <p className="mb-4 text-gray-600">
              AI tools work as plugins without modifying the core platform
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Voice-to-text for clinical notes</li>
              <li>• AI scribe for documentation</li>
              <li>• Clinical decision support</li>
              <li>• Predictive analytics</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-8">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Security Guardrails
            </h3>
            <p className="mb-4 text-gray-600">
              Built-in security measures ensure AI tools don&apos;t compromise
              data integrity
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Data encryption and access controls</li>
              <li>• Audit trails for AI interactions</li>
              <li>• Privacy-preserving AI techniques</li>
              <li>• Compliance with healthcare regulations</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function SecurityCompliance() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <StandardsSection />
        <AccessControlSection />
        <SovereigntySection />
        <AIReadySection />
      </main>
      <Footer />
    </div>
  )
}
