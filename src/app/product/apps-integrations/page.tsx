import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { CorePluginCloud } from '@/components/core-plugin-cloud'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Care Apps & Integrations — Extend CARE',
  description:
    'Add ABDM, TeleICU, AI Scribe, and more with Care Apps—plugins that extend CARE without changing the core.',
  keywords:
    'healthcare integrations, ABDM plugin, ONVIF TeleICU, AI scribe, FHIR plugins',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-normal text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Plugins extend the healthcare OS without forking the core.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            CARE Apps connect national rails, telemetry, documentation, labs,
            pharmacy, billing, analytics, messaging, video, and AI workflows to
            the same shared foundation.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Browse all integrations</Button>
            <Button variant="secondary" href="/developers">
              Request an integration
            </Button>
            <Button variant="secondary" href="/developers">
              Submit your plugin
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ArchitectureCloudSection() {
  return (
    <Container className="pb-24">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <Subheading>Architecture</Subheading>
          <Heading as="h2" className="mt-2">
            CARE Core stays stable. Plugins move around it.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            Apps and integrations extend CARE for national rails, TeleICU, AI
            documentation, labs, pharmacy, billing, messaging, video, devices,
            and analytics without fragmenting the shared clinical core.
          </p>
        </div>
        <CorePluginCloud className="shadow-[0_32px_90px_rgba(5,46,36,0.24)]" />
      </div>
    </Container>
  )
}

function FeaturedSection() {
  return (
    <Container className="py-24">
      <Subheading>Featured</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-normal">
        Most popular integrations deployed across multiple states.
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <BentoCard
          eyebrow="National Rails"
          title="ABDM Integration"
          description="M1, M2, M3 style workflows for demographic and biometric authentication through a plugin model."
          graphic={
            <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#052e24]">ABDM</div>
                <div className="mt-2 text-sm text-[#12806a]">
                  National rails
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Telemetry"
          title="TeleICU"
          description="ONVIF camera and vitals monitor integration patterns for hub-and-spoke critical care workflows."
          graphic={
            <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#052e24]">ONVIF</div>
                <div className="mt-2 text-sm text-[#12806a]">
                  Real-time Monitoring
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-1"
        />
        <BentoCard
          eyebrow="AI & Documentation"
          title="Care Scribe"
          description="Multilingual AI voice fill for forms/notes with support for multiple languages and clinical terminology."
          graphic={
            <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#052e24]">AI</div>
                <div className="mt-2 text-sm text-[#12806a]">Voice Fill</div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-b-4xl lg:col-span-1 lg:rounded-tr-4xl"
        />
      </div>
    </Container>
  )
}

function CategoriesSection() {
  const categories = [
    {
      name: 'National & ID',
      description: 'ABDM, Aadhaar, National ID systems',
    },
    {
      name: 'Telemetry & Video',
      description: 'ONVIF, RTSP, medical device integration',
    },
    {
      name: 'Documentation & AI',
      description: 'Voice-to-text, AI scribe, clinical notes',
    },
    {
      name: 'Labs & Diagnostics',
      description: 'Lab equipment, diagnostic tools, results',
    },
    {
      name: 'Pharmacy & Supply',
      description: 'Inventory, procurement, supply chain',
    },
    { name: 'Imaging', description: 'DICOM, PACS, medical imaging systems' },
    { name: 'Payments', description: 'Billing, insurance, payment gateways' },
    { name: 'Messaging', description: 'SMS, email, notification systems' },
    {
      name: 'Data & Dashboards',
      description: 'Analytics, reporting, business intelligence',
    },
  ]

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <Subheading>Categories</Subheading>
        <Heading
          as="h2"
          className="mt-2 max-w-4xl font-display tracking-normal"
        >
          Browse integrations by category
        </Heading>
        <p className="mt-6 max-w-4xl text-lg text-gray-600">
          Pattern inspired by best‑practice plugin galleries with verified,
          production-ready integrations.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6 transition-colors hover:border-[#bdd0c5]"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact">Browse all integrations</Button>
        </div>
      </Container>
    </div>
  )
}

export default function AppsIntegrations() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <ArchitectureCloudSection />
        <FeaturedSection />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  )
}
