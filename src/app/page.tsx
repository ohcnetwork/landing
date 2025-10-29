import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { LinkedAvatars } from '@/components/linked-avatars'
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
  title: 'Open Healthcare Network — Digital Public Goods for Health',
  description: 'OHC builds FHIR-native, AI-ready Digital Public Goods for public health. Deploy CARE HMIS, TeleICU, Palliative Care, and more at national scale.',
  keywords: 'digital public goods, FHIR HMIS, healthcare interoperability, ABDM integration, TeleICU, AI medical scribe, open health infrastructure',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="flex flex-col gap-14 pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-center font-display tracking-tight text-6xl/[0.9] font-bold sm:text-6xl md:text-8xl">
              Building digital healthcare <br />{' '}
              <span className="text-[#047857]">for everyone.</span>
            </h1>
            <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              <span className="font-semibold">Open Healthcare Network(OHC)</span> is an open-source
              platform that helps governments, hospitals, and innovators build
              connected healthcare systems faster, safer, and at national scale.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="https://github.com/ohcnetwork" target="_blank" className="flex items-center gap-2 w-full sm:w-auto" variant='primary'>
              <Github className="size-4" />
              <span>Star us on Github</span>
            </Button>
            <Button
              variant="secondary"
              href="https://slack.ohc.network"
              target="_blank"
              className='w-full sm:w-auto'
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
        <strong className='font-display font-bold text-5xl'>FHIR-powered modular EMR</strong><br />
        <span className='font-display font-medium text-5xl text-gray-600'>with SNOMED, LOINC, UCUM, and ICD-10 integration.</span>
      </Heading>
      <p className="mt-8 text-2xl text-gray-600">
        FHIR R5   •   SNOMED   •   LOINC   •   UCUM  •   ICD-10   •   Open APIs   •   ABDM Compliant
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Core Platform"
          title="CARE EMR"
          description="FHIR R5‑powered, MIT‑licensed, modular HMIS with SNOMED, LOINC, UCUM, ICD‑10, mobile‑first, cloud‑agnostic, MCP‑ready."
          graphic={
            <div className="h-80 bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center">
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
          link={{ href: '/product/apps-integrations', label: 'Explore Care Apps' }}
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Standards"
          title="FHIR R5 Native"
          description="Built on global standards: FHIR R5, SNOMED, LOINC, UCUM, ICD‑10; terminology server; BYOT."
          graphic={
            <div className="flex size-full items-start justify-center pt-10 px-10 pb-8">
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 w-full max-w-sm">
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
                <div className="col-span-2 flex justify-center mt-2">
                  <div className="bg-sky-400 rounded-lg px-6 py-2.5">
                    <span className="text-white text-sm font-bold">ICD-10</span>
                  </div>
                </div>
              </div>
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Deployment"
          title="11 States Deployed"
          description="CARE powers solutions across 11 Indian states with rapid rollouts and frontline adoption."
          graphic={<Map />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Digital Public Good"
          title="Open Source Healthcare"
          description="Recognised as 50th Digital Public Good."
          graphic={
            <div className="h-80 flex flex-col items-center justify-center gap-8 px-10">
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
      description: 'FHIR-based modular EMR for hospitals and clinics.',
      logo: '/logos/care-hmis.svg',
      href: '/solutions/hospital-management',
    },
    {
      title: 'TeleICU',
      description: 'FHIR-based modular EMR for hospitals and clinics.',
      logo: '/logos/care-teleicu.svg',
      href: '/solutions/teleicu',
    },
    {
      title: 'Palliative Care',
      description: 'FHIR-based modular EMR for hospitals and clinics.',
      logo: '/logos/care-palliative.svg',
      href: '/solutions/palliative-care',
    },
    {
      title: 'Care Janwar',
      description: 'FHIR-based modular EMR for hospitals and clinics.',
      logo: '/logos/care-janwar.svg',
      href: '/solutions/care-janwar',
    },
    {
      title: 'Care Clinics',
      description: 'FHIR-based modular EMR for hospitals and clinics.',
      logo: '/logos/care-clinics.svg',
      href: '/solutions/care-clinics',
    },
  ]

  return (
    <div className="bg-gray-100 py-32">
      <Container>
        <Subheading>What we build</Subheading>
        <Heading as="h3" className="mt-2 max-w-4xl font-display tracking-tight">
          <span className='font-bold text-5xl'>Solutions that Power</span>
          <br />
          <span className='font-medium text-5xl text-gray-600'>every layer of Care</span>
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {solutions.map((solution, index) => (
            <BentoCard
              key={index}
              eyebrow=""
              title={solution.title}
              description={solution.description}
              graphic={
                <div className="h-80 flex items-center justify-center p-10 bg-white">
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
                index === 0 && 'max-lg:rounded-t-4xl lg:rounded-tl-4xl lg:col-span-4',
                index === 1 && 'lg:rounded-tr-4xl',
                index === 2 && 'lg:rounded-bl-4xl',
                index === 4 && 'max-lg:rounded-b-4xl lg:rounded-br-4xl'
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
      <div className="text-center mb-12">
        <Subheading>Featured Story</Subheading>
        <Heading as="h3" className="mt-2 max-w-4xl mx-auto font-display tracking-tight">
          How Open Healthcare Network has helped revolutionize access to healthcare across India
        </Heading>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our doctors and engineers show how open source collaboration on GitHub has been key to the success of our platform, CARE, and is impacting millions of lives throughout the country.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
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
          <LogoCloud />
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
