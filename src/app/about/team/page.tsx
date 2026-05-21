import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team — Open Healthcare Network',
  description:
    'Meet the maintainers and contributors building Digital Public Goods for healthcare.',
  keywords: 'OHC team, open source maintainers, healthcare DPG team',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            The community‑driven model.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            OHC is stewarded by <strong>14+ core maintainers</strong> and a
            global community of <strong>1,040+ contributors</strong>. Meet the
            leadership, advisory board, and core maintainers.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button
              href="https://github.com/orgs/ohcnetwork/people"
              target="_blank"
            >
              Meet the maintainers
            </Button>
            <Button variant="secondary" href="/developers">
              Join the community
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CoreMaintainersSection() {
  return (
    <Container className="bg-gray-100 py-16">
      <Subheading>Core Maintainers</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        14+ experienced maintainers guide technical direction
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        Our core maintainers are experienced developers and healthcare
        professionals who guide the technical direction and architecture
        decisions for CARE.
      </p>

      {/* <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <div className="text-2xl font-bold text-blue-900">A</div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Architecture Lead</h3>
          <p className="text-gray-600 mb-4">Guides FHIR compliance and system architecture</p>
          <a href="https://github.com/ohcnetwork" className="text-blue-600 hover:text-blue-800">GitHub</a>
        </div>
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <div className="text-2xl font-bold text-green-900">B</div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Lead</h3>
          <p className="text-gray-600 mb-4">Mobile-first development and frontline UX</p>
          <a href="https://github.com/ohcnetwork" className="text-blue-600 hover:text-blue-800">GitHub</a>
        </div>
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <div className="text-2xl font-bold text-purple-900">C</div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Integration Lead</h3>
          <p className="text-gray-600 mb-4">Plugins, APIs, and third-party integrations</p>
          <a href="https://github.com/ohcnetwork" className="text-blue-600 hover:text-blue-800">GitHub</a>
        </div>
      </div> */}
    </Container>
  )
}

function CommunitySection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Community</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
          Global community of contributors and supporters
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <BentoCard
            eyebrow="Contributors"
            title="1,040+ Contributors"
            description="Developers, healthcare professionals, and researchers from around the world contributing to CARE development."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900">1,040+</div>
                  <div className="mt-2 text-sm text-blue-700">Contributors</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Growth"
            title="50% Growth in 6 months"
            description="Community grew 50% in the last 6 months (2025) with increasing contributions and engagement."
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-900">50%</div>
                  <div className="mt-2 text-sm text-green-700">Growth</div>
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

function AdvisoryBoardSection() {
  return (
    <Container className="py-24">
      <Subheading>Advisory Board</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        Healthcare and technology experts guiding OHC&apos;s mission
      </Heading>
      <p className="mt-6 max-w-4xl text-lg text-gray-600">
        Our advisory board includes healthcare professionals, technology
        experts, and policy makers who provide strategic guidance and domain
        expertise.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Healthcare Policy
          </h3>
          <p className="mb-4 text-gray-600">
            Former health ministry officials and policy experts
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Technology Leadership
          </h3>
          <p className="mb-4 text-gray-600">
            CTOs and technical leaders from healthcare organizations
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Clinical Practice
          </h3>
          <p className="mb-4 text-gray-600">
            Practicing physicians and healthcare administrators
          </p>
        </div>
      </div>
    </Container>
  )
}

export default function Team() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <CoreMaintainersSection />
        <CommunitySection />
        <AdvisoryBoardSection />
      </main>
      <Footer />
    </div>
  )
}
