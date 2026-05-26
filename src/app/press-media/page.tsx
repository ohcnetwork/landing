import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  BadgeCheck,
  Download,
  FileText,
  Github,
  Image as ImageIcon,
  Newspaper,
  ShieldAlert,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press & Media - Open Healthcare Network Foundation',
  description:
    'Media boilerplate, public facts, logos, and source-aware guidance for Open Healthcare Network Foundation and CARE.',
  keywords:
    'OHC press kit, Open Healthcare Network media, CARE DPG facts, healthcare commons press',
}

const publicFacts = [
  {
    title: 'Foundation role',
    text: 'Open Healthcare Network Foundation stewards CARE and related open-source Digital Public Goods for healthcare.',
    icon: Newspaper,
  },
  {
    title: 'CARE DPG listing',
    text: 'CARE is listed in the Digital Public Goods registry as Care | Open Healthcare Network and is MIT licensed.',
    icon: BadgeCheck,
  },
  {
    title: 'Open source',
    text: 'CARE is built in public with open-source repositories, contribution pathways, and reusable deployment patterns.',
    icon: Github,
  },
  {
    title: 'Standards-first',
    text: 'OHC public materials describe CARE around FHIR R5, SNOMED CT, LOINC, UCUM, ICD-10, ABDM, and open APIs.',
    icon: FileText,
  },
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>Press and media</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            Clear language for the foundation and CARE.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Use source-aware language when covering OHC Foundation, CARE, and
            open healthcare digital public infrastructure. Impact numbers should
            be checked against the metrics register before publication.
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
      <Heading as="h2" className="mt-2 max-w-4xl">
        About Open Healthcare Network Foundation
      </Heading>
      <div className="mt-10 rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-8">
        <p className="text-lg/8 text-gray-700">
          Open Healthcare Network Foundation stewards open digital public
          infrastructure for healthcare. The foundation maintains CARE and
          related open-source building blocks that help governments, hospitals,
          NGOs, and implementation partners deploy interoperable, self-hostable,
          standards-based health systems without vendor lock-in.
        </p>
        <p className="mt-6 text-lg/8 text-gray-700">
          CARE is an open-source Digital Public Good for healthcare workflows
          across hospitals, public health programs, critical care, palliative
          care, and care coordination. It is designed around open standards,
          modular architecture, and real-world frontline adoption.
        </p>
      </div>
    </Container>
  )
}

function FactsSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>Public facts</Subheading>
          <Heading as="h2" className="mt-2">
            Use these as the publication floor.
          </Heading>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {publicFacts.map((fact) => (
            <div
              key={fact.title}
              className="rounded-lg border border-[#dfe6e2] bg-white p-6"
            >
              <fact.icon className="size-6 text-[#12806a]" />
              <h3 className="mt-6 text-lg font-semibold text-gray-950">
                {fact.title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">{fact.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function AssetsSection() {
  return (
    <Container className="py-24">
      <div className="max-w-4xl">
        <Subheading>Assets</Subheading>
        <Heading as="h2" className="mt-2">
          Logos, product screenshots, deployment maps, and source links.
        </Heading>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-[#dfe6e2] bg-white p-8">
          <ImageIcon className="size-6 text-[#12806a]" />
          <h3 className="mt-6 text-lg font-semibold text-gray-950">
            Logos and brand assets
          </h3>
          <p className="mt-3 text-sm/6 text-gray-600">
            Use approved OHC and CARE logos from the branding repository.
          </p>
          <Button
            variant="secondary"
            href="https://github.com/ohcnetwork/branding"
            className="mt-6"
          >
            Branding repository
          </Button>
        </div>
        <div className="rounded-lg border border-[#dfe6e2] bg-white p-8">
          <Download className="size-6 text-[#12806a]" />
          <h3 className="mt-6 text-lg font-semibold text-gray-950">
            Deployment map
          </h3>
          <p className="mt-3 text-sm/6 text-gray-600">
            Use maps with the metrics register so geography and current
            deployment status are not confused.
          </p>
          <Button
            variant="secondary"
            href="/care_deployment_map.png"
            className="mt-6"
          >
            Download map
          </Button>
        </div>
        <div className="rounded-lg border border-[#dfe6e2] bg-white p-8">
          <ShieldAlert className="size-6 text-[#12806a]" />
          <h3 className="mt-6 text-lg font-semibold text-gray-950">
            Metrics guidance
          </h3>
          <p className="mt-3 text-sm/6 text-gray-600">
            Use only dated, approved metrics for press quotes, decks, and fact
            sheets.
          </p>
          <Button variant="secondary" href="/contact" className="mt-6">
            Verify a metric
          </Button>
        </div>
      </div>
    </Container>
  )
}

function ContactSection() {
  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="text-center">
          <Subheading dark>Media inquiries</Subheading>
          <Heading as="h2" dark className="mx-auto mt-2 max-w-4xl">
            For interviews, fact-checks, and approved metrics, contact the OHC
            team.
          </Heading>
          <div className="mt-8">
            <Button href="/contact">Contact OHC</Button>
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
        <FactsSection />
        <AssetsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
