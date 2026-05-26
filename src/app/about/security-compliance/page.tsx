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
    'CARE is designed for standards-based interoperability, role-based access, auditability, and sovereign hosting choices.',
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
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-normal text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Standards, privacy, and control—by design.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            CARE is designed for standards-based interoperability, strong access
            controls, auditability, and sovereign hosting choices.
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
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-normal">
        Built on global healthcare standards for interoperability
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        <strong>FHIR R5</strong>, <strong>SNOMED</strong>,{' '}
        <strong>LOINC</strong>, <strong>UCUM</strong>, <strong>ICD‑10</strong>;
        terminology server; <strong>BYOT</strong>.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6 text-center">
          <div className="mb-2 text-2xl font-bold text-[#052e24]">FHIR R5</div>
          <p className="text-sm text-[#12806a]">
            Fast Healthcare Interoperability Resources
          </p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6 text-center">
          <div className="mb-2 text-2xl font-bold text-[#052e24]">SNOMED</div>
          <p className="text-sm text-[#12806a]">Clinical terminology</p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6 text-center">
          <div className="mb-2 text-2xl font-bold text-[#052e24]">LOINC</div>
          <p className="text-sm text-[#12806a]">Laboratory codes</p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6 text-center">
          <div className="mb-2 text-2xl font-bold text-[#052e24]">ICD-10</div>
          <p className="text-sm text-[#12806a]">Diagnosis codes</p>
        </div>
      </div>
    </Container>
  )
}

function AccessControlSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <Subheading>Access & Safety</Subheading>
        <Heading
          as="h2"
          className="mt-2 max-w-4xl font-display tracking-normal"
        >
          Hierarchical org model with RBAC and comprehensive logging
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <BentoCard
            eyebrow="Organization Model"
            title="Hierarchical structure"
            description="National → state → district → facility hierarchy with role-based access control."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#052e24]">RBAC</div>
                  <div className="mt-2 text-sm text-[#12806a]">
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
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#052e24]">Audit</div>
                  <div className="mt-2 text-sm text-[#12806a]">Trails</div>
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
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#052e24]">Live</div>
                  <div className="mt-2 text-sm text-[#12806a]">Monitoring</div>
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
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-normal">
        Deploy in your VPC/gov cloud with complete control
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        <strong>Zero license fees</strong>; you own code and data. Deploy in
        your infrastructure with complete sovereignty and control.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6">
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
            Your Infrastructure
          </h3>
          <p className="text-[#12806a]">
            Deploy in your VPC, government cloud, or hybrid environment
          </p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6">
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
            Zero License Fees
          </h3>
          <p className="text-[#12806a]">
            MIT license means no ongoing licensing costs or vendor lock-in
          </p>
        </div>
        <div className="rounded-lg border border-[#cbded6] bg-[#f3f8f5] p-6">
          <h3 className="mb-2 text-lg font-semibold text-[#052e24]">
            Data Ownership
          </h3>
          <p className="text-[#12806a]">
            You own all data and code with complete control and sovereignty
          </p>
        </div>
      </div>
    </Container>
  )
}

function AIReadySection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <Subheading>AI‑ready with guardrails</Subheading>
        <Heading
          as="h2"
          className="mt-2 max-w-4xl font-display tracking-normal"
        >
          AI tools integrate seamlessly without altering the core
        </Heading>
        <p className="mt-6 max-w-4xl text-lg text-gray-600">
          Voice-fill, AI scribe, and other assistive tools should work as
          plugins without modifying the core platform, preserving security,
          maintainability, and human review.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-[#dfe6e2] bg-white p-8">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              AI Plugins
            </h3>
            <p className="mb-4 text-gray-600">
              AI tools work as plugins without modifying the core platform
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Voice-to-text for clinical notes</li>
              <li>• AI scribe for documentation drafts</li>
              <li>• Summarization with clinician review</li>
              <li>• Document understanding for structured workflows</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[#dfe6e2] bg-white p-8">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Security Guardrails
            </h3>
            <p className="mb-4 text-gray-600">
              Built-in security measures ensure AI tools don&apos;t compromise
              data integrity
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Role-based access controls</li>
              <li>• Audit trails for AI interactions</li>
              <li>• Clear draft and review states</li>
              <li>• Human accountability for clinical decisions</li>
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
