import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { ArrowLeft, BadgeCheck, ExternalLink, FileText } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ISO Certifications - Open Healthcare Network Foundation',
  description:
    'ISO 27001:2022, ISO 82304-1:2016, and ISO 82304-2:2021 certifications held by Open Healthcare Network Foundation.',
  keywords:
    'OHC ISO certification, ISO 27001, ISO 82304, health software safety, information security, open healthcare',
}

const isoCertifications = [
  {
    standard: 'ISO 27001:2022',
    title: 'Information Security Management System',
    description:
      'International standard for information security management. Certifies that OHC Foundation has established, implemented, and maintains a robust ISMS covering risk management, access control, incident response, asset management, and continuous improvement of information security practices.',
    scope:
      'Applies to the management of information assets across the foundation and the CARE platform, including source code, deployment infrastructure, and patient data handling practices.',
    file: 'ISO 27001_2022.pdf',
  },
  {
    standard: 'ISO 82304-1:2016',
    title: 'Health Software — General Requirements for Product Safety',
    description:
      'Establishes requirements for the safety of health software products, covering design, development, testing, maintenance, and lifecycle management. Ensures CARE meets internationally recognised product safety standards for healthcare applications.',
    scope:
      'Covers CARE Core and related health software components used in clinical, hospital, and community care settings.',
    file: 'ISO 82304-1_2016.pdf',
  },
  {
    standard: 'ISO 82304-2:2021',
    title: 'Health and Wellness Apps — Quality and Reliability',
    description:
      'Provides guidance for the validation and reusability of health and wellness apps, addressing quality, safety, performance, usability, and data handling. Supports trustworthy deployment of health software across diverse care environments.',
    scope:
      'Applicable to CARE-based apps and wellness-oriented modules deployed in community and home-care programs.',
    file: 'ISO 82304-2_2021.pdf',
  },
]

function docUrl(filename: string) {
  return `/docs/${encodeURIComponent(filename)}`
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <div className="max-w-4xl">
            <Subheading>Open Healthcare Network Foundation</Subheading>
            <h1 className="mt-4 font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
              ISO certifications.
            </h1>
            <p className="mt-8 max-w-3xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              OHC Foundation holds ISO certifications in information security
              management and health software safety — independently verifying
              that CARE meets international standards for clinical and
              institutional deployment.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CertificationsSection() {
  return (
    <Container className="py-24">
      <div className="space-y-8">
        {isoCertifications.map((cert) => (
          <div
            key={cert.standard}
            className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white"
          >
            <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-[1fr_0.4fr]">
              <div>
                <div className="flex items-start gap-4">
                  <BadgeCheck className="mt-0.5 size-6 shrink-0 text-[#12806a]" />
                  <div>
                    <p className="font-mono text-xs font-semibold tracking-widest text-[#12806a] uppercase">
                      {cert.standard}
                    </p>
                    <h3 className="mt-1.5 text-xl font-semibold text-gray-950">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-base/7 text-gray-600">
                  {cert.description}
                </p>
                <div className="mt-5 rounded-md bg-[#f7f9f6] px-4 py-3">
                  <p className="text-xs font-semibold tracking-wide text-gray-950/50 uppercase">
                    Scope
                  </p>
                  <p className="mt-1 text-sm/6 text-gray-700">{cert.scope}</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-6 lg:items-end lg:pt-2">
                <div className="flex items-center gap-2 rounded-full border border-[#c6ddd6] bg-[#edf5f1] px-3 py-1.5">
                  <span className="size-2 rounded-full bg-[#12806a]" />
                  <span className="text-xs font-semibold text-[#12806a]">
                    Certified
                  </span>
                </div>
                <a
                  href={docUrl(cert.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#dfe6e2] bg-white px-4 py-2.5 text-sm font-semibold text-gray-950 hover:bg-[#f7f9f6]"
                >
                  <FileText className="size-4 text-[#12806a]" />
                  View certificate
                  <ExternalLink className="size-3.5 text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function WhyCertifiedSection() {
  const points = [
    {
      title: 'Healthcare deployments require trust',
      text: 'Hospitals, governments, and public health programs need assurance that the software they adopt meets internationally recognised safety and security standards.',
    },
    {
      title: 'Patient data demands rigour',
      text: 'ISO 27001 certification confirms that information security is not an afterthought — it is a managed, audited, and continuously improved discipline within the foundation.',
    },
    {
      title: 'Health software safety is non-negotiable',
      text: 'ISO 82304 standards confirm that CARE is developed and maintained with documented processes for safety-critical health software, reducing clinical and operational risk for implementers.',
    },
  ]

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Subheading>Why certification matters</Subheading>
            <Heading as="h2" className="mt-2">
              Independent verification for healthcare-grade software.
            </Heading>
          </div>
          <div className="space-y-6">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-lg border border-[#dfe6e2] bg-white p-6"
              >
                <h3 className="text-base font-semibold text-gray-950">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm/6 text-gray-600">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function IsoPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <CertificationsSection />
        <WhyCertifiedSection />
      </main>
      <Footer />
    </div>
  )
}
