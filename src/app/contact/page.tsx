import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import {
  ArrowRight,
  BookOpen,
  Github,
  Mail,
  MessageCircle,
  Network,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact OHC - Build Open Health Systems',
  description:
    'Contact Open Healthcare Network Foundation for deployments, partnerships, funding conversations, contribution pathways, and community participation.',
  keywords:
    'OHC contact, open healthcare foundation, CARE deployment, healthcare collaboration',
}

const contactPaths = [
  {
    title: 'Partnerships and deployments',
    description:
      'For governments, hospitals, public health programs, funders, and implementation partners exploring CARE or related open healthcare infrastructure.',
    href: 'mailto:support@ohc.network',
    label: 'support@ohc.network',
    icon: Mail,
  },
  {
    title: 'Developer community',
    description:
      'Join the open-source community, read the docs, and contribute to CARE Core, apps, integrations, and implementation guides.',
    href: 'https://github.com/ohcnetwork',
    label: 'Explore GitHub',
    icon: Github,
  },
  {
    title: 'Slack and ecosystem',
    description:
      'Connect with maintainers, contributors, clinicians, and implementation teams working across the OHC ecosystem.',
    href: 'https://slack.ohc.network',
    label: 'Join Slack',
    icon: MessageCircle,
  },
]

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-5xl pt-16 pb-24 text-center sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>Contact</Subheading>
          <h1 className="mt-4 font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.86]">
            Start the right conversation.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Reach OHC Foundation for deployment models, implementation
            partnerships, funding conversations, contribution pathways, and
            clinical workflow collaboration.
          </p>
        </div>
      </Container>
    </div>
  )
}

function ContactPathsSection() {
  return (
    <Container className="py-24">
      <div className="grid gap-px overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] shadow-[0_24px_70px_rgba(6,63,50,0.08)] lg:grid-cols-3">
        {contactPaths.map((path) => (
          <div key={path.title} className="bg-white p-8">
            <path.icon className="size-6 text-[#12806a]" />
            <h2 className="mt-10 text-2xl font-semibold text-gray-950">
              {path.title}
            </h2>
            <p className="mt-4 text-sm/6 text-gray-600">{path.description}</p>
            <Button
              variant="secondary"
              href={path.href}
              target={path.href.startsWith('http') ? '_blank' : undefined}
              className="mt-8 inline-flex items-center gap-2"
            >
              <span>{path.label}</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        ))}
      </div>
    </Container>
  )
}

function ResourceSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Subheading>Before you write</Subheading>
          <Heading as="h2" className="mt-3">
            Useful starting points.
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg/7 text-gray-600">
            These pages answer most first questions about the foundation, CARE,
            governance, implementation, and contribution.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            [
              'Foundation',
              'Mission, stewardship, and governance.',
              '/about',
              Network,
            ],
            [
              'CARE Core',
              'Platform primitives and architecture.',
              '/product/care-core',
              BookOpen,
            ],
            ['Support', 'Fund the open healthcare commons.', '/support', Mail],
          ].map(([title, description, href, Icon]) => (
            <a
              key={title as string}
              href={href as string}
              className="group rounded-lg border border-[#dfe6e2] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#bdd0c5] hover:shadow-[0_18px_45px_rgba(6,63,50,0.08)]"
            >
              <Icon className="size-5 text-[#12806a]" />
              <h3 className="mt-8 text-lg font-semibold text-gray-950">
                {title as string}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {description as string}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}

function FooterNote() {
  return (
    <Container className="py-12">
      <p className="mx-auto max-w-3xl text-center text-sm/6 text-gray-600">
        OHC stewards healthcare <strong>Digital Public Goods</strong>.{' '}
        <strong>MIT License.</strong> Data ownership remains with deploying
        governments and institutions.
      </p>
    </Container>
  )
}

export default function Contact() {
  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <Hero />
      <main>
        <ContactPathsSection />
        <ResourceSection />
        <FooterNote />
      </main>
      <Footer />
    </div>
  )
}
