import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact OHC — Build Open Health Systems',
  description:
    'Join our community or get in touch with OHC for demos, partnerships, and support.',
  keywords: 'OHC community, open health contact, healthcare collaboration',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Join our community or get in touch.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Connect with healthcare innovators, collaborate on open health
            systems, and help us build technology that serves everyone.
          </p>
        </div>
      </Container>
    </div>
  )
}

function CommunitySection() {
  return (
    <Container className="py-24">
      <div className="text-center">
        <Subheading>Join our Community</Subheading>
        <Heading
          as="h2"
          className="mx-auto mt-2 max-w-4xl font-display tracking-tight"
        >
          Connect, collaborate, and create change with like-minded innovators in
          our Slack community, dedicated to advancing healthcare through
          technology.
        </Heading>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
            <svg
              className="h-8 w-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM15.165 5.042a2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.521h-2.52V5.042h2.52zM15.165 6.313a2.528 2.528 0 0 1 2.522 2.521 2.528 2.528 0 0 1-2.522 2.521H8.834a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.331z" />
            </svg>
          </div>
          <h3 className="mb-4 text-3xl font-bold text-gray-900">
            Become a Member of Our Community
          </h3>
          <p className="mb-8 text-xl text-gray-600">Start Collaborating</p>
          <Button
            href="https://slack.ohc.network"
            target="_blank"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg hover:from-blue-700 hover:to-indigo-700"
          >
            Join Slack Community
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
          <Subheading>Get in Touch</Subheading>
          <Heading
            as="h2"
            className="mx-auto mt-2 max-w-4xl font-display tracking-tight"
          >
            Email us for demos, partnerships, and support
          </Heading>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-12 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-600 to-gray-800">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-3xl font-bold text-gray-900">
              Contact Us
            </h3>
            <p className="mb-8 text-xl text-gray-600">
              We typically respond within a week.
            </p>
            <Button
              href="mailto:support@ohc.network"
              className="bg-gradient-to-r from-gray-800 to-gray-900 px-8 py-4 text-lg hover:from-gray-900 hover:to-black"
            >
              support@ohc.network
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function AdditionalInfoSection() {
  return (
    <Container className="py-24">
      <div className="text-center">
        <Subheading>Other ways to connect</Subheading>
        <Heading
          as="h2"
          className="mx-auto mt-2 max-w-4xl font-display tracking-tight"
        >
          Explore our resources and stay updated
        </Heading>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gray-600 to-gray-800">
            <svg
              className="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <h3 className="mb-4 text-xl font-semibold text-gray-900">GitHub</h3>
          <p className="mb-6 text-gray-600">
            Explore our open source code and contribute to the project
          </p>
          <Button
            variant="secondary"
            href="https://github.com/ohcnetwork"
            target="_blank"
          >
            View repository
          </Button>
        </div>

        <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            Developer Resources
          </h3>
          <p className="mb-6 text-gray-600">
            Documentation, guides, and technical resources
          </p>
          <Button variant="secondary" href="/developers">
            View resources
          </Button>
        </div>

        <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-100 p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-700">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
              />
            </svg>
          </div>
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            The Network
          </h3>
          <p className="mb-6 text-gray-600">
            Learn about our global network of healthcare innovators
          </p>
          <Button variant="secondary" href="/network">
            Explore network
          </Button>
        </div>
      </div>
    </Container>
  )
}

function FooterNote() {
  return (
    <Container className="py-12">
      <div className="text-center">
        <p className="text-sm text-gray-600">
          OHC stewards healthcare <strong>Digital Public Goods</strong>.{' '}
          <strong>MIT License.</strong> Data ownership remains with deploying
          governments and institutions.
        </p>
      </div>
    </Container>
  )
}

export default function Contact() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <CommunitySection />
        <ContactSection />
        <AdditionalInfoSection />
        <FooterNote />
      </main>
      <Footer />
    </div>
  )
}
