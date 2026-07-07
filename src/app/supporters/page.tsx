import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { ArrowRight, HeartHandshake, Wrench } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supporters - Technology Partners Behind OHC',
  description:
    'The technology partners contributing software, tools, and infrastructure that volunteers use to build, upgrade, and maintain Open Healthcare Network products.',
  keywords:
    'OHC supporters, open healthcare technology partners, open source sponsors, CARE platform supporters',
}

type Supporter = { name: string; image: string; url: string }

const currentSupporters: Supporter[] = [
  { name: 'GitHub', image: 'github.png', url: 'https://github.com' },
  {
    name: 'Cloudflare',
    image: 'cloudflare.svg',
    url: 'https://www.cloudflare.com',
  },
  { name: 'OpenAI', image: 'openai.svg', url: 'https://www.openai.com' },
  { name: 'Slack', image: 'slack.svg', url: 'https://slack.com' },
  {
    name: 'Digital Ocean',
    image: 'digitalocean.svg',
    url: 'https://www.digitalocean.com?utm_medium=opensource&utm_source=open-healthcare-network',
  },
  {
    name: 'One Password',
    image: 'onepassword.svg',
    url: 'https://1password.com',
  },
  { name: 'Sentry', image: 'sentry.svg', url: 'https://sentry.io' },
  { name: 'Cypress', image: 'cypress.svg', url: 'https://cypress.io' },
  {
    name: 'BrowserStack',
    image: 'browserstack.png',
    url: 'https://browserstack.com',
  },
  { name: 'GitBook', image: 'gitbook.png', url: 'https://www.gitbook.com' },
  {
    name: 'Atlassian',
    image: 'atlassian.svg',
    url: 'https://www.atlassian.com',
  },
  {
    name: 'Jet Brains',
    image: 'jetbrains.svg',
    url: 'https://www.jetbrains.com',
  },
]

const pastSupporters: Supporter[] = [
  {
    name: 'Amazon Web Services',
    image: 'aws.svg',
    url: 'https://aws.amazon.com',
  },
  { name: 'Netlify', image: 'netlify.svg', url: 'https://www.netlify.com' },
  { name: 'Vercel', image: 'vercel.svg', url: 'https://vercel.com' },
  { name: 'CircleCI', image: 'circleci.svg', url: 'https://circleci.com' },
  { name: 'Exotel', image: 'exotel.svg', url: 'https://exotel.com' },
  {
    name: 'GitKraken',
    image: 'gitkraken.png',
    url: 'https://www.gitkraken.com',
  },
  { name: 'Heroku', image: 'heroku.svg', url: 'https://www.heroku.com' },
  { name: 'EUNOIANS', image: 'eunoians.png', url: 'https://eunoians.com' },
  { name: 'MapBox', image: 'mapbox.svg', url: 'https://www.mapbox.com' },
  { name: 'New Relic', image: 'newrelic.svg', url: 'https://newrelic.com' },
  { name: 'Riafy', image: 'riafy.png', url: 'https://riafy.me' },
  {
    name: 'Wowmakers',
    image: 'wowmakers.jpeg',
    url: 'https://www.wowmakers.com',
  },
]

function SupporterLogos({ supporters }: { supporters: Supporter[] }) {
  return (
    <div className="mt-16 flex flex-wrap items-center gap-x-12 gap-y-8">
      {supporters.map((supporter) => (
        <a
          key={supporter.name}
          href={supporter.url}
          target="_blank"
          rel="noopener noreferrer"
          title={supporter.name}
          className="flex items-center justify-center"
        >
          <img
            src={'/logos/technology/' + supporter.image}
            alt={supporter.name}
            className="h-12 w-auto max-w-36 object-contain opacity-62 grayscale saturate-[0.75] transition hover:opacity-100 hover:grayscale-0 hover:saturate-100"
          />
        </a>
      ))}
    </div>
  )
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>Supporters</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            The partners behind the commons.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Technology partners contribute software, tools, and infrastructure
            that volunteers use to build, upgrade, and maintain Open Healthcare
            Network products.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/support"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>Become a supporter</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="mailto:finance@ohc.network"
              className="w-full sm:w-auto"
            >
              Contact finance
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CurrentSupportersSection() {
  return (
    <Container className="py-24">
      <div className="max-w-4xl">
        <Subheading>Current supporters</Subheading>
        <Heading as="h2" className="mt-2">
          Contributing to the commons today.
        </Heading>
        <p className="mt-6 text-lg/7 text-gray-600">
          These technology partners are currently contributing software
          technologies and tools that volunteers utilize to build, upgrade, and
          maintain Open Healthcare Network products.
        </p>
      </div>
      <SupporterLogos supporters={currentSupporters} />
    </Container>
  )
}

function PastSupportersSection() {
  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading>Past supporters</Subheading>
          <Heading as="h2" className="mt-2">
            Support we remain grateful for.
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">
            We&apos;re grateful for the support these partners have provided in
            the past, contributing to the growth and success of Open Healthcare
            Network.
          </p>
        </div>
        <SupporterLogos supporters={pastSupporters} />
      </Container>
    </div>
  )
}

function BecomeSupporterSection() {
  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Subheading dark>Join them</Subheading>
            <Heading as="h2" dark className="mt-2">
              Support the infrastructure open healthcare runs on.
            </Heading>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="/support"
              className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <HeartHandshake className="size-6 text-lime-200" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                Fund the commons
              </h3>
              <p className="mt-3 text-sm/6 text-white/65">
                Sponsorships, grants, and foundation membership.
              </p>
            </a>
            <a
              href="mailto:finance@ohc.network"
              className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <Wrench className="size-6 text-lime-200" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                Contribute technology
              </h3>
              <p className="mt-3 text-sm/6 text-white/65">
                Offer software, tools, or infrastructure credits.
              </p>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Supporters() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <CurrentSupportersSection />
        <PastSupportersSection />
        <BecomeSupporterSection />
      </main>
      <Footer />
    </div>
  )
}
