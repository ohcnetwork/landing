import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press & Media — Open Healthcare Network',
  description:
    'Media kit, facts, and assets for OHC&apos;s Digital Public Goods and national deployments.',
  keywords: 'OHC press kit, healthcare DPG facts, open health media assets',
}

function Hero() {
  return (
    <div className="relative">
      <Container className="relative">
        <TopGradient />
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Press & Media
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Media kit, facts, and assets for OHC&apos;s Digital Public Goods and
            national deployments.
          </p>
        </div>
      </Container>
    </div>
  )
}

function BoilerplateSection() {
  return (
    <Container className="py-24">
      <Subheading>Boilerplate</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        About Open Healthcare Network
      </Heading>
      <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-8">
        <p className="text-lg leading-relaxed text-gray-700">
          Open Healthcare Network (OHC) builds{' '}
          <strong>Digital Public Goods</strong> for healthcare—
          <strong>FHIR‑native, AI‑ready</strong> infrastructure deployed across{' '}
          <strong>10 States</strong> and used by <strong>10k+</strong> workers.
          Programs include <strong>CARE HMIS</strong>, <strong>TeleICU</strong>,
          and Kerala&apos;s <strong>Palliative Care Grid</strong> (over{' '}
          <strong>221k</strong> registered patients).
        </p>
      </div>
    </Container>
  )
}

function KeyFactsSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Key Facts</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
          Impact and deployment statistics
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <BentoCard
            eyebrow="Deployment"
            title="10 States Deployed"
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
            eyebrow="Scale"
            title="1,200+ Hospitals"
            description="Rapid deployment to 1,200+ hospitals in less than 6 weeks with our proven implementation playbook."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-900">
                    1,200+
                  </div>
                  <div className="mt-2 text-sm text-green-700">Hospitals</div>
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

function AssetsSection() {
  return (
    <Container className="py-24">
      <Subheading>Assets</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        Logos, product screenshots, deployment maps, and fact sheets
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Logos & Branding
          </h3>
          <p className="mb-4 text-gray-600">
            OHC and CARE logos in various formats and sizes
          </p>
          <Button
            variant="secondary"
            href="https://github.com/ohcnetwork/branding"
          >
            Download assets
          </Button>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Product Screenshots
          </h3>
          <p className="mb-4 text-gray-600">
            High-resolution screenshots of CARE modules and dashboards
          </p>
          <Button variant="secondary" href="https://deck.ohc.network">
            Download assets
          </Button>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Deployment Maps
          </h3>
          <p className="mb-4 text-gray-600">
            Maps showing CARE deployments across 10 States
          </p>
          <Button variant="secondary" href="/care_deployment_map.png">
            Download assets
          </Button>
        </div>
      </div>
    </Container>
  )
}

function ContactSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Heading as="h2" className="max-w-4xl font-display tracking-tight">
            Media Inquiries
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            For media inquiries, interviews, or additional information about OHC
            and CARE, please contact our team.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Contact media team</Button>
            <Button variant="secondary" href="/contact">
              Request interview
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function PressMedia() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <BoilerplateSection />
        <KeyFactsSection />
        <AssetsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
