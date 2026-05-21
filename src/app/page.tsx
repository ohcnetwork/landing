import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { YouTubeVideo } from '@/components/youtube-video'
import { clsx } from 'clsx'
import { Github } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Healthcare Network — Digital Public Goods for Healthcare',
  description:
    'Open Healthcare Network (OHC) builds FHIR-native, AI-ready Digital Public Goods for healthcare. Deploy CARE HMIS, TeleICU, and Palliative Care solutions across hospitals and states at national scale.',
  keywords:
    'Digital Public Goods, Open Healthcare Network, CARE HMIS, FHIR R5, Healthcare Interoperability, ABDM, TeleICU, AI Scribe, Open Source Health Infrastructure, MIT License',
  openGraph: {
    title: 'Open Healthcare Network — Digital Public Goods for Healthcare',
    description:
      'Building FHIR-native, AI-ready Digital Public Goods that power national health systems. Open, interoperable, and MIT-licensed — CARE HMIS, TeleICU, and Palliative Care Grid.',
    images: [
      {
        url: '/og/ohc-landing-cover.png',
        width: 1920,
        height: 1080,
        alt: 'Open Healthcare Network — Digital Public Goods for Healthcare',
      },
    ],
  },
  twitter: {
    title: 'Open Healthcare Network — Digital Public Goods for Healthcare',
    description:
      'OHC builds open, FHIR-powered infrastructure for governments, hospitals, and innovators. CARE HMIS, TeleICU, and Palliative Care Grid — all open, interoperable, and AI-ready.',
    images: ['/og/ohc-landing-cover.png'],
  },
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="flex flex-col gap-14 pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-42">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-center font-display text-6xl/[0.9] font-bold tracking-tight sm:text-6xl md:text-8xl">
              Building digital healthcare <br />{' '}
              <span className="text-[#047857]">for everyone.</span>
            </h1>
            <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              <span className="font-semibold">
                Open Healthcare Network(OHC)
              </span>{' '}
              is an open-source platform that helps governments, hospitals, and
              innovators build connected healthcare systems faster, safer, and
              at national scale.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="https://github.com/ohcnetwork"
              target="_blank"
              className="flex w-full items-center gap-2 sm:w-auto"
              variant="primary"
            >
              <Github className="size-4" />
              <span>Star us on Github</span>
            </Button>
            <Button
              variant="secondary"
              href="https://slack.ohc.network"
              target="_blank"
              className="w-full sm:w-auto"
            >
              <span>Join the Community</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function WhatWeBuildSection() {
  return (
    <Container>
      <Subheading>What we build</Subheading>
      <Heading as="h3" className="mt-2 max-w-7xl">
        <strong className="font-display text-5xl font-bold">
          FHIR-powered modular EMR
        </strong>
        <br />
        <span className="font-display text-5xl font-medium text-gray-600">
          with SNOMED, LOINC, UCUM, and ICD-10 integration.
        </span>
      </Heading>
      <p className="mt-8 text-2xl text-gray-600">
        FHIR R5 • SNOMED • LOINC • UCUM • ICD-10 • Open APIs • ABDM Compliant
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Core Platform"
          title="CARE EMR"
          description="FHIR R5‑powered, MIT‑licensed, modular HMIS with SNOMED, LOINC, UCUM, ICD‑10, mobile‑first, cloud‑agnostic, MCP‑ready."
          graphic={
            <div className="flex h-80 items-center justify-center bg-gradient-to-br from-green-50 to-blue-100">
              <div className="text-center">
                <img
                  alt="Care EMR"
                  src="/logos/care-logo.svg"
                  className="w-120 rounded-full bg-white/15 ring-4 ring-white/10"
                />
              </div>
            </div>
          }
          link={{ href: '/product/care-core', label: 'Inside the Core' }}
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
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
        <BentoCard
          eyebrow="Standards"
          title="FHIR R5 Native"
          description="Built on global standards: FHIR R5, SNOMED, LOINC, UCUM, ICD‑10; terminology server; BYOT."
          graphic={
            <div className="flex size-full items-start justify-center px-10 pt-10 pb-8">
              <div className="grid w-full max-w-sm grid-cols-2 gap-x-6 gap-y-8">
                <div className="flex items-center justify-center">
                  <img
                    src="/logos/fhir.png"
                    alt="FHIR"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/logos/snomed.png"
                    alt="SNOMED CT"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/logos/loinc.png"
                    alt="LOINC"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/logos/ucum.png"
                    alt="UCUM"
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <div className="col-span-2 mt-2 flex justify-center">
                  <div className="rounded-lg bg-sky-400 px-6 py-2.5">
                    <span className="text-sm font-bold text-white">ICD-10</span>
                  </div>
                </div>
              </div>
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Deployment"
          title="10 States Deployed"
          description="CARE powers solutions across 10 Indian states with rapid rollouts and frontline adoption."
          graphic={<Map />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Digital Public Good"
          title="Open Source Healthcare"
          description="Recognised as 50th Digital Public Good."
          graphic={
            <div className="flex h-80 flex-col items-center justify-center gap-8 px-10">
              <div className="flex items-center justify-center">
                <img
                  src="/logos/dpg.png"
                  alt="Digital Public Goods Alliance"
                  className="h-16 object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/logos/dpg-verified.png"
                  alt="DPG Verified"
                  className="h-12 object-contain"
                />
              </div>
            </div>
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function SolutionsSection() {
  const solutions = [
    {
      title: 'Hospital Management System',
      description: 'Open Source Infrastructure for Intelligent Hospitals.',
      logo: '/logos/care-hmis.svg',
      href: '/solutions/hospital-management',
    },
    {
      title: 'TeleICU Powering 10BedICU',
      description: 'Critical Care reached every bed.',
      logo: '/logos/care-teleicu.svg',
      href: '/solutions/teleicu',
    },
    {
      title: 'Palliative Care',
      description: 'Continuity of Care at Home, Reimagined',
      logo: '/logos/care-palliative.svg',
      href: '/solutions/palliative-care',
    },
    {
      title: 'Care Janwar',
      description: 'One Platform for Animal Health.',
      logo: '/logos/care-janwar.svg',
      href: '/solutions/care-janwar',
    },
    {
      title: 'Care Clinics',
      description: 'Built for Clinics That Want to Scale, Not Just Digitize.',
      logo: '/logos/care-clinics.svg',
      href: '/solutions/care-clinics',
    },
  ]

  return (
    <div className="bg-gray-100 py-32">
      <Container>
        <Subheading>What we build</Subheading>
        <Heading as="h3" className="mt-2 max-w-4xl font-display tracking-tight">
          <span className="text-5xl font-bold">Solutions that Power</span>
          <br />
          <span className="text-5xl font-medium text-gray-600">
            every layer of Care
          </span>
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {solutions.map((solution, index) => (
            <BentoCard
              key={index}
              eyebrow=""
              title={solution.title}
              description={solution.description}
              graphic={
                <div className="flex h-80 items-center justify-center bg-white p-10">
                  <img
                    src={solution.logo}
                    alt={solution.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              }
              link={{ href: solution.href, label: 'Inside the Core' }}
              className={clsx(
                'lg:col-span-2',
                index === 0 &&
                  'max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl',
                index === 1 && 'lg:rounded-tr-4xl',
                index === 2 && 'lg:rounded-bl-4xl',
                index === 4 && 'max-lg:rounded-b-4xl lg:rounded-br-4xl',
              )}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

function GitHubVideoSection() {
  return (
    <Container className="py-24">
      <div className="mb-12 text-center">
        <Subheading>Featured Story</Subheading>
        <Heading
          as="h3"
          className="mx-auto mt-2 max-w-4xl font-display tracking-tight"
        >
          How Open Healthcare Network has helped revolutionize access to
          healthcare across India
        </Heading>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Our doctors and engineers show how open source collaboration on GitHub
          has been key to the success of our platform, CARE, and is impacting
          millions of lives throughout the country.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <YouTubeVideo
          videoId="-wxIzaqvkQA"
          title="Open Healthcare Network - GitHub Story"
          className="rounded-2xl shadow-2xl"
        />
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Testimonials />
      <main>
        <Container className="mt-10">
          <Subheading>Supported by</Subheading>
          <Heading
            as="h3"
            className="mt-2 max-w-4xl font-display tracking-tight"
          >
            Empowered by Institutions that Believe in Open Health
          </Heading>
          <LogoCloud className="mt-10" />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <WhatWeBuildSection />
        </div>
        <GitHubVideoSection />
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  )
}
