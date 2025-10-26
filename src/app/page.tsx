import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { YouTubeVideo } from '@/components/youtube-video'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Github, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Healthcare Network — Digital Public Goods for Health',
  description: 'OHC builds FHIR-native, AI-ready Digital Public Goods for public health. Deploy CARE HMIS, TeleICU, Palliative Care, and more at national scale.',
  keywords: 'digital public goods, FHIR HMIS, healthcare interoperability, ABDM integration, TeleICU, AI medical scribe, open health infrastructure',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar/>
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Open healthcare infrastructure for national scale.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            We build <strong>Digital Public Goods</strong> so governments, hospitals, and innovators can deploy <strong>open, interoperable, AI‑ready</strong> systems that serve everyone.
          </p>
          
          <div className="mt-12 flex flex-col gap-x-4 gap-y-4 sm:flex-row">
          <Button href="https://github.com/ohcnetwork" target="_blank" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>Star us on Github</span>
            </Button>
            <Button variant="secondary" href="https://slack.ohc.network" target="_blank" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Join Slack</span>
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
      <Heading as="h3" className="mt-2 max-w-4xl">
        FHIR powered, MIT‑licensed, modular EMR with SNOMED, LOINC, UCUM, ICD‑10 Coding.
      </Heading>
      <p className="mt-4 text-lg text-gray-600">
        Core + Apps Architecture.
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
          
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Integrations"
          title="Care Apps"
          description="Extensible apps: ABDM M1–M3, TeleICU (ONVIF), Care Scribe (multilingual AI voice fill)."
          graphic={<LogoTimeline />}
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Standards"
          title="FHIR R5 Native"
          description="Built on global standards: FHIR R5, SNOMED, LOINC, UCUM, ICD‑10; terminology server; BYOT."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-blue-100 p-2 rounded text-xs font-medium text-blue-900">FHIR R5</div>
                <div className="bg-green-100 p-2 rounded text-xs font-medium text-green-900">SNOMED</div>
                <div className="bg-purple-100 p-2 rounded text-xs font-medium text-purple-900">LOINC</div>
                <div className="bg-orange-100 p-2 rounded text-xs font-medium text-orange-900">UCUM</div>
                <div className="bg-red-100 p-2 rounded text-xs font-medium text-red-900">ICD-10</div>
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
          description="CARE is recognized as a Digital Public Good, making healthcare technology accessible to all through open-source innovation."
          graphic={
            <div className="h-80 bg-gradient-to-br from-green-50 to-white-100 flex items-center justify-center">
              <div className="text-center">
              <div className="text-7xl font-bold text-green-900">50th</div>
                <div className="text-sm text-green-700 mt-2">Digital Public Good</div>
              </div>
            </div>
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function GitHubVideoSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-12">
        <Subheading>Featured Story</Subheading>
        <Heading as="h3" className="mt-2 max-w-4xl mx-auto">
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

function OutcomesSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outcomes at a glance</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-4xl">
          Real impact across 10 Indian states with rapid rollouts and frontline adoption.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Scale"
            title="10 States Deployed"
            description="CARE powers solutions across 10 Indian states with proven deployment patterns and frontline adoption."
            graphic={
              <div className="h-80 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white">10</div>
                  <div className="text-sm text-blue-200 mt-2">States</div>
                </div>
              </div>
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Speed"
            title="Rapid Rollouts"
            description="1,200+ hospitals deployed in &lt; 6 weeks with our proven implementation playbook."
            graphic={<LogoTimeline />}
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Adoption"
            title="10k+ Healthcare Workers"
            description="Frontline teams adopted CARE quickly with templates, autocomplete, and voice-to-text features."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Impact"
            title="200k+ Encounters Captured"
            description="KeralaCare Grid demonstrates real-world impact with structured data capture and quality improvement."
            graphic={
              <div className="h-80 bg-gradient-to-br from-green-900 to-green-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">200k+</div>
                  <div className="text-sm text-green-200 mt-2">Encounters</div>
                </div>
              </div>
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <WhatWeBuildSection />
        </div>
        <GitHubVideoSection />
        <OutcomesSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
